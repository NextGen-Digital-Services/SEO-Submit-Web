import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      num: '01',
      title: 'Targeted Campaign Sourcing',
      desc: 'We identify B2B prospects and local companies operating on slow, unoptimized CMS setups or dropping in organic search rankings, and launch targeted outbound campaigns.',
      color: 'var(--primary)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8z" />
          <polyline points="22,9 12,14 2,9" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Vetting & Intent Audit',
      desc: 'When a business owner responds, our validation strategists interview the decision-maker to confirm their specific growth goals, marketing challenges, and CMS CMS limits.',
      color: 'var(--accent-cyan)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Calendar Booking Sync',
      desc: 'If the prospect matches our budget baseline (e.g. $1,500/mo retainer), we schedule a discovery meeting straight on your sales development representatives calendar.',
      color: 'var(--secondary)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'Real-Time CRM Routing',
      desc: 'The pre-qualified lead profile is synced directly to your HubSpot, Salesforce, or Pipedrive queue within seconds, including audit dossiers and telephone confirmation logs.',
      color: 'var(--accent-green)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="process-section section-padding relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-blur process-glow" style={{ top: '20%', right: '5%', width: '300px', height: '300px', backgroundColor: 'var(--primary-glow)' }}></div>

      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <div className="section-tag">
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span>How Our Process Works</span>
          </div>
          <h2>Our Client Sourcing & Vetting Funnel</h2>
          <p className="subtitle">
            We don’t just scrape random database lists. We run active outreach campaigns, manually qualify budget thresholds, schedule calendar appointments, and deliver them to your CRM.
          </p>
        </div>

        <div className="process-flow relative">
          {/* Connector Line for Desktop */}
          <div className="desktop-connector-line"></div>

          <div className="process-grid">
            {steps.map((step, idx) => (
              <div 
                className="process-step-card relative animate-slide-up"
                key={idx}
                style={{ animationDelay: `${0.15 * idx}s` }}
              >
                {/* Step number badge */}
                <div className="step-number" style={{ color: step.color, borderColor: step.color }}>
                  {step.num}
                </div>
                
                {/* Icon wrapper */}
                <div className="step-icon-circle" style={{ backgroundColor: `${step.color}12`, color: step.color }}>
                  {step.icon}
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .process-section {
          background-color: var(--bg-primary);
        }
        .process-flow {
          margin-top: 60px;
        }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .desktop-connector-line {
          position: absolute;
          top: 30px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: dashed var(--border-light);
          z-index: 1;
        }
        .process-step-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 30px 24px;
          border-radius: var(--radius-lg);
          text-align: center;
          z-index: 2;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }
        .process-step-card:hover {
          transform: translateY(-6px);
          border-color: var(--primary-light);
          box-shadow: var(--shadow-lg);
        }
        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 2px solid;
          border-radius: 50%;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          margin-bottom: 20px;
          background-color: var(--bg-secondary);
        }
        .step-icon-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .step-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }
        .step-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        
        /* Process Section Responsiveness */
        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .desktop-connector-line {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
          .process-step-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSteps;
