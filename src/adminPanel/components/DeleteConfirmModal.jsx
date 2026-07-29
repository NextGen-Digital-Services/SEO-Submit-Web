import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { C, F } from '../../styles/tokens';

export const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, blogTitle, actionLoading }) => {
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
          padding: '16px',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            zIndex: 10000,
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '440px',
            padding: '28px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.05)',
            color: '#0F172A',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: '#FFF1F2',
                border: '1px solid #FECDD3',
                color: '#E11D48',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                flexShrink: 0,
              }}
            >
              <i className="ti ti-trash" />
            </div>
            <div>
              <h3 style={{ fontFamily: F.display, fontWeight: 600, fontSize: '18px', color: '#0F172A', letterSpacing: '-0.01em' }}>
                Delete Blog Post
              </h3>
              <span style={{ fontFamily: F.body, fontSize: '12px', color: '#64748B', fontWeight: 400 }}>
                This action cannot be undone.
              </span>
            </div>
          </div>

          <p
            style={{
              fontFamily: F.body,
              fontSize: '13.5px',
              color: '#334155',
              fontWeight: 400,
              lineHeight: 1.6,
              marginBottom: '24px',
              background: '#F8FAFC',
              padding: '12px 14px',
              borderRadius: '14px',
              borderLeft: `3px solid #E11D48`,
              border: '1px solid #E2E8F0',
              borderLeftWidth: '3px',
            }}
          >
            Are you sure you want to delete <strong style={{ color: C.navy, fontWeight: 600 }}>"{blogTitle}"</strong>?
          </p>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 18px',
                borderRadius: '14px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#475569',
                fontFamily: F.body,
                fontWeight: 500,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </motion.button>

            <motion.button
              whileHover={!actionLoading ? { scale: 1.02, backgroundColor: '#BE123C' } : {}}
              whileTap={!actionLoading ? { scale: 0.98 } : {}}
              type="button"
              onClick={onConfirm}
              disabled={actionLoading}
              style={{
                padding: '10px 18px',
                borderRadius: '14px',
                background: '#E11D48',
                border: 'none',
                color: C.white,
                fontFamily: F.body,
                fontWeight: 500,
                fontSize: '13px',
                cursor: actionLoading ? 'wait' : 'pointer',
                boxShadow: '0 4px 12px rgba(225, 29, 72, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'background-color 0.2s ease',
              }}
            >
              {actionLoading ? (
                <>
                  <i className="ti ti-loader-2 spin" style={{ fontSize: '16px' }} />
                  <span>Deleting...</span>
                </>
              ) : (
                <span>Delete Blog</span>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DeleteConfirmModal;
