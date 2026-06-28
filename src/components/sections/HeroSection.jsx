import React, { useState } from 'react';

const HeroSection = () => {
  const [emailInput, setEmailInput] = useState('');
  const [leadNiche, setLeadNiche] = useState('seo');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setEmailInput('');
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="hero-section overflow-hidden relative" aria-label="Introduction Lead Generation Sourcing">
      {/* Background Decorative Blurs */}
      <div className="glow-blur hero-glow-1" style={{ top: '10%', left: '10%', width: '400px', height: '400px', backgroundColor: 'var(--primary-glow)', pointerEvents: 'none' }}></div>
      <div className="glow-blur hero-glow-2" style={{ bottom: '20%', right: '10%', width: '350px', height: '350px', backgroundColor: 'var(--secondary-light)', opacity: 0.2, pointerEvents: 'none' }}></div>

      <div className="container hero-container animate-fade-in">
        {/* Left Column: Text & CTA Form */}
        <div className="hero-content text-left">
          <div className="section-tag animate-slide-up" style={{ animationDelay: '0.1s', display: 'inline-flex', alignItems: 'center' }}>
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Exclusive Lead Sourcing Desk</span>
          </div>
          
          <h1 className="hero-title animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Exclusive SEO & Web Design Leads <span className="text-gradient">Booked on Calendar</span>
          </h1>
          
          <p className="hero-description animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Stop wasting months on cold calling and expensive generic databases. Secure verified B2B decision-makers actively seeking search optimization retainers and custom redesigns.
          </p>

          {/* Quick Submit Form */}
          <div className="hero-form-wrapper animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="hero-form" aria-label="Quick sample lead request form">
              <div className="input-group">
                <span className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <label htmlFor="heroEmail" className="sr-only" style={{ display: 'none' }}>Agency Email Address</label>
                <input 
                  type="email" 
                  id="heroEmail"
                  placeholder="Enter your agency email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="hero-input"
                />
              </div>
              <div className="niche-selector-group">
                <label htmlFor="heroNiche" className="sr-only" style={{ display: 'none' }}>Select Lead Specialty</label>
                <select 
                  id="heroNiche"
                  className="niche-select"
                  value={leadNiche}
                  onChange={(e) => setLeadNiche(e.target.value)}
                >
                  <option value="seo">SEO Leads</option>
                  <option value="web-design">Web Design Leads</option>
                  <option value="appointment">Appointment Fixed</option>
                </select>
              </div>
              <button type="submit" className="btn btn-orange hero-submit-btn" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Request Vetted Leads'}
              </button>
            </form>

            {success && (
              <div className="submit-success-toast animate-slide-up" role="alert">
                <svg className="toast-success-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Request received! We will email you a sample <strong>{leadNiche.toUpperCase()}</strong> lead dossier within 24 hours.</span>
              </div>
            )}
          </div>

          {/* Key Value Pillars */}
          <div className="hero-pillars animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="pillar-item">
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>100% Exclusivity Guarantee</span>
            </div>
            <div className="pillar-item">
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Vetted Budgets & Intent</span>
            </div>
            <div className="pillar-item">
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Real-Time CRM Integrations</span>
            </div>
          </div>
        </div>

        {/* Right Column: Vetted Team Image & Credentials */}
        <div className="hero-graphic animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="hero-image-card">
            <div className="hero-image-wrapper">
              <img src="/agency_team_meeting.png" alt="Established Lead Generation Agency Team Coordinating Client Pipeline Sourcing" className="hero-image" />
            </div>
            <div className="hero-image-badge-container">
              <span className="hero-image-badge-dot"></span>
              <span className="hero-image-badge-text"><strong>Established Leader</strong> • 100% Exclusive Lead Sourcing</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 100px;
          padding-bottom: 80px;
          background: radial-gradient(circle at top center, rgba(37, 99, 235, 0.03) 0%, transparent 70%);
          box-sizing: border-box;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          box-sizing: border-box;
        }
        .hero-content {
          max-width: 680px;
          box-sizing: border-box;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -2px;
          color: var(--text-primary);
          margin-bottom: 24px;
          margin-top: 0;
        }
        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 35px;
        }
        .hero-form-wrapper {
          margin-bottom: 35px;
          box-sizing: border-box;
        }
        .hero-form {
          display: flex;
          gap: 12px;
          background-color: var(--bg-secondary);
          padding: 8px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-lg);
          box-sizing: border-box;
        }
        .hero-form:focus-within {
          border-color: var(--primary);
          box-shadow: var(--shadow-lg), 0 0 0 3px var(--border-focus);
        }
        .input-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-grow: 1.5;
          padding-left: 12px;
          box-sizing: border-box;
        }
        .niche-selector-group {
          display: flex;
          align-items: center;
          border-left: 1px solid var(--border-light);
          padding-left: 12px;
          flex-grow: 0.5;
          box-sizing: border-box;
        }
        .niche-select {
          border: none;
          background: none;
          outline: none;
          width: 100%;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          height: 100%;
        }
        .input-icon {
          color: var(--text-muted);
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .hero-input {
          border: none;
          background: none;
          outline: none;
          width: 100%;
          color: var(--text-primary);
          font-size: 1rem;
          box-sizing: border-box;
        }
        .hero-submit-btn {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: white;
          border-radius: var(--radius-md);
          padding: 14px 24px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          white-space: nowrap;
          transition: opacity 0.2s ease;
        }
        .hero-submit-btn:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
        .submit-success-toast {
          margin-top: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          background-color: var(--accent-green-light);
          border: 1px solid var(--accent-green);
          color: var(--text-primary);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          box-sizing: border-box;
        }
        .toast-success-icon {
          color: var(--accent-green);
          flex-shrink: 0;
        }
        .hero-pillars {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          box-sizing: border-box;
        }
        .pillar-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .pillar-icon {
          width: 18px;
          height: 18px;
          color: var(--accent-green);
          flex-shrink: 0;
        }
        
        .hero-image-card {
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-xl);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-sizing: border-box;
        }
        .hero-image-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .hero-image-card:hover .hero-image {
          transform: scale(1.02);
        }
        .hero-image-badge-container {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background-color: var(--primary-light);
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--primary);
          box-sizing: border-box;
          text-align: left;
        }
        .hero-image-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent-orange);
        }
        .hero-image-badge-text {
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        /* Hero Responsive Breakpoints */
        @media (max-width: 1440px) {
          .hero-title {
            font-size: 3.2rem;
          }
        }
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .hero-content {
            margin: 0 auto;
            text-align: center;
          }
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-pillars {
            justify-content: center;
          }
          .hero-image-card {
            max-width: 500px;
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
            letter-spacing: -1px;
          }
          .hero-form {
            flex-direction: column;
            padding: 12px;
            gap: 16px;
          }
          .input-group {
            padding-left: 0;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border-light);
            width: 100%;
          }
          .niche-selector-group {
            border-left: none;
            padding-left: 0;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border-light);
            width: 100%;
          }
          .niche-select {
            padding: 4px 0;
          }
          .hero-submit-btn {
            width: 100%;
            padding: 16px;
          }
        }
        @media (max-width: 375px) {
          .hero-title {
            font-size: 1.8rem;
          }
          .hero-pillars {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;