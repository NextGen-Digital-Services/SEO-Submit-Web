import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import HeroForm from '../forms/HeroForm';
import HeroImage from '../assets/Hero/HeroSection_result.webp';

export const HeroSection = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <section style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', minHeight: isMobile ? 'auto' : '500px', width: '100%' }}>
      {/* Left Panel */}
      <div style={{
        flex: 1,
        padding: isMobile ? '32px 16px' : '56px 40px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: isMobile ? 'auto' : '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>

        {/* Background Image */}
        <img
          src={HeroImage}
          alt="SEO Submit Web Hero"
          width="1536"
          height="1024"
          loading="eager"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: 0.70,
            zIndex: 0,
          }}
        />

        {/* Dark overlay so text stays readable */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(10, 22, 40, 0.45)',
          zIndex: 1,
        }} />

        {/* All existing hero content goes here — zIndex 2 */}
        <div style={{ position: 'relative', zIndex: 2 }}>

          {/* Yellow badge */}
          <div style={{
            background: '#FFD600',
            color: '#0A1628',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: '10px',
            letterSpacing: '2px',
            padding: '6px 14px',
            display: 'inline-block',
            marginBottom: '16px',
            textTransform: 'uppercase',
          }}>
            USA'S #1 SEO LEAD GENERATION COMPANY
          </div>

          {/* H1 heading */}
          <h1 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: isMobile ? '30px' : '40px',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            We deliver exclusive {' '}
            <span style={{ color: '#FFD600' }}>SEO leads, web design leads, and appointment-set leads </span>
            {' '}that come to you ready to buy — never shared, never resold.
          </h1>

          {/* Paragraph */}
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
            marginBottom: '24px',
            maxWidth: '480px',
          }}>
            Since 2016, SEOSubmitWeb has helped agencies and service businesses close more deals — without chasing cold, recycled leads. Stop competing for the same tired leads. Start closing exclusively yours.
          </p>

          {/* Trust pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {['100% Exclusive', 'Real-Time Delivery', 'Bad Lead Replaced'].map(pill => (
              <div key={pill} style={{
                background: '#FFD600',
                color: '#0A1628',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '11px',
                padding: '7px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {pill}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            
            {/* VIEW LEAD SAMPLES button */}
            <button 
              onClick={() => navigate('/contact')}
              style={{
                background: '#FFD600',
                color: '#0A1628',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '14px 24px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              VIEW LEAD SAMPLES
            </button>

            {/* Phone button */}
            <a href="tel:+17165755447" style={{
              background: 'transparent',
              color: '#FFD600',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '13px 24px',
              border: '2px solid #FFD600',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <i className="ti ti-phone" style={{ fontSize: '16px' }}></i>
              (716) 575-5447
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/17165755447?text=Hi%20SEO%20Submit%20Web%2C%20I%20am%20interested%20in%20your%20leads."
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#25D366',
                color: '#ffffff',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '13px 24px',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
              CHAT ON WHATSAPP
            </a>

          </div>

        </div>
      </div>

      {/* Right Panel Form */}
      <div style={{
        width: isMobile ? '100%' : '320px',
        background: C.yellow,
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background image overlay */}
        <img 
          src="/assets/lead-generation-hero.png"
          alt="Digital marketing team reviewing incoming qualified leads"
          width="1672"
          height="941"
          loading="eager"
          fetchPriority="high"
          style={{ 
            position: 'absolute', 
            top: 0, left: 0, 
            width: '100%', height: '100%', 
            objectFit: 'cover', 
            opacity: 0.15,
            zIndex: 1,
            pointerEvents: 'none'
          }} 
        />
        {/* Diagonal cut simulating line */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            left: '-32px',
            top: 0,
            bottom: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '500px 0 0 32px',
            borderColor: 'transparent transparent transparent #0057FF',
            zIndex: 1,
            pointerEvents: 'none',
          }} />
        )}

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '4px' }}>
            Get Exclusive Leads For Your Agency
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '12px', color: '#333', marginBottom: '16px' }}>
            Real-time. Verified. 100% exclusive — never resold to anyone else.
          </p>

          <HeroForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
