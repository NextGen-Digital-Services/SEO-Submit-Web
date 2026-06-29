import { useState, useRef, useEffect } from 'react';
import { C, F } from '../styles/tokens';
import Eyebrow from '../components/Eyebrow';
import SectionWrapper from '../components/SectionWrapper';
import ReviewForm from '../forms/ReviewForm';
import TestimonialImg from '../assets/All Images/Testimonial_result.webp';
import Testimonial1Result from '../assets/Testimonial/1_result.webp';
import Testimonial2Result from '../assets/Testimonial/2_result.webp';
import Testimonial3Result from '../assets/Testimonial/3_result.webp';
import Testimonial4Result from '../assets/Testimonial/4_result.webp';
import Testimonial5Result from '../assets/Testimonial/13_result.webp';
import Testimonial6Result from '../assets/Testimonial/14_result.webp';
import case1 from '../assets/Testimonial/case1.webp';
import case2 from '../assets/Testimonial/case2.webp';

// Automatically detect and import the screenshots from src/assets/Email
const emailImages = import.meta.glob('../assets/Email/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });
const verifiedConversations = Object.keys(emailImages).map((key) => {
  const filename = key.split('/').pop();
  return {
    url: emailImages[key].default || emailImages[key],
    name: filename,
    fileName: filename.startsWith('11') ? 'verified-client-email.eml' : 'client-feedback-chat.pdf',
    icon: filename.startsWith('11') ? 'ti ti-mail' : 'ti ti-message',
    alt: filename.startsWith('11')
      ? 'Verified client email conversation showing successful lead delivery feedback'
      : 'Client chat feedback showing successful campaign execution results'
  };
}).sort((a, b) => {
  if (a.name.startsWith('103')) return 1;
  if (b.name.startsWith('103')) return -1;
  return a.name.localeCompare(b.name);
});

export const TestimonialsPage = ({ isMobile }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
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

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* PERFORMANCE AND HARDWARE-ACCELERATED TRANSITIONS */}
      <style>{`
        .stat-pill {
          animation: fadePill 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadePill {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .testimonial-premium-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, box-shadow;
          transform: translateZ(0);
        }
        .testimonial-premium-card:hover {
          transform: translateY(-5px) translateZ(0);
          box-shadow: 0 12px 25px rgba(10, 22, 40, 0.08);
        }
      `}</style>

      {/* [A] PAGE HERO */}
      <div style={{
        padding: '56px 40px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '320px',
        background: C.navy
      }}>
        <img
          src={TestimonialImg}
          alt="Client Testimonials and Reviews Overview"
          width="1200"
          height="1500"
          loading="eager"
          fetchpriority="high" // Fast LCP Core Web Vitals Fix
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: 0.35,
            zIndex: 0,
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(10, 22, 40, 0.5) 0%, rgba(10, 22, 40, 0.75) 100%)',
          zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px' }}>
          <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: isMobile ? '28px' : '36px', color: C.white, marginBottom: '14px', lineHeight: 1.2 }}>
            Real Results From <span style={{ color: C.yellow }}>Real Clients</span>
          </h1>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Hear from agency owners who scaled their client count and billing retainers using our exclusive leads.
          </p>

          {/* Stat Pills */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {["500+ Happy Clients", "4.9 / 5 Average Rating", "98% Would Recommend"].map((pill, idx) => (
              <span key={pill} className="stat-pill" style={{
                background: C.yellow,
                color: C.navy,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '11px',
                padding: '8px 16px',
                borderRadius: '4px',
                animationDelay: `${idx * 80}ms`
              }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* [C] MAIN FEATURED TESTIMONIALS */}
      <section style={{ background: C.lightBg, padding: '48px 24px' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {/* Card 1: Abe Rubarts */}
          <div className="testimonial-premium-card" style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px', alignItems: 'center', height: '100%', boxSizing: 'border-box', borderRadius: '4px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: `4px solid ${C.navy}`, flexShrink: 0, background: '#f3f4f6' }}>
              <img
                src={Testimonial1Result}
                alt="Abe Rubarts Featured Testimonial"
                width="100"
                height="100"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scale(2.0)',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '14.5px', color: C.navy, lineHeight: 1.7, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "SEOSubmitWeb delivers prospects who already understand what they need — we closed 5 sales out of 50 leads."
              </p>
              <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Abe Rubarts</h3>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>Founder & CEO at Locus Digital • www.locusdigital.com</span>
            </div>
          </div>

          {/* Card 2: Jared Diamond */}
          <div className="testimonial-premium-card" style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px', alignItems: 'center', height: '100%', boxSizing: 'border-box', borderRadius: '4px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: `4px solid ${C.navy}`, flexShrink: 0, background: '#f3f4f6' }}>
              <img
                src={Testimonial2Result}
                alt="Jared Diamond Featured Testimonial"
                width="100"
                height="100"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scale(2.0)',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '14.5px', color: C.navy, lineHeight: 1.7, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "The appointment-set leads from SEOSubmitWeb have completely transformed how I run my sales process — I spend less time prospecting and more time closing. Best investment I've made for my business."
              </p>
              <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Jared Diamond</h3>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>CEO at Upcision • apixdigital.co</span>
            </div>
          </div>

          {/* Card 3: Josh Early */}
          <div className="testimonial-premium-card" style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px', alignItems: 'center', height: '100%', boxSizing: 'border-box', borderRadius: '4px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: `4px solid ${C.navy}`, flexShrink: 0, background: '#f3f4f6' }}>
              <img src={Testimonial3Result} alt="Josh Early Featured Testimonial" width="100" height="100" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '14.5px', color: C.navy, lineHeight: 1.7, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "I was skeptical at first, but the very first web design lead I received from SEOSubmitWeb converted into a $4,000 project. I haven't looked back since."
              </p>
              <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Josh Early</h3>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>Chief Operating Officer at  • www.omgnational.com/</span>
            </div>
          </div>

          {/* Card 4: Christopher Less */}
          <div className="testimonial-premium-card" style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px', alignItems: 'center', height: '100%', boxSizing: 'border-box', borderRadius: '4px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: `4px solid ${C.navy}`, flexShrink: 0, background: '#f3f4f6' }}>
              <img src={Testimonial4Result} alt="Christopher Less Featured Testimonial" width="100" height="100" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '14.5px', color: C.navy, lineHeight: 1.7, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "The appointment-set leads are worth every penny. I get on the call and the prospect already knows why we're talking — it makes closing so much easier and faster."
              </p>
              <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Christopher Less</h3>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>CEO at • cplmarketinggroup.com</span>
            </div>
          </div>

          {/* Card 5: Colin Rogers */}
          <div className="testimonial-premium-card" style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px', alignItems: 'center', height: '100%', boxSizing: 'border-box', borderRadius: '4px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: `4px solid ${C.navy}`, flexShrink: 0, background: '#f3f4f6' }}>
              <img src={Testimonial5Result} alt="Colin Rogers Featured Testimonial" width="100" height="100" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '14.5px', color: C.navy, lineHeight: 1.7, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "We've tried every lead vendor out there — SEOSubmitWeb is the only one that actually delivers what they promise: exclusive, high-intent web design leads that are ready to talk business. From the first call, we closed 2 sales."
              </p>
              <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Colin Rogers</h3>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>CEO of Web Savvy Marketing</span>
            </div>
          </div>

          {/* Card 6: Abraham Anijdar */}
          <div className="testimonial-premium-card" style={{ background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px', alignItems: 'center', height: '100%', boxSizing: 'border-box', borderRadius: '4px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', border: `4px solid ${C.navy}`, flexShrink: 0, background: '#f3f4f6' }}>
              <img src={Testimonial6Result} alt="Abraham Anijdar Featured Testimonial" width="100" height="100" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '14.5px', color: C.navy, lineHeight: 1.7, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
                "We scaled from 3 clients to over 20 in less than a year using SEOSubmitWeb leads. The ROI speaks for itself — this is the smartest investment our agency has ever made."
              </p>
              <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Abraham Anijdar</h3>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>CEO of WebTeamManagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* [D] VERIFIED CLIENT CONVERSATIONS SECTION */}
      <SectionWrapper bg={C.navy} style={{ borderTop: `1px solid rgba(255, 255, 255, 0.1)`, borderBottom: `1px solid rgba(255, 255, 255, 0.1)` }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Eyebrow label="VERIFIED PROOF" labelColor={C.yellow} />
          <h2 style={{
            fontFamily: F.display,
            fontWeight: 900,
            fontSize: '26px',
            color: C.white,
            marginTop: '8px',
            marginBottom: '12px'
          }}>
            Verified Client Conversations
          </h2>
          <p style={{
            fontFamily: F.body,
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto 24px',
            lineHeight: 1.6
          }}>
            Real client messages, emails and feedback received after successful lead delivery.
          </p>
        </div>

        {/* Trust Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '32px'
        }}>
          {["Real Client Email", "Actual Messenger Chat", "Unedited Feedback", "Verified Results"].map((badge, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 214, 0, 0.08)',
              border: `1px solid ${C.yellow}`,
              borderRadius: '20px',
              padding: '6px 14px',
              color: C.yellow,
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.5px'
            }}>
              <span>✓</span> {badge}
            </div>
          ))}
        </div>

        {/* Grid of Screenshots */}
        <div className="verified-conv-grid">
          {verifiedConversations.map((conv, idx) => (
            <div
              key={idx}
              className="verified-card"
              onClick={() => setZoomedImage(conv)}
            >
              {/* Card Header (Browser/Chat Mock style) */}
              <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '12px',
                borderBottom: '1px solid #E5E7EB',
                marginBottom: '12px',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F56' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFBD2E' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27C93F' }}></span>
                </div>
                <div style={{
                  fontFamily: F.body,
                  fontSize: '11px',
                  color: '#6B7280',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <i className={conv.icon} style={{ fontSize: '13px', color: C.blue }}></i>
                  {conv.fileName}
                </div>
                <div style={{ color: C.blue, display: 'flex', alignItems: 'center' }}>
                  <i className="ti ti-zoom-in" style={{ fontSize: '16px' }}></i>
                </div>
              </div>

              {/* Card Image Wrapper */}
              <div className="verified-card-img-wrapper">
                <img
                  src={conv.url}
                  alt={conv.alt}
                  className="verified-card-img"
                  width="400"
                  height="300"
                  loading="lazy" // Strict layout preservation deferred parsing
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Small Trust Statement */}
        <p style={{
          textAlign: 'center',
          fontFamily: F.body,
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.5)',
          fontStyle: 'italic',
          lineHeight: 1.5,
          maxWidth: '600px',
          margin: '32px auto 0'
        }}>
          "These are real conversations and feedback received from active clients after lead delivery and campaign execution."
        </p>

        <style>{`
          .verified-conv-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            max-width: 1000px;
            margin: 0 auto;
          }
          @media (min-width: 768px) {
            .verified-conv-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          .verified-card {
            background: #FFFFFF;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02);
            padding: 16px;
            cursor: pointer;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            will-change: transform;
            transform: translateZ(0);
          }
          .verified-card:hover {
            transform: translateY(-6px) translateZ(0);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.04);
          }
          .verified-card-img-wrapper {
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            justifyContent: center;
            overflow: hidden;
            border-radius: 8px;
            background: #F9FAFB;
            padding: 12px;
            aspect-ratio: 4 / 3; /* Layout shifts container lock */
          }
          .verified-card-img {
            width: 100%;
            height: 100%;
            max-height: 480px;
            object-fit: contain;
            border-radius: 4px;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .verified-card:hover .verified-card-img {
            transform: scale(1.02);
          }
        `}</style>
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
              name: 'Abraham Anijdar',
              title: 'CEO of WebTeamManagement',
              videoUrl: 'https://res.cloudinary.com/dpeq00iqq/video/upload/v1782216715/Video2_compressed_svrrfv.mp4',
              thumbnail: 'https://res.cloudinary.com/dpeq00iqq/video/upload/v1782216715/Video2_compressed_svrrfv.jpg',
            },
            {
              name: 'Marlon Rogers',
              title: 'One Base Media - UK',
              videoUrl: 'https://res.cloudinary.com/dpeq00iqq/video/upload/v1782547676/512_ultra_ykgopq.mp4',
              thumbnail: 'https://res.cloudinary.com/dpeq00iqq/video/upload/v1782547676/512_ultra_ykgopq.jpg',
            }
          ].map((video, idx) => (
            <div
              key={idx}
              className="premium-video-card"
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
                <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.white, marginBottom: '4px' }}>
                  {video.name}
                </h3>
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
          @media (min-width: 1024px) {
            .testimonial-video-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .video-thumbnail-img {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .video-play-overlay {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .testimonial-video-grid > div:hover .video-thumbnail-img {
            transform: scale(1.03);
          }
          .testimonial-video-grid > div:hover .video-play-overlay {
            background-color: ${C.yellow} !important;
            transform: translate(-50%, -50%) scale(1.08) !important;
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
            <div style={{ background: C.white, textAlign: 'left', color: C.navy, display: 'flex', flexDirection: 'column', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '240px', background: '#eef2f6', overflow: 'hidden' }}>
                <img src={case1} alt="SEO Growth Case Study Infrastructure Result" width="600" height="240" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ background: C.yellow, color: C.navy, padding: '4px 10px', fontSize: '9px', fontWeight: 'bold', fontFamily: F.display, alignSelf: 'flex-start', borderRadius: '2px' }}>CASE 01</span>
                <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', marginTop: '12px', marginBottom: '12px', lineHeight: 1.3 }}>
                  Agency Scaled from 3 to 47 Clients in 6 Months
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  <strong>Challenge:</strong> Slow organic lead growth and high ad costs.<br />
                  <strong>Solution:</strong> Onboarded our professional SEO leads package.<br />
                  <strong>Results:</strong> Closed 44 retainers with average values of $2k/mo.
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ background: C.lightBg, padding: '10px', flex: 1, textAlign: 'center', borderRadius: '4px' }}>
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '18px', color: C.blue }}>+1400%</span>
                    <span style={{ fontSize: '9px', color: '#888' }}>Client Growth</span>
                  </div>
                  <div style={{ background: C.lightBg, padding: '10px', flex: 1, textAlign: 'center', borderRadius: '4px' }}>
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '18px', color: C.blue }}>$88k</span>
                    <span style={{ fontSize: '9px', color: '#888' }}>New MRR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div style={{ background: C.white, textAlign: 'left', color: C.navy, display: 'flex', flexDirection: 'column', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '240px', background: '#eef2f6', overflow: 'hidden' }}>
                <img src={case2} alt="Web design revenue growth client optimization map" width="600" height="240" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ background: C.yellow, color: C.navy, padding: '4px 10px', fontSize: '9px', fontWeight: 'bold', fontFamily: F.display, alignSelf: 'flex-start', borderRadius: '2px' }}>CASE 02</span>
                <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '18px', marginTop: '12px', marginBottom: '12px', lineHeight: 1.3 }}>
                  Web Design Firm Doubled Revenue in 90 Days
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  <strong>Challenge:</strong> High staff costs spent dialing cold leads.<br />
                  <strong>Solution:</strong> Implemented pre-booked appointment leads.<br />
                  <strong>Results:</strong> Show up rate exceeded 80%, booking 14 new custom designs.
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ background: C.lightBg, padding: '10px', flex: 1, textAlign: 'center', borderRadius: '4px' }}>
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '18px', color: C.blue }}>2x</span>
                    <span style={{ fontSize: '9px', color: '#888' }}>Revenue</span>
                  </div>
                  <div style={{ background: C.lightBg, padding: '10px', flex: 1, textAlign: 'center', borderRadius: '4px' }}>
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
          gap: '12px',
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
              letterSpacing: '0.5px',
              border: 'none',
              borderRadius: '4px',
            }}>
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* [H] LEAVE A REVIEW FORM */}
      <section style={{ background: C.navy, padding: '48px 24px', textAlign: 'center', borderTop: `3px solid ${C.yellow}` }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: C.deepNavy, border: `2px solid ${C.blue}`, padding: '32px 24px', textAlign: 'left', borderRadius: '4px' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.yellow, marginBottom: '8px', textAlign: 'center' }}>
            Leave a Review
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', textAlign: 'center' }}>
            Share your experience working with SEO Submit Web.
          </p>

          <ReviewForm />
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

      {/* Zoom Image Modal / Lightbox */}
      {zoomedImage && (
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
            cursor: 'zoom-out',
            backdropFilter: 'blur(8px)',
          }}
          onClick={() => setZoomedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setZoomedImage(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: C.white,
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100000,
              lineHeight: '1',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = C.yellow;
              e.currentTarget.style.color = C.navy;
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = C.white;
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Close image zoom"
          >
            &times;
          </button>

          {/* Image Wrapper */}
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'default',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={zoomedImage.url}
              alt={zoomedImage.name}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '8px',
                border: '2px solid rgba(255, 255, 255, 0.1)',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;