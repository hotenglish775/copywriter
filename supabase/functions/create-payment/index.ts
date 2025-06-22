import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface PaymentRequest {
  fullName: string
  email: string
  phone?: string
  paymentMethod: 'stripe' | 'cryptomus'
  product: {
    id: string
    title: string
    price: string
    description: string
  }
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

    const { fullName, email, phone, paymentMethod, product }: PaymentRequest = await req.json()

    // Validate required fields
    if (!fullName || !email || !paymentMethod || !product) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Extract price number from string (e.g., "$299" -> 299)
    const priceMatch = product.price.match(/\d+/)
    const priceAmount = priceMatch ? parseInt(priceMatch[0]) : 0

    if (priceAmount === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid product price' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create order record
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_name: fullName,
        customer_email: email,
        customer_phone: phone,
        product_id: product.id,
        product_title: product.title,
        product_description: product.description,
        amount: priceAmount,
        currency: 'USD',
        payment_method: paymentMethod,
        status: 'pending'
      })
      .select()
      .single()

    if (orderError) {
      console.error('Order creation error:', orderError)
      return new Response(
        JSON.stringify({ error: 'Failed to create order' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (paymentMethod === 'stripe') {
      // Create Stripe Checkout Session
      const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get('STRIPE_SECRET_KEY')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'payment_method_types[]': 'card',
          'line_items[0][price_data][currency]': 'usd',
          'line_items[0][price_data][product_data][name]': product.title,
          'line_items[0][price_data][product_data][description]': product.description,
          'line_items[0][price_data][unit_amount]': (priceAmount * 100).toString(),
          'line_items[0][quantity]': '1',
          'mode': 'payment',
          'success_url': `${req.headers.get('origin')}/payment/success?session_id={CHECKOUT_SESSION_ID}&order_id=${order.id}`,
          'cancel_url': `${req.headers.get('origin')}/payment/cancel?order_id=${order.id}`,
          'customer_email': email,
          'metadata[order_id]': order.id,
          'metadata[customer_name]': fullName,
          'metadata[product_id]': product.id,
        }),
      })

      if (!stripeResponse.ok) {
        const errorText = await stripeResponse.text()
        console.error('Stripe error:', errorText)
        return new Response(
          JSON.stringify({ error: 'Failed to create Stripe session' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      const stripeSession = await stripeResponse.json()

      // Update order with Stripe session ID
      await supabase
        .from('orders')
        .update({ 
          stripe_session_id: stripeSession.id,
          payment_url: stripeSession.url 
        })
        .eq('id', order.id)

      return new Response(
        JSON.stringify({ 
          success: true, 
          checkoutUrl: stripeSession.url,
          orderId: order.id 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )

    } else if (paymentMethod === 'cryptomus') {
      // Create Cryptomus payment
      const cryptomusPayload = {
        amount: priceAmount.toString(),
        currency: 'USD',
        order_id: order.id,
        url_return: `${req.headers.get('origin')}/payment/success?order_id=${order.id}`,
        url_callback: `${req.headers.get('origin')}/api/webhooks/cryptomus`,
        is_payment_multiple: false,
        lifetime: 7200, // 2 hours
        to_currency: 'USDT', // Default to USDT
      }

      const cryptomusResponse = await fetch('https://api.cryptomus.com/v1/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'merchant': Deno.env.get('CRYPTOMUS_MERCHANT_ID') ?? '',
          'sign': await generateCryptomusSignature(JSON.stringify(cryptomusPayload)),
        },
        body: JSON.stringify(cryptomusPayload),
      })

      if (!cryptomusResponse.ok) {
        const errorText = await cryptomusResponse.text()
        console.error('Cryptomus error:', errorText)
        return new Response(
          JSON.stringify({ error: 'Failed to create crypto payment' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      const cryptomusResult = await cryptomusResponse.json()

      // Update order with Cryptomus payment info
      await supabase
        .from('orders')
        .update({ 
          cryptomus_payment_id: cryptomusResult.result.uuid,
          payment_url: cryptomusResult.result.url 
        })
        .eq('id', order.id)

      return new Response(
        JSON.stringify({ 
          success: true, 
          paymentUrl: cryptomusResult.result.url,
          paymentId: cryptomusResult.result.uuid,
          orderId: order.id 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ error: 'Invalid payment method' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Payment creation error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

async function generateCryptomusSignature(data: string): Promise<string> {
  const apiKey = Deno.env.get('CRYPTOMUS_API_KEY') ?? ''
  const encoder = new TextEncoder()
  const keyData = encoder.encode(apiKey)
  const messageData = encoder.encode(data)
  
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData)
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}