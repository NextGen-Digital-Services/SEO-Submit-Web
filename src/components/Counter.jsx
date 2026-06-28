import React from 'react';
import useCountUp from '../hooks/useCountUp';

export const Counter = ({ value, duration = 2000 }) => {
  const displayVal = useCountUp(value, duration);
  return <span>{displayVal}</span>;
};

export default Counter;
