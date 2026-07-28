/**
 * src/admin/context/DashboardContext.jsx
 *
 * Provides live dashboard statistics fetched from Supabase.
 * Automatically refreshes on mount. Exposes loading + error state.
 *
 * Exposes:
 *   stats    { total, published, drafts, categories, tags, totalViews }
 *   loading  boolean
 *   error    string | null
 *   refresh  () => void  — manual refetch
 */

import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import { getDashboardStats } from '../services/dashboardService';

// ─── Context ──────────────────────────────────────────────────────────────────
export const DashboardContext = createContext(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function DashboardProvider({ children }) {
  const [stats, setStats] = useState({
    total: null,
    published: null,
    drafts: null,
    categories: null,
    tags: null,
    totalViews: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getDashboardStats();
      setStats(result);
    } catch (err) {
      console.error('[DashboardContext] fetch error:', err);
      setError(err.message ?? 'Failed to load dashboard data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const value = { stats, loading, error, refresh: fetchStats };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error('[useDashboard] Must be inside <DashboardProvider>');
  return ctx;
}
