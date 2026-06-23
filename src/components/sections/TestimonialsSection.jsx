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
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section section-padding relative">
      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <div className="section-tag">
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Testimonials</span>
          </div>
          <h2>What Agency Leaders Say About Us</h2>
          <p className="subtitle">
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
              {/* Rating stars */}
              <div className="stars-row mb-3">
                {renderStars(test.rating)}
              </div>

              {/* Quote */}
              <p className="testimonial-quote">"{test.quote}"</p>

              {/* Author Profiles */}
              <div className="testimonial-author">
                <div className="author-avatar-container">
                  <img src={test.avatar} alt={test.author} className="author-avatar" />
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
        }
        .testimonials-grid {
          margin-top: 20px;
        }
        .testimonial-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
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
          margin-bottom: 30px;
          flex-grow: 1;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid var(--border-light);
          padding-top: 20px;
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
        }
        .author-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          padding: 0;
          margin: 0;
        }
        .author-details {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .author-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        
        @media (max-width: 768px) {
          .testimonial-card {
            padding: 24px;
          }
          .testimonial-quote {
            margin-bottom: 20px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
