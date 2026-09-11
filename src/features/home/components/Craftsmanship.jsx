import SectionHeading from '../../../components/shared/SectionHeading';
import ImageReveal from '../../../components/shared/ImageReveal';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function Craftsmanship() {
  const { t, language } = useLanguage();

  const isOdia = language === 'or';

  const craftImages = [
    {
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
      alt: 'Precision Laser and CNC Milling of Architectural Scale Models',
      caption: t('homeCraft.caption1', 'Multi-Axis CNC Machining for Facade Panels'),
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      alt: 'Master Model Maker Hand-Finishing Micro-Timber Details',
      caption: t('homeCraft.caption2', 'Hand Finishing of Architectural Timber Elements'),
    },
    {
      src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop',
      alt: 'Structural Concrete & Steel Engineering Inspection in Bhubaneswar',
      caption: t('homeCraft.caption3', 'Structural Quality Verification & Testing'),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Section Heading Dark */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            number={isOdia ? '୦୪' : '04'}
            tag={t('craftsmanship.tag', 'PHYSICAL CRAFT & RIGOR')}
            title={t('craftsmanship.title', 'Precision Modeling & Heavy Structural Excellence')}
            subtitle={t('craftsmanship.subtitle', 'Every physical scale model and structural joint undergoes rigorous geometric inspection, structural load testing, and material durability checks.')}
            theme="dark"
          />
        </div>

        {/* 3-Column Craftsmanship Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {craftImages.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <ImageReveal
                src={item.src}
                alt={item.alt}
                aspectRatio="aspect-[4/5]"
                className="rounded-2xl overflow-hidden border border-slate-700/60"
              />
              <p className="text-xs text-slate-300 font-medium flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specification Bar */}
        <div className="border-t border-slate-800 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
            <div className="text-amber-400 font-bold uppercase tracking-wider mb-1">{t('homeCraft.stat1Tag', 'TOLERANCE')}</div>
            <div className="text-white text-xl font-bold">{t('homeCraft.stat1Val', '±0.05 mm')}</div>
            <div className="text-slate-400 mt-1">{t('homeCraft.stat1Sub', 'Calibrated optical measurement')}</div>
          </div>
          <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
            <div className="text-amber-400 font-bold uppercase tracking-wider mb-1">{t('homeCraft.stat2Tag', 'MATERIALS')}</div>
            <div className="text-white text-xl font-bold">{t('homeCraft.stat2Val', '40+ Substrates')}</div>
            <div className="text-slate-400 mt-1">{t('homeCraft.stat2Sub', 'Acrylic, hardwoods, steel & resins')}</div>
          </div>
          <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
            <div className="text-amber-400 font-bold uppercase tracking-wider mb-1">{t('homeCraft.stat3Tag', 'LED LIGHTING')}</div>
            <div className="text-white text-xl font-bold">{t('homeCraft.stat3Val', '>95 CRI LEDs')}</div>
            <div className="text-slate-400 mt-1">{t('homeCraft.stat3Sub', 'Zero-thermal fiber optic zones')}</div>
          </div>
          <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
            <div className="text-amber-400 font-bold uppercase tracking-wider mb-1">{t('homeCraft.stat4Tag', 'PROTECTION')}</div>
            <div className="text-white text-xl font-bold">{t('homeCraft.stat4Val', 'Custom Crates')}</div>
            <div className="text-slate-400 mt-1">{t('homeCraft.stat4Sub', 'Shock-damped transit packaging')}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
