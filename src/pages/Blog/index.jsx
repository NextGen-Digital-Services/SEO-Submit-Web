import React, { useState } from 'react';
import { blogPosts } from '../../data/blog-posts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = ['All', 'SEO Strategy', 'Local SEO', 'Link Building', 'Lead Generation', 'Web Design', 'Conversion Optimization'];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0]; // First post as featured
  const gridPosts = filteredPosts.filter(post => post.id !== featuredPost.id);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSubscribed(false), 5000);
  };

  return (
    <div className="blog-page animate-fade-in">
      {/* Blog Hero Banner */}
      <section className="blog-hero section-padding text-center relative overflow-hidden">
        <div className="glow-blur" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', backgroundColor: 'var(--primary-glow)' }}></div>
        <div className="container">
          <span className="section-tag">Search Insights</span>
          <h1>The Agency Client Acquisition Blog</h1>
          <p className="subtitle">
            Expert articles, sales strategies, and industry analyses on pre-vetted leads, booked calendar appointments, and B2B client acquisition channels.
          </p>
        </div>
      </section>

      {/* Featured Post Block */}
      {selectedCategory === 'All' && !searchTerm && (
        <section className="featured-post-section container mb-5">
          <div className="glass-card featured-post-card animate-slide-up">
            <div className="featured-grid-inner">
              <div className="featured-img-col">
                <img src={featuredPost.image} alt={featuredPost.title} className="featured-img-node" />
              </div>
              <div className="featured-text-col text-left">
                <span className="badge badge-primary mb-3">{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="post-meta-details mb-4">
                  <span className="meta-author">By <strong>{featuredPost.author}</strong></span>
                  <span className="meta-divider">•</span>
                  <span className="meta-date">{featuredPost.date}</span>
                  <span className="meta-divider">•</span>
                  <span className="meta-time">{featuredPost.readTime}</span>
                </div>
                <div className="featured-paragraph-preview">
                  {featuredPost.content}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar Row */}
      <section className="blog-filters-section container py-4 border-y">
        <div className="filters-row flex-between">
          {/* Categories list */}
          <div className="category-pills">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="search-box-wrapper">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input search-input-field"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section section-padding">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="no-posts-found text-center">
              <h3>No articles match your search or filter choice.</h3>
              <button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }} className="btn btn-secondary mt-3">
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid-3 blog-posts-grid">
              {(searchTerm || selectedCategory !== 'All' ? filteredPosts : gridPosts).map((post) => (
                <div className="glass-card blog-post-item text-left animate-slide-up" key={post.id}>
                  <div className="post-thumb-wrapper">
                    <img src={post.image} alt={post.title} className="post-thumb-img" />
                    <span className="post-cat-badge">{post.category}</span>
                  </div>
                  <div className="post-card-content">
                    <div className="post-card-meta mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="post-card-title">{post.title}</h3>
                    <p className="post-card-excerpt">{post.excerpt}</p>
                    <div className="post-card-author mt-4">
                      <span>By <strong>{post.author}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="blog-newsletter section-padding border-t bg-tertiary">
        <div className="container max-width-article text-center">
          <h2>Get Sales Conversion Guides Sent To Your Inbox</h2>
          <p className="subtitle mb-4">Subscribe to our newsletter and stay ahead of lead verification tips, calendar appointment booking practices, and sales follow-up checklists.</p>
          
          {newsletterSubscribed ? (
            <div className="submit-success-toast inline-flex">
              <svg className="toast-success-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Thanks for subscribing! Check your inbox for our B2B sales follow-up checklist.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form-inline">
              <input
                type="email"
                placeholder="Enter your work email address"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="form-input newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe Now
              </button>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .blog-page {
          background-color: var(--bg-primary);
        }
        .border-y {
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .border-t {
          border-top: 1px solid var(--border-light);
        }
        .bg-tertiary {
          background-color: var(--bg-tertiary);
        }
        .max-width-article {
          max-width: 800px;
          margin: 0 auto;
        }
        .blog-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }

        /* Featured Card */
        .featured-post-card {
          padding: 0;
          overflow: hidden;
        }
        .featured-post-card:hover {
          transform: none;
        }
        .featured-grid-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
        }
        .featured-img-node {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .featured-text-col {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .featured-text-col h2 {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 16px;
          color: var(--text-primary);
        }
        .featured-excerpt {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .post-meta-details {
          display: flex;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .featured-paragraph-preview {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Filters Bar */
        .category-pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .category-pill-btn {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .category-pill-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .category-pill-btn.active {
          background-color: var(--primary-light);
          border-color: var(--primary);
          color: var(--primary);
        }
        .search-input-field {
          width: 250px;
        }

        /* Grid */
        .blog-post-item {
          padding: 0;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .post-thumb-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .post-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }
        .blog-post-item:hover .post-thumb-img {
          transform: scale(1.05);
        }
        .post-cat-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: var(--primary);
          color: white;
          padding: 4px 10px;
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }
        .post-card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .post-card-meta {
          display: flex;
          gap: 10px;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .post-card-title {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--text-primary);
          line-height: 1.35;
        }
        .post-card-excerpt {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          flex-grow: 1;
        }
        .post-card-author {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Newsletter form */
        .newsletter-form-inline {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
          gap: 10px;
        }
        .newsletter-input {
          flex-grow: 1;
        }

        @media (max-width: 1024px) {
          .featured-grid-inner {
            grid-template-columns: 1fr;
          }
          .featured-img-col {
            height: 300px;
          }
          .featured-text-col {
            padding: 30px;
          }
          .filters-row {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
          .search-input-field {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
