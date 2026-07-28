/**
 * src/admin/components/EmptyState.jsx
 *
 * Shown when a list/table has no data.
 *
 * Props:
 *   icon      {string}    — large emoji/icon
 *   title     {string}    — heading
 *   message   {string}    — body text
 *   action    {ReactNode} — optional CTA button
 */

import React, { memo } from 'react';

const EmptyState = memo(function EmptyState({
  icon = '📭',
  title = 'Nothing here yet',
  message = 'Get started by creating your first item.',
  action,
}) {
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
      role="status"
      aria-label={title}
    >
      <div style={{ fontSize: 52, marginBottom: 18, lineHeight: 1 }}>{icon}</div>

      <h3
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: '#0f172a',
          margin: '0 0 8px',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: 13.5,
          color: '#64748b',
          margin: '0 0 24px',
          maxWidth: 360,
          lineHeight: 1.6,
        }}
      >
        {message}
      </p>

      {action && action}
    </div>
  );
});

export default EmptyState;
