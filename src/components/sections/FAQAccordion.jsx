import React, { useState } from 'react';
import { faqs } from '../../data/faq';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding relative" aria-label="Frequently Asked Questions Section">
      <div className="container">
        <div className="section-title-wrapper animate-slide-up" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>Frequently Asked Questions</span>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p className="subtitle" style={{ maxWidth: '720px', margin: '16px auto 0 auto' }}>
            Everything you need to know about our exclusive lead verification, CRM integration options, and replacement guarantees.
          </p>
        </div>

        <div className="faq-accordion-wrapper animate-slide-up">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-len-${index}`;
            const panelId = `panel-len-${index}`;
            return (
              <div 
                className={`glass-card faq-item ${isOpen ? 'active-faq' : ''}`} 
                key={index}
              >
                <button 
                  id={faqId}
                  className="faq-question-btn" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-chevron-icon ${isOpen ? 'rotate' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div 
                  id={panelId}
                  className={`faq-answer-container ${isOpen ? 'expanded' : ''}`}
                  role="region"
                  aria-labelledby={faqId}
                >
                  <div className="faq-answer-content">
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: var(--bg-secondary);
          transition: background-color var(--transition-normal);
        }
        .faq-accordion-wrapper {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-sizing: border-box;
        }
        .faq-item {
          padding: 0;
          overflow: hidden;
          box-sizing: border-box;
          transition: all var(--transition-normal);
        }
        .active-faq {
          border-color: var(--primary-light);
          box-shadow: var(--shadow-md);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          padding: 24px;
          cursor: pointer;
          text-align: left;
          box-sizing: border-box;
        }
        .faq-question-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          padding-right: 20px;
          line-height: 1.4;
        }
        .faq-chevron-icon {
          color: var(--text-muted);
          transition: transform var(--transition-normal);
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .faq-chevron-icon.rotate {
          transform: rotate(180deg);
          color: var(--primary);
        }
        
        .faq-answer-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
        }
        .faq-answer-container.expanded {
          max-height: 1000px; 
          transition: max-height 0.4s ease-in-out;
        }
        .faq-answer-content {
          padding: 0 24px 24px;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          border-top: 1px solid var(--border-light);
          padding-top: 20px;
          box-sizing: border-box;
        }
        
        /* Mobile Spacing Protection */
        @media (max-width: 768px) {
          .faq-question-btn {
            padding: 20px;
          }
          .faq-question-text {
            font-size: 0.95rem;
            padding-right: 16px; /* Avoid overlay breaks on narrow width views */
          }
          .faq-answer-content {
            padding: 0 20px 20px 20px;
            font-size: 0.85rem;
            padding-top: 16px;
          }
          .section-title-wrapper h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQAccordion;