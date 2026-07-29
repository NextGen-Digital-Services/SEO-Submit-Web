import React from 'react';
import team1Img from '../assets/Team/1.webp';
import team2Img from '../assets/Team/2.webp';
import team3Img from '../assets/Team/3.webp';
import team4Img from '../assets/Team/4.webp';
import { Link, useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import PricingSection from '../sections/PricingSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';
import home1 from '../assets/home/home1.webp';
import home2 from '../assets/home/home2.webp';
import home3 from '../assets/home/home3.webp';
import useScrollReveal from '../hooks/useScrollReveal';
import Counter from '../components/Counter';


export const HomePage = ({ isMobile }) => {
  const navigate = useNavigate();
  useScrollReveal();

  return (
    <div style={{ width: '100%' }}>
      {/* [SECTION A] HERO */}
      <HeroSection isMobile={isMobile} />

      {/* [SECTION B] TICKER BAR */}
<section 
  className="hide-scrollbar" 
  style={{
    background: C.blue,
    padding: isMobile ? '20px 16px' : '16px 40px', // Extra horizontal padding for desktop layout breathing room
    display: 'flex',
    flexDirection: isMobile ? 'row' : 'row',
    flexWrap: isMobile ? 'wrap' : 'nowrap', // Mobile par data wrap hoga, desktop par single row fill karega
    justifyContent: isMobile ? 'space-between' : 'space-between', // Dono screen sizes par container ko pura fill karega
    alignItems: 'center',
    gap: isMobile ? '16px 12px' : '24px', // Flexible native gaps
    width: '100%',
    overflowX: 'hidden'
  }}
>
  {[
    { icon: 'ti-award', label: 'Founded', value: 'Since 2009' },
    { icon: 'ti-users', label: 'Clients Served', value: '500+' },
    { icon: 'ti-shield-check', label: 'Guarantee', value: 'Bad Lead Replaced' },
    { icon: 'ti-clock', label: 'Support', value: '24/7 Available' },
    { icon: 'ti-star', label: 'Avg Rating', value: '4.9 / 5.0' },
  ].map((item, idx, arr) => {
    // Mobile layouts require calculated fluid widths to fill maximum flex vectors
    const flexBasisValue = isMobile ? 'calc(50% - 8px)' : 'auto';
    
    return (
      <div
        key={item.label}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexGrow: 1, // Har item ko expand hoke space fill karne dega
          flexShrink: 0,
          flexBasis: idx === arr.length - 1 && isMobile ? '100%' : flexBasisValue, // Mobile par last item full width space cover karega
          justifyContent: idx === arr.length - 1 && isMobile ? 'center' : 'flex-start',
          padding: isMobile ? '4px 0' : '0 12px',
          // Desktop partitions borders logic without container leaks
          borderRight: (!isMobile && idx !== arr.length - 1) ? '1px solid rgba(255,255,255,0.2)' : 'none',
        }}
      >
        <span style={{ 
          color: C.yellow, 
          fontSize: '20px', 
          display: 'flex', 
          alignItems: 'center',
          flexShrink: 0 
        }}>
          <i className={`ti ${item.icon}`} />
        </span>
        <div style={{ textAlign: 'left' }}>
          <span style={{ 
            fontSize: '10px', 
            color: 'rgba(255,255,255,0.65)', 
            fontWeight: 600, 
            letterSpacing: '1px', 
            textTransform: 'uppercase', 
            display: 'block',
            lineHeight: 1.3
          }}>
            {item.label}
          </span>
          <span style={{ 
            fontFamily: F.display, 
            fontWeight: 900, 
            fontSize: isMobile ? '14px' : '16px', 
            color: C.white, 
            display: 'block',
            marginTop: '2px',
            lineHeight: 1.2
          }}>
            {item.value}
          </span>
        </div>
      </div>
    );
  })}
</section>

      {/* [SECTION C] ABOUT PREVIEW WITH IMAGE */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, width: '100%', overflow: 'hidden' }}>
  {/* Local animation controls for high performance scale entry */}
  <style>{`
    .about-image-zoom {
      transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .about-image-zoom:hover {
      transform: scale(1.04);
    }
    .about-btn-interactive {
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }
    .about-btn-interactive:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 87, 255, 0.25);
      filter: brightness(1.1);
    }
  `}</style>

  {/* Image Segment with dynamic container constraint */}
  <div style={{ overflow: 'hidden', width: '100%', background: '#f3f4f6' }}>
    <img
      src="https://res.cloudinary.com/dpeq00iqq/image/upload/v1782552891/hero1_result_dulipv.webp"
      alt="Agency team collaborating on lead generation"
      width="1672"
      height="941"
      loading="lazy"
      className="about-image-zoom"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
  </div>

  {/* Content Layer with dynamic alignment spacing */}
  <div style={{ padding: isMobile ? '40px 20px' : '64px 48px', background: C.white, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Eyebrow label="ABOUT SEO SUBMIT WEB" />
    <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: isMobile ? '26px' : '32px', color: C.navy, marginBottom: '20px', lineHeight: 1.25 }}>
      Since 2009, SEOSubmitWeb has helped agencies and service businesses close more deals <span style={{ color: C.blue }}>without chasing cold, recycled leads.</span>
    </h2>
    <p style={{ fontFamily: F.body, fontSize: '14.5px', color: '#4b5563', lineHeight: 1.8, marginBottom: '14px' }}>
      We deliver exclusive SEO leads, web design leads, and appointment-set leads that come to you ready to buy — never shared, never
      Every lead is generated fresh for your business alone, so you're always the first call, not the fifth.
    </p>
    <p style={{ fontFamily: F.body, fontSize: '14.5px', color: '#4b5563', lineHeight: 1.8, marginBottom: '28px' }}>
      With nearly a decade of proven results, our clients don't just get leads — they get a predictable pipeline they can build a business on.
      Stop competing for the same tired leads. Start closing exclusively yours.
    </p>

    {/* Safely optimized Grid layer - Counter metrics crash fixing variables included */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
      {[
        { num: '16', suffix: '+ Years', lbl: 'Experience' },
        { num: '500', suffix: '+ Clients', lbl: 'Trust Us' },
        { num: '10', suffix: 'K+ Leads', lbl: 'Delivered' },
        { num: '15', suffix: '+ Countries', lbl: 'Served' },
      ].map((p, idx) => (
        <div 
          key={idx} 
          className="reveal" 
          style={{ 
            background: C.yellow, 
            padding: '16px 12px', 
            textAlign: 'center',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(255,214,0,0.15)'
          }}
        >
          <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '18px', color: C.navy }}>
            <Counter value={p.num} />
            <span style={{ fontSize: '14px', marginLeft: '2px' }}>{p.suffix}</span>
          </span>
          <span style={{ display: 'block', fontSize: '11px', color: '#374151', fontFamily: F.body, marginTop: '2px', fontWeight: 500 }}>
            {p.lbl}
          </span>
        </div>
      ))}
    </div>

    <button
      onClick={() => navigate('/about')}
      className="about-btn-interactive"
      style={{
        background: C.blue,
        color: C.white,
        fontFamily: F.display,
        fontWeight: 800,
        fontSize: '13px',
        letterSpacing: '1px',
        padding: '16px 32px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
        alignSelf: 'flex-start'
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
            className="reveal"
            style={{
              textAlign: 'center',
              padding: '12px',
              borderRight: (!isMobile && idx !== arr.length - 1) ? '2px solid rgba(10,22,40,0.2)' : 'none',
            }}
          >
            <span style={{ fontFamily: F.display, fontWeight: 900, fontSize: '36px', color: C.navy }}>
              <Counter value={stat.num} /><sup style={{ fontSize: '20px' }}>{stat.sup}</sup>
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
          <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '20px' }}>
            Why Choose SEO Submit Web?
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '13.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '16px', lineHeight: 1.7 }}>
            We specialize in delivering premium SEO Leads in USA for businesses looking to scale faster. Every lead is manually verified and delivered exclusively to your business, so you never compete with multiple agencies for the same prospect.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '13.5px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.7 }}>
            Whether you're looking to Buy SEO Leads in USA, generate more web design projects, or expand your digital marketing services, our lead generation system helps you connect with businesses actively searching for professional services.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
            {[
              'Buy SEO Leads in USA',
              'Website Design Leads in USA',
              'Web Design Leads USA',
              'Appointment Set Leads',
              'SEO Agency Leads',
              'Digital Marketing Leads',
              'Local Business Leads',
              'Exclusive Business Leads',
            ].map((highlight) => (
              <div key={highlight} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: C.yellow, fontSize: '12.5px', fontFamily: F.body, fontWeight: 600 }}>
                <span style={{ fontSize: '16px', lineHeight: 1 }}>•</span>
                <span style={{ color: C.white }}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dpeq00iqq/image/upload/v1782552880/hero5_result_oahywd.webp"
            alt="Marketing analytics and sales pipeline growth"
            width="1672"
            height="941"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* [SECTION G] HOW IT WORKS */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="HOW IT WORKS" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
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
          src="https://res.cloudinary.com/dpeq00iqq/image/upload/v1782552877/hero6_result_vy8ajb.webp"
          alt="Lead generation team in a modern digital workspace"
          width="1672"
          height="941"
          loading="lazy"
          style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', marginTop: '32px' }}
        />
      </SectionWrapper>

      {/* [SECTION H] WHO CAN BENEFIT */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="WHO CAN BENEFIT" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '12px' }}>
          Who Can Benefit?
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: '#4b5563', marginBottom: '28px' }}>
          Our lead generation services are ideal for:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { icon: 'ti-search', title: 'SEO Agencies', desc: 'Inquiries seeking local SEO setups, technical optimization audits, and monthly link building packages.', border: C.yellow },
            { icon: 'ti-target', title: 'Digital Marketing Agencies', desc: 'Full-service digital agencies looking for multi-channel lead generation and campaign clients.', border: C.blue },
            { icon: 'ti-layout', title: 'Web Design Companies', desc: 'Requests for corporate redesign projects, e-commerce integrations, and custom landing page designs.', border: C.navy },
            { icon: 'ti-user-check', title: 'Freelancers', desc: 'Independent specialists and consultants seeking high-value projects and steady monthly retainers.', border: C.yellow },
            { icon: 'ti-building-store', title: 'Local Marketing Consultants', desc: 'Consultants working with regional and local SMBs to increase local organic search traffic.', border: C.blue },
            { icon: 'ti-code', title: 'Website Developers', desc: 'Web developers building custom web applications, SaaS interfaces, and complex tech stacks.', border: C.navy },
            { icon: 'ti-click', title: 'PPC Agencies', desc: 'Companies seeking monthly campaign management across Google Ads, Meta Ads, and LinkedIn.', border: C.yellow },
            { icon: 'ti-rocket', title: 'Startup Marketing Teams', desc: 'Fast-growing startups looking to accelerate client acquisition and scale pipeline revenue.', border: C.blue },
          ].map((ind, idx) => (
            <div key={idx} style={{ background: C.white, borderTop: `4px solid ${ind.border}`, padding: '24px 20px', textAlign: 'left', display: 'flex', flexDirection: 'column', borderRadius: '4px' }}>
              <i className={`ti ${ind.icon}`} style={{ fontSize: '32px', color: C.blue, display: 'block', marginBottom: '14px' }} />
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '8px' }}>{ind.title}</h3>
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
    <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
      The Experts Behind Your <span style={{ color: C.yellow }}>Lead Pipeline</span>
    </h2>

    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
      {[
        { name: 'Imran Merchant', role: 'CEO & Founder', img: team1Img, bio: '15+ years in lead gen strategies. Directs core platform technology.' },
        { name: 'Logan Anderson', role: 'Head of Lead Gen', img: team2Img, bio: 'Manages quality control guidelines and qualification agents.' },
        { name: 'Vihan Sharma', role: 'Chief Tech Officer', img: team4Img, bio: 'Designs integration scripts, automated filters, and API webhooks.' },
        { name: 'Amanda Wilson', role: 'Client Success Director', img: team3Img, bio: 'Optimizes target scopes and coordinates replacement pipelines.' },
      ].map((member, idx) => (
        <div key={idx} className="reveal" style={{ background: C.white, padding: '16px', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          {/* Yahan height ko 180px se badha kar 260px kiya hai aur objectPosition top kiya hai taaki faces na katein */}
          <img 
            src={member.img} 
            alt={member.name} 
            width="300" 
            height="300" 
            loading="lazy" 
            style={{ 
              width: '100%', 
              height: '260px',
              objectFit: 'cover', 
              objectPosition: 'top center', 
              display: 'block', 
              marginBottom: '14px', 
              border: '3px solid #FFD600' 
            }} 
          />
          <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.navy, marginBottom: '4px' }}>{member.name}</h4>
          <span style={{ fontSize: '11px', color: C.blue, fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>{member.role}</span>
          <p style={{ fontFamily: F.body, fontSize: '11px', color: '#666', lineHeight: 1.5, marginBottom: '14px', flex: 1 }}>{member.bio}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* [SECTION J] NUMBERS SPEAK */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, width: '100%' }}>
        <div>
          <img
            src="https://res.cloudinary.com/dpeq00iqq/image/upload/v1782552876/hero7_result_xpaegu.webp"
            alt="SEO analytics dashboard and qualified lead pipeline"
            width="1672"
            height="941"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: isMobile ? '32px 16px' : '48px 40px', background: C.navy, textAlign: 'left' }}>
          <Eyebrow label="BY THE NUMBERS" labelColor={C.yellow} />
          <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
            Our Results <span style={{ color: C.yellow }}>In Numbers</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { val: '100$ k+', lbl: 'Revenue Generated' },
              { val: '10,000+', lbl: 'Total Leads Delivered' },
              { val: '50+', lbl: 'Active Monthly Clients' },
              { val: '15+', lbl: 'Countries Served' },
            ].map((box, idx) => (
              <div key={idx} className="reveal" style={{ background: C.blue, padding: '20px', textAlign: 'center' }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '32px', color: C.white, marginBottom: '4px' }}><Counter value={box.val} /></span>
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
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          Latest Tips & <span style={{ color: C.blue }}>Industry Insights</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px', marginBottom: '28px' }}>
          {[
            { border: C.yellow, cat: 'SEO LEADS', img: home1 , title: '10 Proven Ways to Convert SEO Leads Faster in 2025', desc: 'Understand high-converting proposal scopes, audit formats, and scripts to double your sales closing percentage.' },
            { border: C.blue, cat: 'WEB DESIGN', img: home2 , title: 'Why Exclusive Leads Beat Shared Leads Every Time', desc: 'Discover how shared leads damage your reps margins and how exclusive leads establish sustainable growth pipelines.' },
            { border: C.navy, cat: 'APPOINTMENTS', img: home3 , title: 'How to Scale Your Agency With Appointment Fixed Leads', desc: 'Scale calendar consulting sessions to secure five-figure retainer agreements. Skip cold dialing.' },
          ].map((post, idx) => (
            <div key={idx} className="reveal" style={{ background: C.white, border: '1px solid #dde3f0', borderTop: `4px solid ${post.border}`, display: 'flex', flexDirection: 'column' }}>
              <img src={post.img} alt={post.title} width="600" height="200" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
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
                
                </div>
                
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

      {/* [SECTION N] WHY AGENCIES TRUST SEO SUBMIT WEB */}
      <section style={{ background: C.navy, padding: '48px 24px', textAlign: 'center' }}>
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.white, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '28px' }}>
          Why Agencies Trust SEO Submit Web
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {[
            "✔ Exclusive Leads",
            "✔ No Shared Leads",
            "✔ High Conversion Rate",
            "✔ Verified Business Information",
            "✔ Fast Lead Delivery",
            "✔ Dedicated Support",
            "✔ Transparent Pricing",
            "✔ USA-Focused Lead Generation",
          ].map((badge) => (
            <div key={badge} style={{
              background: C.yellow,
              color: C.navy,
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: '11px',
              padding: '12px 20px',
              letterSpacing: '1px',
              border: 'none',
              borderRadius: '4px',
            }}>
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* [SECTION FAQ] SEO FAQs */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="FAQ" />
        <h2 className="reveal" style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          SEO FAQs
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            {
              q: 'What are SEO Leads?',
              a: 'SEO leads are businesses actively looking for search engine optimization services to improve their website rankings and online visibility.'
            },
            {
              q: 'Can I Buy SEO Leads in USA?',
              a: 'Yes. We provide exclusive Buy SEO Leads in USA that are verified, qualified, and delivered only to your business.'
            },
            {
              q: 'Are your SEO leads exclusive?',
              a: 'Yes. We never resell the same lead to multiple agencies.'
            },
            {
              q: 'What are Website Design Leads in USA?',
              a: 'These are businesses actively searching for website design or website redesign services across the United States.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="reveal" style={{ padding: '20px', borderLeft: `4px solid ${C.yellow}`, background: C.lightBg, textAlign: 'left', borderRadius: '4px' }}>
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '8px' }}>{faq.q}</h3>
              <p style={{ fontFamily: F.body, fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [SECTION O] BOTTOM CTA */}
      <CTASection />
    </div>
  );
};

export default HomePage;
