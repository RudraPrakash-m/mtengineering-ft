import { useRef, useEffect } from 'react';
import { gsap } from '../../lib/gsap';

export default function SectionHeading({
  number,
  tag,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    gsap.fromTo(
      el.children,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, []);

  const isDark = theme === 'dark';

  // Clean tag if it contains redundant prefix numbers (e.g. "02 • " or "୦୨ • ")
  const cleanTag = tag ? tag.replace(/^(?:[0-9]+|[୦-୯]+)\s*[\.•·-]?\s*/u, '').trim() : '';

  return (
    <div
      ref={headingRef}
      className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {/* Top Meta Kicker / Badge */}
      {(cleanTag || number) && (
        <div className={`flex items-center gap-2 mb-3.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase ${
            isDark
              ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
              : 'bg-amber-500/10 text-amber-900 border border-amber-500/20'
          }`}>
            {number && (
              <span className={`font-mono font-bold px-1.5 py-0.5 rounded text-[11px] tracking-normal ${
                isDark ? 'bg-amber-400/20 text-amber-300' : 'bg-amber-600 text-white'
              }`}>
                {number}
              </span>
            )}
            {number && cleanTag && <span className="w-1 h-1 rounded-full bg-amber-500 opacity-60" />}
            {cleanTag && (
              <span className="font-bold tracking-widest text-[11px] sm:text-xs">
                {cleanTag}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Main Title */}
      <h2
        className={`text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg max-w-2xl font-normal leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
