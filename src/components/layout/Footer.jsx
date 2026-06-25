import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo1.png';

const Footer = () => {
  return (
    <footer className="premium-footer">
      {/* Decorative Glow */}
      <div 
        className="glow-blur" 
        style={{ 
          width: '300px', 
          height: '300px', 
          background: 'var(--primary-glow)', 
          top: '-150px', 
          left: '10%',
          opacity: 0.1,
          position: 'absolute'
        }}
      ></div>
      
      <div className="footer-container">
        
        {/* FOOTER GRID */}
        <div className="footer-main-grid">
          
          {/* Column 1: Logo & Brand Info */}
          <div className="footer-col brand-col">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '12px',
            }}>
              <img
                src={Logo}
                alt="SEO Submit Web"
                style={{
                  height: '34px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: '16px',
                color: '#FFD600',
                whiteSpace: 'nowrap',
              }}>
                SEO SUBMIT<span style={{ color: '#ffffff' }}> WEB</span>
              </span>
            </div>
            
            <p className="brand-pitch">
              Exclusive, pre-qualified SEO and Web Design leads generated for digital agencies and marketing companies. Vetted budgets, double-verified contact data, and direct CRM sync.
            </p>

            {/* Social Icons */}
            <div className="social-icons-row">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/imran-merchant/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col links-col">
            <h3 className="footer-col-title">Services</h3>
            <ul>
              <li><Link to="/seo-leads">SEO Leads</Link></li>
              <li><Link to="/web-design-leads">Web Design Leads</Link></li>
              <li><Link to="/appointment-leads">Appointment Fixed Leads</Link></li>
              <li><Link to="/seo-leads">SEO Retainers</Link></li>
              <li><Link to="/appointment-leads">Booked Appointments</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col links-col">
            <h3 className="footer-col-title">Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-col links-col">
            <h3 className="footer-col-title">Resources</h3>
            <ul>
              <li><Link to="/contact#privacy">Privacy Policy</Link></li>
              <li><Link to="/contact#terms">Terms of Service</Link></li>
              <li><Link to="/contact#faq">FAQ</Link></li>
              <li><Link to="/contact#support">Support</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2025 SEO Submit Web. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/contact#privacy">Privacy Policy</Link>
            <span className="footer-divider">|</span>
            <Link to="/contact#terms">Terms</Link>
            <span className="footer-divider">|</span>
            <Link to="/contact#contact">Contact</Link>
          </div>
        </div>

      </div>

      <style>{`
        .premium-footer {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          padding-top: 80px;
          padding-bottom: 40px;
          position: relative;
          overflow: hidden;
          transition: background-color var(--transition-normal);
        }
        
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          padding-left: 24px;
          padding-right: 24px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          column-gap: 48px;
          row-gap: 32px;
          margin-bottom: 60px;
          align-items: start;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--text-primary);
          font-family: var(--font-heading);
          text-decoration: none;
          margin-bottom: 20px;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
        }

        .brand-pitch {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 320px;
        }

        .social-icons-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-normal);
        }

        .social-icon {
          width: 18px;
          height: 18px;
          display: block;
          transition: transform var(--transition-fast);
        }

        .social-btn:hover {
          background-color: var(--primary);
          border-color: var(--primary);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .social-btn:hover .social-icon {
          transform: scale(1.1);
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-col ul a {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 500;
          text-decoration: none;
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-block;
        }

        .footer-col ul a:hover {
          color: var(--primary);
          transform: translateX(4px);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid var(--border-light);
          padding-top: 32px;
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
        }

        .footer-bottom-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-bottom-links a:hover {
          color: var(--primary);
        }

        .footer-divider {
          color: var(--border-light);
          margin: 0 12px;
          font-size: 0.9rem;
          user-select: none;
        }

        /* Responsive Breakpoints */
        
        /* Tablet: 2-column grid */
        @media (max-width: 1023px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 48px;
            row-gap: 32px;
          }
        }

        /* Mobile: 1-column stack */
        @media (max-width: 767px) {
          .premium-footer {
            padding-top: 60px;
            padding-bottom: 30px;
          }
          .footer-main-grid {
            grid-template-columns: 1fr;
            row-gap: 40px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 16px;
            text-align: center;
            align-items: center;
            padding-top: 24px;
            margin-top: 32px;
          }
          .brand-pitch {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
