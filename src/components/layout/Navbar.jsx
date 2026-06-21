import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'SEO Leads', path: '/seo-leads' },
    { name: 'Web Design Leads', path: '/web-design-leads' },
    { name: 'Appointment Fixed Leads', path: '/appointment-leads' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="glass-navbar">
      <div className="container nav-container">
        {/* LOGO */}
        <Link to="/" className="logo-wrapper">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#navbar-logo-glow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="url(#navbar-logo-glow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="url(#navbar-logo-glow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="navbar-logo-glow" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--secondary)" />
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">SEO<span className="text-gradient">Leads</span></span>
        </Link>

        {/* NAVIGATION LINKS (Desktop) */}
        <div className="nav-links-desktop">
          {links.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => `nav-link-item ${isActive ? 'active-link' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* ACTIONS (CTA + Burger) */}
        <div className="nav-actions">
          {/* Desktop CTA */}
          <Link to="/contact" className="btn btn-orange btn-sm btn-nav-cta">
            Get Started
          </Link>

          {/* Mobile Menu Burger Icon */}
          <button 
            className={`mobile-menu-burger ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Full screen overlay with smooth slide-down) */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header flex-between container">
          <Link to="/" className="logo-wrapper" onClick={() => setMobileMenuOpen(false)}>
            <span className="logo-text">SEO<span className="text-gradient">Leads</span></span>
          </Link>
          <button 
            className="mobile-drawer-close" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <ul className="mobile-nav-links container">
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className="mobile-nav-link-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mobile-cta-li">
            <Link 
              to="/contact" 
              className="btn btn-orange btn-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>

      {/* Styled inline components to guarantee perfect rendering */}
      <style>{`
        .glass-navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: rgba(var(--bg-secondary-rgb), 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-glass);
          height: 80px;
          display: flex;
          align-items: center;
          transition: background-color var(--transition-normal);
        }
        
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--text-primary);
          font-family: var(--font-heading);
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-icon {
          width: 28px;
          height: 28px;
        }

        .logo-text {
          letter-spacing: -0.5px;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-link-item {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          position: relative;
          padding: 8px 0;
          text-decoration: none;
          white-space: nowrap;
          transition: color var(--transition-fast);
        }

        .nav-link-item:hover {
          color: var(--primary);
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          transition: width var(--transition-normal);
        }

        .nav-link-item:hover::after,
        .active-link::after {
          width: 100%;
        }

        .active-link {
          color: var(--primary) !important;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .theme-toggle-btn {
          background: none;
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          padding: 8px;
          border-radius: var(--radius-md);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .theme-toggle-btn:hover {
          background-color: var(--bg-tertiary);
          border-color: var(--primary-light);
          color: var(--primary);
        }

        .btn-nav-cta {
          display: inline-flex;
        }

        /* Burger Menu Icon */
        .mobile-menu-burger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 22px;
          height: 16px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 101;
        }

        .mobile-menu-burger span {
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Mobile Drawer */
        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--bg-primary);
          z-index: 200;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          display: flex;
          flex-direction: column;
          padding-top: 24px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, visibility 0.4s;
        }

        .mobile-menu-drawer.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-drawer-header {
          width: 100%;
          margin-bottom: 40px;
        }

        .mobile-drawer-close {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow-y: auto;
          flex-grow: 1;
          padding-bottom: 40px;
        }

        .mobile-nav-link-item {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          display: block;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-light);
          text-decoration: none;
        }

        .mobile-nav-link-item:hover {
          color: var(--primary);
        }

        .mobile-cta-li {
          margin-top: 20px;
          list-style: none;
        }

        /* Responsive breakpoints */
        @media (max-width: 1280px) {
          .nav-links-desktop {
            gap: 12px;
          }
          .nav-link-item {
            font-size: 0.82rem;
          }
        }

        @media (max-width: 1150px) {
          .nav-links-desktop {
            display: none !important;
          }
          .mobile-menu-burger {
            display: flex;
          }
          .btn-nav-cta {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
