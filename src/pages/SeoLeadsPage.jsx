import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import SeoLeadsForm from '../forms/SeoLeadsForm';
import SeoLeadsImg from '../assets/All Images/Seoleads_result.webp';
import seoleads from '../assets/seoleads/seoleads.webp';

export const SeoLeadsPage = ({ isMobile, onViewPricing }) => {
  const navigate = useNavigate();

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
              EXCLUSIVE SEO LEADS
            </div>
            <h1 style={{
              fontFamily: F.display,
              fontWeight: 900,
              fontSize: isMobile ? '28px' : '38px',
              color: C.white,
              lineHeight: 1.15,
              marginBottom: '14px',
            }}>
              High-Intent <span style={{ color: C.yellow }}>SEO Leads</span> Delivered Directly to Your Agency
            </h1>
            <p style={{
              fontFamily: F.body,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.7,
              marginBottom: '24px',
              maxWidth: '540px',
            }}>
              Direct client queries from validated companies actively seeking search optimization, local SEO, content strategies, and ranking optimization.
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
                VIEW LEAD SAMPLES
              </button>
              <button onClick={() => onViewPricing && onViewPricing('SEO Leads')} style={{ background: 'transparent', color: C.yellow, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 24px', border: `2px solid ${C.yellow}`, cursor: 'pointer', borderRadius: 0 }}>
                VIEW PRICING
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
              <div key={idx} style={{ textAlign: 'center', borderBottom: idx !== 3 ? '1px solid rgba(10,22,40,0.1)' : 'none', paddingBottom: '12px', marginBottom: idx !== 3 ? '12px' : 0 }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.navy }}>{item.val}</span>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '9px', color: C.blue, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [B] WHAT ARE SEO LEADS */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="WHAT YOU GET" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          What Exactly Are Our SEO Leads?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '32px' }}>
          {/* Left Explanation */}
          <div>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
              Our SEO leads represent business owners and marketing heads who have completed a full audit request form and are looking for ranking, technical SEO, and link-building support. We do not recycle database directories. Each record is freshly captured in real time.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
              {[
                'First & Last Name',
                'Verified Email Address',
                'Direct Phone Number',
                'Company Name & Niche',
                'Website URL & Audited Problems',
                'Monthly Marketing Budget',
                'Decision Maker Role Checked',
                'Geographic Location Filters',
              ].map((bullet) => (
                <div key={bullet} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.navy, fontFamily: F.body }}>
                  <i className="ti ti-square-check" style={{ color: C.blue, fontSize: '16px' }} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Lead Card Mockup */}
          <div style={{ background: C.yellow, color: C.navy, border: `2px solid ${C.navy}`, borderRadius: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <img src="/assets/seo-analytics-leads.png" alt="SEO lead qualification dashboard" width="1672" height="941" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px', borderBottom: `2px solid ${C.navy}`, paddingBottom: '6px' }}>
                Verified SEO Lead Mockup
              </h4>
              <div style={{ display: 'grid', gap: '8px', fontSize: '12px', fontFamily: F.body }}>
                <div><strong>First Name:</strong> Sarah</div>
                <div><strong>Last Name:</strong> Jenkins</div>
                <div><strong>Email:</strong> sarah@seoagency.com</div>
                <div><strong>Phone:</strong> +1 (555) 123-4567</div>
                <div><strong>Company:</strong> TechSEO Solutions LLC</div>
                <div><strong>Website:</strong> techseosolutions.com</div>
                <div><strong>Monthly Budget:</strong> $2,500 - $5,000</div>
                <div><strong>Decision Maker:</strong> Yes (CEO)</div>
                <div><strong>Verified Status:</strong> Active / Checked</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* [C] WHY OUR SEO LEADS */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="KEY FEATURES" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Why Agencies Trust Our SEO Leads
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { icon: 'ti-bolt', title: 'Real-Time Delivery', desc: 'Leads are delivered via CRM webhook within 2 minutes of contact verification.' },
            { icon: 'ti-shield-check', title: '100% Exclusive', desc: 'We never sell the same lead twice. The prospect details belong only to you.' },
            { icon: 'ti-users', title: 'C-Level Only', desc: 'No gatekeepers. We filter records to connect directly with the CEO, Founder, or CMO.' },
            { icon: 'ti-refresh', title: 'Invalid Replacement', desc: 'Disconnected phone? Wrong email? We replace it instantly without audit delays.' },
            { icon: 'ti-device-laptop', title: 'Compliance Standards', desc: 'All leads are double opt-in and adhere to ACMA, GDPR, and CAN-SPAM standards.' },
            { icon: 'ti-coin', title: 'Budget Verified', desc: 'We verify that the contact has set aside a budget matching your minimum tier.' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: C.white, border: '1px solid #dde3f0', padding: '20px' }}>
              <i className={`ti ${item.icon}`} style={{ fontSize: '24px', color: C.blue, display: 'block', marginBottom: '12px' }} />
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.navy, marginBottom: '6px' }}>{item.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [D] SEO LEADS PRICING */}
      <SectionWrapper bg={C.navy} id="seo-pricing">
        <Eyebrow label="PRICING PLANS" labelColor={C.yellow} />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
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
              <div key={pack.name} style={cardStyle}>
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

      {/* [E] HOW SEO LEADS WORK */}
      <section style={{ background: C.yellow, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '32px' }}>
          Our SEO Lead Flow
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { step: '1', title: 'Lead Interested', desc: 'Prospect searches for SEO audits.' },
            { step: '2', title: 'We Capture Data', desc: 'Prospect inputs their website and goals.' },
            { step: '3', title: 'Quality Check', desc: 'We verify phone and C-Level credentials.' },
            { step: '4', title: 'Real-Time Delivery', desc: 'Details route instantly to your inbox.' },
            { step: '5', title: 'You Close The Deal', desc: 'Your sales team pitches and signs the contract.' },
          ].map((item) => (
            <div key={item.step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: C.navy,
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
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#333', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* [F] SEO LEADS FAQ */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="FAQ" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Frequently Asked Questions About SEO Leads
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            { q: 'Are these leads exclusive to me only?', a: 'Yes. All our leads are sold exactly once. We do not distribute database listings.' },
            { q: 'How fast are leads delivered?', a: 'Leads route instantly. Our automation transfers details to your CRM within 2 minutes.' },
            { q: 'What if a lead has wrong contact info?', a: 'We verify phone and email. If wrong info slips through, we replace it instantly.' },
            { q: 'Do you replace bad leads?', a: 'Yes. Any lead with disconnected lines or mismatched criteria gets replaced.' },
            { q: 'What industries do the leads come from?', a: 'Local services, e-commerce, healthcare, construction, legal, and software developers.' },
            { q: 'Are leads ACMA/GDPR compliant?', a: 'Yes. All campaigns utilize double opt-in checkboxes and transparent terms.' },
            { q: 'Can I get leads for a specific city or country?', a: 'Yes. We offer targeting filters on our enterprise accounts.' },
            { q: 'Is there a minimum order?', a: 'Our starter package begins at 20 leads per month.' },
          ].map((faq, idx) => (
            <div key={idx} style={{ padding: '16px', borderLeft: `3px solid ${C.yellow}`, background: C.lightBg, textAlign: 'left' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.navy, marginBottom: '6px' }}>{faq.q}</h4>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [G] TESTIMONIALS STRIP */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.white, marginBottom: '28px' }}>
          SEO Agency Owners Speak
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { name: 'Sarah Jenkins', comp: 'PixelForge Studio', img: seoleads, txt: 'The leads are extremely hot. We closed 4 deals from our first batch of 20 SEO leads. Superb service.' },
            { name: 'David Miller', comp: 'RankBoost Agency', img: seoleads, txt: 'We tried several scrapers and list providers. SEO Submit Web leads are verified, saving our reps hours of cold-calling.' },
            { name: 'Ashley Vance', comp: 'Apex Digital', img: seoleads, txt: 'Since swapping to SEO Submit Web leads, we went from 3 to 27 SEO clients in just 6 months.' },
          ].map((test, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.1)', padding: '24px 20px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '3px solid #FFD600', padding: 0, margin: '0 0 12px 0' }}>
                <img src={test.img} alt={test.name} width="80" height="80" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', padding: 0, margin: 0 }} />
              </div>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: C.white, lineHeight: 1.6, marginBottom: '12px', fontStyle: 'italic', flex: 1 }}>
                "{test.txt}"
              </p>
              <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: '12px', color: C.yellow, display: 'block' }}>{test.name}</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', display: 'block' }}>{test.comp}</span>
            </div>
          ))}
        </div>
      </section>

      {/* [G] SEO LEADS ENQUIRY FORM */}
      <section style={{ background: C.navy, padding: '48px 24px', borderTop: `3px solid ${C.yellow}` }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.yellow, marginBottom: '24px' }}>
            Get SEO Leads Now — Fill The Form Below
          </h2>
          <SeoLeadsForm />
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
                  <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
                    Why Agencies Choose to Buy SEO Leads
                  </h2>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                    If you are ready to grow your agency faster, buy SEO leads from SEOSubmitWeb — the trusted source for high-intent prospects since 2009.
                  </p>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                    The smartest decision any digital agency can make today is to buy exclusive SEO leads that are verified, exclusive, and delivered by a partner with nearly a decade of proven results.
                  </p>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                    Our SEO leads are not scraped from directories or pulled from outdated databases — they are actively generated prospects looking for SEO services right now.
                  </p>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                   Stop wasting your sales team's time on cold outreach — buy SEO leads that are already interested, already searching, and already ready to talk.
                  </p>
                </div>
      
                <div>
                  <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
                    Exclusive SEO Leads That Give You an Edge
                  </h2>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                    When you buy exclusive SEO leads through SEOSubmitWeb, you eliminate the single biggest problem in lead generation — competing with five other agencies for the same contact.
                  </p>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                    At SEOSubmitWeb, every client who chooses to buy exclusive SEO leads gets prospects that belong to them alone — sourced fresh, delivered fast, and never resold.
                  </p>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
                    The difference between agencies that grow and agencies that stall is simple — the ones that grow buy SEO leads from a source they can trust.
                  </p>
                </div>
      
                <div>
                  <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
                    Verified Leads Built for Agency Growth
                  </h2>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                    Thousands of consultants and agencies have chosen to buy SEO leads from SEOSubmitWeb because quality, exclusivity, and consistency are never optional for us — they are standard.
                  </p>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                  SEO leads from SEOSubmitWeb come pre-qualified and appointment-ready, allowing your team to spend less time prospecting and more time closing deals that matter.
                  </p>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
                   Whether you are a solo consultant or a growing agency, when you buy exclusive SEO leads from SEOSubmitWeb you get a pipeline built on real demand — not recycled hope.
                  </p>
                </div>
                <div>
                  <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy, marginBottom: '16px', lineHeight: 1.3 }}>
                    Scale Faster With SEOSubmitWeb
                  </h2>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                    We have been generating premium SEO leads since 2009, and every year we get better at identifying the prospects most likely to convert into long-term clients for your business.
                  </p>
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '12px' }}>
                  Buy exclusive SEO leads from SEOSubmitWeb and experience the difference genuine exclusivity makes — one lead, one buyer, zero competition.
                  </p> 
                </div>
              </div>
            </SectionWrapper>

      {/* [H] BOTTOM CTA */}
      <section style={{ background: C.yellow, padding: '40px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.navy, marginBottom: '8px' }}>
          Ready to Buy Exclusive SEO Leads?
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '13px', color: '#333', marginBottom: '20px' }}>
          Claim your territory and start receiving verified SEO inquiries within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/contact')} style={{ background: C.navy, color: C.white, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
            GET FREE LEADS →
          </button>
          <button onClick={() => navigate('/contact')} style={{ background: 'transparent', color: C.navy, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 28px', border: `2px solid ${C.navy}`, cursor: 'pointer', borderRadius: 0 }}>
            DISCUSS INTEGRATION
          </button>

        </div>
      </section>
    </div>
  );
};

export default SeoLeadsPage;
