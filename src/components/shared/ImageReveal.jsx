import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

export default function ImageReveal({
  src,
  alt,
  aspectRatio = 'aspect-[16/10]',
  className = '',
  scaleTag,
  materialTag,
  caption,
  priority = false,
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    if (!container || !img) return;

    if (priority) {
      gsap.fromTo(
        container,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.1,
        }
      );
    } else {
      gsap.fromTo(
        container,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }
  }, [priority]);

  return (
    <div className={`group relative ${className}`}>
      <div
        ref={containerRef}
        className={`relative overflow-hidden w-full rounded-xl ${aspectRatio} bg-slate-100 border border-slate-200/80 shadow-sm`}
      >
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading={priority ? 'eager' : 'lazy'}
        />

        {/* Clean Badges */}
        {(scaleTag || materialTag) && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
            {scaleTag && (
              <span className="bg-slate-900/85 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs shadow-sm">
                Scale {scaleTag}
              </span>
            )}
            {materialTag && (
              <span className="bg-amber-600/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs shadow-sm">
                {materialTag}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Optional Caption */}
      {caption && (
        <p className="mt-2 text-xs text-slate-600 font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
          {caption}
        </p>
      )}
    </div>
  );
}
