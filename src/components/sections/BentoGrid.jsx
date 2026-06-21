import React from 'react';

const BentoGrid = () => {
  const features = [
    {
      title: "100% Exclusive Leads",
      description: "Standard databases resell lists to dozens of companies, leading to bidding wars. We operate a strict 1-to-1 queue. Once assigned, a lead is permanently locked to your account.",
      badge: "Exclusive",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      accentColor: "var(--primary)"
    },
    {
      title: "Pre-Qualified Budgets",
      description: "We filter out hobbyist sites and low-budget campaigns. Every lead is pre-vetted to meet minimum budgets: $1,500+/mo for SEO retainers and $5,000+ for custom web design.",
      badge: "Vetted Budgets",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      accentColor: "var(--accent-green)"
    },
    {
      title: "Direct Owner Contact",
      description: "Bypass corporate gatekeepers and receptionist screeners. Every lead matches you directly with the owner, founder, CMO, or VP holding decision-making authority.",
      badge: "Direct Access",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      accentColor: "var(--secondary)"
    },
    {
      title: "Lead Replacement Guarantee",
      description: "We stand behind our lead quality. If a phone number is disconnected, a business is closed, or details are incorrect, we replace that lead instantly under our 7-day guarantee.",
      badge: "100% Guaranteed",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
        </svg>
      ),
      accentColor: "var(--accent-orange)"
    },
    {
      title: "Telephone-Confirmed Intent",
      description: "We do not just rely on email opt-ins. Our qualification team manually calls every calendar prospect to confirm their interest and business details before routing them.",
      badge: "Double-Vetted",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      accentColor: "var(--accent-cyan)"
    },
    {
      title: "Real-Time CRM Delivery",
      description: "Speed-to-lead is critical. Vetted buyer profiles are synchronized directly to your CRM (HubSpot, Salesforce) or pushed to SMS/Email in under 2 seconds.",
      badge: "Instant Sync",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      accentColor: "var(--secondary)"
    }
  ];

  return (
    <section id="services" className="feature-section section-padding relative">
      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <div className="section-tag">
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
            <span>Lead Features</span>
          </div>
          <h2>Designed for High-Converting Agency Growth</h2>
          <p className="subtitle">
            Not all B2B leads are created equal. We build a double-confirmed client pipeline that delivers qualified, exclusive business opportunities directly to your inbox.
          </p>
        </div>

        <div className="feature-cards-grid">
          {features.map((feature, index) => (
            <div className="glass-card feature-card animate-slide-up" key={index} style={{ animationDelay: `${0.1 * index}s`, borderTop: `4px solid ${feature.accentColor}` }}>
              <div className="feature-card-header">
                <span className="feature-icon" style={{ color: feature.accentColor, backgroundColor: `${feature.accentColor}12` }}>
                  {feature.icon}
                </span>
                <span className="feature-badge" style={{ color: feature.accentColor, backgroundColor: `${feature.accentColor}08` }}>{feature.badge}</span>
              </div>
              <div className="feature-card-body">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .feature-section {
          background-color: var(--bg-secondary);
        }
        .feature-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }
        .feature-card {
          padding: 30px;
          background-color: var(--bg-primary);
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-radius: var(--radius-md) !important;
          box-shadow: var(--shadow-sm);
        }
        .feature-card:hover {
          box-shadow: var(--shadow-lg);
        }
        .feature-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }
        .feature-card-body h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }
        .feature-card-body p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        @media (max-width: 1024px) {
          .feature-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .feature-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default BentoGrid;
