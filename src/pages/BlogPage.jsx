import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import BlogNewsletterForm from '../forms/BlogNewsletterForm';
import BlogImg from '../assets/All Images/Blog_result.webp';
import { getPublishedBlogs } from '../services/blogService';

export const BlogPage = ({ isMobile }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Preload critical background image
  useEffect(() => {
    const img = new Image();
    img.src = BlogImg;
  }, []);

  // Fetch published blogs from Supabase dynamically on filter or search change
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    getPublishedBlogs({ category: filter, search: searchTerm }).then(({ data }) => {
      if (isMounted) {
        setBlogPosts(data || []);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [filter, searchTerm]);

  // Category border color helper
  const getCategoryBorder = (cat) => {
    if (cat === 'SEO') return C.yellow;
    if (cat === 'Web Design') return C.blue;
    return C.navy;
  };

  const featuredPost = blogPosts.length > 0 ? blogPosts[0] : null;
  const gridPosts = blogPosts; // Render all published blogs from Supabase in grid

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* GLOBAL PERFORMANCE AND ANIMATION INJECTION */}
      <style>{`
        .filter-btn {
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateZ(0);
        }
        .filter-btn:hover {
          background: ${C.yellow} !important;
          color: ${C.navy} !important;
          transform: translateY(-2px);
        }
        .blog-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, box-shadow;
          transform: translateZ(0);
        }
        .blog-card:hover {
          transform: translateY(-6px) translateZ(0);
          box-shadow: 0 12px 30px rgba(10, 22, 40, 0.12);
        }
        .blog-card img {
          transition: transform 0.5s ease;
        }
        .blog-card:hover img {
          transform: scale(1.04);
        }
        .cta-btn {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cta-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        @keyframes skeletonPulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>

      {/* [A] BLOG HERO */}
      <div style={{
        flex: 1,
        padding: '56px 40px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '320px',
        background: C.navy,
      }}>
        <img
          src={BlogImg}
          alt="Blog Background Insights"
          width="1354"
          height="1161"
          loading="eager"
          fetchpriority="high"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.35,
            zIndex: 0,
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(10, 22, 40, 0.6) 0%, rgba(10, 22, 40, 0.8) 100%)',
          zIndex: 1,
        }} />
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', width: '100%' }}>
          <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: isMobile ? '28px' : '36px', color: C.white, marginBottom: '14px', lineHeight: 1.2 }}>
            Industry Insights, <span style={{ color: C.yellow }}>Expert Guides</span> & Growth Strategies
          </h1>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Learn our insider methods for closing SEO retainers, scaling app dev contracts, and managing sales campaigns.
          </p>

          {/* Search Box */}
          <div style={{ maxWidth: '440px', margin: '0 auto 20px', position: 'relative' }}>
            <input
              type="text"
              placeholder="Search articles by keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 16px 11px 40px',
                background: 'rgba(255, 255, 255, 0.95)',
                color: C.navy,
                border: 'none',
                borderRadius: '24px',
                fontFamily: F.body,
                fontSize: '13px',
                outline: 'none',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                boxSizing: 'border-box',
              }}
            />
            <i className="ti ti-search" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: C.navy, fontSize: '16px' }} />
          </div>

          {/* Category Filter Buttons */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['All', 'SEO', 'Web Design', 'Lead Gen', 'Business Growth'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="filter-btn"
                style={{
                  background: filter === cat ? C.yellow : C.navy,
                  color: filter === cat ? C.navy : C.white,
                  fontFamily: F.display,
                  fontWeight: 700,
                  fontSize: '11px',
                  padding: '10px 18px',
                  border: filter === cat ? 'none' : `1px solid rgba(255,255,255,0.2)`,
                  cursor: 'pointer',
                  borderRadius: '4px',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* [B] FEATURED POST */}
      {featuredPost && (
        <section style={{ background: C.yellow, padding: '32px 24px' }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', 
            gap: '24px', 
            background: C.white, 
            padding: '24px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ background: C.blue, color: C.white, padding: '4px 10px', fontSize: '9px', fontWeight: 'bold', fontFamily: F.display, textTransform: 'uppercase', alignSelf: 'flex-start' }}>FEATURED ARTICLE</span>
              <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: isMobile ? '20px' : '24px', color: C.navy, marginTop: '12px', marginBottom: '12px', lineHeight: 1.3 }}>
                {featuredPost.title}
              </h2>
              <p style={{ fontFamily: F.body, fontSize: '13px', color: '#444', lineHeight: 1.6, marginBottom: '20px' }}>
                {featuredPost.excerpt || featuredPost.shortDescription}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: C.blue, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '10px' }}>
                  {featuredPost.author_name ? featuredPost.author_name.charAt(0) : 'S'}
                </div>
                <span style={{ fontSize: '11px', color: '#555', fontWeight: 'bold' }}>{featuredPost.author_name || 'SEO Submit Web'}</span>
                <span style={{ fontSize: '11px', color: '#888' }}>• {featuredPost.published_at ? new Date(featuredPost.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}</span>
              </div>
              <button
                onClick={() => navigate(`/blog/${featuredPost.slug}`)}
                className="cta-btn"
                style={{
                  background: C.navy,
                  color: C.white,
                  fontFamily: F.display,
                  fontWeight: 800,
                  fontSize: '11px',
                  letterSpacing: '1px',
                  padding: '14px 28px',
                  border: 'none',
                  cursor: 'pointer',
                  alignSelf: 'flex-start'
                }}
              >
                READ FULL ARTICLE →
              </button>
            </div>
            <div style={{ overflow: 'hidden', background: '#f3f4f6', aspectRatio: '16/9' }}>
              <img
                src={featuredPost.cover_image || featuredPost.image || 'https://res.cloudinary.com/dpeq00iqq/image/upload/v1782632272/blog1_result_qbeazh.webp'}
                alt={featuredPost.title}
                width="600"
                height="338"
                loading="eager"
                fetchpriority="high"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </section>
      )}

      {/* [C] ALL BLOG POSTS GRID */}
      <SectionWrapper bg={C.white}>
        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px', padding: '12px 0' }}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} style={{ background: '#f8fafc', height: '320px', borderRadius: '4px', animation: 'skeletonPulse 1.5s infinite ease-in-out' }} />
            ))}
          </div>
        ) : gridPosts.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '24px',
            padding: '12px 0' 
          }}>
            {gridPosts.map((post) => (
              <div 
                key={post.id || post.slug} 
                className="blog-card" 
                style={{ 
                  background: C.white, 
                  border: '1px solid #eef2f6', 
                  borderTop: `4px solid ${getCategoryBorder(post.category)}`, 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <div style={{ width: '100%', height: '150px', overflow: 'hidden', background: '#f3f4f6' }}>
                  <img 
                    src={post.cover_image || post.image || 'https://res.cloudinary.com/dpeq00iqq/image/upload/v1782632272/blog1_result_qbeazh.webp'} 
                    alt={post.title} 
                    width="400" 
                    height="150" 
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                  />
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span style={{
                    fontFamily: F.display,
                    fontWeight: 800,
                    fontSize: '9px',
                    color: C.white,
                    background: getCategoryBorder(post.category),
                    padding: '4px 10px',
                    alignSelf: 'flex-start',
                    marginBottom: '14px',
                    letterSpacing: '0.5px',
                    borderRadius: '2px'
                  }}>{post.category}</span>
                  <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '16px', color: C.navy, marginBottom: '10px', lineHeight: 1.3 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontFamily: F.body, fontSize: '12.5px', color: '#555', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                    {post.excerpt || post.shortDescription}
                  </p>
                  <span 
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    style={{ fontFamily: F.display, fontSize: '11px', fontWeight: 'bold', color: C.blue, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}
                  >
                    Read Article →
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px 20px', color: '#666' }}>
            <p style={{ fontFamily: F.display, fontWeight: 700, fontSize: '16px', color: C.navy }}>
              No published articles found matching your criteria.
            </p>
          </div>
        )}
      </SectionWrapper>

      {/* [E] NEWSLETTER SIGNUP */}
      <section style={{ background: C.navy, padding: '56px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.yellow, marginBottom: '8px' }}>
            Get Weekly Lead Generation Tips In Your Inbox
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '28px' }}>
            Join 3,000+ agency owners who trust SEO Submit Web.
          </p>
          <BlogNewsletterForm isMobile={isMobile} />
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '12px', textAlign: 'center' }}>
            No spam. Unsubscribe anytime. Your data is perfectly secure.
          </p>
        </div>
      </section>

      {/* [F] BOTTOM CTA */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white, marginBottom: '18px' }}>
          Ready to buy leads instead of waiting for them?
        </h2>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => navigate('/contact')} 
            className="cta-btn"
            style={{ 
              background: C.yellow, 
              color: C.navy, 
              fontFamily: F.display, 
              fontWeight: 800, 
              fontSize: '11px', 
              letterSpacing: '1px', 
              padding: '16px 36px', 
              border: 'none', 
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            GET STARTED NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;