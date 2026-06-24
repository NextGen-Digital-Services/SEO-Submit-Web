import React, { useState } from 'react';
import { C, F } from '../styles/tokens';
import { handleFormSubmit } from '../utils/formHandler';
import SuccessMessage from '../components/SuccessMessage';

export const WebDesignLeadsForm = () => {
  const [webForm, setWebForm] = useState({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
  const [webSuccess, setWebSuccess] = useState(false);
  const [webErrors, setWebErrors] = useState({});
  const [webLoading, setWebLoading] = useState(false);

  const handleWebSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!webForm.name.trim()) {
      errors.name = "Please enter your full name so we can address you properly";
    }
    if (!webForm.email.trim()) {
      errors.email = "Please enter a valid email — we'll send your verified lead samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(webForm.email)) {
        errors.email = "Please enter a valid email — we'll send your verified lead samples here";
      }
    }
    if (!webForm.phone.trim() || webForm.phone.trim() === '+1') {
      errors.phone = "Please enter your phone number — we'll send leads details here";
    } else {
      const phoneRegex = /^(?:\+?1[-. ]?)?\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
      const cleanPhone = webForm.phone.replace(/[^0-9+]/g, '');
      const isIndian = cleanPhone.startsWith('+91') || (cleanPhone.startsWith('91') && cleanPhone.length === 12);
      if (!phoneRegex.test(webForm.phone) || isIndian) {
        errors.phone = "Please enter a valid USA phone number";
      }
    }
    if (!webForm.company.trim()) {
      errors.company = "Please enter your company or agency name";
    }
    if (!webForm.budget) {
      errors.budget = "Please select your monthly budget so we can recommend the right package";
    }

    if (Object.keys(errors).length > 0) {
      setWebErrors(errors);
      return;
    }

    setWebErrors({});
    setWebLoading(true);

    handleFormSubmit(webForm, 'Web Design Leads Page - Enquiry')
      .then(() => {
        setWebLoading(false);
        setWebSuccess(true);
        setWebForm({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
      })
      .catch((err) => {
        setWebLoading(false);
        alert(err.message || 'Failed to submit form. Please check your internet connection and try again.');
      });
  };

  return (
    <form onSubmit={handleWebSubmit} style={{ display: 'grid', gap: '12px' }} noValidate>
      <div style={{ textAlign: 'left' }}>
        <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
          Your Full Name *
        </label>
        <input
          type="text"
          placeholder="e.g. David Miller"
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
          placeholder="e.g. david@webstudio.com"
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
          placeholder="e.g. +1 (555) 123-4567"
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
          <option value="Starter $399">Starter — $399/month (20 Leads)</option>
          <option value="Standard $999">Standard — $999/month (50 Leads)</option>
          <option value="Premium $2,399">Premium — $2,399/month (120 Leads)</option>
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
          placeholder="e.g. I run a web design firm in Chicago and need 30 fresh leads per month from small businesses in the US who need new websites. Budget $1500–$5000."
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
        {webLoading ? 'SENDING...' : (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', width: '100%' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            GET WEB DESIGN LEADS →
          </span>
        )}
      </button>
      {webSuccess && <SuccessMessage onClose={() => setWebSuccess(false)} />}
    </form>
  );
};

export default WebDesignLeadsForm;
