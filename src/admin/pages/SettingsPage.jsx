/**
 * src/admin/pages/SettingsPage.jsx  (Part 2 — enhanced)
 *
 * CMS Settings — account info + toast demo.
 * Fully wired SMTP / general settings coming in Part 3.
 */
import React from 'react';
import { useAuth }  from '../hooks/useAuth';
import { useUI }    from '../hooks/useUI';
import PageHeader   from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import Card         from '../components/Card';

export default function SettingsPage() {
  const { user }  = useAuth();
  const { toast } = useUI();

  return (
    <>
      <PageHeader
        title="Settings"
        subtitle="Manage your CMS account, preferences, and system configuration."
        breadcrumbs={[
          { label: 'Dashboard', href: '/cms/dashboard' },
          { label: 'Settings' },
        ]}
      />

      <PageContainer narrow>
        {/* Account card */}
        <Card title="Account Information">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Field label="Email Address" value={user?.email ?? '—'} />
            <Field label="User ID" value={user?.id ?? '—'} mono />
            <Field label="Role" value="Administrator" />
            <Field
              label="Last Sign In"
              value={
                user?.last_sign_in_at
                  ? new Date(user.last_sign_in_at).toLocaleString('en-GB')
                  : '—'
              }
            />
          </div>
        </Card>

        {/* Notifications demo */}
        <Card
          title="Toast Notifications (Demo)"
          actions={
            <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>
              Used throughout the CMS
            </span>
          }
        >
          <p style={{ fontSize: 13.5, color: '#64748b', marginBottom: 16, lineHeight: 1.6 }}>
            The notification system is ready for Part 3 Blog CRUD actions.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              className="cms-btn cms-btn-secondary cms-btn-sm"
              onClick={() => toast.success('Post published successfully!')}
              type="button"
            >
              ✓ Success
            </button>
            <button
              className="cms-btn cms-btn-secondary cms-btn-sm"
              onClick={() => toast.error('Failed to save changes.')}
              type="button"
            >
              ✕ Error
            </button>
            <button
              className="cms-btn cms-btn-secondary cms-btn-sm"
              onClick={() => toast.warning('Unsaved changes detected.')}
              type="button"
            >
              ⚠ Warning
            </button>
            <button
              className="cms-btn cms-btn-secondary cms-btn-sm"
              onClick={() => toast.info('Draft auto-saved.')}
              type="button"
            >
              ℹ Info
            </button>
          </div>
        </Card>

        {/* Coming in Part 3 */}
        <Card title="General Settings">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '18px',
              background: '#f8fafc',
              borderRadius: 10,
              border: '1px dashed #e2e8f0',
            }}
          >
            <div style={{ fontSize: 30 }}>⚙</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>
                Coming in Part 3
              </div>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>
                Site name, meta defaults, SEO author defaults, and image storage settings
                will be configurable here.
              </div>
            </div>
          </div>
        </Card>
      </PageContainer>
    </>
  );
}

function Field({ label, value, mono = false }) {
  return (
    <div>
      <div
        style={{
          fontSize: 11.5,
          color: '#94a3b8',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: 5,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: mono ? 12.5 : 14,
          color: '#0f172a',
          fontWeight: mono ? 400 : 500,
          fontFamily: mono ? "'JetBrains Mono', 'Fira Code', monospace" : 'inherit',
          wordBreak: 'break-all',
          background: mono ? '#f8fafc' : 'transparent',
          padding: mono ? '6px 10px' : 0,
          borderRadius: mono ? 6 : 0,
          border: mono ? '1px solid #e2e8f0' : 'none',
        }}
      >
        {value}
      </div>
    </div>
  );
}
