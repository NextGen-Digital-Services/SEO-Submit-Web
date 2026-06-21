import React from 'react';

const AuthorityMetrics = () => {
  const metrics = [
    {
      value: '185K+',
      label: 'Exclusive Leads Generated',
      description: 'High-intent SEO and Web Design business contacts verified manually by our outreach strategists.',
      color: 'var(--primary)'
    },
    {
      value: '98.2%',
      label: 'Average Appointment Show Rate',
      description: 'Pre-confirmed meeting coordinates managed through active telephone verification call logs.',
      color: 'var(--accent-cyan)'
    },
    {
      value: '450+',
      label: 'Partner Agencies Scaled',
      description: 'Digital agencies, search consultants, and creative studios scaling their sales pipeline.',
      color: 'var(--secondary)'
    },
    {
      value: '100%',
      label: 'Exclusivity Rate',
      description: 'Leads are delivered 1-to-1 and permanently locked. We never resell, share, or recycle contacts.',
      color: 'var(--accent-green)'
    }
  ];

  return (
    <section className="metrics-section section-padding relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="glow-blur metrics-glow" style={{ top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '300px', backgroundColor: 'var(--primary-glow)' }}></div>

      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <div className="section-tag">
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3v18h18" />
              <path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3" />
            </svg>
            <span>Trust & Experience</span>
          </div>
          <h2>We Deliver Vetted B2B Leads to Scale Your Agency</h2>
          <p className="subtitle">
            See the concrete figures behind the SEOLeads client acquisition network. We prioritize speed, validation accuracy, and client ROI.
          </p>
        </div>

        <div className="grid-4 metrics-grid">
          {metrics.map((metric, index) => (
            <div 
              className="glass-card metric-card animate-slide-up" 
              key={index}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="metric-glow-dot" style={{ backgroundColor: metric.color }}></div>
              <span className="metric-value" style={{ color: metric.color }}>{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
              <p className="metric-desc">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .metrics-section {
          background-color: var(--bg-primary);
          position: relative;
        }
        .metrics-grid {
          margin-top: 20px;
        }
        .metric-card {
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .metric-glow-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          border-radius: 0 0 var(--radius-full) var(--radius-full);
          opacity: 0.8;
        }
        .metric-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 12px;
          letter-spacing: -2px;
        }
        .metric-label {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .metric-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        
        @media (max-width: 1440px) {
          .metric-value {
            font-size: 3rem;
          }
        }
        @media (max-width: 1024px) {
          .metric-value {
            font-size: 2.8rem;
          }
          .metric-card {
            padding: 30px 20px;
          }
        }
        @media (max-width: 375px) {
          .metric-value {
            font-size: 2.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AuthorityMetrics;
