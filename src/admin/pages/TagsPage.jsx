/**
 * src/admin/pages/TagsPage.jsx  (Part 2 — enhanced stub)
 * Full CRUD implemented in Part 3.
 */
import React from 'react';
import PageHeader    from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import Card          from '../components/Card';
import EmptyState    from '../components/EmptyState';

export default function TagsPage() {
  return (
    <>
      <PageHeader
        title="Tags"
        subtitle="Label posts with searchable tags to improve discoverability."
        breadcrumbs={[
          { label: 'Dashboard', href: '/cms/dashboard' },
          { label: 'Tags' },
        ]}
        actions={
          <button className="cms-btn cms-btn-primary" disabled type="button">
            + New Tag
          </button>
        }
      />
      <PageContainer>
        <Card title="All Tags" noPadding>
          <EmptyState
            icon="◇"
            title="Tag management — coming in Part 3"
            message="Create and delete tags. View how many posts use each tag and navigate directly to filtered post lists."
          />
        </Card>
      </PageContainer>
    </>
  );
}
