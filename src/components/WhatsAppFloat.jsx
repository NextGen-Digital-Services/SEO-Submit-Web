import React from 'react';

export const WhatsAppFloat = () => (
  <a
    href="https://wa.me/17165755447?text=Hi%20SEO%20Submit%20Web%2C%20I%20am%20interested%20in%20your%20leads.%20Please%20send%20me%20more%20information."
    target="_blank"
    rel="noreferrer"
    style={{
      position: 'fixed',
      bottom: '80px',
      right: '24px',
      width: '56px',
      height: '56px',
      background: '#25D366',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9998,
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(37,211,102,0.4)',
    }}>
    <i className="ti ti-brand-whatsapp" 
       style={{ fontSize: '28px', color: '#fff' }}></i>
  </a>
);

export default WhatsAppFloat;
