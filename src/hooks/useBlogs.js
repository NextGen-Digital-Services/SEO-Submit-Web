import { useState, useEffect, useCallback } from 'react';
import { getPublishedBlogs, getAllBlogs } from '../services/blogService';

/**
 * Custom hook to fetch public published blogs from Supabase.
 *
 * @param {{ category?: string, search?: string }} params
 */
export function usePublishedBlogs({ category = 'All', search = '' } = {}) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: fetchErr } = await getPublishedBlogs({ category, search });
    if (fetchErr) {
      setError(fetchErr);
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  }, [category, search]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return { blogs, loading, error, refetch: fetchBlogs };
}

/**
 * Custom hook to fetch all blogs (for Admin Panel) from Supabase.
 */
export function useAllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: fetchErr } = await getAllBlogs();
    if (fetchErr) {
      setError(fetchErr);
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return { blogs, setBlogs, loading, error, refetch: fetchBlogs };
}
