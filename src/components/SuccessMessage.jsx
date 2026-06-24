import React from 'react';
import { C, F } from '../styles/tokens';

export const SuccessMessage = ({ onClose }) => (
  <div style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.7)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{
      background: '#fff',
      padding: '48px 40px',
      maxWidth: '480px',
      width: '90%',
      textAlign: 'center',
      borderTop: '6px solid #FFD600',
    }}>
      <div style={{
        width: '72px', height: '72px',
        background: '#FFD600',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
      }}>
        <i className="ti ti-check" style={{ fontSize: '36px', color: '#0A1628' }}></i>
      </div>
      <h2 style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 900, fontSize: '22px',
        color: '#0A1628', marginBottom: '12px',
      }}>
        Message Sent Successfully!
      </h2>
      <p style={{
        fontSize: '14px', color: '#555',
        lineHeight: 1.7, marginBottom: '24px',
      }}>
        Thank you for contacting SEO Submit Web.
        We have received your enquiry and will 
        get back to you within 2 hours.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <button
          onClick={onClose}
          style={{
            background: '#0A1628', color: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800, fontSize: '12px',
            letterSpacing: '1px', padding: '12px 24px',
            border: 'none', cursor: 'pointer',
          }}>
          CLOSE
        </button>
        <a
          href="https://wa.me/17165755447"
          target="_blank"
          rel="noreferrer"
          style={{
            background: '#25D366', color: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800, fontSize: '12px',
            letterSpacing: '1px', padding: '12px 24px',
            textDecoration: 'none', display: 'inline-block',
          }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            OPEN WHATSAPP
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default SuccessMessage;
