import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo1.png';

const Footer = () => {
  return (
    <footer className="premium-footer" aria-label="Site Footer">
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
          position: 'absolute',
          pointerEvents: 'none' /* Prevents blocking clicks */
        }}
      ></div>
      
      <div className="footer-container">
        
        {/* FOOTER GRID */}
        <div className="footer-main-grid">
          
          {/* Column 1: Logo & Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-wrapper" aria-label="SEO Submit Web Home">
              <img
                src={Logo}
                alt="SEO Submit Web Logo"
                style={{
                  height: '34px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
              <span className="footer-logo-text">
                SEO SUBMIT<span style={{ color: '#ffffff' }}> WEB</span>
              </span>
            </Link>
            
            <p className="brand-pitch">
              Exclusive, pre-qualified SEO and Web Design leads generated for digital agencies and marketing companies. Vetted budgets, double-verified contact data, and direct CRM sync.
            </p>

            {/* Social Icons */}
            <div className="social-icons-row">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/imran-merchant/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn" 
                aria-label="Follow Imran Merchant on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <nav className="footer-col links-col" aria-label="Services Links">
            <h3 className="footer-col-title">Services</h3>
            <ul>
              <li><Link to="/seo-leads">SEO Leads</Link></li>
              <li><Link to="/web-design-leads">Web Design Leads</Link></li>
              <li><Link to="/appointment-leads">Appointment Fixed Leads</Link></li>
              <li><Link to="/seo-leads">SEO Retainers</Link></li>
              <li><Link to="/appointment-leads">Booked Appointments</Link></li>
            </ul>
          </nav>

          {/* Column 3: Company */}
          <nav className="footer-col links-col" aria-label="Company Links">
            <h3 className="footer-col-title">Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Column 4: Resources */}
          <nav className="footer-col links-col" aria-label="Resources Links">
            <h3 className="footer-col-title">Resources</h3>
            <ul>
              <li><Link to="/contact#privacy">Privacy Policy</Link></li>
              <li><Link to="/contact#terms">Terms of Service</Link></li>
              <li><Link to="/contact#faq">FAQ</Link></li>
              <li><Link to="/contact#support">Support</Link></li>
            </ul>
          </nav>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} SEO Submit Web. All Rights Reserved.
          </p>
          <nav className="footer-bottom-links" aria-label="Legal Links">
            <Link to="/contact#privacy">Privacy Policy</Link>
            <span className="footer-divider" aria-hidden="true">|</span>
            <Link to="/contact#terms">Terms</Link>
            <span className="footer-divider" aria-hidden="true">|</span>
            <Link to="/contact#contact">Contact</Link>
          </nav>
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

        .footer-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          text-decoration: none;
        }

        .footer-logo-text {
          font-family: 'Montserrat', sans-serif;
          状况;
          font-weight: 900;
          font-size: 16px;
          color: '#FFD600';
          color: #FFD600;
          white-space: nowrap;
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
          width: 44px; /* Optimized for mobile touch targets */
          height: 44px; 
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
          padding: 4px 0; /* Better touch target on mobile */
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
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-bottom-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
          padding: 6px 0;
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
            row-gap: 40px;
          }
        }

        /* Mobile: 1-column stack */
        @media (max-width: 767px) {
          .premium-footer {
            padding-top: 48px;
            padding-bottom: 32px;
          }
          .footer-main-grid {
            grid-template-columns: 1fr;
            row-gap: 36px;
          }
          .footer-col {
            align-items: center;
            text-align: center;
          }
          .footer-col ul {
            align-items: center;
          }
          .footer-logo-wrapper {
            justify-content: center;
          }
          .footer-bottom-bar {
            flex-direction: column-reverse;
            gap: 16px;
            text-align: center;
            align-items: center;
            padding-top: 24px;
            margin-top: 32px;
          }
          .brand-pitch {
            max-width: 100%;
          }
          .footer-col ul a {
            padding: 8px 0; /* Even wider tap zone for fat-fingers on mobile */
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;