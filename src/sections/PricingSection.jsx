import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import Eyebrow from '../components/Eyebrow';

export const PricingSection = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <SectionWrapper bg={C.lightBg}>
      {/* Immersive micro-interactions and layered shadow variables */}
      <style>{`
        .pricing-card-interactive {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .pricing-card-interactive:hover {
          transform: ${isMobile ? 'translateY(-4px)' : 'scale(1.02) translateY(-4px)'};
          z-index: 10;
          box-shadow: 0 20px 40px rgba(10, 22, 40, 0.08) !important;
        }
        .pricing-btn-interactive {
          transition: all 0.3s ease !important;
        }
        .pricing-btn-interactive:hover {
          filter: brightness(1.08);
          letter-spacing: 2.5px !important;
        }
      `}</style>

      <Eyebrow label="PRICING PLANS" />
      <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: isMobile ? '26px' : '32px', color: C.navy, marginBottom: '32px', lineHeight: 1.25 }}>
        Simple & Transparent Packages
      </h2>

      {/* Grid wrapper enforcing strict non-breaking viewport alignment */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
        gap: isMobile ? '32px' : '0px',
        alignItems: 'center',
        padding: isMobile ? '0' : '20px 0'
      }}>
        {[
          { name: 'Starter', price: '399', period: '20 Leads/mo', features: ['20 Exclusive Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Email Support'], featured: false },
          { name: 'Professional', price: '999', period: '50 Leads/mo', features: ['50 Exclusive Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Dedicated Manager', 'Priority Support'], featured: true },
          { name: 'Enterprise', price: '2,399', period: '120 Leads/mo', features: ['120 Exclusive Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Custom Target Spec', 'Priority Support'], featured: false },
        ].map((pack, idx, arr) => {
          
          // Strict baseline configuration targeting fluid aspect ratios
          const cardStyle = pack.featured ? {
            background: C.blue,
            border: `1px solid ${C.blue}`,
            position: 'relative',
            padding: isMobile ? '40px 24px 32px' : '48px 28px 40px',
            borderRadius: '8px',
            color: C.white,
            boxShadow: '0 12px 30px rgba(0, 87, 255, 0.15)',
            transform: isMobile ? 'none' : 'scale(1.04)',
            zIndex: 2,
          } : {
            background: C.white,
            border: '1px solid #e5e7eb',
            // Smart border handling to avoid double borders on desktop row stacks
            borderRight: isMobile ? '1px solid #e5e7eb' : (idx === arr.length - 1 ? '1px solid #e5e7eb' : 'none'),
            padding: '40px 24px 32px',
            borderRadius: isMobile ? '8px' : (idx === 0 ? '8px 0 0 8px' : '0 8px 8px 0'),
            color: C.navy,
            zIndex: 1,
          };

          return (
            <div 
              key={pack.name} 
              className="reveal pricing-card-interactive" 
              style={{
                ...cardStyle,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {pack.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: C.yellow,
                  color: C.navy,
                  fontFamily: F.display,
                  fontWeight: 900,
                  fontSize: '11px',
                  letterSpacing: '1px',
                  padding: '6px 18px',
                  whiteSpace: 'nowrap',
                  borderRadius: '20px',
                  boxShadow: '0 4px 10px rgba(255,214,0,0.3)'
                }}>
                  MOST POPULAR
                </div>
              )}
              
              <div style={{ 
                fontFamily: F.display, 
                fontWeight: 900, 
                fontSize: '14px', 
                letterSpacing: '2px', 
                textTransform: 'uppercase', 
                color: pack.featured ? C.yellow : C.blue, 
                marginBottom: '12px' 
              }}>
                {pack.name}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '8px', lineHeight: 1 }}>
                <span style={{ 
                  fontFamily: F.display, 
                  fontWeight: 900, 
                  fontSize: '40px', 
                  color: pack.featured ? C.white : C.navy, 
                  display: 'inline-flex', 
                  alignItems: 'flex-start' 
                }}>
                  <sub style={{ fontSize: '22px', fontWeight: 900, marginRight: '2px', top: '-4px' }}>$</sub>
                  {pack.price}
                </span>
                <span style={{ 
                  fontSize: '12px', 
                  color: pack.featured ? 'rgba(255,255,255,0.7)' : '#6b7280', 
                  marginLeft: '8px', 
                  fontWeight: 600 
                }}>
                  / {pack.period}
                </span>
              </div>

              <div style={{ height: '1px', background: pack.featured ? 'rgba(255,255,255,0.15)' : '#e5e7eb', margin: '20px 0' }} />
              
              {/* Feature Matrix Checklist mapping */}
              <div style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {pack.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: pack.featured ? 'rgba(255,255,255,0.9)' : '#4b5563' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: pack.featured ? 'rgba(255,214,0,0.12)' : 'rgba(0, 87, 255, 0.06)'
                    }}>
                      <i className="ti ti-check" style={{ color: pack.featured ? C.yellow : C.blue, fontSize: '11px', fontWeight: 'bold' }} />
                    </div>
                    <span style={{ fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="pricing-btn-interactive"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: pack.featured ? C.yellow : C.navy,
                  color: pack.featured ? C.navy : C.white,
                  fontFamily: F.display,
                  fontWeight: 900,
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  boxShadow: pack.featured ? '0 4px 15px rgba(255,214,0,0.25)' : 'none',
                  marginTop: 'auto'
                }}
              >
                GET STARTED
              </button>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;