/*
  # Create orders table for payment processing

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `customer_email` (text)
      - `customer_phone` (text, optional)
      - `product_id` (text)
      - `product_title` (text)
      - `product_description` (text)
      - `amount` (integer) - amount in cents/smallest currency unit
      - `currency` (text) - currency code (USD, EUR, etc.)
      - `payment_method` (text) - stripe or cryptomus
      - `status` (text) - pending, completed, failed, expired, cancelled
      - `stripe_session_id` (text, optional)
      - `stripe_payment_intent_id` (text, optional)
      - `cryptomus_payment_id` (text, optional)
      - `payment_url` (text, optional)
      - `created_at` (timestamp)
      - `completed_at` (timestamp, optional)

  2. Security
    - Enable RLS on orders table
    - Add policy for inserting orders (public can insert)
    - Add policy for reading orders (authenticated users only)
*/

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text,
  product_id text NOT NULL,
  product_title text NOT NULL,
  product_description text NOT NULL,
  amount integer NOT NULL,
  currency text NOT NULL DEFAULT 'USD',
  payment_method text NOT NULL CHECK (payment_method IN ('stripe', 'cryptomus')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'expired', 'cancelled')),
  stripe_session_id text,
  stripe_payment_intent_id text,
  cryptomus_payment_id text,
  payment_url text,
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow public to insert orders (for payment processing)
CREATE POLICY "Anyone can insert orders"
  ON orders
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read orders
CREATE POLICY "Authenticated users can read orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow service role to update orders (for webhooks)
CREATE POLICY "Service role can update orders"
  ON orders
  FOR UPDATE
  TO service_role
  USING (true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS orders_customer_email_idx ON orders(customer_email);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status);
CREATE INDEX IF NOT EXISTS orders_stripe_session_id_idx ON orders(stripe_session_id);
CREATE INDEX IF NOT EXISTS orders_cryptomus_payment_id_idx ON orders(cryptomus_payment_id);