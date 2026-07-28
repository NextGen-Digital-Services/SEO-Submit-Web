/**
 * src/admin/context/UIContext.jsx
 *
 * Global UI state for the CMS — sidebar, toasts, modals.
 *
 * Exposes:
 *   sidebarCollapsed  {boolean}  — desktop sidebar collapsed/expanded
 *   toggleSidebar     {fn}       — flip collapsed state
 *   toasts            {Toast[]}  — active toast notifications
 *   addToast          {fn}       — push a toast ({ message, type, duration? })
 *   removeToast       {fn}       — remove by id
 *   confirmDialog     {object}   — { open, title, message, onConfirm, onCancel, danger }
 *   openConfirm       {fn}       — open a confirm dialog
 *   closeConfirm      {fn}       — close the dialog
 */

import React, {
  createContext,
  useState,
  useCallback,
  useRef,
  useContext,
} from 'react';

// ─── Context ──────────────────────────────────────────────────────────────────
export const UIContext = createContext(null);

// ─── Toast ID counter ─────────────────────────────────────────────────────────
let _toastId = 0;

// ─── Provider ─────────────────────────────────────────────────────────────────
export function UIProvider({ children }) {
  // Sidebar collapse (desktop only; mobile uses sidebarOpen in CMSLayout)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Toast queue
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  // Confirm dialog
  const [confirmDialog, setConfirmDialog] = useState({
    open: false,
    title: '',
    message: '',
    danger: false,
    onConfirm: null,
    onCancel: null,
  });

  // ── Sidebar ─────────────────────────────────────────────────────────────
  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((v) => !v);
  }, []);

  // ── Toasts ───────────────────────────────────────────────────────────────
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
      delete timersRef.current[id];
    }
  }, []);

  /**
   * Add a toast notification.
   * @param {{ message: string, type?: 'success'|'error'|'info'|'warning', duration?: number }} opts
   */
  const addToast = useCallback(
    ({ message, type = 'info', duration = 4000 }) => {
      const id = ++_toastId;
      setToasts((prev) => [...prev, { id, message, type }]);

      if (duration > 0) {
        timersRef.current[id] = setTimeout(() => removeToast(id), duration);
      }

      return id;
    },
    [removeToast]
  );

  // Convenience aliases
  const toast = {
    success: (msg, opts) => addToast({ message: msg, type: 'success', ...opts }),
    error:   (msg, opts) => addToast({ message: msg, type: 'error', duration: 6000, ...opts }),
    info:    (msg, opts) => addToast({ message: msg, type: 'info', ...opts }),
    warning: (msg, opts) => addToast({ message: msg, type: 'warning', ...opts }),
  };

  // ── Confirm Dialog ────────────────────────────────────────────────────────
  /**
   * @param {{ title, message, onConfirm, danger? }} opts
   */
  const openConfirm = useCallback(({ title, message, onConfirm, danger = false }) => {
    setConfirmDialog({ open: true, title, message, danger, onConfirm });
  }, []);

  const closeConfirm = useCallback(() => {
    setConfirmDialog((prev) => ({ ...prev, open: false }));
  }, []);

  // ── Value ────────────────────────────────────────────────────────────────
  const value = {
    sidebarCollapsed,
    toggleSidebar,
    toasts,
    addToast,
    removeToast,
    toast,
    confirmDialog,
    openConfirm,
    closeConfirm,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('[useUI] Must be inside <UIProvider>');
  return ctx;
}
