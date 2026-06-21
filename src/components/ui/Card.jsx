import React from 'react';

const Card = ({
  children,
  className = '',
  hoverable = true,
  ...props
}) => {
  const baseClass = hoverable ? 'glass-card' : 'glass-card-no-hover';

  return (
    <div className={`${baseClass} ${className}`} {...props}>
      {children}
      <style>{`
        .glass-card-no-hover {
          background-color: rgba(var(--bg-secondary), 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          box-shadow: var(--shadow-md);
          border-radius: var(--radius-lg);
        }
      `}</style>
    </div>
  );
};

export default Card;
