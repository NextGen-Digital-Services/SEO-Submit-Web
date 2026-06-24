import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../forms/ContactForm';
import ContactImg from '../assets/All Images/Contact_result.webp';

export const ContactPage = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%' }}>
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
        minHeight: '300px',
      }}>
        <img
          src={ContactImg}
          alt="Contact"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: 0.45,
            zIndex: 0,
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(10, 22, 40, 0.45)',
          zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '36px', color: C.white, marginBottom: '14px' }}>
            Ready to <span style={{ color: C.yellow }}>Scale With</span> High-Quality Leads?
          </h1>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Reach our team for webhook configuration questions, custom geo filters, or sample inquiries.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {["Available 24/7", "Reply in 2 hours", "CRM Integrations Supported"].map((pill) => (
              <span key={pill} style={{
                background: C.yellow,
                color: C.navy,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '11px',
                padding: '6px 14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* [B] CONTACT GRID */}
      <section style={{ background: C.lightBg, padding: '32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { border: C.yellow, icon: 'ti-phone', title: 'Phone Support', val: '(716) 575-5447', note: 'Available 24 hours a day', link: 'tel:+17165755447' },
            { border: C.blue, icon: 'ti-mail', title: 'Email Enquiries', val: 'Seosubmitweb@gmail.com', note: 'Reply within 2 hours', link: 'mailto:Seosubmitweb@gmail.com' },
            { border: C.navy, icon: 'ti-map-pin', title: 'Chicago Office HQ', val: '123 Business Hub, Loop District, Chicago, IL 60601', note: 'Mon–Sun Open Operations' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: C.white, borderTop: `4px solid ${item.border}`, padding: '24px 20px', textAlign: 'center', border: '1px solid #dde3f0' }}>
              <i className={`ti ${item.icon}`} style={{ fontSize: '32px', color: item.border, display: 'block', marginBottom: '12px' }} />
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '6px' }}>{item.title}</h4>
              <span style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: C.navy, marginBottom: '4px' }}>
                {item.link ? (
                  <a href={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>{item.val}</a>
                ) : item.val}
              </span>
              <span style={{ fontSize: '11px', color: '#888' }}>{item.note}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://wa.me/17165755447?text=Hi%20I%20am%20interested%20in%20your%20leads.%20Please%20send%20me%20more%20information."
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
              padding: '13px 24px',
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
      </section>

      {/* Image Strip above form */}
      <img
        src="/assets/lead-generation-hero.png"
        alt="SEO Submit Web support team"
        style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }}
      />

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

      {/* [D] MAP PLACEHOLDER */}
      <section style={{ background: C.deepNavy, padding: '48px 24px', textAlign: 'center', borderTop: `1px solid ${C.blue}` }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '280px',
          border: '1px dashed rgba(255,255,255,0.15)',
          background: 'radial-gradient(circle, rgba(10,22,40,0.8) 0%, rgba(6,16,32,0.9) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          }
        }>
          {/* Simulated Grid Lines */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '25%', width: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '75%', width: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', height: '1px', background: 'rgba(255,255,255,0.05)' }} />

          <div style={{
            background: C.white,
            color: C.navy,
            padding: '20px',
            border: `2px solid ${C.yellow}`,
            zIndex: 1,
            maxWidth: '300px',
            textAlign: 'left',
          }}>
            <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '13px', color: C.navy, marginBottom: '6px' }}>HQ Location Address</h4>
            <p style={{ fontSize: '11px', color: '#555', marginBottom: '12px' }}>
              123 Business Hub, Loop District, Chicago, IL 60601
            </p>
            <button onClick={() => alert('Launching Google Maps directions...')} style={{ background: C.blue, color: C.white, border: 'none', padding: '6px 12px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer', borderRadius: 0 }}>
              GET DIRECTIONS
            </button>
          </div>
        </div>
      </section>

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
            <div key={idx} style={{ background: C.navy, color: C.white, padding: '20px', textAlign: 'left', borderRadius: 0 }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.yellow, marginBottom: '6px' }}>{faq.q}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{faq.a}</p>
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
            <div key={idx} style={{ background: C.white, padding: '20px', color: C.navy, textAlign: 'center', borderRadius: 0 }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.blue, marginBottom: '6px' }}>{card.tz}</h4>
              <span style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: C.navy, marginBottom: '4px' }}>{card.hours}</span>
              <span style={{ fontSize: '11px', color: '#888' }}>{card.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* [G] BOTTOM CTA */}
      <section style={{ background: C.navy, padding: '40px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white, marginBottom: '8px' }}>
          Don't wait — your competitors are already buying leads
        </h2>
        <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
          CLAIM YOUR ZIP CODES
        </button>
      </section>
    </div>
  );
};

export default ContactPage;
