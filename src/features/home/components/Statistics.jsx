import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../../lib/gsap';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function Statistics() {
  const containerRef = useRef(null);
  const numRefs = useRef([]);
  const { t } = useLanguage();

  const stats = [
    { value: 520, suffix: '+', label: t('stats.stat1Label', 'Projects Completed'), detail: 'Architectural models, RCC slabs & structural steel works across Odisha' },
    { value: 18, suffix: '+ Years', label: t('hero.yearsExp', 'Engineering Heritage'), detail: 'Operating in Jaydev Vihar, Bhubaneswar since 2006' },
    { value: 0.05, suffix: ' mm', isFloat: true, label: t('hero.scalePrecision', 'Standard Tolerance'), detail: 'Calibrated 5-axis CNC & SLA optical alignment' },
    { value: 4.8, suffix: ' ★', isFloat: true, label: t('stats.stat4Label', 'Client Rating'), detail: 'Verified 5-star reviews on Justdial & industry directories' },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        stats.forEach((stat, i) => {
          const target = numRefs.current[i];
          if (!target) return;

          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.value,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              if (target) {
                target.innerText = (stat.isFloat ? obj.val.toFixed(stat.suffix.includes('★') ? 1 : 2) : Math.floor(obj.val)) + stat.suffix;
              }
            },
          });
        });
      },
    });
  }, [t]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 hover:border-slate-600 transition-colors">
              <div
                ref={(el) => (numRefs.current[idx] = el)}
                className="text-4xl sm:text-5xl font-extrabold text-amber-400 tracking-tight mb-2"
              >
                0{item.suffix}
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-1.5">
                {item.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
