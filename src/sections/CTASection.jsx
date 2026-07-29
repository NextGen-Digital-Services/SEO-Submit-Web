import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '32px', color: C.white, marginBottom: '8px' }}>
          Ready to Buy SEO Leads in USA?
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.6 }}>
          Get exclusive, verified, and conversion-focused leads delivered directly to your business.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/contact')}
            style={{
              background: C.yellow,
              color: C.navy,
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '14px 28px',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            Buy SEO Leads Today
          </button>
          <button
            onClick={() => navigate('/web-design-leads')}
            style={{
              background: 'transparent',
              color: C.white,
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '12px 28px',
              border: `2px solid ${C.white}`,
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            Get Website Design Leads
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
