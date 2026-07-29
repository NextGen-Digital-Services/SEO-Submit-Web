/**
 * src/services/blogService.js
 *
 * Direct Supabase Service Layer for Public and Admin Blog operations.
 * NO dummy data. NO hardcoded arrays. Strictly Supabase.
 */

import { supabase } from '../lib/supabase';
import { extractPublicId } from './cloudinaryService';

/**
 * Fetch published blogs from Supabase for the public Blog page.
 * Ordered by newest first (created_at / published_at DESC).
 * Filtered by category and search if provided.
 *
 * @param {{ category?: string, search?: string, limit?: number }} options
 * @returns {Promise<{ data: array, error: object|null }>}
 */
export async function getPublishedBlogs({ category = 'All', search = '', limit = 100 } = {}) {
  try {
    // 1. Fetch all rows from Supabase blogs table ordered by newest first
    let query = supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('[Supabase Error getPublishedBlogs]:', error);
      return { data: [], error };
    }

    if (!data || !Array.isArray(data)) {
      return { data: [], error: null };
    }

    // 2. Filter for Published status case-insensitively ('published', 'Published', or empty/null default)
    let filtered = data.filter((b) => {
      if (!b.status) return true; // Default to visible if status column is omitted
      const st = String(b.status).trim().toLowerCase();
      return st === 'published';
    });

    // 3. Category Filter
    if (category && category !== 'All') {
      const catTarget = category.trim().toLowerCase();
      filtered = filtered.filter((b) => {
        if (!b.category) return false;
        return String(b.category).trim().toLowerCase() === catTarget;
      });
    }

    // 4. Search Filter (by title, excerpt, or content)
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      filtered = filtered.filter((b) => {
        const titleMatch = (b.title || '').toLowerCase().includes(q);
        const excerptMatch = (b.excerpt || b.shortDescription || '').toLowerCase().includes(q);
        const contentMatch = (b.content || '').toLowerCase().includes(q);
        return titleMatch || excerptMatch || contentMatch;
      });
    }

    return { data: filtered, error: null };
  } catch (err) {
    console.error('[blogService getPublishedBlogs catch]:', err);
    return { data: [], error: err };
  }
}

/**
 * Fetch a single blog post by its slug from Supabase for Blog Detail Page.
 *
 * @param {string} slug
 * @returns {Promise<{ data: object|null, error: object|null }>}
 */
export async function getBlogBySlug(slug) {
  if (!slug) return { data: null, error: 'Slug is required' };

  try {
    // 1. Direct match on slug
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (data) {
      return { data, error: null };
    }

    // 2. Case-insensitive fallback match
    const { data: allBlogs } = await supabase.from('blogs').select('*');
    if (allBlogs && Array.isArray(allBlogs)) {
      const targetSlug = slug.toLowerCase().trim();
      const match = allBlogs.find((b) => b.slug && b.slug.toLowerCase().trim() === targetSlug);
      if (match) {
        return { data: match, error: null };
      }
    }

    return { data: null, error: error || { message: 'Blog post not found in Supabase' } };
  } catch (err) {
    return { data: null, error: err };
  }
}

/**
 * Fetch all blogs (both Published and Draft) for Admin Dashboard.
 *
 * @returns {Promise<{ data: array, error: object|null }>}
 */
export async function getAllBlogs() {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[Supabase Error getAllBlogs]:', error);
      return { data: [], error };
    }

    return { data: data || [], error: null };
  } catch (err) {
    return { data: [], error: err };
  }
}

/**
 * Insert a new blog post into Supabase `blogs` table.
 *
 * @param {object} blogData
 * @returns {Promise<{ data: object|null, error: object|null }>}
 */
export async function createBlog(blogData) {
  try {
    // Check slug uniqueness in Supabase
    const { data: existing } = await supabase
      .from('blogs')
      .select('id')
      .eq('slug', blogData.slug)
      .maybeSingle();

    if (existing) {
      return { data: null, error: { message: 'A blog post with this slug already exists in Supabase.' } };
    }

    const isPublished = blogData.status === 'published' || blogData.status === 'Published';
    const coverImage = blogData.cover_image || blogData.image || '';
    const publicId = blogData.cloudinary_public_id || blogData.publicId || extractPublicId(coverImage) || '';

    const payload = {
      title: blogData.title,
      slug: blogData.slug,
      category: blogData.category || 'SEO',
      excerpt: blogData.excerpt || blogData.shortDescription || '',
      content: blogData.content || '',
      cover_image: coverImage,
      cloudinary_public_id: publicId,
      seo_title: blogData.seo_title || blogData.metaTitle || blogData.title,
      seo_description: blogData.seo_description || blogData.metaDescription || blogData.excerpt || '',
      status: isPublished ? 'published' : 'draft',
      author_name: blogData.author_name || 'SEO Submit Web',
      published_at: isPublished ? new Date().toISOString() : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    let { data, error } = await supabase
      .from('blogs')
      .insert([payload])
      .select()
      .single();

    // Fallback if schema does not have `cloudinary_public_id` column
    if (error && error.message && error.message.includes('cloudinary_public_id')) {
      delete payload.cloudinary_public_id;
      const res = await supabase
        .from('blogs')
        .insert([payload])
        .select()
        .single();
      data = res.data;
      error = res.error;
    }

    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}

/**
 * Update an existing blog post in Supabase.
 *
 * @param {string} id
 * @param {object} blogData
 * @returns {Promise<{ data: object|null, error: object|null }>}
 */
export async function updateBlog(id, blogData) {
  try {
    const isPublished = blogData.status === 'published' || blogData.status === 'Published';
    const coverImage = blogData.cover_image || blogData.image || '';
    const publicId = blogData.cloudinary_public_id || blogData.publicId || extractPublicId(coverImage) || '';

    const payload = {
      title: blogData.title,
      slug: blogData.slug,
      category: blogData.category,
      excerpt: blogData.excerpt || blogData.shortDescription || '',
      content: blogData.content || '',
      cover_image: coverImage,
      cloudinary_public_id: publicId,
      seo_title: blogData.seo_title || blogData.metaTitle || blogData.title,
      seo_description: blogData.seo_description || blogData.metaDescription || blogData.excerpt || '',
      status: isPublished ? 'published' : 'draft',
      author_name: blogData.author_name || 'SEO Submit Web',
      published_at: isPublished ? (blogData.published_at || new Date().toISOString()) : null,
      updated_at: new Date().toISOString(),
    };

    let { data, error } = await supabase
      .from('blogs')
      .update(payload)
      .eq('id', id)
      .select()
      .single();

    if (error && error.message && error.message.includes('cloudinary_public_id')) {
      delete payload.cloudinary_public_id;
      const res = await supabase
        .from('blogs')
        .update(payload)
        .eq('id', id)
        .select()
        .single();
      data = res.data;
      error = res.error;
    }

    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}

/**
 * Delete a blog post from Supabase.
 *
 * @param {string} id
 * @returns {Promise<{ error: object|null }>}
 */
export async function deleteBlog(id) {
  try {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    return { error };
  } catch (err) {
    return { error: err };
  }
}
