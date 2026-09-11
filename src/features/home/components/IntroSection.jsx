import { useRef, useEffect } from 'react';
import { gsap } from '../../../lib/gsap';
import { Compass, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function IntroSection() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.reveal-intro'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-[#FAF9F5] to-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Precision Blueprint Coordinate Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Transparent CNC Spindle Parallax Accent */}
      <div className="hidden lg:block absolute right-4 top-12 w-56 pointer-events-none select-none z-0 opacity-70 transform translate-x-6">
        <img
          src="/images/machinery/cnc_spindle.png"
          alt="5-Axis High-Speed CNC Milling Spindle"
          width="224"
          height="224"
          loading="lazy"
          decoding="async"
          className="w-full h-auto drop-shadow-[0_20px_35px_rgba(15,23,42,0.14)]"
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 reveal-intro">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase mb-4 bg-amber-500/10 text-amber-900 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="font-bold tracking-widest text-[11px] sm:text-xs">{t('intro.tag', 'ABOUT OUR PRACTICE')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {t('intro.title', 'Engineering accuracy from scale models to heavy structural fabrication.')}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('intro.description', 'Located in Jaydev Vihar, Bhubaneswar, MT Engineering & Construction delivers integrated engineering solutions. We combine physical scale model fabrication with full-scale civil engineering, structural steel assembly, and RCC slab contracting across Odisha.')}
          </p>
        </div>

        {/* 3 Core Practice Pillars — Seamless Architectural Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 border-y border-slate-300/80 reveal-intro">
          
          {/* Pillar 01 */}
          <div className="group py-10 md:py-12 md:pr-10 lg:pr-12 flex flex-col justify-between transition-colors duration-300 hover:bg-white/40">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold tracking-widest text-amber-700">// 01 &mdash; ATELIER</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  <Compass size={20} />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4 tracking-tight group-hover:text-amber-700 transition-colors">
                {t('intro.card1Title', 'Architectural Scale Models')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {t('intro.card1Desc', 'Precision physical models crafted to tolerances within ±0.05mm. Built for competition bids, design validation, client presentations, and museum vitrines.')}
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-slate-200/60">
              <span className="font-mono text-[11px] text-slate-400 font-semibold tracking-wider">TOLERANCE ±0.05mm</span>
              <Link to="/capabilities" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                <span>{t('nav.capabilities', 'Capabilities')}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="group py-10 md:py-12 md:px-10 lg:px-12 flex flex-col justify-between transition-colors duration-300 hover:bg-white/40">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold tracking-widest text-blue-700">// 02 &mdash; FABRICATION</span>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Building size={20} />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors">
                {t('intro.card2Title', 'Structural Steel Fabrication')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {t('intro.card2Desc', 'Heavy structural PEB framing, industrial shed fabrication, pipe racks, and customized steel superstructures engineered at our dedicated Mancheswar workshop.')}
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-slate-200/60">
              <span className="font-mono text-[11px] text-slate-400 font-semibold tracking-wider">IS 800 STANDARDS</span>
              <Link to="/capabilities" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                <span>{t('nav.capabilities', 'Capabilities')}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="group py-10 md:py-12 md:pl-10 lg:pl-12 flex flex-col justify-between transition-colors duration-300 hover:bg-white/40">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold tracking-widest text-emerald-700">// 03 &mdash; CONTRACTING</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={20} />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4 tracking-tight group-hover:text-emerald-700 transition-colors">
                {t('intro.card3Title', 'RCC Slab & Civil Contracting')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {t('intro.card3Desc', 'Turnkey post-tensioned RCC slab casting, commercial building extensions, and heavy concrete superstructures built to strict IS 456 standards across Odisha.')}
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-slate-200/60">
              <span className="font-mono text-[11px] text-slate-400 font-semibold tracking-wider">IS 456 CERTIFIED</span>
              <Link to="/about" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                <span>{t('nav.about', 'About')}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
