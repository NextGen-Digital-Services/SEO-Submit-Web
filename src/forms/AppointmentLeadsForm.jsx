import React, { useState } from 'react';
import { C, F } from '../styles/tokens';
import { handleFormSubmit } from '../utils/formHandler';
import SuccessMessage from '../components/SuccessMessage';

export const AppointmentLeadsForm = () => {
  const [appForm, setAppForm] = useState({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
  const [appSuccess, setAppSuccess] = useState(false);
  const [appErrors, setAppErrors] = useState({});
  const [appLoading, setAppLoading] = useState(false);

  const handleAppSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!appForm.name.trim()) {
      errors.name = "Please enter your full name so we can address you properly";
    }
    if (!appForm.email.trim()) {
      errors.email = "Please enter a valid email — we'll send your verified lead samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(appForm.email)) {
        errors.email = "Please enter a valid email — we'll send your verified lead samples here";
      }
    }
    if (!appForm.phone.trim() || appForm.phone.trim() === '+1') {
      errors.phone = "Please enter your phone number — we'll send leads details here";
    } else {
      const phoneRegex = /^(?:\+?1[-. ]?)?\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
      const cleanPhone = appForm.phone.replace(/[^0-9+]/g, '');
      const isIndian = cleanPhone.startsWith('+91') || (cleanPhone.startsWith('91') && cleanPhone.length === 12);
      if (!phoneRegex.test(appForm.phone) || isIndian) {
        errors.phone = "Please enter a valid USA phone number";
      }
    }
    if (!appForm.company.trim()) {
      errors.company = "Please enter your company or agency name";
    }
    if (!appForm.budget) {
      errors.budget = "Please select your monthly budget so we can recommend the right package";
    }

    if (Object.keys(errors).length > 0) {
      setAppErrors(errors);
      return;
    }

    setAppErrors({});
    setAppLoading(true);

    handleFormSubmit(appForm, 'Appointment Leads Page - Enquiry')
      .then(() => {
        setAppLoading(false);
        setAppSuccess(true);
        setAppForm({ name: '', email: '', phone: '', company: '', budget: '', message: '' });
      })
      .catch((err) => {
        setAppLoading(false);
        alert(err.message || 'Failed to submit form. Please check your internet connection and try again.');
      });
  };

  return (
    <form onSubmit={handleAppSubmit} style={{ display: 'grid', gap: '12px' }} noValidate>
      <div style={{ textAlign: 'left' }}>
        <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
          Your Full Name *
        </label>
        <input
          type="text"
          placeholder="e.g. Emily Davis"
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
          placeholder="e.g. emily@growthagency.com"
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
          Phone Number *
        </label>
        <input
          type="tel"
          placeholder="e.g. +1 (555) 123-4567"
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
        {appLoading ? 'SENDING...' : (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', width: '100%' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            BOOK APPOINTMENT LEADS →
          </span>
        )}
      </button>
      {appSuccess && <SuccessMessage onClose={() => setAppSuccess(false)} />}
    </form>
  );
};

export default AppointmentLeadsForm;
