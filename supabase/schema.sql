-- ============================================================
-- SEO Submit Web — Supabase Production Schema
-- ============================================================
-- Run this entire script once inside the Supabase SQL Editor.
-- It is idempotent: safe to run multiple times (IF NOT EXISTS).
-- ============================================================


-- ============================================================
-- 0. EXTENSIONS
-- ============================================================

-- uuid_generate_v4() — used for default primary keys
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- pg_trgm — enables fast ILIKE / fuzzy search on text columns
CREATE EXTENSION IF NOT EXISTS pg_trgm;


-- ============================================================
-- 1. CATEGORIES
-- ============================================================

CREATE TABLE IF NOT EXISTS categories (
  id          UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT        NOT NULL,
  slug        TEXT        NOT NULL UNIQUE,
  description TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for slug lookups
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories (slug);

COMMENT ON TABLE  categories            IS 'Blog post categories.';
COMMENT ON COLUMN categories.slug       IS 'URL-safe unique identifier (e.g. "seo-tips").';


-- ============================================================
-- 2. TAGS
-- ============================================================

CREATE TABLE IF NOT EXISTS tags (
  id         UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  name       TEXT        NOT NULL,
  slug       TEXT        NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tags_slug ON tags (slug);

COMMENT ON TABLE  tags      IS 'Flat tag taxonomy for blog posts.';
COMMENT ON COLUMN tags.slug IS 'URL-safe unique identifier (e.g. "link-building").';


-- ============================================================
-- 3. BLOGS
-- ============================================================

CREATE TABLE IF NOT EXISTS blogs (
  -- Primary key
  id              UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),

  -- Core content
  title           TEXT        NOT NULL,
  slug            TEXT        NOT NULL UNIQUE,
  excerpt         TEXT,
  content         TEXT,
  cover_image     TEXT,                          -- public storage URL

  -- Publication state
  status          TEXT        NOT NULL DEFAULT 'draft'
                              CHECK (status IN ('draft', 'published')),
  featured        BOOLEAN     NOT NULL DEFAULT FALSE,

  -- SEO metadata
  seo_title       TEXT,
  seo_description TEXT,
  seo_keywords    TEXT,                          -- comma-separated keywords

  -- Authorship
  author_name     TEXT        NOT NULL DEFAULT 'Admin',

  -- Foreign key → categories
  category_id     UUID        REFERENCES categories (id) ON DELETE SET NULL,

  -- Analytics
  views           INTEGER     NOT NULL DEFAULT 0,

  -- Timestamps
  published_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Indexes ─────────────────────────────────────────────────

-- Slug lookups (primary public API)
CREATE INDEX IF NOT EXISTS idx_blogs_slug        ON blogs (slug);

-- Feed queries (list of published posts)
CREATE INDEX IF NOT EXISTS idx_blogs_status      ON blogs (status);
CREATE INDEX IF NOT EXISTS idx_blogs_published   ON blogs (published_at DESC)
  WHERE status = 'published';

-- Featured posts filter
CREATE INDEX IF NOT EXISTS idx_blogs_featured    ON blogs (featured)
  WHERE featured = TRUE AND status = 'published';

-- Category filter
CREATE INDEX IF NOT EXISTS idx_blogs_category_id ON blogs (category_id);

-- Full-text search (title + excerpt)
CREATE INDEX IF NOT EXISTS idx_blogs_title_trgm   ON blogs USING GIN (title   gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_blogs_excerpt_trgm ON blogs USING GIN (excerpt gin_trgm_ops);

-- ── Comments ─────────────────────────────────────────────────

COMMENT ON TABLE  blogs                IS 'Blog posts with full content, SEO metadata, and publication state.';
COMMENT ON COLUMN blogs.slug           IS 'Unique URL path segment (e.g. "how-to-rank-in-2025").';
COMMENT ON COLUMN blogs.status         IS 'draft | published. RLS allows public read only for published.';
COMMENT ON COLUMN blogs.content        IS 'Rich-text / Markdown / HTML body of the post.';
COMMENT ON COLUMN blogs.cover_image    IS 'Public URL from the blog-images Supabase Storage bucket.';
COMMENT ON COLUMN blogs.seo_keywords   IS 'Comma-separated list of meta keywords.';
COMMENT ON COLUMN blogs.views          IS 'Incremented atomically via increment_blog_views() RPC.';
COMMENT ON COLUMN blogs.published_at   IS 'Set when status changes to published. Used for ordering.';


-- ============================================================
-- 4. BLOG ↔ TAG RELATIONS  (many-to-many join table)
-- ============================================================

CREATE TABLE IF NOT EXISTS blog_tag_relations (
  blog_id    UUID NOT NULL REFERENCES blogs (id) ON DELETE CASCADE,
  tag_id     UUID NOT NULL REFERENCES tags  (id) ON DELETE CASCADE,
  PRIMARY KEY (blog_id, tag_id)
);

CREATE INDEX IF NOT EXISTS idx_blog_tag_blog_id ON blog_tag_relations (blog_id);
CREATE INDEX IF NOT EXISTS idx_blog_tag_tag_id  ON blog_tag_relations (tag_id);

COMMENT ON TABLE blog_tag_relations IS 'Many-to-many join between blogs and tags.';


-- ============================================================
-- 5. HELPER FUNCTION — increment_blog_views
-- ============================================================
-- Called by blogService.getBlogBySlug() via supabase.rpc().
-- Atomically increments the view counter without a separate SELECT.

CREATE OR REPLACE FUNCTION increment_blog_views(blog_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER                -- runs as DB owner, bypasses RLS for this op
AS $$
BEGIN
  UPDATE blogs
     SET views = views + 1
   WHERE id = blog_id
     AND status = 'published';
END;
$$;

COMMENT ON FUNCTION increment_blog_views IS
  'Atomically increment the view counter for a published blog post.';


-- ============================================================
-- 6. HELPER FUNCTION — set_updated_at trigger
-- ============================================================

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Attach trigger to blogs
CREATE OR REPLACE TRIGGER trg_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Attach trigger to categories
CREATE OR REPLACE TRIGGER trg_categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();


-- ============================================================
-- 7. ROW LEVEL SECURITY (RLS)
-- ============================================================

-- ── Enable RLS on all tables ─────────────────────────────────

ALTER TABLE blogs              ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories         ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags               ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tag_relations ENABLE ROW LEVEL SECURITY;


-- ── BLOGS policies ───────────────────────────────────────────

-- Public: read published blogs only
CREATE POLICY "public_read_published_blogs"
  ON blogs
  FOR SELECT
  TO anon
  USING (status = 'published');

-- Authenticated: full read (including drafts)
CREATE POLICY "auth_read_all_blogs"
  ON blogs
  FOR SELECT
  TO authenticated
  USING (TRUE);

-- Authenticated: create new blogs
CREATE POLICY "auth_insert_blogs"
  ON blogs
  FOR INSERT
  TO authenticated
  WITH CHECK (TRUE);

-- Authenticated: update any blog
CREATE POLICY "auth_update_blogs"
  ON blogs
  FOR UPDATE
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- Authenticated: delete any blog
CREATE POLICY "auth_delete_blogs"
  ON blogs
  FOR DELETE
  TO authenticated
  USING (TRUE);


-- ── CATEGORIES policies ───────────────────────────────────────

-- Public: read all categories
CREATE POLICY "public_read_categories"
  ON categories
  FOR SELECT
  TO anon
  USING (TRUE);

-- Authenticated: full write access
CREATE POLICY "auth_manage_categories"
  ON categories
  FOR ALL
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);


-- ── TAGS policies ─────────────────────────────────────────────

-- Public: read all tags
CREATE POLICY "public_read_tags"
  ON tags
  FOR SELECT
  TO anon
  USING (TRUE);

-- Authenticated: full write access
CREATE POLICY "auth_manage_tags"
  ON tags
  FOR ALL
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);


-- ── BLOG_TAG_RELATIONS policies ───────────────────────────────

-- Public: read all relations (needed to resolve tags on a blog post)
CREATE POLICY "public_read_blog_tag_relations"
  ON blog_tag_relations
  FOR SELECT
  TO anon
  USING (TRUE);

-- Authenticated: full write access
CREATE POLICY "auth_manage_blog_tag_relations"
  ON blog_tag_relations
  FOR ALL
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);


-- ============================================================
-- 8. STORAGE — blog-images bucket
-- ============================================================
-- Run this in the SQL Editor. Alternatively, create the bucket
-- manually in the Supabase Dashboard > Storage.

INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', TRUE)
ON CONFLICT (id) DO NOTHING;

-- Public: anyone can view images (GET)
CREATE POLICY "public_read_blog_images"
  ON storage.objects
  FOR SELECT
  TO anon
  USING (bucket_id = 'blog-images');

-- Authenticated: upload images
CREATE POLICY "auth_upload_blog_images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'blog-images');

-- Authenticated: update images
CREATE POLICY "auth_update_blog_images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'blog-images');

-- Authenticated: delete images
CREATE POLICY "auth_delete_blog_images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'blog-images');


-- ============================================================
-- END OF SCHEMA
-- ============================================================
