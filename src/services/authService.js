/**
 * src/services/authService.js
 *
 * Handles all Supabase Auth operations.
 * Currently exposes sign-in, sign-up, sign-out, and session helpers.
 *
 * Usage:
 *   import { signIn, signOut, getSession } from '../services/authService';
 */

import { supabase } from '../lib/supabase';

// ─── Sign Up ────────────────────────────────────────────────────────────────

/**
 * Register a new user with email + password.
 * @param {string} email
 * @param {string} password
 * @returns {{ data: object|null, error: object|null }}
 */
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}

// ─── Sign In ────────────────────────────────────────────────────────────────

/**
 * Sign in an existing user with email + password.
 * @param {string} email
 * @param {string} password
 * @returns {{ data: object|null, error: object|null }}
 */
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// ─── Sign Out ───────────────────────────────────────────────────────────────

/**
 * Sign out the currently authenticated user.
 * @returns {{ error: object|null }}
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

// ─── Session ────────────────────────────────────────────────────────────────

/**
 * Get the current active session (or null if not logged in).
 * @returns {{ data: { session: object|null }, error: object|null }}
 */
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  return { data, error };
}

/**
 * Get the current user object (or null if not logged in).
 * @returns {{ data: { user: object|null }, error: object|null }}
 */
export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
}

// ─── Auth State Listener ─────────────────────────────────────────────────────

/**
 * Subscribe to auth state changes (sign in / sign out / token refresh).
 * Returns an unsubscribe function — call it in cleanup (useEffect return).
 *
 * @param {(event: string, session: object|null) => void} callback
 * @returns {() => void} unsubscribe
 */
export function onAuthStateChange(callback) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(callback);
  return () => subscription.unsubscribe();
}
