import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import AppointmentLeadsForm from '../forms/AppointmentLeadsForm';
import AppointmentImg from '../assets/All Images/AppointmentsLeads_result.webp';
import soloman from '../assets/home/Soloman.webp';
import useScrollReveal from '../hooks/useScrollReveal';
import Counter from '../components/Counter';

export const AppointmentLeadsPage = ({ isMobile, onViewPricing }) => {
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
              PREMIUM APPOINTMENT LEADS USA
            </div>
            <h1 style={{
              fontFamily: F.display,
              fontWeight: 900,
              fontSize: isMobile ? '28px' : '38px',
              color: C.white,
              lineHeight: 1.15,
              marginBottom: '14px',
            }}>
              Qualified Appointment Leads That Help You <span style={{ color: C.yellow }}>Close More Deals</span>
            </h1>
            <p style={{
              fontFamily: F.body,
              fontSize: '13.5px',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.7,
              marginBottom: '12px',
              maxWidth: '540px',
            }}>
              Stop wasting time chasing prospects. We help businesses <strong>buy appointment leads in USA</strong> that are already qualified and interested in your services. Our experienced SDR team contacts prospects, verifies their requirements, and schedules appointments directly on your calendar.
            </p>
            <p style={{
              fontFamily: F.body,
              fontSize: '13.5px',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.7,
              marginBottom: '24px',
              maxWidth: '540px',
            }}>
              Whether you're looking to <strong>buy SEO leads in USA</strong>, <strong>buy website design leads in USA</strong>, or generate qualified B2B appointments, we deliver sales-ready opportunities that help your business grow faster.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 24px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
                Get Qualified Leads
              </button>
              <button onClick={() => onViewPricing && onViewPricing('Appointment Leads')} style={{ background: 'transparent', color: C.yellow, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 24px', border: `2px solid ${C.yellow}`, cursor: 'pointer', borderRadius: 0 }}>
                View Pricing
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
              <div key={idx} className="reveal" style={{ textAlign: 'center', borderBottom: idx !== 3 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingBottom: '12px', marginBottom: idx !== 3 ? '12px' : 0 }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white }}><Counter value={item.val} /></span>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '9px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [B] WHAT ARE APPOINTMENT LEADS? */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="HOW IT WORKS" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          What Are Appointment Leads?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '32px' }}>
          <div>
            <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#444', lineHeight: 1.7, marginBottom: '14px' }}>
              Appointment leads are pre-qualified prospects who have shown genuine interest in your services and agreed to schedule a meeting with your sales team.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#444', lineHeight: 1.7, marginBottom: '14px' }}>
              Unlike ordinary lead lists, our team personally contacts every prospect, verifies their requirements, and books appointments with decision-makers, resulting in higher conversion rates and better ROI.
            </p>
            <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
              If your business wants to <strong>buy SEO leads in USA</strong>, <strong>buy website design leads in USA</strong>, or expand into new markets, appointment setting is one of the fastest ways to increase sales.
            </p>
          </div>

          {/* Right Timeline Booking Process */}
          <div style={{ background: C.lightBg, border: `1px solid #dde3f0`, borderRadius: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <img src="https://res.cloudinary.com/dpeq00iqq/image/upload/v1782632233/appointment1_result_b89afx.webp" alt="Appointment booking and lead qualification dashboard" width="1672" height="941" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.navy, marginBottom: '14px', textTransform: 'uppercase' }}>
                Our Appointment Booking Process
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { num: '1', title: 'Target Audience Research', desc: 'We identify your ideal customers based on industry, company size, and location.' },
                  { num: '2', title: 'Prospect Outreach', desc: 'Our SDR team contacts qualified prospects through email, LinkedIn, and cold calling.' },
                  { num: '3', title: 'Lead Qualification', desc: 'We verify budget, interest, authority, and service requirements.' },
                  { num: '4', title: 'Appointment Scheduling', desc: 'Once qualified, meetings are booked directly into your calendar.' },
                  { num: '5', title: 'Sales Ready Opportunities', desc: 'You simply attend the meeting and focus on closing the deal.' },
                ].map((step) => (
                  <div key={step.num} className="reveal" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', background: C.blue, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '10px', flexShrink: 0 }}>
                      {step.num}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '12px', color: C.navy }}>{step.title}</h4>
                      <p style={{ fontFamily: F.body, fontSize: '11px', color: '#666', lineHeight: 1.4 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* [C] WHY CHOOSE OUR APPOINTMENT LEADS? */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          Why Choose Our Appointment Leads?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { title: 'Qualified Decision Makers', desc: 'Every meeting is scheduled with genuine business owners or decision-makers.' },
            { title: 'Exclusive Appointments', desc: 'No recycled databases. We deliver exclusive appointments for your business.' },
            { title: 'Better Conversion Rates', desc: 'Since every lead is verified before booking, your closing ratio improves significantly.' },
            { title: 'USA-Focused Campaigns', desc: 'We specialize in generating appointment leads across the United States for agencies, software companies, web design firms, and SEO providers.' },
            { title: 'Customized Lead Generation', desc: 'Whether you need SEO Leads, Website Design Leads, or industry-specific appointments, campaigns are customized according to your business goals.' },
          ].map((item, idx) => (
            <div key={idx} className="reveal" style={{ background: C.white, padding: '20px', textAlign: 'left', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* [D] INDUSTRIES WE SERVE */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="TARGET SECTORS" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '16px' }}>
          Industries We Serve
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', marginBottom: '24px' }}>
          We generate appointment leads for businesses offering:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
          {[
            'SEO Services',
            'Website Design Services',
            'Digital Marketing',
            'PPC Services',
            'Software Development',
            'IT Services',
            'SaaS Companies',
            'Local Business Marketing',
          ].map((item, idx) => (
            <div key={idx} className="reveal" style={{ background: C.white, border: '1px solid #dde3f0', padding: '16px', display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '4px' }}>
              <i className="ti ti-check" style={{ color: C.blue, fontSize: '16px', fontWeight: 'bold' }} />
              <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: '13px', color: C.navy }}>{item}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#555', lineHeight: 1.6, fontStyle: 'italic' }}>
          Our lead generation campaigns are designed for businesses looking to <strong>buy SEO leads in USA</strong> and <strong>buy website design leads in USA</strong> with high buying intent.
        </p>
      </SectionWrapper>

      {/* [E] PRICING */}
      <SectionWrapper bg={C.navy} id="appt-pricing">
        <Eyebrow label="PRICING PLANS" labelColor={C.yellow} />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
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

      {/* [F] LEAD SOURCING COMPARISON TABLE */}
      <section style={{ background: C.yellow, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
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

      {/* [F2] BUY SEO & WEBSITE DESIGN LEADS & TRUST FACTORS */}
      <section style={{ background: C.lightBg, padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: C.white, padding: '24px', borderRadius: '4px', borderLeft: `4px solid ${C.navy}`, border: '1px solid #dde3f0' }}>
              <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '20px', color: C.navy, marginBottom: '12px' }}>
                Buy SEO Leads in USA
              </h2>
              <p style={{ fontFamily: F.body, fontSize: '13.5px', color: C.navy, fontWeight: 700, marginBottom: '8px' }}>
                Looking to scale your SEO agency?
              </p>
              <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6 }}>
                Our qualified Buy SEO Leads in USA service connects you with businesses actively searching for SEO services. Instead of spending months on marketing, receive exclusive appointments with companies ready to discuss SEO solutions.
              </p>
            </div>

            <div style={{ background: C.white, padding: '24px', borderRadius: '4px', borderLeft: `4px solid ${C.blue}`, border: '1px solid #dde3f0' }}>
              <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '20px', color: C.navy, marginBottom: '12px' }}>
                Buy Website Design Leads in USA
              </h2>
              <p style={{ fontFamily: F.body, fontSize: '13.5px', color: C.navy, fontWeight: 700, marginBottom: '8px' }}>
                Need more website projects?
              </p>
              <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6, marginBottom: '8px' }}>
                Our Buy Website Design Leads in USA campaigns help web design agencies connect with business owners looking to redesign existing websites or build new ones.
              </p>
              <p style={{ fontFamily: F.body, fontSize: '12.5px', color: C.blue, fontWeight: 600 }}>
                Every lead is qualified before scheduling the appointment.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
              Why Businesses Trust SEO Submit Web
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '14px' }}>
              {[
                '✔ Qualified USA Prospects',
                '✔ Higher Appointment Show Rate',
                '✔ Experienced SDR Team',
                '✔ Exclusive Leads',
                '✔ No Shared Databases',
                '✔ Faster Business Growth',
                '✔ Dedicated Campaign Manager',
                '✔ Transparent Reporting',
              ].map((item, idx) => (
                <div key={idx} className="reveal" style={{ background: C.navy, color: C.white, padding: '16px', borderRadius: '4px', textAlign: 'center' }}>
                  <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.yellow }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* [G] FAQ */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="FAQ" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            {
              q: 'Do you provide exclusive appointment leads?',
              a: "Yes. Every appointment is booked specifically for your business and isn't shared with competitors."
            },
            {
              q: 'Can I buy SEO leads in USA?',
              a: 'Absolutely. We provide verified SEO leads and qualified appointments for agencies targeting businesses across the United States.'
            },
            {
              q: 'Do you offer website design leads?',
              a: 'Yes. We generate qualified website design leads in USA for agencies, freelancers, and web development companies.'
            },
            {
              q: 'What industries do you serve?',
              a: 'We work with SEO agencies, web design companies, software firms, digital marketing agencies, IT service providers, and many other B2B businesses.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="reveal" style={{ padding: '20px', borderLeft: `4px solid ${C.yellow}`, background: C.lightBg, textAlign: 'left', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '8px' }}>{faq.q}</h3>
              <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [H] TESTIMONIALS */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h3 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.white, marginBottom: '28px' }}>
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
