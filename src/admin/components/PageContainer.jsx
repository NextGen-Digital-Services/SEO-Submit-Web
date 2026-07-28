/**
 * src/admin/components/PageContainer.jsx
 *
 * Standard wrapper for CMS page content.
 * Provides consistent max-width, padding, and vertical rhythm.
 *
 * Props:
 *   children  {ReactNode}
 *   narrow    {boolean}   — max-width 760px (forms, settings)
 *   style     {object}
 */

import React, { memo } from 'react';

const PageContainer = memo(function PageContainer({
  children,
  narrow = false,
  style = {},
}) {
  return (
    <div
      style={{
        maxWidth: narrow ? 760 : '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        ...style,
      }}
    >
      {children}
    </div>
  );
});

export default PageContainer;
