import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import HeroForm from '../forms/HeroForm';
import HeroImage from '../assets/Hero/HeroSection_result.webp';

const StaggerWordReveal = ({ segments }) => {
  let globalWordIndex = 0;
  return (
    <>
      {segments.map((segment, sIdx) => {
        const words = segment.text.split(/(\s+)/);
        return (
          <span key={sIdx} style={segment.style}>
            {words.map((word, wIdx) => {
              if (!word.trim()) {
                return <span key={wIdx}>{word}</span>;
              }
              const currentDelay = globalWordIndex * 0.08;
              globalWordIndex++;
              return (
                <span
                  key={wIdx}
                  style={{
                    display: 'inline-block',
                    opacity: 0,
                    animation: `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${currentDelay}s`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
};

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
            BUY EXCLUSIVE SEO LEADS IN USA
          </div>

          {/* H1 heading */}
          <h1 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: isMobile ? '30px' : '40px',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '16px',
            minHeight: isMobile ? '105px' : '140px',
          }}>
            <StaggerWordReveal 
              segments={[
                { text: 'Buy Exclusive ', style: {} },
                { text: 'SEO Leads in USA ', style: { color: '#FFD600' } },
                { text: 'That Convert', style: {} }
              ]}
            />
          </h1>

          {/* Paragraph */}
          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
            marginBottom: '24px',
            maxWidth: '480px',
          }}>
            Stop wasting your budget on recycled leads. Get Buy SEO Leads in USA that are exclusive, verified, and ready to convert. We help agencies, freelancers, and marketing companies grow faster with high-quality SEO Leads in USA, Website Design Leads in USA, and appointment-set leads.
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
            
            {/* Buy SEO Leads button */}
            <button 
              className="btn-float"
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
              Buy SEO Leads
            </button>

            {/* Get Website Design Leads button */}
            <button 
              onClick={() => navigate('/web-design-leads')}
              style={{
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
              }}
            >
              Get Website Design Leads
            </button>



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
