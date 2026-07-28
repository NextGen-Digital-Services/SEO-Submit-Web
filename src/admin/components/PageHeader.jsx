/**
 * src/admin/components/PageHeader.jsx
 *
 * Reusable page title bar used at the top of every CMS page.
 *
 * Props:
 *   title       {string}           — main heading
 *   subtitle    {string}           — optional secondary line
 *   actions     {React.ReactNode}  — optional right-side buttons / controls
 *   breadcrumbs {Array<{label, href?}>} — optional breadcrumb trail
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, subtitle, actions, breadcrumbs }) {
  return (
    <div className="cms-page-header">
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="cms-breadcrumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <span className="cms-breadcrumb-sep" aria-hidden="true">
                  /
                </span>
              )}
              {crumb.href ? (
                <Link to={crumb.href} className="cms-breadcrumb-link">
                  {crumb.label}
                </Link>
              ) : (
                <span className="cms-breadcrumb-current">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}

      {/* Title row */}
      <div className="cms-page-header-row">
        <div>
          <h1 className="cms-page-title">{title}</h1>
          {subtitle && <p className="cms-page-subtitle">{subtitle}</p>}
        </div>
        {actions && <div className="cms-page-actions">{actions}</div>}
      </div>
    </div>
  );
}
