import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // SEO & UX Fix: Scroll to top on path change, plus automatic dynamic metadata fallback
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Dynamic Title Logic: Updates tab titles cleanly if sub-components don't set it
    const path = location.pathname.replace('/', '');
    if (path) {
      const formattedTitle = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      document.title = `${formattedTitle} | SEO Submit Web`;
    } else {
      document.title = 'SEO Submit Web | High-Quality B2B Leads';
    }
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div 
      className="app-layout" 
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: 'var(--bg-primary)', 
        color: 'var(--text-primary)',
        overflowX: 'hidden' /* Critical Mobile Responsive Fix: Prevents ugly layout breaking side-scroll */
      }}
    >
      {/* Structural Accessibility Landmark for SEO crawlers */}
      <a href="#main-content" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        Skip to main content
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Semantic main tag with ID for crawlers & accessibility */}
      <main id="main-content" style={{ flexGrow: 1, width: '100%', boxSizing: 'border-box' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageWrapper;