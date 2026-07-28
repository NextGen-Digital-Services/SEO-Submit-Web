/**
 * src/admin/pages/DashboardPage.jsx  (Part 2 — full implementation)
 *
 * Live dashboard with:
 *   - 5 KPI stat cards (Supabase data via DashboardContext)
 *   - Recent Posts table with status badges
 *   - Quick Actions grid
 *   - Activity Feed (UI placeholder with realistic entries)
 *   - System Status widget
 *   - Loading skeletons on all sections
 *   - Error state with retry
 */

import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { DashboardProvider, useDashboard } from '../context/DashboardContext';
import { getRecentBlogs } from '../services/dashboardService';
import PageHeader     from '../components/PageHeader';
import PageContainer  from '../components/PageContainer';
import StatCard       from '../components/StatCard';
import Card           from '../components/Card';
import EmptyState     from '../components/EmptyState';
import ErrorState     from '../components/ErrorState';
import LoadingSkeleton, { TableRowSkeleton } from '../components/LoadingSkeleton';

// ─── KPI card configs ─────────────────────────────────────────────────────────
const KPI_CARDS = (stats) => [
  {
    label: 'Total Posts',
    value: stats.total,
    icon:  '✍',
    color: 'indigo',
    href:  '/cms/blogs',
  },
  {
    label: 'Published',
    value: stats.published,
    icon:  '✅',
    color: 'green',
    href:  '/cms/blogs',
  },
  {
    label: 'Drafts',
    value: stats.drafts,
    icon:  '📝',
    color: 'orange',
    href:  '/cms/blogs',
  },
  {
    label: 'Categories',
    value: stats.categories,
    icon:  '⊟',
    color: 'blue',
    href:  '/cms/categories',
  },
  {
    label: 'Tags',
    value: stats.tags,
    icon:  '◇',
    color: 'purple',
    href:  '/cms/tags',
  },
];

// ─── Quick actions ────────────────────────────────────────────────────────────
const QUICK_ACTIONS = [
  { to: '/cms/blogs/new',  label: 'New Blog Post',  desc: 'Create and publish a new article',      icon: '✍',  accent: '#6366f1', bg: 'rgba(99,102,241,0.08)'  },
  { to: '/cms/blogs',      label: 'Manage Posts',   desc: 'Edit, publish, or delete existing posts', icon: '📋', accent: '#10b981', bg: 'rgba(16,185,129,0.08)'  },
  { to: '/cms/categories', label: 'Categories',      desc: 'Organise posts into topic categories',  icon: '⊟',  accent: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
  { to: '/cms/tags',       label: 'Tags',            desc: 'Label posts with searchable tags',      icon: '◇',  accent: '#3b82f6', bg: 'rgba(59,130,246,0.08)'  },
];

// ─── Activity feed (realistic placeholder data) ───────────────────────────────
const ACTIVITY = [
  { id: 1, dot: '#6366f1', text: 'Dashboard connected to Supabase backend', time: 'just now' },
  { id: 2, dot: '#10b981', text: 'Authentication system configured successfully', time: '1m ago' },
  { id: 3, dot: '#f59e0b', text: 'CMS layout and navigation ready', time: '2m ago' },
  { id: 4, dot: '#3b82f6', text: 'Blog CRUD system — coming in Part 3', time: 'soon' },
];

// ─── Status items ─────────────────────────────────────────────────────────────
const STATUS_ITEMS = [
  { label: 'Supabase Database',   status: 'operational', dot: '#10b981' },
  { label: 'Authentication',      status: 'operational', dot: '#10b981' },
  { label: 'Storage Bucket',      status: 'operational', dot: '#10b981' },
  { label: 'RLS Policies',        status: 'active',      dot: '#6366f1' },
  { label: 'Blog CRUD API',       status: 'coming soon', dot: '#f59e0b' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'morning';
  if (h < 17) return 'afternoon';
  return 'evening';
}

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', {
    day:   '2-digit',
    month: 'short',
    year:  'numeric',
  });
}

function StatusBadge({ status }) {
  const map = {
    published:   { cls: 'cms-badge-published',   label: 'Published' },
    draft:       { cls: 'cms-badge-draft',        label: 'Draft'     },
    operational: { cls: 'cms-badge-published',   label: 'Online'    },
    active:      { cls: 'cms-badge-featured',    label: 'Active'    },
    'coming soon': { cls: 'cms-badge-draft',     label: 'Coming'    },
  };
  const { cls, label } = map[status] || { cls: '', label: status };
  return <span className={`cms-badge ${cls}`}>{label}</span>;
}

