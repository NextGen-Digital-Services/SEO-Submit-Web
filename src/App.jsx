import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// CMS sub-application (lazy loaded — zero impact on public bundle)
const CMSRoot = lazy(() => import('./admin/CMSRoot'));

// Layout & Common Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import RouteTitle from './components/RouteTitle';
import ExitIntentPopup from './components/ExitIntentPopup';
// 👇 1. YAHAN IMPORT KARIYE
import WhatsAppButton from './components/WhatsAppButton'; 

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SeoLeadsPage from './pages/SeoLeadsPage';
import WebDesignLeadsPage from './pages/WebDesignLeadsPage';
import AppointmentLeadsPage from './pages/AppointmentLeadsPage';
import BlogPage from './pages/BlogPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

// Modals
import { PricingModal } from './modals/PricingModal';

// Styles & Tokens
import { C } from './styles/tokens';

// Utilities
import { handleFormSubmit } from './utils/formHandler';

function App() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [defaultLeadType, setDefaultLeadType] = useState('SEO Leads');

  const handleOpenPricingModal = (defaultType) => {
    setDefaultLeadType(defaultType || 'SEO Leads');
    setIsPricingModalOpen(true);
  };

  useEffect(() => {
    if (isPricingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPricingModalOpen]);

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
      input::placeholder,
      textarea::placeholder { 
        color: #999999 !important; 
        opacity: 1 !important;
        font-size: 13px;
        font-family: 'Inter', sans-serif;
      }
      input, select, textarea {
        background-color: #FFFFFF !important;
        color: #111111 !important;
        border: 1.5px solid #D1D5DB;
        border-radius: 4px;
        font-size: 14px;
      }
      input:focus, 
      select:focus, 
      textarea:focus {
        border-color: #6B21FF !important;
        outline: none !important;
        background-color: #FFFFFF !important;
        color: #111111 !important;
        box-shadow: 0 0 0 3px rgba(107, 33, 255, 0.12) !important;
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #FFFFFF inset !important;
        -webkit-text-fill-color: #111111 !important;
        transition: background-color 5000s ease-in-out 0s;
      }
      select option {
        background-color: #FFFFFF !important;
        color: #111111 !important;
      }
    `;
    document.head.appendChild(style);

    // 4. Inject EmailJS CDN
    const emailScript = document.createElement('script');
    emailScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    emailScript.onload = () => {
      window.emailjs.init('vD_zn4RFL9iBPfI7U');
    };
    document.head.appendChild(emailScript);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <BrowserRouter>
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
            <Route path="/seo-leads" element={<SeoLeadsPage isMobile={isMobile} onViewPricing={handleOpenPricingModal} />} />
            <Route path="/web-design-leads" element={<WebDesignLeadsPage isMobile={isMobile} onViewPricing={handleOpenPricingModal} />} />
            <Route path="/appointment-leads" element={<AppointmentLeadsPage isMobile={isMobile} onViewPricing={handleOpenPricingModal} />} />
            <Route path="/blog" element={<BlogPage isMobile={isMobile} />} />
            <Route path="/testimonials" element={<TestimonialsPage isMobile={isMobile} />} />
            <Route path="/contact" element={<ContactPage isMobile={isMobile} />} />

            {/* ── CMS sub-application ─────────────────────────────────────────────
                Completely isolated. Public Navbar/Footer/etc are NOT rendered.
                All /cms/* routes are handled inside CMSRoot.
            ─────────────────────────────────────────────────────────────────── */}
            <Route
              path="/cms/*"
              element={
                <Suspense fallback={null}>
                  <CMSRoot />
                </Suspense>
              }
            />
          </Routes>
        </main>

        <Footer isMobile={isMobile} />
        <ScrollToTopButton />
        <ExitIntentPopup onSubmit={(data) => handleFormSubmit(data, 'Exit Intent Popup - Lead Request')} />

        <PricingModal 
          isOpen={isPricingModalOpen} 
          onClose={() => setIsPricingModalOpen(false)} 
          defaultLeadType={defaultLeadType} 
          isMobile={isMobile} 
        />

        {/* 👇 2. YAHAN BUTTON DAAL DIYA (TAKI HAR PAGE PE DIKHE) */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;