/**
 * src/admin/pages/LoginPage.jsx
 *
 * CMS Login page — no signup. Email + password only.
 *
 * Features:
 *   - Supabase signInWithPassword
 *   - Error message display
 *   - Loading button state
 *   - Session already active → redirect to /cms/dashboard
 *   - Premium dark SaaS design
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Spinner from '../components/Spinner';

// ─── Styles (inline — scoped to login page only) ──────────────────────────────
const S = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 24px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },

  // Decorative blobs
  blob1: {
    position: 'absolute',
    top: '-120px',
    right: '-80px',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  blob2: {
    position: 'absolute',
    bottom: '-100px',
    left: '-60px',
    width: '350px',
    height: '350px',
    background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },

  card: {
    width: '100%',
    maxWidth: 420,
    background: 'rgba(30, 41, 59, 0.9)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: '44px 40px',
    boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset',
    position: 'relative',
    zIndex: 1,
  },

  logoWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoIcon: {
    width: 54,
    height: 54,
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    borderRadius: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 26,
    marginBottom: 14,
    boxShadow: '0 8px 24px rgba(99,102,241,0.5)',
  },
  heading: {
    fontSize: 22,
    fontWeight: 800,
    color: '#f1f5f9',
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: '-0.02em',
  },
  subheading: {
    fontSize: 13.5,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 1.5,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  label: {
    fontSize: 12.5,
    fontWeight: 600,
    color: '#94a3b8',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    color: '#f1f5f9',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  inputFocus: {
    borderColor: '#6366f1',
    boxShadow: '0 0 0 3px rgba(99,102,241,0.2)',
  },

  // Error alert
  errorBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    padding: '12px 14px',
    background: 'rgba(239,68,68,0.1)',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: 10,
    color: '#fca5a5',
    fontSize: 13,
    lineHeight: 1.5,
  },
  errorIcon: {
    fontSize: 15,
    flexShrink: 0,
    marginTop: 1,
  },

  // Submit button
  submitBtn: {
    width: '100%',
    padding: '13px',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 16px rgba(99,102,241,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 6,
    fontFamily: 'inherit',
  },
  submitBtnDisabled: {
    opacity: 0.7,
    cursor: 'not-allowed',
    transform: 'none',
    boxShadow: 'none',
  },

  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    margin: '6px 0',
    color: '#334155',
    fontSize: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    background: 'rgba(255,255,255,0.06)',
  },

  footer: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 12,
    color: '#475569',
    lineHeight: 1.6,
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function LoginPage() {
  const { signIn, user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email,       setEmail]       = useState('');
  const [password,    setPassword]    = useState('');
  const [error,       setError]       = useState('');
  const [submitting,  setSubmitting]  = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [showPass,    setShowPass]    = useState(false);

  // If already authenticated, skip login page
  useEffect(() => {
    if (!loading && user) {
      const destination = location.state?.from?.pathname ?? '/cms/dashboard';
      navigate(destination, { replace: true });
    }
  }, [user, loading, navigate, location]);

  // While session is still being restored, show a spinner
  if (loading) return <Spinner fullPage />;

  // ── Submit ─────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    setSubmitting(true);
    try {
      const { error: signInError } = await signIn(email.trim(), password);

      if (signInError) {
        // Map Supabase errors to user-friendly messages
        if (signInError.message?.includes('Invalid login credentials')) {
          setError('Incorrect email or password. Please try again.');
        } else if (signInError.message?.includes('Email not confirmed')) {
          setError('Your email address is not confirmed. Check your inbox.');
        } else if (signInError.message?.toLowerCase().includes('rate limit')) {
          setError('Too many attempts. Please wait a moment and try again.');
        } else {
          setError(signInError.message ?? 'Sign in failed. Please try again.');
        }
        return;
      }

      // Success — AuthProvider's onAuthStateChange updates user → ProtectedRoute redirects
      const destination = location.state?.from?.pathname ?? '/cms/dashboard';
      navigate(destination, { replace: true });
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('[LoginPage] signIn error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  // ── Input style helpers ───────────────────────────────────────────────
  const inputStyle = (field) => ({
    ...S.input,
    ...(focusedField === field ? S.inputFocus : {}),
  });

  return (
    <div style={S.page}>
      {/* Decorative blobs */}
      <div style={S.blob1} aria-hidden="true" />
      <div style={S.blob2} aria-hidden="true" />

      <div style={S.card} role="main">
        {/* Logo & heading */}
        <div style={S.logoWrap}>
          <div style={S.logoIcon} aria-hidden="true">⚡</div>
          <h1 style={S.heading}>Welcome back</h1>
          <p style={S.subheading}>
            Sign in to manage your blog content
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={S.errorBox} role="alert" aria-live="assertive">
            <span style={S.errorIcon}>⚠</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate style={S.form}>
          {/* Email */}
          <div style={S.formGroup}>
            <label htmlFor="cms-email" style={S.label}>
              Email Address
            </label>
            <input
              id="cms-email"
              type="email"
              autoComplete="email"
              required
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              style={{
                ...inputStyle('email'),
                // Override public site's global input styles
                backgroundColor: 'rgba(15, 23, 42, 0.7) !important',
              }}
              disabled={submitting}
              aria-describedby={error ? 'cms-login-error' : undefined}
            />
          </div>

          {/* Password */}
          <div style={S.formGroup}>
            <label htmlFor="cms-password" style={S.label}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="cms-password"
                type={showPass ? 'text' : 'password'}
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField('')}
                style={{
                  ...inputStyle('password'),
                  paddingRight: 44,
                }}
                disabled={submitting}
              />
              {/* Show/hide toggle */}
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748b',
                  fontSize: 16,
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.2s',
                }}
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? '👁' : '👁‍🗨'}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            style={{
              ...S.submitBtn,
              ...(submitting ? S.submitBtnDisabled : {}),
            }}
            onMouseEnter={(e) => {
              if (!submitting) e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
            }}
          >
            {submitting ? (
              <>
                <Spinner size={18} color="#fff" />
                Signing in…
              </>
            ) : (
              'Sign In to CMS'
            )}
          </button>
        </form>

        {/* Footer note */}
        <p style={S.footer}>
          Access restricted to authorised administrators only.
          <br />
          No public registration available.
        </p>
      </div>
    </div>
  );
}
