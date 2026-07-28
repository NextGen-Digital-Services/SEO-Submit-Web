/**
 * src/admin/components/ConfirmDialog.jsx
 *
 * Modal confirmation dialog. Reads from UIContext.
 * Mount once inside CMSRoot.
 *
 * Usage (from any component):
 *   const { openConfirm } = useUI();
 *   openConfirm({
 *     title: 'Delete Post',
 *     message: 'Are you sure? This cannot be undone.',
 *     danger: true,
 *     onConfirm: () => handleDelete(id),
 *   });
 */

import React, { useEffect, useRef, memo } from 'react';
import { useUI } from '../hooks/useUI';

const ConfirmDialog = memo(function ConfirmDialog() {
  const { confirmDialog, closeConfirm } = useUI();
  const { open, title, message, danger, onConfirm } = confirmDialog;
  const confirmBtnRef = useRef(null);

  // Trap focus on open; auto-focus the confirm button
  useEffect(() => {
    if (open && confirmBtnRef.current) {
      confirmBtnRef.current.focus();
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') closeConfirm(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeConfirm]);

  if (!open) return null;

  const handleConfirm = () => {
    closeConfirm();
    onConfirm?.();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeConfirm}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15,23,42,0.6)',
          backdropFilter: 'blur(3px)',
          zIndex: 10000,
        }}
      />

      {/* Dialog */}
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="cms-confirm-title"
        aria-describedby="cms-confirm-msg"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10001,
          width: '100%',
          maxWidth: 420,
          padding: '0 16px',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '24px 24px 0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: danger ? 'rgba(239,68,68,0.1)' : 'rgba(99,102,241,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              {danger ? '🗑' : '❓'}
            </div>
            <div>
              <h2
                id="cms-confirm-title"
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#0f172a',
                  margin: '0 0 6px',
                }}
              >
                {title}
              </h2>
              <p
                id="cms-confirm-msg"
                style={{
                  fontSize: 13.5,
                  color: '#64748b',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {message}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'flex-end',
              padding: '20px 24px 24px',
            }}
          >
            <button
              onClick={closeConfirm}
              style={{
                padding: '9px 18px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 600,
                color: '#475569',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => (e.target.style.background = '#f1f5f9')}
              onMouseLeave={(e) => (e.target.style.background = '#f8fafc')}
            >
              Cancel
            </button>
            <button
              ref={confirmBtnRef}
              onClick={handleConfirm}
              style={{
                padding: '9px 18px',
                background: danger ? '#ef4444' : '#6366f1',
                border: 'none',
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 600,
                color: '#fff',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
                boxShadow: danger
                  ? '0 2px 8px rgba(239,68,68,0.3)'
                  : '0 2px 8px rgba(99,102,241,0.3)',
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = danger ? '#dc2626' : '#4f46e5')
              }
              onMouseLeave={(e) =>
                (e.target.style.background = danger ? '#ef4444' : '#6366f1')
              }
            >
              {danger ? 'Yes, Delete' : 'Confirm'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

export default ConfirmDialog;
