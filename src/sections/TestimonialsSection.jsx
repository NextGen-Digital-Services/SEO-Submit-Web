import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import Eyebrow from '../components/Eyebrow';
import soloman from '../assets/home/Soloman.webp';

export const TestimonialsSection = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <SectionWrapper bg={C.yellow}>
      <Eyebrow label="CLIENT LOVE" labelColor={C.navy} />
      <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
        Real Words From <span style={{ color: C.blue }}>Real Clients</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
        {[
          { name: 'Rajesh Sharma', comp: 'TechSEO Solutions', img: soloman, txt: 'SEO Submit Web leads convert at 3x the rate of other lists. The phone validation ensures we talk to founders ready to buy SEO services.', badge: 'SEO Leads' },
          { name: 'Priya Kulkarni', comp: 'WebCraft Agency', img: soloman, txt: 'I support SEO Submit Web leads fully. When a disconnected number popped up, support replaced it in 2 hours with no hassle.', badge: 'Web Design Leads' },
          { name: 'Amit Mehta', comp: 'GrowthMark Digital', img: soloman, txt: 'Our monthly sales retainers doubled in 90 days since boarding their calendar fixed appt leads. Saving SDR calling hours.', badge: 'Appointments' },
        ].map((test, idx) => (
          <div key={idx} style={{ background: C.white, padding: '24px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '3px solid #FFD600', padding: 0, margin: 0 }}>
                <img src={test.img} alt={test.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', padding: 0, margin: 0 }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.navy, marginBottom: '2px' }}>{test.name}</h4>
                <span style={{ fontSize: '11px', color: C.blue, display: 'block' }}>{test.comp}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '12px', marginBottom: '10px' }}>
              {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
            </div>
            <p style={{ fontFamily: F.body, fontSize: '12px', color: C.navy, lineHeight: 1.6, marginBottom: '16px', fontStyle: 'italic', flex: 1 }}>
              "{test.txt}"
            </p>
            <span style={{ alignSelf: 'flex-start', background: C.lightBg, color: C.navy, fontSize: '9px', fontWeight: 'bold', padding: '3px 8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {test.badge}
            </span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => navigate('/testimonials')}
          style={{
            background: C.navy,
            color: C.white,
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
          VIEW ALL TESTIMONIALS →
        </button>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
