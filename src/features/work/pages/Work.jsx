import { useState, useRef, useEffect } from 'react';
import { gsap } from '../../../lib/gsap';
import SectionHeading from '../../../components/shared/SectionHeading';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import Button from '../../../components/shared/Button';
import { useLanguage } from '../../../i18n/LanguageContext';

const categories = ['All', 'Architectural', 'Structural', 'RCC', 'Urban'];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useRef(null);
  const { t } = useLanguage();

  // Compute category counts
  const projectCounts = {
    All: projectsData.length,
    ...categories.slice(1).reduce((acc, cat) => {
      acc[cat] = projectsData.filter((p) => p.category === cat).length;
      return acc;
    }, {}),
  };

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.project-grid-item'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out',
      }
    );
  }, [activeCategory]);

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-slate-50 via-[#FAF9F5] to-slate-50/70 relative overflow-hidden">
      
      {/* Precision Blueprint Coordinate Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">

        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <SectionHeading
            number="01"
            tag={t('work.tag', 'OUR PORTFOLIO')}
            title={t('work.title', 'Projects & Scale Models Archive')}
            subtitle={t('work.subtitle', 'Browse our complete collection of architectural physical models, structural steel engineering works, and commercial RCC slab contracts in Odisha.')}
          />
        </div>

        {/* Filter Navigation */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          projectCounts={projectCounts}
        />

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Custom Commission Architectural Callout Block */}
        <div className="mt-24 p-8 md:p-12 lg:p-14 bg-slate-900 text-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-bold tracking-widest text-[11px]">{t('work.customBanner.tag', 'LOOKING FOR A CUSTOM SCALE MODEL OR CIVIL CONTRACT?')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t('work.customBanner.title', 'We accommodate custom scales from 1:20 to 1:2500.')}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl leading-relaxed">
              {t('work.customBanner.desc', 'From detailed structural engineering cutaways to multi-acre urban masterplans with LED zone lighting.')}
            </p>
          </div>
          <Button to="/contact" variant="amber" size="lg">
            {t('work.customBanner.btn', 'Request Project Quote')}
          </Button>
        </div>

      </div>
    </div>
  );
}
