'use client';

import React, { useEffect, useRef } from 'react';

const DOT_SIZE = 12;
const DOT_COLOR = 'rgba(0, 0, 0, 0.7)';
const DOT_SHADOW = '0 2px 8px rgba(0,0,0,0.15)';

const CursorDot: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Smooth follow (lerp)
      dot.current.x += (mouse.current.x - dot.current.x) * 0.18;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x - DOT_SIZE / 2}px, ${
          dot.current.y - DOT_SIZE / 2
        }px, 0)`;
      }
      animationFrame.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: '50%',
        background: DOT_COLOR,
        boxShadow: DOT_SHADOW,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'background 0.2s',
        willChange: 'transform',
        mixBlendMode: 'multiply',
      }}
      aria-hidden="true"
    />
  );
};

export default CursorDot;
