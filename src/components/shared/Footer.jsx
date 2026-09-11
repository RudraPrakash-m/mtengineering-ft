import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative z-10">
      {/* Top Banner Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 pb-10 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-slate-950 font-bold font-display text-sm">
            MT
          </div>
          <div>
            <span className="text-white font-bold tracking-tight">{t('nav.brandName', 'MT ENGINEERING')}</span>
            <span className="hidden sm:inline text-slate-500 ml-2">| {t('nav.location', 'Jaydev Vihar, Bhubaneswar, Odisha')}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
            <Star size={12} className="fill-amber-400" />
            4.8 / 5.0 Justdial Rated
          </span>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-400">RCC Slabs &amp; Structural Steel Contractors</span>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand & Mission (Col 1 & 2) */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-display tracking-tight mb-3">
              {t('footer.tagline', 'Precision engineering and reliable civil contracting.')}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {t('footer.description', 'Specialized engineering firm delivering heavy structural steel fabrication, RCC slab casting, architectural scale models, civil infrastructure, and hospital building extensions across Odisha.')}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-semibold">
              <MapPin size={14} />
              <span>{t('footer.hqLabel', 'Head Office & Design Studio')}</span>
            </div>
            <div className="text-slate-300 leading-relaxed">
              {t('footer.hqAddress', 'Plot No-65/4430, Mayfair Road, Near Mayfair Spa Gate, Jaydev Vihar, Bhubaneswar, Odisha – 751013')}
            </div>
          </div>
        </div>

        {/* Quick Links (Col 3) */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            {t('footer.navigation', 'Navigation')}
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li>
              <Link to="/work" className="hover:text-amber-400 transition-colors">
                {t('nav.work', 'Work')}
              </Link>
            </li>
            <li>
              <Link to="/capabilities" className="hover:text-amber-400 transition-colors">
                {t('nav.capabilities', 'Capabilities')}
              </Link>
            </li>
            <li>
              <Link to="/process" className="hover:text-amber-400 transition-colors">
                {t('nav.process', 'Process')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-400 transition-colors">
                {t('nav.about', 'About')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition-colors">
                {t('nav.contact', 'Contact')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Working Hours & Service Areas (Col 4) */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            {t('footer.operations', 'Operations')}
          </h4>
          <div className="space-y-4 text-xs text-slate-400">
            <div>
              <div className="text-white font-semibold flex items-center gap-1.5 mb-1">
                <Clock size={13} className="text-amber-400" /> {t('footer.workingHours', 'Working Hours')}
              </div>
              <div className="text-slate-300">{t('footer.workingHoursValue', 'Mon – Sat: 09:00 AM – 08:00 PM')}</div>
              <div className="text-slate-500">{t('footer.sundayValue', 'Sunday: Closed / Emergency Only')}</div>
            </div>
            <div>
              <div className="text-white font-semibold mb-1">{t('footer.serviceCoverage', 'Service Coverage')}</div>
              <div className="text-slate-300">{t('footer.serviceZones', 'Jaydev Vihar • Nayapalli • Patia • Mancheswar • Cuttack • Paradeep')}</div>
            </div>
          </div>
        </div>

        {/* Inquiries & Direct Line (Col 5) */}
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            {t('footer.contactHeading', 'Contact & Estimates')}
          </h4>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            {t('footer.contactDesc', 'Send architectural layouts or structural drawings for immediate quotation:')}
          </p>
          
          <div className="space-y-2.5">
            <a
              href="mailto:inquiry@mtengineering.in"
              className="flex items-center gap-2 text-xs text-white hover:text-amber-400 transition-colors"
            >
              <Mail size={14} className="text-amber-400" />
              <span>inquiry@mtengineering.in</span>
            </a>

            <a
              href="tel:+919437012890"
              className="flex items-center gap-2 text-xs text-white hover:text-amber-400 transition-colors"
            >
              <Phone size={14} className="text-amber-400" />
              <span>+91 94370 12890</span>
            </a>
          </div>

          <div className="mt-5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all shadow-sm"
            >
              {t('footer.quoteBtn', 'Request Quotation')}
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Legal & Back to Top */}
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} {t('footer.copyright', 'MT Engineering & Construction. Jaydev Vihar, Bhubaneswar. All rights reserved.')}
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors group cursor-pointer"
        >
          <span>{t('footer.backToTop', 'Back to Top')}</span>
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
