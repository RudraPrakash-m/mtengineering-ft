import { useLanguage } from '../../../i18n/LanguageContext';

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  projectCounts,
}) {
  const { t, isOdia } = useLanguage();

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'All':
        return t('work.allCategories', 'All Projects');
      case 'Architectural':
        return t('work.models', 'Architectural Models');
      case 'Structural':
        return t('work.steel', 'Structural Steel');
      case 'RCC':
        return t('work.rcc', 'RCC Slabs');
      case 'Urban':
        return t('work.masterplans', 'Urban Masterplans');
      default:
        return cat;
    }
  };

  const formatCount = (count) => {
    if (!isOdia) return count;
    return count.toString().replace(/\d/g, (d) => '୦୧୨୩୪୫୬୭୮୯'[d]);
  };

  return (
    <div className="py-4 md:py-6 border-y border-slate-200/80 mb-10 md:mb-12">
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          {t('work.filterLabel', 'Filter Projects:')}
        </span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = projectCounts[cat] || 0;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-900'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              <span>{getCategoryLabel(cat)}</span>
              <span
                className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${
                  isActive
                    ? 'bg-amber-400/20 text-amber-300 font-bold'
                    : 'bg-slate-200/80 text-slate-600 font-medium'
                }`}
              >
                {formatCount(count)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
