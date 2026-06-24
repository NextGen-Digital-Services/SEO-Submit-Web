import React, { useState } from 'react';
import { C, F } from '../styles/tokens';
import { handleFormSubmit } from '../utils/formHandler';
import SuccessMessage from '../components/SuccessMessage';

export const SeoLeadsForm = () => {
  const [seoForm, setSeoForm] = useState({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
  const [seoSuccess, setSeoSuccess] = useState(false);
  const [seoErrors, setSeoErrors] = useState({});
  const [seoLoading, setSeoLoading] = useState(false);

  const handleSeoSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!seoForm.name.trim()) {
      errors.name = "Please enter your full name so we can address you properly";
    }
    if (!seoForm.email.trim()) {
      errors.email = "Please enter a valid email — we'll send your verified lead samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(seoForm.email)) {
        errors.email = "Please enter a valid email — we'll send your verified lead samples here";
      }
    }
    if (!seoForm.phone.trim() || seoForm.phone.trim() === '+1') {
      errors.phone = "Please enter your phone number — we'll send leads details here";
    } else {
      const phoneRegex = /^(?:\+?1[-. ]?)?\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
      const cleanPhone = seoForm.phone.replace(/[^0-9+]/g, '');
      const isIndian = cleanPhone.startsWith('+91') || (cleanPhone.startsWith('91') && cleanPhone.length === 12);
      if (!phoneRegex.test(seoForm.phone) || isIndian) {
        errors.phone = "Please enter a valid USA phone number";
      }
    }
    if (!seoForm.company.trim()) {
      errors.company = "Please enter your company or agency name";
    }
    if (!seoForm.budget) {
      errors.budget = "Please select your monthly budget so we can recommend the right package";
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
    <form onSubmit={handleSeoSubmit} style={{ display: 'grid', gap: '12px' }} noValidate>
      <div style={{ textAlign: 'left' }}>
        <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
          Your Full Name *
        </label>
        <input
          type="text"
          placeholder="e.g. Sarah Jenkins"
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
          placeholder="e.g. sarah@seoagency.com"
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
          placeholder="e.g. +1 (555) 123-4567"
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
          <option value="Starter $399">Starter — $399/month (20 Leads)</option>
          <option value="Standard $999">Standard — $999/month (50 Leads)</option>
          <option value="Premium $2,399">Premium — $2,399/month (120 Leads)</option>
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
        {seoLoading ? 'SENDING...' : (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', width: '100%' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            GET SEO LEADS NOW →
          </span>
        )}
      </button>
      {seoSuccess && <SuccessMessage onClose={() => setSeoSuccess(false)} />}
    </form>
  );
};

export default SeoLeadsForm;
