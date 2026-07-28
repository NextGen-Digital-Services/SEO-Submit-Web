/**
 * src/admin/context/AuthContext.jsx
 *
 * Provides global authentication state for the CMS.
 *
 * On mount:
 *   1. Calls supabase.auth.getSession() to restore any persisted session.
 *   2. Subscribes to onAuthStateChange for real-time token refresh & tab-sync.
 *
 * Exposes via context:
 *   user     — Supabase User object | null
 *   session  — Supabase Session object | null
 *   loading  — boolean (true while restoring session on first mount)
 *   signIn   — async (email, password) => { error }
 *   signOut  — async () => void
 */

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../../lib/supabase';

// ─── Context ────────────────────────────────────────────────────────────────

export const AuthContext = createContext(null);

// ─── Provider ────────────────────────────────────────────────────────────────

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [session, setSession] = useState(null);
  // Start as true so ProtectedRoute waits before redirecting
  const [loading, setLoading] = useState(true);

  // ── Session restore on mount ─────────────────────────────────────────────
  useEffect(() => {
    let mounted = true;

    // 1. Restore any existing session from localStorage
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      if (!mounted) return;
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
    });

    // 2. Subscribe to future auth changes (login, logout, token refresh, tab-sync)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, s) => {
        if (!mounted) return;
        setSession(s);
        setUser(s?.user ?? null);
        // Loading is already false after the getSession() above,
        // but guard just in case the event fires first.
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // ── Sign In ──────────────────────────────────────────────────────────────
  const signIn = useCallback(async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  }, []);

  // ── Sign Out ─────────────────────────────────────────────────────────────
  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    // onAuthStateChange will clear user/session automatically
  }, []);

  // ── Context value ────────────────────────────────────────────────────────
  const value = {
    user,
    session,
    loading,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
