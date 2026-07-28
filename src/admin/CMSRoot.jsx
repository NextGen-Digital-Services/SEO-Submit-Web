/**
 * src/admin/CMSRoot.jsx  (Part 2 — updated)
 *
 * CMS sub-application root. Mounted by App.jsx at /cms/*.
 *
 * Provider stack (outer to inner):
 *   CMSErrorBoundary
 *     AuthProvider        — session state
 *       UIProvider        — sidebar, toasts, confirm dialog
 *         Suspense
 *           Routes
 *
 * DashboardProvider is scoped to the dashboard route only
 * (not global) to avoid unnecessary Supabase queries on other pages.
 */

import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider }      from './context/AuthContext';
import { UIProvider }        from './context/UIContext';
import CMSErrorBoundary      from './components/CMSErrorBoundary';
import ProtectedRoute        from './routes/ProtectedRoute';
import CMSLayout             from './layouts/CMSLayout';
import Spinner               from './components/Spinner';

// ─── Lazy-loaded pages ────────────────────────────────────────────────────────
const LoginPage      = lazy(() => import('./pages/LoginPage'));
const DashboardPage  = lazy(() => import('./pages/DashboardPage'));
const BlogsPage      = lazy(() => import('./pages/BlogsPage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const TagsPage       = lazy(() => import('./pages/TagsPage'));
const SettingsPage   = lazy(() => import('./pages/SettingsPage'));

// ─── Page suspense fallback ───────────────────────────────────────────────────
const PageLoader = () => <Spinner fullPage />;

// ─── Protected + layout wrapper ──────────────────────────────────────────────
function Protected({ children }) {
  return (
    <ProtectedRoute>
      <CMSLayout>{children}</CMSLayout>
    </ProtectedRoute>
  );
}

// ─── CMSRoot ──────────────────────────────────────────────────────────────────
export default function CMSRoot() {
  return (
    <CMSErrorBoundary>
      <AuthProvider>
        <UIProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>

              {/* ── Public (within CMS) ── */}
              <Route path="login" element={<LoginPage />} />

              {/* ── Protected pages ── */}
              <Route
                path="dashboard"
                element={
                  <Protected>
                    <DashboardPage />
                  </Protected>
                }
              />

              <Route
                path="blogs"
                element={
                  <Protected>
                    <BlogsPage />
                  </Protected>
                }
              />

              <Route
                path="blogs/new"
                element={
                  <Protected>
                    <Navigate to="/cms/blogs" replace />
                  </Protected>
                }
              />

              <Route
                path="blogs/edit/:id"
                element={
                  <Protected>
                    <Navigate to="/cms/blogs" replace />
                  </Protected>
                }
              />

              <Route
                path="categories"
                element={
                  <Protected>
                    <CategoriesPage />
                  </Protected>
                }
              />

              <Route
                path="tags"
                element={
                  <Protected>
                    <TagsPage />
                  </Protected>
                }
              />

              <Route
                path="settings"
                element={
                  <Protected>
                    <SettingsPage />
                  </Protected>
                }
              />

              {/* ── Default redirect ── */}
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="*" element={<Navigate to="dashboard" replace />} />

            </Routes>
          </Suspense>
        </UIProvider>
      </AuthProvider>
    </CMSErrorBoundary>
  );
}
