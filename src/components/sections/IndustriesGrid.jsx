import React, { useState } from 'react';
import { industries } from '../../data/industries';

const IndustriesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Helper to map icon string to inline SVG icons
  const getIcon = (iconName, color) => {
    const props = {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color || "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };

    switch (iconName) {
      case 'Terminal':
        return (
          <svg {...props}>
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        );
      case 'Home':
        return (
          <svg {...props}>
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 'ShoppingBag':
        return (
          <svg {...props}>
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        );
      case 'Briefcase':
        return (
          <svg {...props}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case 'Map':
        return (
          <svg {...props}>
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            <line x1="9" y1="3" x2="9" y2="18" />
            <line x1="15" y1="6" x2="15" y2="21" />
          </svg>
        );
      case 'DollarSign':
        return (
          <svg {...props}>
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      default:
        return (
          <svg {...props}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        );
    }
  };

  return (
    <section id="industries" className="industries-section section-padding relative" aria-label="Target Industries Verticals Sourced">
      <div className="container">
        <div className="section-title-wrapper animate-slide-up" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <line x1="9" y1="22" x2="9" y2="16" />
              <line x1="15" y1="22" x2="15" y2="16" />
              <line x1="9" y1="16" x2="15" y2="16" />
              <path d="M8 6h2v2H8V6zm4 0h2v2h-2V6zm-4 4h2v2H8v-2zm4 0h2v2h-2v-2zm-4 4h2v2H8v-2zm4 0h2v2h-2v-2z" />
            </svg>
            <span>Industries We Serve</span>
          </div>
          <h2>Industries We Serve</h2>
          <p className="subtitle" style={{ maxWidth: '720px', margin: '16px auto 0 auto' }}>
            We source and qualify high-intent B2B prospects across diverse high-value verticals, matching them with your agency's industry expertise.
          </p>
        </div>

        <div className="grid-3 industries-grid">
          {industries.map((ind, idx) => {
            const isHovered = hoveredIndex === idx;
            const primaryColor = idx % 3 === 0 ? 'var(--primary)' : idx % 3 === 1 ? 'var(--accent-cyan)' : 'var(--secondary)';
            
            return (
              <div 
                className="glass-card industry-card animate-slide-up"
                key={ind.id}
                style={{ animationDelay: `${0.1 * idx}s` }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="industry-card-header">
                  <span className="industry-icon-box" style={{ 
                    backgroundColor: isHovered ? primaryColor : 'var(--bg-tertiary)',
                    color: isHovered ? '#ffffff' : primaryColor,
                    borderColor: isHovered ? 'transparent' : 'var(--border-light)'
                  }}>
                    {getIcon(ind.icon, isHovered ? '#ffffff' : primaryColor)}
                  </span>
                  
                  <span className="industry-stat-tag" style={{ 
                    backgroundColor: `${primaryColor}15`, 
                    color: primaryColor 
                  }}>
                    {ind.growth}
                  </span>
                </div>

                <h3 className="industry-name">{ind.name}</h3>
                <p className="industry-benefit">{ind.benefit}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .industries-section {
          background-color: var(--bg-secondary);
          transition: background-color var(--transition-normal);
        }
        .industries-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .industry-card {
          padding: 35px 30px;
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          box-sizing: border-box;
        }
        .industry-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 24px;
        }
        .industry-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-light);
          flex-shrink: 0;
          transition: all var(--transition-normal);
        }
        .industry-stat-tag {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }
        .industry-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 12px;
          margin-top: 0;
        }
        .industry-benefit {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .industries-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .industry-card {
            padding: 24px;
          }
          .industry-card-header {
            margin-bottom: 16px;
          }
          .section-title-wrapper h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesGrid;