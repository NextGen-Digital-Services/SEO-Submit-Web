/**
 * src/admin/routes/ProtectedRoute.jsx
 *
 * Guards all authenticated CMS pages.
 *
 * Behaviour:
 *   loading === true  → show full-page <Spinner> (session being restored)
 *   user === null     → redirect to /cms/login (preserve intended path)
 *   user exists       → render children
 */

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Spinner from '../components/Spinner';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // While restoring session from localStorage, show a neutral spinner.
  // This prevents a flash-redirect to /cms/login on hard refresh.
  if (loading) {
    return <Spinner fullPage />;
  }

  // Not authenticated — redirect to login, preserving the intended destination
  // so we can redirect back after successful login.
  if (!user) {
    return (
      <Navigate
        to="/cms/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
