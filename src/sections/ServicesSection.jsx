import React from 'react';
import { Link } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import Eyebrow from '../components/Eyebrow';

export const ServicesSection = ({ isMobile }) => {
  // Shared smooth timing configuration for micro-interactions
  const smoothTransition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <SectionWrapper bg={C.lightBg}>
      {/* Injecting local utility styles for targeted card and link states */}
      <style>{`
        .service-card-wrapper {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 36px rgba(10, 22, 40, 0.08) !important;
        }
        .service-img-scale {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card-wrapper:hover .service-img-scale {
          transform: scale(1.05);
        }
        .service-link-animated {
          position: relative;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
        }
        .service-link-animated::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: ${C.blue};
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card-wrapper:hover .service-link-animated::after {
          width: 100%;
        }
        .service-card-wrapper:hover .service-link-animated {
          color: ${C.navy} !important;
        }
      `}</style>

      <Eyebrow label="WHAT WE OFFER" />
      <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: isMobile ? '26px' : '32px', color: C.navy, marginBottom: '32px', lineHeight: 1.25 }}>
        Our <span style={{ color: C.blue }}>Three Core</span> Lead Generation Services
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
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
          <div 
            key={idx} 
            className="reveal service-card-wrapper" 
            style={{ 
              background: C.white, 
              border: '1px solid #e5e7eb', 
              borderTop: `4px solid ${srv.border}`, 
              display: 'flex', 
              flexDirection: 'column',
              borderRadius: '0 0 8px 8px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(10, 22, 40, 0.03)'
            }}
          >
            {/* Image Container for inner-boundary scale zoom styling */}
            <div style={{ width: '100%', height: '210px', overflow: 'hidden', background: '#f3f4f6' }}>
              <img
                src={srv.img}
                alt={srv.title}
                className="service-img-scale"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>

            <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: srv.border,
                color: srv.border === C.yellow ? C.navy : C.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                borderRadius: '4px',
                boxShadow: srv.border === C.yellow ? '0 4px 10px rgba(255,214,0,0.2)' : 'none'
              }}>
                <i className={`ti ${srv.icon}`} style={{ fontSize: '22px' }} />
              </div>

              <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy, marginBottom: '10px' }}>{srv.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px', minHeight: '66px' }}>{srv.desc}</p>

              {/* Verified Features Checklist Layer */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', flex: 1 }}>
                {srv.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: '#374151' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'rgba(0, 87, 255, 0.08)'
                    }}>
                      <i className="ti ti-check" style={{ color: C.blue, fontSize: '11px', fontWeight: 'bold' }} />
                    </div>
                    <span style={{ fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', pt: '8px' }}>
                <Link 
                  to={srv.path} 
                  className="service-link-animated"
                  style={{ 
                    fontFamily: F.display, 
                    fontWeight: 800, 
                    fontSize: '12px', 
                    color: C.blue, 
                    textDecoration: 'none', 
                    letterSpacing: '1px', 
                    textTransform: 'uppercase' 
                  }}
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;