import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { C, F } from '../styles/tokens';
import Logo from '../assets/Logo/Logo1_result.webp';
import { signIn } from '../services/authService';

export const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const { data, error } = await signIn(email, password);
      setIsLoading(false);

      if (error) {
        setErrorMessage(error.message || 'Login Failed. Please check your credentials.');
      } else if (data?.user || data?.session) {
        setSuccessMessage('Login Successful! Redirecting to Dashboard...');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 400);
      }
    } catch (err) {
      setIsLoading(false);
      setErrorMessage(err.message || 'Network Error. Could not connect to authentication server.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#F8FAFC',
        backgroundImage: `
          radial-gradient(at 0% 0%, rgba(0, 87, 255, 0.05) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(255, 214, 0, 0.08) 0px, transparent 50%),
          radial-gradient(at 50% 100%, rgba(10, 22, 40, 0.04) 0px, transparent 50%)
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '24px',
        boxSizing: 'border-box',
        fontFamily: F.body,
      }}
    >
      {/* Decorative ambient background spheres with smooth framer-motion pulse */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'rgba(0, 87, 255, 0.06)',
          filter: 'blur(90px)',
          top: '10%',
          left: '15%',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          position: 'absolute',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'rgba(255, 214, 0, 0.08)',
          filter: 'blur(80px)',
          bottom: '10%',
          right: '15%',
          pointerEvents: 'none',
        }}
      />

      {/* Main Glassmorphism Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '430px',
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          padding: '44px 36px',
          boxShadow: '0 10px 40px rgba(10, 22, 40, 0.04)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <img
              src={Logo}
              alt="SEO Submit Web Logo"
              width="36"
              height="36"
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: F.display,
                fontWeight: 600,
                fontSize: '19px',
                letterSpacing: '-0.01em',
                color: C.navy,
              }}
            >
              SEO SUBMIT<span style={{ color: C.blue, fontWeight: 600 }}> WEB</span>
            </span>
          </div>

          <h1
            style={{
              fontFamily: F.display,
              fontWeight: 600,
              fontSize: '22px',
              color: '#0F172A',
              marginBottom: '6px',
              letterSpacing: '-0.01em',
            }}
          >
            Admin Portal
          </h1>
          <p
            style={{
              fontFamily: F.body,
              fontSize: '13.5px',
              color: '#64748B',
              fontWeight: 400,
            }}
          >
            Sign in to manage your website content
          </p>
        </div>

        {/* Error / Success Toast Feedback with AnimatePresence */}
        <AnimatePresence mode="wait">
          {errorMessage && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              style={{
                background: '#FFF1F2',
                border: '1px solid #FECDD3',
                color: '#E11D48',
                padding: '11px 14px',
                borderRadius: '14px',
                fontSize: '12.5px',
                fontFamily: F.body,
                fontWeight: 500,
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <i className="ti ti-alert-circle" style={{ fontSize: '16px', flexShrink: 0 }} />
              <span>{errorMessage}</span>
            </motion.div>
          )}

          {successMessage && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              style={{
                background: '#ECFDF5',
                border: '1px solid #A7F3D0',
                color: '#059669',
                padding: '11px 14px',
                borderRadius: '14px',
                fontSize: '12.5px',
                fontFamily: F.body,
                fontWeight: 500,
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <i className="ti ti-circle-check" style={{ fontSize: '16px', flexShrink: 0 }} />
              <span>{successMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Email Address */}
          <div>
            <label
              style={{
                display: 'block',
                fontFamily: F.body,
                fontWeight: 500,
                fontSize: '12.5px',
                color: '#334155',
                marginBottom: '6px',
              }}
            >
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@seosubmitweb.com"
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px 0 40px',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  fontFamily: F.body,
                  fontSize: '13.5px',
                  fontWeight: 400,
                  boxSizing: 'border-box',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = C.blue;
                  e.target.style.boxShadow = '0 0 0 3px rgba(0, 87, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E2E8F0';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <i
                className="ti ti-mail"
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94A3B8',
                  fontSize: '18px',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              style={{
                display: 'block',
                fontFamily: F.body,
                fontWeight: 500,
                fontSize: '12.5px',
                color: '#334155',
                marginBottom: '6px',
              }}
            >
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 42px 0 40px',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  fontFamily: F.body,
                  fontSize: '13.5px',
                  fontWeight: 400,
                  boxSizing: 'border-box',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = C.blue;
                  e.target.style.boxShadow = '0 0 0 3px rgba(0, 87, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E2E8F0';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <i
                className="ti ti-lock"
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94A3B8',
                  fontSize: '18px',
                  pointerEvents: 'none',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2px',
                }}
              >
                <i className={showPassword ? 'ti ti-eye-off' : 'ti ti-eye'} />
              </button>
            </div>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={!isLoading ? { scale: 1.015, backgroundColor: C.blue } : {}}
            whileTap={!isLoading ? { scale: 0.985 } : {}}
            type="submit"
            disabled={isLoading}
            style={{
              marginTop: '10px',
              width: '100%',
              padding: '12px',
              background: C.navy,
              color: C.white,
              fontFamily: F.body,
              fontWeight: 500,
              fontSize: '13.5px',
              border: 'none',
              borderRadius: '14px',
              cursor: isLoading ? 'wait' : 'pointer',
              boxShadow: '0 4px 14px rgba(10, 22, 40, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 0.2s ease',
            }}
          >
            {isLoading ? (
              <>
                <i className="ti ti-loader-2 spin" style={{ fontSize: '18px' }} />
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <i className="ti ti-arrow-right" style={{ fontSize: '16px' }} />
              </>
            )}
          </motion.button>
        </form>

        {/* Footer Brand Tag */}
        <div style={{ marginTop: '28px', textAlign: 'center' }}>
          <span style={{ fontSize: '11.5px', color: '#94A3B8', fontFamily: F.body, fontWeight: 400 }}>
            SEO Submit Web © 2026 • Supabase Authenticated Portal
          </span>
        </div>
      </motion.div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 0.8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AdminLoginPage;
