/**
 * src/services/blogService.js
 *
 * All CRUD and query operations for the `blogs`, `categories`, `tags`,
 * and `blog_tag_relations` tables.
 *
 * RLS enforces read-only access for anonymous users (published only).
 * Authenticated users can create, update, and delete.
 *
 * Usage:
 *   import { getPublishedBlogs, getBlogBySlug } from '../services/blogService';
 */

import { supabase } from '../lib/supabase';

// ─────────────────────────────────────────────────────────────────────────────
// BLOGS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fetch all published blogs ordered by published_at descending.
 * Safe for anonymous (public) callers — RLS restricts to published rows.
 *
 * @param {{ limit?: number, offset?: number }} options
 * @returns {{ data: object[]|null, error: object|null, count: number|null }}
 */
export async function getPublishedBlogs({ limit = 10, offset = 0 } = {}) {
  const { data, error, count } = await supabase
    .from('blogs')
    .select(
      `
      id,
      title,
      slug,
      excerpt,
      cover_image,
      status,
      featured,
      seo_title,
      seo_description,
      author_name,
      views,
      published_at,
      created_at,
      categories ( id, name, slug )
    `,
      { count: 'exact' }
    )
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(offset, offset + limit - 1);

  return { data, error, count };
}

/**
 * Fetch featured published blogs.
 *
 * @param {{ limit?: number }} options
 * @returns {{ data: object[]|null, error: object|null }}
 */
export async function getFeaturedBlogs({ limit = 3 } = {}) {
  const { data, error } = await supabase
    .from('blogs')
    .select(
      `
      id,
      title,
      slug,
      excerpt,
      cover_image,
      featured,
      author_name,
      published_at,
      categories ( id, name, slug )
    `
    )
    .eq('status', 'published')
    .eq('featured', true)
    .order('published_at', { ascending: false })
    .limit(limit);

  return { data, error };
}

/**
 * Fetch a single published blog post by its unique slug.
 * Also increments the view counter atomically via an RPC call.
 *
 * @param {string} slug
 * @returns {{ data: object|null, error: object|null }}
 */
export async function getBlogBySlug(slug) {
  // 1. Fetch full blog with relations
  const { data, error } = await supabase
    .from('blogs')
    .select(
      `
      *,
      categories ( id, name, slug ),
      blog_tag_relations ( tags ( id, name, slug ) )
    `
    )
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  // 2. Increment view count (best-effort — ignore errors)
  if (data?.id) {
    await supabase.rpc('increment_blog_views', { blog_id: data.id }).then(
      () => {},
      () => {}
    );
  }

  return { data, error };
}

/**
 * Fetch all blogs (including drafts). Requires authenticated user.
 *
 * @param {{ limit?: number, offset?: number }} options
 * @returns {{ data: object[]|null, error: object|null, count: number|null }}
 */
export async function getAllBlogs({ limit = 20, offset = 0 } = {}) {
  const { data, error, count } = await supabase
    .from('blogs')
    .select('*, categories ( id, name, slug )', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  return { data, error, count };
}

/**
 * Create a new blog post. Requires authenticated user.
 *
 * @param {object} blogData – fields matching the blogs table schema
 * @returns {{ data: object|null, error: object|null }}
 */
export async function createBlog(blogData) {
  const { data, error } = await supabase
    .from('blogs')
    .insert([blogData])
    .select()
    .single();

  return { data, error };
}

/**
 * Update an existing blog post by id. Requires authenticated user.
 *
 * @param {string} id  – UUID of the blog to update
 * @param {object} updates – partial fields to update
 * @returns {{ data: object|null, error: object|null }}
 */
export async function updateBlog(id, updates) {
  const { data, error } = await supabase
    .from('blogs')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  return { data, error };
}

/**
 * Soft-delete (set status = 'draft') or hard-delete a blog.
 * Default is soft-delete to avoid accidental permanent deletion.
 *
 * @param {string}  id        – UUID of the blog
 * @param {boolean} hardDelete – if true, permanently removes the row
 * @returns {{ error: object|null }}
 */
export async function deleteBlog(id, hardDelete = false) {
  if (hardDelete) {
    const { error } = await supabase.from('blogs').delete().eq('id', id);
    return { error };
  }

  const { error } = await supabase
    .from('blogs')
    .update({ status: 'draft', updated_at: new Date().toISOString() })
    .eq('id', id);
  return { error };
}

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fetch all categories (public read).
 *
 * @returns {{ data: object[]|null, error: object|null }}
 */
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });

  return { data, error };
}

/**
 * Create a new category. Requires authenticated user.
 *
 * @param {{ name: string, slug: string, description?: string }} categoryData
 * @returns {{ data: object|null, error: object|null }}
 */
export async function createCategory(categoryData) {
  const { data, error } = await supabase
    .from('categories')
    .insert([categoryData])
    .select()
    .single();

  return { data, error };
}

// ─────────────────────────────────────────────────────────────────────────────
// TAGS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fetch all tags (public read).
 *
 * @returns {{ data: object[]|null, error: object|null }}
 */
export async function getTags() {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name', { ascending: true });

  return { data, error };
}

/**
 * Create a new tag. Requires authenticated user.
 *
 * @param {{ name: string, slug: string }} tagData
 * @returns {{ data: object|null, error: object|null }}
 */
export async function createTag(tagData) {
  const { data, error } = await supabase
    .from('tags')
    .insert([tagData])
    .select()
    .single();

  return { data, error };
}

// ─────────────────────────────────────────────────────────────────────────────
// BLOG ↔ TAG RELATIONS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Attach tags to a blog post.
 * Replaces all existing tag relations for that blog.
 *
 * @param {string}   blogId  – UUID of the blog
 * @param {string[]} tagIds  – array of tag UUIDs to attach
 * @returns {{ error: object|null }}
 */
export async function setBlogTags(blogId, tagIds) {
  // Remove existing relations first
  const { error: deleteError } = await supabase
    .from('blog_tag_relations')
    .delete()
    .eq('blog_id', blogId);

  if (deleteError) return { error: deleteError };

  if (!tagIds || tagIds.length === 0) return { error: null };

  const rows = tagIds.map((tagId) => ({ blog_id: blogId, tag_id: tagId }));

  const { error: insertError } = await supabase
    .from('blog_tag_relations')
    .insert(rows);

  return { error: insertError };
}

/**
 * Get all tags for a specific blog post.
 *
 * @param {string} blogId
 * @returns {{ data: object[]|null, error: object|null }}
 */
export async function getBlogTags(blogId) {
  const { data, error } = await supabase
    .from('blog_tag_relations')
    .select('tags ( id, name, slug )')
    .eq('blog_id', blogId);

  return { data: data?.map((r) => r.tags) ?? null, error };
}

// ─────────────────────────────────────────────────────────────────────────────
// SEARCH
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Full-text search across published blogs (title + excerpt + content).
 *
 * @param {string} query  – search term
 * @param {{ limit?: number }} options
 * @returns {{ data: object[]|null, error: object|null }}
 */
export async function searchBlogs(query, { limit = 10 } = {}) {
  const { data, error } = await supabase
    .from('blogs')
    .select('id, title, slug, excerpt, cover_image, author_name, published_at')
    .eq('status', 'published')
    .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%`)
    .order('published_at', { ascending: false })
    .limit(limit);

  return { data, error };
}
