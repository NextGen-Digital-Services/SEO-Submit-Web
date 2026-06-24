import React from 'react';
import { C, F } from '../styles/tokens';

export const Eyebrow = ({ label, labelColor = C.blue, barColor = C.yellow }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
    <div style={{ width: '30px', height: '3px', background: barColor }} />
    <span style={{
      fontFamily: F.display,
      fontWeight: '800',
      fontSize: '10px',
      letterSpacing: '3px',
      color: labelColor,
      textTransform: 'uppercase',
    }}>
      {label}
    </span>
  </div>
);

export default Eyebrow;
