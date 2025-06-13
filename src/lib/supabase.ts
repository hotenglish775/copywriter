import { createClient } from '@supabase/supabase-js';

// These would normally come from environment variables
// For this demo, you'll need to set up Supabase and add your credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export interface BookingRecord {
  id?: string;
  full_name: string;
  email: string;
  project_type: string;
  budget: string;
  deadline?: string;
  project_details: string;
  created_at?: string;
}

export interface ContactRecord {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}