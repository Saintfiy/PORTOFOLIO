import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://gsvanlmscuzgobscvgtf.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzdmFubG1zY3V6Z29ic2N2Z3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNDg0MTIsImV4cCI6MjA2ODYyNDQxMn0.7XENvxDS2U9On9K13Pe8f-5WpN0sZgVshAa_a3gW5MI';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Comment {
  id: string;
  name: string;
  comment: string;
  created_at: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}