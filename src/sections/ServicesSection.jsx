import React from 'react';
import { Link } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import Eyebrow from '../components/Eyebrow';


export const ServicesSection = ({ isMobile }) => {
  return (
    <SectionWrapper bg={C.lightBg}>
      <Eyebrow label="WHAT WE OFFER" />
      <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
        Our <span style={{ color: C.blue }}>Three Core</span> Lead Generation Services
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
        {[
          {
            img: 'https://res.cloudinary.com/dpeq00iqq/image/upload/v1782552888/hero2_result_sgduei.webp',
            border: C.yellow,
            icon: 'ti-search',
            title: 'Exclusive SEO Leads',
            desc: 'High-intent leads from business owners looking for search engine optimization, content marketing, and link building retainers.',
            features: ['Real-time, active buyers', '100% replacement policy', 'Phone & Email verified', 'C-Level contact data'],
            path: '/seo-leads',
          },
          {
            img: 'https://res.cloudinary.com/dpeq00iqq/image/upload/v1782552886/hero3_result_bnwoo5.webp',
            border: C.blue,
            icon: 'ti-layout',
            title: 'Web Design Leads',
            desc: 'Fresh leads from companies requesting custom website designs, landing page optimizations, and complex e-commerce builds.',
            features: ['Complete website rebuilds', 'E-commerce scopes included', 'Direct phone confirmations', 'Budget range indicators'],
            path: '/web-design-leads',
          },
          {
            img: 'https://res.cloudinary.com/dpeq00iqq/image/upload/v1782552882/hero4_result_gfbbbb.webp',
            border: C.navy,
            icon: 'ti-calendar-check',
            title: 'Appointment Fixed Leads',
            desc: 'Double your sales call count. We call and pre-book direct consultation meetings on your sales representatives\' calendars.',
            features: ['Pre-booked calendar slot', 'No cold outreach required', 'Verified budget availability', 'Decision makers only'],
            path: '/appointment-leads',
          },
        ].map((srv, idx) => (
          <div key={idx} style={{ background: C.white, border: '1px solid #dde3f0', borderTop: `4px solid ${srv.border}`, display: 'flex', flexDirection: 'column' }}>
            <img
              src={srv.img}
              alt={srv.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: srv.border,
                color: srv.border === C.yellow ? C.navy : C.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}>
                <i className={`ti ${srv.icon}`} style={{ fontSize: '20px' }} />
              </div>
              <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '8px' }}>{srv.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '16px', minHeight: '56px' }}>{srv.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', flex: 1 }}>
                {srv.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#444' }}>
                    <i className="ti ti-check" style={{ color: C.blue, fontSize: '12px' }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link to={srv.path} style={{ fontFamily: F.display, fontWeight: 700, fontSize: '11px', color: C.blue, textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase' }}>
                LEARN MORE →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
