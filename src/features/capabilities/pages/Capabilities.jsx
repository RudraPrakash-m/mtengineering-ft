import { useEffect, useRef } from 'react';
import { gsap } from '../../../lib/gsap';
import SectionHeading from '../../../components/shared/SectionHeading';
import ImageReveal from '../../../components/shared/ImageReveal';
import Button from '../../../components/shared/Button';
import { Building2, Compass, Layers, Sparkles, Cpu, Hammer, CheckCircle, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function Capabilities() {
  const containerRef = useRef(null);
  const { t, language } = useLanguage();
  const isOdia = language === 'or';

  const capabilityDetails = [
    {
      id: 'architectural-scale',
      number: isOdia ? '୦୧' : '01',
      title: t('capabilitiesPage.cap1Title', 'Architectural Scale Models'),
      scales: t('capabilitiesPage.cap1Scales', '1:50, 1:100, 1:200, 1:500'),
      leadTime: t('capabilitiesPage.cap1LeadTime', '2–4 Weeks'),
      tolerances: t('capabilitiesPage.cap1Tolerances', '±0.05 mm'),
      desc: t('capabilitiesPage.cap1Desc', 'Precision physical models crafted for design verification, competition bids, and client presentations. We synthesize architectural facades, complex roof structures, interior sectionals, and illuminated floor levels into high-impact models.'),
      methods: t('capabilitiesPage.cap1Methods', [
        'Sub-millimeter CNC acrylic facade machining',
        'Laser-profiled contour topography bases',
        'Architectural timber and metal detailing',
        'Integrated internal 3000K warm LED illumination',
      ]),
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'structural-steel',
      number: isOdia ? '୦୨' : '02',
      title: t('capabilitiesPage.cap2Title', 'Heavy Structural Steel Fabrication'),
      scales: t('capabilitiesPage.cap2Scales', 'Full-Scale Execution'),
      leadTime: t('capabilitiesPage.cap2LeadTime', 'Project-Specific'),
      tolerances: t('capabilitiesPage.cap2Tolerances', 'IS 800 / BIS Standards'),
      desc: t('capabilitiesPage.cap2Desc', 'Automated submerged-arc welding, heavy plate bevelling, truss fabrication, and on-site crane erection for hospital extensions, PEB industrial sheds, and commercial structures from our Mancheswar facility.'),
      methods: t('capabilitiesPage.cap2Methods', [
        'Submerged-Arc Automatic Beam Welding (SAW)',
        'CNC high-definition plasma plate profiling',
        'Ultrasonic & radiographic weld joint testing',
        'Marine-grade epoxy & polyurethane paint coating',
      ]),
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'rcc-slabs',
      number: isOdia ? '୦୩' : '03',
      title: t('capabilitiesPage.cap3Title', 'RCC Slab Contracting & Post-Tensioning'),
      scales: t('capabilitiesPage.cap3Scales', 'Commercial & Institutional'),
      leadTime: t('capabilitiesPage.cap3LeadTime', 'Scheduled Casting'),
      tolerances: t('capabilitiesPage.cap3Tolerances', 'IS 456 Standards'),
      desc: t('capabilitiesPage.cap3Desc', 'High-durability commercial post-tensioned RCC floor slabs, multi-strand prestressing, hydraulic jacking, and heavy foundation concrete works for multi-story towers and commercial centers across Bhubaneswar.'),
      methods: t('capabilitiesPage.cap3Methods', [
        'High-tensile multi-strand tendon profiling',
        'Synchronized hydraulic stressing jacks',
        'Digital cube compression quality testing',
        'Non-shrink high-strength grout injection',
      ]),
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'urban-masterplans',
      number: isOdia ? '୦୪' : '04',
      title: t('capabilitiesPage.cap4Title', 'Urban Masterplan & Topography'),
      scales: t('capabilitiesPage.cap4Scales', '1:500, 1:1000, 1:2500'),
      leadTime: t('capabilitiesPage.cap4LeadTime', '3–6 Weeks'),
      tolerances: t('capabilitiesPage.cap4Tolerances', '±0.08 mm'),
      desc: t('capabilitiesPage.cap4Desc', 'Expansive physical city models capturing smart city districts, transit corridors, contour terrain, and multi-acre institutional campuses. Features addressable LED lighting to highlight zoning boundaries and infrastructure phases.'),
      methods: t('capabilitiesPage.cap4Methods', [
        'Laser-profiled multi-ply contour landscapes',
        'Illuminated acrylic roadway & transit networks',
        'Hand-crafted architectural scale foliage & landscaping',
        'Modular sectional table bases with levelling support',
      ]),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.cap-card-reveal'),
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
    <div ref={containerRef} className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-slate-50 via-[#FAF9F5] to-slate-50/70 relative overflow-hidden">
      
      {/* Precision Blueprint Coordinate Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            number={isOdia ? '୦୨' : '02'}
            tag={t('capabilitiesPage.tag', 'OUR CORE DISCIPLINES')}
            title={t('capabilitiesPage.title', 'Engineering Capabilities & Fabrication Scope')}
            subtitle={t('capabilitiesPage.subtitle', 'Explore our specialized technical disciplines, fabrication parameters, and civil execution capabilities in Bhubaneswar and across Odisha.')}
          />
        </div>

        {/* Detailed Capabilities List — Expansive Alternating Split Rows */}
        <div className="space-y-20 md:space-y-28 mb-24">
          {capabilityDetails.map((cap, idx) => {
            const methods = Array.isArray(cap.methods) ? cap.methods : [];
            return (
              <div
                key={cap.id}
                className={`cap-card-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-16 md:pb-24 border-b border-slate-300/80 ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Col (6 cols) */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-500">
                    <ImageReveal
                      src={cap.image}
                      alt={cap.title}
                      aspectRatio="aspect-[4/3]"
                      scaleTag={cap.scales.split(',')[0]}
                      materialTag={cap.tolerances}
                      className="hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Text & Specs (6 cols) */}
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-xs font-semibold">
                    <span className="font-mono text-xs font-bold text-amber-700 uppercase tracking-widest">
                      // DISCIPLINE {cap.number}
                    </span>
                    <span className="font-mono text-xs text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200/80 font-bold">
                      {t('capabilitiesPage.toleranceLabel', 'Tolerance:')} {cap.tolerances}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {cap.title}
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>

                  {/* Key Methods List */}
                  <div className="space-y-3 pt-2">
                    <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{t('capabilitiesPage.methodsHeading', 'Key Fabrication & Engineering Methods:')}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {methods.map((method, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2 p-2.5 rounded-lg bg-white/80 border border-slate-200/80 text-xs text-slate-700">
                          <Check size={14} className="text-amber-600 shrink-0 mt-0.5" />
                          <span>{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                    <div className="py-2 px-3 bg-white rounded-lg border border-slate-200/80">
                      <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-0.5">
                        {t('capabilitiesPage.leadTimeLabel', 'Typical Scale / Lead Time:')}
                      </span>
                      <span className="text-slate-900 font-bold text-xs">{cap.scales} ({cap.leadTime})</span>
                    </div>
                    <Button to="/contact" variant="amber" size="sm">
                      {t('capabilitiesPage.inquireBtn', 'Inquire for this Service')}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Material & Equipment Matrix — Architectural Technical Grid */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-bold tracking-widest text-[11px] sm:text-xs">{t('capabilitiesPage.inventoryTag', 'WORKSHOP & FIELD INVENTORY')}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('capabilitiesPage.inventoryTitle', 'In-House Machinery & Equipment Arsenal')}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              {t('capabilitiesPage.inventoryDesc', 'We eliminate third-party delays by housing high-precision CNC scale modeling routers, automated submerged-arc steel welders, and concrete testing equipment in Bhubaneswar.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800 border-y border-slate-800">
            <div className="py-8 md:py-6 md:pr-8 space-y-3">
              <div className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest">// 01 &mdash; CNC & LASER</div>
              <div className="text-white font-bold text-lg">{t('capabilities.machinery1Sub', 'High-Speed Multi-Axis CNC & CO2 Laser')}</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {t('capabilities.machinery1Desc', 'Sub-millimeter acrylic, high-density polyurethane tooling board, and timber cutting for precise architectural scale models.')}
              </p>
            </div>

            <div className="py-8 md:py-6 md:px-8 space-y-3">
              <div className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest">// 02 &mdash; STRUCTURAL STEEL</div>
              <div className="text-white font-bold text-lg">{t('capabilities.machinery2Sub', 'Heavy Beam SAW & CNC Plasma Cutting')}</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {t('capabilities.machinery2Desc', 'Automated submerged-arc welding, heavy plate bevelling, and certified truss load-testing at our Mancheswar yard.')}
              </p>
            </div>

            <div className="py-8 md:py-6 md:pl-8 space-y-3">
              <div className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest">// 03 &mdash; RCC & CIVIL LAB</div>
              <div className="text-white font-bold text-lg">{t('capabilities.machinery3Sub', 'Hydraulic Jacking & Concrete Quality Lab')}</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {t('capabilities.machinery3Desc', 'Multi-strand prestressing jacks, digital cube compression testing, and ultrasonic pulse velocity scanners.')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
