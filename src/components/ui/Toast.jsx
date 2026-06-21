import React, { useEffect } from 'react';

const Toast = ({
  message,
  type = 'success',
  duration = 4000,
  onClose,
  isOpen
}) => {
  useEffect(() => {
    if (isOpen && duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`toast-container animate-slide-up type-${type}`}>
      <span className="toast-icon">
        {type === 'success' ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        )}
      </span>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={onClose} aria-label="Close message">
        &times;
      </button>

      <style>{`
        .toast-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 300;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          font-size: 0.9rem;
          font-weight: 600;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid;
        }
        .type-success {
          background-color: var(--accent-green-light);
          border-color: var(--accent-green);
          color: var(--text-primary);
        }
        .type-error {
          background-color: rgba(239, 68, 68, 0.1);
          border-color: #ef4444;
          color: var(--text-primary);
        }
        .toast-icon {
          display: inline-flex;
          flex-shrink: 0;
        }
        .type-success .toast-icon { color: var(--accent-green); }
        .type-error .toast-icon { color: #ef4444; }
        .toast-message {
          flex-grow: 1;
        }
        .toast-close {
          background: none;
          border: none;
          font-size: 1.25rem;
          line-height: 1;
          cursor: pointer;
          color: var(--text-muted);
          transition: color var(--transition-fast);
        }
        .toast-close:hover {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default Toast;
