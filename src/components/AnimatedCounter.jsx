import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 1800, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  // Extract integer number e.g. "32+" -> 32
  const targetNum = parseInt(end.toString().replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    let animationFrameId;
    let startTimestamp = null;

    const startAnimation = () => {
      startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Smooth cubic ease-out
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * targetNum));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(targetNum);
        }
      };
      animationFrameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Re-trigger animation whenever entering viewport from top or bottom
          setCount(0);
          startAnimation();
        } else {
          // Reset when scrolled out of view so it can animate again when returning
          cancelAnimationFrame(animationFrameId);
          setCount(0);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetNum, duration]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix || (end.toString().includes('+') ? '+' : '')}
    </span>
  );
}
