import React from 'react';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, idx) => (
      <svg 
        className="star-icon" 
        key={idx} 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        width="16" 
        height="16"
        aria-hidden="true"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section section-padding relative" aria-label="Client Success Reviews">
      <div className="container">
        <div className="section-title-wrapper animate-slide-up" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Testimonials</span>
          </div>
          <h2>What Agency Leaders Say About Us</h2>
          <p className="subtitle" style={{ maxWidth: '720px', margin: '16px auto 0 auto' }}>
            Read feedback from digital marketing agencies, SEO consultants, and design studio directors scaling their MRR with our pre-vetted leads.
          </p>
        </div>

        <div className="grid-2 testimonials-grid">
          {testimonials.map((test, index) => (
            <div 
              className="glass-card testimonial-card animate-slide-up" 
              key={index}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div>
                {/* Rating stars */}
                <div className="stars-row mb-3" style={{ marginBottom: '16px' }} aria-label={`Rated ${test.rating} stars out of 5`}>
                  {renderStars(test.rating)}
                </div>

                {/* Quote */}
                <blockquote className="testimonial-quote" style={{ margin: '0 0 30px 0' }}>
                  <p style={{ margin: 0 }}>"{test.quote}"</p>
                </blockquote>
              </div>

              {/* Author Profiles */}
              <div className="testimonial-author">
                <div className="author-avatar-container">
                  <img src={test.avatar} alt={`Client portrait of ${test.author}`} className="author-avatar" loading="lazy" />
                </div>
                <div className="author-details">
                  <span className="author-name">{test.author}</span>
                  <span className="author-meta">{test.role} • <strong>{test.company}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background-color: var(--bg-secondary);
          transition: background-color var(--transition-normal);
          box-sizing: border-box;
        }
        .testimonials-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
          box-sizing: border-box;
        }
        .testimonial-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
          height: 100%;
          box-sizing: border-box;
        }
        .stars-row {
          display: flex;
          gap: 4px;
          color: #fbbf24; /* Amber star color */
        }
        .testimonial-quote {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-style: italic;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid var(--border-light);
          padding-top: 20px;
          box-sizing: border-box;
        }
        .author-avatar-container {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid var(--primary-light);
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .author-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .author-details {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 2px;
        }
        .author-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 24px;
          }
          .testimonial-quote {
            margin-bottom: 20px !important;
            font-size: 0.95rem;
          }
          .section-title-wrapper h2 {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 380px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .testimonial-author {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;