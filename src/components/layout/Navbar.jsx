import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo1.png';

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
    <nav className="glass-navbar" aria-label="Main Navigation">
      <div className="container nav-container">
        {/* LOGO */}
        <Link to="/" className="nav-logo-link" aria-label="SEO Submit Web Home">
          <img
            src={Logo}
            alt="SEO Submit Web Logo"
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: '18px',
            letterSpacing: '0.5px',
            color: '#FFD600',
            whiteSpace: 'nowrap',
          }}>
            SEO SUBMIT<span style={{ color: '#ffffff' }}> WEB</span>
          </span>
        </Link>

        {/* NAVIGATION LINKS (Desktop) */}
        <div className="nav-links-desktop" role="navigation">
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
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div 
        id="mobile-nav-drawer"
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'active' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-header container">
          <Link to="/" style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }} onClick={() => setMobileMenuOpen(false)}>
            <img
              src={Logo}
              alt="SEO Submit Web Logo"
              style={{
                height: '38px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: '18px',
              letterSpacing: '0.5px',
              color: '#FFD600',
              whiteSpace: 'nowrap',
            }}>
              SEO SUBMIT<span style={{ color: '#ffffff' }}> WEB</span>
            </span>
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
            <li key={link.name} style={{ listStyle: 'none' }}>
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
              style={{ display: 'block', padding: '14px' }}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>

      {/* Styled inline components */}
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
          box-sizing: border-box;
        }

        .nav-logo-link {
          display: flex; 
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 16px;
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

        .btn-nav-cta {
          display: inline-flex;
        }

        /* Burger Menu Icon */
        .mobile-menu-burger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 201;
        }

        .mobile-menu-burger span {
          width: 100%;
          height: 2px;
          background-color: #ffffff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Burger animations when open */
        .mobile-menu-burger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .mobile-menu-burger.open span:nth-child(2) {
          opacity: 0;
        }
        .mobile-menu-burger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Drawer */
        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--bg-secondary, #111);
          z-index: 200;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          display: flex;
          flex-direction: column;
          padding-top: 24px;
          box-sizing: border-box;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, visibility 0.4s;
        }

        .mobile-menu-drawer.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 30px;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .mobile-drawer-close {
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow-y: auto;
          flex-grow: 1;
          padding: 0 24px 40px 24px;
          margin: 0;
          box-sizing: border-box;
        }

        .mobile-nav-link-item {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          display: block;
          padding: 14px 0; /* Massively improved mobile tap targets */
          border-bottom: 1px solid var(--border-light, rgba(255,255,255,0.1));
          text-decoration: none;
        }

        .mobile-nav-link-item:hover {
          color: var(--primary);
        }

        .mobile-cta-li {
          margin-top: 24px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .nav-links-desktop {
            gap: 10px;
          }
          .nav-link-item {
            font-size: 0.8rem;
          }
        }

        /* Switched breakpoint to 1024px to completely avoid header cramping */
        @media (max-width: 1024px) {
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