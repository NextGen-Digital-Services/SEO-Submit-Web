import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    package: 'gold',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        package: 'gold',
        message: ''
      });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page animate-fade-in">
      {/* Hero Banner */}
      <section className="contact-hero section-padding text-center relative overflow-hidden">
        <div className="glow-blur" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', backgroundColor: 'var(--primary-glow)' }}></div>
        <div className="container">
          <span className="section-tag">Direct Line</span>
          <h1>Request Exclusive Lead Access</h1>
          <p className="subtitle">
            Connect with our lead generation consultants to configure your target criteria, vetted budget thresholds, and unlock warm agency opportunities.
          </p>
        </div>
      </section>

      {/* Grid: Form and Business Details */}
      <section className="contact-grid-section container mb-5">
        <div className="grid-2 contact-main-grid">
          {/* Left: Detailed Contact Form */}
          <div className="glass-card contact-form-card">
            {success ? (
              <div className="contact-success-box text-center">
                <span className="success-icon-circle-lg">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <h3>Inquiry Successfully Submitted!</h3>
                <p>
                  Thanks for reaching out. A Senior Lead Specialist will review your agency parameters and email you within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-actual-form text-left">
                <div className="form-row-double mb-3">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@yourbrand.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-double mb-3">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="website">Website Domain URL</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    placeholder="e.g. https://yourbrand.com"
                    value={formData.website}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="package">Target Lead Package</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="bronze">Bronze Campaign (10 leads / week)</option>
                    <option value="silver">Silver Campaign (20 leads / week)</option>
                    <option value="gold">Gold Campaign (50 leads / week)</option>
                    <option value="platinum">Platinum Campaign (100 leads / week)</option>
                    <option value="enterprise">Custom Enterprise Campaign</option>
                  </select>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="message">Campaign Goals / Target Niches</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your target client profiles, geographical constraints, and CRM integrations..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-orange btn-block btn-lg" disabled={loading}>
                  {loading ? 'Submitting Inquiry...' : 'Submit Inquiry & Request Lead Queue Setup'}
                </button>
              </form>
            )}
          </div>

          {/* Right: Business details & mock map */}
          <div className="contact-details-col text-left">
            <div className="glass-card details-card mb-4">
              <h3>Office Headquarters</h3>
              <p className="address-block mt-3 mb-4">
                <strong>SEOLeads Inc.</strong><br />
                Suite 420, Tech Tower West<br />
                840 Financial Avenue, San Francisco, CA 94104
              </p>

              <div className="contact-links-list">
                <div className="link-item-icon mb-3">
                  <svg className="contact-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>inbound@seoleads.me</span>
                </div>
                <div className="link-item-icon mb-3">
                  <svg className="contact-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+1 (800) 555-LEADS</span>
                </div>
              </div>
            </div>

            {/* Mock Maps API visual */}
            <div className="glass-card mock-map-card overflow-hidden">
              <div className="mock-map-visual relative flex-center">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" alt="Mock map" className="map-img-node" />
                <div className="map-marker-pin animate-float">
                  <span className="marker-inner"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          background-color: var(--bg-primary);
        }
        .contact-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }

        .contact-form-card {
          padding: 40px;
        }
        .form-row-double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .contact-success-box {
          padding: 40px 0;
        }
        .success-icon-circle-lg {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: var(--accent-green-light);
          color: var(--accent-green);
          margin-bottom: 24px;
        }
        .contact-success-box h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: var(--text-primary);
        }
        .contact-success-box p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .details-card {
          padding: 30px;
        }
        .details-card h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .address-block {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .link-item-icon {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .contact-svg-icon {
          width: 18px;
          height: 18px;
          color: var(--primary);
        }

        /* Mock Map Visual */
        .mock-map-card {
          padding: 0;
          height: 250px;
        }
        .mock-map-visual {
          width: 100%;
          height: 100%;
        }
        .map-img-node {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) contrast(1.1) brightness(0.9);
        }
        .map-marker-pin {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(37, 99, 235, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marker-inner {
          width: 16px;
          height: 16px;
          background-color: var(--primary);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .form-row-double {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .contact-form-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
