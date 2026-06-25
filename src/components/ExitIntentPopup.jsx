import React, { useState, useEffect } from 'react';

export default function ExitIntentPopup({ onSubmit }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('exit_popup_shown');
    const hasSubmitted = sessionStorage.getItem('exit_popup_submitted') || localStorage.getItem('exit_popup_submitted');

    if (hasShown || hasSubmitted) return;

    let timeoutId;

    const showPopup = () => {
      setIsRendered(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
      sessionStorage.setItem('exit_popup_shown', 'true');
    };

    // 7 seconds delay trigger
    timeoutId = setTimeout(showPopup, 7000);

    // Mouse leave viewport top trigger
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        showPopup();
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsRendered(false);
    }, 300);
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name";
    }
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (!form.phone.trim() || form.phone.trim() === '+1') {
      newErrors.phone = "Please enter your phone number";
    } else {
      const phoneRegex = /^(?:\+?1[-. ]?)?\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
      const cleanPhone = form.phone.replace(/[^0-9+]/g, '');
      const isIndian = cleanPhone.startsWith('+91') || (cleanPhone.startsWith('91') && cleanPhone.length === 12);
      if (!phoneRegex.test(form.phone) || isIndian) {
        newErrors.phone = "Please enter a valid USA phone number";
      }
    }
    if (!form.service) {
      newErrors.service = "Please select a service";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    if (onSubmit) {
      onSubmit(form)
        .then(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
          sessionStorage.setItem('exit_popup_submitted', 'true');
          localStorage.setItem('exit_popup_submitted', 'true');
          setTimeout(() => {
            handleClose();
          }, 2000);
        })
        .catch((err) => {
          setIsSubmitting(false);
          alert(err.message || 'Failed to submit form. Please check your internet connection and try again.');
        });
    } else {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  };

  if (!isRendered) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(4px)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 250ms ease',
      boxSizing: 'border-box',
    }}>
      <div style={{
        position: 'relative',
        width: '90%',
        maxWidth: '520px',
        background: '#FFFFFF',
        borderRadius: '8px',
        padding: '40px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transform: isVisible ? 'scale(1)' : 'scale(0.92)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 300ms ease-out, opacity 300ms ease-out',
        boxSizing: 'border-box',
        color: '#111111',
      }}>
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            color: '#666666',
            cursor: 'pointer',
            padding: 0,
            lineHeight: 1,
          }}
          aria-label="Close modal"
        >
          &times;
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6B21FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0D0D1A', marginBottom: '10px' }}>Request Received</h3>
            <p style={{ fontSize: '15px', color: '#555555' }}>We will send your niche-specific verified lead samples within 24 hours.</p>
          </div>
        ) : (
          <div>
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '28px',
              fontWeight: 700,
              color: '#0D0D1A',
              marginBottom: '10px',
              lineHeight: 1.2,
            }}>
              Before You Leave...
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              color: '#555555',
              marginBottom: '24px',
              lineHeight: 1.5,
            }}>
              Get 3 verified lead samples for your exact niche — delivered in 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#374151', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Smith"
                  value={form.name}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: '14px',
                    border: errors.name ? '1.5px solid #ff4444' : '1.5px solid #D1D5DB',
                    borderRadius: '4px',
                    backgroundColor: '#FFFFFF',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                {errors.name && (
                  <span style={{ color: '#ff4444', fontSize: '11px', marginTop: '4px', display: 'block' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#374151', marginBottom: '6px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. john@youragency.com"
                  value={form.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: '14px',
                    border: errors.email ? '1.5px solid #ff4444' : '1.5px solid #D1D5DB',
                    borderRadius: '4px',
                    backgroundColor: '#FFFFFF',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                {errors.email && (
                  <span style={{ color: '#ff4444', fontSize: '11px', marginTop: '4px', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#374151', marginBottom: '6px' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. (716) 575-5447"
                  value={form.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: '14px',
                    border: errors.phone ? '1.5px solid #ff4444' : '1.5px solid #D1D5DB',
                    borderRadius: '4px',
                    backgroundColor: '#FFFFFF',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                {errors.phone && (
                  <span style={{ color: '#ff4444', fontSize: '11px', marginTop: '4px', display: 'block' }}>
                    {errors.phone}
                  </span>
                )}
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#374151', marginBottom: '6px' }}>
                  Service You Need *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: '14px',
                    border: errors.service ? '1.5px solid #ff4444' : '1.5px solid #D1D5DB',
                    borderRadius: '4px',
                    backgroundColor: '#FFFFFF',
                    color: '#111111',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">Which service are you looking for?</option>
                  <option value="SEO Leads">SEO Leads</option>
                  <option value="Web Design Leads">Web Design Leads</option>
                  <option value="Appointment Leads">Appointment Fixed Leads</option>
                  <option value="All Three">All Three Services</option>
                </select>
                {errors.service && (
                  <span style={{ color: '#ff4444', fontSize: '11px', marginTop: '4px', display: 'block' }}>
                    {errors.service}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? '#cccccc' : '#6B21FF',
                  color: '#FFFFFF',
                  padding: '14px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  marginTop: '8px',
                  transition: 'background 0.2s ease',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Me Sample Leads'}
              </button>

              <span style={{
                display: 'block',
                textAlign: 'center',
                fontSize: '11px',
                color: '#888888',
                marginTop: '4px',
              }}>
                Your information is kept strictly private.
              </span>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
