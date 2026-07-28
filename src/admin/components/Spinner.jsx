/**
 * src/admin/components/Spinner.jsx
 *
 * Reusable loading spinner for the CMS.
 *
 * Props:
 *   fullPage {boolean} — centres spinner in the full viewport (used by ProtectedRoute)
 *   size     {number}  — diameter in px (default 40)
 *   color    {string}  — stroke colour (default CMS indigo)
 */

import React from 'react';

export default function Spinner({
  fullPage = false,
  size = 40,
  color = '#6366f1',
}) {
  const spinnerEl = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ animation: 'cms-spin 0.8s linear infinite' }}
      aria-label="Loading…"
      role="status"
    >
      <style>{`
        @keyframes cms-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="90 150"
        strokeDashoffset="-35"
      />
    </svg>
  );

  if (fullPage) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          zIndex: 9999,
        }}
      >
        {spinnerEl}
      </div>
    );
  }

  return spinnerEl;
}
