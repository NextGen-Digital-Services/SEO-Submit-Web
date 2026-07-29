import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import SeoLeadsForm from '../forms/SeoLeadsForm';
import SeoLeadsImg from '../assets/All Images/Seoleads_result.webp';
import useScrollReveal from '../hooks/useScrollReveal';
import Counter from '../components/Counter';

export const SeoLeadsPage = ({ isMobile, onViewPricing }) => {
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

          {/* Background image */}
          <img
            src={SeoLeadsImg}
            alt="SEO Leads"
            width="1470"
            height="980"
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

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(10, 22, 40, 0.58)',
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
              BUY EXCLUSIVE SEO LEADS IN USA
            </div>
            <h1 style={{
              fontFamily: F.display,
              fontWeight: 900,
              fontSize: isMobile ? '28px' : '38px',
              color: C.white,
              lineHeight: 1.15,
              marginBottom: '14px',
            }}>
              Buy Exclusive <span style={{ color: C.yellow }}>SEO Leads in USA</span> That Actually Convert
            </h1>
            <p style={{
              fontFamily: F.body,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.7,
              marginBottom: '24px',
              maxWidth: '540px',
            }}>
              Looking to Buy SEO Leads in USA that generate real sales? SEO Submit Web provides exclusive, verified, and high-intent SEO Leads in USA that are never shared with multiple agencies. Whether you're an SEO agency, freelancer, or digital marketing company, our leads are designed to help you close more clients and grow faster.
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {["100% Exclusive", "Real-Time", "C-Level Data", "Guaranteed"].map((t) => (
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
                Buy SEO Leads in USA
              </button>
              <button onClick={() => navigate('/contact')} style={{ background: 'transparent', color: C.yellow, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 24px', border: `2px solid ${C.yellow}`, cursor: 'pointer', borderRadius: 0 }}>
                Get Free Consultation
              </button>

            </div>
          </div>
        </div>

        {/* Right Stats Panel */}
        <div style={{
          width: isMobile ? '100%' : '280px',
          background: C.yellow,
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '16px',
          alignContent: 'center',
          padding: '24px',
        }}>
          {/* Stats Image Background */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <img src="/assets/seo-analytics-leads.png" alt="SEO analytics and high-intent lead dashboard" width="1672" height="941" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.15 }} />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            {[
              { val: '15,000+', lbl: 'SEO Leads Sold' },
              { val: '92%', lbl: 'Contact Rate' },
              { val: '4.8 / 5', lbl: 'Average Rating' },
              { val: '48hr', lbl: 'Max Delivery Window' },
            ].map((item, idx) => (
              <div key={idx} className="reveal" style={{ textAlign: 'center', borderBottom: idx !== 3 ? '1px solid rgba(10,22,40,0.1)' : 'none', paddingBottom: '12px', marginBottom: idx !== 3 ? '12px' : 0 }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.navy }}><Counter value={item.val} /></span>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '9px', color: C.blue, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [B] WHY CHOOSE SEO SUBMIT WEB */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="WHY CHOOSE US" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Why Choose SEO Submit Web?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '32px' }}>
          {/* Left Explanation */}
          <div>
            <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#444', lineHeight: 1.7, marginBottom: '14px' }}>
              Finding quality SEO prospects is difficult. That's why businesses choose SEO Submit Web to Buy Exclusive SEO Leads in USA that are manually verified and delivered exclusively to one agency.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
              Unlike shared databases, our SEO Leads in USA come from businesses actively searching for SEO, website design, and digital marketing services. This means less time chasing cold prospects and more time closing high-value clients.
            </p>

            <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.navy, marginBottom: '14px' }}>We Provide:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
              {[
                'Buy SEO Leads in USA',
                'Buy Exclusive SEO Leads in USA',
                'SEO Leads in USA',
                'Best SEO Leads in USA',
                'Website Design Leads in USA',
                'Web Design Leads USA',
                'Appointment Set Leads',
                'Digital Marketing Leads',
                'Local Business Leads',
              ].map((bullet) => (
                <div key={bullet} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: C.navy, fontFamily: F.body, fontWeight: 600 }}>
                  <i className="ti ti-square-check" style={{ color: C.blue, fontSize: '16px' }} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Lead Card Mockup */}
          <div style={{ background: C.yellow, color: C.navy, border: `2px solid ${C.navy}`, borderRadius: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%', minHeight: '350px' }}>
            <img src="https://res.cloudinary.com/dpeq00iqq/image/upload/v1782632162/seoleads1_result_ht0p8p.webp" alt="SEO lead qualification dashboard" width="1672" height="941" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </SectionWrapper>

      {/* [C] OUR LEAD GENERATION SERVICES */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="OUR SERVICES" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Our Lead Generation Services
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { icon: 'ti-search', title: 'Buy SEO Leads in USA', desc: 'Purchase premium SEO Leads in USA from businesses actively looking for SEO services. Every lead is manually verified to improve conversion rates and maximize your ROI.' },
            { icon: 'ti-shield-check', title: 'Buy Exclusive SEO Leads in USA', desc: 'Our exclusive lead generation system ensures that every lead is delivered only to your agency. No shared lists, no competition, and no wasted marketing budget.' },
            { icon: 'ti-layout', title: 'Website Design Leads in USA', desc: 'Expand your web development business with qualified website design prospects looking for new websites or redesign services.' },
            { icon: 'ti-device-laptop', title: 'Web Design Leads USA', desc: 'Receive fresh web design inquiries from businesses across the United States that need professional website development services.' },
            { icon: 'ti-calendar-check', title: 'Appointment Set Leads', desc: 'Let our experts qualify prospects and schedule appointments with interested business owners so your sales team can focus on closing deals.' },
          ].map((item, idx) => (
            <div key={idx} className="reveal" style={{ background: C.white, border: '1px solid #dde3f0', borderTop: `4px solid ${C.blue}`, padding: '20px', borderRadius: '4px' }}>
              <i className={`ti ${item.icon}`} style={{ fontSize: '28px', color: C.blue, display: 'block', marginBottom: '12px' }} />
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [D] SEO LEADS PRICING */}
      <SectionWrapper bg={C.navy} id="seo-pricing">
        <Eyebrow label="PRICING PLANS" labelColor={C.yellow} />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          SEO Lead Packages
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '24px' : 0 }}>
          {[
            { name: 'Basic SEO', price: '399', period: '20 Leads/mo', features: ['20 SEO Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Email Support'] },
            { name: 'Standard SEO', price: '999', period: '50 Leads/mo', features: ['50 SEO Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'CRM Webhook Integration', 'Dedicated Manager'], featured: true },
            { name: 'Premium SEO', price: '2,399', period: '120 Leads/mo', features: ['120 SEO Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'CRM Integration', 'Priority 24/7 Phone Support'] },
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
            } : {
              background: C.white,
              border: '1px solid #dde3f0',
              borderRight: isMobile ? '1px solid #dde3f0' : (idx === arr.length - 1 ? '1px solid #dde3f0' : 'none'),
              padding: '24px 20px',
              borderRadius: 0,
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

      {/* [E] WHY AGENCIES CHOOSE OUR SEO LEADS */}
      <section style={{ background: C.yellow, padding: '48px 24px', textAlign: 'center' }}>
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '32px' }}>
          Why Agencies Choose Our SEO Leads
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            '✔ 100% Exclusive Leads',
            '✔ No Shared Leads',
            '✔ Verified Business Information',
            '✔ High Intent Prospects',
            '✔ Better Conversion Rates',
            '✔ Fast Delivery',
            '✔ USA-Focused Campaigns',
            '✔ Dedicated Account Manager',
            '✔ Affordable Pricing',
          ].map((item, idx) => (
            <div key={idx} className="reveal" style={{ background: C.navy, color: C.white, padding: '16px', borderRadius: '4px', textAlign: 'center' }}>
              <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.yellow }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* [F] SEO LEADS FAQ */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="FAQ" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            {
              q: 'What are SEO Leads in USA?',
              a: 'SEO Leads in USA are businesses actively searching for search engine optimization services to improve their online visibility and website rankings.'
            },
            {
              q: 'Can I Buy SEO Leads in USA?',
              a: 'Yes. SEO Submit Web provides verified and exclusive Buy SEO Leads in USA packages that are delivered only to your business.'
            },
            {
              q: 'Are the leads exclusive?',
              a: 'Absolutely. We never resell the same lead to multiple agencies.'
            },
            {
              q: 'Why are your Best SEO Leads in USA better?',
              a: 'Our leads are manually verified, highly targeted, and generated from businesses actively looking for SEO and digital marketing services, resulting in higher conversion rates.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="reveal" style={{ padding: '20px', borderLeft: `4px solid ${C.yellow}`, background: C.lightBg, textAlign: 'left', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '8px' }}>{faq.q}</h3>
              <p style={{ fontFamily: F.body, fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [G] SEO LEADS ENQUIRY FORM */}
      <section style={{ background: C.navy, padding: '48px 24px', borderTop: `3px solid ${C.yellow}` }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.yellow, marginBottom: '24px' }}>
            Get SEO Leads Now — Fill The Form Below
          </h2>
          <SeoLeadsForm />
        </div>
      </section>

      {/* [H2] SEO CONTENT & WHO CAN BENEFIT SECTION */}
      <SectionWrapper bg={C.white}>
        <div style={{
          display: 'grid',
          flexDirection: 'column',
          gap: '32px',
          paddingTop: '16px',
          paddingBottom: '16px',
        }}>
          <div>
            <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
              Why Buy SEO Leads in USA From Us?
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#555', lineHeight: 1.7, marginBottom: '14px' }}>
              At SEO Submit Web, we understand that agencies need quality over quantity. That's why every Buy SEO Leads in USA package is built around verified businesses that are actively searching for digital marketing services.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
              Our Best SEO Leads in USA help agencies reduce acquisition costs while increasing conversion rates. Whether you're looking for SEO projects, web design clients, or digital marketing contracts, our exclusive lead generation system gives you a competitive advantage.
            </p>
          </div>

          <div>
            <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
              Who Can Benefit?
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '14px', color: '#4b5563', marginBottom: '16px', fontWeight: 600 }}>
              Suitable For:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                'SEO Agencies',
                'Digital Marketing Agencies',
                'Website Design Companies',
                'Freelancers',
                'PPC Agencies',
                'Local Marketing Consultants',
                'Website Developers',
                'SaaS Agencies',
                'Startup Marketing Teams',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: C.lightBg, padding: '12px 16px', borderRadius: '4px', borderLeft: `3px solid ${C.blue}` }}>
                  <i className="ti ti-check" style={{ color: C.blue, fontSize: '16px' }} />
                  <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: '13px', color: C.navy }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* [H] FINAL CTA SECTION */}
      <section style={{ background: C.yellow, padding: '48px 24px', textAlign: 'center' }}>
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '8px' }}>
          Ready to Buy Exclusive SEO Leads in USA?
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: '#333', marginBottom: '24px', maxWidth: '650px', margin: '0 auto 24px' }}>
          Grow your agency with verified, high-converting business leads delivered directly to your inbox.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/contact')} style={{ background: C.navy, color: C.white, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
            Buy SEO Leads in USA
          </button>
          <button onClick={() => navigate('/contact')} style={{ background: 'transparent', color: C.navy, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 28px', border: `2px solid ${C.navy}`, cursor: 'pointer', borderRadius: 0 }}>
            Get Started Today
          </button>

        </div>
      </section>
    </div>
  );
};

export default SeoLeadsPage;
