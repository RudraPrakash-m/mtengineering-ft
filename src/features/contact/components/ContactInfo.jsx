import { Mail, Phone, MapPin, Clock, FileCheck, ShieldCheck, Star } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      
      {/* Studio Locations List */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {t('contact.offices', 'Offices & Facilities')}
        </h4>

        {/* Jaydev Vihar HQ */}
        <div className="p-6 bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900 font-display">{t('contact.jaydevHq', 'Jaydev Vihar Head Office')}</span>
            <span className="px-2 py-0.5 bg-amber-50 text-amber-800 text-[11px] font-semibold rounded-md border border-amber-200">
              {t('contact.hqStudio', 'HQ & Studio')}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
            <MapPin size={15} className="text-amber-600 shrink-0 mt-0.5" />
            <span>{t('contact.jaydevAddr', 'Plot No-65/4430, Mayfair Road, Near Mayfair Spa Gate, Jaydev Vihar, Bhubaneswar, Odisha – 751013')}</span>
          </p>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-1 text-xs text-slate-700">
            <a href="tel:+919437012890" className="flex items-center gap-2 hover:text-amber-600 transition-colors font-medium">
              <Phone size={13} className="text-amber-600" />
              <span>+91 94370 12890 / +91 674 236 1017</span>
            </a>
            <a href="mailto:inquiry@mtengineering.in" className="flex items-center gap-2 hover:text-amber-600 transition-colors font-medium">
              <Mail size={13} className="text-amber-600" />
              <span>inquiry@mtengineering.in</span>
            </a>
          </div>
        </div>

        {/* Mancheswar Fabrication Yard */}
        <div className="p-6 bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900 font-display">{t('contact.mancheswarDepot', 'Mancheswar Fabrication Depot')}</span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded-md border border-slate-200">
              {t('contact.heavyYard', 'Heavy Yard')}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
            <MapPin size={15} className="text-slate-400 shrink-0 mt-0.5" />
            <span>{t('contact.mancheswarAddr', 'Plot 112, Sector A, Mancheswar Industrial Estate, Bhubaneswar – 751010')}</span>
          </p>
          <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 flex items-center gap-2">
            <Clock size={13} className="text-slate-400" />
            <span>{t('footer.workingHoursValue', 'Mon – Sat: 09:00 AM – 08:00 PM')}</span>
          </div>
        </div>

        {/* Justdial Verified Badge */}
        <div className="p-4 bg-amber-50/80 backdrop-blur-sm rounded-xl border border-amber-200/90 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-xs font-semibold text-amber-950">{t('contact.verifiedBadge', 'Justdial Verified Contractor')}</span>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
            {t('contact.ratingValue', '4.8 / 5.0 Rating')}
          </span>
        </div>
      </div>

      {/* Accepted Digital File Formats */}
      <div className="p-6 bg-slate-900 text-slate-300 rounded-2xl border border-slate-800 space-y-3 text-xs shadow-md">
        <div className="flex items-center gap-2 text-amber-400 font-semibold">
          <FileCheck size={16} />
          <span>{t('contact.formatsTitle', 'Accepted Drawing Formats')}</span>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed">
          {t('contact.formatsDesc', 'AutoCAD (.dwg, .dxf), Autodesk Revit (.rvt), Rhino (.3dm), STAAD.Pro, ArchiCAD, SketchUp, and PDF structural drawings.')}
        </p>
        <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
          <span>{t('contact.formatsNda', 'Complete NDA & confidentiality assured.')}</span>
        </div>
      </div>

    </div>
  );
}
