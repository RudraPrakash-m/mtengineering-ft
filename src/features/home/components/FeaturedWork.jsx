import { Link } from 'react-router-dom';
import SectionHeading from '../../../components/shared/SectionHeading';
import ImageReveal from '../../../components/shared/ImageReveal';
import Button from '../../../components/shared/Button';
import { projectsData } from '../../work/data/projectsData';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function FeaturedWork() {
  const { t, language } = useLanguage();
  const isOdia = language === 'or';
  const featured = projectsData.filter((p) => p.featured);
  const mainProject = featured[0]; // Mayfair Heritage Pavilion
  const secondary1 = featured[1]; // Bhubaneswar Smart City Hub
  const secondary2 = featured[2]; // Hospital Complex Extension
  const tertiary = featured[3]; // Utkal Post-Tensioned RCC Slabs

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAF9F5] via-white to-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Precision Blueprint Coordinate Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header with View All Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200/80">
          <SectionHeading
            number={isOdia ? '୦୨' : '02'}
            tag={t('work.tag', 'PORTFOLIO HIGHLIGHTS')}
            title={t('work.title', 'Featured Projects & Scale Models')}
            subtitle={t('work.subtitle', 'Selected physical scale models, commercial RCC slab contracts, and structural steel works executed across Odisha.')}
            className="!mb-0"
          />
          <div className="mt-4 md:mt-0">
            <Button to="/work" variant="secondary" size="md">
              {t('work.viewAll', `View All ${projectsData.length}+ Projects`)}
            </Button>
          </div>
        </div>

        {/* Asymmetric Architectural Monograph Showcase */}
        <div className="space-y-16 md:space-y-24">
          
          {/* Main Large Featured Project — Unboxed Split Editorial */}
          {mainProject && (
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-16 border-b border-slate-200/80">
              <div className="lg:col-span-7">
                <Link to={`/work/${mainProject.id}`} className="block overflow-hidden rounded-2xl border border-slate-200/80 shadow-md group-hover:shadow-2xl group-hover:border-amber-500/40 transition-all duration-500">
                  <ImageReveal
                    src={mainProject.heroImage}
                    alt={mainProject.title}
                    aspectRatio="aspect-[16/10]"
                    scaleTag={mainProject.scale}
                    materialTag={mainProject.materials[0]}
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </Link>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-bold text-amber-700 uppercase tracking-widest">
                      // FEATURED &mdash; {mainProject.category}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-medium">{mainProject.year}</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 group-hover:text-amber-600 transition-colors leading-tight">
                    <Link to={`/work/${mainProject.id}`}>
                      {mainProject.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {mainProject.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200/80 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block mb-0.5">CLIENT</span>
                      <span className="text-slate-900 font-bold font-sans">{mainProject.client}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">SCALE</span>
                      <span className="text-amber-700 font-bold font-sans">{mainProject.scale}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">LOCATION</span>
                      <span className="text-slate-900 font-bold font-sans">{mainProject.location}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">TOLERANCE</span>
                      <span className="text-slate-900 font-bold font-sans">{mainProject.tolerances}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Button to={`/work/${mainProject.id}`} variant="primary" size="md">
                    {t('featuredWork.btnCaseStudy', 'View Project Case Study')}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Two-Column Supporting Projects Grid — Unboxed Architectural Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            
            {secondary1 && (
              <div className="group flex flex-col justify-between space-y-4">
                <Link to={`/work/${secondary1.id}`} className="block overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-amber-500/40 transition-all duration-500">
                  <ImageReveal
                    src={secondary1.heroImage}
                    alt={secondary1.title}
                    aspectRatio="aspect-[16/10]"
                    scaleTag={secondary1.scale}
                    materialTag={secondary1.materials[0]}
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </Link>
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-700 uppercase tracking-wide mb-2 pt-1">
                    <span>{secondary1.category}</span>
                    <span className="text-slate-400 font-normal">{secondary1.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                    <Link to={`/work/${secondary1.id}`}>
                      {secondary1.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {secondary1.shortDescription}
                  </p>
                  <Link
                    to={`/work/${secondary1.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                  >
                    <span>{t('featuredWork.btnSpecs', 'View Specifications')}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )}

            {secondary2 && (
              <div className="group flex flex-col justify-between space-y-4">
                <Link to={`/work/${secondary2.id}`} className="block overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-amber-500/40 transition-all duration-500">
                  <ImageReveal
                    src={secondary2.heroImage}
                    alt={secondary2.title}
                    aspectRatio="aspect-[16/10]"
                    scaleTag={secondary2.scale}
                    materialTag={secondary2.materials[0]}
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </Link>
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-700 uppercase tracking-wide mb-2 pt-1">
                    <span>{secondary2.category}</span>
                    <span className="text-slate-400 font-normal">{secondary2.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                    <Link to={`/work/${secondary2.id}`}>
                      {secondary2.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {secondary2.shortDescription}
                  </p>
                  <Link
                    to={`/work/${secondary2.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                  >
                    <span>{t('featuredWork.btnSpecs', 'View Specifications')}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
