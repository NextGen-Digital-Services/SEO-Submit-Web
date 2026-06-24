import React, { useState, useEffect } from 'react';
import { C, F } from '../styles/tokens';
import { LEAD_PRICING_DATA } from '../data/pricingData';

export const PricingModal = ({ isOpen, onClose, defaultLeadType, isMobile }) => {
  const [pricingFormData, setPricingFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    leadType: defaultLeadType || 'SEO Leads'
  });
  const [pricingFormErrors, setPricingFormErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setPricingFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        leadType: defaultLeadType || 'SEO Leads'
      });
      setPricingFormErrors({});
    }
  }, [isOpen, defaultLeadType]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(6, 16, 32, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: C.deepNavy,
          border: `2px solid ${C.blue}`,
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          borderRadius: '16px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          padding: isMobile ? '24px 16px' : '40px 32px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(10, 22, 40, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: C.white,
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            lineHeight: '1',
            transition: 'background-color 0.2s, color 0.2s, transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = C.yellow;
            e.currentTarget.style.color = C.navy;
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(10, 22, 40, 0.7)';
            e.currentTarget.style.color = C.white;
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Close pricing details"
        >
          &times;
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontFamily: F.display, fontWeight: 900, fontSize: isMobile ? '20px' : '26px', color: C.yellow, marginBottom: '10px' }}>
            Get Verified Leads That Convert Into Paying Clients
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
            See pricing and request a custom lead package. Our team will contact you immediately.
          </p>
        </div>

        {/* Main Modal Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '4.5fr 5.5fr',
          gap: '32px',
          alignItems: 'start',
        }}>
          {/* Left Side: Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const errors = {};
              if (!pricingFormData.name.trim()) errors.name = "Full name is required";
              if (!pricingFormData.company.trim()) errors.company = "Company name is required";
              if (!pricingFormData.email.trim()) {
                errors.email = "Email is required";
              } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pricingFormData.email)) {
                errors.email = "Invalid email address";
              }
              if (!pricingFormData.phone.trim()) errors.phone = "Phone number is required";

              if (Object.keys(errors).length > 0) {
                setPricingFormErrors(errors);
                return;
              }

              const waMessage = `Name: ${pricingFormData.name}
Company: ${pricingFormData.company}
Email: ${pricingFormData.email}
Phone: ${pricingFormData.phone}
Lead Type: ${pricingFormData.leadType}

I want pricing details and a callback.`;

              const encodedMessage = encodeURIComponent(waMessage);
              const whatsappURL = `https://wa.me/17165755447?text=${encodedMessage}`;
              window.open(whatsappURL, '_blank');

              onClose();
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px 20px',
              borderRadius: '12px',
            }}
            noValidate
          >
            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: C.yellow, marginBottom: '6px' }}>
                Full Name *
              </label>
              <input
                type="text"
                value={pricingFormData.name}
                onChange={(e) => {
                  setPricingFormData({ ...pricingFormData, name: e.target.value });
                  if (pricingFormErrors.name) setPricingFormErrors({ ...pricingFormErrors, name: '' });
                }}
                placeholder="e.g. John Doe"
                style={{ width: '100%', padding: '10px 12px', background: '#1a2a4a', color: '#fff', border: pricingFormErrors.name ? '1px solid #ff4444' : '1px solid rgba(255, 255, 255, 0.15)', outline: 'none' }}
              />
              {pricingFormErrors.name && <span style={{ color: '#ff4444', fontSize: '10px', marginTop: '4px', display: 'block' }}>{pricingFormErrors.name}</span>}
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: C.yellow, marginBottom: '6px' }}>
                Company Name *
              </label>
              <input
                type="text"
                value={pricingFormData.company}
                onChange={(e) => {
                  setPricingFormData({ ...pricingFormData, company: e.target.value });
                  if (pricingFormErrors.company) setPricingFormErrors({ ...pricingFormErrors, company: '' });
                }}
                placeholder="e.g. Apex Agency"
                style={{ width: '100%', padding: '10px 12px', background: '#1a2a4a', color: '#fff', border: pricingFormErrors.company ? '1px solid #ff4444' : '1px solid rgba(255, 255, 255, 0.15)', outline: 'none' }}
              />
              {pricingFormErrors.company && <span style={{ color: '#ff4444', fontSize: '10px', marginTop: '4px', display: 'block' }}>{pricingFormErrors.company}</span>}
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: C.yellow, marginBottom: '6px' }}>
                Email *
              </label>
              <input
                type="email"
                value={pricingFormData.email}
                onChange={(e) => {
                  setPricingFormData({ ...pricingFormData, email: e.target.value });
                  if (pricingFormErrors.email) setPricingFormErrors({ ...pricingFormErrors, email: '' });
                }}
                placeholder="e.g. john@agency.com"
                style={{ width: '100%', padding: '10px 12px', background: '#1a2a4a', color: '#fff', border: pricingFormErrors.email ? '1px solid #ff4444' : '1px solid rgba(255, 255, 255, 0.15)', outline: 'none' }}
              />
              {pricingFormErrors.email && <span style={{ color: '#ff4444', fontSize: '10px', marginTop: '4px', display: 'block' }}>{pricingFormErrors.email}</span>}
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: C.yellow, marginBottom: '6px' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                value={pricingFormData.phone}
                onChange={(e) => {
                  setPricingFormData({ ...pricingFormData, phone: e.target.value });
                  if (pricingFormErrors.phone) setPricingFormErrors({ ...pricingFormErrors, phone: '' });
                }}
                placeholder="e.g. +1 (555) 019-2834"
                style={{ width: '100%', padding: '10px 12px', background: '#1a2a4a', color: '#fff', border: pricingFormErrors.phone ? '1px solid #ff4444' : '1px solid rgba(255, 255, 255, 0.15)', outline: 'none' }}
              />
              {pricingFormErrors.phone && <span style={{ color: '#ff4444', fontSize: '10px', marginTop: '4px', display: 'block' }}>{pricingFormErrors.phone}</span>}
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: C.yellow, marginBottom: '6px' }}>
                Lead Type *
              </label>
              <select
                value={pricingFormData.leadType}
                onChange={(e) => setPricingFormData({ ...pricingFormData, leadType: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', background: '#1a2a4a', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.15)', outline: 'none' }}
              >
                <option value="SEO Leads">SEO Leads</option>
                <option value="Web Design Leads">Web Design Leads</option>
                <option value="Appointment Leads">Appointment Leads</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                background: C.yellow,
                color: C.navy,
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '1px',
                padding: '12px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '8px',
                width: '100%',
                borderRadius: 0,
              }}
            >
              REQUEST CALLBACK & WHATSAPP →
            </button>
          </form>

          {/* Right Side: Pricing Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '100%',
          }}>
            <h3 style={{ fontFamily: F.display, fontWeight: 900, fontSize: '14px', color: C.white, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', textAlign: 'left' }}>
              {pricingFormData.leadType} Packages
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              {LEAD_PRICING_DATA[pricingFormData.leadType].map((pack) => (
                <div 
                  key={pack.name} 
                  style={{
                    background: pack.featured ? C.blue : '#16233b',
                    border: pack.featured ? `1.5px solid ${C.yellow}` : '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '16px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    position: 'relative',
                  }}
                >
                  {pack.featured && (
                    <span style={{
                      position: 'absolute',
                      top: '0',
                      right: '20px',
                      background: C.yellow,
                      color: C.navy,
                      fontSize: '8px',
                      fontWeight: 'bold',
                      padding: '2px 8px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontFamily: F.display,
                    }}>
                      Popular
                    </span>
                  )}
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <span style={{ fontFamily: F.display, fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', color: pack.featured ? C.yellow : C.white }}>
                      {pack.name}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
                      <span style={{ fontFamily: F.display, fontWeight: 900, fontSize: '20px', color: C.white }}>
                        ${pack.price}
                      </span>
                      <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.6)', marginLeft: '4px' }}>
                        / {pack.period.replace(' Leads/mo', '').replace(' Calls/mo', '')}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px', fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.8)', marginTop: '4px' }}>
                    {pack.features.slice(0, 4).map((feat) => (
                      <span key={feat} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ color: C.yellow }}>✓</span> {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
