/**
 * src/admin/components/ErrorState.jsx
 *
 * Shown when a data-fetch fails.
 *
 * Props:
 *   message   {string}    — error description
 *   onRetry   {function}  — optional retry callback
 */

import React, { memo } from 'react';

const ErrorState = memo(function ErrorState({ message, onRetry }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
      }}
      role="alert"
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: 'rgba(239,68,68,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          marginBottom: 16,
        }}
        aria-hidden="true"
      >
        ⚠
      </div>

      <h3
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: '#0f172a',
          margin: '0 0 8px',
        }}
      >
        Something went wrong
      </h3>

      {message && (
        <p
          style={{
            fontSize: 13,
            color: '#ef4444',
            margin: '0 0 20px',
            maxWidth: 360,
            lineHeight: 1.5,
            fontFamily: 'monospace',
            background: '#fef2f2',
            padding: '8px 14px',
            borderRadius: 8,
            border: '1px solid #fca5a5',
          }}
        >
          {message}
        </p>
      )}

      {onRetry && (
        <button
          onClick={onRetry}
          className="cms-btn cms-btn-primary"
          style={{ fontFamily: 'inherit' }}
        >
          ↺ Try Again
        </button>
      )}
    </div>
  );
});

export default ErrorState;
