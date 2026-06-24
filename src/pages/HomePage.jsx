import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import PricingSection from '../sections/PricingSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';

export const HomePage = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%' }}>
      {/* [SECTION A] HERO */}
      <HeroSection isMobile={isMobile} />

      {/* [SECTION B] TICKER BAR */}
      <section className="hide-scrollbar" style={{
        background: C.blue,
        padding: '12px 24px',
        display: 'flex',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        width: '100%',
      }}>
        {[
          { icon: 'ti-award', label: 'Founded', value: 'Since 2009' },
          { icon: 'ti-users', label: 'Clients Served', value: '500+' },
          { icon: 'ti-shield-check', label: 'Guarantee', value: 'Bad Lead Replaced' },
          { icon: 'ti-clock', label: 'Support', value: '24/7 Available' },
          { icon: 'ti-star', label: 'Avg Rating', value: '4.9 / 5.0' },
        ].map((item, idx, arr) => (
          <div
            key={item.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0 28px',
              borderRight: idx === arr.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.3)',
            }}
          >
            <span style={{ color: C.yellow, fontSize: '18px', display: 'flex', alignItems: 'center' }}>
              <i className={`ti ${item.icon}`} />
            </span>
            <div style={{ display: 'inline-block', textAlign: 'left' }}>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', display: 'block' }}>{item.label}</span>
              <span style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.white, display: 'block' }}>{item.value}</span>
            </div>
          </div>
        ))}
      </section>

      {/* [SECTION C] ABOUT PREVIEW WITH IMAGE */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, width: '100%' }}>
        <div>
          <img
            src="/assets/lead-generation-hero.png"
            alt="Agency team collaborating on lead generation"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: isMobile ? '32px 16px' : '48px 40px', background: C.white, textAlign: 'left' }}>
          <Eyebrow label="ABOUT SEO SUBMIT WEB" />
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '16px' }}>
            Since 2016, SEOSubmitWeb has helped agencies and service businesses close more deals  <span style={{ color: C.blue }}>without chasing cold, recycled leads.</span>
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.8, marginBottom: '12px' }}>
            We deliver exclusive SEO leads, web design leads, and appointment-set leads that come to you ready to buy — never shared, never resold.
            Every lead is generated fresh for your business alone, so you're always the first call, not the fifth.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.8, marginBottom: '24px' }}>
            With nearly a decade of proven results, our clients don't just get leads — they get a predictable pipeline they can build a business on.
            Stop competing for the same tired leads. Start closing exclusively yours.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
            {[
              { val: '16+ Years', lbl: 'Experience' },
              { val: '500+ Clients', lbl: 'Trust Us' },
              { val: '10K+ Leads', lbl: 'Delivered' },
              { val: '15+ Countries', lbl: 'Served' },
            ].map((p, idx) => (
              <div key={idx} style={{ background: C.yellow, padding: '12px', textAlign: 'center' }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy }}>{p.val}</span>
                <span style={{ display: 'block', fontSize: '10px', color: '#555', fontFamily: F.body }}>{p.lbl}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/about')}
            style={{
              background: C.blue,
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
            READ OUR FULL STORY →
          </button>
        </div>
      </section>

      {/* [SECTION D] SERVICES WITH IMAGES */}
      <ServicesSection isMobile={isMobile} />

      {/* [SECTION E] STATS BAND */}
      <section style={{
        background: C.yellow,
        padding: '32px 24px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
        gap: isMobile ? '24px' : 0,
      }}>
        {[
          { num: '16', sup: '+', label: 'Years in Business' },
          { num: '50K', sup: '+', label: 'Leads Delivered' },
          { num: '98', sup: '%', label: 'Client Retention Rate' },
          { num: '24', sup: '/7', label: 'Dedicated Support' },
        ].map((stat, idx, arr) => (
          <div
            key={stat.label}
            style={{
              textAlign: 'center',
              padding: '12px',
              borderRight: (!isMobile && idx !== arr.length - 1) ? '2px solid rgba(10,22,40,0.2)' : 'none',
            }}
          >
            <span style={{ fontFamily: F.display, fontWeight: 900, fontSize: '36px', color: C.navy }}>
              {stat.num}<sup style={{ fontSize: '20px' }}>{stat.sup}</sup>
            </span>
            <span style={{
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: '10px',
              color: C.blue,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginTop: '6px',
              display: 'block',
            }}>
              {stat.label}
            </span>
          </div>
        ))}
      </section>

      {/* [SECTION F] WHY CHOOSE US WITH IMAGE */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, width: '100%' }}>
        <div style={{ padding: isMobile ? '32px 16px' : '48px 40px', background: C.navy, textAlign: 'left' }}>
          <Eyebrow label="WHY CHOOSE US" labelColor={C.yellow} />
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '20px' }}>
            What Makes SEO Submit Web <span style={{ color: C.yellow }}>The #1 Choice</span>
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: 1.6 }}>
            We qualify our opportunities through active search optimization channels. No shared listings, no outdated databases.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            {[
              { title: 'C-Level Data Only', desc: 'Direct contact details of CEOs, Founders, and senior decision makers.' },
              { title: 'Replacement Guarantee', desc: 'Any lead with incorrect contact credentials is automatically replaced.' },
              { title: 'Real Time Sourcing', desc: 'Leads route straight to your inbox the moment prospect verification completes.' },
              { title: 'Dedicated Manager', desc: 'Continuous campaign assistance from a dedicated SEO Submit Web project manager.' },
            ].map((feat, idx) => (
              <div key={idx} style={{ borderLeft: `3px solid ${C.yellow}`, padding: '12px 16px', background: 'rgba(255,255,255,0.05)', textAlign: 'left' }}>
                <h4 style={{ fontFamily: F.display, fontWeight: 700, fontSize: '13px', color: C.white, marginBottom: '4px' }}>
                  <i className="ti ti-check" style={{ color: C.yellow, marginRight: '6px' }} />
                  {feat.title}
                </h4>
                <p style={{ fontFamily: F.body, fontSize: '11px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{feat.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/contact')}
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
            CLAIM YOUR ZIP CODES →
          </button>
        </div>
        <div>
          <img
            src="/assets/seo-analytics-leads.png"
            alt="Marketing analytics and sales pipeline growth"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* [SECTION G] HOW IT WORKS */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="HOW IT WORKS" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          4 Simple Steps to Start Getting Leads
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? '24px' : 0, position: 'relative' }}>
          {/* Connector Line for Desktop */}
          {!isMobile && (
            <div style={{
              position: 'absolute',
              top: '28px',
              left: '12%',
              right: '12%',
              height: '3px',
              background: 'linear-gradient(90deg, #FFD600, #0057FF)',
              zIndex: 0,
            }}></div>
          )}

          {[
            { num: '01', bg: C.blue, color: C.white, title: 'Request Sample', desc: 'Fill out our inquiry form. We will deliver verified lead samples in 24 hours so you can inspect quality.' },
            { num: '02', bg: C.yellow, color: C.navy, title: 'Choose Package', desc: 'Select the target channel, volume scale, and delivery speeds that align with your growth target.' },
            { num: '03', bg: C.blue, color: C.white, title: 'Leads Go Live', desc: 'Leads are pushed live straight to your inbox or CRM the moment prospects request quotes.' },
            { num: '04', bg: C.yellow, color: C.navy, title: 'Scale & Grow', desc: 'Convert buyers, replace bad records, scale supply, and grow your agency sales numbers.' },
          ].map((step) => (
            <div key={step.num} style={{ textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: step.bg,
                color: step.color,
                fontFamily: F.display,
                fontWeight: 900,
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 14px',
                border: `3px solid ${C.white}`,
              }}>
                {step.num}
              </div>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.navy, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {step.title}
              </h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <img
          src="/assets/lead-generation-hero.png"
          alt="Lead generation team in a modern digital workspace"
          loading="lazy"
          style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', marginTop: '32px' }}
        />
      </SectionWrapper>

      {/* [SECTION H] INDUSTRIES WE SERVE */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="INDUSTRIES" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Leads For Every <span style={{ color: C.blue }}>Digital Service</span> Industry
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { icon: 'ti-search', title: 'SEO Agencies', desc: 'Inquiries seeking local SEO setups, technical optimization audits, and monthly link building packages.', border: C.yellow },
            { icon: 'ti-layout', title: 'Web Design Firms', desc: 'Requests for corporate redesign projects, e-commerce integrations, and custom landing page designs.', border: C.blue },
            { icon: 'ti-device-mobile', title: 'App Dev Companies', desc: 'Businesses planning iOS, Android, cross-platform applications, and SaaS software builds.', border: C.navy },
            { icon: 'ti-click', title: 'PPC Agencies', desc: 'Companies seeking monthly campaign management across Google Ads, Meta Ads, and LinkedIn.', border: C.yellow },
            { icon: 'ti-message-share', title: 'Social Media Firms', desc: 'Firms requesting brand identity consultation, page management, and social media advertising setup.', border: C.blue },
            { icon: 'ti-edit', title: 'Content Marketing Agencies', desc: 'Corporate content strategies, writing pipelines, blog assets, and copywriting optimization.', border: C.navy },
          ].map((ind, idx) => (
            <div key={idx} style={{ background: C.white, borderTop: `4px solid ${ind.border}`, padding: '24px 20px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
              <i className={`ti ${ind.icon}`} style={{ fontSize: '32px', color: C.blue, display: 'block', marginBottom: '14px' }} />
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '8px' }}>{ind.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>{ind.desc}</p>
              <span style={{ alignSelf: 'flex-start', background: '#e1fce8', color: '#16a34a', fontSize: '9px', fontWeight: 'bold', padding: '3px 8px', letterSpacing: '1px' }}>
                AVAILABLE
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [SECTION I] TEAM PREVIEW WITH IMAGES */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Eyebrow label="MEET THE TEAM" labelColor={C.yellow} />
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
            The Experts Behind Your <span style={{ color: C.yellow }}>Lead Pipeline</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { name: 'Rahul Sharma', role: 'CEO & Founder', img: 'https://picsum.photos/seed/person1/300/300', bio: '15+ years in lead gen strategies. Directs core platform technology.' },
              { name: 'Priya Mehta', role: 'Head of Lead Gen', img: 'https://picsum.photos/seed/person2/300/300', bio: 'Manages quality control guidelines and qualification agents.' },
              { name: 'Vikram Singh', role: 'Chief Tech Officer', img: 'https://picsum.photos/seed/person3/300/300', bio: 'Designs integration scripts, automated filters, and API webhooks.' },
              { name: 'Ananya Patel', role: 'Client Success Director', img: 'https://picsum.photos/seed/person4/300/300', bio: 'Optimizes target scopes and coordinates replacement pipelines.' },
            ].map((member, idx) => (
              <div key={idx} style={{ background: C.white, padding: '16px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <img src={member.img} alt={member.name} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block', marginBottom: '14px', border: '3px solid #FFD600' }} />
                <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.navy, marginBottom: '4px' }}>{member.name}</h4>
                <span style={{ fontSize: '11px', color: C.blue, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>{member.role}</span>
                <p style={{ fontFamily: F.body, fontSize: '11px', color: '#666', lineHeight: 1.5, marginBottom: '14px', flex: 1 }}>{member.bio}</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  {['ti-brand-linkedin', 'ti-brand-twitter', 'ti-mail'].map((icon) => (
                    <a key={icon} href="#" style={{ width: '28px', height: '28px', background: C.yellow, color: C.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', textDecoration: 'none' }}>
                      <i className={`ti ${icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION J] NUMBERS SPEAK */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, width: '100%' }}>
        <div>
          <img
            src="/assets/seo-analytics-leads.png"
            alt="SEO analytics dashboard and qualified lead pipeline"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: isMobile ? '32px 16px' : '48px 40px', background: C.navy, textAlign: 'left' }}>
          <Eyebrow label="BY THE NUMBERS" labelColor={C.yellow} />
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
            Our Results <span style={{ color: C.yellow }}>In Numbers</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { val: '100$ k+', lbl: 'Revenue Generated' },
              { val: '10,000+', lbl: 'Total Leads Delivered' },
              { val: '50+', lbl: 'Active Monthly Clients' },
              { val: '15+', lbl: 'Countries Served' },
            ].map((box, idx) => (
              <div key={idx} style={{ background: C.blue, padding: '20px', textAlign: 'center' }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '32px', color: C.white, marginBottom: '4px' }}>{box.val}</span>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '10px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px' }}>{box.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION K] TESTIMONIALS WITH PHOTOS */}
      <TestimonialsSection isMobile={isMobile} />

      {/* [SECTION L] PACKAGES */}
      <PricingSection isMobile={isMobile} />

      {/* [SECTION M] BLOG WITH IMAGES */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="FROM OUR BLOG" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          Latest Tips & <span style={{ color: C.blue }}>Industry Insights</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px', marginBottom: '28px' }}>
          {[
            { border: C.yellow, cat: 'SEO LEADS', img: 'https://picsum.photos/seed/blog1/600/200', title: '10 Proven Ways to Convert SEO Leads Faster in 2025', desc: 'Understand high-converting proposal scopes, audit formats, and scripts to double your sales closing percentage.' },
            { border: C.blue, cat: 'WEB DESIGN', img: 'https://picsum.photos/seed/blog2/600/200', title: 'Why Exclusive Leads Beat Shared Leads Every Time', desc: 'Discover how shared leads damage your reps margins and how exclusive leads establish sustainable growth pipelines.' },
            { border: C.navy, cat: 'APPOINTMENTS', img: 'https://picsum.photos/seed/blog3/600/200', title: 'How to Scale Your Agency With Appointment Fixed Leads', desc: 'Scale calendar consulting sessions to secure five-figure retainer agreements. Skip cold dialing.' },
          ].map((post, idx) => (
            <div key={idx} style={{ background: C.white, border: '1px solid #dde3f0', borderTop: `4px solid ${post.border}`, display: 'flex', flexDirection: 'column' }}>
              <img src={post.img} alt={post.title} style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span style={{
                  fontFamily: F.display,
                  fontWeight: 800,
                  fontSize: '9px',
                  color: post.border === C.yellow ? C.navy : C.white,
                  background: post.border === C.yellow ? C.yellow : post.border,
                  padding: '3px 8px',
                  alignSelf: 'flex-start',
                  marginBottom: '12px',
                  letterSpacing: '1px',
                }}>{post.cat}</span>
                <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '15px', color: C.navy, marginBottom: '8px', lineHeight: 1.3 }}>{post.title}</h4>
                <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>{post.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#999', marginBottom: '12px', fontFamily: F.body }}>
                  <span>Admin</span>
                  <span>Jan 18, 2025</span>
                </div>
                <Link to="/blog" style={{ fontFamily: F.display, fontWeight: 700, fontSize: '11px', color: C.blue, textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => navigate('/blog')}
            style={{
              background: C.blue,
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
            VIEW ALL POSTS →
          </button>
        </div>
      </SectionWrapper>

      {/* [SECTION N] PARTNERS BAND */}
      <section style={{ background: C.navy, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '20px', color: C.white, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '28px' }}>
          Trusted & Certified By
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {["GOOGLE PARTNER", "META BUSINESS", "ACMA COMPLIANT", "BBB A+", "ISO CERTIFIED"].map((badge) => (
            <div key={badge} style={{
              background: C.yellow,
              color: C.navy,
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: '11px',
              padding: '12px 20px',
              letterSpacing: '1px',
              border: 'none',
              borderRadius: 0,
            }}>
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* [SECTION O] BOTTOM CTA */}
      <CTASection />
    </div>
  );
};

export default HomePage;
