/**
 * src/admin/components/StatCard.jsx
 *
 * KPI stat card used on the dashboard.
 *
 * Props:
 *   label      {string}   — metric name
 *   value      {number|string|null}  — stat value (null = loading)
 *   icon       {string}   — emoji or char
 *   color      {string}   — 'indigo' | 'green' | 'orange' | 'blue' | 'purple' | 'rose'
 *   trend      {number}   — optional percentage change (positive = green, negative = red)
 *   loading    {boolean}
 *   href       {string}   — optional link to full page
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import LoadingSkeleton from './LoadingSkeleton';

const COLOR_MAP = {
  indigo: { bg: 'rgba(99,102,241,0.12)',  text: '#6366f1' },
  green:  { bg: 'rgba(16,185,129,0.12)',  text: '#10b981' },
  orange: { bg: 'rgba(245,158,11,0.12)',  text: '#f59e0b' },
  blue:   { bg: 'rgba(59,130,246,0.12)',  text: '#3b82f6' },
  purple: { bg: 'rgba(168,85,247,0.12)', text: '#a855f7' },
  rose:   { bg: 'rgba(244,63,94,0.12)',  text: '#f43f5e' },
};

const StatCard = memo(function StatCard({
  label,
  value,
  icon,
  color = 'indigo',
  trend,
  loading = false,
  href,
}) {
  const c = COLOR_MAP[color] || COLOR_MAP.indigo;

  const body = (
    <div
      className="cms-stat-card"
      style={{
        cursor: href ? 'pointer' : 'default',
        textDecoration: 'none',
      }}
    >
      {/* Icon box */}
      <div
        className="cms-stat-icon"
        style={{ background: c.bg }}
        aria-hidden="true"
      >
        <span style={{ fontSize: 20, lineHeight: 1 }}>{icon}</span>
      </div>

      {/* Data */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {loading ? (
          <>
            <LoadingSkeleton height={26} width="55%" style={{ marginBottom: 8 }} />
            <LoadingSkeleton height={12} width="72%" />
          </>
        ) : (
          <>
            <div
              className="cms-stat-value"
              aria-label={`${label}: ${value ?? 0}`}
            >
              {value !== null && value !== undefined
                ? Number(value).toLocaleString()
                : '—'}
            </div>
            <div className="cms-stat-label">{label}</div>

            {/* Trend badge */}
            {trend !== undefined && trend !== null && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 3,
                  marginTop: 6,
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: trend >= 0 ? '#16a34a' : '#dc2626',
                }}
              >
                {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
                <span
                  style={{ color: '#94a3b8', fontWeight: 400, fontSize: 11 }}
                >
                  {' '}vs last month
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link to={href} style={{ textDecoration: 'none', display: 'block' }}>
        {body}
      </Link>
    );
  }

  return body;
});

export default StatCard;
