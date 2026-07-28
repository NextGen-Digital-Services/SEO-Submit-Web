/**
 * src/admin/hooks/useAuth.js
 *
 * Convenience hook — consumes AuthContext.
 * Throws a descriptive error if used outside AuthProvider.
 *
 * Usage:
 *   const { user, signIn, signOut, loading, isAuthenticated } = useAuth();
 */

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      '[useAuth] Must be used inside <AuthProvider>. ' +
        'Wrap your CMS tree with AuthProvider.'
    );
  }

  return ctx;
}
