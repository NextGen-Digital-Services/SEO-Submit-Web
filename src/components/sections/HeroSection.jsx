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
    <section className="hero-section overflow-hidden relative">
      {/* Background Decorative Blurs */}
      <div className="glow-blur hero-glow-1" style={{ top: '10%', left: '10%', width: '400px', height: '400px', backgroundColor: 'var(--primary-glow)' }}></div>
      <div className="glow-blur hero-glow-2" style={{ bottom: '20%', right: '10%', width: '350px', height: '350px', backgroundColor: 'var(--secondary-light)', opacity: 0.2 }}></div>

      <div className="container hero-container animate-fade-in">
        {/* Left Column: Text & CTA Form */}
        <div className="hero-content text-left">
          <div className="section-tag animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
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
            <form onSubmit={handleSubmit} className="hero-form">
              <div className="input-group">
                <span className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <input 
                  type="email" 
                  placeholder="Enter your agency email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="hero-input"
                />
              </div>
              <div className="niche-selector-group">
                <select 
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
              <div className="submit-success-toast animate-slide-up">
                <svg className="toast-success-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>100% Exclusivity Guarantee</span>
            </div>
            <div className="pillar-item">
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Vetted Budgets & Intent</span>
            </div>
            <div className="pillar-item">
              <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
              <img src="/agency_team_meeting.png" alt="Established Lead Generation Agency Team" className="hero-image" />
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
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .hero-content {
          max-width: 680px;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -2px;
          color: var(--text-primary);
          margin-bottom: 24px;
        }
        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 35px;
        }
        .hero-form-wrapper {
          margin-bottom: 35px;
        }
        .hero-form {
          display: flex;
          gap: 12px;
          background-color: var(--bg-secondary);
          padding: 8px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-lg);
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
        }
        .niche-selector-group {
          display: flex;
          align-items: center;
          border-left: 1px solid var(--border-light);
          padding-left: 12px;
          flex-grow: 0.5;
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
        }
        .input-icon {
          color: var(--text-muted);
          display: flex;
          align-items: center;
        }
        .hero-input {
          border: none;
          background: none;
          outline: none;
          width: 100%;
          color: var(--text-primary);
          font-size: 1rem;
        }
        .hero-submit-btn {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: white;
          border-radius: var(--radius-md);
          padding: 14px 24px;
          font-weight: 600;
          cursor: pointer;
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
        }
        .toast-success-icon {
          color: var(--accent-green);
          flex-shrink: 0;
        }
        .hero-pillars {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
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
        }
        
        /* Hero Professional Image Card Styles */
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
        }
        .hero-image-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent-orange);
          animation: pulseGlow 1.5s infinite;
        }
        .hero-image-badge-text {
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        /* Hero Responsive breakpoints */
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
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
            letter-spacing: -1px;
          }
          .hero-form {
            flex-direction: column;
            padding: 8px;
          }
          .input-group {
            padding-left: 4px;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--border-light);
          }
          .niche-selector-group {
            border-left: none;
            padding-left: 4px;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--border-light);
          }
          .hero-submit-btn {
            width: 100%;
          }
        }
        @media (max-width: 560px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .dashboard-body {
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
