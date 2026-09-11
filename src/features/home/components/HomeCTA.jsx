import { Link } from 'react-router-dom';
import Button from '../../../components/shared/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function HomeCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="bg-gradient-to-r from-slate-800 to-slate-850 border border-slate-700/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-bold tracking-widest text-[11px] sm:text-xs">{t('homeCta.tag', 'START YOUR PROJECT')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('homeCta.title', 'Have an upcoming project that demands engineering accuracy?')}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {t('homeCta.subtitle', 'Whether you need a physical scale model for an architectural competition or civil execution for structural steel and RCC slabs in Odisha, our engineers are ready to assist.')}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button to="/contact" variant="amber" size="lg">
                  {t('homeCta.btnQuote', 'Request Free Quotation')}
                </Button>
                <Button to="/work" variant="darkOutline" size="lg">
                  {t('nav.work', 'View Our Portfolio')}
                </Button>
              </div>
            </div>

            {/* Right Contact Card (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider pb-3 border-b border-slate-800">
                {t('contact.tag', 'Direct Contact Liaison')}
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px] mb-0.5">PHONE NUMBER:</span>
                    <a href="tel:+919437012890" className="text-white font-semibold text-sm hover:text-amber-400 transition-colors">
                      +91 94370 12890 / +91 674 236 1017
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px] mb-0.5">EMAIL INQUIRIES:</span>
                    <a href="mailto:inquiry@mtengineering.in" className="text-white font-semibold text-sm hover:text-amber-400 transition-colors">
                      inquiry@mtengineering.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px] mb-0.5">{t('homeCta.hqLabel', 'BHUBANESWAR OFFICE')}:</span>
                    <span className="text-slate-200">{t('homeCta.hqAddress', 'Plot No-65/4430, Mayfair Road, Jaydev Vihar, Bhubaneswar – 751013')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px] mb-0.5">{t('footer.workingHours', 'WORKING HOURS')}:</span>
                    <span className="text-slate-200">{t('footer.workingHoursValue', 'Mon – Sat: 09:00 AM – 08:00 PM')}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                {t('homeCta.turnaround', 'Average Estimation Turnaround: < 24 Hours')}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
