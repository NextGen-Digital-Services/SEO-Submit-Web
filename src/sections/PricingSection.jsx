import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import Eyebrow from '../components/Eyebrow';

export const PricingSection = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <SectionWrapper bg={C.lightBg}>
      <Eyebrow label="PRICING PLANS" />
      <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
        Simple & Transparent Packages
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '24px' : 0 }}>
        {[
          { name: 'Starter', price: '399', period: '20 Leads/mo', features: ['20 Exclusive Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Email Support'], featured: false },
          { name: 'Professional', price: '999', period: '50 Leads/mo', features: ['50 Exclusive Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Dedicated Manager', 'Priority Support'], featured: true },
          { name: 'Enterprise', price: '2,399', period: '120 Leads/mo', features: ['120 Exclusive Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Custom Target Spec', 'Priority Support'], featured: false },
        ].map((pack, idx, arr) => {
          const cardStyle = pack.featured ? {
            background: C.blue,
            border: `1px solid ${C.blue}`,
            position: 'relative',
            paddingTop: '36px',
            paddingBottom: '24px',
            paddingLeft: '20px',
            paddingRight: '20px',
            borderRadius: 0,
            marginBottom: isMobile ? '24px' : 0,
            color: C.white,
          } : {
            background: C.white,
            border: '1px solid #dde3f0',
            borderRight: isMobile ? '1px solid #dde3f0' : (idx === arr.length - 1 ? '1px solid #dde3f0' : 'none'),
            padding: '24px 20px',
            borderRadius: 0,
            marginBottom: isMobile ? '24px' : 0,
            color: C.navy,
          };

          return (
            <div key={pack.name} style={cardStyle}>
              {pack.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: C.yellow,
                  color: C.navy,
                  fontFamily: F.display,
                  fontWeight: 800,
                  fontSize: '10px',
                  letterSpacing: '1px',
                  padding: '4px 14px',
                  whiteSpace: 'nowrap',
                }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: pack.featured ? C.yellow : C.navy, marginBottom: '6px' }}>
                {pack.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '6px', lineHeight: 1 }}>
                <span style={{ fontFamily: F.display, fontWeight: 900, fontSize: '32px', color: pack.featured ? C.white : C.navy, display: 'inline-flex', alignItems: 'flex-start' }}>
                  <sub style={{ fontSize: '18px', fontWeight: 900, marginRight: '2px', lineHeight: 1 }}>$</sub>
                  {pack.price}
                </span>
                <span style={{ fontSize: '11px', color: pack.featured ? 'rgba(255,255,255,0.6)' : '#888', marginLeft: '6px', fontWeight: 600 }}>
                  / {pack.period}
                </span>
              </div>
              <div style={{ height: '2px', background: pack.featured ? 'rgba(255,255,255,0.2)' : '#f0f3ff', margin: '14px 0' }} />
              <div style={{ minHeight: '130px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {pack.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: pack.featured ? 'rgba(255,255,255,0.85)' : '#444' }}>
                    <i className="ti ti-check" style={{ color: pack.featured ? C.yellow : C.blue, fontSize: '14px' }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/contact')}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: pack.featured ? C.yellow : C.navy,
                  color: pack.featured ? C.navy : C.white,
                  fontFamily: F.display,
                  fontWeight: 800,
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: 0,
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
