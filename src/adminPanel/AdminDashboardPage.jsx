import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { C, F } from '../styles/tokens';
import Logo from '../assets/Logo/Logo1_result.webp';
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from '../services/blogService';
import { signOut, getSession } from '../services/authService';
import { deleteFromCloudinary } from '../services/cloudinaryService';
import BlogFormModal from './components/BlogFormModal';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import LogoutConfirmModal from './components/LogoutConfirmModal';

export const AdminDashboardPage = () => {
  const navigate = useNavigate();

  // State Management
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('table');
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);

  // Toast Feedback State
  const [toast, setToast] = useState(null);

  // Modals State
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [deletingBlog, setDeletingBlog] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  // Reduced motion preference check
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Protect Admin Dashboard Route - Redirect if not authenticated with Supabase
  useEffect(() => {
    getSession().then(({ data }) => {
      if (!data?.session) {
        navigate('/admin', { replace: true });
      }
    });
  }, [navigate]);

  // GSAP Initial Page Entry Timeline
  useEffect(() => {
    if (!prefersReduced) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.fromTo('.admin-header', { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.45 });
    }
  }, [prefersReduced]);

  const showToast = (text, type = 'success') => {
    setToast({ text, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Fetch all blogs from Supabase
  const loadBlogs = useCallback(async () => {
    setLoading(true);
    const { data, error } = await getAllBlogs();
    if (error) {
      showToast(error.message || 'Network Error. Failed to load blogs from Supabase.', 'error');
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

  // Stats calculation
  const totalBlogs = blogs.length;
  const publishedCount = blogs.filter((b) => b.status === 'published' || b.status === 'Published').length;
  const draftCount = blogs.filter((b) => b.status === 'draft' || b.status === 'Draft').length;
  const categoryCount = new Set(blogs.map((b) => b.category)).size;

  // Filtered blogs for table/cards
  const filteredBlogs = blogs.filter((blog) => {
    const titleMatch = (blog.title || '').toLowerCase().includes(searchQuery.toLowerCase());
    const catMatch = (blog.category || '').toLowerCase().includes(searchQuery.toLowerCase());
    const slugMatch = (blog.slug || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSearch = titleMatch || catMatch || slugMatch;

    const matchesCat = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  // Create & Edit Handler
  const handleOpenCreateModal = () => {
    setEditingBlog(null);
    setIsFormModalOpen(true);
  };

  const handleOpenEditModal = (blog) => {
    setEditingBlog(blog);
    setIsFormModalOpen(true);
  };

  const handleSaveBlog = async (formData) => {
    if (!formData.title || !formData.category || !formData.shortDescription || !formData.content) {
      showToast('Please fill out all required fields (Title, Category, Excerpt, Content).', 'error');
      return;
    }

    if (!formData.image) {
      showToast('Featured image is required. Please upload an image.', 'error');
      return;
    }

    setActionLoading(true);

    if (editingBlog) {
      const oldImage = editingBlog.cover_image || editingBlog.image;
      const oldPublicId = editingBlog.cloudinary_public_id || editingBlog.publicId || oldImage;

      const { error } = await updateBlog(editingBlog.id, formData);
      setActionLoading(false);

      if (error) {
        showToast(error.message || 'Failed to update blog in Supabase.', 'error');
      } else {
        if (oldImage && oldImage !== formData.image) {
          deleteFromCloudinary(oldPublicId).catch(() => {});
        }
        showToast('Blog Updated Successfully!', 'success');
        setIsFormModalOpen(false);
        setEditingBlog(null);
        loadBlogs();
      }
    } else {
      const { error } = await createBlog(formData);
      setActionLoading(false);

      if (error) {
        showToast(error.message || 'Failed to create blog in Supabase.', 'error');
      } else {
        showToast('Blog Created Successfully!', 'success');
        setIsFormModalOpen(false);
        setEditingBlog(null);
        loadBlogs();
      }
    }
  };

  // Delete Handler
  const handleConfirmDelete = async () => {
    if (!deletingBlog) return;

    const publicId = deletingBlog.cloudinary_public_id || deletingBlog.publicId || deletingBlog.cover_image || deletingBlog.image;

    setActionLoading(true);

    const cloudRes = await deleteFromCloudinary(publicId);
    if (cloudRes && cloudRes.success === false) {
      setActionLoading(false);
      showToast(cloudRes.error || 'Failed to delete Cloudinary image. Database record preserved.', 'error');
      return;
    }

    const { error: dbError } = await deleteBlog(deletingBlog.id);
    setActionLoading(false);

    if (dbError) {
      showToast(dbError.message || 'Failed to delete blog from Supabase.', 'error');
    } else {
      showToast('Blog Deleted Successfully!', 'success');
      setDeletingBlog(null);
      loadBlogs();
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    setIsLogoutModalOpen(false);
    await signOut();
    navigate('/admin', { replace: true });
  };

  // Animation Variant Helpers
  const cardVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24, scale: prefersReduced ? 1 : 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: prefersReduced ? 0 : 0.08 + i * 0.05,
        type: 'spring',
        stiffness: 350,
        damping: 25,
      },
    }),
  };

  const filterBarVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: prefersReduced ? 0 : 0.28 },
    },
  };

  const tableContainerVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: prefersReduced ? 0 : 0.35 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReduced ? 0 : i * 0.04,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#F8FAFC',
        color: '#0F172A',
        fontFamily: F.body,
        overflowX: 'hidden',
      }}
    >
      {/* Skeleton Pulse Animation Styling */}
      <style>{`
        @keyframes skeletonShimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
        .skeleton-pulse {
          background: linear-gradient(90deg, #F1F5F9 0px, #F8FAFC 50px, #F1F5F9 100px);
          background-size: 200px 100%;
          animation: skeletonShimmer 1.4s infinite ease-in-out;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 0.8s linear infinite;
        }
      `}</style>

      {/* Toast Notification Floating Banner */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              zIndex: 10000,
              background: toast.type === 'error' ? '#EF4444' : C.navy,
              color: C.white,
              padding: '12px 20px',
              borderRadius: '14px',
              boxShadow: '0 10px 30px rgba(10, 22, 40, 0.18)',
              fontFamily: F.body,
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <i className={toast.type === 'error' ? 'ti ti-alert-circle' : 'ti ti-circle-check'} style={{ fontSize: '18px', color: toast.type === 'error' ? C.white : C.yellow }} />
            <span>{toast.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 1. SIDEBAR ─────────────────────────────────────────── */}
      <aside
        style={{
          width: '260px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRight: '1px solid #E2E8F0',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 100,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: typeof window !== 'undefined' && window.innerWidth < 1024 && !isSidebarOpenMobile ? 'translateX(-100%)' : 'translateX(0)',
          boxShadow: '2px 0 16px rgba(0, 0, 0, 0.02)',
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            padding: '24px 22px',
            borderBottom: '1px solid #F1F5F9',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <img
            src={Logo}
            alt="SEO Submit Web Logo"
            width="32"
            height="32"
            style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
          />
          <div>
            <span
              style={{
                fontFamily: F.display,
                fontWeight: 600,
                fontSize: '15px',
                letterSpacing: '-0.01em',
                color: C.navy,
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              SEO SUBMIT<span style={{ color: C.blue, fontWeight: 600 }}> WEB</span>
            </span>
            <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 400, letterSpacing: '0.3px' }}>
              Admin CMS Portal
            </span>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div style={{ padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div
            style={{
              padding: '4px 12px',
              fontSize: '11px',
              fontWeight: 500,
              fontFamily: F.body,
              color: '#94A3B8',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            Overview
          </div>

          {/* Menu Item 1: Blogs */}
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              padding: '11px 16px',
              borderRadius: '12px',
              background: C.navy,
              color: C.white,
              border: 'none',
              fontFamily: F.body,
              fontWeight: 500,
              fontSize: '13.5px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(10, 22, 40, 0.15)',
              transition: 'all 0.2s ease',
            }}
          >
            <i className="ti ti-article" style={{ fontSize: '18px', color: C.yellow }} />
            <span>Blog Posts</span>
          </button>

          {/* Menu Item 2: Logout */}
          <motion.button
            whileHover={{ backgroundColor: '#FFF1F2', color: '#E11D48', scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setIsLogoutModalOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              padding: '11px 16px',
              borderRadius: '12px',
              background: 'transparent',
              color: '#64748B',
              border: 'none',
              fontFamily: F.body,
              fontWeight: 500,
              fontSize: '13.5px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <i className="ti ti-logout" style={{ fontSize: '18px' }} />
            <span>Logout</span>
          </motion.button>
        </div>

        {/* User Footer Profile Pill */}
        <div
          style={{
            padding: '16px 20px',
            borderTop: '1px solid #F1F5F9',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#F8FAFC',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: C.navy,
              color: C.yellow,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '13px',
              fontFamily: F.display,
            }}
          >
            A
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <span style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: C.navy, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              Administrator
            </span>
            <span style={{ display: 'block', fontSize: '11.5px', color: '#94A3B8', fontWeight: 400 }}>
              Supabase Auth
            </span>
          </div>
        </div>
      </aside>

      {/* ── 2. MAIN CONTENT AREA ─────────────────────────────────────────── */}
      <div style={{ marginLeft: typeof window !== 'undefined' && window.innerWidth >= 1024 ? '260px' : '0px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* TOP HEADER (Slides from top via GSAP class `.admin-header`) */}
        <header
          className="admin-header"
          style={{
            height: '68px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid #E2E8F0',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 90,
          }}
        >
          {/* Left Title & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              type="button"
              onClick={() => setIsSidebarOpenMobile(!isSidebarOpenMobile)}
              style={{
                display: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'flex' : 'none',
                background: 'transparent',
                border: 'none',
                fontSize: '22px',
                color: C.navy,
                cursor: 'pointer',
              }}
            >
              <i className="ti ti-menu-2" />
            </button>
            <div>
              <h1 style={{ fontFamily: F.display, fontWeight: 600, fontSize: '18px', color: C.navy, margin: 0, letterSpacing: '-0.01em' }}>
                Blog Management
              </h1>
              <span style={{ fontFamily: F.body, fontSize: '12.5px', color: '#64748B', fontWeight: 400 }}>
                Manage website articles, Cloudinary images & publishing status
              </span>
            </div>
          </div>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href="/blog"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12.5px',
                fontWeight: 500,
                color: C.blue,
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: '14px',
                background: 'rgba(0, 87, 255, 0.05)',
                border: '1px solid rgba(0, 87, 255, 0.1)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>View Public Blog</span>
              <i className="ti ti-external-link" style={{ fontSize: '14px' }} />
            </a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              type="button"
              onClick={handleOpenCreateModal}
              style={{
                background: C.navy,
                color: C.white,
                fontFamily: F.body,
                fontWeight: 500,
                fontSize: '13px',
                padding: '9px 18px',
                border: 'none',
                borderRadius: '14px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(10, 22, 40, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 200ms ease-out',
              }}
            >
              <i className="ti ti-plus" style={{ color: C.yellow, fontSize: '16px' }} />
              <span>Create Blog Post</span>
            </motion.button>
          </div>
        </header>

        {/* MAIN BODY CONTAINER */}
        <main style={{ flex: 1, padding: '32px', maxWidth: '1400px', width: '100%', boxSizing: 'border-box', margin: '0 auto' }}>
          
          {/* ── STAT CARDS (Staggered Entrance Animation) ──────────────── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginBottom: '32px',
            }}
          >
            {loading ? (
              /* Stat Cards Skeleton Loader (No layout shift) */
              [0, 1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="skeleton-pulse"
                  style={{
                    height: '96px',
                    borderRadius: '20px',
                    border: '1px solid #E2E8F0',
                  }}
                />
              ))
            ) : (
              /* Real Stat Cards (Staggered 1-by-1 entrance: 40–60ms per card) */
              [
                { label: 'Total Articles', count: totalBlogs, icon: 'ti-news', color: C.blue, bg: 'rgba(0, 87, 255, 0.06)' },
                { label: 'Published Live', count: publishedCount, icon: 'ti-circle-check', color: '#10B981', bg: 'rgba(16, 185, 129, 0.08)' },
                { label: 'Draft Posts', count: draftCount, icon: 'ti-file-text', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.08)' },
                { label: 'Active Categories', count: categoryCount, icon: 'ti-category', color: C.navy, bg: 'rgba(255, 214, 0, 0.16)' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{ y: -3 }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '24px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: stat.bg, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                    <i className={`ti ${stat.icon}`} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 400, color: '#64748B', fontFamily: F.body }}>{stat.label}</span>
                    <span style={{ display: 'block', fontSize: '24px', fontWeight: 600, color: stat.color === C.blue || stat.color === C.navy ? C.navy : stat.color, fontFamily: F.display, lineHeight: 1.2 }}>{stat.count}</span>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* ── TOOLBAR: FILTER CHIPS & SEARCH (Soft fade & slide up after cards) ────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={filterBarVariants}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '16px 20px',
              marginBottom: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.02)',
            }}
          >
            {/* Category Filter Chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['All', 'SEO', 'Web Design', 'Lead Gen', 'Business Growth'].map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '7px 16px',
                      borderRadius: '9999px',
                      fontFamily: F.body,
                      fontWeight: 500,
                      fontSize: '12.5px',
                      whiteSpace: 'nowrap',
                      border: isActive ? 'none' : '1px solid #E2E8F0',
                      background: isActive ? C.navy : '#FFFFFF',
                      color: isActive ? C.white : '#475569',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 2px 8px rgba(10, 22, 40, 0.12)' : 'none',
                      transition: 'background-color 0.2s ease-out, border-color 0.2s ease-out',
                    }}
                  >
                    {cat}
                  </motion.button>
                );
              })}
            </div>

            {/* Search Box & View Mode Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, maxWidth: '420px', minWidth: '240px' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="text"
                  placeholder="Search articles by title or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    padding: '0 14px 0 38px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    fontFamily: F.body,
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#0F172A',
                    boxSizing: 'border-box',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = C.blue;
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 87, 255, 0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <i className="ti ti-search" style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', fontSize: '17px' }} />
              </div>

              {/* View Toggle */}
              <div style={{ display: 'flex', background: '#F1F5F9', padding: '3px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  style={{
                    padding: '6px 10px',
                    border: 'none',
                    borderRadius: '8px',
                    background: viewMode === 'table' ? '#FFFFFF' : 'transparent',
                    color: viewMode === 'table' ? C.navy : '#64748B',
                    boxShadow: viewMode === 'table' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                    cursor: 'pointer',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <i className="ti ti-list" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: '6px 10px',
                    border: 'none',
                    borderRadius: '8px',
                    background: viewMode === 'grid' ? '#FFFFFF' : 'transparent',
                    color: viewMode === 'grid' ? C.navy : '#64748B',
                    boxShadow: viewMode === 'grid' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                    cursor: 'pointer',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <i className="ti ti-layout-grid" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── 4. TABLE OR GRID VIEW (Fade & Slide Up) ─────────────────────────── */}
          {loading ? (
            /* Table Row Skeletons (Prevents flash of empty content / layout shift) */
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="skeleton-pulse" style={{ height: '56px', borderRadius: '12px' }} />
              ))}
            </div>
          ) : filteredBlogs.length === 0 ? (
            /* ELEGANT EMPTY STATE */
            <motion.div
              initial="hidden"
              animate="visible"
              variants={tableContainerVariants}
              style={{ background: '#FFFFFF', borderRadius: '20px', padding: '64px 20px', textAlign: 'center', border: '1px dashed #CBD5E1' }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#F8FAFC', color: '#94A3B8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px' }}>
                <i className="ti ti-news-off" />
              </div>
              <h3 style={{ fontFamily: F.display, fontWeight: 600, fontSize: '17px', color: C.navy, marginBottom: '6px' }}>No Blog Posts Found</h3>
              <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#64748B', fontWeight: 400, marginBottom: '20px', maxWidth: '400px', margin: '0 auto 20px' }}>
                No articles matched your search or category filter. Try clearing filters or create a new post.
              </p>
              <button
                type="button"
                onClick={handleOpenCreateModal}
                style={{
                  background: C.navy,
                  color: C.white,
                  fontFamily: F.body,
                  fontWeight: 500,
                  fontSize: '13px',
                  padding: '9px 18px',
                  border: 'none',
                  borderRadius: '14px',
                  cursor: 'pointer',
                }}
              >
                + Create Blog Post
              </button>
            </motion.div>
          ) : viewMode === 'table' ? (
            /* TABLE VIEW WITH STAGGERED ROW ANIMATION (40ms per row) */
            <motion.div
              initial="hidden"
              animate="visible"
              variants={tableContainerVariants}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              }}
            >
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: F.body }}>
                  <thead>
                    <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                      <th style={{ padding: '16px 24px', fontSize: '11.5px', fontWeight: 600, fontFamily: F.body, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Article Info</th>
                      <th style={{ padding: '16px 24px', fontSize: '11.5px', fontWeight: 600, fontFamily: F.body, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Category</th>
                      <th style={{ padding: '16px 24px', fontSize: '11.5px', fontWeight: 600, fontFamily: F.body, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                      <th style={{ padding: '16px 24px', fontSize: '11.5px', fontWeight: 600, fontFamily: F.body, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date</th>
                      <th style={{ padding: '16px 24px', fontSize: '11.5px', fontWeight: 600, fontFamily: F.body, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBlogs.map((blog, idx) => {
                      const isPublished = blog.status === 'published' || blog.status === 'Published';
                      const imageSrc = blog.cover_image || blog.image;

                      return (
                        <motion.tr
                          key={blog.id || blog.slug}
                          custom={idx}
                          initial="hidden"
                          animate="visible"
                          variants={rowVariants}
                          style={{
                            borderBottom: '1px solid #F1F5F9',
                            transition: 'background-color 150ms ease',
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = '#F8FAFC'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                        >
                          {/* Title & Image Cell */}
                          <td style={{ padding: '16px 24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ width: '56px', height: '56px', borderRadius: '16px', overflow: 'hidden', background: '#F1F5F9', flexShrink: 0, border: '1px solid #E2E8F0' }}
                              >
                                <img
                                  src={imageSrc || 'https://res.cloudinary.com/dpeq00iqq/image/upload/v1782632272/blog1_result_qbeazh.webp'}
                                  alt={blog.title}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                              </motion.div>
                              <div>
                                <strong style={{ display: 'block', fontSize: '14px', fontFamily: F.display, color: C.navy, fontWeight: 600, lineHeight: 1.35, marginBottom: '3px' }}>
                                  {blog.title}
                                </strong>
                                <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 400 }}>
                                  /{blog.slug}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Adaptive Category Badge */}
                          <td style={{ padding: '16px 24px' }}>
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                whiteSpace: 'nowrap',
                                minWidth: 'fit-content',
                                padding: '4px 12px',
                                borderRadius: '9999px',
                                fontSize: '11.5px',
                                fontWeight: 500,
                                fontFamily: F.body,
                                background: 'rgba(0, 87, 255, 0.07)',
                                color: C.blue,
                              }}
                            >
                              {blog.category || 'SEO'}
                            </span>
                          </td>

                          {/* Status Cell */}
                          <td style={{ padding: '16px 24px' }}>
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '4px 12px',
                                borderRadius: '9999px',
                                fontSize: '11.5px',
                                fontWeight: 500,
                                fontFamily: F.body,
                                background: isPublished ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                                color: isPublished ? '#059669' : '#D97706',
                              }}
                            >
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: isPublished ? '#10B981' : '#F59E0B' }} />
                              {isPublished ? 'Published' : 'Draft'}
                            </span>
                          </td>

                          {/* Date Cell */}
                          <td style={{ padding: '16px 24px', fontSize: '12.5px', color: '#64748B', fontWeight: 400 }}>
                            {blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Draft'}
                          </td>

                          {/* Modern Action Buttons */}
                          <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                              {/* View */}
                              <a
                                href={`/blog/${blog.slug}`}
                                target="_blank"
                                rel="noreferrer"
                                title="View live article"
                                style={{
                                  width: '38px',
                                  height: '38px',
                                  borderRadius: '12px',
                                  background: '#F8FAFC',
                                  color: '#475569',
                                  border: '1px solid #E2E8F0',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  textDecoration: 'none',
                                  transition: 'all 200ms ease',
                                }}
                              >
                                <i className="ti ti-eye" style={{ fontSize: '16px' }} />
                              </a>

                              {/* Edit */}
                              <motion.button
                                whileHover={{ scale: 1.03, backgroundColor: 'rgba(0, 87, 255, 0.12)' }}
                                whileTap={{ scale: 0.97 }}
                                type="button"
                                title="Edit Blog"
                                onClick={() => handleOpenEditModal(blog)}
                                style={{
                                  width: '38px',
                                  height: '38px',
                                  borderRadius: '12px',
                                  background: 'rgba(0, 87, 255, 0.07)',
                                  color: C.blue,
                                  border: 'none',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  transition: 'all 200ms ease',
                                }}
                              >
                                <i className="ti ti-pencil" style={{ fontSize: '16px' }} />
                              </motion.button>

                              {/* Delete */}
                              <motion.button
                                whileHover={{ scale: 1.03, backgroundColor: '#FFE4E6' }}
                                whileTap={{ scale: 0.97 }}
                                type="button"
                                title="Delete Blog"
                                onClick={() => setDeletingBlog(blog)}
                                style={{
                                  width: '38px',
                                  height: '38px',
                                  borderRadius: '12px',
                                  background: '#FFF1F2',
                                  color: '#E11D48',
                                  border: 'none',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  transition: 'all 200ms ease',
                                }}
                              >
                                <i className="ti ti-trash" style={{ fontSize: '16px' }} />
                              </motion.button>
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ) : (
            /* GRID VIEW WITH STAGGERED ENTRANCE */
            <motion.div
              initial="hidden"
              animate="visible"
              variants={tableContainerVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {filteredBlogs.map((blog, idx) => {
                const isPublished = blog.status === 'published' || blog.status === 'Published';
                const imageSrc = blog.cover_image || blog.image;

                return (
                  <motion.div
                    key={blog.id || blog.slug}
                    custom={idx}
                    initial="hidden"
                    animate="visible"
                    variants={rowVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ height: '160px', overflow: 'hidden', background: '#F1F5F9', position: 'relative' }}>
                      <img
                        src={imageSrc || 'https://res.cloudinary.com/dpeq00iqq/image/upload/v1782632272/blog1_result_qbeazh.webp'}
                        alt={blog.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          fontSize: '11px',
                          fontWeight: 500,
                          fontFamily: F.body,
                          background: isPublished ? '#10B981' : '#F59E0B',
                          color: '#FFFFFF',
                        }}
                      >
                        {isPublished ? 'Published' : 'Draft'}
                      </span>
                    </div>

                    <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          whiteSpace: 'nowrap',
                          minWidth: 'fit-content',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontSize: '11px',
                          fontWeight: 500,
                          fontFamily: F.body,
                          background: 'rgba(0, 87, 255, 0.07)',
                          color: C.blue,
                          alignSelf: 'flex-start',
                          marginBottom: '10px',
                        }}
                      >
                        {blog.category}
                      </span>

                      <h3
                        style={{
                          fontFamily: F.display,
                          fontWeight: 600,
                          fontSize: '15px',
                          color: C.navy,
                          marginBottom: '8px',
                          lineHeight: 1.4,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {blog.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: F.body,
                          fontSize: '13px',
                          fontWeight: 400,
                          color: '#64748B',
                          lineHeight: 1.55,
                          marginBottom: '20px',
                          flex: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {blog.excerpt || blog.shortDescription}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                        <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: 400 }}>
                          {blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Draft'}
                        </span>

                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(blog)}
                            style={{ padding: '6px 12px', borderRadius: '10px', background: 'rgba(0, 87, 255, 0.07)', color: C.blue, border: 'none', cursor: 'pointer', fontFamily: F.body, fontSize: '12px', fontWeight: 500 }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeletingBlog(blog)}
                            style={{ padding: '6px 12px', borderRadius: '10px', background: '#FFF1F2', color: '#E11D48', border: 'none', cursor: 'pointer', fontFamily: F.body, fontSize: '12px', fontWeight: 500 }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </main>
      </div>

      {/* ── MODALS ─────────────────────────────────────────── */}
      <BlogFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSave={handleSaveBlog}
        initialData={editingBlog}
        actionLoading={actionLoading}
      />

      <DeleteConfirmModal
        isOpen={!!deletingBlog}
        onClose={() => setDeletingBlog(null)}
        onConfirm={handleConfirmDelete}
        blogTitle={deletingBlog ? deletingBlog.title : ''}
        actionLoading={actionLoading}
      />

      <LogoutConfirmModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </motion.div>
  );
};

export default AdminDashboardPage;
