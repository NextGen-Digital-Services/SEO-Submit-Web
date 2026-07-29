import React, { useState } from 'react';
import team1Img from '../assets/Team/1.webp';
import team2Img from '../assets/Team/2.webp';
import team3Img from '../assets/Team/3.webp';
import team4Img from '../assets/Team/4.webp';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import useScrollReveal from '../hooks/useScrollReveal';
import Counter from '../components/Counter';

export const AboutPage = ({ isMobile }) => {
  const navigate = useNavigate();
  useScrollReveal();

  // Team cards ke hover status ko track karne ke liye state
  const [hoveredTeamIdx, setHoveredTeamIdx] = useState(null);
  // Award cards ke hover status ko track karne ke liye state
  const [hoveredAwardIdx, setHoveredAwardIdx] = useState(null);

  return (
    <div style={{ width: '100%' }}>
      {/* CSS Animations directly injected within the file */}
      <style>{`
        @keyframes pageHeroFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-content {
          animation: pageHeroFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .smooth-transition {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
      `}</style>

      {/* [SECTION A] ABOUT HERO */}
      <section style={{
        background: C.navy,
        minHeight: '400px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Background Image with opacity */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}>
          <img
            src="/assets/lead-generation-hero.png"
            alt="SEO Submit Web Office Background"
            width="1672"
            height="941"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.15 }}
          />
        </div>

        {/* Content */}
        <div className="animate-hero-content" style={{ position: 'relative', zIndex: 2, padding: '80px 48px', textAlign: 'center', maxWidth: '900px' }}>
          <div style={{
            background: C.yellow,
            color: C.navy,
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: '9px',
            letterSpacing: '2px',
            padding: '6px 14px',
            display: 'inline-block',
            marginBottom: '16px',
            borderRadius: 0,
          }}>
            ABOUT SEO SUBMIT WEB
          </div>
          <h1 style={{
            fontFamily: F.display,
            fontWeight: 900,
            fontSize: isMobile ? '28px' : '38px',
            color: C.white,
            lineHeight: 1.2,
            marginBottom: '16px',
          }}>
            About SEO Submit Web – <span style={{ color: C.yellow }}>Buy SEO Leads in USA</span> from a Trusted Lead Generation Company
          </h1>
          <p style={{
            fontFamily: F.body,
            fontSize: '15px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
            marginBottom: '28px',
          }}>
            For over 16 years, SEO Submit Web has helped agencies grow faster by delivering exclusive, verified, and high-converting SEO leads. If you're looking to buy SEO leads in USA, we provide real business owners actively searching for SEO services. Our mission is simple—help digital marketing agencies close more deals with premium, exclusive leads.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/seo-leads')}
              style={{
                background: C.yellow,
                color: C.navy,
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
              Buy SEO Leads
            </button>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: 'transparent',
                color: C.white,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '12px 28px',
                border: `2px solid ${C.white}`,
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* [SECTION B] WELCOME SECTION WITH IMAGE */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, width: '100%' }}>
        <div style={{ padding: isMobile ? '32px 16px' : '56px 40px', background: C.white, textAlign: 'left' }}>
          <Eyebrow label="WELCOME SECTION" />
          <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '16px' }}>
            Welcome to SEO Submit Web
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.8, marginBottom: '14px' }}>
            At SEO Submit Web, we specialize in helping agencies scale with premium SEO leads for digital marketing agencies in USA. Every lead is generated using ethical marketing strategies and verified before delivery.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.8, marginBottom: '14px' }}>
            Unlike shared lead providers, our focus is on delivering exclusive opportunities that help agencies increase conversions while reducing acquisition costs. Whether you're a startup agency or an established SEO company, our lead generation solutions are designed to support long-term business growth.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.8, marginBottom: '24px' }}>
            If you're planning to buy SEO leads in USA, you deserve leads that are fresh, exclusive, and ready to convert—not recycled databases or outdated contacts.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('about-team');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: C.yellow,
              color: C.navy,
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '14px 28px',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 0,
              transition: 'background 0.3s ease',
            }}
          >
            MEET OUR TEAM →
          </button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dpeq00iqq/image/upload/v1782553402/about1_result_ligj1b.webp"
            alt="SEO Submit Web Office"
            width="1672"
            height="941"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* [SECTION C] MISSION VISION VALUES */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="WHO WE ARE" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          Our Mission, Vision & <span style={{ color: C.blue }}>Core Values</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
          {/* Card 1 */}
          <div style={{ background: C.white, borderTop: `4px solid ${C.yellow}`, padding: '24px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '40px', height: '40px', background: C.yellow, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', fontSize: '20px' }}>
              <i className="ti ti-target" />
            </div>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '8px' }}>Our Mission</h3>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.7 }}>
              To become the most trusted provider of SEO leads for digital marketing agencies in USA by delivering verified, exclusive, and conversion-focused leads.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ background: C.white, borderTop: `4px solid ${C.blue}`, padding: '24px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '40px', height: '40px', background: C.blue, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', fontSize: '20px' }}>
              <i className="ti ti-eye" />
            </div>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '8px' }}>Our Vision</h3>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.7 }}>
              To help thousands of SEO agencies across the United States build predictable growth through premium lead generation.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{ background: C.white, borderTop: `4px solid ${C.navy}`, padding: '24px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '40px', height: '40px', background: C.navy, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', fontSize: '20px' }}>
              <i className="ti ti-heart" />
            </div>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '8px' }}>Our Core Values</h3>
            <div style={{ fontFamily: F.body, fontSize: '13px', color: '#555', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span>• 100% Exclusive Leads</span>
              <span>• Quality Before Quantity</span>
              <span>• Honest & Transparent Service</span>
              <span>• Customer Success First</span>
              <span>• Long-Term Partnerships</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* [SECTION D] STATISTICS SECTION */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.white, marginBottom: '28px' }}>
            15 Years of Proven Results
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { val: '15+', lbl: 'Years Experience', color: C.yellow },
              { val: '5,000+', lbl: 'Happy Clients', color: C.yellow },
              { val: '50,000+', lbl: 'Leads Delivered', color: C.yellow },
              { val: '40+', lbl: 'Industries Served', color: C.yellow },
              { val: '98%', lbl: 'Client Satisfaction', color: C.white },
              { val: '$2M+', lbl: 'Revenue Generated for Clients', color: C.white },
              { val: '24/7', lbl: 'Customer Support', color: C.white },
              { val: '3-Step', lbl: 'Lead Verification Process', color: C.white },
            ].map((stat, idx) => (
              <div key={idx} className="reveal" style={{ background: C.navy, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: stat.color, marginBottom: '4px' }}><Counter value={stat.val} /></span>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION E] TIMELINE SECTION */}
      <SectionWrapper bg={C.yellow}>
        <Eyebrow label="OUR JOURNEY" labelColor={C.navy} />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          15 Years of Growth & Innovation
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          {[
            { year: '2009', desc: 'Started offering professional SEO lead generation.' },
            { year: '2012', desc: 'Expanded services across major USA markets.' },
            { year: '2015', desc: 'Introduced exclusive lead verification.' },
            { year: '2018', desc: 'Crossed 10,000 verified SEO leads delivered.' },
            { year: '2020', desc: 'Added appointment-set leads.' },
            { year: '2022', desc: 'Served agencies in multiple industries.' },
            { year: '2024', desc: 'Helped hundreds of agencies scale successfully.' },
            { year: 'Today', desc: 'One of the trusted providers to buy SEO leads in USA.' },
          ].map((evt, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'center', background: C.white, padding: '16px', borderLeft: `4px solid ${C.blue}`, borderRadius: '4px' }}>
              <div style={{ background: C.blue, color: C.white, fontFamily: F.display, fontWeight: 900, fontSize: '11px', padding: '6px 14px', letterSpacing: '1px', borderRadius: '2px', flexShrink: 0 }}>{evt.year}</div>
              <div>
                <p style={{ fontFamily: F.body, fontSize: '13px', color: C.navy, fontWeight: 600, margin: 0 }}>{evt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [SECTION F] TEAM SECTION WITH PHOTOS */}
      <section id="about-team" style={{ background: C.white, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Eyebrow label="THE PEOPLE" />
          <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '12px' }}>
            Meet the Team Behind Your Success
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto 28px' }}>
            Our experienced lead generation specialists, researchers, and campaign managers work together to generate high-quality SEO leads for digital marketing agencies in USA. Every lead passes through a strict quality assurance process before being delivered to clients, ensuring maximum accuracy and better conversion opportunities.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { name: 'Imran Merchant', role: 'CEO & Founder', dep: 'Executive', border: C.yellow, img: team1Img, bio: '15+ years in lead gen strategies. Directs core platform technology.' },
              { name: 'Logan Anderson', role: 'Head of Lead Gen', dep: 'Operations', border: C.blue, img: team2Img, bio: 'Manages quality control guidelines and qualification agents.' },
              { name: 'Amanda Wilson', role: 'Client Success Director', dep: 'Technology', border: C.navy, img: team3Img, bio: 'Optimizes target scopes and coordinates replacement pipelines.' },
              { name: 'Vihan Sharma', role: 'Chief Tech Officer', dep: 'Support', border: C.yellow, img: team4Img, bio: 'Designs integration scripts, automated filters, and API webhooks.' },
            ].map((member, idx) => (
              <div 
                key={idx} 
                className="reveal smooth-transition" 
                onMouseEnter={() => setHoveredTeamIdx(idx)}
                onMouseLeave={() => setHoveredTeamIdx(null)}
                style={{ 
                  background: C.white, 
                  border: '1px solid #dde3f0', 
                  borderTop: `4px solid ${member.border}`, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  textAlign: 'center',
                  cursor: 'pointer',
                  // Inline Card Hover Logic
                  transform: hoveredTeamIdx === idx ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredTeamIdx === idx ? '0 12px 24px rgba(0,0,0,0.12)' : 'none',
                }}
              >
                <div style={{ overflow: 'hidden', width: '100%', height: '260px' }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    width="400"
                    height="300"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                      border: '3px solid #FFD600',
                      transition: 'transform 0.4s ease',
                      // Inner image scale hover logic
                      transform: hoveredTeamIdx === idx ? 'scale(1.04)' : 'scale(1)'
                    }}
                  />
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '15px', color: C.navy, marginBottom: '4px' }}>{member.name}</h4>
                  <span style={{ fontSize: '12px', color: member.border === C.yellow ? C.blue : member.border, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>{member.role}</span>
                  <span style={{ alignSelf: 'center', background: C.lightBg, color: C.navy, fontSize: '9px', fontWeight: 'bold', padding: '3px 8px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    {member.dep}
                  </span>
                  <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION G] TEAM CONTENT SECTION */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, width: '100%', background: C.lightBg }}>
        <div>
          <img
            src="https://res.cloudinary.com/dpeq00iqq/image/upload/v1782553400/about2_result_rzyidl.webp"
            alt="SEO Submit Web Culture"
            width="1672"
            height="941"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: isMobile ? '32px 16px' : '48px 40px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Eyebrow label="OUR CULTURE" />
          <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '16px' }}>
            A Team That Lives & Breathes Lead Generation
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#444', lineHeight: 1.7, marginBottom: '12px' }}>
            Behind every successful campaign is a dedicated team committed to delivering measurable results.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#444', lineHeight: 1.7, marginBottom: '12px' }}>
            We combine SEO expertise, paid advertising, outreach campaigns, and data verification to generate qualified business leads across the United States. When agencies buy SEO leads in USA from SEO Submit Web, they receive leads that are exclusive, verified, and ready for immediate follow-up.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '13.5px', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
            Our goal isn't simply to deliver contacts—we deliver sales opportunities that help agencies grow consistently.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: 'ti-users', title: '50+ SDR Specialists' },
              { icon: 'ti-building', title: '2 HQ Offices' },
              { icon: 'ti-globe', title: '40+ Countries Served' },
              { icon: 'ti-trophy', title: 'Multiple Industry Awards' },
            ].map((p, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontFamily: F.display, color: C.navy, fontWeight: 'bold' }}>
                <i className={`ti ${p.icon}`} style={{ color: C.blue, fontSize: '18px' }} />
                <span>{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION H] WHY AGENCIES TRUST US */}
      <SectionWrapper bg={C.navy}>
        <Eyebrow label="WHY AGENCIES TRUST US" labelColor={C.yellow} />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          Why Agencies Trust SEO Submit Web
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            '✔ 100% Exclusive Leads',
            '✔ Manual Lead Verification',
            '✔ Real-Time Delivery',
            '✔ USA Business Leads',
            '✔ Dedicated Account Manager',
            '✔ Fast Lead Replacement',
            '✔ Transparent Process',
            '✔ Reliable Customer Support',
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="smooth-transition"
              onMouseEnter={() => setHoveredAwardIdx(idx)}
              onMouseLeave={() => setHoveredAwardIdx(null)}
              style={{ 
                background: C.yellow, 
                color: C.navy, 
                padding: '20px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '4px',
                transform: hoveredAwardIdx === idx ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredAwardIdx === idx ? '0 10px 20px rgba(255,214,0,0.15)' : 'none',
              }}
            >
              <i className="ti ti-shield-check" style={{ fontSize: '28px', color: C.navy, marginBottom: '10px' }} />
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', lineHeight: 1.4, margin: 0 }}>{item}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [SECTION K] ABOUT PAGE CTA */}
      <section style={{ background: C.yellow, padding: '48px 24px', textAlign: 'center' }}>
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '8px' }}>
          Ready to Buy SEO Leads in USA?
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: '#333', marginBottom: '24px', maxWidth: '700px', margin: '0 auto 24px' }}>
          Grow your agency with verified SEO leads for digital marketing agencies in USA. Start receiving exclusive leads that help you book more meetings, win more clients, and increase revenue.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/seo-leads')} style={{ background: C.blue, color: C.white, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
            Buy SEO Leads Now
          </button>
          <button onClick={() => navigate('/contact')} style={{ background: 'transparent', color: C.navy, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 28px', border: `2px solid ${C.navy}`, cursor: 'pointer', borderRadius: 0 }}>
            Request Free Sample
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;