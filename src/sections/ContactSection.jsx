import React from 'react';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../forms/ContactForm';

export const ContactSection = ({ isMobile }) => {
  return (
    <SectionWrapper bg={C.white}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.3fr 0.7fr', gap: '32px' }}>
        {/* Left Form */}
        <div>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.navy, marginBottom: '20px' }}>
            Send Us a Message
          </h2>
          <ContactForm />

          <div style={{ marginTop: '24px', textAlign: 'left' }}>
            <span style={{ fontSize: '12px', color: '#666', display: 'block' }}>Or call us directly:</span>
            <a href="tel:+17165755447" style={{ fontSize: '24px', fontWeight: '900', color: C.blue, fontFamily: F.display, textDecoration: 'none' }}>
              (716) 575-5447
            </a>
          </div>
        </div>

        {/* Right Info Panel */}
        <div style={{ background: C.navy, color: C.white, padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', borderRadius: 0, textAlign: 'left' }}>
          <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.yellow, textTransform: 'uppercase' }}>
            Why Contact Us?
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Direct access to our campaign coordinators.',
              'Integrate lead routing in 24 hours.',
              'Free verification logs supplied with every invoice.',
              'Instant replacements on invalid lead criteria.',
              'Get customizable geolocation boundaries.',
            ].map((reason, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px' }}>
                <i className="ti ti-square-check" style={{ color: C.yellow, fontSize: '16px', marginTop: '2px' }} />
                <span>{reason}</span>
              </div>
            ))}
          </div>

          {/* Promise Box */}
          <div style={{ background: C.blue, padding: '16px', textAlign: 'center', marginTop: '10px' }}>
            <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '13px', color: C.white }}>
              RESPONSE PROMISE
            </span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)' }}>
              We reply within 2 business hours
            </span>
          </div>

          {/* Offer Box */}
          <div style={{ background: C.yellow, color: C.navy, padding: '16px', textAlign: 'center' }}>
            <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '13px' }}>
              SPECIAL TRIAL OFFER
            </span>
            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>
              Get 5 FREE sample leads before you commit
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
