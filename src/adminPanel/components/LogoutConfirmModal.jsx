import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { C, F } from '../../styles/tokens';

export const LogoutConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(10, 22, 40, 0.6)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            zIndex: 10000,
            width: '100%',
            maxWidth: '400px',
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '28px 24px',
            boxShadow: '0 20px 50px rgba(10, 22, 40, 0.2), 0 4px 16px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            textAlign: 'center',
            fontFamily: F.body,
          }}
        >
          {/* Icon Badge */}
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.08)',
              color: '#EF4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '22px',
            }}
          >
            <i className="ti ti-logout" />
          </div>

          <h3
            style={{
              fontFamily: F.display,
              fontWeight: 600,
              fontSize: '18px',
              color: '#0F172A',
              marginBottom: '8px',
              letterSpacing: '-0.01em',
            }}
          >
            Confirm Logout
          </h3>

          <p
            style={{
              fontFamily: F.body,
              fontSize: '13.5px',
              fontWeight: 400,
              color: '#64748B',
              lineHeight: 1.55,
              marginBottom: '24px',
            }}
          >
            Are you sure you want to logout from the Admin Dashboard?
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              style={{
                flex: 1,
                padding: '10px 18px',
                background: '#F1F5F9',
                color: '#475569',
                fontFamily: F.body,
                fontWeight: 500,
                fontSize: '13px',
                border: '1px solid #E2E8F0',
                borderRadius: '14px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#DC2626' }}
              whileTap={{ scale: 0.98 }}
              onClick={onConfirm}
              style={{
                flex: 1,
                padding: '10px 18px',
                background: C.navy,
                color: C.white,
                fontFamily: F.body,
                fontWeight: 500,
                fontSize: '13px',
                border: 'none',
                borderRadius: '14px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(10, 22, 40, 0.15)',
                transition: 'background-color 0.2s ease',
              }}
            >
              Logout
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LogoutConfirmModal;
