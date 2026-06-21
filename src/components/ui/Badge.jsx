import React from 'react';

const Badge = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseClass = 'badge';
  const variantClass = `badge-${variant}`;

  return (
    <span className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
