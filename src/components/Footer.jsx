import React from 'react';
import { Link } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Logo from '../assets/Logo/Logo1_result.webp';

export const Footer = ({ isMobile }) => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* Top Section */}
      <div style={{
        background: C.deepNavy,
        borderTop: `3px solid ${C.blue}`,
        padding: '48px 24px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
        gap: '32px',
      }}>
        {/* Col 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '12px',
          }}>
            <img
              src={Logo}
              alt="SEO Submit Web"
              width="34"
              height="34"
              loading="lazy"
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
          <p style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '280px' }}>
            USA's #1 SEO Lead Generation Company Since 2009. Supplying verified high-converting opportunities.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.white, fontFamily: F.body }}>
              <div style={{ width: '24px', height: '24px', background: C.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navy, borderRadius: 0 }}>
                <i className="ti ti-phone" />
              </div>
              <a href="tel:+17165755447" style={{ color: 'inherit', textDecoration: 'none' }}>
                (716) 575-5447
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.white, fontFamily: F.body }}>
              <div style={{ width: '24px', height: '24px', background: C.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navy, borderRadius: 0 }}>
                <i className="ti ti-mail" />
              </div>
              <a href="mailto:Seosubmitweb@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                Seosubmitweb@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.white, fontFamily: F.body }}>
              <div style={{ width: '24px', height: '24px', background: C.red, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navy, borderRadius: 0 }}>

              </div>
            
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '12px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Services
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/seo-leads" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>SEO Leads</Link>
            <Link to="/web-design-leads" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Web Design Leads</Link>
            <Link to="/appointment-leads" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Appointment Leads</Link>
          </div>
        </div>

        {/* Col 3 */}
        <div>
          <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '12px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Company
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About</Link>
            <Link to="/blog" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Blog</Link>
            <Link to="/testimonials" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Testimonials</Link>
            <Link to="/contact" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>

        {/* Col 4 */}
        <div>
          <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '12px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Follow Us
          </h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[


              { icon: 'ti-brand-linkedin', path: '#' },

            ].map((social, i) => (
              <a
                key={i}
                href={social.path}
                style={{
                  width: '44px',
                  height: '44px',
                  background: C.yellow,
                  color: C.navy,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '20px',
                }}
              >
                <i className={`ti ${social.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        background: '#040d1a',
        padding: '14px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '10px',
      }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: F.body }}>
          © 2025 SEO Submit Web. All Rights Reserved.
        </span>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: F.body }}>Privacy Policy</a>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>|</span>
          <a href="#" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: F.body }}>Terms</a>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>|</span>
          <a href="#" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: F.body }}>Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
