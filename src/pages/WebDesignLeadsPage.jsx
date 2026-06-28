import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import WebDesignLeadsForm from '../forms/WebDesignLeadsForm';
import useScrollReveal from '../hooks/useScrollReveal';
import Counter from '../components/Counter';
import WebDesignImg from '../assets/All Images/WebDesginLeads_result.webp';

export const WebDesignLeadsPage = ({ isMobile, onViewPricing }) => {
  const navigate = useNavigate();
  useScrollReveal();

  return (
    <div style={{ width: '100%' }}>
      {/* [A] PAGE HERO */}
      <section style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'stretch',
        minHeight: '450px',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}>
        {/* Left Column */}
        <div style={{
          flex: 1,
          padding: isMobile ? '32px 16px' : '56px 40px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left',
        }}>

          <img
            src={WebDesignImg}
            alt="Web Design Leads"
            width="1600"
            height="900"
            loading="eager"
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
            <div style={{
              background: C.yellow,
              color: C.navy,
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: '9px',
              letterSpacing: '2px',
              padding: '6px 14px',
              alignSelf: 'flex-start',
              marginBottom: '16px',
              display: 'inline-block',
            }}>
              WEB DESIGN LEADS
            </div>
            <h1 style={{
              fontFamily: F.display,
              fontWeight: 900,
              fontSize: isMobile ? '28px' : '38px',
              color: C.white,
              lineHeight: 1.15,
              marginBottom: '14px',
            }}>
               Buy <span style={{ color: C.yellow }}>web design leads</span> Exclusive Leads Trusted Since 2009
            </h1>
            <p style={{
              fontFamily: F.body,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.7,
              marginBottom: '24px',
              maxWidth: '540px',
            }}>
              If your agency is ready to grow faster and close more projects, it is time to buy web design leads from SEOSubmitWeb. Our web design leads are not recycled lists or shared contacts — every prospect we deliver is freshly generated, high-intent, and actively looking to hire a web designer or agency right now.
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {["E-Commerce Focus", "Redesigns", "C-Level Data", "ACMA Compliant"].map((t) => (
                <span key={t} style={{
                  background: 'rgba(255,255,255,0.15)',
                  color: C.white,
                  fontFamily: F.display,
                  fontWeight: 700,
                  fontSize: '11px',
                  padding: '6px 14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 24px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
                VIEW LEAD SAMPLES
              </button>
              <button onClick={() => onViewPricing && onViewPricing('Web Design Leads')} style={{ background: 'transparent', color: C.yellow, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 24px', border: `2px solid ${C.yellow}`, cursor: 'pointer', borderRadius: 0 }}>
                VIEW PRICING
              </button>

            </div>
          </div>
        </div>

        {/* Right Stats Panel */}
        <div style={{
          width: isMobile ? '100%' : '320px',
          background: C.blue,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          border: `2px solid ${C.yellow}`,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '280px',
        }}>
          {/* Background Image */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <img
              src="/assets/lead-generation-hero.png"
              alt="Web Design Background"
              width="1672"
              height="941"
              loading="eager"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.15 }}
            />
          </div>

          <div style={{ position: 'relative', zIndex: 2, padding: '24px' }}>
            {[
              { val: '12,000+', lbl: 'Web Leads Sold' },
              { val: '89%', lbl: 'Contact Rate' },
              { val: '4.7 / 5', lbl: 'Average Rating' },
              { val: 'Real-Time', lbl: 'Delivery Pipeline' },
            ].map((item, idx) => (
              <div key={idx} className="reveal" style={{ textAlign: 'center', borderBottom: idx !== 3 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingBottom: '12px', marginBottom: idx !== 3 ? '12px' : 0 }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white }}><Counter value={item.val} /></span>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '9px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [B] WHAT YOU RECEIVE */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="LEAD OUTLINE" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Verified Leads, Ready to Close
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '32px' }}>
          <div>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
              Every lead is verified for intent and quality before delivery. Since 2016, SEOSubmitWeb has delivered high-quality web design leads to freelancers, boutique studios, and full-service agencies — all with one guarantee: one lead, one buyer, zero sharing.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
              {[
                'Business Name & Sector',
                'Contact Person & Role',
                'Email Address Verified',
                'Direct Contact Number',
                'Current Website (if any)',
                'Budget Range Specified',
                'Project Scope Detail',
                'Timeline Expectations',
              ].map((bullet) => (
                <div key={bullet} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.navy, fontFamily: F.body }}>
                  <i className="ti ti-check" style={{ color: C.blue, fontSize: '16px', fontWeight: 'bold' }} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Lead Card Mockup */}
          <div style={{ background: C.white, border: `3px solid ${C.blue}`, borderRadius: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%', minHeight: '350px' }}>
            <img src="https://res.cloudinary.com/dpeq00iqq/image/upload/v1782632208/web1_result_vhb04d.webp" alt="Agency team discussing website design projects" width="1672" height="941" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </SectionWrapper>

      {/* [C] WEB DESIGN LEAD TYPES */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="LEAD CATEGORIES" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Web Design & Development Leads
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { border: C.yellow, title: 'New Website Builds', desc: 'Startups and service providers seeking their very first online site.', price: '$$' },
            { border: C.blue, title: 'Redesign Projects', desc: 'Established firms looking to overhaul their outdated UI/UX designs.', price: '$$$' },
            { border: C.navy, title: 'E-Commerce Websites', desc: 'Retailers scaling into Shopify, WooCommerce, or custom checkouts.', price: '$$$$' },
            { border: C.yellow, title: 'Web Development Leads', desc: 'Beyond design, we also help development-focused agencies buy web development leads — pre-qualified businesses actively looking for custom builds, CMS solutions, and full-stack development partners.', price: '$' },
          ].map((cat, idx) => (
            <div key={idx} className="reveal" style={{ background: C.white, borderTop: `4px solid ${cat.border}`, border: '1px solid #dde3f0', padding: '20px', display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.navy, marginBottom: '8px' }}>{cat.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555', lineHeight: 1.6, marginBottom: '14px', flex: 1 }}>{cat.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: C.blue }}>Value: {cat.price}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [D] WHY WEB DESIGN LEADS */}
      <SectionWrapper bg={C.navy}>
        <Eyebrow label="ADVANTAGES" labelColor={C.yellow} />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          Why Agencies Choose SEOSubmitWeb
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { border: C.yellow, title: 'High Order Values', desc: "Every dollar invested in exclusive web design leads delivers greater ROI because you're the only agency contacting the prospect." },
            { border: C.blue, title: 'Fresh Inquiries Only', desc: 'Unlike directories and marketplaces, every lead is generated fresh and delivered exclusively.' },
            { border: C.blue, title: '100% Replacement policy', desc: 'Most lead vendors sell the same web design leads to multiple agencies. SEOSubmitWeb delivers every lead exclusively to one buyer.' },
            { border: C.yellow, title: 'Verified Budget Allocation', desc: 'Agencies that buy exclusive web design leads from SEOSubmitWeb stop chasing and start closing because every prospect already knows what they need.' },
            { border: C.yellow, title: 'Direct Access', desc: 'When you buy exclusive web design leads from SEOSubmitWeb, you are the only buyer — no competitor receives the same contact, and no one else gets to pitch the same prospect you are closing.' },
            { border: C.blue, title: 'Custom CRM Push', desc: "Whether you're a freelancer or a growing agency, scale your lead volume whenever you need." },
          ].map((item, idx) => (
            <div key={idx} className="reveal" style={{ background: C.navy, borderLeft: `3px solid ${item.border}`, padding: '20px' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.white, marginBottom: '6px' }}>{item.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [E] PRICING */}
      <SectionWrapper bg={C.yellow} id="web-pricing">
        <Eyebrow label="PRICING PLANS" labelColor={C.navy} />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Web Design Lead Packages
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '24px' : 0 }}>
          {[
            { name: 'Starter Web', price: '399', period: '20 Leads/mo', features: ['20 Web Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Email Support'] },
            { name: 'Professional Web', price: '999', period: '50 Leads/mo', features: ['50 Web Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'CRM Webhook', 'Dedicated Manager'], featured: true },
            { name: 'Enterprise Web', price: '2,399', period: '120 Leads/mo', features: ['120 Web Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'CRM Webhook', '24/7 Priority Phone Support'] },
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
              color: C.white,
            } : {
              background: C.white,
              border: '1px solid #dde3f0',
              borderRight: isMobile ? '1px solid #dde3f0' : (idx === arr.length - 1 ? '1px solid #dde3f0' : 'none'),
              padding: '24px 20px',
              borderRadius: 0,
              color: C.navy,
            };

            return (
              <div key={pack.name} className="reveal" style={cardStyle}>
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

      {/* [F] PROCESS */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="PROCESS" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '32px' }}>
          Our Web Lead Verification Flow
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', gap: '16px' }}>
          {[
            { step: '1', title: 'Ad Engagement', desc: 'Businesses interact with our web design audits.' },
            { step: '2', title: 'Scope Details', desc: 'They specify pages, timeline, and features.' },
            { step: '3', title: 'Verification', desc: 'We verify details with direct phone validations.' },
            { step: '4', title: 'CRM Delivery', desc: 'Verified records route straight to your CRM.' },
            { step: '5', title: 'Pitch & Close', desc: 'You deliver the custom mockups and sign the client.' },
          ].map((item) => (
            <div key={item.step} className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: C.blue,
                color: C.white,
                fontFamily: F.display,
                fontWeight: 900,
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px',
              }}>{item.step}</div>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.navy, marginBottom: '4px' }}>{item.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [G] FAQ */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="FAQ" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Frequently Asked Questions About Web Design Leads
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            { q: 'How are web design leads generated?', a: 'Via search marketing targeting business owners who search for custom development.' },
            { q: 'What is the average project value?', a: 'Most project values range between $3,000 and $15,000.' },
            { q: 'Do you replace incorrect contacts?', a: 'Yes. Any lead with disconnected lines or bad emails gets replaced.' },
            { q: 'Can I integrate my CRM?', a: 'Yes. Webhooks can push leads to HubSpot, Salesforce, Zoho, etc.' },
            { q: 'Are e-commerce leads included?', a: 'Yes. We categorize builds, e-commerce, and landing page scopes separately.' },
            { q: 'Are these leads exclusive?', a: 'Yes. Every web design lead is sold exactly once.' },
            { q: 'How long does delivery take?', a: 'Most leads route in under 2 minutes after validation.' },
            { q: 'Can I set geo filters?', a: 'Yes. Targeting options are available on enterprise campaigns.' },
          ].map((faq, idx) => (
            <div key={idx} className="reveal" style={{ padding: '16px', borderLeft: `3px solid ${C.blue}`, background: C.white, textAlign: 'left' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.navy, marginBottom: '6px' }}>{faq.q}</h4>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      

      {/* [H] WEB DESIGN LEADS ENQUIRY FORM */}
      <section style={{ background: C.navy, padding: '48px 24px', borderTop: `3px solid ${C.blue}` }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.yellow, marginBottom: '24px' }}>
            Start Closing More Web Design Projects Today
          </h2>
          <WebDesignLeadsForm />
        </div>
      </section>

      {/* [H2] SEO CONTENT SECTION */}
      <SectionWrapper bg={C.white}>
        <div style={{
          display: 'grid',
          flexDirection: 'column',
          gap: '32px',
          paddingTop: '16px',
          paddingBottom: '16px',
        }}>
          <div>
            <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
              Why Choose Exclusive Web Design Leads?
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
              If your agency is ready to grow faster and close more projects, it is time to buy web design leads from SEOSubmitWeb — the exclusive lead source designers and agencies have trusted since 2009.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
              Our web design leads are not recycled lists or shared contacts — every prospect we deliver is freshly generated, high-intent, and actively looking to hire a web designer or agency right now.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
              Agencies that buy exclusive web design leads from SEOSubmitWeb spend less time chasing and more time closing.
            </p>
          </div>

          <div>
            <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
              The SEOSubmitWeb Exclusivity Difference
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
              When you buy exclusive web design leads from SEOSubmitWeb, you are the only buyer — no competitor receives the same contact. Most lead vendors resell the same leads. We never do.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
              Since 2009, SEOSubmitWeb has delivered exclusive, verified web design leads with one lead, one buyer, zero sharing.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
              Unlike directories, every lead is generated fresh and delivered exclusively.
            </p>
          </div>

          <div>
            <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
              High-Quality Web & CMS Development Leads
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
              We also help agencies buy web development leads for businesses seeking custom websites, CMS solutions, and full-stack development.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
              Every lead is verified before delivery for maximum ROI, allowing you to scale your lead volume as your agency grows.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
              Buy exclusive web design leads today and start closing more projects.
            </p>
          </div>
          <div>
            <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
              Ready to Grow Your Agency?
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
              When you buy web design leads exclusively through SEOSubmitWeb, every dollar you invest returns multiplied because you are the only agency in the room and the only one with a chance to close.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
              Every day you delay is a day another agency is closing the web design projects you should have won. Buy exclusive web design leads from SEOSubmitWeb and make sure you are always first in the door.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom:
            '12px' }}>
              From design to development, SEOSubmitWeb has you covered. Buy web development leads or web design leads and build a complete digital services pipeline backed by a partner with nearly a decade of proven results.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, }}>
              Visit www.seosubmitweb.com today to buy web design leads or web development leads that are exclusive, pre-qualified, and ready to close — because your next best client is already out there looking for you.
            </p>
            
          </div>
        </div>
      </SectionWrapper>

      {/* [I] BOTTOM CTA */}
      <section style={{ background: C.navy, padding: '40px 24px', textAlign: 'center', borderTop: `1px solid ${C.blue}` }}>
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white, marginBottom: '8px' }}>
          Your Next Best Client Is Already Looking
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
          Visit <a href="http://www.seosubmitweb.com" style={{ color: C.yellow, textDecoration: 'none' }}>www.seosubmitweb.com</a> today to buy exclusive web design leads and web development leads that are verified, exclusive, and ready to convert.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
            BUY WEB DESIGN LEADS →
          </button>

        </div>
      </section>
    </div>
  );
};

export default WebDesignLeadsPage;
