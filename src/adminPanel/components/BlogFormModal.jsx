import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { C, F } from '../../styles/tokens';
import { uploadToCloudinary, validateImageFile } from '../../services/cloudinaryService';

export const BlogFormModal = ({ isOpen, onClose, onSave, initialData, actionLoading }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'SEO',
    image: '',
    shortDescription: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    status: 'Published',
  });

  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        slug: initialData.slug || '',
        category: initialData.category || 'SEO',
        image: initialData.cover_image || initialData.image || '',
        shortDescription: initialData.excerpt || initialData.shortDescription || '',
        content: initialData.content || '',
        metaTitle: initialData.seo_title || initialData.metaTitle || '',
        metaDescription: initialData.seo_description || initialData.metaDescription || '',
        status: initialData.status === 'published' || initialData.status === 'Published' ? 'Published' : 'Draft',
      });
    } else {
      setFormData({
        title: '',
        slug: '',
        category: 'SEO',
        image: '',
        shortDescription: '',
        content: '',
        metaTitle: '',
        metaDescription: '',
        status: 'Published',
      });
    }
    setUploadError(null);
    setUploadingImage(false);
    setUploadProgress(0);
  }, [initialData, isOpen]);

  // Auto slug generator from title
  const handleTitleChange = (e) => {
    const val = e.target.value;
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: initialData ? prev.slug : generatedSlug,
    }));
  };

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  // Image Upload to Cloudinary with Progress
  const handleImageFileSelect = async (file) => {
    if (!file) return;

    setUploadError(null);

    // Validate size and format
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setUploadError(validation.error);
      return;
    }

    setUploadingImage(true);
    setUploadProgress(0);

    const { url, publicId, error } = await uploadToCloudinary(file, (percent) => {
      setUploadProgress(percent);
    });

    setUploadingImage(false);

    if (error) {
      setUploadError(error);
    } else if (url) {
      setFormData((prev) => ({
        ...prev,
        image: url,
        cover_image: url,
        cloudinary_public_id: publicId,
        publicId: publicId,
      }));
      setUploadProgress(100);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadingImage) return;
    onSave(formData);
  };

  if (!isOpen) return null;

  const isSubmitDisabled = actionLoading || uploadingImage;

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
            background: 'rgba(255, 255, 255, 0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(226, 232, 240, 0.95)',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '680px',
            maxHeight: '88vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.04)',
            color: '#0F172A',
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
        {/* Modal Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#F8FAFC',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: C.navy,
                color: C.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
              }}
            >
              <i className={initialData ? 'ti ti-edit' : 'ti ti-news'} />
            </div>
            <div>
              <h2 style={{ fontFamily: F.display, fontWeight: 600, fontSize: '18px', color: '#0F172A', letterSpacing: '-0.01em' }}>
                {initialData ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              <span style={{ fontFamily: F.body, fontSize: '12px', color: '#64748B', fontWeight: 400 }}>
                Cloudinary Optimized Image & Supabase Integration
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748B',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0F172A';
              e.currentTarget.style.background = '#E2E8F0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#64748B';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <i className="ti ti-x" />
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
          <div
            className="hide-scrollbar"
            style={{
              padding: '24px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            {/* Title & Slug Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontFamily: F.body, fontWeight: 600, fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
                  Title (title) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Why Exclusive Leads Beat Shared Leads"
                  value={formData.title}
                  onChange={handleTitleChange}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    fontFamily: F.body,
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: F.body, fontWeight: 600, fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
                  Slug (slug) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. why-exclusive-leads-beat-shared-leads"
                  value={formData.slug}
                  onChange={(e) => handleChange('slug', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    fontFamily: F.body,
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                />
              </div>
            </div>

            {/* Category & Status Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontFamily: F.body, fontWeight: 600, fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
                  Category (category) *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    fontFamily: F.body,
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  <option value="SEO">SEO</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Lead Gen">Lead Gen</option>
                  <option value="Business Growth">Business Growth</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: F.body, fontWeight: 600, fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
                  Status (status)
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['Published', 'Draft'].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleChange('status', st)}
                      style={{
                        flex: 1,
                        padding: '9px',
                        borderRadius: '8px',
                        border: formData.status === st ? `1px solid ${C.blue}` : '1px solid #E2E8F0',
                        background: formData.status === st ? C.blue : '#FFFFFF',
                        color: formData.status === st ? C.white : '#475569',
                        fontFamily: F.body,
                        fontWeight: 600,
                        fontSize: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Image Upload to Cloudinary */}
            <div>
              <label style={{ display: 'block', fontFamily: F.body, fontWeight: 600, fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
                Featured Image (Cloudinary Auto WEBP) *
              </label>

              {uploadError && (
                <div style={{ background: '#FFF1F2', border: '1px solid #FECDD3', color: '#E11D48', padding: '8px 12px', borderRadius: '8px', fontSize: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <i className="ti ti-alert-circle" />
                  <span>{uploadError}</span>
                </div>
              )}

              {uploadingImage ? (
                <div style={{ padding: '24px', border: '1px solid #E2E8F0', borderRadius: '10px', background: '#F8FAFC', textAlign: 'center' }}>
                  <i className="ti ti-loader-2 spin" style={{ fontSize: '28px', color: C.blue, marginBottom: '8px', display: 'block' }} />
                  <p style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 600, color: '#0F172A', marginBottom: '8px' }}>
                    Uploading & Optimizing Image to Cloudinary... ({uploadProgress}%)
                  </p>
                  <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${uploadProgress}%`, height: '100%', background: C.blue, transition: 'width 0.2s ease' }} />
                  </div>
                </div>
              ) : formData.image ? (
                <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', border: `1px solid #E2E8F0`, maxHeight: '160px', background: '#F8FAFC' }}>
                  <img
                    src={formData.image}
                    alt="Featured preview"
                    style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      display: 'flex',
                      gap: '8px',
                    }}
                  >
                    <label
                      style={{
                        background: C.navy,
                        color: C.white,
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontFamily: F.body,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Replace Image
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg, image/webp"
                        style={{ display: 'none' }}
                        onChange={(e) => e.target.files && handleImageFileSelect(e.target.files[0])}
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => handleChange('image', '')}
                      style={{
                        background: '#E11D48',
                        color: C.white,
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontFamily: F.body,
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragOver(true);
                  }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={handleDrop}
                  style={{
                    border: isDragOver ? `2px dashed ${C.blue}` : '2px dashed #CBD5E1',
                    background: isDragOver ? '#EEF2FF' : '#F8FAFC',
                    borderRadius: '10px',
                    padding: '24px',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <i className="ti ti-cloud-upload" style={{ fontSize: '32px', color: C.blue, marginBottom: '6px', display: 'block' }} />
                  <p style={{ fontFamily: F.body, fontSize: '13px', color: '#0F172A', marginBottom: '2px', fontWeight: 600 }}>
                    Drag & drop image here, or{' '}
                    <label style={{ color: C.blue, cursor: 'pointer', textDecoration: 'underline' }}>
                      browse
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg, image/webp"
                        style={{ display: 'none' }}
                        onChange={(e) => e.target.files && handleImageFileSelect(e.target.files[0])}
                      />
                    </label>
                  </p>
                  <span style={{ fontSize: '11px', color: '#94A3B8' }}>
                    JPG, JPEG, PNG, WEBP (Max 5MB • Auto WEBP conversion)
                  </span>
                </div>
              )}
            </div>

            {/* Short Description (shortDescription) */}
            <div>
              <label style={{ display: 'block', fontFamily: F.body, fontWeight: 600, fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
                Short Description (excerpt) *
              </label>
              <textarea
                required
                rows={2}
                placeholder="Summary description displayed on blog cards..."
                value={formData.shortDescription}
                onChange={(e) => handleChange('shortDescription', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontFamily: F.body,
                  fontSize: '13px',
                  fontWeight: 500,
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Full Content (content) */}
            <div>
              <label style={{ display: 'block', fontFamily: F.body, fontWeight: 600, fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
                Full Article Content (content) *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Full article content text for blog detail view..."
                value={formData.content}
                onChange={(e) => handleChange('content', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontFamily: F.body,
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  resize: 'vertical',
                }}
              />
            </div>

            {/* SEO Meta Title & Description */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontFamily: F.body, fontWeight: 600, fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
                  SEO Meta Title (seo_title)
                </label>
                <input
                  type="text"
                  placeholder="Meta title string..."
                  value={formData.metaTitle}
                  onChange={(e) => handleChange('metaTitle', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    fontFamily: F.body,
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: F.body, fontWeight: 600, fontSize: '12px', color: '#334155', marginBottom: '6px' }}>
                  SEO Meta Description (seo_description)
                </label>
                <textarea
                  rows={2}
                  placeholder="Meta snippet description..."
                  value={formData.metaDescription}
                  onChange={(e) => handleChange('metaDescription', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    fontFamily: F.body,
                    fontSize: '13px',
                    fontWeight: 500,
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid #E2E8F0',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              background: '#F8FAFC',
            }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '10px 18px',
                borderRadius: '8px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#475569',
                fontFamily: F.body,
                fontWeight: 600,
                fontSize: '12.5px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitDisabled}
              style={{
                padding: '10px 22px',
                borderRadius: '8px',
                background: C.navy,
                border: 'none',
                color: C.white,
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: '12.5px',
                letterSpacing: '0.3px',
                cursor: isSubmitDisabled ? 'wait' : 'pointer',
                boxShadow: '0 4px 14px rgba(10, 22, 40, 0.2)',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                opacity: isSubmitDisabled ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isSubmitDisabled) {
                  e.currentTarget.style.background = C.blue;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitDisabled) {
                  e.currentTarget.style.background = C.navy;
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {actionLoading || uploadingImage ? (
                <>
                  <i className="ti ti-loader-2 spin" style={{ fontSize: '16px' }} />
                  <span>{uploadingImage ? 'Uploading Image...' : 'Saving Blog...'}</span>
                </>
              ) : (
                <span>{initialData ? 'Update Blog Post' : 'Create Blog Post'}</span>
              )}
            </button>
          </div>
        </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BlogFormModal;
