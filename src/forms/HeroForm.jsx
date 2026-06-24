import React, { useState } from 'react';
import { C, F } from '../styles/tokens';
import { handleFormSubmit } from '../utils/formHandler';
import SuccessMessage from '../components/SuccessMessage';

export const HeroForm = () => {
  const [heroForm, setHeroForm] = useState({ name: '', email: '', phone: '', company: '', service: '' });
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroErrors, setHeroErrors] = useState({});
  const [heroLoading, setHeroLoading] = useState(false);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!heroForm.name.trim()) {
      errors.name = "Please enter your full name so we can address you properly";
    }
    if (!heroForm.email.trim()) {
      errors.email = "Please enter a valid email — we'll send your verified lead samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(heroForm.email)) {
        errors.email = "Please enter a valid email — we'll send your verified lead samples here";
      }
    }
    if (!heroForm.phone.trim() || heroForm.phone.trim() === '+1') {
      errors.phone = "Please enter your phone number — we'll send leads details here";
    } else {
      const phoneRegex = /^(?:\+?1[-. ]?)?\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
      const cleanPhone = heroForm.phone.replace(/[^0-9+]/g, '');
      const isIndian = cleanPhone.startsWith('+91') || (cleanPhone.startsWith('91') && cleanPhone.length === 12);
      if (!phoneRegex.test(heroForm.phone) || isIndian) {
        errors.phone = "Please enter a valid USA phone number";
      }
    }
    if (!heroForm.company.trim()) {
      errors.company = "Please enter your company or agency name";
    }
    if (!heroForm.service) {
      errors.service = "Please select which type of leads you need";
    }

    if (Object.keys(errors).length > 0) {
      setHeroErrors(errors);
      return;
    }

    setHeroErrors({});
    setHeroLoading(true);

    setTimeout(() => {
      setHeroLoading(false);
      handleFormSubmit(heroForm, 'Hero - Verified Lead Request');
      setHeroSuccess(true);
      setHeroForm({ name: '', email: '', phone: '', company: '', service: '' });
    }, 1000);
  };

  return (
    <form onSubmit={handleHeroSubmit} className="light-form" noValidate>
      <div style={{ marginBottom: '10px', textAlign: 'left' }}>
        <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
          Your Full Name *
        </label>
        <input
          type="text"
          placeholder="e.g. John Smith"
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
          placeholder="e.g. john@youragency.com"
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
          placeholder="e.g. +1 (555) 123-4567"
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
          placeholder="e.g. Smith Digital Agency"
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
          <option value="">Which service are you looking for?</option>
          <option value="SEO Leads">SEO Leads</option>
          <option value="Web Design Leads">Web Design Leads</option>
          <option value="Appointment Leads">Appointment Fixed Leads</option>
          <option value="All Three">All Three Services</option>
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
        {heroLoading ? 'SENDING...' : (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', width: '100%' }}>
            SEND ME VERIFIED LEADS
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        )}
      </button>
      {heroSuccess && <SuccessMessage onClose={() => setHeroSuccess(false)} />}
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '10px', color: '#666', textAlign: 'center', marginTop: '10px' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Your info is 100% private & secure
      </span>
    </form>
  );
};

export default HeroForm;
