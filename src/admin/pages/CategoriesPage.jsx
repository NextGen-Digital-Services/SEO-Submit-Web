/**
 * src/admin/pages/CategoriesPage.jsx  (Part 2 — enhanced stub)
 * Full CRUD implemented in Part 3.
 */
import React from 'react';
import PageHeader    from '../components/PageHeader';
import PageContainer from '../components/PageContainer';
import Card          from '../components/Card';
import EmptyState    from '../components/EmptyState';

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        title="Categories"
        subtitle="Organise your blog posts into topic categories."
        breadcrumbs={[
          { label: 'Dashboard', href: '/cms/dashboard' },
          { label: 'Categories' },
        ]}
        actions={
          <button className="cms-btn cms-btn-primary" disabled type="button">
            + New Category
          </button>
        }
      />
      <PageContainer>
        <Card title="All Categories" noPadding>
          <EmptyState
            icon="⊟"
            title="Category management — coming in Part 3"
            message="Create and manage categories with name, slug, and description. Categories link directly to blog posts."
          />
        </Card>
      </PageContainer>
    </>
  );
}
