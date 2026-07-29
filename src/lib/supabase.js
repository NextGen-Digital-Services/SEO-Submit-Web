/**
 * src/lib/supabase.js
 *
 * Singleton Supabase client instance.
 * Uses env vars defined in .env:
 *   VITE_SUPABASE_URL
 *   VITE_SUPABASE_PUBLISHABLE_KEY
 *
 * Import this wherever you need database / auth / storage access.
 * Never instantiate createClient() elsewhere — always import from here.
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    '[Supabase] Missing environment variables. ' +
      'Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or VITE_SUPABASE_PUBLISHABLE_KEY) are set in your .env file.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    // Persist session in localStorage so the user stays logged in on refresh.
    persistSession: true,
    // Auto-refresh the JWT before it expires.
    autoRefreshToken: true,
    // Detect OAuth redirects automatically.
    detectSessionInUrl: true,
  },
});

export default supabase;
