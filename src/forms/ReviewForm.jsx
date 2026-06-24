import React, { useState } from 'react';
import { C, F } from '../styles/tokens';
import { handleFormSubmit } from '../utils/formHandler';
import SuccessMessage from '../components/SuccessMessage';

export const ReviewForm = () => {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    company: '',
    service: '',
    rating: '5',
    review: ''
  });
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [reviewErrors, setReviewErrors] = useState({});
  const [reviewLoading, setReviewLoading] = useState(false);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!reviewForm.name.trim()) {
      errors.name = "Please enter your full name so we can address you properly";
    }
    if (!reviewForm.company.trim()) {
      errors.company = "Please enter your company or agency name";
    }
    if (!reviewForm.service) {
      errors.service = "Please select which type of leads you need";
    }
    if (reviewForm.review.trim().length < 20) {
      errors.review = "Please write your review — minimum 20 characters";
    }

    if (Object.keys(errors).length > 0) {
      setReviewErrors(errors);
      return;
    }

    setReviewErrors({});
    setReviewLoading(true);

    handleFormSubmit({
      name: reviewForm.name,
      company: reviewForm.company,
      service: reviewForm.service,
      message: `Rating: ${reviewForm.rating} Stars | Review: ${reviewForm.review}`
    }, 'Testimonials Page - Leave a Review')
      .then(() => {
        setReviewLoading(false);
        setReviewSuccess(true);
        setReviewForm({
          name: '',
          company: '',
          service: '',
          rating: '5',
          review: ''
        });
      })
      .catch((err) => {
        setReviewLoading(false);
        alert(err.message || 'Failed to submit review. Please try again.');
      });
  };

  return (
    <>
      {reviewSuccess && <SuccessMessage onClose={() => setReviewSuccess(false)} />}
      <form onSubmit={handleReviewSubmit} style={{ display: 'grid', gap: '12px' }} noValidate>
        <div>
          <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
            Your Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Robert Miller"
            value={reviewForm.name}
            onChange={(e) => {
              setReviewForm({ ...reviewForm, name: e.target.value });
              if (reviewErrors.name) setReviewErrors({ ...reviewErrors, name: '' });
            }}
            style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: reviewErrors.name ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
          />
          {reviewErrors.name && (
            <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {reviewErrors.name}
            </span>
          )}
        </div>

        <div>
          <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
            Your Company / Agency Name *
          </label>
          <input
            type="text"
            placeholder="e.g. TechSEO Solutions LLC"
            value={reviewForm.company}
            onChange={(e) => {
              setReviewForm({ ...reviewForm, company: e.target.value });
              if (reviewErrors.company) setReviewErrors({ ...reviewErrors, company: '' });
            }}
            style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: reviewErrors.company ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
          />
          {reviewErrors.company && (
            <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {reviewErrors.company}
            </span>
          )}
        </div>

        <div>
          <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
            Which Service Did You Use? *
          </label>
          <select
            value={reviewForm.service}
            onChange={(e) => {
              setReviewForm({ ...reviewForm, service: e.target.value });
              if (reviewErrors.service) setReviewErrors({ ...reviewErrors, service: '' });
            }}
            style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: reviewErrors.service ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
          >
            <option value="">-- Select the service you used --</option>
            <option value="SEO Leads">SEO Leads</option>
            <option value="Web Design Leads">Web Design Leads</option>
            <option value="Appointment Leads">Appointment Fixed Leads</option>
            <option value="All Services">All Services</option>
          </select>
          {reviewErrors.service && (
            <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {reviewErrors.service}
            </span>
          )}
        </div>

        <div>
          <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
            Your Rating *
          </label>
          <select
            value={reviewForm.rating}
            onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
            style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0 }}
          >
            <option value="5">5 Stars — Excellent</option>
            <option value="4">4 Stars — Very Good</option>
            <option value="3">3 Stars — Good</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontFamily: F.display, fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#FFD600', marginBottom: '6px' }}>
            Write Your Review *
          </label>
          <textarea
            placeholder="Share your honest experience with SEO Submit Web. How did our leads help your agency grow? What results did you see? How was the quality and support? (Minimum 50 words)"
            rows="4"
            value={reviewForm.review}
            onChange={(e) => {
              setReviewForm({ ...reviewForm, review: e.target.value });
              if (reviewErrors.review) setReviewErrors({ ...reviewErrors, review: '' });
            }}
            style={{ width: '100%', padding: '12px 14px', fontSize: '13px', fontFamily: F.body, border: reviewErrors.review ? '2px solid #ff4444' : '2px solid #2a3d6a', background: '#1a2a4a', color: '#ffffff', marginBottom: '4px', outline: 'none', borderRadius: 0, resize: 'vertical' }}
          />
          {reviewErrors.review && (
            <span style={{ color: '#ff4444', fontSize: '11px', fontFamily: F.body, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {reviewErrors.review}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={reviewLoading}
          style={{
            background: reviewLoading ? '#cccccc' : C.yellow,
            color: reviewLoading ? '#666666' : C.navy,
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: '12px',
            letterSpacing: '2px',
            padding: '14px 28px',
            border: 'none',
            cursor: reviewLoading ? 'not-allowed' : 'pointer',
            borderRadius: 0,
            marginTop: '12px',
            width: '100%',
          }}
        >
          {reviewLoading ? 'SENDING...' : (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', width: '100%' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              SUBMIT YOUR REVIEW →
            </span>
          )}
        </button>
      </form>
    </>
  );
};

export default ReviewForm;
