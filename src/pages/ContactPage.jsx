import React, { useEffect } from 'react';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../forms/ContactForm';
import ContactImg from '../assets/All Images/Contact_result.webp';

export const ContactPage = ({ isMobile }) => {

  // SEO Performance Optimization: Preload the main hero image to fix LCP delay
  useEffect(() => {
    const img = new Image();
    img.src = ContactImg;
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* GLOBAL PERFORMANCE AND ANIMATION INJECTION */}
      <style>{`
        .info-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, box-shadow;
          transform: translateZ(0);
        }
        .info-card:hover {
          transform: translateY(-5px) translateZ(0);
          box-shadow: 0 10px 25px rgba(10, 22, 40, 0.08);
        }
        .faq-card {
          transition: transform 0.3s ease;
        }
        .faq-card:hover {
          transform: scale(1.015);
        }
        .pill-badge {
          animation: fadeInPill 0.5s ease forward;
        }
        @keyframes fadeInPill {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* [A] CONTACT HERO */}
      <div style={{
        padding: '56px 40px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '320px',
        background: C.navy, // Fallback background color to avoid layout flashing
      }}>
        <img
          src={ContactImg}
          alt="Contact Support Infrastructure"
          width="1200"
          height="800"
          loading="eager"
          fetchpriority="high" // Priority boost for faster mobile rendering
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: 0.35,
            zIndex: 0,
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(10, 22, 40, 0.5) 0%, rgba(10, 22, 40, 0.75) 100%)',
          zIndex: 1,
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px' }}>
          <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: isMobile ? '28px' : '36px', color: C.white, marginBottom: '14px', lineHeight: 1.2 }}>
            Ready to <span style={{ color: C.yellow }}>Scale With</span> High-Quality Leads?
          </h1>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Reach our team for webhook configuration questions, custom geo filters, or sample inquiries.
          </p>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {["Available 24/7", "Reply in 2 hours", "CRM Integrations Supported"].map((pill, i) => (
              <span key={pill} className="pill-badge" style={{
                background: C.yellow,
                color: C.navy,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '11px',
                padding: '6px 14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                borderRadius: '4px',
                animationDelay: `${i * 100}ms`
              }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* [B] CONTACT GRID */}
      <section style={{ background: C.lightBg, padding: '48px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(300px, 650px))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
          justifyContent: 'center'
        }}>
          {[
            { border: C.yellow, icon: 'ti-phone', title: 'Phone Support', val: '(716) 575-5447', note: 'Available 24 hours a day', link: 'tel:+17165755447' },
            { border: C.blue, icon: 'ti-mail', title: 'Email Enquiries', val: 'info@seosubmitweb.com', note: 'Reply within 2 hours', link: 'mailto:info@seosubmitweb.com' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="info-card"
              style={{
                background: C.white,
                borderTop: `4px solid ${item.border}`,
                padding: '32px 24px', // Internal layout balance ke liye padding badha di
                textAlign: 'center',
                borderLeft: '1px solid #dde3f0',
                borderRight: '1px solid #dde3f0',
                borderBottom: '1px solid #dde3f0',
                borderRadius: '6px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)', // Subtle premium feel shadow
                transition: 'all 0.3s ease'
              }}
            >
              <i className={`ti ${item.icon}`} style={{ fontSize: '36px', color: item.border, display: 'block', marginBottom: '16px' }} />
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '18px', color: C.navy, marginBottom: '8px' }}>{item.title}</h3>
              <span style={{ display: 'block', fontSize: '15px', fontWeight: 'bold', color: C.navy, marginBottom: '6px' }}>
                {item.link ? (
                  <a href={item.link} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = C.blue} onMouseLeave={(e) => e.target.style.color = 'inherit'}>{item.val}</a>
                ) : item.val}
              </span>
              <span style={{ fontSize: '12px', color: '#888' }}>{item.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Image Strip Fix: Layout Shift (CLS) validation */}
      <div style={{ width: '100%', height: '140px', overflow: 'hidden', background: '#eef2f6' }}>
        <img
          src="/assets/lead-generation-hero.png"
          alt="SEO Submit Web support framework network"
          width="1200"
          height="140"
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* [C] MAIN CONTACT SECTION */}
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
              <a href="tel:+17165755447" style={{ fontSize: '24px', fontWeight: '900', color: C.blue, fontFamily: F.display, textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = 0.8} onMouseLeave={(e) => e.target.style.opacity = 1}>
                (716) 575-5447
              </a>
            </div>
          </div>

          {/* Right Info Panel */}
          <div style={{ background: C.navy, color: C.white, padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', borderRadius: '4px', textAlign: 'left' }}>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.yellow, textTransform: 'uppercase' }}>
              Why Contact Us?
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Direct access to our campaign coordinators.',
                'Integrate lead routing in 24 hours.',
                'Free verification logs supplied with every invoice.',
                'Instant replacements on invalid lead criteria.',
                'Get customizable geolocation boundaries.',
              ].map((reason, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12.5px', lineHeight: 1.4 }}>
                  <i className="ti ti-square-check" style={{ color: C.yellow, fontSize: '16px', marginTop: '2px', flexShrink: 0 }} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            {/* Promise Box */}
            <div style={{ background: C.blue, padding: '16px', textAlign: 'center', marginTop: '10px', borderRadius: '4px' }}>
              <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '13px', color: C.white, letterSpacing: '0.5px' }}>
                RESPONSE PROMISE
              </span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)' }}>
                We reply within 2 business hours
              </span>
            </div>

            {/* Offer Box */}
            <div style={{ background: C.yellow, color: C.navy, padding: '16px', textAlign: 'center', borderRadius: '4px' }}>
              <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '13px', letterSpacing: '0.5px' }}>
                SPECIAL TRIAL OFFER
              </span>
              <span style={{ fontSize: '11px', fontWeight: 'bold' }}>
                Get 5 FREE sample leads before you commit
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* [E] FAQ STRIP */}
      <section style={{ background: C.yellow, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Common Questions Before Getting Started
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { q: 'Is there a setup fee?', a: 'No. There are no onboarding or script fees.' },
            { q: 'How do you replace bad contact details?', a: 'Submit incorrect rows in your dashboard and we push replacements.' },
            { q: 'Can I pause delivery?', a: 'Yes. Notify your manager 48 hours in advance to pause supply.' },
            { q: 'What is compliance opt-in?', a: 'All prospects confirm interest via web audits and opt-in agreements.' },
          ].map((faq, idx) => (
            <div key={idx} className="faq-card" style={{ background: C.navy, color: C.white, padding: '20px', textAlign: 'left', borderRadius: '4px', boxShadow: '0 4px 15px rgba(10,22,40,0.05)' }}>
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13.5px', color: C.yellow, marginBottom: '6px' }}>{faq.q}</h3>
              <p style={{ fontFamily: F.body, fontSize: '11.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* [F] OFFICES / AVAILABILITY */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          We Are Available Round The Clock
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { tz: 'PST (Pacific Standard)', hours: '7:00 AM – 7:00 PM', note: 'West Coast support operations' },
            { tz: 'EST (Eastern Standard)', hours: '8:00 AM – 8:00 PM', note: 'Account management operations' },
            { tz: 'GMT (Greenwich Mean)', hours: '8:00 AM – 6:00 PM', note: 'Technical support desk' },
          ].map((card, idx) => (
            <div key={idx} style={{ background: C.white, padding: '20px', color: C.navy, textAlign: 'center', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.blue, marginBottom: '6px' }}>{card.tz}</h3>
              <span style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: C.navy, marginBottom: '4px' }}>{card.hours}</span>
              <span style={{ fontSize: '11px', color: '#888' }}>{card.note}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;