// ─── Recent Posts section ─────────────────────────────────────────────────────
const RecentPosts = memo(function RecentPosts() {
  const [posts,   setPosts]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const fetchRecent = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: e } = await getRecentBlogs(5);
      if (e) throw e;
      setPosts(data ?? []);
    } catch (err) {
      setError(err.message ?? 'Failed to load recent posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRecent(); }, []);

  return (
    <Card
      title="Recent Posts"
      noPadding
      actions={
        <Link to="/cms/blogs" className="cms-btn cms-btn-secondary cms-btn-sm">
          View All →
        </Link>
      }
    >
      {error ? (
        <ErrorState message={error} onRetry={fetchRecent} />
      ) : (
        <div className="cms-table-wrap">
          <table className="cms-table" aria-label="Recent blog posts">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <TableRowSkeleton key={i} cols={4} />
                  ))
                : posts.length === 0
                ? (
                  <tr>
                    <td colSpan={4} style={{ padding: 0 }}>
                      <EmptyState
                        icon="✍"
                        title="No posts yet"
                        message="Create your first blog post to see it here."
                        action={
                          <Link to="/cms/blogs/new" className="cms-btn cms-btn-primary cms-btn-sm">
                            Write First Post
                          </Link>
                        }
                      />
                    </td>
                  </tr>
                )
                : posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <div style={{ fontWeight: 600, color: '#0f172a', fontSize: 13.5, marginBottom: 2 }}>
                        {post.title}
                      </div>
                      {post.categories?.name && (
                        <div style={{ fontSize: 11.5, color: '#94a3b8' }}>
                          {post.categories.name}
                        </div>
                      )}
                    </td>
                    <td><StatusBadge status={post.status} /></td>
                    <td style={{ fontSize: 13, color: '#64748b' }}>
                      {post.categories?.name ?? '—'}
                    </td>
                    <td style={{ fontSize: 12.5, color: '#94a3b8', whiteSpace: 'nowrap' }}>
                      {formatDate(post.published_at || post.created_at)}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
});

// ─── Quick Actions section ────────────────────────────────────────────────────
const QuickActions = memo(function QuickActions() {
  return (
    <Card title="Quick Actions">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 12,
        }}
      >
        {QUICK_ACTIONS.map(({ to, label, desc, icon, accent, bg }) => (
          <Link
            key={to}
            to={to}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              padding: '14px',
              background: '#f8fafc',
              borderRadius: 10,
              border: '1px solid #e2e8f0',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = accent;
              e.currentTarget.style.background  = bg;
              e.currentTarget.style.transform   = 'translateY(-2px)';
              e.currentTarget.style.boxShadow   = `0 4px 12px ${accent}22`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.background  = '#f8fafc';
              e.currentTarget.style.transform   = 'none';
              e.currentTarget.style.boxShadow   = 'none';
            }}
            aria-label={label}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 9,
                background: bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                flexShrink: 0,
                border: `1px solid ${accent}33`,
              }}
              aria-hidden="true"
            >
              {icon}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0f172a', marginBottom: 2, lineHeight: 1.2 }}>
                {label}
              </div>
              <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.4 }}>
                {desc}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
});

// ─── Activity Feed ────────────────────────────────────────────────────────────
const ActivityFeed = memo(function ActivityFeed() {
  return (
    <Card title="Activity Feed">
      <div>
        {ACTIVITY.map((a) => (
          <div key={a.id} className="cms-activity-item">
            <div
              className="cms-activity-dot"
              style={{ background: a.dot }}
              aria-hidden="true"
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, color: '#334155', fontWeight: 500, lineHeight: 1.4 }}>
                {a.text}
              </div>
              <div style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 3 }}>{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
});

// ─── System Status ────────────────────────────────────────────────────────────
const SystemStatus = memo(function SystemStatus() {
  return (
    <Card title="System Status">
      <div>
        {STATUS_ITEMS.map((item) => (
          <div key={item.label} className="cms-status-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                className="cms-status-dot"
                style={{ background: item.dot, boxShadow: `0 0 5px ${item.dot}` }}
                aria-hidden="true"
              />
              <span style={{ fontSize: 13.5, color: '#334155', fontWeight: 500 }}>
                {item.label}
              </span>
            </div>
            <StatusBadge status={item.status} />
          </div>
        ))}
      </div>
    </Card>
  );
});

// ─── KPI row (reads from DashboardContext) ────────────────────────────────────
function KPIRow() {
  const { stats, loading, error, refresh } = useDashboard();

  if (error) {
    return (
      <div style={{ marginBottom: 24 }}>
        <ErrorState message={error} onRetry={refresh} />
      </div>
    );
  }

  return (
    <div className="cms-stat-grid" role="region" aria-label="Key performance indicators">
      {KPI_CARDS(stats).map((card) => (
        <StatCard key={card.label} {...card} loading={loading} />
      ))}
    </div>
  );
}

// ─── Inner dashboard (inside DashboardProvider) ───────────────────────────────
function DashboardContent() {
  const { user } = useAuth();
  const displayName = user?.email?.split('@')[0] ?? 'Admin';

  return (
    <>
      <PageHeader
        title={`Good ${getGreeting()}, ${displayName} 👋`}
        subtitle="Here's a live overview of your SEO Submit blog content."
        actions={
          <Link to="/cms/blogs/new" className="cms-btn cms-btn-primary">
            ✍ New Post
          </Link>
        }
      />

      <PageContainer>
        {/* KPI Stats */}
        <KPIRow />

        {/* Recent Posts */}
        <RecentPosts />

        {/* Bottom two-col grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
          }}
          className="cms-bottom-grid"
        >
          <QuickActions />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <ActivityFeed />
            <SystemStatus />
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="cms-card"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)',
            border: '1px solid rgba(99,102,241,0.3)',
          }}
        >
          <div
            className="cms-card-body"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div
                style={{ fontSize: 18, fontWeight: 800, color: '#f1f5f9', marginBottom: 6 }}
              >
                🚀 Ready to grow your organic traffic?
              </div>
              <p style={{ fontSize: 13.5, color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                Publish SEO-optimised blog posts to attract qualified leads.
              </p>
            </div>
            <Link
              to="/cms/blogs/new"
              className="cms-btn cms-btn-primary"
              style={{ flexShrink: 0 }}
            >
              ✍ Write First Post
            </Link>
          </div>
        </div>
      </PageContainer>

      {/* Responsive fix for bottom grid */}
      <style>{`
        @media (max-width: 900px) {
          .cms-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

// ─── DashboardPage (provides context) ────────────────────────────────────────
export default function DashboardPage() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}
