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
          <a
            href="https://wa.me/17165755447?text=Hi%20I%20am%20interested%20in%20your%20leads.%20Please%20send%20details."
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#25D366',
              color: '#fff',
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '13px 28px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
            CHAT ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
