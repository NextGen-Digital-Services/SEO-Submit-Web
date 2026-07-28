/**
 * src/admin/components/LoadingSkeleton.jsx
 *
 * Reusable shimmer skeleton blocks.
 *
 * Props:
 *   width   {string|number}  default '100%'
 *   height  {string|number}  default 16
 *   radius  {string|number}  default 6
 *   style   {object}
 *
 * Usage:
 *   <LoadingSkeleton height={28} width={80} />
 *   <LoadingSkeleton height={120} />
 */

import React, { memo } from 'react';

const LoadingSkeleton = memo(function LoadingSkeleton({
  width = '100%',
  height = 16,
  radius = 6,
  style = {},
  ...rest
}) {
  return (
    <div
      className="cms-skeleton"
      style={{
        width,
        height,
        borderRadius: radius,
        ...style,
      }}
      aria-hidden="true"
      {...rest}
    />
  );
});

export default LoadingSkeleton;

// ─── Composite skeletons ───────────────────────────────────────────────────────

/** Skeleton for a single stat card */
export function StatCardSkeleton() {
  return (
    <div
      className="cms-stat-card"
      aria-label="Loading…"
      aria-busy="true"
    >
      <LoadingSkeleton width={46} height={46} radius={10} />
      <div style={{ flex: 1 }}>
        <LoadingSkeleton height={26} width="55%" style={{ marginBottom: 8 }} />
        <LoadingSkeleton height={12} width="70%" />
      </div>
    </div>
  );
}

/** Skeleton for a table row */
export function TableRowSkeleton({ cols = 4 }) {
  return (
    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} style={{ padding: '14px 16px' }}>
          <LoadingSkeleton height={14} width={i === 0 ? '80%' : '60%'} />
        </td>
      ))}
    </tr>
  );
}
