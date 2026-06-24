import React, { useState } from 'react';
import { C, F } from '../styles/tokens';
import { handleFormSubmit } from '../utils/formHandler';
import SuccessMessage from '../components/SuccessMessage';

export const BlogNewsletterForm = ({ isMobile }) => {
  const [blogEmail, setBlogEmail] = useState('');
  const [blogSuccess, setBlogSuccess] = useState(false);
  const [blogErrors, setBlogErrors] = useState({});
  const [blogLoading, setBlogLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const errors = {};
    if (!blogEmail.trim()) {
      errors.email = "Please enter a valid email — we'll send your verified lead samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(blogEmail)) {
        errors.email = "Please enter a valid email — we'll send your verified lead samples here";
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
    <>
      {blogSuccess && <SuccessMessage onClose={() => setBlogSuccess(false)} />}
      <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-end', gap: '10px' }} noValidate>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left', width: '100%' }}>
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
          {blogLoading ? 'SENDING...' : (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              SUBSCRIBE NOW →
            </span>
          )}
        </button>
      </form>
    </>
  );
};

export default BlogNewsletterForm;
