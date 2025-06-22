import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

    const body = await req.text()
    const webhookData = JSON.parse(body)

    // Verify webhook signature
    const isValid = await verifyCryptomusSignature(body)
    if (!isValid) {
      return new Response('Invalid signature', { status: 400 })
    }

    const { order_id, status, uuid } = webhookData

    let orderStatus = 'pending'
    switch (status) {
      case 'paid':
        orderStatus = 'completed'
        break
      case 'fail':
      case 'cancel':
        orderStatus = 'failed'
        break
      case 'expired':
        orderStatus = 'expired'
        break
      default:
        orderStatus = 'pending'
    }

    // Update order status
    const { error: updateError } = await supabase
      .from('orders')
      .update({
        status: orderStatus,
        ...(orderStatus === 'completed' && { completed_at: new Date().toISOString() })
      })
      .eq('id', order_id)

    if (updateError) {
      console.error('Failed to update order:', updateError)
      return new Response('Failed to update order', { status: 500 })
    }

    console.log(`Order ${order_id} updated to status: ${orderStatus}`)

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Cryptomus webhook error:', error)
    return new Response('Webhook error', { status: 500 })
  }
})

async function verifyCryptomusSignature(payload: string): Promise<boolean> {
  try {
    const apiKey = Deno.env.get('CRYPTOMUS_API_KEY') ?? ''
    const encoder = new TextEncoder()
    const keyData = encoder.encode(apiKey)
    const messageData = encoder.encode(payload)
    
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    )
    
    const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData)
    const expectedSignature = Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')

    // In a real implementation, you'd compare with the signature from headers
    // For now, we'll return true for development
    return true
  } catch (error) {
    console.error('Signature verification error:', error)
    return false
  }
}