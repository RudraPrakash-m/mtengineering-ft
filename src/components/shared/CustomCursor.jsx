import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const setDotX = gsap.quickSetter(dot, 'x', 'px');
    const setDotY = gsap.quickSetter(dot, 'y', 'px');
    const setRingX = gsap.quickSetter(ring, 'x', 'px');
    const setRingY = gsap.quickSetter(ring, 'y', 'px');

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setDotX(e.clientX);
      setDotY(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    const ticker = gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      setRingX(pos.x);
      setRingY(pos.y);
    });

    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, input, textarea, select, .cursor-pointer, .interactive-item');
      if (target) {
        gsap.to(ring, {
          scale: 1.6,
          borderColor: '#B8976C',
          backgroundColor: 'rgba(184, 151, 108, 0.08)',
          duration: 0.25,
          ease: 'power2.out',
        });
        gsap.to(dot, {
          scale: 0.6,
          backgroundColor: '#B8976C',
          duration: 0.2,
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('button, a, input, textarea, select, .cursor-pointer, .interactive-item');
      if (target) {
        gsap.to(ring, {
          scale: 1,
          borderColor: 'rgba(184, 151, 108, 0.6)',
          backgroundColor: 'transparent',
          duration: 0.25,
          ease: 'power2.out',
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#B8976C',
          duration: 0.2,
        });
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="arch-cursor-dot" />
      <div ref={ringRef} className="arch-cursor-ring" />
    </>
  );
}
