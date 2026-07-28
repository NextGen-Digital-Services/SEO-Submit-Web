/**
 * src/admin/components/CMSErrorBoundary.jsx
 *
 * React class-based error boundary for the CMS.
 * Catches render errors within the CMS tree and shows a safe fallback UI.
 * Never affects the public website.
 *
 * Usage:
 *   <CMSErrorBoundary>
 *     <SomeAdminPage />
 *   </CMSErrorBoundary>
 */

import React from 'react';

export default class CMSErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // In production, pipe this to Sentry or similar
    console.error('[CMSErrorBoundary] Uncaught error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            background: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 24px',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <div
            style={{
              maxWidth: 480,
              background: '#1e293b',
              borderRadius: 16,
              padding: '40px 36px',
              textAlign: 'center',
              border: '1px solid #334155',
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                background: 'rgba(239,68,68,0.1)',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: 28,
              }}
            >
              ⚠️
            </div>

            <h2
              style={{
                color: '#f1f5f9',
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              Something went wrong
            </h2>

            <p
              style={{
                color: '#94a3b8',
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              An unexpected error occurred in the CMS. The public website is
              unaffected. Please try refreshing the page.
            </p>

            {this.state.error && (
              <pre
                style={{
                  background: '#0f172a',
                  borderRadius: 8,
                  padding: '12px 16px',
                  fontSize: 12,
                  color: '#ef4444',
                  textAlign: 'left',
                  overflowX: 'auto',
                  marginBottom: 24,
                  maxHeight: 120,
                  border: '1px solid #1e293b',
                }}
              >
                {this.state.error.message}
              </pre>
            )}

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button
                onClick={this.handleReset}
                style={{
                  padding: '10px 22px',
                  background: '#6366f1',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.background = '#4f46e5')}
                onMouseLeave={(e) => (e.target.style.background = '#6366f1')}
              >
                Try Again
              </button>

              <button
                onClick={() => window.location.reload()}
                style={{
                  padding: '10px 22px',
                  background: '#1e293b',
                  color: '#94a3b8',
                  border: '1px solid #334155',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
