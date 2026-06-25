import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '32px', color: C.white, marginBottom: '8px' }}>
          Stop Chasing Cold Leads. <span style={{ color: C.yellow }}>Start Closing Hot Ones.</span>
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.6 }}>
          Gain access to exclusive buyers immediately. Zero risk, instant replacement guarantee. Fill your pipeline in 24 hours.
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
            VIEW SAMPLE LEADS
          </button>
          <button
            onClick={() => navigate('/contact')}
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
            SCHEDULE A CALL
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
