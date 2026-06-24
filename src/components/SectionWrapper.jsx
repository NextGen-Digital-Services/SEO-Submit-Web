import React from 'react';
import { C } from '../styles/tokens';

export const SectionWrapper = ({ id, bg = C.white, children, style = {} }) => (
  <section id={id} style={{ background: bg, padding: '48px 24px', width: '100%', ...style }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
