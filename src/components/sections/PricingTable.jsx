import React from 'react';
import { Link } from 'react-router-dom';
import { pricingPlans } from '../../data/pricing';

const PricingTable = () => {
  return (
    <section id="pricing" className="pricing-section section-padding relative overflow-hidden" aria-label="Lead Sourcing Packages and Pricing">
      {/* Decorative Glow */}
      <div className="glow-blur pricing-glow" style={{ bottom: '10%', right: '10%', width: '400px', height: '400px', backgroundColor: 'var(--primary-glow)', pointerEvents: 'none' }}></div>

      <div className="container">
        <div className="section-title-wrapper animate-slide-up" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <span>Pricing Tiers</span>
          </div>
          <h2>Select Your Agency Growth Plan</h2>
          <p className="subtitle" style={{ maxWidth: '720px', margin: '16px auto 0 auto' }}>
            Flexible deposit limits or monthly lead retainers. Choose a volume tier that aligns with your sales targets.
          </p>
        </div>

        <div className="grid-4 pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              className={`glass-card pricing-card animate-slide-up ${plan.popular ? 'popular-card' : ''}`}
              key={index}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div className="pricing-header">
                <span className="plan-name">{plan.name}</span>
                <div className="price-row">
                  <span className="plan-price">{plan.price}</span>
                  <span className="plan-period">/ {plan.period}</span>
                </div>
                <p className="plan-desc">{plan.description}</p>
              </div>

              {/* Action button */}
              <Link to="/contact" className={`btn btn-block mb-4 ${plan.popular ? 'btn-orange' : 'btn-secondary'}`} style={{ marginBottom: '24px' }}>
                {plan.cta}
              </Link>

              {/* Features list */}
              <div className="plan-features-wrapper">
                <span className="features-title">What's included:</span>
                <ul className="plan-features-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <svg className="feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Custom bulk orders note */}
        <p className="bulk-orders-text animate-slide-up">
          Need a custom volume tier or localized geographical targeting limits? <Link to="/contact">Contact our enterprise lead desk</Link> for custom routing packages.
        </p>
      </div>

      <style>{`
        .pricing-section {
          background-color: var(--bg-primary);
          box-sizing: border-box;
        }
        .pricing-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          align-items: stretch;
          box-sizing: border-box;
        }
        .pricing-card {
          padding: 40px 30px;
          text-align: left;
          display: flex;
          flex-direction: column;
          position: relative;
          height: 100%;
          box-sizing: border-box;
        }
        .popular-card {
          border-color: var(--primary);
          box-shadow: var(--shadow-xl), var(--shadow-glow);
          transform: translateY(-8px);
        }
        .popular-card:hover {
          transform: translateY(-12px);
          border-color: var(--secondary);
        }
        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent-orange);
          color: white;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 10px rgba(234, 88, 12, 0.3);
          white-space: nowrap;
        }
        
        .pricing-header {
          margin-bottom: 24px;
        }
        .plan-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          display: block;
          margin-bottom: 12px;
          margin-top: 0;
        }
        .price-row {
          display: flex;
          align-items: baseline;
          margin-bottom: 12px;
        }
        .plan-price {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }
        .plan-period {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-left: 6px;
          font-weight: 600;
        }
        .plan-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }
        
        .plan-features-wrapper {
          border-top: 1px solid var(--border-light);
          padding-top: 24px;
          flex-grow: 1;
          box-sizing: border-box;
        }
        .features-title {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          display: block;
          margin-bottom: 16px;
        }
        .plan-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .feature-check {
          width: 16px;
          height: 16px;
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .btn-block {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          text-decoration: none;
        }
        
        .bulk-orders-text {
          margin-top: 50px;
          font-size: 0.9rem;
          color: var(--text-muted);
          text-align: center;
        }
        .bulk-orders-text a {
          color: var(--primary);
          font-weight: 700;
        }
        .bulk-orders-text a:hover {
          text-decoration: underline;
        }
        
        /* Pricing responsiveness */
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .popular-card {
            transform: none;
          }
          .popular-card:hover {
            transform: translateY(-4px);
          }
          .pricing-card {
            padding: 30px 20px;
          }
        }
        
        @media (max-width: 640px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .section-title-wrapper h2 {
            font-size: 1.8rem;
          }
          .bulk-orders-text {
            margin-top: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingTable;