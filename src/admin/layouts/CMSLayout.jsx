/**
 * src/admin/layouts/CMSLayout.jsx  (Part 2 — enhanced)
 *
 * Full CMS shell with:
 *   - Collapsible desktop sidebar (icon-only when collapsed)
 *   - Mobile drawer with overlay
 *   - Rich topbar with breadcrumb, search, notifications, avatar dropdown
 *   - Keyboard accessible navigation (focus rings, aria-labels)
 *   - UIContext integration (sidebar state, toasts, confirm dialog)
 *   - ToastProvider + ConfirmDialog mounted here
 */

import React, { useState, useCallback, useEffect, useRef, memo } from 'react';
import { NavLink, useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useUI } from '../hooks/useUI';
import Spinner from '../components/Spinner';
import ToastProvider from '../components/ToastProvider';
import ConfirmDialog from '../components/ConfirmDialog';
import './CMSLayout.css';

// ─── Nav config ───────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    section: 'Overview',
    items: [
      { to: '/cms/dashboard', label: 'Dashboard', icon: '⊞', end: true },
    ],
  },
  {
    section: 'Content',
    items: [
      { to: '/cms/blogs',      label: 'Blog Posts',  icon: '✍' },
      { to: '/cms/categories', label: 'Categories',  icon: '⊟' },
      { to: '/cms/tags',       label: 'Tags',        icon: '◇' },
    ],
  },
  {
    section: 'System',
    items: [
      { to: '/cms/settings', label: 'Settings', icon: '⚙' },
    ],
  },
];

// ─── Route → label map for topbar title ──────────────────────────────────────
const ROUTE_TITLES = {
  '/cms/dashboard':  'Dashboard',
  '/cms/blogs':      'Blog Posts',
  '/cms/blogs/new':  'New Post',
  '/cms/categories': 'Categories',
  '/cms/tags':       'Tags',
  '/cms/settings':   'Settings',
};

// ─── Sidebar Nav ──────────────────────────────────────────────────────────────
const SidebarNav = memo(function SidebarNav({ collapsed, onClose }) {
  return (
    <nav className="cms-sidebar-nav" aria-label="CMS navigation">
      {NAV_ITEMS.map(({ section, items }) => (
        <React.Fragment key={section}>
          {!collapsed && (
            <span className="cms-nav-section-label">{section}</span>
          )}
          {items.map(({ to, label, icon, end, badge }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              title={collapsed ? label : undefined}
              className={({ isActive }) =>
                'cms-nav-item' + (isActive ? ' active' : '') + (collapsed ? ' collapsed' : '')
              }
              onClick={onClose}
            >
              <span className="cms-nav-icon" aria-hidden="true">{icon}</span>
              {!collapsed && <span className="cms-nav-label">{label}</span>}
              {!collapsed && badge && (
                <span className="cms-nav-badge">{badge}</span>
              )}
            </NavLink>
          ))}
        </React.Fragment>
      ))}
    </nav>
  );
});

// ─── Avatar Dropdown ──────────────────────────────────────────────────────────
const AvatarDropdown = memo(function AvatarDropdown({ user, onLogout, loggingOut }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const email       = user?.email ?? '';
  const initials    = email.charAt(0).toUpperCase();
  const displayName = email.split('@')[0] ?? 'Admin';

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        className="cms-avatar-btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Account menu for ${email}`}
        type="button"
      >
        <div className="cms-topbar-dot" title="Session active" aria-hidden="true" />
        <div className="cms-topbar-avatar" aria-hidden="true">{initials}</div>
        <span className="cms-topbar-email">{displayName}</span>
        <span className="cms-avatar-chevron" aria-hidden="true">
          {open ? '▴' : '▾'}
        </span>
      </button>

      {open && (
        <div
          className="cms-avatar-dropdown"
          role="menu"
          aria-label="User menu"
        >
          {/* User info */}
          <div className="cms-dropdown-user-info">
            <div className="cms-dropdown-avatar" aria-hidden="true">{initials}</div>
            <div>
              <div className="cms-dropdown-name">{displayName}</div>
              <div className="cms-dropdown-email">{email}</div>
            </div>
          </div>

          <div className="cms-dropdown-divider" />

          <Link
            to="/cms/settings"
            className="cms-dropdown-item"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">⚙</span> Settings
          </Link>

          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="cms-dropdown-item"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">↗</span> View Website
          </Link>

          <div className="cms-dropdown-divider" />

          <button
            className="cms-dropdown-item danger"
            role="menuitem"
            onClick={() => { setOpen(false); onLogout(); }}
            disabled={loggingOut}
            type="button"
          >
            {loggingOut
              ? <Spinner size={14} color="#ef4444" />
              : <span aria-hidden="true">⇠</span>
            }
            {loggingOut ? 'Signing out…' : 'Sign Out'}
          </button>
        </div>
      )}
    </div>
  );
});

// ─── CMSLayout ────────────────────────────────────────────────────────────────
export default function CMSLayout({ children }) {
  const { user, signOut }              = useAuth();
  const { sidebarCollapsed, toggleSidebar } = useUI();
  const navigate   = useNavigate();
  const location   = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // Derive page title from current path
  const pageTitle =
    ROUTE_TITLES[location.pathname] ||
    ROUTE_TITLES[Object.keys(ROUTE_TITLES).find((k) => location.pathname.startsWith(k))] ||
    'CMS';

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // ── Handlers ────────────────────────────────────────────────────────────
  const handleLogout = useCallback(async () => {
    setLoggingOut(true);
    try {
      await signOut();
      navigate('/cms/login', { replace: true });
    } catch (err) {
      console.error('[CMSLayout] logout error:', err);
    } finally {
      setLoggingOut(false);
    }
  }, [signOut, navigate]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <div className="cms-root">
      <div className={`cms-shell${sidebarCollapsed ? ' sidebar-collapsed' : ''}`}>

        {/* ── Sidebar ────────────────────────────────────────────────── */}
        <aside
          className={`cms-sidebar${mobileOpen ? ' open' : ''}${sidebarCollapsed ? ' collapsed' : ''}`}
          aria-label="CMS sidebar navigation"
          role="navigation"
        >
          {/* Brand */}
          <div className="cms-sidebar-brand-wrap">
            <Link
              to="/cms/dashboard"
              className="cms-sidebar-brand"
              onClick={closeMobile}
              aria-label="SEO Submit CMS Dashboard"
            >
              <div className="cms-brand-icon" aria-hidden="true">⚡</div>
              {!sidebarCollapsed && (
                <div className="cms-brand-text">
                  <span className="cms-brand-name">SEO Submit</span>
                  <span className="cms-brand-sub">CMS</span>
                </div>
              )}
            </Link>

            {/* Desktop collapse toggle */}
            <button
              className="cms-collapse-btn"
              onClick={toggleSidebar}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={sidebarCollapsed ? 'Expand' : 'Collapse'}
              type="button"
            >
              {sidebarCollapsed ? '›' : '‹'}
            </button>
          </div>

          {/* Nav links */}
          <SidebarNav collapsed={sidebarCollapsed} onClose={closeMobile} />

          {/* Footer — logout */}
          <div className="cms-sidebar-footer">
            <button
              className={`cms-logout-btn${sidebarCollapsed ? ' collapsed' : ''}`}
              onClick={handleLogout}
              disabled={loggingOut}
              type="button"
              aria-label="Sign out"
              title={sidebarCollapsed ? 'Sign Out' : undefined}
            >
              {loggingOut
                ? <Spinner size={16} color="#ef4444" />
                : <span className="cms-nav-icon" aria-hidden="true">⇠</span>
              }
              {!sidebarCollapsed && (
                <span>{loggingOut ? 'Signing out…' : 'Sign Out'}</span>
              )}
            </button>
          </div>
        </aside>

        {/* ── Mobile Overlay ─────────────────────────────────────────── */}
        {mobileOpen && (
          <div
            className="cms-overlay open"
            onClick={closeMobile}
            aria-hidden="true"
          />
        )}

        {/* ── Main ───────────────────────────────────────────────────── */}
        <div className="cms-main">

          {/* ── Topbar ─────────────────────────────────────────────── */}
          <header className="cms-topbar" role="banner">
            <div className="cms-topbar-left">
              {/* Mobile hamburger */}
              <button
                className="cms-mobile-menu-btn"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                aria-controls="cms-sidebar"
                type="button"
              >
                <span aria-hidden="true">{mobileOpen ? '✕' : '☰'}</span>
              </button>

              {/* Page title (shows on desktop too, updates per route) */}
              <div className="cms-topbar-title-wrap">
                <span className="cms-topbar-title" aria-current="page">{pageTitle}</span>
              </div>
            </div>

            {/* Right controls */}
            <div className="cms-topbar-right">
              {/* Notification bell (UI placeholder) */}
              <button
                className="cms-icon-btn"
                aria-label="Notifications (coming soon)"
                title="Notifications"
                type="button"
              >
                <span aria-hidden="true">🔔</span>
              </button>

              {/* Avatar + dropdown */}
              <AvatarDropdown
                user={user}
                onLogout={handleLogout}
                loggingOut={loggingOut}
              />
            </div>
          </header>

          {/* ── Page Content ───────────────────────────────────────── */}
          <main
            id="cms-main-content"
            className="cms-content"
            tabIndex={-1}
          >
            {children}
          </main>
        </div>
      </div>

      {/* ── Global UI layers (toasts + confirm dialog) ──────────────── */}
      <ToastProvider />
      <ConfirmDialog />
    </div>
  );
}
