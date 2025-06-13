/*
  # Create bookings and contacts tables

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key) 
      - `full_name` (text)
      - `email` (text)
      - `project_type` (text)
      - `budget` (text)
      - `deadline` (date, optional)
      - `project_details` (text)
      - `created_at` (timestamp)
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text) 
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for inserting data (public can insert)
    - Add policies for reading data (authenticated users only)
*/

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  budget text NOT NULL,
  deadline date,
  project_details text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create contacts table  
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow public to insert bookings
CREATE POLICY "Anyone can insert bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow public to insert contacts
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read bookings
CREATE POLICY "Authenticated users can read bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to read contacts
CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);