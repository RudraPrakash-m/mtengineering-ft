import { Link } from 'react-router-dom';
import ImageReveal from '../../../components/shared/ImageReveal';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function ProjectCard({ project, index }) {
  const { t, language } = useLanguage();
  const isOdia = language === 'or';

  const displayTitle = isOdia && project.titleOr ? project.titleOr : project.title;
  const displayCategory = isOdia && project.categoryOr ? project.categoryOr : project.category;
  const displayClient = isOdia && project.clientOr ? project.clientOr : project.client;
  const displayScale = isOdia && project.scaleOr ? project.scaleOr : project.scale;
  const displayYear = isOdia && project.yearOr ? project.yearOr : project.year;
  const displayShortDesc = isOdia && project.shortDescriptionOr ? project.shortDescriptionOr : project.shortDescription;
  const displayMaterials = isOdia && project.materialsOr ? project.materialsOr : project.materials;

  return (
    <article className="project-grid-item group flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Unboxed Frameless Project Image Vitrine */}
        <Link to={`/work/${project.id}`} className="block mb-4 overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-amber-500/40 transition-all duration-500">
          <ImageReveal
            src={project.heroImage}
            alt={displayTitle}
            aspectRatio="aspect-[16/11]"
            scaleTag={displayScale}
            materialTag={displayMaterials[0]}
            className="group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Project Meta Line */}
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide mb-2.5 pt-1">
          <span className="font-mono text-xs font-bold text-amber-700 tracking-wider">
            {displayCategory}
          </span>
          <span className="font-mono text-slate-400 text-[11px] font-medium">{displayYear}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors leading-snug">
          <Link to={`/work/${project.id}`}>
            {displayTitle}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
          {displayShortDesc}
        </p>

        {/* Material Tags Strip */}
        {displayMaterials && displayMaterials.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {displayMaterials.slice(0, 2).map((mat, i) => (
              <span
                key={i}
                className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200/80"
              >
                {mat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Showcase Minimalist Footer */}
      <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
        <div className="truncate max-w-[170px]">
          <span className="text-slate-400 mr-1">{t('work.client', 'Client:')}</span>
          <span className="font-semibold text-slate-800">{displayClient}</span>
        </div>

        <Link
          to={`/work/${project.id}`}
          className="inline-flex items-center gap-1.5 font-bold text-xs text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer"
        >
          <span>{t('work.viewDetails', 'View Details')}</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
