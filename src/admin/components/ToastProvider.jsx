/**
 * src/admin/components/ToastProvider.jsx
 *
 * Renders the floating toast notification stack.
 * Mount this once inside CMSRoot — it reads from UIContext.
 *
 * Toast types: success | error | warning | info
 */

import React, { memo } from 'react';
import { useUI } from '../hooks/useUI';

// ─── Icons per type ───────────────────────────────────────────────────────────
const ICONS = {
  success: '✓',
  error:   '✕',
  warning: '⚠',
  info:    'ℹ',
};

const COLORS = {
  success: { bg: '#f0fdf4', border: '#86efac', icon: '#16a34a', text: '#15803d' },
  error:   { bg: '#fef2f2', border: '#fca5a5', icon: '#dc2626', text: '#b91c1c' },
  warning: { bg: '#fffbeb', border: '#fcd34d', icon: '#d97706', text: '#b45309' },
  info:    { bg: '#eff6ff', border: '#93c5fd', icon: '#2563eb', text: '#1d4ed8' },
};

// ─── Single Toast ─────────────────────────────────────────────────────────────
const Toast = memo(function Toast({ toast, onRemove }) {
  const c = COLORS[toast.type] || COLORS.info;

  return (
    <div
      role="alert"
      aria-live="assertive"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        padding: '12px 14px',
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: 10,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        minWidth: 280,
        maxWidth: 400,
        fontFamily: "'Inter', sans-serif",
        animation: 'cms-toast-in 0.25s ease',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: c.icon,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          fontWeight: 700,
          flexShrink: 0,
          marginTop: 1,
        }}
        aria-hidden="true"
      >
        {ICONS[toast.type] || ICONS.info}
      </div>

      {/* Message */}
      <span
        style={{
          flex: 1,
          fontSize: 13.5,
          color: c.text,
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        {toast.message}
      </span>

      {/* Dismiss */}
      <button
        onClick={() => onRemove(toast.id)}
        aria-label="Dismiss notification"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: c.icon,
          fontSize: 16,
          lineHeight: 1,
          padding: '0 2px',
          opacity: 0.6,
          transition: 'opacity 0.15s',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => (e.target.style.opacity = '1')}
        onMouseLeave={(e) => (e.target.style.opacity = '0.6')}
      >
        ×
      </button>
    </div>
  );
});

// ─── Provider / Container ─────────────────────────────────────────────────────
export default function ToastProvider() {
  const { toasts, removeToast } = useUI();

  if (toasts.length === 0) return null;

  return (
    <>
      <style>{`
        @keyframes cms-toast-in {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      <div
        aria-label="Notifications"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          pointerEvents: 'none',
        }}
      >
        {toasts.map((t) => (
          <div key={t.id} style={{ pointerEvents: 'auto' }}>
            <Toast toast={t} onRemove={removeToast} />
          </div>
        ))}
      </div>
    </>
  );
}
