import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from '../../../lib/gsap';
import { projectsData } from '../data/projectsData';
import ImageReveal from '../../../components/shared/ImageReveal';
import Button from '../../../components/shared/Button';
import SEO from '../../../components/shared/SEO';
import { ArrowLeft, ArrowRight, Check, Compass, Layers, ShieldCheck, Ruler, Building2, MapPin } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isOdia = language === 'or';
  const project = projectsData.find((p) => p.id === id);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.detail-reveal'),
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
      }
    );
  }, [id, project]);

  if (!project) {
    return (
      <div className="pt-36 pb-28 text-center bg-white">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            {t('projectDetails.notFoundTitle', 'Project Not Found')}
          </h2>
          <p className="text-sm text-slate-600 mb-8">
            {t('projectDetails.notFoundDesc', 'The requested project archive reference does not exist.')}
          </p>
          <Button to="/work" variant="primary">
            {t('projectDetails.returnToArchive', 'Return to Work Archive')}
          </Button>
        </div>
      </div>
    );
  }

  // Related projects
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  // Localized project fields
  const displayTitle = isOdia && project.titleOr ? project.titleOr : project.title;
  const displayCategory = isOdia && project.categoryOr ? project.categoryOr : project.category;
  const displayClient = isOdia && project.clientOr ? project.clientOr : project.client;
  const displayScale = isOdia && project.scaleOr ? project.scaleOr : project.scale;
  const displayYear = isOdia && project.yearOr ? project.yearOr : project.year;
  const displayLocation = isOdia && project.locationOr ? project.locationOr : project.location;
  const displayShortDesc = isOdia && project.shortDescriptionOr ? project.shortDescriptionOr : project.shortDescription;
  const displayFullDesc = isOdia && project.fullDescriptionOr ? project.fullDescriptionOr : project.fullDescription;
  const displayTechNotes = isOdia && project.technicalNotesOr ? project.technicalNotesOr : project.technicalNotes;
  const displayMaterials = isOdia && project.materialsOr ? project.materialsOr : project.materials;
  const displayWeight = isOdia && project.weightOr ? project.weightOr : project.weight;
  const displayTolerances = isOdia && project.tolerancesOr ? project.tolerancesOr : project.tolerances;
  const displayMethods = isOdia && project.fabricationMethodsOr ? project.fabricationMethodsOr : project.fabricationMethods;

  return (
    <div ref={containerRef} className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-slate-50 via-[#FAF9F5] to-slate-50/70 relative overflow-hidden min-h-screen">
      <SEO
        title={`${displayTitle} | ${displayCategory} Project`}
        description={displayShortDesc || `Explore ${displayTitle} by MT Engineering & Construction in ${displayLocation}. Precision scale modeling and civil engineering execution.`}
        canonicalUrl={`https://mtengineering.netlify.app/work/${project.id}`}
        image={project.heroImage}
        ogType="article"
        schemaJson={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: displayTitle,
          description: displayShortDesc || `${displayTitle} architectural scale model and civil engineering project in ${displayLocation}.`,
          image: project.heroImage,
          author: {
            '@type': 'Organization',
            name: 'MT Engineering & Construction',
          },
          publisher: {
            '@type': 'Organization',
            name: 'MT Engineering & Construction',
            logo: {
              '@type': 'ImageObject',
              url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
            },
          },
        }}
      />
      {/* Blueprint Coordinate Micro-grid Background Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">

        {/* Back Link */}
        <div className="mb-6 detail-reveal">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>{t('projectDetails.returnToPortfolio', 'Return to Portfolio')}</span>
          </Link>
        </div>

        {/* Project Header Spec Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/80 text-xs font-semibold text-amber-700 detail-reveal">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>{displayCategory} {t('projectDetails.projectBadge', 'PROJECT')}</span>
          </div>
          <div className="flex items-center gap-6 text-slate-500 font-medium">
            <span className="flex items-center gap-1"><MapPin size={13} className="text-amber-600" /> {displayLocation}</span>
            <span>{t('projectDetails.yearLabel', 'Year:')} {displayYear}</span>
          </div>
        </div>

        {/* Project Title & Client Specs */}
        <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end detail-reveal">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {displayTitle}
            </h1>
          </div>
          <div className="lg:col-span-4 p-5 bg-white/80 border border-slate-200/80 rounded-2xl text-xs font-mono text-slate-600 space-y-2.5">
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-400">{t('projectDetails.clientLabel', 'CLIENT / AUTHORITY:')}</span>
              <span className="text-slate-900 font-bold font-sans">{displayClient}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/60 pb-2">
              <span className="text-slate-400">{t('projectDetails.physicalScaleLabel', 'PHYSICAL SCALE:')}</span>
              <span className="text-amber-700 font-bold font-sans">{displayScale}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{t('projectDetails.tolerancesLabel', 'TOLERANCES:')}</span>
              <span className="text-slate-900 font-bold font-sans">{displayTolerances}</span>
            </div>
          </div>
        </div>

        {/* Hero Scale Model Photograph */}
        <div className="mb-16 detail-reveal">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
            <ImageReveal
              src={project.heroImage}
              alt={displayTitle}
              aspectRatio="aspect-[16/9]"
              scaleTag={displayScale}
              materialTag={displayMaterials[0]}
              priority={true}
            />
          </div>
        </div>

        {/* 2-Column Technical Specification & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12 border-y border-slate-300/80 mb-16">

          {/* Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-900 border border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="font-bold tracking-widest text-[11px] sm:text-xs">{t('projectDetails.briefTag', 'PROJECT BRIEF & EXECUTION')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              {displayShortDesc}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {displayFullDesc}
            </p>

            {/* Technical Notes Callout */}
            <div className="p-6 bg-white/80 border-l-4 border-amber-600 rounded-r-2xl border-y border-r border-slate-200/80 mt-6 space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-mono">
                <Compass size={16} className="text-amber-600" />
                <span>{t('projectDetails.technicalNotesTitle', 'Engineering & Site Technical Notes')}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {displayTechNotes}
              </p>
            </div>
          </div>

          {/* Technical Specifications Architectural Matrix (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-white/80 border border-slate-200/80 rounded-2xl space-y-6">
            <div className="font-mono text-xs font-bold text-amber-700 uppercase tracking-widest pb-3 border-b border-slate-200/80">
              // {t('projectDetails.techSpecsTitle', 'Technical Specifications')}
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="pb-3 border-b border-slate-100">
                <span className="text-slate-400 block mb-0.5">{t('projectDetails.dimLabel', 'PHYSICAL DIMENSIONS:')}</span>
                <span className="text-slate-900 font-bold text-sm font-sans">{project.dimensions}</span>
              </div>

              <div className="pb-3 border-b border-slate-100">
                <span className="text-slate-400 block mb-0.5">{t('projectDetails.weightLabel', 'TOTAL MODEL WEIGHT:')}</span>
                <span className="text-slate-900 font-bold text-sm font-sans">{displayWeight}</span>
              </div>

              <div className="pb-3 border-b border-slate-100">
                <span className="text-slate-400 block mb-2">{t('projectDetails.matSpecsLabel', 'MATERIAL SPECIFICATIONS:')}</span>
                <div className="flex flex-wrap gap-1.5 font-sans">
                  {displayMaterials.map((mat, i) => (
                    <span key={i} className="bg-slate-100 text-slate-800 px-2 py-0.5 text-xs rounded font-medium border border-slate-200/60">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 block mb-2">{t('projectDetails.methodsLabel', 'FABRICATION METHODOLOGIES:')}</span>
                <ul className="space-y-2 text-xs text-slate-600 font-sans">
                  {displayMethods.map((meth, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={14} className="text-amber-600 shrink-0" />
                      <span>{meth}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Gallery: Detailed Macro & Structural Shots */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="mb-20">
            <div className="font-mono text-xs font-bold text-amber-700 uppercase tracking-widest mb-6">
              // {t('projectDetails.galleryTag', 'Detail Photography & Sectionals')}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.slice(1).map((imgUrl, gIdx) => (
                <div key={gIdx} className="space-y-2 group">
                  <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm group-hover:shadow-md transition-shadow">
                    <ImageReveal
                      src={imgUrl}
                      alt={`${displayTitle} - Detail Shot ${gIdx + 1}`}
                      aspectRatio="aspect-[4/3]"
                      className="group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <p className="text-xs text-slate-500 font-medium pt-1">
                    {t('projectDetails.photoCaption', `Photo ${gIdx + 1} — Precision Sectional Detail / Material Finish`).replace('{num}', gIdx + 1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Projects Section — Unboxed Showcase */}
        <div className="pt-12 border-t border-slate-300/80">
          <div className="flex items-center justify-between mb-8">
            <div className="font-mono text-xs font-bold text-amber-700 uppercase tracking-widest">
              // {t('projectDetails.relatedTag', 'Related Projects')}
            </div>
            <Link to="/work" className="text-xs font-bold text-slate-900 hover:text-amber-600">
              {t('projectDetails.viewAllProjects', 'View All Projects →')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {relatedProjects.map((rel) => {
              const relTitle = isOdia && rel.titleOr ? rel.titleOr : rel.title;
              const relCategory = isOdia && rel.categoryOr ? rel.categoryOr : rel.category;
              const relScale = isOdia && rel.scaleOr ? rel.scaleOr : rel.scale;
              const relYear = isOdia && rel.yearOr ? rel.yearOr : rel.year;
              const relMaterials = isOdia && rel.materialsOr ? rel.materialsOr : rel.materials;

              return (
                <div key={rel.id} className="group space-y-3">
                  <Link to={`/work/${rel.id}`} className="block overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm group-hover:shadow-xl transition-all">
                    <ImageReveal
                      src={rel.heroImage}
                      alt={relTitle}
                      aspectRatio="aspect-[16/10]"
                      scaleTag={relScale}
                      materialTag={relMaterials[0]}
                      className="group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </Link>
                  <div className="flex justify-between items-baseline font-mono text-xs font-bold text-amber-700 pt-1">
                    <span>{relCategory}</span>
                    <span className="text-slate-400 font-normal">{relYear}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    <Link to={`/work/${rel.id}`}>{relTitle}</Link>
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
