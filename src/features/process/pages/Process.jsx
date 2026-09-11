import { useEffect, useRef } from 'react';
import { gsap } from '../../../lib/gsap';
import SectionHeading from '../../../components/shared/SectionHeading';
import ImageReveal from '../../../components/shared/ImageReveal';
import Button from '../../../components/shared/Button';
import { CheckCircle, Clock, FileCheck, ShieldAlert, Truck } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function Process() {
  const containerRef = useRef(null);
  const { t, language } = useLanguage();
  const isOdia = language === 'or';

  const processPhases = [
    {
      number: isOdia ? '୦୧' : '01',
      title: t('processPage.phase1Title', 'Consultation & Drawing Review'),
      subtitle: t('processPage.phase1Sub', 'Decoding Architectural & Structural Intent'),
      desc: t('processPage.phase1Desc', 'Every project begins with a structured technical dialogue. We review your 3D BIM models (Revit, Rhino, SketchUp) and 2D CAD drawings, evaluating scale feasibility, sectional reveal planes, material finishes, and milestone timelines.'),
      keyActions: t('processPage.phase1Actions', [
        'Scale ratio optimization (evaluating 1:50 vs 1:100 vs 1:200)',
        'Structural feasibility & sectional cut planning',
        'Material sample selection and client sign-off',
        'Preparation of definitive fabrication milestone timeline',
      ]),
      deliverable: t('processPage.phase1Deliverable', 'Approved Fabrication Scope & Material Board'),
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: isOdia ? '୦୨' : '02',
      title: t('processPage.phase2Title', 'CAD Modeling & Programming'),
      subtitle: t('processPage.phase2Sub', 'Parametric Toolpaths & Structural Sub-Assemblies'),
      desc: t('processPage.phase2Desc', 'We prepare precision CNC toolpaths and 3D print slicing files. We engineer concealed internal aluminum or timber skeletons, wiring channels for LED lighting zones, and modular magnetic locks for removable roof sections.'),
      keyActions: t('processPage.phase2Actions', [
        'High-speed CNC G-code toolpath generation',
        'High-resolution photopolymer SLA print preparation',
        'Engineering concealed magnetic joinery and structural framing',
        'Circuit design for addressable 3000K LED lighting zones',
      ]),
      deliverable: t('processPage.phase2Deliverable', 'Engineered Machining Blueprints & 3D Assembly Files'),
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: isOdia ? '୦୩' : '03',
      title: t('processPage.phase3Title', 'Precision Machining & Fabrication'),
      subtitle: t('processPage.phase3Sub', 'Execution in Bhubaneswar Workshop & Steel Yard'),
      desc: t('processPage.phase3Desc', 'Raw materials are shaped with high precision across our workshops. Micro-milled acrylic facades, laser-profiled contour landscapes, and heavy structural steel beams are machined under strict quality control.'),
      keyActions: t('processPage.phase3Actions', [
        'High-speed CNC milling of acrylic and high-density tooling board',
        'Laser profiling of multi-ply topographical contour layers',
        'Submerged-arc automated welding of heavy structural steel trusses',
        'Casting of micro-aggregate concrete and resin elements',
      ]),
      deliverable: t('processPage.phase3Deliverable', 'Pre-Assembly Dimensioned Components (±0.05mm verified)'),
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: isOdia ? '୦୪' : '04',
      title: t('processPage.phase4Title', 'Hand Assembly & Finishing'),
      subtitle: t('processPage.phase4Sub', 'Craftsmanship, Surface Textures & Lighting Integration'),
      desc: t('processPage.phase4Desc', 'Individual machined parts are hand-assembled by our senior modelmakers. Surfaces receive fine sanding, durable satin clear coats, micro-landscaping foliage, and calibrated internal LED lighting wiring.'),
      keyActions: t('processPage.phase4Actions', [
        'Precision micro-joinery under optical magnification',
        'Multi-stage wet sanding and flame-polished acrylic finishes',
        'Application of non-yellowing UV protective coatings',
        'Lighting color temperature calibration (2700K–4000K warm LED)',
      ]),
      deliverable: t('processPage.phase4Deliverable', 'Completed Physical Scale Artifact & Client Inspection Protocol'),
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: isOdia ? '୦୫' : '05',
      title: t('processPage.phase5Title', 'Delivery & Site Installation'),
      subtitle: t('processPage.phase5Sub', 'Protective Crating & Turnkey Display Mounting'),
      desc: t('processPage.phase5Desc', 'The completed model is secured in custom shock-isolated flight crates. Our technicians handle safe transport across Odisha and Eastern India, providing on-site assembly, vitrine placement, and electrical commissioning.'),
      keyActions: t('processPage.phase5Actions', [
        'Fabrication of custom acrylic/glass display vitrines & plinths',
        'Shock-damped protective crate packaging for transit',
        'On-site assembly, lighting connection, and testing',
        'Provision of cleaning and maintenance guidelines',
      ]),
      deliverable: t('processPage.phase5Deliverable', 'Turnkey Installation & Formal Handover'),
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.process-phase-card'),
      { y: 35, opacity: 0 },
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
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            number={isOdia ? '୦୩' : '03'}
            tag={t('processPage.tag', 'OUR METHODOLOGY')}
            title={t('processPage.title', '5-Stage Scale Model & Engineering Lifecycle')}
            subtitle={t('processPage.subtitle', 'A structured, repeatable workflow that eliminates ambiguity, protects project deadlines, and guarantees flawless physical execution.')}
          />
        </div>

        {/* 5 Stages — Connected Architectural Blueprint Timeline */}
        <div className="space-y-20 md:space-y-28 mb-24 relative">
          {processPhases.map((phase, idx) => {
            const actions = Array.isArray(phase.keyActions) ? phase.keyActions : [];
            return (
              <div
                key={phase.number}
                className="process-phase-card pb-16 md:pb-24 border-b border-slate-300/80 relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                  {/* Left Info (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-xs">
                      <span className="font-mono text-xs font-bold text-amber-700 uppercase tracking-widest">
                        // {t('processPage.stagePrefix', 'STAGE')} {phase.number} &mdash; {phase.subtitle}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {phase.title}
                    </h2>

                    <p className="text-base text-slate-600 leading-relaxed">
                      {phase.desc}
                    </p>

                    {/* Actions Checklist */}
                    <div className="space-y-2 pt-2">
                      <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{t('processPage.activitiesHeading', 'Key Engineering Activities:')}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {actions.map((act, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 p-2.5 rounded-lg bg-white/80 border border-slate-200/80">
                            <CheckCircle size={14} className="text-amber-600 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverable Bar */}
                    <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 flex items-center gap-3 text-xs font-mono">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                        <FileCheck size={15} />
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
                          {t('processPage.deliverablePrefix', 'STAGE DELIVERABLE:')}
                        </span>
                        <span className="text-slate-900 font-bold text-xs font-sans">{phase.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Visual (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-500">
                      <ImageReveal
                        src={phase.image}
                        alt={phase.title}
                        aspectRatio="aspect-[4/3]"
                        scaleTag={`${t('processPage.stagePrefix', 'STAGE')} ${phase.number}`}
                        materialTag="VERIFIED"
                        className="hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Guarantees */}
        <div className="p-8 sm:p-12 bg-slate-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-bold tracking-widest text-[11px] sm:text-xs">{t('processPage.timelineCommitment', 'TIMELINE & QUALITY COMMITMENT')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {t('processPage.commitmentTitle', 'Zero-Tolerance for Submission & Construction Delays.')}
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              {t('processPage.commitmentDesc', 'We maintain synchronized fabrication workflows between our Jaydev Vihar design studio and Mancheswar heavy yard to guarantee on-time project deliveries.')}
            </p>
          </div>
          <Button to="/contact" variant="amber" size="lg">
            {t('processPage.initiateBtn', 'Initiate Project Timeline')}
          </Button>
        </div>

      </div>
    </div>
  );
}
