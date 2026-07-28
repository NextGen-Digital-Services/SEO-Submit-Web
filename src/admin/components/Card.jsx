/**
 * src/admin/components/Card.jsx
 *
 * Reusable CMS card component with optional header, footer, and padding control.
 *
 * Props:
 *   title       {string}          — card header title
 *   actions     {ReactNode}       — right side of header
 *   children    {ReactNode}       — card body content
 *   footer      {ReactNode}       — optional footer slot
 *   noPadding   {boolean}         — removes body padding (for tables)
 *   style       {object}          — extra card styles
 *   className   {string}
 */

import React, { memo } from 'react';

const Card = memo(function Card({
  title,
  actions,
  children,
  footer,
  noPadding = false,
  style = {},
  className = '',
}) {
  return (
    <div className={`cms-card ${className}`} style={style}>
      {/* Header */}
      {(title || actions) && (
        <div className="cms-card-header">
          {title && <h2 className="cms-card-title">{title}</h2>}
          {actions && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {actions}
            </div>
          )}
        </div>
      )}

      {/* Body */}
      <div className={noPadding ? '' : 'cms-card-body'}>{children}</div>

      {/* Footer */}
      {footer && (
        <div
          style={{
            padding: '14px 24px',
            borderTop: '1px solid var(--cms-card-border)',
            background: '#fafafa',
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
});

export default Card;
