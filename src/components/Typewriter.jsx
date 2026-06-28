import React, { useState, useEffect } from 'react';

export const Typewriter = ({ segments, speed = 60 }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  
  const totalLength = segments.reduce((sum, seg) => sum + seg.text.length, 0);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setVisibleChars(current);
      if (current >= totalLength) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [totalLength, speed]);

  let remaining = visibleChars;

  return (
    <>
      {segments.map((seg, idx) => {
        if (remaining <= 0) return null;
        const textToShow = seg.text.substring(0, remaining);
        remaining -= seg.text.length;
        
        return (
          <span key={idx} style={seg.style}>
            {textToShow}
          </span>
        );
      })}
    </>
  );
};

export default Typewriter;
