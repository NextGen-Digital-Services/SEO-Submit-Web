import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Logo from '../assets/Logo/Logo1_result.webp';

export const Navbar = ({ isMobile }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
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
          alt="SEO Submit Web"
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
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
      </div>
    </nav>
  );
};

export default Navbar;
