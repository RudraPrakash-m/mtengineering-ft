import { useLanguage } from '../../i18n/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center bg-slate-100/95 border border-slate-200/90 rounded-full p-0.5 text-xs font-medium shrink-0 ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <div className="hidden sm:block pl-2 pr-1 text-slate-400 shrink-0">
        <Globe size={13} />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer shrink-0 ${
          language === 'en'
            ? 'bg-slate-900 text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('or')}
        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer shrink-0 ${
          language === 'or'
            ? 'bg-amber-600 text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-pressed={language === 'or'}
      >
        ଓଡ଼ିଆ
      </button>
    </div>
  );
}
