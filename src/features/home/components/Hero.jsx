import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../../../lib/gsap';
import { ArrowRight, Star, CheckCircle2, MapPin, Ruler, Layers, Sparkles, Cpu } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

const hotspots = [
  {
    id: 'louver',
    x: '68%',
    y: '28%',
    labelEn: '5-Axis CNC Teak Louvers',
    labelOr: '୫-ଆକ୍ସିସ୍ ସିଏନ୍‌ସି ସାଗୁଆନ୍ କାଠ',
    spec: '±0.05 mm',
    icon: Layers,
  },
  {
    id: 'joint',
    x: '32%',
    y: '52%',
    labelEn: 'Micro-TIG Steel Joint Mockup',
    labelOr: 'ମାଇକ୍ରୋ-ଟିଆଇଜି ଷ୍ଟିଲ୍ ଜଏଣ୍ଟ',
    spec: 'IS 800 BIS',
    icon: Cpu,
  },
  {
    id: 'lighting',
    x: '55%',
    y: '72%',
    labelEn: '3000K Architectural LED Core',
    labelOr: '୩୦୦୦କେ ଏଲଇଡି ଆଲୋକୀକରଣ',
    spec: 'DMX Controlled',
    icon: Sparkles,
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const { t, isOdia } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }
      ).fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.96, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8 },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50"
    >
      {/* Precision Blueprint Coordinate Background Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Main Content & Value Proposition (7 cols) */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6">

            {/* Desktop Trust Pill (Hidden on Mobile) */}
            <div className="hidden sm:inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
              <Star size={13} className="text-amber-600 fill-amber-600" />
              <span>{t('hero.ratingPill', '4.8 Rating on Justdial')}</span>
              <span className="text-amber-400">•</span>
              <MapPin size={12} className="text-amber-700" />
              <span>{t('hero.locationPill', 'Jaydev Vihar, Bhubaneswar')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-display">
              {t('hero.title', 'Precision Architectural Scale Models & Structural Engineering.')}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t('hero.subtitle', "Odisha's trusted engineering contractor and architectural model studio. We craft high-precision physical models, fabricate heavy structural steel, and cast durable RCC slabs with millimeter accuracy.")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-amber-600/20 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>{t('hero.ctaQuote', 'Get a Free Quote')}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
              >
                <span>{t('hero.ctaProjects', 'View Our Projects')}</span>
              </Link>
            </div>

            {/* Mobile Trust Badge (Placed naturally below CTAs) */}
            <div className="flex sm:hidden items-center flex-wrap gap-2 text-xs font-medium text-slate-500 pt-1">
              <div className="inline-flex items-center gap-1.5 text-amber-900 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-semibold text-[11px]">
                <Star size={12} className="text-amber-600 fill-amber-600" />
                <span>{t('hero.ratingPill', '4.8 Rating on Justdial')}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="inline-flex items-center gap-1 text-slate-600 text-[11px]">
                <MapPin size={11} className="text-amber-600" />
                <span>{t('hero.locationPill', 'Jaydev Vihar, Bhubaneswar')}</span>
              </div>
            </div>

            {/* Live Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-white/70 border border-slate-200/70 rounded-xl shadow-2xs">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                  {isOdia ? '୧୮+' : '18+'}
                </div>
                <div className="text-slate-500 font-medium mt-0.5 text-[11px] sm:text-xs">{t('hero.yearsExp', 'Years Experience')}</div>
              </div>
              <div className="p-3 bg-white/70 border border-slate-200/70 rounded-xl shadow-2xs">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                  {isOdia ? '୧୨୦+' : '120+'}
                </div>
                <div className="text-slate-500 font-medium mt-0.5 text-[11px] sm:text-xs">{t('hero.projectsDelivered', 'Projects Delivered')}</div>
              </div>
              <div className="p-3 bg-amber-50/60 border border-amber-200/60 rounded-xl shadow-2xs">
                <div className="text-xl sm:text-2xl font-extrabold text-amber-700 font-display">
                  {isOdia ? '±୦.୦୫ ମିମି' : '±0.05 mm'}
                </div>
                <div className="text-slate-500 font-medium mt-0.5 text-[11px] sm:text-xs">{t('hero.scalePrecision', 'Scale Precision')}</div>
              </div>
            </div>

          </div>

          {/* Right: Featured Project Visual Card (5 cols) with Interactive Engineering Hotspots */}
          <div ref={visualRef} className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white p-3 border border-slate-200/90 shadow-2xl">

              {/* Image Container */}
              <div className="relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
                  alt="Architectural Scale Model and Steel Engineering by MT Engineering"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-white/10 shadow-lg">
                  <Ruler size={13} className="text-amber-400" />
                  <span>{t('hero.showcaseTag', '1:100 Scale Model Showcase')}</span>
                </div>

                {/* Interactive Engineering Hotspots */}
                {hotspots.map((hs) => {
                  const Icon = hs.icon;
                  const isSelected = activeHotspot === hs.id;
                  return (
                    <div
                      key={hs.id}
                      className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: hs.x, top: hs.y }}
                      onMouseEnter={() => setActiveHotspot(hs.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                      onClick={() => setActiveHotspot(isSelected ? null : hs.id)}
                    >
                      {/* Pulsing Pin Button */}
                      <button
                        type="button"
                        aria-label={hs.labelEn}
                        className={`relative w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 scale-125 shadow-lg shadow-amber-500/50'
                            : 'bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-amber-400/80'
                        }`}
                      >
                        <span className="absolute inset-0 rounded-full bg-amber-400/40 animate-ping" />
                        <Icon size={12} className="relative z-10" />
                      </button>

                      {/* Hotspot Flyout Tooltip Card */}
                      {isSelected && (
                        <div className="absolute left-1/2 -top-2 transform -translate-x-1/2 -translate-y-full w-48 p-2.5 bg-slate-950/95 backdrop-blur-md border border-amber-400/40 rounded-xl shadow-2xl text-left pointer-events-none animate-fadeIn">
                          <div className="text-[11px] font-bold text-amber-400">
                            {isOdia ? hs.labelOr : hs.labelEn}
                          </div>
                          <div className="text-[10px] text-slate-300 font-mono mt-0.5">
                            Spec: {hs.spec}
                          </div>
                          <div className="w-2 h-2 bg-slate-950 border-r border-b border-amber-400/40 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-xl">
                  <div className="flex items-center justify-between text-xs text-amber-700 font-bold mb-1">
                    <span>{t('hero.showcaseTitle', 'MAYFAIR HERITAGE PAVILION')}</span>
                    <span className="text-slate-400 font-mono text-[11px] font-normal">{t('hero.showcaseLoc', 'Jaydev Vihar, BBSR')}</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {t('hero.showcaseDesc', 'Physical acrylic CNC scale model with integrated 3000K internal illumination and structural steel framing.')}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Feature Row */}
              <div className="px-3 pt-3 pb-1 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  {t('hero.badgeCnc', 'In-House CNC Fabrication')}
                </span>
                <span className="font-mono text-slate-400">{t('hero.badgeIso', 'ISO & BIS Standards')}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
