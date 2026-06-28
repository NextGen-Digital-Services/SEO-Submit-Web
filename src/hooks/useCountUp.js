import { useState, useEffect } from 'react';

export const useCountUp = (val, duration = 2000) => {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!val) return;
    const strVal = String(val);
    const clean = strVal.replace(/,/g, '');
    const match = clean.match(/([0-9]+)/);

    if (match) {
      const numStr = match[1];
      const target = parseInt(numStr, 10);
      const numIdx = clean.indexOf(numStr);
      
      const prefix = clean.substring(0, numIdx);
      const suffix = clean.substring(numIdx + numStr.length);
      const hasCommas = strVal.includes(',');

      const stepTime = 30; // 30ms interval
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        
        if (step >= totalSteps) {
          clearInterval(timer);
          const finalNum = hasCommas ? target.toLocaleString() : target;
          setDisplayValue(`${prefix}${finalNum}${suffix}`);
        } else {
          const rounded = Math.floor(current);
          const displayNum = hasCommas ? rounded.toLocaleString() : rounded;
          setDisplayValue(`${prefix}${displayNum}${suffix}`);
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else {
      setDisplayValue(strVal);
    }
  }, [val, duration]);

  return displayValue;
};

export default useCountUp;
