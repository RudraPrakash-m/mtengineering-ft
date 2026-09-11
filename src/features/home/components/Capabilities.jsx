import { Link } from 'react-router-dom';
import SectionHeading from '../../../components/shared/SectionHeading';
import Button from '../../../components/shared/Button';
import { Building2, Compass, Layers, Sparkles, Cpu, Hammer, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function Capabilities() {
  const { t, language } = useLanguage();

  const isOdia = language === 'or';

  const capabilities = [
    {
      icon: Building2,
      number: isOdia ? '୦୧' : '01',
      title: t('homeCapabilities.card1Title', 'Architectural Scale Models'),
      desc: t('homeCapabilities.card1Desc', 'High-detail physical models for design verification, competition bids, and client presentations at scales from 1:50 to 1:500.'),
      tags: t('homeCapabilities.card1Tags', ['Facade Detailing', 'Sectional Reveals', 'Acrylic Illumination']),
    },
    {
      icon: Compass,
      number: isOdia ? '୦୨' : '02',
      title: t('homeCapabilities.card2Title', 'Heavy Structural Steel Works'),
      desc: t('homeCapabilities.card2Desc', 'Heavy industrial truss fabrication, PEB framing, hospital roof superstructures, and marine-grade steel assemblies at our Mancheswar depot.'),
      tags: t('homeCapabilities.card2Tags', ['SAW Beam Welding', 'Truss Fabrication', 'On-Site Erection']),
    },
    {
      icon: Layers,
      number: isOdia ? '୦୩' : '03',
      title: t('homeCapabilities.card3Title', 'RCC Slab Contracting'),
      desc: t('homeCapabilities.card3Desc', 'Post-tensioned commercial floor slabs, multi-strand prestressing, hydraulic jacking, and heavy foundation concrete works across Odisha.'),
      tags: t('homeCapabilities.card3Tags', ['Post-Tensioned Slabs', 'BIS Quality Standards', 'Commercial RCC']),
    },
    {
      icon: Sparkles,
      number: isOdia ? '୦୪' : '04',
      title: t('homeCapabilities.card4Title', 'Urban Masterplan & Topography'),
      desc: t('homeCapabilities.card4Desc', 'Expansive physical city models capturing smart city districts, transit corridors, contour terrain, and multi-acre institutional campuses.'),
      tags: t('homeCapabilities.card4Tags', ['Contour Landscapes', 'LED Zoning Lights', 'Smart City Models']),
    },
    {
      icon: Cpu,
      number: isOdia ? '୦୫' : '05',
      title: t('homeCapabilities.card5Title', 'Engineering & Cutaway Models'),
      desc: t('homeCapabilities.card5Desc', 'Working mechanical cutaways, bridge tension models, subsea jetty foundations, and complex plant equipment physical prototypes.'),
      tags: t('homeCapabilities.card5Tags', ['Structural Cutaways', 'Working Mechanics', 'Industrial Prototypes']),
    },
    {
      icon: Hammer,
      number: isOdia ? '୦୬' : '06',
      title: t('homeCapabilities.card6Title', 'Hospital & Commercial Extensions'),
      desc: t('homeCapabilities.card6Desc', 'Turnkey structural civil contracting for healthcare facilities, commercial office towers, and institutional building expansions.'),
      tags: t('homeCapabilities.card6Tags', ['Hospital Expansions', 'Steel-RCC Hybrids', 'Fast-Track Handover']),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <SectionHeading
            number={isOdia ? '୦୩' : '03'}
            tag={t('homeCapabilities.tag', '03 • OUR SERVICES & DISCIPLINES')}
            title={t('homeCapabilities.title', 'Comprehensive Engineering & Scale Fabrication')}
            subtitle={t('homeCapabilities.subtitle', 'From sub-millimeter architectural physical models to heavy structural steel and RCC construction.')}
            className="!mb-0"
          />
          <div className="mt-4 md:mt-0">
            <Button to="/capabilities" variant="secondary" size="md">
              {t('homeCapabilities.viewScope', 'View Detailed Scope')}
            </Button>
          </div>
        </div>

        {/* 6 Capabilities Architectural Technical Matrix — Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-300/80">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const tags = Array.isArray(cap.tags) ? cap.tags : [];
            return (
              <div
                key={idx}
                className="group p-8 lg:p-10 border-r border-b border-slate-300/80 flex flex-col justify-between transition-colors duration-300 hover:bg-white/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/60">
                    <span className="font-mono text-xs font-bold text-amber-700 uppercase tracking-widest">
                      // {cap.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>

                {/* Tags Strip */}
                <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                  {tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono font-medium text-slate-600 bg-white border border-slate-200/80 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
