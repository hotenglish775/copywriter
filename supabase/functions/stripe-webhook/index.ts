import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, stripe-signature',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const signature = req.headers.get('stripe-signature')
    const body = await req.text()
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')

    if (!signature || !webhookSecret) {
      return new Response('Missing signature or webhook secret', { status: 400 })
    }

    // Verify webhook signature
    const isValid = await verifyStripeSignature(body, signature, webhookSecret)
    if (!isValid) {
      return new Response('Invalid signature', { status: 400 })
    }

    const event = JSON.parse(body)

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object
        const orderId = session.metadata.order_id

        // Update order status to completed
        const { error: updateError } = await supabase
          .from('orders')
          .update({
            status: 'completed',
            stripe_payment_intent_id: session.payment_intent,
            completed_at: new Date().toISOString()
          })
          .eq('id', orderId)

        if (updateError) {
          console.error('Failed to update order:', updateError)
          return new Response('Failed to update order', { status: 500 })
        }

        console.log(`Order ${orderId} completed successfully`)
        break

      case 'checkout.session.expired':
        const expiredSession = event.data.object
        const expiredOrderId = expiredSession.metadata.order_id

        // Update order status to expired
        await supabase
          .from('orders')
          .update({ status: 'expired' })
          .eq('id', expiredOrderId)

        console.log(`Order ${expiredOrderId} expired`)
        break

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object
        
        // Find order by payment intent and update status
        const { data: orders } = await supabase
          .from('orders')
          .select('id')
          .eq('stripe_payment_intent_id', failedPayment.id)

        if (orders && orders.length > 0) {
          await supabase
            .from('orders')
            .update({ status: 'failed' })
            .eq('id', orders[0].id)
        }

        console.log(`Payment failed for intent ${failedPayment.id}`)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Webhook error:', error)
    return new Response('Webhook error', { status: 500 })
  }
})

async function verifyStripeSignature(
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  try {
    const encoder = new TextEncoder()
    const secretBytes = encoder.encode(secret)
    const payloadBytes = encoder.encode(payload)

    const key = await crypto.subtle.importKey(
      'raw',
      secretBytes,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    )

    // Extract timestamp and signature from header
    const elements = signature.split(',')
    let timestamp = ''
    let sig = ''

    for (const element of elements) {
      const [key, value] = element.split('=')
      if (key === 't') timestamp = value
      if (key === 'v1') sig = value
    }

    if (!timestamp || !sig) return false

    // Create signed payload
    const signedPayload = timestamp + '.' + payload
    const signedPayloadBytes = encoder.encode(signedPayload)

    // Convert hex signature to bytes
    const signatureBytes = new Uint8Array(
      sig.match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []
    )

    return await crypto.subtle.verify(
      'HMAC',
      key,
      signatureBytes,
      signedPayloadBytes
    )
  } catch (error) {
    console.error('Signature verification error:', error)
    return false
  }
}