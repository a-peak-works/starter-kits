import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string; // Use service role key for server-side access

export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseKey);
}
