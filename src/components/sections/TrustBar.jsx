import React from 'react';

const TrustBar = () => {
  const logos = [
    { name: 'HubSpot', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 5.5a1.5 1.5 0 1 1-1.5-1.5A1.5 1.5 0 0 1 13 7.5zm-2.5 9h-1v-4h1zm3.5-2.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z' },
    { name: 'Salesforce', icon: 'M19.35 10.04a7.5 7.5 0 1 0-14.29 2.69A5.99 5.99 0 0 0 7 24h11.5a5.5 5.5 0 0 0 .85-10.96z' },
    { name: 'Zapier', icon: 'M12 2v20M22 12H2M19.07 4.93L4.93 19.07M19.07 19.07L4.93 4.93' },
    { name: 'Slack', icon: 'M5 12h14M12 5v14M12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm0 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0z' },
    { name: 'Calendly', icon: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z' },
    { name: 'ActiveCampaign', icon: 'M12 2L2 7l10 5 10-5-10-5zm-1 11.2L3.6 9.6l7.4 3.7 7.4-3.7-7.4 3.6z' }
  ];

  return (
    <div className="trust-bar-wrapper">
      <div className="container">
        <p className="trust-heading">
          Seamless Integrations with Your CRM and Agency Tech Stack
        </p>
        
        <div className="logo-carousel-container relative overflow-hidden">
          <div className="logo-carousel-track">
            {/* First Set of Logos */}
            {logos.map((logo, index) => (
              <div className="logo-item" key={`logo-1-${index}`}>
                <svg className="logo-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d={logo.icon} />
                </svg>
                <span className="logo-name">{logo.name}</span>
              </div>
            ))}
            {/* Duplicated Set of Logos for Infinite Loop */}
            {logos.map((logo, index) => (
              <div className="logo-item" key={`logo-2-${index}`}>
                <svg className="logo-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d={logo.icon} />
                </svg>
                <span className="logo-name">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .trust-bar-wrapper {
          padding: 40px 0;
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          transition: background-color var(--transition-normal);
        }
        .trust-heading {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          text-align: center;
          margin-bottom: 30px;
        }
        .logo-carousel-container {
          width: 100%;
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
        .logo-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 24px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          white-space: nowrap;
        }
        .logo-svg {
          width: 20px;
          height: 20px;
          color: var(--primary);
        }
        .logo-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        @media (max-width: 768px) {
          .trust-bar-wrapper {
            padding: 30px 0;
          }
          .trust-heading {
            font-size: 0.75rem;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
