import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import { getBlogBySlug } from '../services/blogService';
import BlogImg from '../assets/All Images/Blog_result.webp';

export const BlogDetailPage = ({ isMobile }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    getBlogBySlug(slug).then(({ data, error: fetchErr }) => {
      if (isMounted) {
        if (fetchErr || !data) {
          setError('Blog post not found');
          setBlog(null);
        } else {
          setBlog(data);
          // Set page SEO title & description
          if (data.seo_title || data.title) {
            document.title = data.seo_title || data.title;
          }
          if (data.seo_description || data.excerpt) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
              metaDesc.setAttribute('content', data.seo_description || data.excerpt);
            }
          }
        }
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div style={{ minHeight: '60vh', background: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white }}>
        <p style={{ fontFamily: F.display, fontWeight: 700, fontSize: '16px' }}>Loading article...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div style={{ minHeight: '60vh', background: C.navy, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: C.white, textAlign: 'center', padding: '40px' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.yellow, marginBottom: '12px' }}>
          Blog Post Not Found
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
          The requested article does not exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/blog')}
          style={{
            background: C.yellow,
            color: C.navy,
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: '12px',
            padding: '12px 24px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          ← BACK TO BLOGS
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: C.white }}>
      {/* Hero Banner */}
      <div style={{
        padding: '56px 24px',
        position: 'relative',
        background: C.navy,
        color: C.white,
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link to="/blog" style={{ color: C.yellow, textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', fontFamily: F.display, display: 'inline-block', marginBottom: '16px' }}>
            ← BACK TO ALL ARTICLES
          </Link>
          <span style={{
            display: 'block',
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: '11px',
            color: C.white,
            background: C.blue,
            padding: '4px 12px',
            margin: '0 auto 16px',
            borderRadius: '2px',
            width: 'fit-content',
            textTransform: 'uppercase',
          }}>
            {blog.category || 'SEO'}
          </span>
          <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: isMobile ? '26px' : '36px', color: C.white, marginBottom: '16px', lineHeight: 1.25 }}>
            {blog.title}
          </h1>
          <p style={{ fontFamily: F.body, fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 20px' }}>
            {blog.excerpt || blog.shortDescription}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
            <span style={{ fontWeight: 'bold', color: C.white }}>By {blog.author_name || 'SEO Submit Web'}</span>
            <span>•</span>
            <span>{blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent'}</span>
          </div>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div style={{ maxWidth: '1000px', margin: '-40px auto 40px', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ width: '100%', maxHeight: '480px', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', background: '#f3f4f6' }}>
          <img
            src={blog.cover_image || blog.image || BlogImg}
            alt={blog.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>

      {/* Main Content Body */}
      <SectionWrapper bg={C.white}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: F.body,
              fontSize: '15px',
              color: '#333333',
              lineHeight: 1.8,
              whiteSpace: 'pre-line',
            }}
          >
            {blog.content}
          </div>

          <div style={{ borderTop: '1px solid #eef2f6', marginTop: '48px', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/blog" style={{ color: C.blue, textDecoration: 'none', fontWeight: 'bold', fontFamily: F.display, fontSize: '13px' }}>
              ← Back to Insights
            </Link>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: C.navy,
                color: C.white,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '11px',
                padding: '12px 24px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              TALK TO OUR TEAM
            </button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default BlogDetailPage;
