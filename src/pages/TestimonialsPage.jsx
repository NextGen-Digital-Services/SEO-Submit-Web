import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import ReviewForm from '../forms/ReviewForm';
import TestimonialImg from '../assets/All Images/Testimonial_result.webp';
import Testimonial1Result from '../assets/Testimonial/1_result.webp';
import Testimonial2Result from '../assets/Testimonial/2_result.webp';

export const TestimonialsPage = ({ isMobile }) => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedVideo]);

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
    }
  }, [selectedVideo]);

  const reviewsList = [
    { name: 'Jared Diamond', role: 'CEO at Upcision', comp: 'apixdigital.co', img: 'https://picsum.photos/seed/testi1/80/80', txt: 'Best SEO leads in the market. Phone verification is thorough, show-up rates are consistent, and support handles requests promptly.' },
    { name: 'Diana Ross', role: 'Director', comp: 'WebCraft Agency', img: 'https://picsum.photos/seed/testi2/80/80', txt: '24/7 support is real. I had a webhook syncing issue at 2am and the representative solved it. High conversion percentages.' },
    { name: 'Adam Vance', role: 'Founder', comp: 'GrowthMark Digital', img: 'https://picsum.photos/seed/testi3/80/80', txt: 'Close rate jumped 40% in our design team since we started acquiring custom leads. Replacement policy works flawlessly.' },
  ];

  return (
    <div style={{ width: '100%' }}>
      {/* [A] PAGE HERO */}
      <div style={{
        flex: 1,
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
          src={TestimonialImg}
          alt="Testimonials"
          width="1200"
          height="1500"
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
          <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '36px', color: C.white, marginBottom: '14px' }}>
            Real Results From <span style={{ color: C.yellow }}>Real Clients</span>
          </h1>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Hear from agency owners who scaled their client count and billing retainers using our exclusive leads.
          </p>

          {/* Stat Pills */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {["500+ Happy Clients", "4.9 / 5 Average Rating", "98% Would Recommend"].map((pill) => (
              <span key={pill} style={{
                background: C.yellow,
                color: C.navy,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '11px',
                padding: '8px 16px',
              }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* [B] OVERALL RATINGS BAND */}
      <section style={{ background: C.yellow, padding: '24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: '16px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {[
            { score: '4.9/5', source: 'Google Reviews' },
            { score: '4.8/5', source: 'Trustpilot' },
            { score: '4.9/5', source: 'Facebook' },
            { score: '5.0/5', source: 'Clutch' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: C.navy, padding: '16px', textAlign: 'center' }}>
              <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '20px', color: C.yellow }}>{item.score}</span>
              <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '10px', color: C.white, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{item.source}</span>
            </div>
          ))}
        </div>
      </section>

      {/* [C] MAIN FEATURED TESTIMONIALS */}
      <section style={{ background: C.lightBg, padding: '48px 24px' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '24px'
        }}>
          {/* Card 1: Abe Rubarts */}
          <div style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '32px', alignItems: 'center', height: '100%', boxSizing: 'border-box' }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `4px solid ${C.navy}`,
              flexShrink: 0,
              padding: 0,
              margin: 0,
              display: 'block'
            }}>
              <img src={Testimonial1Result} alt="Abe Rubarts Featured Testimonial" width="1080" height="1080" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transform: 'scale(2)' }} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '15px', color: C.navy, lineHeight: 1.8, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "SEO Submit Web leads helped us completely transform our sales velocity. We closed 24 retainer accounts in our first 90 days, adding over $48,000 in new monthly recurring revenue. Their support team replaced any invalid numbers instantly."
              </p>
              <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Abe Rubarts</h4>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>Founder & CEO at Locus Digital • www.locusdigital.com</span>
            </div>
          </div>

          {/* Card 3: Jared Diamond */}
          <div style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '32px', alignItems: 'center', height: '100%', boxSizing: 'border-box' }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `4px solid ${C.navy}`,
              flexShrink: 0,
              padding: 0,
              margin: 0,
              display: 'block'
            }}>
              <img src={Testimonial2Result} alt="Jared Diamond Featured Testimonial" width="1080" height="1080" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transform: 'scale(2)' }} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '15px', color: C.navy, lineHeight: 1.8, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "SEO Submit Web leads helped us completely transform our sales velocity. We closed 24 retainer accounts in our first 90 days, adding over $48,000 in new monthly recurring revenue. Their support team replaced any invalid numbers instantly."
              </p>
              <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Jared Diamond</h4>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>CEO at Upcision • apixdigital.co</span>
            </div>
          </div>
          {/* Card 1: Abe Rubarts */}
          <div style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '32px', alignItems: 'center', height: '100%', boxSizing: 'border-box' }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `4px solid ${C.navy}`,
              flexShrink: 0,
              padding: 0,
              margin: 0,
              display: 'block'
            }}>
              <img src={Testimonial1Result} alt="Abe Rubarts Featured Testimonial" width="1080" height="1080" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transform: 'scale(2)' }} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '15px', color: C.navy, lineHeight: 1.8, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "SEO Submit Web leads helped us completely transform our sales velocity. We closed 24 retainer accounts in our first 90 days, adding over $48,000 in new monthly recurring revenue. Their support team replaced any invalid numbers instantly."
              </p>
              <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Abe Rubarts</h4>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>Founder & CEO at Locus Digital • www.locusdigital.com</span>
            </div>
          </div>

          {/* Card 2: Jared Diamond */}
          <div style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '32px', alignItems: 'center', height: '100%', boxSizing: 'border-box' }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `4px solid ${C.navy}`,
              flexShrink: 0,
              padding: 0,
              margin: 0,
              display: 'block'
            }}>
              <img src={Testimonial2Result} alt="Jared Diamond Featured Testimonial" width="1080" height="1080" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transform: 'scale(2)' }} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '15px', color: C.navy, lineHeight: 1.8, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "SEO Submit Web leads helped us completely transform our sales velocity. We closed 24 retainer accounts in our first 90 days, adding over $48,000 in new monthly recurring revenue. Their support team replaced any invalid numbers instantly."
              </p>
              <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Jared Diamond</h4>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>CEO at Upcision • apixdigital.co</span>
            </div>
          </div>
        </div>
      </section>

      {/* [C] FEATURED TESTIMONIALS */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="FEATURED CLIENTS" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          In-Depth Client Case Notes
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
          {reviewsList.slice(0, 3).map((test, idx) => (
            <div key={idx} style={{
              background: C.white,
              border: '1px solid #dde3f0',
              borderLeft: `4px solid ${idx % 2 === 0 ? C.yellow : C.blue}`,
              padding: '24px',
              position: 'relative',
            }}>
              <div style={{ fontSize: '40px', color: C.blue, fontFamily: F.display, fontWeight: 900, lineHeight: 1, marginBottom: '10px' }}>“</div>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '14px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: '#444', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>
                "{test.txt}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid #f0f3ff', paddingTop: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 0, margin: 0 }}>
                  <img src={test.img} alt={test.name} width="80" height="80" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', padding: 0, margin: 0 }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h5 style={{ fontFamily: F.display, fontWeight: 700, fontSize: '12px', color: C.navy }}>{test.name}</h5>
                  <span style={{ fontSize: '10px', color: '#888' }}>{test.role} • {test.comp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [D] ALL TESTIMONIALS GRID */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="ALL REVIEWS" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Feedback From Sourcing Partners
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
          {reviewsList.map((test, idx) => (
            <div key={idx} style={{ background: C.white, border: '1px solid #dde3f0', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 0, margin: 0 }}>
                  <img src={test.img} alt={test.name} width="80" height="80" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', padding: 0, margin: 0 }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h5 style={{ fontFamily: F.display, fontWeight: 700, fontSize: '12px', color: C.navy }}>{test.name}</h5>
                  <span style={{ fontSize: '10px', color: '#888' }}>{test.comp}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '12px', marginBottom: '8px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555', lineHeight: 1.6 }}>
                "{test.txt}"
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [E] VIDEO TESTIMONIALS SECTION */}
      <SectionWrapper bg={C.navy}>
        <Eyebrow label="VIDEO REVIEWS" labelColor={C.yellow} />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          Watch What Our Clients Say
        </h2>

        <div className="testimonial-video-grid">
          {[
            {
              name: 'Jared Diamond',
              title: 'CEO at Upcision | apixdigital.co',
              videoUrl: 'https://res.cloudinary.com/dpeq00iqq/video/upload/v1782211334/Video_1_jmmidk.mp4',
              thumbnail: 'https://res.cloudinary.com/dpeq00iqq/video/upload/v1782211334/Video_1_jmmidk.jpg',
            },
            {
              name: 'Diana Ross',
              title: 'WebCraft Agency',
              videoUrl: 'https://res.cloudinary.com/dpeq00iqq/video/upload/v1782216715/Video2_compressed_svrrfv.mp4',
              thumbnail: 'https://res.cloudinary.com/dpeq00iqq/video/upload/v1782216715/Video2_compressed_svrrfv.jpg',
            }
          ].map((video, idx) => (
            <div 
              key={idx} 
              style={{
                background: C.deepNavy,
                border: `1px solid ${C.blue}`,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                cursor: 'pointer',
              }} 
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                overflow: 'hidden',
                background: '#000',
              }}>
                <img 
                  src={video.thumbnail} 
                  alt={video.name} 
                  width="640"
                  height="360"
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    display: 'block',
                  }} 
                  className="video-thumbnail-img"
                />
                {/* Play Button Overlay */}
                <div 
                  className="video-play-overlay"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(10, 22, 40, 0.8)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `2px solid ${C.yellow}`,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={C.yellow} style={{ marginLeft: '2px' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Client Info below thumbnail */}
              <div style={{ padding: '16px', textAlign: 'left' }}>
                <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.white, marginBottom: '4px' }}>
                  {video.name}
                </h4>
                <p style={{ fontFamily: F.body, fontSize: '11px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .testimonial-video-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
          }
          @media (min-width: 640px) {
            .testimonial-video-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          .video-thumbnail-img {
            transition: transform 0.3s ease;
          }
          .video-play-overlay {
            transition: all 0.2s ease;
          }
          .testimonial-video-grid > div:hover .video-thumbnail-img {
            transform: scale(1.05);
          }
          .testimonial-video-grid > div:hover .video-play-overlay {
            background-color: ${C.yellow} !important;
            transform: translate(-50%, -50%) scale(1.1) !important;
          }
          .testimonial-video-grid > div:hover .video-play-overlay svg {
            fill: ${C.navy} !important;
          }
        `}</style>
      </SectionWrapper>

      {/* [F] CASE STUDIES */}
      <section style={{ background: C.blue, padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
            Client Success Stories
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>
            {/* Case 1 */}
            <div style={{ background: C.white, textAlign: 'left', color: C.navy, display: 'flex', flexDirection: 'column' }}>
              <img src="https://picsum.photos/seed/case1/600/200" alt="SEO Growth Case" width="600" height="200" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ background: C.yellow, color: C.navy, padding: '4px 10px', fontSize: '9px', fontWeight: 'bold', fontFamily: F.display, alignSelf: 'flex-start' }}>CASE 01</span>
                <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', marginTop: '12px', marginBottom: '12px' }}>
                  Agency Scaled from 3 to 47 Clients in 6 Months
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  <strong>Challenge:</strong> Slow organic lead growth and high ad costs.<br />
                  <strong>Solution:</strong> Onboarded our professional SEO leads package.<br />
                  <strong>Results:</strong> Closed 44 retainers with average values of $2k/mo.
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ background: C.lightBg, padding: '10px', flex: 1, textAlign: 'center' }}>
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '18px', color: C.blue }}>+1400%</span>
                    <span style={{ fontSize: '9px', color: '#888' }}>Client Growth</span>
                  </div>
                  <div style={{ background: C.lightBg, padding: '10px', flex: 1, textAlign: 'center' }}>
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '18px', color: C.blue }}>$88k</span>
                    <span style={{ fontSize: '9px', color: '#888' }}>New MRR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div style={{ background: C.white, textAlign: 'left', color: C.navy, display: 'flex', flexDirection: 'column' }}>
              <img src="https://picsum.photos/seed/case2/600/200" alt="Web design revenue growth" width="600" height="200" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ background: C.yellow, color: C.navy, padding: '4px 10px', fontSize: '9px', fontWeight: 'bold', fontFamily: F.display, alignSelf: 'flex-start' }}>CASE 02</span>
                <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', marginTop: '12px', marginBottom: '12px' }}>
                  Web Design Firm Doubled Revenue in 90 Days
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  <strong>Challenge:</strong> High staff costs spent dialing cold leads.<br />
                  <strong>Solution:</strong> Implemented pre-booked appointment leads.<br />
                  <strong>Results:</strong> Show up rate exceeded 80%, booking 14 new custom designs.
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ background: C.lightBg, padding: '10px', flex: 1, textAlign: 'center' }}>
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '18px', color: C.blue }}>2x</span>
                    <span style={{ fontSize: '9px', color: '#888' }}>Revenue</span>
                  </div>
                  <div style={{ background: C.lightBg, padding: '10px', flex: 1, textAlign: 'center' }}>
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '18px', color: C.blue }}>82%</span>
                    <span style={{ fontSize: '9px', color: '#888' }}>Show-Up Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [G] TRUST BADGES */}
      <section style={{ background: C.yellow, padding: '32px 24px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '14px', color: C.navy, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
          Why Clients Trust SEO Submit Web
        </h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {["Exclusive Channels Only", "No Resold Databases", "Phone Qualified SDRs", "Transparent Replacements", "GDPR/Compliance Setups"].map((badge) => (
            <div key={badge} style={{
              background: C.navy,
              color: C.yellow,
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

      {/* [H] LEAVE A REVIEW FORM */}
      <section style={{ background: C.navy, padding: '48px 24px', textAlign: 'center', borderTop: `3px solid ${C.yellow}` }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: C.deepNavy, border: `2px solid ${C.blue}`, padding: '32px 24px', textAlign: 'left' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.yellow, marginBottom: '8px', textAlign: 'center' }}>
            Leave a Review
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', textAlign: 'center' }}>
            Share your experience working with SEO Submit Web.
          </p>

          <ReviewForm />

          {/* Green WhatsApp Contact Button */}
          <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center' }}>
            <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '12px', marginBottom: '12px' }}>
              Want to speak to support instead?
            </p>
            <a
              href="https://wa.me/17165755447"
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
                fontSize: '11px',
                letterSpacing: '1px',
                padding: '12px 24px',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
              CHAT WITH SUPPORT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal / Dialog */}
      {selectedVideo && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(6, 16, 32, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '20px',
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            style={{
              background: C.deepNavy,
              border: `1px solid ${C.blue}`,
              width: isMobile ? '90vw' : '100%',
              maxWidth: '420px',
              maxHeight: '80vh',
              borderRadius: '16px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button in top-right */}
            <button 
              onClick={() => setSelectedVideo(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(10, 22, 40, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: C.white,
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                lineHeight: '1',
                transition: 'background-color 0.2s, color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.yellow;
                e.currentTarget.style.color = C.navy;
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(10, 22, 40, 0.7)';
                e.currentTarget.style.color = C.white;
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Close video player"
            >
              &times;
            </button>

            {/* Video Container */}
            <div style={{
              width: '100%',
              maxHeight: '80vh',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <video 
                ref={(el) => {
                  if (el) {
                    el.muted = false;
                    el.volume = 1.0;
                  }
                  videoRef.current = el;
                }}
                src={selectedVideo.videoUrl}
                controls
                preload="metadata"
                playsInline
                muted={false}
                defaultMuted={false}
                style={{
                  width: '100%',
                  maxHeight: '80vh',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;
