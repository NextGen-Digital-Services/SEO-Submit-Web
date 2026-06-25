import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';

export const AboutPage = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%' }}>
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
        <div style={{ position: 'relative', zIndex: 2, padding: '80px 48px', textAlign: 'center', maxWidth: '800px' }}>
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
            OUR STORY
          </div>
          <h1 style={{
            fontFamily: F.display,
            fontWeight: 900,
            fontSize: isMobile ? '32px' : '44px',
            color: C.white,
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            The Team Behind <span style={{ color: C.yellow }}>High-Quality SEO & Web Design Leads</span>
          </h1>
          <p style={{
            fontFamily: F.body,
            fontSize: '16px',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.8,
            marginBottom: '28px',
          }}>
            Founded in 2009, SEO Submit Web has been at the forefront of exclusive lead generation for over 16 years, helping thousands of agencies grow their client base with verified, real-time leads.
          </p>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {["Est. 2009", "5,000+ Clients", "40+ Countries"].map((pill) => (
              <span key={pill} style={{
                background: C.yellow,
                color: C.navy,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '11px',
                padding: '8px 20px',
                borderRadius: 0,
              }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION B] OUR STORY WITH IMAGE */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, width: '100%' }}>
        <div style={{ padding: isMobile ? '32px 16px' : '56px 40px', background: C.white, textAlign: 'left' }}>
          <Eyebrow label="HOW WE STARTED" />
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '16px' }}>
            Welcome to SEOSubmitWeb <span style={{ color: C.blue }}>where exclusive leads meet real results.</span>
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.9, marginBottom: '12px' }}>
            Founded in 2009, SEOSubmitWeb was built on a simple but powerful belief: businesses deserve better than recycled, shared leads that go cold before you even make the first call.
            For nearly a decade, we have been in the business of connecting agencies, consultants, and service providers with prospects who are actively searching for SEO services, web design solutions, and professional appointments — not just browsing.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.9, marginBottom: '12px' }}>
            We started with a clear mission — to eliminate the frustration of chasing unqualified leads and replace it with a pipeline of high-intent prospects delivered exclusively to one client at a time.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.9, marginBottom: '24px' }}>
            Exclusivity is not a feature we offer — it is the foundation everything we do is built on.
            Every lead generated under the SEOSubmitWeb name is sourced, qualified, and delivered fresh to a single buyer — meaning when you receive a lead from us, no competitor is getting that same contact.
            Our portfolio spans three core lead categories exclusive.
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
            }}
          >
            MEET OUR TEAM →
          </button>
        </div>
        <div>
          <img
            src="/assets/seo-analytics-leads.png"
            alt="Startup Delhi Office"
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
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          Our Mission, Vision & <span style={{ color: C.blue }}>Core Values</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
          {/* Card 1 */}
          <div style={{ background: C.white, borderTop: `4px solid ${C.yellow}`, padding: '24px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '40px', height: '40px', background: C.yellow, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', fontSize: '20px' }}>
              <i className="ti ti-target" />
            </div>
            <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '8px' }}>Our Mission</h4>
            <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.7 }}>
              To empower digital agencies worldwide with the highest quality, real-time exclusive leads that convert into long-term clients. We exist to eliminate wasted prospecting time and replace it with guaranteed opportunities.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ background: C.white, borderTop: `4px solid ${C.blue}`, padding: '24px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '40px', height: '40px', background: C.blue, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', fontSize: '20px' }}>
              <i className="ti ti-eye" />
            </div>
            <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '8px' }}>Our Vision</h4>
            <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.7 }}>
              To become the global standard for exclusive lead generation — a world where every digital agency has instant access to verified, ready-to-convert prospects delivered in real time.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{ background: C.white, borderTop: `4px solid ${C.navy}`, padding: '24px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '40px', height: '40px', background: C.navy, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', fontSize: '20px' }}>
              <i className="ti ti-heart" />
            </div>
            <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '8px' }}>Our Values</h4>
            <div style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span>• Quality over quantity — always</span>
              <span>• 100% transparency in every lead</span>
              <span>• Client success is our success</span>
              <span>• Innovation in every campaign</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* [SECTION D] BY THE NUMBERS */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.white, marginBottom: '28px' }}>
            16 Years of <span style={{ color: C.yellow }}>Proven Results</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { val: '16+', lbl: 'Years in Business', color: C.yellow },
              { val: '5,000+', lbl: 'Happy Clients', color: C.yellow },
              { val: '50,000+', lbl: 'Leads Delivered', color: C.yellow },
              { val: '40+', lbl: 'Countries Served', color: C.yellow },
              { val: '98%', lbl: 'Client Retention', color: C.white },
              { val: '$2M+', lbl: 'Revenue for Clients', color: C.white },
              { val: '24/7', lbl: 'Support Available', color: C.white },
              { val: '3-Step', lbl: 'Quality Check', color: C.white },
            ].map((stat, idx) => (
              <div key={idx} style={{ background: C.navy, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: stat.color, marginBottom: '4px' }}>{stat.val}</span>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION E] TIMELINE */}
      <SectionWrapper bg={C.yellow}>
        <Eyebrow label="OUR JOURNEY" labelColor={C.navy} />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          16 Years of <span style={{ color: C.blue }}>Growth & Innovation</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          {[
            { year: '2009', title: 'SEO Submit Web Founded', desc: 'Started with SEO leads for 10 clients' },
            { year: '2011', title: 'Expanded to Web Design Leads', desc: 'Grew to 100+ active agency clients' },
            { year: '2013', title: 'Launched Appointment Fixed Leads', desc: 'Game changer for digital sales teams' },
            { year: '2015', title: 'Crossed 1,000 Active Clients', desc: 'Opened second corporate operations office' },
            { year: '2017', title: 'International Expansion', desc: 'Serving agencies across USA, UK, Australia & Canada' },
            { year: '2019', title: '10,000th Client Milestone', desc: 'Launched 24/7 client operations dashboard support' },
            { year: '2021', title: '50,000 Leads Delivered', desc: 'Awarded multiple industry recognition awards' },
            { year: '2023', title: '5,000+ Active Clients', desc: 'Expanded delivery pipeline to 40+ countries' },
            { year: '2025', title: 'New Tech Platform Launch', desc: 'AI-powered lead qualification and verification tools' },
          ].map((evt, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: C.white, padding: '16px', borderLeft: `4px solid ${C.blue}` }}>
              <div style={{ background: C.blue, color: C.white, fontFamily: F.display, fontWeight: 900, fontSize: '11px', padding: '6px 14px', letterSpacing: '1px' }}>{evt.year}</div>
              <div>
                <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.navy, marginBottom: '2px' }}>{evt.title}</h4>
                <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555' }}>{evt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [SECTION F] TEAM SECTION WITH PHOTOS */}
      <section id="about-team" style={{ background: C.white, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Eyebrow label="THE PEOPLE" />
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
            Meet the Team That <span style={{ color: C.blue }}>Powers Your Pipeline</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { name: 'Alexander Vance', role: 'CEO & Founder', dep: 'Executive', border: C.yellow, img: 'https://picsum.photos/seed/team1/400/300', bio: 'Former VP of Growth at Apex Digital with 18+ years of organic search and enterprise lead generation experience.' },
              { name: 'Sarah Chen', role: 'Head of SEO Strategy', dep: 'Operations', border: C.blue, img: 'https://picsum.photos/seed/team2/400/300', bio: 'Recognized search architect specializing B2B intent validation and organic lead acquisition.' },
              { name: 'Marcus Brody', role: 'Director of Web Architecture', dep: 'Technology', border: C.navy, img: 'https://picsum.photos/seed/team3/400/300', bio: 'Over a decade designing high-converting Landers and technical schemas for portals.' },
              { name: 'Emily Davis', role: 'Client Success Director', dep: 'Support', border: C.yellow, img: 'https://picsum.photos/seed/team4/400/300', bio: 'Coordinates directly with agency owners to optimize campaign setups.' },
            ].map((member, idx) => (
              <div key={idx} style={{ background: C.white, border: '1px solid #dde3f0', borderTop: `4px solid ${member.border}`, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <img src={member.img} alt={member.name} width="400" height="300" loading="lazy" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block', border: '3px solid #FFD600' }} />
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '15px', color: C.navy, marginBottom: '4px' }}>{member.name}</h4>
                  <span style={{ fontSize: '12px', color: member.border === C.yellow ? C.blue : member.border, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>{member.role}</span>
                  <span style={{ alignSelf: 'center', background: C.lightBg, color: C.navy, fontSize: '9px', fontWeight: 'bold', padding: '3px 8px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    {member.dep}
                  </span>
                  <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>{member.bio}</p>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    {['ti-brand-linkedin', 'ti-brand-twitter', 'ti-mail'].map((icon) => (
                      <a key={icon} href="#" style={{ width: '28px', height: '28px', background: member.border, color: member.border === C.yellow ? C.navy : C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', textDecoration: 'none' }}>
                        <i className={`ti ${icon}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION G] CULTURE / OFFICE IMAGES */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, width: '100%', background: C.lightBg }}>
        <div>
          <img
            src="/assets/lead-generation-hero.png"
            alt="SEO Submit Web Culture"
            width="1672"
            height="941"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: isMobile ? '32px 16px' : '48px 40px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Eyebrow label="OUR CULTURE" />
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '16px' }}>
            A Team That <span style={{ color: C.blue }}>Lives & Breathes</span> Lead Generation
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '13px', color: '#444', lineHeight: 1.7, marginBottom: '12px' }}>
            We work in a high-intensity, growth-focused environment where quality metrics are analyzed hourly. Our mission is to keep your sales pipelines filled.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '13px', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
            From verification drills to compliance audits, we ensure that every lead record is check-marked before transfer.
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

      {/* Office Image Strip */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, width: '100%' }}>
        <img src="https://picsum.photos/seed/office1/400/200" alt="Modern Office" width="400" height="200" loading="lazy" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
        <img src="https://picsum.photos/seed/office2/400/200" alt="Team meeting" width="400" height="200" loading="lazy" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
        <img src="https://picsum.photos/seed/office3/400/200" alt="Workspace Desk" width="400" height="200" loading="lazy" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
      </section>

      {/* [SECTION H] AWARDS & CERTIFICATIONS */}
      <SectionWrapper bg={C.navy}>
        <Eyebrow label="RECOGNITION" labelColor={C.yellow} />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          Awards, Certifications & <span style={{ color: C.yellow }}>Industry Recognition</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', gap: '16px' }}>
          {[
            { title: 'Google Premier Partner', year: '2024', desc: 'Elite advertising certification.' },
            { title: 'Meta Business Partner', year: '2024', desc: 'Verified scale marketing support.' },
            { title: 'ACMA Compliant', year: '2025', desc: 'Highest communication standards.' },
            { title: 'BBB A+ Rating', year: '2025', desc: 'Excellent business metrics.' },
            { title: 'ISO 9001 Certified', year: '2024', desc: 'International Quality compliance.' },
          ].map((award, idx) => (
            <div key={idx} style={{ background: C.yellow, color: C.navy, padding: '20px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <i className="ti ti-award" style={{ fontSize: '32px', color: C.navy, marginBottom: '12px' }} />
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', marginBottom: '4px', lineHeight: 1.3 }}>{award.title}</h4>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: C.blue, display: 'block', marginBottom: '6px' }}>{award.year}</span>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#444', lineHeight: 1.4 }}>{award.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [SECTION I] CLIENT LOGOS BAND */}
      <section style={{ background: C.yellow, padding: '32px 24px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '14px', color: C.navy, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
          Trusted By 5,000+ Agencies Worldwide
        </h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {["TechSEO Solutions LLC", "WebCraft Studio", "RankBoost Agency", "DigitalFirst Co", "GrowthMark", "PixelForge"].map((client) => (
            <div key={client} style={{
              background: C.white,
              color: C.navy,
              border: `2px solid ${C.navy}`,
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: '11px',
              padding: '12px 24px',
              letterSpacing: '1px',
              borderRadius: 0,
            }}>
              CLIENT LOGO: {client}
            </div>
          ))}
        </div>
      </section>

      {/* [SECTION J] TESTIMONIAL ON ABOUT PAGE */}
      <section style={{ background: C.blue, padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: C.white, padding: '24px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px' }}>
          <div style={{ width: isMobile ? '100%' : '200px', flexShrink: 0 }}>
            <img
              src="https://picsum.photos/seed/featuredclient/200/200"
              alt="David Miller"
              width="200"
              height="200"
              loading="lazy"
              style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', border: `3px solid ${C.yellow}` }}
            />
          </div>
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '14px', marginBottom: '8px' }}>
              {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
            </div>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#333', lineHeight: 1.8, marginBottom: '14px', fontStyle: 'italic' }}>
              "SEO Submit Web completely transformed how we acquire clients. Before them, we were spending 40 hours a week cold calling with a 2% success rate. Now we receive 20 exclusive, pre-verified leads every week and our close rate is 35%. They are not just a vendor — they are a genuine growth partner."
            </p>
            <div>
              <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '14px', color: C.navy }}>David Miller</h4>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>CEO, RankBoost Agency • Sourced SEO Leads</span>
            </div>
          </div>
        </div>
      </section>

      {/* [SECTION K] ABOUT PAGE CTA */}
      <section style={{ background: C.yellow, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '8px' }}>
          Ready to Grow Your Agency With Exclusive Leads?
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: '#333', marginBottom: '24px' }}>
          Join 5,000+ agencies who trust SEO Submit Web for their lead generation needs.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/contact')} style={{ background: C.blue, color: C.white, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
            VIEW LEAD SAMPLES
          </button>
          <button onClick={() => navigate('/contact')} style={{ background: 'transparent', color: C.navy, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 28px', border: `2px solid ${C.navy}`, cursor: 'pointer', borderRadius: 0 }}>
            CONTACT US
          </button>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;
