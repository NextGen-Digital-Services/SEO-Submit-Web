import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// COLOR TOKENS
const C = {
  navy: '#0A1628',
  blue: '#0057FF',
  yellow: '#FFD600',
  white: '#FFFFFF',
  lightBg: '#F4F6FF',
  darkCard: '#1a2a4a',
  deepNavy: '#061020',
  blueHover: '#0040CC',
};

// FONT TOKENS
const F = {
  display: "'Montserrat', sans-serif",
  body: "'Inter', sans-serif",
};

// ROUTE CHANGE SCROLL TO TOP
function ScrollToTopOnMount() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// SCROLL TO TOP FLOATING BUTTON
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top — SEO Submit Web"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        background: C.yellow,
        color: C.navy,
        border: 'none',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1000,
        borderRadius: 0,
      }}
    >
      <i className="ti ti-arrow-up" style={{ fontSize: '20px', fontWeight: 'bold' }} />
    </button>
  );
}

// REUSABLE FORM HANDLER FUNCTION
const handleFormSubmit = (formData, formType) => {
  // BUILD WHATSAPP MESSAGE
  const waMessage = `
🔔 NEW LEAD FROM SEO SUBMIT WEB WEBSITE

📋 Form Type: ${formType}
👤 Name: ${formData.name || (formData.firstName || formData.lastName ? (formData.firstName || '') + ' ' + (formData.lastName || '') : '') || 'Not provided'}
📧 Email: ${formData.email || 'Not provided'}
📱 Phone: ${formData.phone || 'Not provided'}
🏢 Company: ${formData.company || 'Not provided'}
🎯 Service Interested In: ${formData.service || 'Not provided'}
💰 Budget: ${formData.budget || 'Not provided'}
💬 Message: ${formData.message || 'Not provided'}

⏰ Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
🌐 Source: Website Contact Form
  `.trim();

  // OPEN WHATSAPP
  const encodedMessage = encodeURIComponent(waMessage);
  const whatsappURL = `https://wa.me/917738907685?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');

  // SEND EMAIL VIA EMAILJS
  if (window.emailjs) {
    window.emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        form_type: formType,
        from_name: formData.name || (formData.firstName || formData.lastName ? (formData.firstName || '') + ' ' + (formData.lastName || '') : '') || 'Not provided',
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: formData.service || 'Not provided',
        budget: formData.budget || 'Not provided',
        message: formData.message || 'Not provided',
        to_email: 'Seosubmitweb@gmail.com',
        reply_to: formData.email,
      }
    ).then(() => {
      console.log('Email sent successfully');
    }).catch((error) => {
      console.log('Email error:', error);
    });
  }
};

// SUCCESS MESSAGE COMPONENT
const SuccessMessage = ({ onClose }) => (
  <div style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.7)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{
      background: '#fff',
      padding: '48px 40px',
      maxWidth: '480px',
      width: '90%',
      textAlign: 'center',
      borderTop: '6px solid #FFD600',
    }}>
      <div style={{
        width: '72px', height: '72px',
        background: '#FFD600',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
      }}>
        <i className="ti ti-check" style={{ fontSize: '36px', color: '#0A1628' }}></i>
      </div>
      <h2 style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 900, fontSize: '22px',
        color: '#0A1628', marginBottom: '12px',
      }}>
        Message Sent Successfully!
      </h2>
      <p style={{
        fontSize: '14px', color: '#555',
        lineHeight: 1.7, marginBottom: '8px',
      }}>
        Thank you for contacting SEO Submit Web.
        We have received your enquiry and will 
        get back to you within 2 hours.
      </p>
      <p style={{
        fontSize: '13px', color: '#0057FF',
        fontWeight: 600, marginBottom: '24px',
      }}>
        WhatsApp message also opened — 
        send it to reach us instantly!
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <button
          onClick={onClose}
          style={{
            background: '#0A1628', color: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800, fontSize: '12px',
            letterSpacing: '1px', padding: '12px 24px',
            border: 'none', cursor: 'pointer',
          }}>
          CLOSE
        </button>
        <a
          href="https://wa.me/917738907685"
          target="_blank"
          rel="noreferrer"
          style={{
            background: '#25D366', color: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800, fontSize: '12px',
            letterSpacing: '1px', padding: '12px 24px',
            textDecoration: 'none', display: 'inline-block',
          }}>
          💬 OPEN WHATSAPP
        </a>
      </div>
    </div>
  </div>
);

// FLOATING WHATSAPP BUTTON
const WhatsAppFloat = () => (
  <a
    href="https://wa.me/917738907685?text=Hi%20SEO%20Submit%20Web%2C%20I%20am%20interested%20in%20your%20leads.%20Please%20send%20me%20more%20information."
    target="_blank"
    rel="noreferrer"
    style={{
      position: 'fixed',
      bottom: '80px',
      right: '24px',
      width: '56px',
      height: '56px',
      background: '#25D366',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9998,
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(37,211,102,0.4)',
    }}>
    <i className="ti ti-brand-whatsapp" 
       style={{ fontSize: '28px', color: '#fff' }}></i>
  </a>
);

// Eyebrow Component
const Eyebrow = ({ label, labelColor = C.blue, barColor = C.yellow }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
    <div style={{ width: '30px', height: '3px', background: barColor }} />
    <span style={{
      fontFamily: F.display,
      fontWeight: '800',
      fontSize: '10px',
      letterSpacing: '3px',
      color: labelColor,
      textTransform: 'uppercase',
    }}>
      {label}
    </span>
  </div>
);

// Section Wrapper
const SectionWrapper = ({ id, bg = C.white, children, style = {} }) => (
  <section id={id} style={{ background: bg, padding: '48px 24px', width: '100%', ...style }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      {children}
    </div>
  </section>
);

const routeTitles = {
  '/': 'SEO Submit Web — Buy Exclusive SEO Leads',
  '/about': 'About Us — SEO Submit Web',
  '/seo-leads': 'Buy SEO Leads — SEO Submit Web',
  '/web-design-leads': 'Web Design Leads — SEO Submit Web',
  '/appointment-leads': 'Appointment Leads — SEO Submit Web',
  '/blog': 'Blog — SEO Submit Web',
  '/testimonials': 'Testimonials — SEO Submit Web',
  '/contact': 'Contact Us — SEO Submit Web',
};

const RouteTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = routeTitles[pathname] || 'SEO Submit Web';
  }, [pathname]);

  return null;
};

// NAVBAR COMPONENT
const Navbar = ({ isMobile }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'SEO Leads', path: '/seo-leads' },
    { label: 'Web Design Leads', path: '/web-design-leads' },
    { label: 'Appointment Leads', path: '/appointment-leads' },
    { label: 'Blog', path: '/blog' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 999,
      background: C.navy,
      borderBottom: `3px solid ${C.yellow}`,
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
    }}>
      <Link to="/" style={{
        fontFamily: F.display,
        fontWeight: 900,
        fontSize: '20px',
        letterSpacing: '1px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
      }}>
        <span style={{ color: C.yellow }}>SEO SUBMIT</span>
        <span style={{ color: C.white }}>WEB</span>
      </Link>

      {!isMobile && (
        <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
          {links.map((link, idx) => {
            const isActive = location.pathname === link.path;
            const isHovered = hoveredIndex === idx;
            return (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  color: C.white,
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '0 10px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRight: '1px solid rgba(255,255,255,0.1)',
                  textDecoration: 'none',
                  fontFamily: F.body,
                  background: (isActive || isHovered) ? C.blue : 'transparent',
                  transition: 'background 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      {/* Group right-side actions to maintain spacing */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* WhatsApp icon link */}
        <a
          href="https://wa.me/917738907685"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp Us"
          style={{
            width: '40px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#25D366',
            textDecoration: 'none',
            marginRight: '8px',
          }}
        >
          <i className="ti ti-brand-whatsapp" style={{ fontSize: '22px', color: '#fff' }} />
        </a>

        <button
          onClick={() => navigate('/contact')}
          style={{
            background: C.yellow,
            color: C.navy,
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: '11px',
            padding: '10px 14px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: 0,
            letterSpacing: '1px',
          }}
        >
          FREE SAMPLE
        </button>
      </div>
    </nav>
  );
};

// FOOTER COMPONENT
const Footer = ({ isMobile }) => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* Top Section */}
      <div style={{
        background: C.deepNavy,
        borderTop: `3px solid ${C.blue}`,
        padding: '48px 24px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
        gap: '32px',
      }}>
        {/* Col 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontFamily: F.display, fontWeight: 900, fontSize: '20px', letterSpacing: '1px' }}>
            <span style={{ color: C.yellow }}>SEO SUBMIT</span>
            <span style={{ color: C.white }}>WEB</span>
          </div>
          <p style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '280px' }}>
            India's #1 SEO Lead Generation Company Since 2009. Supplying verified high-converting opportunities.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.white, fontFamily: F.body }}>
              <div style={{ width: '24px', height: '24px', background: C.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navy, borderRadius: 0 }}>
                <i className="ti ti-phone" />
              </div>
              <a href="tel:+917738907685" style={{ color: 'inherit', textDecoration: 'none' }}>
                +91 77389 07685
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.white, fontFamily: F.body }}>
              <div style={{ width: '24px', height: '24px', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, borderRadius: 0 }}>
                <i className="ti ti-brand-whatsapp" />
              </div>
              <span>
                <strong>WhatsApp Us: </strong>
                <a href="https://wa.me/917738907685" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  +91 77389 07685
                </a>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.white, fontFamily: F.body }}>
              <div style={{ width: '24px', height: '24px', background: C.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navy, borderRadius: 0 }}>
                <i className="ti ti-mail" />
              </div>
              <a href="mailto:Seosubmitweb@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                Seosubmitweb@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.white, fontFamily: F.body }}>
              <div style={{ width: '24px', height: '24px', background: C.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.navy, borderRadius: 0 }}>
                <i className="ti ti-map-pin" />
              </div>
              <span>123 Business Hub, Sector 18, Delhi NCR — 110001</span>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '12px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Services
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/seo-leads" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>SEO Leads</Link>
            <Link to="/web-design-leads" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Web Design Leads</Link>
            <Link to="/appointment-leads" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Appointment Leads</Link>
          </div>
        </div>

        {/* Col 3 */}
        <div>
          <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '12px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Company
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About</Link>
            <Link to="/blog" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Blog</Link>
            <Link to="/testimonials" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Testimonials</Link>
            <Link to="/contact" style={{ fontFamily: F.body, fontSize: '12px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>

        {/* Col 4 */}
        <div>
          <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '12px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            Follow Us
          </h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { icon: 'ti-brand-facebook', path: '#' },
              { icon: 'ti-brand-twitter', path: '#' },
              { icon: 'ti-brand-linkedin', path: '#' },
              { icon: 'ti-brand-instagram', path: '#' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.path}
                style={{
                  width: '44px',
                  height: '44px',
                  background: C.yellow,
                  color: C.navy,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '20px',
                }}
              >
                <i className={`ti ${social.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        background: '#040d1a',
        padding: '14px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '10px',
      }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: F.body }}>
          © 2025 SEO Submit Web. All Rights Reserved.
        </span>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: F.body }}>Privacy Policy</a>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>|</span>
          <a href="#" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: F.body }}>Terms</a>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>|</span>
          <a href="#" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontFamily: F.body }}>Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// PAGE 1: HOME PAGE ( / )
