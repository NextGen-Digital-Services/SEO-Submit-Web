import React, { useState } from 'react';
import { C, F } from '../styles/tokens';
import { handleFormSubmit } from '../utils/formHandler';
import SuccessMessage from '../components/SuccessMessage';

export const ContactForm = () => {
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
      errors.firstName = "Please enter your full name so we can address you properly";
    }
    if (!contactForm.email.trim()) {
      errors.email = "Please enter a valid email — we'll send your verified lead samples here";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactForm.email)) {
        errors.email = "Please enter a valid email — we'll send your verified lead samples here";
      }
    }
    if (!contactForm.phone.trim() || contactForm.phone.trim() === '+1') {
      errors.phone = "Please enter your phone number — we'll send leads details here";
    } else {
      const phoneRegex = /^(?:\+?1[-. ]?)?\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
      const cleanPhone = contactForm.phone.replace(/[^0-9+]/g, '');
      const isIndian = cleanPhone.startsWith('+91') || (cleanPhone.startsWith('91') && cleanPhone.length === 12);
      if (!phoneRegex.test(contactForm.phone) || isIndian) {
        errors.phone = "Please enter a valid USA phone number";
      }
    }
    if (!contactForm.service) {
      errors.service = "Please select which type of leads you need";
    }
    if (!contactForm.budget) {
      errors.budget = "Please select your monthly budget so we can recommend the right package";
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
    <form onSubmit={handleContactSubmit} className="light-form" style={{ display: 'grid', gap: '10px' }} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div style={{ textAlign: 'left' }}>
          <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#0057FF', marginBottom: '6px' }}>
            First Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Robert"
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
            placeholder="e.g. Miller"
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
          placeholder="e.g. robert@youragency.com"
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
          placeholder="e.g. +1 (555) 123-4567"
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
          placeholder="e.g. TechSEO Solutions LLC"
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
          <option value="SEO Leads">SEO Leads</option>
          <option value="Web Design Leads">Web Design Leads</option>
          <option value="Appointment Leads">Appointment Fixed Leads</option>
          <option value="All Three">All Three Services</option>
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
          <option value="Under $200">Under $200 / month</option>
          <option value="$200-$500">$200 – $500 / month</option>
          <option value="$500-$1000">$500 – $1,000 / month</option>
          <option value="$1000+">$1,000+ / month</option>
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
        {contactLoading ? 'SENDING...' : (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', width: '100%' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            SEND MESSAGE →
          </span>
        )}
      </button>
      {contactSuccess && <SuccessMessage onClose={() => setContactSuccess(false)} />}
    </form>
  );
};

export default ContactForm;
