/**
 * src/admin/services/dashboardService.js
 *
 * Fetches aggregated KPI data for the CMS dashboard.
 * Runs parallel queries for performance.
 *
 * Returns:
 *   { total, published, drafts, categories, tags, totalViews }
 */

import { supabase } from '../../lib/supabase';

/**
 * Fetch all dashboard stats in parallel.
 * Uses Supabase count queries — no row data is transferred.
 */
export async function getDashboardStats() {
  const [
    totalResult,
    publishedResult,
    draftsResult,
    categoriesResult,
    tagsResult,
    viewsResult,
  ] = await Promise.all([
    // Total blogs (any status)
    supabase
      .from('blogs')
      .select('id', { count: 'exact', head: true }),

    // Published blogs
    supabase
      .from('blogs')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'published'),

    // Draft blogs
    supabase
      .from('blogs')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'draft'),

    // Categories
    supabase
      .from('categories')
      .select('id', { count: 'exact', head: true }),

    // Tags
    supabase
      .from('tags')
      .select('id', { count: 'exact', head: true }),

    // Sum of all views (aggregate)
    supabase
      .from('blogs')
      .select('views')
      .eq('status', 'published'),
  ]);

  // Calculate total views by summing the views column
  const totalViews = viewsResult.data
    ? viewsResult.data.reduce((sum, row) => sum + (row.views ?? 0), 0)
    : 0;

  return {
    total:      totalResult.count      ?? 0,
    published:  publishedResult.count  ?? 0,
    drafts:     draftsResult.count     ?? 0,
    categories: categoriesResult.count ?? 0,
    tags:       tagsResult.count       ?? 0,
    totalViews,
  };
}

/**
 * Fetch the most recently created/updated blogs for the Recent Posts widget.
 * @param {number} limit
 */
export async function getRecentBlogs(limit = 5) {
  const { data, error } = await supabase
    .from('blogs')
    .select(
      'id, title, slug, status, featured, author_name, published_at, created_at, views, categories ( name )'
    )
    .order('created_at', { ascending: false })
    .limit(limit);

  return { data: data ?? [], error };
}