// ==========================================
const HomePage = ({ isMobile }) => {
  const navigate = useNavigate();
  const [heroForm, setHeroForm] = useState({ name: '', email: '', phone: '', company: '', service: '' });
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroErrors, setHeroErrors] = useState({});
  const [heroLoading, setHeroLoading] = useState(false);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!heroForm.name.trim()) {
      errors.name = "⚠ Please enter your full name so we can address you properly";
    }
    if (!heroForm.email.trim()) {
      errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(heroForm.email)) {
        errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
      }
    }
    if (!heroForm.phone.trim()) {
      errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
    } else {
      const phoneRegex = /^[\d\s\+\-\(\)]{8,15}$/;
      if (!phoneRegex.test(heroForm.phone)) {
        errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
      }
    }
    if (!heroForm.company.trim()) {
      errors.company = "⚠ Please enter your company or agency name";
    }
    if (!heroForm.service) {
      errors.service = "⚠ Please select which type of leads you need";
    }

    if (Object.keys(errors).length > 0) {
      setHeroErrors(errors);
      return;
    }

    setHeroErrors({});
    setHeroLoading(true);

    setTimeout(() => {
      setHeroLoading(false);
      handleFormSubmit(heroForm, 'Hero - Free Sample Request');
      setHeroSuccess(true);
      setHeroForm({ name: '', email: '', phone: '', company: '', service: '' });
    }, 1000);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* [SECTION A] HERO */}
      <section style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', minHeight: '500px', width: '100%' }}>
        {/* Left Panel */}
        <div style={{
          flex: 1,
          padding: isMobile ? '32px 16px' : '56px 40px',
          background: `linear-gradient(135deg, #0057FF 0%, #0A1628 65%)`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left',
        }}>
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
            alignSelf: 'flex-start',
            borderRadius: 0,
          }}>
            INDIA'S #1 SEO LEAD GENERATION COMPANY
          </div>
          <h1 style={{
            fontFamily: F.display,
            fontWeight: 900,
            fontSize: isMobile ? '30px' : '40px',
            color: C.white,
            lineHeight: 1.15,
            marginBottom: '14px',
          }}>
            Get Exclusive <span style={{ color: C.yellow }}>SEO & Web Design</span> Leads That Actually Convert Into Paying Clients
          </h1>
          <p style={{
            fontFamily: F.body,
            fontSize: '15px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.8,
            marginBottom: '24px',
            maxWidth: '480px',
          }}>
            Real-time. Exclusive. Guaranteed. 16+ years supplying premium verified leads to SEO agencies and web design firms across India, USA, UK, Australia & Canada. Every lead is exclusive to you — never resold.
          </p>

          {/* Trust Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {["✓ 100% Exclusive", "✓ Real-Time Delivery", "✓ Bad Lead Replaced"].map((pill) => (
              <span key={pill} style={{
                background: C.yellow,
                color: C.navy,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '11px',
                padding: '7px 16px',
                borderRadius: 0,
              }}>
                {pill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: C.yellow,
                color: C.navy,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '14px 24px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              GET FREE SAMPLES
            </button>
            <button
              onClick={() => window.location.href = 'tel:+917738907685'}
              style={{
                background: 'transparent',
                color: C.yellow,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '12px 24px',
                border: `2px solid ${C.yellow}`,
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              📞 +91 77389 07685
            </button>
            <a
              href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20SEO%20and%20Web%20Design%20Leads.%20Please%20send%20details."
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#25D366',
                color: '#fff',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '13px 24px',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>

        {/* Right Panel Form */}
        <div style={{
          width: isMobile ? '100%' : '320px',
          background: C.yellow,
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background image overlay */}
          <img 
            src="/assets/lead-generation-hero.png"
            alt="Digital marketing team reviewing incoming qualified leads"
            fetchPriority="high"
            style={{ 
              position: 'absolute', 
              top: 0, left: 0, 
              width: '100%', height: '100%', 
              objectFit: 'cover', 
              opacity: 0.15,
              zIndex: 1,
              pointerEvents: 'none'
            }} 
          />
          {/* Diagonal cut simulating line */}
          {!isMobile && (
            <div style={{
              position: 'absolute',
              left: '-32px',
              top: 0,
              bottom: 0,
              width: 0,
              height: 0,
              borderStyle: 'solid',
              borderWidth: '500px 0 0 32px',
              borderColor: 'transparent transparent transparent #0057FF',
              zIndex: 1,
              pointerEvents: 'none',
            }} />
          )}

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '4px' }}>
              Get 5 FREE Sample Leads
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '12px', color: '#333', marginBottom: '16px' }}>
              No payment. No commitment. Just proof.
            </p>

            <form onSubmit={handleHeroSubmit} className="light-form" noValidate>
              <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={heroForm.name}
                  onChange={(e) => {
                    setHeroForm({ ...heroForm, name: e.target.value });
                    if (heroErrors.name) setHeroErrors({ ...heroErrors, name: '' });
                  }}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: heroErrors.name ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                />
                {heroErrors.name && (
                  <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {heroErrors.name}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. rahul@youragency.com"
                  value={heroForm.email}
                  onChange={(e) => {
                    setHeroForm({ ...heroForm, email: e.target.value });
                    if (heroErrors.email) setHeroErrors({ ...heroErrors, email: '' });
                  }}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: heroErrors.email ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                />
                {heroErrors.email && (
                  <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {heroErrors.email}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={heroForm.phone}
                  onChange={(e) => {
                    setHeroForm({ ...heroForm, phone: e.target.value });
                    if (heroErrors.phone) setHeroErrors({ ...heroErrors, phone: '' });
                  }}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: heroErrors.phone ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                />
                {heroErrors.phone && (
                  <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {heroErrors.phone}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Company / Agency Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. TechSEO Solutions"
                  value={heroForm.company}
                  onChange={(e) => {
                    setHeroForm({ ...heroForm, company: e.target.value });
                    if (heroErrors.company) setHeroErrors({ ...heroErrors, company: '' });
                  }}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: heroErrors.company ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                />
                {heroErrors.company && (
                  <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {heroErrors.company}
                  </span>
                )}
              </div>

              <div style={{ marginBottom: '14px', textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Service You Need *
                </label>
                <select
                  value={heroForm.service}
                  onChange={(e) => {
                    setHeroForm({ ...heroForm, service: e.target.value });
                    if (heroErrors.service) setHeroErrors({ ...heroErrors, service: '' });
                  }}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: heroErrors.service ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                >
                  <option value="">-- Select a Service --</option>
                  <option value="SEO Leads">🔍 SEO Leads</option>
                  <option value="Web Design Leads">💻 Web Design Leads</option>
                  <option value="Appointment Leads">📅 Appointment Fixed Leads</option>
                  <option value="All Three">⭐ All Three Services</option>
                </select>
                {heroErrors.service && (
                  <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {heroErrors.service}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={heroLoading}
                style={{
                  background: heroLoading ? '#cccccc' : C.blue,
                  color: heroLoading ? '#666666' : C.white,
                  fontFamily: F.display,
                  fontWeight: 800,
                  fontSize: '12px',
                  letterSpacing: '1px',
                  padding: '13px',
                  border: 'none',
                  cursor: heroLoading ? 'not-allowed' : 'pointer',
                  width: '100%',
                  borderRadius: 0
                }}
              >
                {heroLoading ? 'SENDING...' : '🚀 SEND ME FREE SAMPLES →'}
              </button>
              {heroSuccess && <SuccessMessage onClose={() => setHeroSuccess(false)} />}
              <span style={{ display: 'block', fontSize: '10px', color: '#666', textAlign: 'center', marginTop: '10px' }}>
                🔒 Your info is 100% private & secure
              </span>
            </form>
          </div>
        </div>
      </section>

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
          { icon: 'ti-users', label: 'Clients Served', value: '5,000+' },
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
            16 Years of Delivering Leads That <span style={{ color: C.blue }}>Convert Into Revenue</span>
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.8, marginBottom: '12px' }}>
            Founded in 2009, SEO Submit Web has grown from a small lead generation startup to India's most trusted exclusive lead supplier. We work with over 5,000 SEO agencies and web design firms across 40+ countries.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.8, marginBottom: '24px' }}>
            Our proprietary lead generation technology captures real-time intent signals from business owners actively searching for digital services — delivering you hot, verified leads the moment they're generated.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
            {[
              { val: '16+ Years', lbl: 'Experience' },
              { val: '5,000+ Clients', lbl: 'Trust Us' },
              { val: '50K+ Leads', lbl: 'Delivered' },
              { val: '40+ Countries', lbl: 'Served' },
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
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="WHAT WE OFFER" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          Our <span style={{ color: C.blue }}>Three Core</span> Lead Generation Services
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            {
              img: '/assets/seo-analytics-leads.png',
              border: C.yellow,
              icon: 'ti-search',
              title: 'Exclusive SEO Leads',
              desc: 'High-intent leads from business owners looking for search engine optimization, content marketing, and link building retainers.',
              features: ['Real-time, active buyers', '100% replacement policy', 'Phone & Email verified', 'C-Level contact data'],
              path: '/seo-leads',
            },
            {
              img: '/assets/lead-generation-hero.png',
              border: C.blue,
              icon: 'ti-layout',
              title: 'Web Design Leads',
              desc: 'Fresh leads from companies requesting custom website designs, landing page optimizations, and complex e-commerce builds.',
              features: ['Complete website rebuilds', 'E-commerce scopes included', 'Direct phone confirmations', 'Budget range indicators'],
              path: '/web-design-leads',
            },
            {
              img: '/assets/seo-analytics-leads.png',
              border: C.navy,
              icon: 'ti-calendar-check',
              title: 'Appointment Fixed Leads',
              desc: 'Double your sales call count. We call and pre-book direct consultation meetings on your sales representatives\' calendars.',
              features: ['Pre-booked calendar slot', 'No cold outreach required', 'Verified budget availability', 'Decision makers only'],
              path: '/appointment-leads',
            },
          ].map((srv, idx) => (
            <div key={idx} style={{ background: C.white, border: '1px solid #dde3f0', borderTop: `4px solid ${srv.border}`, display: 'flex', flexDirection: 'column' }}>
              <img src={srv.img} alt={srv.title} style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: srv.border,
                  color: srv.border === C.yellow ? C.navy : C.white,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                }}>
                  <i className={`ti ${srv.icon}`} style={{ fontSize: '20px' }} />
                </div>
                <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '8px' }}>{srv.title}</h3>
                <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '16px', minHeight: '56px' }}>{srv.desc}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', flex: 1 }}>
                  {srv.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#444' }}>
                      <i className="ti ti-check" style={{ color: C.blue, fontSize: '12px' }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <Link to={srv.path} style={{ fontFamily: F.display, fontWeight: 700, fontSize: '11px', color: C.blue, textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  LEARN MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

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
            { num: '01', bg: C.blue, color: C.white, title: 'Request Sample', desc: 'Fill out our inquiry form. We will deliver free sample leads in 24 hours so you can inspect quality.' },
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
              { val: '$2M+', lbl: 'Revenue Generated' },
              { val: '10,000+', lbl: 'Total Leads Delivered' },
              { val: '500+', lbl: 'Active Monthly Clients' },
              { val: '40+', lbl: 'Countries Served' },
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
      <SectionWrapper bg={C.yellow}>
        <Eyebrow label="CLIENT LOVE" labelColor={C.navy} />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          Real Words From <span style={{ color: C.blue }}>Real Clients</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
          {[
            { name: 'Rajesh Sharma', comp: 'TechSEO Solutions', img: 'https://picsum.photos/seed/client1/80/80', txt: 'SEO Submit Web leads convert at 3x the rate of other lists. The phone validation ensures we talk to founders ready to buy SEO services.', badge: 'SEO Leads' },
            { name: 'Priya Kulkarni', comp: 'WebCraft Agency', img: 'https://picsum.photos/seed/client2/80/80', txt: 'I support SEO Submit Web leads fully. When a disconnected number popped up, support replaced it in 2 hours with no hassle.', badge: 'Web Design Leads' },
            { name: 'Amit Mehta', comp: 'GrowthMark Digital', img: 'https://picsum.photos/seed/client3/80/80', txt: 'Our monthly sales retainers doubled in 90 days since boarding their calendar fixed appt leads. Saving SDR calling hours.', badge: 'Appointments' },
          ].map((test, idx) => (
            <div key={idx} style={{ background: C.white, padding: '24px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <img src={test.img} alt={test.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', display: 'block', border: '3px solid #FFD600' }} />
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.navy, marginBottom: '2px' }}>{test.name}</h4>
                  <span style={{ fontSize: '11px', color: C.blue, display: 'block' }}>{test.comp}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '12px', marginBottom: '10px' }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: C.navy, lineHeight: 1.6, marginBottom: '16px', fontStyle: 'italic', flex: 1 }}>
                "{test.txt}"
              </p>
              <span style={{ alignSelf: 'flex-start', background: C.lightBg, color: C.navy, fontSize: '9px', fontWeight: 'bold', padding: '3px 8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {test.badge}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => navigate('/testimonials')}
            style={{
              background: C.navy,
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
            VIEW ALL TESTIMONIALS →
          </button>
        </div>
      </SectionWrapper>

      {/* [SECTION L] PACKAGES */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="PRICING PLANS" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '28px', color: C.navy, marginBottom: '28px' }}>
          Simple & Transparent Packages
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '24px' : 0 }}>
          {[
            { name: 'Starter', price: '199', period: '20 Leads/mo', features: ['20 Exclusive Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Email Support'], featured: false },
            { name: 'Professional', price: '449', period: '50 Leads/mo', features: ['50 Exclusive Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Dedicated Manager', 'Priority Support'], featured: true },
            { name: 'Enterprise', price: '899', period: '120 Leads/mo', features: ['120 Exclusive Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Custom Target Spec', 'Priority Support'], featured: false },
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
              marginBottom: isMobile ? '24px' : 0,
              color: C.white,
            } : {
              background: C.white,
              border: '1px solid #dde3f0',
              borderRight: isMobile ? '1px solid #dde3f0' : (idx === arr.length - 1 ? '1px solid #dde3f0' : 'none'),
              padding: '24px 20px',
              borderRadius: 0,
              marginBottom: isMobile ? '24px' : 0,
              color: C.navy,
            };

            return (
              <div key={pack.name} style={cardStyle}>
                {pack.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: C.yellow,
                    color: C.navy,
                    fontFamily: F.display,
                    fontWeight: 800,
                    fontSize: '10px',
                    letterSpacing: '1px',
                    padding: '4px 14px',
                    whiteSpace: 'nowrap',
                  }}>
                    MOST POPULAR
                  </div>
                )}
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
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '32px', color: C.white, marginBottom: '8px' }}>
            Stop Chasing Cold Leads. <span style={{ color: C.yellow }}>Start Closing Hot Ones.</span>
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.6 }}>
            Gain access to exclusive buyers immediately. Zero risk, instant replacement guarantee. Fill your pipeline in 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              GET FREE SAMPLE LEADS
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
              SCHEDULE A CALL
            </button>
            <a
              href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20your%20leads.%20Please%20send%20details."
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
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '13px 28px',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};


// ==========================================
// PAGE 2: ABOUT PAGE ( /about )
// ==========================================
const AboutPage = ({ isMobile }) => {
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
            The Company Behind <span style={{ color: C.yellow }}>India's Best SEO Leads</span>
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
            From a Small Startup to <span style={{ color: C.blue }}>India's #1 Lead Supplier</span>
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.9, marginBottom: '12px' }}>
            SEO Submit Web was founded in 2009 by Rahul Sharma, a digital marketing veteran who saw a massive gap in the market — agencies needed quality leads, but all available options were either shared, outdated, or simply fake. He set out to build India's first truly exclusive, real-time lead generation system.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.9, marginBottom: '12px' }}>
            What started as a 2-person operation from a small Delhi office has grown into a 50+ member powerhouse serving 5,000+ clients across 40 countries. Every lead we generate is verified by our 3-step quality control process before it reaches your inbox.
          </p>
          <p style={{ fontFamily: F.body, fontSize: '14px', color: '#444', lineHeight: 1.9, marginBottom: '24px' }}>
            Today, SEO Submit Web is the most trusted name in SEO leads, web design leads, and appointment fixed lead generation — with a track record of 50,000+ leads delivered and a 98% client retention rate.
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
              { name: 'Rahul Sharma', role: 'CEO & Founder', dep: 'Executive', border: C.yellow, img: 'https://picsum.photos/seed/team1/400/300', bio: 'Directs strategic planning. 15+ years in lead generation and growth marketing pipelines.' },
              { name: 'Priya Mehta', role: 'Head of Lead Gen', dep: 'Operations', border: C.blue, img: 'https://picsum.photos/seed/team2/400/300', bio: 'Verifies qualification protocols and guarantees replacement parameters are strictly met.' },
              { name: 'Vikram Singh', role: 'Chief Tech Officer', dep: 'Technology', border: C.navy, img: 'https://picsum.photos/seed/team3/400/300', bio: 'Maintains verification systems, secure APIs, and CRM webhook configurations.' },
              { name: 'Ananya Patel', role: 'Client Success Director', dep: 'Support', border: C.yellow, img: 'https://picsum.photos/seed/team4/400/300', bio: 'Coordinates directly with agency owners to optimize campaign setups.' },
            ].map((member, idx) => (
              <div key={idx} style={{ background: C.white, border: '1px solid #dde3f0', borderTop: `4px solid ${member.border}`, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <img src={member.img} alt={member.name} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block', border: '3px solid #FFD600' }} />
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
        <img src="https://picsum.photos/seed/office1/400/200" alt="Modern Office" loading="lazy" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
        <img src="https://picsum.photos/seed/office2/400/200" alt="Team meeting" loading="lazy" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
        <img src="https://picsum.photos/seed/office3/400/200" alt="Workspace Desk" loading="lazy" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
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
          {["TechSEO India", "WebCraft Studio", "RankBoost Agency", "DigitalFirst Co", "GrowthMark", "PixelForge"].map((client) => (
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
              alt="Arjun Kapoor"
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
              <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '14px', color: C.navy }}>Arjun Kapoor</h4>
              <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>CEO, SEOStar Agency • Sourced SEO Leads</span>
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
            GET FREE SAMPLES
          </button>
          <button onClick={() => navigate('/contact')} style={{ background: 'transparent', color: C.navy, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 28px', border: `2px solid ${C.navy}`, cursor: 'pointer', borderRadius: 0 }}>
            CONTACT US
          </button>
          <a
            href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20your%20leads.%20Please%20send%20details."
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
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '13px 28px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
            CHAT ON WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};


// ==========================================
// PAGE 3: SEO LEADS PAGE ( /seo-leads )
// ==========================================
const SeoLeadsPage = ({ isMobile }) => {
  const navigate = useNavigate();
  const [seoForm, setSeoForm] = useState({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
  const [seoSuccess, setSeoSuccess] = useState(false);
  const [seoErrors, setSeoErrors] = useState({});
  const [seoLoading, setSeoLoading] = useState(false);

  const handleSeoSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!seoForm.name.trim()) {
      errors.name = "⚠ Please enter your full name so we can address you properly";
    }
    if (!seoForm.email.trim()) {
      errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(seoForm.email)) {
        errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
      }
    }
    if (!seoForm.phone.trim()) {
      errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
    } else {
      const phoneRegex = /^[\d\s\+\-\(\)]{8,15}$/;
      if (!phoneRegex.test(seoForm.phone)) {
        errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
      }
    }
    if (!seoForm.company.trim()) {
      errors.company = "⚠ Please enter your company or agency name";
    }
    if (!seoForm.budget) {
      errors.budget = "⚠ Please select your monthly budget so we can recommend the right package";
    }

    if (Object.keys(errors).length > 0) {
      setSeoErrors(errors);
      return;
    }

    setSeoErrors({});
    setSeoLoading(true);

    setTimeout(() => {
      setSeoLoading(false);
      handleFormSubmit(seoForm, 'SEO Leads Page - Enquiry');
      setSeoSuccess(true);
      setSeoForm({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
    }, 1000);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* [A] PAGE HERO */}
      <section style={{
        background: `linear-gradient(135deg, ${C.blue} 0%, ${C.navy} 100%)`,
        padding: isMobile ? '32px 16px' : '48px 24px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '32px',
      }}>
        {/* Left Column */}
        <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            Buy <span style={{ color: C.yellow }}>Exclusive Real-Time</span> SEO Leads That Convert Into Paying Clients
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
              }}>
                ✓ {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 24px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
              GET FREE SAMPLES
            </button>
            <button onClick={() => window.location.href = '#seo-pricing'} style={{ background: 'transparent', color: C.yellow, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 24px', border: `2px solid ${C.yellow}`, cursor: 'pointer', borderRadius: 0 }}>
              VIEW PRICING
            </button>
            <a
              href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20SEO%20Leads.%20Please%20send%20details."
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
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '13px 24px',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
              CHAT ON WHATSAPP
            </a>
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
            <img src="/assets/seo-analytics-leads.png" alt="SEO analytics and high-intent lead dashboard" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.15 }} />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            {[
              { val: '15,000+', lbl: 'SEO Leads Sold' },
              { val: '92%', lbl: 'Contact Rate' },
              { val: '4.8★', lbl: 'Average Rating' },
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
            <img src="/assets/seo-analytics-leads.png" alt="SEO lead qualification dashboard" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px', borderBottom: `2px solid ${C.navy}`, paddingBottom: '6px' }}>
                Verified SEO Lead Mockup
              </h4>
              <div style={{ display: 'grid', gap: '8px', fontSize: '12px', fontFamily: F.body }}>
                <div><strong>First Name:</strong> Rajesh</div>
                <div><strong>Last Name:</strong> Sharma</div>
                <div><strong>Email:</strong> r.sharma@techseosol.com</div>
                <div><strong>Phone:</strong> +91 77389 07685</div>
                <div><strong>Company:</strong> TechSEO Solutions</div>
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
            { name: 'Basic SEO', price: '199', period: '20 Leads/mo', features: ['20 SEO Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Email Support'] },
            { name: 'Standard SEO', price: '449', period: '50 Leads/mo', features: ['50 SEO Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'CRM Webhook Integration', 'Dedicated Manager'], featured: true },
            { name: 'Premium SEO', price: '899', period: '120 Leads/mo', features: ['120 SEO Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'CRM Integration', 'Priority 24/7 Phone Support'] },
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
            { name: 'Sunita Patel', comp: 'PixelForge Studio', img: 'https://picsum.photos/seed/seoclient1/80/80', txt: 'The leads are extremely hot. We closed 4 deals from our first batch of 20 SEO leads. Superb service.' },
            { name: 'Vikram Nair', comp: 'RankBoost India', img: 'https://picsum.photos/seed/seoclient2/80/80', txt: 'We tried several scrapers and list providers. SEO Submit Web leads are verified, saving our reps hours of cold-calling.' },
            { name: 'Arjun Kapoor', comp: 'SEOStar Agency', img: 'https://picsum.photos/seed/seoclient3/80/80', txt: 'Since swapping to SEO Submit Web leads, we went from 3 to 27 SEO clients in just 6 months.' },
          ].map((test, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.1)', padding: '24px 20px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={test.img} alt={test.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', display: 'block', marginBottom: '12px', border: '3px solid #FFD600' }} />
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
          <form onSubmit={handleSeoSubmit} style={{ display: 'grid', gap: '12px' }} noValidate>
            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Your Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Priya Mehta"
                value={seoForm.name}
                onChange={(e) => {
                  setSeoForm({ ...seoForm, name: e.target.value });
                  if (seoErrors.name) setSeoErrors({ ...seoErrors, name: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: seoErrors.name ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {seoErrors.name && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {seoErrors.name}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Business Email Address *
              </label>
              <input
                type="email"
                placeholder="e.g. priya@seoagency.com"
                value={seoForm.email}
                onChange={(e) => {
                  setSeoForm({ ...seoForm, email: e.target.value });
                  if (seoErrors.email) setSeoErrors({ ...seoErrors, email: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: seoErrors.email ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {seoErrors.email && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {seoErrors.email}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={seoForm.phone}
                onChange={(e) => {
                  setSeoForm({ ...seoForm, phone: e.target.value });
                  if (seoErrors.phone) setSeoErrors({ ...seoErrors, phone: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: seoErrors.phone ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {seoErrors.phone && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {seoErrors.phone}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Your SEO Agency Name
              </label>
              <input
                type="text"
                placeholder="e.g. RankBoost Digital Agency"
                value={seoForm.company}
                onChange={(e) => {
                  setSeoForm({ ...seoForm, company: e.target.value });
                  if (seoErrors.company) setSeoErrors({ ...seoErrors, company: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: seoErrors.company ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {seoErrors.company && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {seoErrors.company}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Monthly Lead Budget *
              </label>
              <select
                value={seoForm.budget}
                onChange={(e) => {
                  setSeoForm({ ...seoForm, budget: e.target.value });
                  if (seoErrors.budget) setSeoErrors({ ...seoErrors, budget: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: seoErrors.budget ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              >
                <option value="">-- How much do you want to invest? --</option>
                <option value="Starter $199">Starter — $199/month (20 Leads)</option>
                <option value="Standard $449">Standard — $449/month (50 Leads)</option>
                <option value="Premium $899">Premium — $899/month (120 Leads)</option>
                <option value="Custom">Custom — I need a custom package</option>
              </select>
              {seoErrors.budget && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {seoErrors.budget}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Any Specific Requirements?
              </label>
              <textarea
                placeholder="e.g. I need SEO leads from USA and Canada, with a monthly budget of $5,000+. Please share sample leads first."
                rows={3}
                value={seoForm.message}
                onChange={(e) => setSeoForm({ ...seoForm, message: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0, resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              disabled={seoLoading}
              style={{
                background: seoLoading ? '#cccccc' : C.yellow,
                color: seoLoading ? '#666666' : C.navy,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '14px',
                border: 'none',
                cursor: seoLoading ? 'not-allowed' : 'pointer',
                borderRadius: 0
              }}
            >
              {seoLoading ? 'SENDING...' : '🔍 GET SEO LEADS NOW →'}
            </button>
            {seoSuccess && <SuccessMessage onClose={() => setSeoSuccess(false)} />}
          </form>
        </div>
      </section>

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
          <a
            href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20SEO%20Leads.%20Please%20send%20details."
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
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '13px 24px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
            CHAT ON WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};


// ==========================================
// PAGE 4: WEB DESIGN LEADS PAGE ( /web-design-leads )
// ==========================================
const WebDesignLeadsPage = ({ isMobile }) => {
  const navigate = useNavigate();
  const [webForm, setWebForm] = useState({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
  const [webSuccess, setWebSuccess] = useState(false);
  const [webErrors, setWebErrors] = useState({});
  const [webLoading, setWebLoading] = useState(false);

  const handleWebSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!webForm.name.trim()) {
      errors.name = "⚠ Please enter your full name so we can address you properly";
    }
    if (!webForm.email.trim()) {
      errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(webForm.email)) {
        errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
      }
    }
    if (!webForm.phone.trim()) {
      errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
    } else {
      const phoneRegex = /^[\d\s\+\-\(\)]{8,15}$/;
      if (!phoneRegex.test(webForm.phone)) {
        errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
      }
    }
    if (!webForm.company.trim()) {
      errors.company = "⚠ Please enter your company or agency name";
    }
    if (!webForm.budget) {
      errors.budget = "⚠ Please select your monthly budget so we can recommend the right package";
    }

    if (Object.keys(errors).length > 0) {
      setWebErrors(errors);
      return;
    }

    setWebErrors({});
    setWebLoading(true);

    setTimeout(() => {
      setWebLoading(false);
      handleFormSubmit(webForm, 'Web Design Leads Page - Enquiry');
      setWebSuccess(true);
      setWebForm({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
    }, 1000);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* [A] PAGE HERO */}
      <section style={{
        background: `linear-gradient(135deg, ${C.navy} 0%, ${C.blue} 100%)`,
        padding: isMobile ? '32px 16px' : '48px 24px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '32px',
      }}>
        {/* Left Column */}
        <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
          }}>
            WEB DESIGN LEADS
          </div>
          <h1 style={{
            fontFamily: F.display,
            fontWeight: 900,
            fontSize: isMobile ? '28px' : '38px',
            color: C.white,
            lineHeight: 1.15,
            marginBottom: '14px',
          }}>
            Exclusive <span style={{ color: C.yellow }}>Web Design Leads</span> — Connect With Businesses Who Need A New Website
          </h1>
          <p style={{
            fontFamily: F.body,
            fontSize: '14px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.7,
            marginBottom: '24px',
            maxWidth: '540px',
          }}>
            Deliver solutions directly to companies seeking new builds, redesigns, e-commerce stores, and custom software.
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {["E-Commerce Focus", "Redesigns", "C-Level Data", "ACMA Compliant"].map((t) => (
              <span key={t} style={{
                background: 'rgba(255,255,255,0.15)',
                color: C.white,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '11px',
                padding: '6px 14px',
              }}>
                ✓ {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 24px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
              GET FREE SAMPLES
            </button>
            <button onClick={() => window.location.href = '#web-pricing'} style={{ background: 'transparent', color: C.yellow, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 24px', border: `2px solid ${C.yellow}`, cursor: 'pointer', borderRadius: 0 }}>
              VIEW PRICING
            </button>
            <a
              href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20Web%20Design%20Leads.%20Please%20send%20details."
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
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '13px 24px',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>

        {/* Right Stats Panel */}
        <div style={{
          width: isMobile ? '100%' : '320px',
          background: C.blue,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          border: `2px solid ${C.yellow}`,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '280px',
        }}>
          {/* Background Image */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <img
              src="/assets/lead-generation-hero.png"
              alt="Web Design Background"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.15 }}
            />
          </div>

          <div style={{ position: 'relative', zIndex: 2, padding: '24px' }}>
            {[
              { val: '12,000+', lbl: 'Web Leads Sold' },
              { val: '89%', lbl: 'Contact Rate' },
              { val: '4.7★', lbl: 'Average Rating' },
              { val: 'Real-Time', lbl: 'Delivery Pipeline' },
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center', borderBottom: idx !== 3 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingBottom: '12px', marginBottom: idx !== 3 ? '12px' : 0 }}>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white }}>{item.val}</span>
                <span style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '9px', color: C.yellow, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [B] WHAT YOU RECEIVE */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="LEAD OUTLINE" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          What Information Do You Receive?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '32px' }}>
          <div>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
              Every lead goes through a verification system. Our intake forms capture specific web development goals to ensure you can provide a detailed proposal right away.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
              {[
                'Business Name & Sector',
                'Contact Person & Role',
                'Email Address Verified',
                'Direct Contact Number',
                'Current Website (if any)',
                'Budget Range Specified',
                'Project Scope Detail',
                'Timeline Expectations',
              ].map((bullet) => (
                <div key={bullet} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: C.navy, fontFamily: F.body }}>
                  <i className="ti ti-check" style={{ color: C.blue, fontSize: '16px', fontWeight: 'bold' }} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Lead Card Mockup */}
          <div style={{ background: C.white, border: `3px solid ${C.blue}`, borderRadius: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <img src="/assets/lead-generation-hero.png" alt="Agency team discussing website design projects" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '20px' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '13px', color: C.blue, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px', borderBottom: `2px solid ${C.blue}`, paddingBottom: '6px' }}>
                Verified Web Lead
              </h4>
              <div style={{ display: 'grid', gap: '8px', fontSize: '12px', fontFamily: F.body }}>
                <div><strong>Business Name:</strong> Summit Dental Care</div>
                <div><strong>Contact Name:</strong> Dr. Sarah Jenkins</div>
                <div><strong>Email:</strong> dr.sarah@summitdental.com</div>
                <div><strong>Phone:</strong> +1 (312) 555-0982</div>
                <div><strong>Current Website:</strong> summitdentalsite.com</div>
                <div><strong>Budget Range:</strong> $8,000 - $12,000</div>
                <div><strong>Project Type:</strong> Complete Rebuild & CRM</div>
                <div><strong>Timeline:</strong> 4 - 6 weeks</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* [C] WEB DESIGN LEAD TYPES */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="LEAD CATEGORIES" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Types of Web Design Leads We Supply
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { border: C.yellow, title: 'New Website Builds', desc: 'Startups and service providers seeking their very first online site.', price: '$$' },
            { border: C.blue, title: 'Redesign Projects', desc: 'Established firms looking to overhaul their outdated UI/UX designs.', price: '$$$' },
            { border: C.navy, title: 'E-Commerce Websites', desc: 'Retailers scaling into Shopify, WooCommerce, or custom checkouts.', price: '$$$$' },
            { border: C.yellow, title: 'Landing Page Projects', desc: 'High-growth teams requiring high-performance landing pages.', price: '$' },
          ].map((cat, idx) => (
            <div key={idx} style={{ background: C.white, borderTop: `4px solid ${cat.border}`, border: '1px solid #dde3f0', padding: '20px', display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.navy, marginBottom: '8px' }}>{cat.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555', lineHeight: 1.6, marginBottom: '14px', flex: 1 }}>{cat.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: C.blue }}>Value: {cat.price}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [D] WHY WEB DESIGN LEADS */}
      <SectionWrapper bg={C.navy}>
        <Eyebrow label="ADVANTAGES" labelColor={C.yellow} />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          Why Buy Web Design Leads From Us?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { border: C.yellow, title: 'High Order Values', desc: 'Our campaigns filter out low-cost inquiries, focusing on mid-market scopes.' },
            { border: C.blue, title: 'Fresh Inquiries Only', desc: 'You receive prospects the minute they complete our questionnaire.' },
            { border: C.blue, title: '100% Replacement policy', desc: 'Invalid contact details get replaced right away, keeping your queue full.' },
            { border: C.yellow, title: 'Verified Budget Allocation', desc: 'We verify funding status during intake calls so you do not pitch dry leads.' },
            { border: C.yellow, title: 'Direct Access', desc: 'No procurement managers. Talk directly with business owners who can sign contracts.' },
            { border: C.blue, title: 'Custom CRM Push', desc: 'Seamlessly push fields straight into HubSpot, Salesforce, or custom webhooks.' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: C.navy, borderLeft: `3px solid ${item.border}`, padding: '20px' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.white, marginBottom: '6px' }}>{item.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [E] PRICING */}
      <SectionWrapper bg={C.yellow} id="web-pricing">
        <Eyebrow label="PRICING PLANS" labelColor={C.navy} />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Web Design Lead Packages
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '24px' : 0 }}>
          {[
            { name: 'Starter Web', price: '199', period: '20 Leads/mo', features: ['20 Web Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'Email Support'] },
            { name: 'Professional Web', price: '449', period: '50 Leads/mo', features: ['50 Web Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'CRM Webhook', 'Dedicated Manager'], featured: true },
            { name: 'Enterprise Web', price: '899', period: '120 Leads/mo', features: ['120 Web Leads', 'Real-Time Delivery', 'Bad Lead Replacement', 'CRM Webhook', '24/7 Priority Phone Support'] },
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

      {/* [F] PROCESS */}
      <SectionWrapper bg={C.white}>
        <Eyebrow label="PROCESS" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '32px' }}>
          Our Web Lead Verification Flow
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)', gap: '16px' }}>
          {[
            { step: '1', title: 'Ad Engagement', desc: 'Businesses interact with our web design audits.' },
            { step: '2', title: 'Scope Details', desc: 'They specify pages, timeline, and features.' },
            { step: '3', title: 'Verification', desc: 'We verify details with direct phone validations.' },
            { step: '4', title: 'CRM Delivery', desc: 'Verified records route straight to your CRM.' },
            { step: '5', title: 'Pitch & Close', desc: 'You deliver the custom mockups and sign the client.' },
          ].map((item) => (
            <div key={item.step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: C.blue,
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
              <p style={{ fontFamily: F.body, fontSize: '11px', color: '#555', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [G] FAQ */}
      <SectionWrapper bg={C.lightBg}>
        <Eyebrow label="FAQ" />
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Frequently Asked Questions About Web Design Leads
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '20px' }}>
          {[
            { q: 'How are web design leads generated?', a: 'Via search marketing targeting business owners who search for custom development.' },
            { q: 'What is the average project value?', a: 'Most project values range between $3,000 and $15,000.' },
            { q: 'Do you replace incorrect contacts?', a: 'Yes. Any lead with disconnected lines or bad emails gets replaced.' },
            { q: 'Can I integrate my CRM?', a: 'Yes. Webhooks can push leads to HubSpot, Salesforce, Zoho, etc.' },
            { q: 'Are e-commerce leads included?', a: 'Yes. We categorize builds, e-commerce, and landing page scopes separately.' },
            { q: 'Are these leads exclusive?', a: 'Yes. Every web design lead is sold exactly once.' },
            { q: 'How long does delivery take?', a: 'Most leads route in under 2 minutes after validation.' },
            { q: 'Can I set geo filters?', a: 'Yes. Targeting options are available on enterprise campaigns.' },
          ].map((faq, idx) => (
            <div key={idx} style={{ padding: '16px', borderLeft: `3px solid ${C.blue}`, background: C.white, textAlign: 'left' }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.navy, marginBottom: '6px' }}>{faq.q}</h4>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [H] TESTIMONIALS STRIP */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.white, marginBottom: '28px' }}>
          What Web Designers Say
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { name: 'Priya Kulkarni', comp: 'WebCraft Agency', txt: 'The project details are incredibly thorough. We knew the client\'s budget and timeline before the initial discovery call.' },
            { name: 'Meera Joshi', comp: 'ContentCraft', txt: 'Their customer support is stellar. Any disconnected number gets replaced in our dashboard within a few hours.' },
            { name: 'Deepa Iyer', comp: 'NetBuild Studio', txt: 'SEO Submit Web leads helped us close 3 major e-commerce contracts in our first month. The ROI was clear in week 1.' },
          ].map((test, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <span style={{ fontSize: '28px', color: C.yellow, display: 'block', lineHeight: 1 }}>“</span>
              <p style={{ fontFamily: F.body, fontSize: '12px', color: C.white, lineHeight: 1.6, marginBottom: '12px', fontStyle: 'italic' }}>
                "{test.txt}"
              </p>
              <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: '12px', color: C.yellow, display: 'block' }}>{test.name}</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', display: 'block' }}>{test.comp}</span>
            </div>
          ))}
        </div>
      </section>

      {/* [H] WEB DESIGN LEADS ENQUIRY FORM */}
      <section style={{ background: C.navy, padding: '48px 24px', borderTop: `3px solid ${C.blue}` }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.yellow, marginBottom: '24px' }}>
            Get Web Design Leads — Fill The Form Below
          </h2>
          <form onSubmit={handleWebSubmit} style={{ display: 'grid', gap: '12px' }} noValidate>
            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Your Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Vikram Singh"
                value={webForm.name}
                onChange={(e) => {
                  setWebForm({ ...webForm, name: e.target.value });
                  if (webErrors.name) setWebErrors({ ...webErrors, name: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: webErrors.name ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {webErrors.name && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {webErrors.name}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Business Email Address *
              </label>
              <input
                type="email"
                placeholder="e.g. vikram@webstudio.com"
                value={webForm.email}
                onChange={(e) => {
                  setWebForm({ ...webForm, email: e.target.value });
                  if (webErrors.email) setWebErrors({ ...webErrors, email: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: webErrors.email ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {webErrors.email && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {webErrors.email}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={webForm.phone}
                onChange={(e) => {
                  setWebForm({ ...webForm, phone: e.target.value });
                  if (webErrors.phone) setWebErrors({ ...webErrors, phone: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: webErrors.phone ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {webErrors.phone && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {webErrors.phone}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Your Web Design Agency Name
              </label>
              <input
                type="text"
                placeholder="e.g. PixelForge Web Studio"
                value={webForm.company}
                onChange={(e) => {
                  setWebForm({ ...webForm, company: e.target.value });
                  if (webErrors.company) setWebErrors({ ...webErrors, company: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: webErrors.company ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {webErrors.company && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {webErrors.company}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Monthly Lead Budget *
              </label>
              <select
                value={webForm.budget}
                onChange={(e) => {
                  setWebForm({ ...webForm, budget: e.target.value });
                  if (webErrors.budget) setWebErrors({ ...webErrors, budget: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: webErrors.budget ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              >
                <option value="">-- Select your monthly budget --</option>
                <option value="Starter $199">Starter — $199/month (20 Leads)</option>
                <option value="Standard $449">Standard — $449/month (50 Leads)</option>
                <option value="Premium $899">Premium — $899/month (120 Leads)</option>
                <option value="Custom">Custom Package</option>
              </select>
              {webErrors.budget && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {webErrors.budget}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Tell Us Your Requirements
              </label>
              <textarea
                placeholder="e.g. I run a web design firm in Mumbai and need 30 fresh leads per month from small businesses in India who need new websites. Budget $500–$2000."
                rows={3}
                value={webForm.message}
                onChange={(e) => setWebForm({ ...webForm, message: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0, resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              disabled={webLoading}
              style={{
                background: webLoading ? '#cccccc' : C.yellow,
                color: webLoading ? '#666666' : C.navy,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '14px',
                border: 'none',
                cursor: webLoading ? 'not-allowed' : 'pointer',
                borderRadius: 0
              }}
            >
              {webLoading ? 'SENDING...' : '💻 GET WEB DESIGN LEADS →'}
            </button>
            {webSuccess && <SuccessMessage onClose={() => setWebSuccess(false)} />}
          </form>
        </div>
      </section>

      {/* [I] BOTTOM CTA */}
      <section style={{ background: C.navy, padding: '40px 24px', textAlign: 'center', borderTop: `1px solid ${C.blue}` }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white, marginBottom: '8px' }}>
          Start Getting Web Design Leads
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
          Partner with SEO Submit Web and scale your design agency pipeline with high-value web leads.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
            GET FREE SAMPLE LEADS →
          </button>
          <a
            href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20Web%20Design%20Leads.%20Please%20send%20details."
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
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '13px 24px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
            CHAT ON WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};


// ==========================================
// PAGE 5: APPOINTMENT LEADS PAGE ( /appointment-leads )
// ==========================================
const AppointmentLeadsPage = ({ isMobile }) => {
  const navigate = useNavigate();
  const [appForm, setAppForm] = useState({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
  const [appSuccess, setAppSuccess] = useState(false);
  const [appErrors, setAppErrors] = useState({});
  const [appLoading, setAppLoading] = useState(false);

  const handleAppSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!appForm.name.trim()) {
      errors.name = "⚠ Please enter your full name so we can address you properly";
    }
    if (!appForm.email.trim()) {
      errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(appForm.email)) {
        errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
      }
    }
    if (!appForm.phone.trim()) {
      errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
    } else {
      const phoneRegex = /^[\d\s\+\-\(\)]{8,15}$/;
      if (!phoneRegex.test(appForm.phone)) {
        errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
      }
    }
    if (!appForm.company.trim()) {
      errors.company = "⚠ Please enter your company or agency name";
    }
    if (!appForm.budget) {
      errors.budget = "⚠ Please select your monthly budget so we can recommend the right package";
    }

    if (Object.keys(errors).length > 0) {
      setAppErrors(errors);
      return;
    }

    setAppErrors({});
    setAppLoading(true);

    setTimeout(() => {
      setAppLoading(false);
      handleFormSubmit(appForm, 'Appointment Leads Page - Enquiry');
      setAppSuccess(true);
      setAppForm({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
    }, 1000);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* [A] PAGE HERO */}
      <section style={{
        background: C.navy,
        padding: isMobile ? '32px 16px' : '48px 24px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '32px',
      }}>
        {/* Left Column */}
        <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            Pre-Booked <span style={{ color: C.yellow }}>Appointment Fixed</span> Leads — Decision Makers Ready To Talk
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
            <button onClick={() => window.location.href = '#appt-pricing'} style={{ background: 'transparent', color: C.yellow, fontFamily: F.display, fontWeight: 700, fontSize: '12px', letterSpacing: '1px', padding: '12px 24px', border: `2px solid ${C.yellow}`, cursor: 'pointer', borderRadius: 0 }}>
              VIEW PRICING
            </button>
            <a
              href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20Appointment%20Leads.%20Please%20send%20details."
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
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '13px 24px',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
              CHAT ON WHATSAPP
            </a>
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
            <img src="/assets/seo-analytics-leads.png" alt="Appointment booking and lead qualification dashboard" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
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
                    <div style={{ width: '24px', height: '24px', background: C.blue, color: C.white, display: 'flex', alignItems: 'center', justifycontent: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '10px' }}>
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
            { name: 'Sunita Patel', comp: 'PixelForge Studio', img: 'https://picsum.photos/seed/appclient1/80/80', txt: 'Appointment leads saved us. Stop cold outreach and book direct meetings.' },
            { name: 'Karan Malhotra', comp: 'AppBoost Digital', img: 'https://picsum.photos/seed/appclient2/80/80', txt: 'Meetings closed 3x faster than traditional forms. Essential for agencies.' },
            { name: 'Nisha Verma', comp: 'BrandRise Agency', img: 'https://picsum.photos/seed/appclient3/80/80', txt: 'Synced calls keep our sales reps busy. Excellent team coordination.' },
          ].map((test, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.1)', padding: '24px 20px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={test.img} alt={test.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', display: 'block', marginBottom: '12px', border: '3px solid #FFD600' }} />
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
          <form onSubmit={handleAppSubmit} style={{ display: 'grid', gap: '12px' }} noValidate>
            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Your Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Ananya Patel"
                value={appForm.name}
                onChange={(e) => {
                  setAppForm({ ...appForm, name: e.target.value });
                  if (appErrors.name) setAppErrors({ ...appErrors, name: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: appErrors.name ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {appErrors.name && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {appErrors.name}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Business Email Address *
              </label>
              <input
                type="email"
                placeholder="e.g. ananya@growthagency.com"
                value={appForm.email}
                onChange={(e) => {
                  setAppForm({ ...appForm, email: e.target.value });
                  if (appErrors.email) setAppErrors({ ...appErrors, email: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: appErrors.email ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {appErrors.email && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {appErrors.email}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={appForm.phone}
                onChange={(e) => {
                  setAppForm({ ...appForm, phone: e.target.value });
                  if (appErrors.phone) setAppErrors({ ...appErrors, phone: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: appErrors.phone ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {appErrors.phone && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {appErrors.phone}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Your Agency / Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. GrowthMark Digital Agency"
                value={appForm.company}
                onChange={(e) => {
                  setAppForm({ ...appForm, company: e.target.value });
                  if (appErrors.company) setAppErrors({ ...appErrors, company: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: appErrors.company ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {appErrors.company && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {appErrors.company}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Monthly Appointment Lead Budget *
              </label>
              <select
                value={appForm.budget}
                onChange={(e) => {
                  setAppForm({ ...appForm, budget: e.target.value });
                  if (appErrors.budget) setAppErrors({ ...appErrors, budget: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: appErrors.budget ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              >
                <option value="">-- How many appointments do you need? --</option>
                <option value="10 Appointments">10 Appointments/month</option>
                <option value="25 Appointments">25 Appointments/month</option>
                <option value="50 Appointments">50 Appointments/month</option>
                <option value="Custom">Custom Volume</option>
              </select>
              {appErrors.budget && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {appErrors.budget}
                </span>
              )}
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Describe Your Target Client
              </label>
              <textarea
                placeholder="e.g. I need appointment leads with business owners who have a monthly digital marketing budget of $1,000+ and are looking for SEO services in the US market."
                rows="3"
                value={appForm.message}
                onChange={(e) => setAppForm({ ...appForm, message: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0, resize: 'vertical' }}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={appLoading}
              style={{
                background: appLoading ? '#cccccc' : C.yellow,
                color: appLoading ? '#666666' : C.navy,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '14px',
                border: 'none',
                cursor: appLoading ? 'not-allowed' : 'pointer',
                borderRadius: 0,
                width: '100%'
              }}
            >
              {appLoading ? 'SENDING...' : '📅 BOOK APPOINTMENT LEADS →'}
            </button>
            {appSuccess && <SuccessMessage onClose={() => setAppSuccess(false)} />}
          </form>
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
          <a
            href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20Appointment%20Leads.%20Please%20send%20details."
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
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '13px 24px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
            CHAT ON WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};


// ==========================================
// PAGE 6: BLOG PAGE ( /blog )
// ==========================================
const BlogPage = ({ isMobile }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [blogEmail, setBlogEmail] = useState('');
  const [blogSuccess, setBlogSuccess] = useState(false);
  const [blogErrors, setBlogErrors] = useState({});
  const [blogLoading, setBlogLoading] = useState(false);

  const blogPosts = [
    { cat: 'SEO', title: '10 Proven Ways to Convert SEO Leads Faster in 2025', border: C.yellow, img: 'https://picsum.photos/seed/blogpost1/600/200', desc: 'Understand high-converting proposal scopes, audit formats, and scripts to double your sales closing percentage.' },
    { cat: 'Lead Gen', title: 'Why Exclusive Leads Beat Shared Leads Every Single Time', border: C.blue, img: 'https://picsum.photos/seed/blogpost2/600/200', desc: 'Discover how shared leads decay and ruin margins, and why exclusive pipelines guarantee better ROI for service companies.' },
    { cat: 'Business Growth', title: 'How to Scale Your Agency to $100K/Month Using Appointment Leads', border: C.navy, img: 'https://picsum.photos/seed/blogpost3/600/200', desc: 'Transition your agency sales process to scheduled calendar calls. Save time, stop dialing, and start pitching target clients.' },
    { cat: 'SEO', title: 'The Ultimate Guide to Buying SEO Leads — What to Look For', border: C.yellow, img: 'https://picsum.photos/seed/blogpost4/600/200', desc: 'How to verify the quality of third-party lead sellers and pick verified providers.' },
    { cat: 'Web Design', title: 'Web Design Lead Generation: How to Get 50 Clients This Month', border: C.blue, img: 'https://picsum.photos/seed/blogpost5/600/200', desc: 'Direct outreach frameworks and paid search techniques that book high-value web builds.' },
    { cat: 'Business Growth', title: 'Cold Calling Is Dead — Here\'s What Actually Works in 2025', border: C.navy, img: 'https://picsum.photos/seed/blogpost6/600/200', desc: 'Modern inbound pipelines and calendar fixed consultation techniques.' },
    { cat: 'Lead Gen', title: 'ACMA Compliance: What Lead Buyers Need to Know', border: C.yellow, img: 'https://picsum.photos/seed/blogpost7/600/200', desc: 'Legal compliance guide for agency buyers to protect campaigns.' },
    { cat: 'SEO', title: 'How to Build a 7-Figure SEO Agency Using Purchased Leads', border: C.blue, img: 'https://picsum.photos/seed/blogpost8/600/200', desc: 'Strategic operations guide on onboarding and scaling outsourced pipelines.' },
    { cat: 'Lead Gen', title: 'Appointment Setting vs Cold Email: Which Converts Better?', border: C.navy, img: 'https://picsum.photos/seed/blogpost9/600/200', desc: 'A head-to-head metrics battle comparing conversion speeds and cost parameters.' },
  ];

  const filteredPosts = filter === 'All' ? blogPosts : blogPosts.filter(p => p.cat === filter);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const errors = {};
    if (!blogEmail.trim()) {
      errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(blogEmail)) {
        errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
      }
    }

    if (Object.keys(errors).length > 0) {
      setBlogErrors(errors);
      return;
    }

    setBlogErrors({});
    setBlogLoading(true);

    setTimeout(() => {
      setBlogLoading(false);
      handleFormSubmit({ email: blogEmail }, 'Blog Newsletter - Subscription Request');
      setBlogSuccess(true);
      setBlogEmail('');
    }, 1000);
  };

  return (
    <div style={{ width: '100%' }}>
      {blogSuccess && <SuccessMessage onClose={() => setBlogSuccess(false)} />}
      {/* [A] BLOG HERO */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '36px', color: C.white, marginBottom: '14px' }}>
          Latest Tips, Guides & <span style={{ color: C.yellow }}>Industry Insights</span>
        </h1>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
          Learn our insider methods for closing SEO retainers, scaling app dev contracts, and managing sales campaigns.
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['All', 'SEO', 'Web Design', 'Lead Gen', 'Business Growth'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? C.yellow : C.navy,
                color: filter === cat ? C.navy : C.white,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '11px',
                padding: '8px 16px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
                transition: 'background 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* [B] FEATURED POST */}
      <section style={{ background: C.yellow, padding: '32px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr', gap: '24px', background: C.white, padding: '24px', border: `2px solid ${C.navy}` }}>
          <div>
            <span style={{ background: C.blue, color: C.white, padding: '4px 10px', fontSize: '9px', fontWeight: 'bold', fontFamily: F.display, textTransform: 'uppercase' }}>FEATURED ARTICLE</span>
            <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.navy, marginTop: '12px', marginBottom: '12px', lineHeight: 1.3 }}>
              10 Proven Ways to Convert SEO Leads Faster in 2025
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '13px', color: '#444', lineHeight: 1.6, marginBottom: '20px' }}>
              Struggling to close lead audits? Our comprehensive framework breaks down the exact response scripts, pricing proposals, and target parameters needed to land 5-figure agency retainers.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: C.blue, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '10px' }}>JD</div>
              <span style={{ fontSize: '11px', color: '#555', fontWeight: 'bold' }}>John Doe</span>
              <span style={{ fontSize: '11px', color: '#888' }}>• Jan 12, 2025</span>
            </div>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: C.navy,
                color: C.white,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '11px',
                letterSpacing: '1px',
                padding: '12px 24px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
              }}
            >
              READ FULL ARTICLE →
            </button>
          </div>
          <div>
            <img
              src="/assets/seo-analytics-leads.png"
              alt="Marketing Success"
              style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* [C] ALL BLOG POSTS GRID */}
      <SectionWrapper bg={C.white}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
          {filteredPosts.map((post, idx) => (
            <div key={idx} style={{ background: C.white, border: '1px solid #dde3f0', borderTop: `4px solid ${post.border}`, display: 'flex', flexDirection: 'column' }}>
              <img src={post.img} alt={post.title} style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span style={{
                  fontFamily: F.display,
                  fontWeight: 800,
                  fontSize: '9px',
                  color: C.white,
                  background: post.border,
                  padding: '3px 8px',
                  alignSelf: 'flex-start',
                  marginBottom: '12px',
                  letterSpacing: '1px',
                }}>{post.cat}</span>
                <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '10px', lineHeight: 1.3 }}>{post.title}</h4>
                <p style={{ fontFamily: F.body, fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>{post.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#666', marginBottom: '12px', fontFamily: F.body }}>
                  <img 
                    src={idx % 3 === 0 ? 'https://picsum.photos/seed/author1/40/40' : (idx % 3 === 1 ? 'https://picsum.photos/seed/author2/40/40' : 'https://picsum.photos/seed/author3/40/40')} 
                    alt="Author" 
                    style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover', display: 'block', border: '1px solid #FFD600' }} 
                  />
                  <span>Admin</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <Link to="/blog" style={{ fontFamily: F.display, fontWeight: 700, fontSize: '11px', color: C.blue, textDecoration: 'none', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* [D] CATEGORIES SIDEBAR STRIP */}
      <section style={{ background: C.lightBg, padding: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { cat: 'SEO', count: 3 },
            { cat: 'Web Design', count: 1 },
            { cat: 'Lead Gen', count: 3 },
            { cat: 'Business Growth', count: 2 },
          ].map((item) => (
            <span key={item.cat} style={{
              background: C.white,
              border: '1px solid #dde3f0',
              padding: '6px 14px',
              fontSize: '11px',
              fontFamily: F.display,
              fontWeight: 700,
              color: C.navy,
            }}>
              {item.cat} ({item.count})
            </span>
          ))}
        </div>
      </section>

      {/* [E] NEWSLETTER SIGNUP */}
      <section style={{ background: C.navy, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.yellow, marginBottom: '8px' }}>
            Get Weekly Lead Generation Tips In Your Inbox
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
            Join 3,000+ agency owners who trust SEO Submit Web.
          </p>
          <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-end', gap: '10px' }} noValidate>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <label style={{
                display: 'block',
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#FFD600',
                marginBottom: '6px',
              }}>
                Enter Your Email to Subscribe
              </label>
              <input
                type="email"
                placeholder="e.g. yourname@agency.com"
                value={blogEmail}
                onChange={(e) => {
                  setBlogEmail(e.target.value);
                  if (blogErrors.email) setBlogErrors({ ...blogErrors, email: '' });
                }}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  fontSize: '13px',
                  fontFamily: F.body,
                  border: blogErrors.email ? '2px solid #ff4444' : '2px solid #2a3d6a',
                  background: '#1a2a4a',
                  color: '#ffffff',
                  marginBottom: '4px',
                  outline: 'none',
                  borderRadius: 0,
                }}
              />
              {blogErrors.email && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {blogErrors.email}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={blogLoading}
              style={{
                background: blogLoading ? '#cccccc' : C.yellow,
                color: blogLoading ? '#666666' : C.navy,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '14px 24px',
                border: 'none',
                cursor: blogLoading ? 'not-allowed' : 'pointer',
                borderRadius: 0,
                height: '46px',
                marginBottom: '4px',
                width: isMobile ? '100%' : 'auto',
              }}
            >
              {blogLoading ? 'SENDING...' : '📧 SUBSCRIBE FOR FREE →'}
            </button>
          </form>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '6px', textAlign: 'left' }}>
            Join 3,000+ agency owners. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* [F] BOTTOM CTA */}
      <section style={{ background: C.blue, padding: '40px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white, marginBottom: '14px' }}>
          Ready to buy leads instead of waiting for them?
        </h2>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '11px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
            GET STARTED
          </button>
          <a
            href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20your%20leads.%20Please%20send%20details."
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
              padding: '13px 28px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
            CHAT ON WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};


// ==========================================
// PAGE 7: TESTIMONIALS PAGE ( /testimonials )
// ==========================================
const TestimonialsPage = ({ isMobile }) => {
  const navigate = useNavigate();
  const [reviewForm, setReviewForm] = useState({
    name: '',
    company: '',
    service: '',
    rating: '5',
    review: ''
  });
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [reviewErrors, setReviewErrors] = useState({});
  const [reviewLoading, setReviewLoading] = useState(false);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!reviewForm.name.trim()) {
      errors.name = "⚠ Please enter your full name so we can address you properly";
    }
    if (!reviewForm.company.trim()) {
      errors.company = "⚠ Please enter your company or agency name";
    }
    if (!reviewForm.service) {
      errors.service = "⚠ Please select which type of leads you need";
    }
    if (reviewForm.review.trim().length < 20) {
      errors.review = "⚠ Please write your review — minimum 20 characters";
    }

    if (Object.keys(errors).length > 0) {
      setReviewErrors(errors);
      return;
    }

    setReviewErrors({});
    setReviewLoading(true);

    setTimeout(() => {
      setReviewLoading(false);
      handleFormSubmit({
        name: reviewForm.name,
        company: reviewForm.company,
        service: reviewForm.service,
        message: `Rating: ${reviewForm.rating} Stars | Review: ${reviewForm.review}`
      }, 'Testimonials Page - Leave a Review');
      setReviewSuccess(true);
      setReviewForm({
        name: '',
        company: '',
        service: '',
        rating: '5',
        review: ''
      });
    }, 1000);
  };

  const reviewsList = [
    { name: 'Rajesh Sharma', role: 'CEO', comp: 'TechSEO Solutions', img: 'https://picsum.photos/seed/testi1/80/80', txt: 'Best SEO leads in the market. Phone verification is thorough, show-up rates are consistent, and support handles requests promptly.' },
    { name: 'Priya Kulkarni', role: 'Director', comp: 'WebCraft Agency', img: 'https://picsum.photos/seed/testi2/80/80', txt: '24/7 support is real. I had a webhook syncing issue at 2am and the representative solved it. High conversion percentages.' },
    { name: 'Amit Mehta', role: 'Founder', comp: 'GrowthMark Digital', img: 'https://picsum.photos/seed/testi3/80/80', txt: 'Close rate jumped 40% in our design team since we started acquiring custom leads. Replacement policy works flawlessly.' },
    { name: 'Sunita Patel', role: 'COO', comp: 'PixelForge Studio', img: 'https://picsum.photos/seed/testi4/80/80', txt: 'Appointment leads saved us. We scaled our operations directly without allocating massive budgets to cold calls.' },
            { name: 'Vikram Nair', role: 'CEO', comp: 'RankBoost India', img: 'https://picsum.photos/seed/testi5/80/80', txt: 'Tried 5 providers, nothing beats this. SEO Submit Web qualifies real decision makers rather than low-tier employees.' },
    { name: 'Ananya Singh', role: 'Founder', comp: 'DigiFirst Agency', img: 'https://picsum.photos/seed/testi6/80/80', txt: 'The lead quality is outstanding. We sync details straight into HubSpot and start the call sequence.' },
    { name: 'Ravi Krishnan', role: 'Director', comp: 'WebWave Co', img: 'https://picsum.photos/seed/testi7/80/80', txt: 'ROI was visible in week 1. We closed two $5k contracts from our first leads batch.' },
    { name: 'Meera Joshi', role: 'Founder', comp: 'ContentCraft', img: 'https://picsum.photos/seed/testi8/80/80', txt: 'Replacement policy works perfectly. Disconnected numbers get replaced without complex verification audits.' },
    { name: 'Arjun Kapoor', role: 'Partner', comp: 'SEOStar Agency', img: 'https://picsum.photos/seed/testi9/80/80', txt: 'Scaled from 3 to 27 clients in 6 months using local search lead campaigns.' },
    { name: 'Deepa Iyer', role: 'COO', comp: 'NetBuild Studio', img: 'https://picsum.photos/seed/testi10/80/80', txt: 'Every lead had verified contact info. The dashboard is clean and lead delivery pipeline is fast.' },
    { name: 'Karan Malhotra', role: 'Director', comp: 'AppBoost Digital', img: 'https://picsum.photos/seed/testi11/80/80', txt: 'Appointment leads close 3x faster than normal form fills. Strongly recommend.' },
    { name: 'Nisha Verma', role: 'Founder', comp: 'BrandRise Agency', img: 'https://picsum.photos/seed/testi12/80/80', txt: 'Been with them 3 years now. Lead consistency keeps our pipeline stable.' },
  ];

  return (
    <div style={{ width: '100%' }}>
      {reviewSuccess && <SuccessMessage onClose={() => setReviewSuccess(false)} />}
      {/* [A] PAGE HERO */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '36px', color: C.white, marginBottom: '14px' }}>
          Real Results From <span style={{ color: C.yellow }}>Real Clients</span>
        </h1>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
          Hear from agency owners who scaled their client count and billing retainers using our exclusive leads.
        </p>

        {/* Stat Pills */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {["500+ Happy Clients", "4.9★ Average Rating", "98% Would Recommend"].map((pill) => (
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
      </section>

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

      {/* [C] MAIN FEATURED TESTIMONIAL */}
      <section style={{ background: C.lightBg, padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '32px', alignItems: 'center' }}>
          <img src="https://picsum.photos/seed/featuredtesti/200/200" alt="Arjun Kapoor Featured Testimonial" style={{ width: '200px', height: '200px', objectFit: 'cover', display: 'block', border: `4px solid ${C.navy}` }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
              {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
            </div>
            <p style={{ fontFamily: F.body, fontSize: '15px', color: C.navy, lineHeight: 1.8, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
              "SEO Submit Web leads helped us completely transform our sales velocity. We closed 24 retainer accounts in our first 90 days, adding over $48,000 in new monthly recurring revenue. Their support team replaced any invalid numbers instantly."
            </p>
            <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Arjun Kapoor</h4>
            <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>Partner • SEOStar Agency</span>
          </div>
        </div>
      </section>

      {/* [C] MAIN FEATURED TESTIMONIAL */}
      <section style={{ background: C.lightBg, padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: C.white, border: `4px solid ${C.yellow}`, padding: '32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '32px', alignItems: 'center' }}>
          <img src="https://picsum.photos/seed/featuredtesti/200/200" alt="Arjun Kapoor Featured Testimonial" style={{ width: '200px', height: '200px', objectFit: 'cover', display: 'block', border: `4px solid ${C.navy}` }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '2px', color: C.yellow, fontSize: '18px', marginBottom: '12px' }}>
              {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
            </div>
            <p style={{ fontFamily: F.body, fontSize: '15px', color: C.navy, lineHeight: 1.8, marginBottom: '16px', fontWeight: 500, fontStyle: 'italic' }}>
              "SEO Submit Web leads helped us completely transform our sales velocity. We closed 24 retainer accounts in our first 90 days, adding over $48,000 in new monthly recurring revenue. Their support team replaced any invalid numbers instantly."
            </p>
            <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.navy, marginBottom: '2px' }}>Arjun Kapoor</h4>
            <span style={{ fontSize: '12px', color: C.blue, fontWeight: 'bold' }}>Partner • SEOStar Agency</span>
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
                <img src={test.img} alt={test.name} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
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
                <img src={test.img} alt={test.name} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
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

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { name: 'Rajesh Sharma', title: 'TechSEO Solutions', img: 'https://picsum.photos/seed/video1/400/220' },
            { name: 'Priya Kulkarni', title: 'WebCraft Agency', img: 'https://picsum.photos/seed/video2/400/220' },
            { name: 'Amit Mehta', title: 'GrowthMark Digital', img: 'https://picsum.photos/seed/video3/400/220' },
          ].map((video, idx) => (
            <div key={idx} style={{
              background: C.deepNavy,
              border: `1px solid ${C.blue}`,
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '220px',
              overflow: 'hidden',
            }}>
              <img src={video.img} alt={video.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.3 }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
                <i className="ti ti-brand-youtube" style={{ fontSize: '48px', color: C.yellow, marginBottom: '16px', cursor: 'pointer', display: 'inline-block' }} onClick={() => alert('Video player loading...')} />
                <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.white, marginBottom: '4px' }}>{video.name}</h4>
                <p style={{ fontFamily: F.body, fontSize: '10px', color: 'rgba(255,255,255,0.8)' }}>{video.title}</p>
              </div>
            </div>
          ))}
        </div>
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
              <img src="https://picsum.photos/seed/case1/600/200" alt="SEO Growth Case" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
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
              <img src="https://picsum.photos/seed/case2/600/200" alt="Web design revenue growth" loading="lazy" style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }} />
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

          <form onSubmit={handleReviewSubmit} style={{ display: 'grid', gap: '12px' }} noValidate>
            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Your Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Rajesh Sharma"
                value={reviewForm.name}
                onChange={(e) => {
                  setReviewForm({ ...reviewForm, name: e.target.value });
                  if (reviewErrors.name) setReviewErrors({ ...reviewErrors, name: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: reviewErrors.name ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {reviewErrors.name && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {reviewErrors.name}
                </span>
              )}
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Your Company / Agency Name *
              </label>
              <input
                type="text"
                placeholder="e.g. TechSEO Solutions"
                value={reviewForm.company}
                onChange={(e) => {
                  setReviewForm({ ...reviewForm, company: e.target.value });
                  if (reviewErrors.company) setReviewErrors({ ...reviewErrors, company: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: reviewErrors.company ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              />
              {reviewErrors.company && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {reviewErrors.company}
                </span>
              )}
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Which Service Did You Use? *
              </label>
              <select
                value={reviewForm.service}
                onChange={(e) => {
                  setReviewForm({ ...reviewForm, service: e.target.value });
                  if (reviewErrors.service) setReviewErrors({ ...reviewErrors, service: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: reviewErrors.service ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              >
                <option value="">-- Select the service you used --</option>
                <option value="SEO Leads">🔍 SEO Leads</option>
                <option value="Web Design Leads">💻 Web Design Leads</option>
                <option value="Appointment Leads">📅 Appointment Fixed Leads</option>
                <option value="All Services">⭐ All Services</option>
              </select>
              {reviewErrors.service && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {reviewErrors.service}
                </span>
              )}
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Your Rating *
              </label>
              <select
                value={reviewForm.rating}
                onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
              >
                <option value="5">⭐⭐⭐⭐⭐ 5 Stars — Excellent</option>
                <option value="4">⭐⭐⭐⭐ 4 Stars — Very Good</option>
                <option value="3">⭐⭐⭐ 3 Stars — Good</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
                Write Your Review *
              </label>
              <textarea
                placeholder="Share your honest experience with SEO Submit Web. How did our leads help your agency grow? What results did you see? How was the quality and support? (Minimum 50 words)"
                rows="4"
                value={reviewForm.review}
                onChange={(e) => {
                  setReviewForm({ ...reviewForm, review: e.target.value });
                  if (reviewErrors.review) setReviewErrors({ ...reviewErrors, review: '' });
                }}
                style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: reviewErrors.review ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0, resize: 'vertical' }}
              />
              {reviewErrors.review && (
                <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {reviewErrors.review}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={reviewLoading}
              style={{
                background: reviewLoading ? '#cccccc' : C.yellow,
                color: reviewLoading ? '#666666' : C.navy,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '2px',
                padding: '14px 28px',
                border: 'none',
                cursor: reviewLoading ? 'not-allowed' : 'pointer',
                borderRadius: 0,
                marginTop: '12px',
                width: '100%',
              }}
            >
              {reviewLoading ? 'SENDING...' : '⭐ SUBMIT YOUR REVIEW →'}
            </button>
          </form>

          {/* Green WhatsApp Contact Button */}
          <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center' }}>
            <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '12px', marginBottom: '12px' }}>
              Want to speak to support instead?
            </p>
            <a
              href="https://wa.me/917738907685"
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
    </div>
  );
};


// ==========================================
// PAGE 8: CONTACT PAGE ( /contact )
// ==========================================
const ContactPage = ({ isMobile }) => {
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactErrors, setContactErrors] = useState({});
  const [contactLoading, setContactLoading] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!contactForm.firstName.trim()) {
      errors.firstName = "⚠ Please enter your full name so we can address you properly";
    }
    if (!contactForm.email.trim()) {
      errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactForm.email)) {
        errors.email = "⚠ Please enter a valid email — we'll send your free samples here";
      }
    }
    if (!contactForm.phone.trim()) {
      errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
    } else {
      const phoneRegex = /^[\d\s\+\-\(\)]{8,15}$/;
      if (!phoneRegex.test(contactForm.phone)) {
        errors.phone = "⚠ Please enter your WhatsApp number — we'll send leads details here";
      }
    }
    if (!contactForm.service) {
      errors.service = "⚠ Please select which type of leads you need";
    }
    if (!contactForm.budget) {
      errors.budget = "⚠ Please select your monthly budget so we can recommend the right package";
    }

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setContactErrors({});
    setContactLoading(true);

    setTimeout(() => {
      setContactLoading(false);
      handleFormSubmit({
        ...contactForm,
        name: contactForm.firstName + ' ' + contactForm.lastName
      }, 'Contact Page - Main Enquiry');
      setContactSuccess(true);
      setContactForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* [A] CONTACT HERO */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '36px', color: C.white, marginBottom: '14px' }}>
          Let's <span style={{ color: C.yellow }}>Start Your</span> Lead Generation Journey
        </h1>
        <p style={{ fontFamily: F.body, fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
          Reach our team for webhook configuration questions, custom geo filters, or sample inquiries.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {["Available 24/7", "Reply in 2 hours", "CRM Integrations Supported"].map((pill) => (
            <span key={pill} style={{
              background: C.yellow,
              color: C.navy,
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: '11px',
              padding: '6px 14px',
            }}>
              ✓ {pill}
            </span>
          ))}
        </div>
      </section>

      {/* [B] CONTACT GRID */}
      <section style={{ background: C.lightBg, padding: '32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { border: C.yellow, icon: 'ti-phone', title: 'Phone Support', val: '+91 77389 07685', note: 'Available 24 hours a day', link: 'tel:+917738907685' },
            { border: C.blue, icon: 'ti-mail', title: 'Email Enquiries', val: 'Seosubmitweb@gmail.com', note: 'Reply within 2 hours', link: 'mailto:Seosubmitweb@gmail.com' },
            { border: C.navy, icon: 'ti-map-pin', title: 'Delhi Office HQ', val: '123 Business Hub, Sector 18, Delhi NCR — 110001', note: 'Mon–Sun Open Operations' },
          ].map((item, idx) => (
            <div key={idx} style={{ background: C.white, borderTop: `4px solid ${item.border}`, padding: '24px 20px', textAlign: 'center', border: '1px solid #dde3f0' }}>
              <i className={`ti ${item.icon}`} style={{ fontSize: '32px', color: item.border, display: 'block', marginBottom: '12px' }} />
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '15px', color: C.navy, marginBottom: '6px' }}>{item.title}</h4>
              <span style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: C.navy, marginBottom: '4px' }}>
                {item.link ? (
                  <a href={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>{item.val}</a>
                ) : item.val}
              </span>
              <span style={{ fontSize: '11px', color: '#888' }}>{item.note}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://wa.me/917738907685?text=Hi%20I%20am%20interested%20in%20your%20leads.%20Please%20send%20me%20more%20information."
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
              fontSize: '12px',
              letterSpacing: '1px',
              padding: '13px 24px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            <i className="ti ti-brand-whatsapp" style={{ fontSize: '18px' }}></i>
            CHAT ON WHATSAPP
          </a>
        </div>
      </section>

      {/* Image Strip above form */}
      <img
        src="/assets/lead-generation-hero.png"
        alt="SEO Submit Web support team"
        style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }}
      />

      {/* [C] MAIN CONTACT SECTION */}
      <SectionWrapper bg={C.white}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.3fr 0.7fr', gap: '32px' }}>
          {/* Left Form */}
          <div>
            <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '22px', color: C.navy, marginBottom: '20px' }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleContactSubmit} className="light-form" style={{ display: 'grid', gap: '10px' }} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ textAlign: 'left' }}>
                  <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul"
                    value={contactForm.firstName}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, firstName: e.target.value });
                      if (contactErrors.firstName) setContactErrors({ ...contactErrors, firstName: '' });
                    }}
                    style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: contactErrors.firstName ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                  />
                  {contactErrors.firstName && (
                    <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {contactErrors.firstName}
                    </span>
                  )}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sharma"
                    value={contactForm.lastName}
                    onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                  />
                </div>
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Your Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. rahul@youragency.com"
                  value={contactForm.email}
                  onChange={(e) => {
                    setContactForm({ ...contactForm, email: e.target.value });
                    if (contactErrors.email) setContactErrors({ ...contactErrors, email: '' });
                  }}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: contactErrors.email ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                />
                {contactErrors.email && (
                  <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {contactErrors.email}
                  </span>
                )}
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={contactForm.phone}
                  onChange={(e) => {
                    setContactForm({ ...contactForm, phone: e.target.value });
                    if (contactErrors.phone) setContactErrors({ ...contactErrors, phone: '' });
                  }}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: contactErrors.phone ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                />
                {contactErrors.phone && (
                  <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {contactErrors.phone}
                  </span>
                )}
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Company / Agency Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. TechSEO Solutions Pvt Ltd"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Service You Are Interested In *
                </label>
                <select
                  value={contactForm.service}
                  onChange={(e) => {
                    setContactForm({ ...contactForm, service: e.target.value });
                    if (contactErrors.service) setContactErrors({ ...contactErrors, service: '' });
                  }}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: contactErrors.service ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                >
                  <option value="">-- Select a Service --</option>
                  <option value="SEO Leads">🔍 SEO Leads</option>
                  <option value="Web Design Leads">💻 Web Design Leads</option>
                  <option value="Appointment Leads">📅 Appointment Fixed Leads</option>
                  <option value="All Three">⭐ All Three Services</option>
                </select>
                {contactErrors.service && (
                  <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {contactErrors.service}
                  </span>
                )}
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Your Monthly Budget *
                </label>
                <select
                  value={contactForm.budget}
                  onChange={(e) => {
                    setContactForm({ ...contactForm, budget: e.target.value });
                    if (contactErrors.budget) setContactErrors({ ...contactErrors, budget: '' });
                  }}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: contactErrors.budget ? '2px solid #ff4444' : '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
                >
                  <option value="">-- Select Your Budget --</option>
                  <option value="Under $200">💰 Under $200 / month</option>
                  <option value="$200-$500">💰 $200 – $500 / month</option>
                  <option value="$500-$1000">💰 $500 – $1,000 / month</option>
                  <option value="$1000+">💰 $1,000+ / month</option>
                </select>
                {contactErrors.budget && (
                  <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {contactErrors.budget}
                  </span>
                )}
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your agency, how many leads you need per month, which cities or countries you target, and any other details that will help us serve you better..."
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: '2px solid #dde3f0', background: '#ffffff', color: '#0A1628', marginBottom: '4px', outline: 'none', borderRadius: 0, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={contactLoading}
                style={{
                  background: contactLoading ? '#cccccc' : C.yellow,
                  color: contactLoading ? '#666666' : C.navy,
                  fontFamily: F.display,
                  fontWeight: 800,
                  fontSize: '12px',
                  letterSpacing: '1px',
                  padding: '14px',
                  border: 'none',
                  cursor: contactLoading ? 'not-allowed' : 'pointer',
                  borderRadius: 0,
                  marginTop: '8px'
                }}
              >
                {contactLoading ? 'SENDING...' : '📨 SEND MESSAGE →'}
              </button>
              {contactSuccess && <SuccessMessage onClose={() => setContactSuccess(false)} />}
            </form>

            <div style={{ marginTop: '24px', textAlign: 'left' }}>
              <span style={{ fontSize: '12px', color: '#666', display: 'block' }}>Or call us directly:</span>
              <a href="tel:+917738907685" style={{ fontSize: '24px', fontWeight: '900', color: C.blue, fontFamily: F.display, textDecoration: 'none' }}>
                +91 77389 07685
              </a>
            </div>
          </div>

          {/* Right Info Panel */}
          <div style={{ background: C.navy, color: C.white, padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', borderRadius: 0, textAlign: 'left' }}>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '16px', color: C.yellow, textTransform: 'uppercase' }}>
              Why Contact Us?
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Direct access to our campaign coordinators.',
                'Integrate lead routing in 24 hours.',
                'Free verification logs supplied with every invoice.',
                'Instant replacements on invalid lead criteria.',
                'Get customizable geolocation boundaries.',
              ].map((reason, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px' }}>
                  <i className="ti ti-square-check" style={{ color: C.yellow, fontSize: '16px', marginTop: '2px' }} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            {/* Promise Box */}
            <div style={{ background: C.blue, padding: '16px', textAlign: 'center', marginTop: '10px' }}>
              <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '13px', color: C.white }}>
                RESPONSE PROMISE
              </span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)' }}>
                We reply within 2 business hours
              </span>
            </div>

            {/* Offer Box */}
            <div style={{ background: C.yellow, color: C.navy, padding: '16px', textAlign: 'center' }}>
              <span style={{ display: 'block', fontFamily: F.display, fontWeight: 900, fontSize: '13px' }}>
                SPECIAL TRIAL OFFER
              </span>
              <span style={{ fontSize: '11px', fontWeight: 'bold' }}>
                Get 5 FREE sample leads before you commit
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* [D] MAP PLACEHOLDER */}
      <section style={{ background: C.deepNavy, padding: '48px 24px', textAlign: 'center', borderTop: `1px solid ${C.blue}` }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '280px',
          border: '1px dashed rgba(255,255,255,0.15)',
          background: 'radial-gradient(circle, rgba(10,22,40,0.8) 0%, rgba(6,16,32,0.9) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Simulated Grid Lines */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '25%', width: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '75%', width: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', height: '1px', background: 'rgba(255,255,255,0.05)' }} />

          <div style={{
            background: C.white,
            color: C.navy,
            padding: '20px',
            border: `2px solid ${C.yellow}`,
            zIndex: 1,
            maxWidth: '300px',
            textAlign: 'left',
          }}>
            <h4 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '13px', color: C.navy, marginBottom: '6px' }}>HQ Location Address</h4>
            <p style={{ fontSize: '11px', color: '#555', marginBottom: '12px' }}>
              123 Business Hub, Sector 18, Delhi NCR — 110001
            </p>
            <button onClick={() => alert('Launching Google Maps directions...')} style={{ background: C.blue, color: C.white, border: 'none', padding: '6px 12px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer', borderRadius: 0 }}>
              GET DIRECTIONS
            </button>
          </div>
        </div>
      </section>

      {/* [E] FAQ STRIP */}
      <section style={{ background: C.yellow, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.navy, marginBottom: '28px' }}>
          Common Questions Before Getting Started
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { q: 'Is there a setup fee?', a: 'No. There are no onboarding or script fees.' },
            { q: 'How do you replace bad contact details?', a: 'Submit incorrect rows in your dashboard and we push replacements.' },
            { q: 'Can I pause delivery?', a: 'Yes. Notify your manager 48 hours in advance to pause supply.' },
            { q: 'What is compliance opt-in?', a: 'All prospects confirm interest via web audits and opt-in agreements.' },
          ].map((faq, idx) => (
            <div key={idx} style={{ background: C.navy, color: C.white, padding: '20px', textAlign: 'left', borderRadius: 0 }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '13px', color: C.yellow, marginBottom: '6px' }}>{faq.q}</h4>
              <p style={{ fontFamily: F.body, fontSize: '11px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* [F] OFFICES / AVAILABILITY */}
      <section style={{ background: C.blue, padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '26px', color: C.white, marginBottom: '28px' }}>
          We Are Available Round The Clock
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { tz: 'IST (India Standard)', hours: '9:00 AM – 9:00 PM', note: 'Primary call center operations' },
            { tz: 'EST (Eastern Standard)', hours: '8:00 AM – 8:00 PM', note: 'Account management operations' },
            { tz: 'GMT (Greenwich Mean)', hours: '8:00 AM – 6:00 PM', note: 'Technical support desk' },
          ].map((card, idx) => (
            <div key={idx} style={{ background: C.white, padding: '20px', color: C.navy, textAlign: 'center', borderRadius: 0 }}>
              <h4 style={{ fontFamily: F.display, fontWeight: 800, fontSize: '14px', color: C.blue, marginBottom: '6px' }}>{card.tz}</h4>
              <span style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: C.navy, marginBottom: '4px' }}>{card.hours}</span>
              <span style={{ fontSize: '11px', color: '#888' }}>{card.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* [G] BOTTOM CTA */}
      <section style={{ background: C.navy, padding: '40px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '24px', color: C.white, marginBottom: '8px' }}>
          Don't wait — your competitors are already buying leads
        </h2>
        <button onClick={() => navigate('/contact')} style={{ background: C.yellow, color: C.navy, fontFamily: F.display, fontWeight: 800, fontSize: '12px', letterSpacing: '1px', padding: '14px 28px', border: 'none', cursor: 'pointer', borderRadius: 0 }}>
          CLAIM YOUR ZIP CODES
        </button>
      </section>
    </div>
  );
};


// ==========================================
// ROOT APP COMPONENT
// ==========================================
function App() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    // 1. Inject Fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap';
    document.head.appendChild(fontLink);

    // 2. Inject Tabler Icons
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css';
    document.head.appendChild(iconLink);

    // 3. Inject Global styles
    const style = document.createElement('style');
    style.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { overflow-x: hidden; background: #0A1628; }
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      input::placeholder { 
        color: rgba(255, 255, 255, 0.5) !important; 
        font-size: 12px;
        font-family: 'Inter', sans-serif;
      }
      textarea::placeholder { 
        color: rgba(255, 255, 255, 0.5) !important;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
      }
      select option {
        background: #0A1628;
        color: #ffffff;
      }
      input:focus, 
      select:focus, 
      textarea:focus {
        border-color: #FFD600 !important;
        outline: none !important;
        background: #1f3055 !important;
      }
      .light-form input::placeholder,
      .light-form textarea::placeholder {
        color: rgba(10,22,40,0.4) !important;
      }
    `;
    document.head.appendChild(style);

    // 4. Inject EmailJS CDN
    const emailScript = document.createElement('script');
    emailScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    emailScript.onload = () => {
      window.emailjs.init('YOUR_PUBLIC_KEY');
    };
    document.head.appendChild(emailScript);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <HashRouter>
      <ScrollToTopOnMount />
      <RouteTitle />
      <div style={{
        margin: 0,
        padding: 0,
        background: C.navy,
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar isMobile={isMobile} />
        
        <main style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<HomePage isMobile={isMobile} />} />
            <Route path="/about" element={<AboutPage isMobile={isMobile} />} />
            <Route path="/seo-leads" element={<SeoLeadsPage isMobile={isMobile} />} />
            <Route path="/web-design-leads" element={<WebDesignLeadsPage isMobile={isMobile} />} />
            <Route path="/appointment-leads" element={<AppointmentLeadsPage isMobile={isMobile} />} />
            <Route path="/blog" element={<BlogPage isMobile={isMobile} />} />
            <Route path="/testimonials" element={<TestimonialsPage isMobile={isMobile} />} />
            <Route path="/contact" element={<ContactPage isMobile={isMobile} />} />
          </Routes>
        </main>

        <Footer isMobile={isMobile} />
        <ScrollToTopButton />
        <WhatsAppFloat />
      </div>
    </HashRouter>
  );
}

export default App;
