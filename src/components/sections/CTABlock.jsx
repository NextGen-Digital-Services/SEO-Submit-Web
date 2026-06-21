import React, { useState } from 'react';

const CTABlock = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    siteUrl: '',
    niche: 'seo',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
      setFormData({ brandName: '', siteUrl: '', niche: 'seo', email: '' });
    }, 2000);
  };

  return (
    <section id="cta" className="cta-section section-padding relative overflow-hidden">
      {/* Soft gradients instead of cheap glowing effects */}
      <div className="cta-glow-1"></div>
      <div className="cta-glow-2"></div>

      <div className="container">
        <div className="cta-main-card">
          <div className="cta-grid">
            
            {/* Left side text block */}
            <div className="cta-info text-left">
              <div className="cta-eyebrow">
                <svg className="eyebrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Contact CTA</span>
              </div>
              <h2 className="cta-heading">
                Ready to Secure Your Exclusive Lead Stream?
              </h2>
              <p className="cta-desc">
                Submit your agency parameters in our setup wizard. Our lead validation team will scan your requirements, compile your custom sample leads, and configure your routing queue.
              </p>
              
              <div className="cta-checklist">
                <div className="check-item-cta">
                  <svg className="check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>100% exclusive 1-to-1 lead routing</span>
                </div>
                <div className="check-item-cta">
                  <svg className="check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Pre-vetted budgets and decision-makers</span>
                </div>
                <div className="check-item-cta">
                  <svg className="check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>HubSpot, Salesforce, & Zapier integrations</span>
                </div>
              </div>
            </div>

            {/* Right side form block */}
            <div className="cta-form-container">
              {completed ? (
                <div className="cta-success-screen text-center">
                  <span className="success-icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h3>Lead Allocation Initiated</h3>
                  <p>
                    Your lead routing parameters have been registered. A B2B lead strategist will contact you shortly with your sample dossiers and CRM integration guide.
                  </p>
                  <button onClick={() => setCompleted(false)} className="btn btn-secondary btn-sm" style={{ color: 'var(--text-primary)' }}>
                    Request Another Setup
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cta-wizard-form">
                  <div className="form-group mb-3">
                    <label htmlFor="brandName">Agency / Company Name</label>
                    <input 
                      type="text" 
                      id="brandName"
                      name="brandName"
                      placeholder="e.g. Apex Digital SEO" 
                      required
                      value={formData.brandName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group mb-3">
                    <label htmlFor="siteUrl">Agency Website URL</label>
                    <input 
                      type="url" 
                      id="siteUrl"
                      name="siteUrl"
                      placeholder="e.g. https://apexseo.com" 
                      required
                      value={formData.siteUrl}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="niche">Target Lead Specialty</label>
                    <select 
                      id="niche"
                      name="niche"
                      value={formData.niche}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="seo">SEO Campaign Leads</option>
                      <option value="web-design">Web Design & Redesign Leads</option>
                      <option value="appointment">Appointment Fixed Bookings</option>
                      <option value="custom">Custom B2B Outreach Sourcing</option>
                    </select>
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="email">Work Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      placeholder="e.g. partner@apexseo.com" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <button type="submit" className="btn-submit-cta" disabled={loading}>
                    {loading ? 'Configuring Routing...' : 'Initialize Lead Routing Queue'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          background-color: var(--bg-secondary);
          position: relative;
          z-index: 1;
        }

        .cta-glow-1 {
          display: none;
        }

        .cta-glow-2 {
          display: none;
        }

        .cta-main-card {
          background: #ffffff;
          border: 2px solid var(--primary);
          box-shadow: var(--shadow-xl);
          border-radius: 12px;
          padding: 60px;
          color: var(--text-primary);
          position: relative;
          overflow: hidden;
        }

        .cta-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--primary-light);
          border: 1px solid var(--border-light);
          color: var(--primary);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
        }

        .eyebrow-icon {
          width: 14px;
          height: 14px;
          stroke-width: 2.5;
        }

        .cta-heading {
          font-size: 2.6rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .cta-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .cta-checklist {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .check-item-cta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .check-svg {
          width: 18px;
          height: 18px;
          color: var(--accent-orange);
          flex-shrink: 0;
        }

        /* Form Container - HubSpot style */
        .cta-form-container {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-md);
          padding: 40px;
          border-radius: 8px;
          color: var(--text-primary);
        }

        .cta-wizard-form {
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .cta-form-container .form-input {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 6px;
          padding: 12px 14px;
          color: var(--text-primary);
          font-size: 0.9rem;
          width: 100%;
          outline: none;
          transition: all 0.2s ease;
        }

        .cta-form-container .form-input::placeholder {
          color: var(--text-muted);
        }

        .cta-form-container .form-input:hover {
          border-color: var(--text-muted);
        }

        .cta-form-container .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--border-focus);
          background: #ffffff;
        }

        .cta-form-container .form-input option {
          background-color: #ffffff;
          color: var(--text-primary);
        }

        .btn-submit-cta {
          background: var(--accent-orange);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 6px;
          padding: 14px 24px;
          border: none;
          cursor: pointer;
          width: 100%;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(234, 88, 12, 0.2);
        }

        .btn-submit-cta:hover {
          background: var(--accent-orange-hover);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(234, 88, 12, 0.35);
        }

        /* Success Screen */
        .cta-success-screen {
          padding: 20px 0;
        }

        .success-icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--accent-green-light);
          border: 1px solid var(--accent-green);
          color: var(--accent-green);
          margin-bottom: 24px;
        }

        .success-icon-circle svg {
          width: 28px;
          height: 28px;
        }

        .cta-success-screen h3 {
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 12px;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .cta-success-screen p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cta-main-card {
            padding: 40px;
          }
          .cta-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cta-heading {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .cta-main-card {
            padding: 30px 20px;
            border-radius: 16px;
          }
          .cta-form-container {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default CTABlock;
