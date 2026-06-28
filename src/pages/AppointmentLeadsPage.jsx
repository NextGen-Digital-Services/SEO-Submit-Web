import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import AppointmentLeadsForm from '../forms/AppointmentLeadsForm';
import AppointmentImg from '../assets/All Images/AppointmentsLeads_result.webp';
import soloman from '../assets/home/Soloman.webp';

export const AppointmentLeadsPage = ({ isMobile, onViewPricing }) => {
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

          <img
            src={AppointmentImg}
            alt="Appointment Leads"
            width="1200"
            height="676"
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
              APPOINTMENT FIXED LEADS
            </div>
            <h1 style={{
              fontFamily: F.display,
              fontWeight: 900,
              fontSize: isMobile ? '28px' : '38px',
              color: C.white,
              lineHeight: 1.15,
              marginBottom: '14px',
            }}>
              Qualified Appointments <span style={{ color: C.yellow }}>Scheduled Directly</span> With Decision-Makers
            </h1>
            <p style={{
              fontFamily: F.body,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.7,
              marginBottom: '24px',
              maxWidth: '540px',
            }}>
              No cold dialing. We source, contact, qualify, and book direct video consultation dates on your sales calendar.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 24px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
                GET BOOKED CALLS
              </button>
              <button onClick={() => onViewPricing && onViewPricing('Appointment Leads')} style={{ background: 'transparent', color: C.yellow, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 24px', border: `2px solid ${C.yellow}`, cursor: 'pointer', borderRadius: 0 }}>
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
          position: 'relative',
          overflow: 'hidden',
          minHeight: '280px',
        }}>
          {/* Background Image */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <img
              src="/assets/seo-analytics-leads.png"
              alt="Handshake meeting appt"
              width="1672"
              height="941"
              loading="eager"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.15 }}
            />
          </div>

          <div style={{ position: 'relative', zIndex: 2, padding: '24px' }}>
            {[
              { val: '4,500+', lbl: 'Meetings Booked' },
              { val: '82%', lbl: 'Show-Up Rate' },
              { val: '3x', lbl: 'Conversion Increase' },
              { val: '24/7', lbl: 'Calendar Sync' },
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center', borderBottom: idx !== 3 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingBottom: '12px', marginBottom: idx !== 3 ? '12px' : 0 }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white }}>{item.val}</span>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '9px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [B] WHAT IS APPOINTMENT FIXED LEAD */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="HOW IT WORKS" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          What is an Appointment Fixed Lead?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '32px' }}>
          <div>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
              Instead of receiving basic contact details, our SDR team calls the prospects directly. We confirm their interest, ensure budget compatibility, and secure a meeting date on your calendar.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
              {[
                'Verified slot directly booked on Google Calendar or Outlook.',
                'Prospect attendance confirmed via text and email notifications.',
                'Full notes on client requirements and budgets attached.',
                'CMO, CEO, or business owner present on the meeting.',
              ].map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: C.navy, fontFamily: F.body }}>
                  <i className="ti ti-circle-check" style={{ color: C.blue, fontSize: '16px', marginTop: '2px' }} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Timeline Booking Process */}
          <div style={{ background: C.lightBg, border: `1px solid #dde3f0`, borderRadius: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <img src="/assets/seo-analytics-leads.png" alt="Appointment booking and lead qualification dashboard" width="1672" height="941" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.navy, marginBottom: '14px', textTransform: 'uppercase' }}>
                Booking Flow
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { num: '1', title: 'Verification Call', desc: 'Our team dials prospects to confirm budget size.' },
                  { num: '2', title: 'Meeting Scheduled', desc: 'We coordinate dates and schedule the meeting.' },
                  { num: '3', title: 'Calendar Sync', desc: 'Calendar invitation automatically pushes to your representatives.' },
                  { num: '4', title: 'Close The Deal', desc: 'You run the pitch call and sign the contract.' },
                ].map((step) => (
                  <div key={step.num} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', background: C.blue, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '10px' }}>
                      {step.num}
                    </div>
                    <div>
                      <h5 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '12px', color: C.navy }}>{step.title}</h5>
                      <p style={{ fontFamily: F.body, fontSize: '10px', color: '#666' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* [C] BENEFITS */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          Key Benefits of Appointment Leads
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { title: 'No Cold Calling', desc: 'Stop dialing cold leads. Pitch only clients scheduled to speak with you.' },
            { title: 'Pre-Qualified Prospects', desc: 'Every contact is verified to ensure they have real budget capabilities.' },
            { title: 'Confirmed Meeting Time', desc: 'Meetings route straight onto your calendar software.' },
            { title: 'Decision Maker Present', desc: 'Saves time by pitching CEO, Founder, or CMO direct.' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: C.white, padding: '20px', textAlign: 'left', borderRadius: 0 }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.navy, marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* [D] INDUSTRIES */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="TARGET SECTORS" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          We Sync Appointments For Multiple Sectors
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { title: 'Real Estate Leads', desc: 'Brokerages looking to acquire property inventory listings.' },
            { title: 'SaaS Platforms', desc: 'Software companies targeting enterprise-level sales.' },
            { title: 'Digital Agencies', desc: 'SEO and design agencies scaling retainer contracts.' },
            { title: 'Healthcare Solutions', desc: 'Medical offices planning digital scheduling builds.' },
            { title: 'Logistics Companies', desc: 'Freight providers seeking contract shippers.' },
            { title: 'Legal Counsel', desc: 'Attorneys sourcing commercial contract consulting.' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: C.white, border: '1px solid #dde3f0', padding: '20px' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.blue, marginBottom: '6px' }}>{item.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [E] PRICING */}
      <SectionWrapper bg={C.navy} id="appt-pricing">
        <Eyebrow label="PRICING PLANS" labelColor={C.yellow} />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          Appointment Packages
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '24px' : 0 }}>
          {[
            { name: 'Starter Appt', price: '499', period: '10 Calls/mo', features: ['10 Booked Meetings', 'Calendar Sync', 'Budget Validation', 'Email Support'] },
            { name: 'Professional Appt', price: '999', period: '25 Calls/mo', features: ['25 Booked Meetings', 'Calendar Sync', 'Budget Validation', 'Dedicated Account Manager', 'Priority Support'], featured: true },
            { name: 'Enterprise Appt', price: '1899', period: '60 Calls/mo', features: ['60 Booked Meetings', 'Calendar Sync', 'Budget Validation', 'Custom Targeting', '24/7 Phone Support'] },
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

      {/* [F] COMPARISON TABLE */}
      <section style={{ background: C.yellow, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
            Lead Sourcing Comparison
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: C.white, color: C.navy, minWidth: '600px' }}>
              <thead>
                <tr style={{ background: C.navy, color: C.white }}>
                  <th style={{ padding: '16px', fontFamily: F.display, fontWeight: 800, fontSize: '13px' }}>Feature</th>
                  <th style={{ padding: '16px', fontFamily: F.display, fontWeight: 800, fontSize: '13px' }}>Cold Email List</th>
                  <th style={{ padding: '16px', fontFamily: F.display, fontWeight: 800, fontSize: '13px' }}>Shared Leads</th>
                  <th style={{ padding: '16px', fontFamily: F.display, fontWeight: 800, fontSize: '13px', background: C.blue, color: C.white }}>SEO Submit Web Appointments</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #dde3f0' }}>
                  <td style={{ padding: '14px', fontWeight: 'bold', fontSize: '12px' }}>Exclusivity</td>
                  <td style={{ padding: '14px', fontSize: '12px' }}>Non-exclusive database</td>
                  <td style={{ padding: '14px', fontSize: '12px' }}>Sold to 5+ vendors</td>
                  <td style={{ padding: '14px', fontSize: '12px', fontWeight: 'bold', color: C.blue }}>100% Exclusive</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dde3f0', background: C.lightBg }}>
                  <td style={{ padding: '14px', fontWeight: 'bold', fontSize: '12px' }}>SDR Qualification</td>
                  <td style={{ padding: '14px', fontSize: '12px' }}>None</td>
                  <td style={{ padding: '14px', fontSize: '12px' }}>Basic form data</td>
                  <td style={{ padding: '14px', fontSize: '12px', fontWeight: 'bold', color: C.blue }}>Full Phone Verification</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dde3f0' }}>
                  <td style={{ padding: '14px', fontWeight: 'bold', fontSize: '12px' }}>Sales Meeting Set</td>
                  <td style={{ padding: '14px', fontSize: '12px' }}>No</td>
                  <td style={{ padding: '14px', fontSize: '12px' }}>No</td>
                  <td style={{ padding: '14px', fontSize: '12px', fontWeight: 'bold', color: C.blue }}>Direct Calendar Booking</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dde3f0', background: C.lightBg }}>
                  <td style={{ padding: '14px', fontWeight: 'bold', fontSize: '12px' }}>Response Rate</td>
                  <td style={{ padding: '14px', fontSize: '12px' }}>&lt; 2% response</td>
                  <td style={{ padding: '14px', fontSize: '12px' }}>&lt; 15% contact rate</td>
                  <td style={{ padding: '14px', fontSize: '12px', fontWeight: 'bold', color: C.blue }}>82% Show-Up Rate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* [G] FAQ */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="FAQ" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Frequently Asked Questions About Appointments
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            { q: 'How are meetings scheduled?', a: 'We sync with your calendar and verify appointment slots directly.' },
            { q: 'What happens if a prospect does not show up?', a: 'If a show-up does not occur, the appointment is rescheduled or replaced.' },
            { q: 'Are budgets verified?', a: 'Yes. We confirm funding capabilities during our qualification call.' },
            { q: 'Can we define criteria filters?', a: 'Yes, filters are fully configured during setup.' },
            { q: 'Which calendars can be synced?', a: 'We support calendar integrations with Google Workspace, Microsoft Outlook, and Calendly.' },
            { q: 'Is there a setup delay?', a: 'Campaigns typically launch within 5 business days.' },
            { q: 'Do you provide call logs?', a: 'Yes, call transcripts and recordings are provided.' },
            { q: 'Can we adjust monthly volumes?', a: 'Yes, you can upgrade or scale your package monthly.' },
          ].map((faq, idx) => (
            <div key={idx} style={{ padding: '16px', borderLeft: `3px solid ${C.yellow}`, background: C.lightBg, textAlign: 'left' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.navy, marginBottom: '6px' }}>{faq.q}</h4>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [H] TESTIMONIALS */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.white, marginBottom: '28px' }}>
          Client Success Stories
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { name: 'Sarah Jenkins', comp: 'PixelForge Studio', img: soloman, txt: 'Appointment leads saved us. Stop cold outreach and book direct meetings.' },
            { name: 'Kevin Anderson', comp: 'AppBoost Digital', img: soloman, txt: 'Meetings closed 3x faster than traditional forms. Essential for agencies.' },
            { name: 'Nicole Anderson', comp: 'BrandRise Agency', img: soloman, txt: 'Synced calls keep our sales reps busy. Excellent team coordination.' },
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

      {/* [H] APPOINTMENT LEADS ENQUIRY FORM */}
      <section style={{ background: C.navy, padding: '48px 24px', borderTop: `3px solid ${C.blue}` }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.yellow, marginBottom: '24px' }}>
            Book Your Appointment Leads — Fill The Form
          </h2>
          <AppointmentLeadsForm />
        </div>
      </section>

      {/* [I] BOTTOM CTA */}
      <section style={{ background: C.navy, padding: '40px 24px', textAlign: 'center', borderTop: `1px solid ${C.blue}` }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white, marginBottom: '8px' }}>
          Pre-Book Your Client Calls Today
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
          Partner with SEO Submit Web and scale your pipeline with direct bookings on your calendar.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
            GET STARTED →
          </button>

        </div>
      </section>
    </div>
  );
};

export default AppointmentLeadsPage;
