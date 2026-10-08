import React, { useEffect, useRef, useState } from 'react';

export default function ScrollRevealText({ text, className = "" }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress between 0 and 1 as element moves up through viewport
      const startThreshold = windowHeight * 0.85;
      const endThreshold = windowHeight * 0.3;
      
      const currentPos = rect.top;
      let progress = (startThreshold - currentPos) / (startThreshold - endThreshold);
      progress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = text.split(' ');
  const totalWords = words.length;

  return (
    <div ref={containerRef} className={`leading-relaxed tracking-tight ${className}`}>
      {words.map((word, idx) => {
        const wordThreshold = idx / totalWords;
        const isRevealed = scrollProgress >= wordThreshold;

        return (
          <span
            key={idx}
            className="inline-block mr-[0.3em] transition-all duration-300 transform"
            style={{
              opacity: isRevealed ? 1 : 0.2,
              color: isRevealed ? '#ffffff' : '#94a3b8',
              transform: isRevealed ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.98)',
              textShadow: isRevealed ? '0 0 20px rgba(245, 158, 11, 0.3)' : 'none'
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
