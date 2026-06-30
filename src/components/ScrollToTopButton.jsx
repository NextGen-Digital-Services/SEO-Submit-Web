import React, { useState, useEffect } from 'react';
import { C } from '../styles/tokens';

export function ScrollToTopButton() {
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
        right: '94px',
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

export default ScrollToTopButton;
