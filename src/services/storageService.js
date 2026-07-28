/**
 * src/services/storageService.js
 *
 * Handles all Supabase Storage operations for the `blog-images` bucket.
 *
 * Bucket name: blog-images
 * Access:  Public read (images are served via public CDN URL)
 *          Authenticated write (upload / delete)
 *
 * Usage:
 *   import { uploadBlogImage, deleteBlogImage, getPublicUrl } from '../services/storageService';
 */

import { supabase } from '../lib/supabase';

// ─── Constants ───────────────────────────────────────────────────────────────

const BUCKET = 'blog-images';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Build a safe, unique file path for a blog cover image.
 * Format:  covers/<timestamp>-<sanitised-filename>
 *
 * @param {File}   file
 * @param {string} [prefix='covers']
 * @returns {string}
 */
function buildFilePath(file, prefix = 'covers') {
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  return `${prefix}/${timestamp}-${safeName}`;
}

// ─── Upload ───────────────────────────────────────────────────────────────────

/**
 * Upload a blog cover image to the `blog-images` bucket.
 * Requires an authenticated user session.
 *
 * @param {File}   file    – the image File object (from an <input type="file">)
 * @param {string} [prefix='covers'] – subfolder prefix inside the bucket
 * @returns {{ path: string|null, publicUrl: string|null, error: object|null }}
 */
export async function uploadBlogImage(file, prefix = 'covers') {
  const filePath = buildFilePath(file, prefix);

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type,
    });

  if (error) return { path: null, publicUrl: null, error };

  const publicUrl = getPublicUrl(data.path);
  return { path: data.path, publicUrl, error: null };
}

// ─── Delete ───────────────────────────────────────────────────────────────────

/**
 * Delete a blog image from storage by its storage path.
 * Requires an authenticated user session.
 *
 * @param {string} filePath  – the storage path returned by uploadBlogImage
 * @returns {{ error: object|null }}
 */
export async function deleteBlogImage(filePath) {
  const { error } = await supabase.storage.from(BUCKET).remove([filePath]);
  return { error };
}

// ─── Public URL ───────────────────────────────────────────────────────────────

/**
 * Get the public CDN URL for a file in the blog-images bucket.
 * The bucket must have public access enabled in Supabase dashboard.
 *
 * @param {string} filePath  – storage path (e.g. "covers/1234-image.jpg")
 * @returns {string}
 */
export function getPublicUrl(filePath) {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(filePath);
  return data?.publicUrl ?? '';
}

// ─── List Files ───────────────────────────────────────────────────────────────

/**
 * List all files in a folder of the blog-images bucket.
 * Requires an authenticated user session.
 *
 * @param {string} [folder='covers']
 * @returns {{ data: object[]|null, error: object|null }}
 */
export async function listBlogImages(folder = 'covers') {
  const { data, error } = await supabase.storage.from(BUCKET).list(folder, {
    limit: 100,
    offset: 0,
    sortBy: { column: 'created_at', order: 'desc' },
  });

  return { data, error };
}

// ─── Replace ───────────────────────────────────────────────────────────────────

/**
 * Replace an existing image (delete old + upload new).
 * Requires an authenticated user session.
 *
 * @param {string} oldFilePath  – path of the existing file to remove
 * @param {File}   newFile      – new image File to upload
 * @param {string} [prefix='covers']
 * @returns {{ path: string|null, publicUrl: string|null, error: object|null }}
 */
export async function replaceBlogImage(oldFilePath, newFile, prefix = 'covers') {
  // Best-effort delete — don't block upload if delete fails
  await deleteBlogImage(oldFilePath).catch(() => {});

  return uploadBlogImage(newFile, prefix);
}
