import { useRef, useEffect } from 'react';
import { gsap } from '../../../lib/gsap';
import SectionHeading from '../../../components/shared/SectionHeading';
import Button from '../../../components/shared/Button';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function Process() {
  const containerRef = useRef(null);
  const { t, language } = useLanguage();

  const isOdia = language === 'or';

  const steps = [
    {
      step: isOdia ? '୦୧' : '01',
      name: t('homeProcess.step1Name', 'Understand'),
      phase: t('homeProcess.step1Phase', 'BRIEFING & ANALYSIS'),
      desc: t('homeProcess.step1Desc', 'We review your 2D CAD files, 3D Rhino / Revit BIM models, and architectural intent. We align on scale ratios (e.g., 1:100 vs 1:500), level of abstraction, and key presentation objectives.'),
      deliverable: t('homeProcess.step1Deliverable', 'Fabrication Strategy & Material Board'),
    },
    {
      step: isOdia ? '୦୨' : '02',
      name: t('homeProcess.step2Name', 'Develop'),
      phase: t('homeProcess.step2Phase', 'ENGINEERING & JIGGING'),
      desc: t('homeProcess.step2Desc', 'Translating architectural geometries into machine toolpaths. We design custom internal armature skeletons, internal wiring conduits, and precision assembly jigs to guarantee structural longevity.'),
      deliverable: t('homeProcess.step2Deliverable', 'Toolpath Simulations & Scale Samples'),
    },
    {
      step: isOdia ? '୦୩' : '03',
      name: t('homeProcess.step3Name', 'Fabricate'),
      phase: t('homeProcess.step3Phase', 'PRIMARY MANUFACTURING'),
      desc: t('homeProcess.step3Desc', 'Execution across our workshops using 5-axis CNC machining, micro photochemical etching of brass/steel, SLA resin printing, and precision metal cutting.'),
      deliverable: t('homeProcess.step3Deliverable', 'Component Production & Quality Check'),
    },
    {
      step: isOdia ? '୦୪' : '04',
      name: t('homeProcess.step4Name', 'Refine'),
      phase: t('homeProcess.step4Phase', 'ASSEMBLY & FINISHING'),
      desc: t('homeProcess.step4Desc', 'Master artisans assemble the model by hand. Surfaces receive custom patinas, hand-rubbed oil finishes, optical acrylic polishing, and integrated fiber-optic lighting calibration.'),
      deliverable: t('homeProcess.step4Deliverable', 'Inspection & Lighting Calibration'),
    },
    {
      step: isOdia ? '୦୫' : '05',
      name: t('homeProcess.step5Name', 'Deliver'),
      phase: t('homeProcess.step5Phase', 'CRATING & INSTALLATION'),
      desc: t('homeProcess.step5Desc', 'Models are secured in custom shock-isolated, climate-controlled flight cases. Our technicians oversee transit and provide on-site gallery or boardroom installation.'),
      deliverable: t('homeProcess.step5Deliverable', 'Museum Vitrine & Handover'),
    },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.process-step-card'),
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-[#FBFBFA] relative overflow-hidden">
      
      {/* Floating Transparent Laser Cutting Head Parallax Accent */}
      <div className="hidden xl:block absolute right-8 top-16 w-52 pointer-events-none select-none z-0 opacity-75 transform translate-x-4">
        <img
          src="/images/machinery/laser_head.png"
          alt="Precision Industrial Optical Laser Cutting Head"
          className="w-full h-auto drop-shadow-[0_20px_40px_rgba(15,23,42,0.16)]"
        />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E2D9]">
          <SectionHeading
            number={isOdia ? '୦୫' : '05'}
            tag={t('homeProcess.tag', '5-STAGE METHODOLOGY')}
            title={t('homeProcess.title', 'The Path from Blueprint to Physical Artifact')}
            subtitle={t('homeProcess.subtitle', 'A disciplined, repeatable methodology ensuring that every model is delivered with uncompromising fidelity and zero margin for error.')}
            className="!mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button to="/process" variant="secondary">
              {t('homeProcess.btnFull', 'Explore Full Methodology')}
            </Button>
          </div>
        </div>

        {/* 5 Sequential Process Steps — Architectural Connected Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 lg:divide-x divide-slate-300/80 border-y border-slate-300/80">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="process-step-card p-6 md:p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-white/50 group"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between font-mono text-xs mb-6 pb-3 border-b border-slate-200/60">
                  <span className="text-amber-700 font-bold text-sm tracking-widest">
                    // {item.step}
                  </span>
                  <span className="text-slate-400 text-[10px] tracking-widest uppercase">
                    {t('homeProcess.stagePrefix', 'STAGE')} {item.step}
                  </span>
                </div>

                <div className="font-mono text-[10px] text-amber-700 tracking-widest uppercase mb-1">
                  {item.phase}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 font-mono text-[10px] text-slate-900">
                <span className="text-slate-400 block mb-0.5">{t('homeProcess.outputLabel', 'OUTPUT:')}</span>
                <span className="font-semibold text-slate-800 font-sans">{item.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
