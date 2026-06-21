import React, { useState } from 'react';
import { caseStudies } from '../../data/case-studies';

const CaseStudyCard = () => {
  const [activeStudy, setActiveStudy] = useState(0);

  return (
    <section id="case-studies" className="case-studies-section section-padding relative overflow-hidden">
      {/* Decorative glows */}
      <div className="glow-blur cs-glow-1" style={{ top: '20%', left: '5%', width: '400px', height: '400px', backgroundColor: 'var(--primary-glow)' }}></div>
      <div className="glow-blur cs-glow-2" style={{ bottom: '10%', right: '5%', width: '350px', height: '350px', backgroundColor: 'var(--secondary-light)' }}></div>

      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <div className="section-tag">
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
              <path d="M12 2a5 5 0 0 0-5 5v3c0 3.3 2.7 6 6 6s6-2.7 6-6V7a5 5 0 0 0-5-5z" />
            </svg>
            <span>Success Proof</span>
          </div>
          <h2>Client Acquisition Case Studies</h2>
          <p className="subtitle">
            Read how digital marketing agencies, SEO consultants, and design studios scale their sales pipelines and MRR with our exclusive B2B leads.
          </p>
        </div>

        {/* Dynamic Selector Tabs */}
        <div className="cs-selector-row animate-slide-up">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveStudy(index)}
              className={`cs-select-btn ${activeStudy === index ? 'active' : ''}`}
            >
              <span className="cs-btn-client">{study.client}</span>
              <span className="cs-btn-ind">{study.industry}</span>
            </button>
          ))}
        </div>

        {/* Selected Case Study Active Details Display */}
        <div className="cs-display-wrapper animate-slide-up">
          {caseStudies.map((study, index) => {
            if (index !== activeStudy) return null;
            return (
              <div className="cs-active-grid" key={study.id}>
                {/* Left Side: Photo + Quote */}
                <div className="cs-image-column relative">
                  <img src={study.image} alt={study.client} className="cs-cover-img" />
                  <div className="cs-quote-card glass-card">
                    <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.192 15.757c0-.907-.188-1.754-.565-2.54s-.91-1.466-1.599-2.044 1.564-2.28 1.564-4.852c0-2.285-1.161-3.216-2.507-3.216-1.835 0-3.15 1.82-3.15 4.1 0 2.21 1.096 3.233 1.096 3.233S4.5 13.96 4.5 16.51c0 2.429 1.708 4.385 4.099 4.385 2.597 0 2.593-3.238 2.593-5.138zm10.72 0c0-.907-.188-1.754-.565-2.54s-.91-1.466-1.599-2.044 1.564-2.28 1.564-4.852c0-2.285-1.161-3.216-2.507-3.216-1.835 0-3.15 1.82-3.15 4.1 0 2.21 1.096 3.233 1.096 3.233S15.22 13.96 15.22 16.51c0 2.429 1.708 4.385 4.099 4.385 2.597 0 2.593-3.238 2.593-5.138z" />
                    </svg>
                    <p className="quote-text">"{study.quote}"</p>
                    <span className="quote-author">{study.client} Team</span>
                  </div>
                </div>

                {/* Right Side: Text challenge, solution, and growth meters */}
                <div className="cs-info-column text-left">
                  <span className="badge badge-success mb-2">{study.industry} Case Study</span>
                  <h3 className="cs-main-heading">How we accelerated {study.client}'s sales pipeline</h3>
                  
                  <div className="cs-qa-block">
                    <h4>The Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                  
                  <div className="cs-qa-block">
                    <h4>The Solution</h4>
                    <p>{study.solution}</p>
                  </div>

                  {/* Growth Metrics Indicators */}
                  <div className="cs-metrics-row">
                    <div className="cs-metric-card-inner">
                      <span className="cs-metric-num text-gradient">{study.metrics.organicTraffic}</span>
                      <span className="cs-metric-label">Campaign Metric</span>
                    </div>
                    <div className="cs-metric-card-inner">
                      <span className="cs-metric-num text-gradient-cyan">{study.metrics.domainAuthority}</span>
                      <span className="cs-metric-label">Vetted ROI</span>
                    </div>
                    <div className="cs-metric-card-inner">
                      <span className="cs-metric-num" style={{ color: 'var(--accent-green)' }}>{study.metrics.leadsGenerated}</span>
                      <span className="cs-metric-label">Revenue Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .case-studies-section {
          background-color: var(--bg-primary);
        }
        
        .cs-selector-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .cs-select-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 16px 28px;
          border-radius: var(--radius-md);
          cursor: pointer;
          min-width: 180px;
          transition: all var(--transition-normal);
        }
        .cs-select-btn:hover {
          border-color: var(--primary);
        }
        .cs-select-btn.active {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          background-color: var(--primary-light);
        }
        .cs-btn-client {
          font-size: 1rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .cs-btn-ind {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 4px;
          font-weight: 600;
        }
        .cs-select-btn.active .cs-btn-client {
          color: var(--primary);
        }

        .cs-display-wrapper {
          width: 100%;
          min-height: 480px;
        }
        .cs-active-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .cs-image-column {
          border-radius: var(--radius-xl);
          overflow: visible;
          position: relative;
        }
        .cs-cover-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
        }
        .cs-quote-card {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background-color: rgba(var(--bg-secondary), 0.8);
          padding: 24px;
          max-width: 320px;
          text-align: left;
          border-radius: var(--radius-md);
        }
        .quote-icon {
          width: 24px;
          height: 24px;
          color: var(--primary);
          margin-bottom: 12px;
          opacity: 0.6;
        }
        .quote-text {
          font-size: 0.85rem;
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 8px;
        }
        .quote-author {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .cs-info-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cs-main-heading {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 24px;
          line-height: 1.25;
        }
        .cs-qa-block {
          margin-bottom: 20px;
        }
        .cs-qa-block h4 {
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--primary);
          margin-bottom: 6px;
        }
        .cs-qa-block p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .cs-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 30px;
        }
        .cs-metric-card-inner {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 16px;
          text-align: center;
        }
        .cs-metric-num {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 4px;
        }
        .cs-metric-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        /* Case Studies Responsive layout */
        @media (max-width: 1024px) {
          .cs-active-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cs-image-column {
            order: 2;
            max-width: 600px;
            margin: 0 auto;
          }
          .cs-info-column {
            order: 1;
          }
        }
        @media (max-width: 768px) {
          .cs-select-btn {
            width: 100%;
          }
          .cs-quote-card {
            position: static;
            max-width: 100%;
            margin-top: 20px;
          }
          .cs-cover-img {
            height: 280px;
          }
          .cs-metrics-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudyCard;
