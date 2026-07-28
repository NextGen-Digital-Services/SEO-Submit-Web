/**
 * src/admin/pages/BlogsPage.jsx  (Part 2 — enhanced stub)
 * Full CRUD table implemented in Part 3.
 */
import React from 'react';
import { Link }         from 'react-router-dom';
import PageHeader       from '../components/PageHeader';
import PageContainer    from '../components/PageContainer';
import Card             from '../components/Card';
import EmptyState       from '../components/EmptyState';

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Blog Posts"
        subtitle="Create, edit, and manage all your published and draft articles."
        breadcrumbs={[
          { label: 'Dashboard', href: '/cms/dashboard' },
          { label: 'Blog Posts' },
        ]}
        actions={
          <Link to="/cms/blogs/new" className="cms-btn cms-btn-primary">
            ✍ New Post
          </Link>
        }
      />
      <PageContainer>
        <Card title="All Posts" noPadding>
          <EmptyState
            icon="✍"
            title="Blog CRUD — coming in Part 3"
            message="A full-featured post manager with search, filters, pagination, inline status toggles, and bulk actions will be built here."
            action={
              <Link to="/cms/blogs/new" className="cms-btn cms-btn-primary">
                ✍ Write First Post
              </Link>
            }
          />
        </Card>
      </PageContainer>
    </>
  );
}
