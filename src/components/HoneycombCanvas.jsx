import React, { useEffect, useRef } from 'react';

export default function HoneycombCanvas({ height = "100%", interactive = true, density = 45 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let heightPx = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      heightPx = canvas.height = canvas.parentElement.offsetHeight;
      initGrid();
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracker
    let mouse = { x: -1000, y: -1000, radius: 180 };
    
    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    // Hexagon Grid Math
    const hexRadius = density; // distance from center to corner
    const hexWidth = Math.sqrt(3) * hexRadius;
    const hexHeight = 2 * hexRadius;
    const rowStep = (3 / 4) * hexHeight;

    let hexes = [];

    function initGrid() {
      hexes = [];
      const cols = Math.ceil(width / hexWidth) + 2;
      const rows = Math.ceil(heightPx / rowStep) + 2;

      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          const xOffset = (r % 2 !== 0) ? hexWidth / 2 : 0;
          const cx = c * hexWidth + xOffset;
          const cy = r * rowStep;
          
          hexes.push({
            cx,
            cy,
            baseAlpha: Math.random() * 0.15 + 0.05,
            targetAlpha: Math.random() * 0.15 + 0.05,
            currentAlpha: 0.1,
            pulseSpeed: 0.005 + Math.random() * 0.01,
            pulsePhase: Math.random() * Math.PI * 2,
            activeGlow: 0,
            goldLevel: Math.random() > 0.85 ? 1 : 0
          });
        }
      }
    }

    initGrid();

    function drawHexagon(cx, cy, radius, fillStyle, strokeStyle, lineWidth = 1) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }
    }

    let time = 0;

    function render() {
      time += 0.02;
      ctx.clearRect(0, 0, width, heightPx);

      // Gradient background glow overlay
      const bgGrad = ctx.createRadialGradient(
        width / 2, heightPx / 2, 50,
        width / 2, heightPx / 2, Math.max(width, heightPx)
      );
      bgGrad.addColorStop(0, 'rgba(19, 27, 46, 0.4)');
      bgGrad.addColorStop(1, 'rgba(11, 15, 25, 0.95)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, heightPx);

      // Render Hexagon Grid ("Honey ka Chatta")
      hexes.forEach((hex) => {
        // Distance to mouse
        const dx = mouse.x - hex.cx;
        const dy = mouse.y - hex.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let hoverIntensity = 0;
        if (dist < mouse.radius) {
          hoverIntensity = 1 - dist / mouse.radius;
        }

        // Breathing pulse effect
        const pulse = Math.sin(time * hex.pulseSpeed * 5 + hex.pulsePhase) * 0.08;
        let alpha = hex.baseAlpha + pulse + hoverIntensity * 0.55;
        alpha = Math.min(Math.max(alpha, 0.05), 0.85);

        // Colors
        let strokeColor = `rgba(245, 158, 11, ${alpha * 0.7})`;
        let fillColor = `rgba(245, 158, 11, ${alpha * 0.12})`;

        if (hoverIntensity > 0) {
          fillColor = `rgba(249, 115, 22, ${hoverIntensity * 0.35})`;
          strokeColor = `rgba(251, 191, 36, ${Math.min(hoverIntensity + 0.3, 1)})`;
        } else if (hex.goldLevel > 0) {
          strokeColor = `rgba(234, 179, 8, ${0.25 + Math.sin(time + hex.pulsePhase) * 0.15})`;
        }

        drawHexagon(
          hex.cx,
          hex.cy,
          hexRadius - 1.5,
          fillColor,
          strokeColor,
          hoverIntensity > 0 ? 2 : 1
        );

        // Core glowing dot inside hovered or active hexes
        if (hoverIntensity > 0.3) {
          ctx.beginPath();
          ctx.arc(hex.cx, hex.cy, 3 * hoverIntensity, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${hoverIntensity})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [interactive, density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ height }}
    />
  );
}
