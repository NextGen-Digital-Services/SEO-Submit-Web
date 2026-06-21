import React, { useState } from 'react';

const LeadDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('why-us');

  const tabs = [
    { id: 'why-us', name: 'Why Choose Our Leads' },
    { id: 'seo-leads', name: 'SEO Leads Benefits' },
    { id: 'web-design-leads', name: 'Web Design Leads Benefits' },
    { id: 'appointment-leads', name: 'Appointment Fixed Leads Benefits' }
  ];

  const tabContents = {
    'why-us': {
      authority: 'CORE PROMISE',
      name: 'Proven Sourcing & Verification Standards',
      description: 'We generate exclusive B2B leads from decision-makers actively searching for optimization retainers and technical redesigns. No cold outreach, no recycled lists.',
      image: '/agency_team_meeting.png',
      imageAlt: 'Lead Generation Sourcing Team Collaboration',
      bullets: [
        { title: '100% Exclusive Leads', text: '1-to-1 distribution queue permanently locked to your account. No bidding wars.' },
        { title: '7-Day Replacement Guarantee', text: 'Disconnected lines or closed businesses are credited back immediately.' },
        { title: 'Telephone-Confirmed Intent', text: 'Our qualification team manually calls every calendar prospect to verify details.' },
        { title: 'Direct C-Level Access', text: 'Connect straight to verified business owners, VPs, or CMOs with approval power.' }
      ]
    },
    'seo-leads': {
      authority: 'SEO PIPELINE',
      name: 'Highly Qualified SEO Retainer Prospects',
      description: 'Scale your monthly recurring revenue (MRR) with organic search buyers who need to improve rankings, recover organic traffic drops, or claim local market space.',
      image: '/seo_leads.png',
      imageAlt: 'SEO Leads Client Discussion',
      bullets: [
        { title: 'Verified Organic Traffic Drops', text: 'We target businesses struggling with rankings or experiencing visibility loss.' },
        { title: 'Minimum $1,500/mo Budgets', text: 'Pre-qualified thresholds filter out low-margin, small-business budgets.' },
        { title: 'Active Audit Inquiries', text: 'Captured when business owners request ranking or authority reports.' },
        { title: 'Bypassing Gatekeepers', text: 'Every lead card gives direct contact info for the decision-maker.' }
      ]
    },
    'web-design-leads': {
      authority: 'DESIGN PIPELINE',
      name: 'Pre-Scoped Web Design & Migration Leads',
      description: 'Secure redesign contracts for custom corporate setups, e-commerce storefront migrations, or headless developments with approved project budgets.',
      image: '/web_design_leads.png',
      imageAlt: 'Web Design Collaboration',
      bullets: [
        { title: 'Legacy & Outdated CMS Scanning', text: 'Targeting sites running on slow, outdated, or unresponsive legacy platforms.' },
        { title: 'Pre-Scoped Specifications', text: 'Verified scope for modern Webflow, Shopify Plus, or WordPress migrations.' },
        { title: 'Vetted $5,000+ Budgets', text: 'Manual phone verification filters for mid-market to enterprise-level redesigns.' },
        { title: 'Direct Access to Budget Holder', text: 'Speak directly with the CEO or founder who holds budget authority.' }
      ]
    },
    'appointment-leads': {
      authority: 'CALENDAR SYNC',
      name: 'Double-Confirmed Calendar Appointments',
      description: 'Skip prospecting and cold outreach. We coordinate the appointments, verify attendance, and schedule meetings directly on your sales reps\' calendars.',
      image: '/appointment_leads.png',
      imageAlt: 'Sales Call Confirmation Setting',
      bullets: [
        { title: 'Direct Calendar Integration', text: 'Confirmed meetings booked directly onto your Google or Outlook calendar.' },
        { title: 'Live Phone Call Confirmations', text: 'We call every lead 24 hours prior to confirm attendance and interest.' },
        { title: 'Recorded Audio Call Proof', text: 'Listen to the verification call recording before the meeting begins.' },
        { title: 'No-Show Attendance Protection', text: 'Free rescheduled booking if a prospect misses the scheduled slot.' }
      ]
    }
  };

  const activeContent = tabContents[activeTab] || tabContents['why-us'];

  return (
    <section id="dashboard-showcase" className="showcase-section section-padding relative overflow-hidden">
      <div className="container">
        <div className="section-title-wrapper animate-slide-up">
          <div className="section-tag">
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
              <line x1="9" y1="9" x2="21" y2="9" />
              <line x1="9" y1="15" x2="21" y2="15" />
            </svg>
            <span>Our Sourcing Standards</span>
          </div>
          <h2>Designed for High-Converting Agency Pipelines</h2>
          <p className="subtitle">
            Select a service category below to review our verification methods, lead quality standards, and delivery guarantees.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="showcase-tabs animate-slide-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Active Grid Preview */}
        <div className="showcase-display-grid animate-slide-up">
          {/* Left card: Category Description */}
          <div className="glass-card showcase-desc-card">
            <div className="type-details">
              <span className="badge badge-primary mb-3" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>{activeContent.authority}</span>
              <h3>{activeContent.name}</h3>
              <p className="description-text">{activeContent.description}</p>
              
              <div className="bullets-container">
                {activeContent.bullets.map((bullet, idx) => (
                  <div key={idx} className="bullet-item">
                    <span className="bullet-icon-wrapper">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="bullet-text">
                      <strong>{bullet.title}</strong>
                      <p>{bullet.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right card: Business Image Visual */}
          <div className="glass-card image-preview-card">
            <div className="preview-image-wrapper">
              <img src={activeContent.image} alt={activeContent.imageAlt} className="preview-image" />
            </div>
            <div className="preview-footer">
              <span className="footer-tag"><span className="pulse-dot"></span> Double-Vetted Sourcing Desk</span>
              <span className="footer-lead-guarantee">Lead Replacement Guarantee Active</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .showcase-section {
          background-color: var(--bg-secondary);
          transition: background-color var(--transition-normal);
        }
        .showcase-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .tab-btn {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          padding: 12px 24px;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .tab-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .tab-btn.active {
          background-color: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }
        
        .showcase-display-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 30px;
          align-items: stretch;
        }
        .showcase-desc-card {
          padding: 40px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          text-align: left;
        }
        .type-details h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .description-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .bullets-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .bullet-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .bullet-icon-wrapper {
          background-color: var(--accent-orange-light);
          color: var(--accent-orange);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .bullet-text strong {
          color: var(--text-primary);
          font-size: 0.95rem;
          display: block;
        }
        .bullet-text p {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin: 0;
          line-height: 1.4;
        }
        
        /* Image Preview Styles */
        .image-preview-card {
          padding: 12px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-radius: var(--radius-md) !important;
        }
        .preview-image-wrapper {
          width: 100%;
          flex-grow: 1;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }
        .preview-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .preview-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 4px 4px;
          font-size: 0.8rem;
        }
        .footer-tag {
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-green);
          border-radius: 50%;
          display: inline-block;
          animation: pulseGlow 1.5s infinite;
        }
        .footer-lead-guarantee {
          color: var(--accent-orange);
          font-weight: 700;
        }
        
        /* Responsiveness */
        @media (max-width: 1024px) {
          .showcase-display-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .showcase-desc-card {
            padding: 30px;
          }
        }
        @media (max-width: 768px) {
          .showcase-tabs {
            gap: 8px;
          }
          .tab-btn {
            padding: 10px 18px;
            font-size: 0.8rem;
            width: 100%;
          }
          .preview-footer {
            flex-direction: column;
            gap: 8px;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadDashboardPreview;
