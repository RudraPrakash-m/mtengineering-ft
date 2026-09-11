import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Global defaults for architectural motion
gsap.defaults({
  ease: 'power3.out',
  duration: 0.9,
});

export { gsap, ScrollTrigger };

/**
 * Reusable image reveal animation with clip path
 */
export const animateImageReveal = (container, triggerElement) => {
  if (!container) return;
  return gsap.fromTo(
    container,
    { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', scale: 1.08 },
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      scale: 1,
      duration: 1.4,
      ease: 'power4.inOut',
      scrollTrigger: triggerElement ? {
        trigger: triggerElement,
        start: 'top 85%',
        once: true,
      } : undefined,
    }
  );
};

/**
 * Split / Stagger text reveal for editorial headings
 */
export const animateTextStagger = (elements, triggerElement, options = {}) => {
  if (!elements || elements.length === 0) return;
  return gsap.fromTo(
    elements,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: options.stagger || 0.12,
      ease: 'power3.out',
      scrollTrigger: triggerElement ? {
        trigger: triggerElement,
        start: 'top 85%',
        once: true,
      } : undefined,
      ...options,
    }
  );
};

/**
 * Parallax effect on scroll
 */
export const createParallax = (element, triggerElement, speed = 0.2) => {
  if (!element) return;
  return gsap.to(element, {
    y: speed * 120,
    ease: 'none',
    scrollTrigger: {
      trigger: triggerElement || element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });
};
