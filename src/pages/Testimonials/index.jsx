import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';

const TestimonialsPage = () => {
  const [activeNiche, setActiveNiche] = useState('All');

  const niches = ['All', 'SaaS', 'Local Services', 'E-Commerce', 'Agencies'];

  // Map testimonials to categories manually if needed, or filter
  const getCategory = (company) => {
    if (company.includes('SaaS')) return 'SaaS';
    if (company.includes('Plumbing')) return 'Local Services';
    if (company.includes('Agency')) return 'Agencies';
    return 'E-Commerce';
  };

  const filteredReviews = testimonials.filter(test => {
    if (activeNiche === 'All') return true;
    return getCategory(test.company) === activeNiche;
  });

  return (
    <div className="testimonials-page animate-fade-in">
      {/* Hero Banner */}
      <section className="testimonials-hero section-padding text-center relative overflow-hidden">
        <div className="glow-blur" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', backgroundColor: 'var(--primary-glow)' }}></div>
        <div className="container">
          <span className="section-tag">Client Reviews</span>
          <h1>Proven Client Sourcing Success. Real Results.</h1>
          <p className="subtitle">
            Read detailed reviews, statistics, and success testimonies from our partners scaling agency revenue across diverse markets.
          </p>
        </div>
      </section>

      {/* Video / Graphic Testimonial Section */}
      <section className="video-testimonials section-padding border-t bg-tertiary">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Visual Proof</span>
            <h2>Client Success Story Spotlight</h2>
          </div>
          
          <div className="glass-card spotlight-card">
            <div className="spotlight-grid">
              <div className="spotlight-media">
                {/* Mockup Premium Video player overlay */}
                <div className="video-player-mock relative">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" alt="Video cover" className="video-cover-img" />
                  <div className="video-play-btn flex-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="spotlight-content text-left">
                <span className="badge badge-success mb-3">SaaS Niche Spotlight</span>
                <h3>"We added $15,000 in new retainers inside 3 weeks."</h3>
                <p className="spotlight-quote-text">
                  "Before partnering with SEOLeads, we spent hours manually cold calling and buying low-quality lists. The contacts took weeks to filter. Using their Growth Retainer plan, our pipeline was loaded with exclusive, verified leads within days, and we closed 3 new retainers."
                </p>
                <div className="spotlight-author mt-4">
                  <strong>Elena Rostova</strong>
                  <span>Head of Marketing, ScribeFlow SaaS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="client-reviews-section section-padding">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-tag">Agency Reviews</span>
            <h2>Feedback by Industry Verticals</h2>
          </div>

          <div className="niche-selector-row mb-5">
            {niches.map(niche => (
              <button
                key={niche}
                onClick={() => setActiveNiche(niche)}
                className={`niche-btn ${activeNiche === niche ? 'active' : ''}`}
              >
                {niche}
              </button>
            ))}
          </div>

          <div className="grid-2 reviews-grid">
            {filteredReviews.map((test, index) => (
              <div className="glass-card review-card text-left" key={index}>
                <div className="review-stars-row mb-3">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <svg className="star-icon" key={i} viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="review-quote-paragraph">"{test.quote}"</p>
                <div className="review-author-meta mt-4">
                  <img src={test.avatar} alt={test.author} className="review-avatar" />
                  <div className="review-author-info">
                    <strong>{test.author}</strong>
                    <span>{test.role} • {test.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .testimonials-page {
          background-color: var(--bg-primary);
        }
        .bg-tertiary {
          background-color: var(--bg-tertiary);
        }
        .testimonials-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }

        /* Spotlight Card */
        .spotlight-card {
          padding: 0;
          overflow: hidden;
        }
        .spotlight-card:hover {
          transform: none;
        }
        .spotlight-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
        }
        .video-player-mock {
          height: 100%;
          min-height: 300px;
          cursor: pointer;
        }
        .video-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .video-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: var(--primary);
          color: white;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
          transition: transform var(--transition-fast);
        }
        .video-player-mock:hover .video-play-btn {
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        .spotlight-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .spotlight-content h3 {
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.3;
          margin-bottom: 16px;
          color: var(--text-primary);
        }
        .spotlight-quote-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          font-style: italic;
          margin-bottom: 20px;
        }
        .spotlight-author {
          display: flex;
          flex-direction: column;
        }
        .spotlight-author strong {
          color: var(--text-primary);
          font-size: 1rem;
        }
        .spotlight-author span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Niche selector */
        .niche-selector-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .niche-btn {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 10px 24px;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .niche-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .niche-btn.active {
          background-color: var(--primary-light);
          border-color: var(--primary);
          color: var(--primary);
        }

        /* Grid */
        .review-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .review-stars-row {
          display: flex;
          gap: 4px;
          color: #fbbf24;
        }
        .review-quote-paragraph {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          font-style: italic;
        }
        .review-author-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid var(--border-light);
          padding-top: 20px;
        }
        .review-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
          flex-shrink: 0;
        }
        .review-author-info {
          display: flex;
          flex-direction: column;
        }
        .review-author-info strong {
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        .review-author-info span {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        @media (max-width: 1024px) {
          .spotlight-grid {
            grid-template-columns: 1fr;
          }
          .video-player-mock {
            min-height: 250px;
          }
          .spotlight-content {
            padding: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsPage;
