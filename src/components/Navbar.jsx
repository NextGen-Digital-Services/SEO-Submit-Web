import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Logo from '../assets/Logo/Logo1_result.webp';

export const Navbar = ({ isMobile }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'SEO Leads', path: '/seo-leads' },
    { label: 'Web Design Leads', path: '/web-design-leads' },
    { label: 'Appointment Leads', path: '/appointment-leads' },
    { label: 'Blog', path: '/blog' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen, isMobile]);

  // Handle Escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };
    if (isDrawerOpen && isMobile) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen, isMobile]);

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: C.navy,
        borderBottom: `3px solid ${C.yellow}`,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}>
        <Link to="/" style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}>
          <img
            src={Logo}
            alt="SEO Submit Web Logo"
            width="38"
            height="38"
            loading="eager"
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

        {!isMobile && (
          <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            {links.map((link, idx) => {
              const isActive = location.pathname === link.path;
              const isHovered = hoveredIndex === idx;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    color: C.white,
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '0 10px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    borderRight: '1px solid rgba(255,255,255,0.1)',
                    textDecoration: 'none',
                    fontFamily: F.body,
                    background: (isActive || isHovered) ? C.blue : 'transparent',
                    transition: 'background 0.2s ease',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

        {/* Group right-side actions to maintain spacing */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* WhatsApp icon link */}
          <a
            href="https://wa.me/17165755447"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp Us"
            style={{
              width: '40px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#25D366',
              textDecoration: 'none',
            }}
          >
            <i className="ti ti-brand-whatsapp" style={{ fontSize: '22px', color: '#fff' }} />
          </a>

          {/* Hamburger Menu (visible only on mobile) */}
          {isMobile && (
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
              style={{
                width: '40px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <i className="ti ti-menu-2" style={{ fontSize: '24px', color: C.white }} />
            </button>
          )}
        </div>
      </nav>

      {/* Slide-in Mobile Drawer */}
      {isMobile && (
        <>
          {/* Backdrop overlay */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(6, 16, 32, 0.6)',
              zIndex: 9998,
              backdropFilter: 'blur(2px)',
              visibility: isDrawerOpen ? 'visible' : 'hidden',
              opacity: isDrawerOpen ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
            }}
          />

          {/* Drawer Panel */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '280px',
              height: '100vh',
              background: C.navy,
              borderLeft: `3px solid ${C.yellow}`,
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
              zIndex: 9999,
              transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
              boxSizing: 'border-box',
            }}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <span style={{ fontFamily: F.display, fontWeight: 900, fontSize: '14px', color: C.yellow, letterSpacing: '1px' }}>
                NAVIGATION
              </span>
              <button
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close navigation menu"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: C.white,
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                }}
              >
                <i className="ti ti-x" />
              </button>
            </div>

            {/* Drawer Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsDrawerOpen(false)}
                    style={{
                      color: isActive ? C.yellow : C.white,
                      fontSize: '14px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontFamily: F.body,
                      padding: '12px 16px',
                      background: isActive ? C.blue : 'transparent',
                      transition: 'all 0.2s ease',
                      display: 'block',
                      borderLeft: isActive ? `3px solid ${C.yellow}` : '3px solid transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
