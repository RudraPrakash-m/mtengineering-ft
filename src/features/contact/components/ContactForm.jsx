import { useContactForm } from '../hooks/useContactForm';
import { CheckCircle2, UploadCloud, RefreshCw, Lock, Send } from 'lucide-react';
import { toast } from 'react-toastify';
import { useLanguage } from '../../../i18n/LanguageContext';

const defaultServiceOptions = [
  { id: 'scale-model', en: 'Architectural Scale Model', or: 'ଆର୍କିଟେକଚରାଲ୍ ସ୍କେଲ୍ ମଡେଲ୍' },
  { id: 'structural-steel', en: 'Heavy Structural Steel Fabrication', or: 'ହେଭି ଷ୍ଟ୍ରକଚରାଲ୍ ଷ୍ଟିଲ୍ ଫ୍ୟାବ୍ରିକେସନ୍' },
  { id: 'rcc-slabs', en: 'RCC Slab Contracting & Casting', or: 'ଆରସିସି ସ୍ଲାବ୍ କଣ୍ଟ୍ରାକ୍ଟିଂ ଏବଂ କାଷ୍ଟିଂ' },
  { id: 'cutaway-models', en: 'Engineering & Cutaway Structural Model', or: 'ଇଞ୍ଜିନିୟରିଂ ଏବଂ କଟ୍-ୱେ ସଂରଚନା ମଡେଲ୍' },
  { id: 'masterplans', en: 'Urban Masterplan & Topographical Model', or: 'ଅର୍ବାନ୍ ମାଷ୍ଟରପ୍ଲାନ୍ ଓ ଟୋପୋଗ୍ରାଫିକାଲ୍ ମଡେଲ୍' },
  { id: 'hospital-extensions', en: 'Hospital & Commercial Building Extension', or: 'ହସ୍ପିଟାଲ୍ ଏବଂ ବାଣିଜ୍ୟିକ କୋଠା ସମ୍ପ୍ରସାରଣ' },
  { id: 'cnc-prototyping', en: 'Custom CNC Milling & 3D Prototyping', or: 'କଷ୍ଟମ୍ ସିଏନ୍‌ସି ମିଲିଂ ଓ 3D ପ୍ରୋଟୋଟାଇପିଂ' },
];

const defaultBudgetOptions = [
  { id: '2.5-10', en: '₹2.5 Lakhs – ₹10 Lakhs', or: '₹୨.୫ ଲକ୍ଷ – ₹୧୦ ଲକ୍ଷ' },
  { id: '10-25', en: '₹10 Lakhs – ₹25 Lakhs', or: '₹୧୦ ଲକ୍ଷ – ₹୨୫ ଲକ୍ଷ' },
  { id: '25-75', en: '₹25 Lakhs – ₹75 Lakhs', or: '₹୨୫ ଲକ୍ଷ – ₹୭୫ ଲକ୍ଷ' },
  { id: '75+', en: '₹75 Lakhs+', or: '₹୭୫ ଲକ୍ଷ+' },
];

export default function ContactForm() {
  const { t, language } = useLanguage();
  const isOdia = language === 'or';
  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    referenceId,
    handleChange,
    handleSelectField,
    handleSubmit,
    resetForm,
  } = useContactForm();

  const handleFileUploadSim = () => {
    toast.info('File attachment simulated: [project_drawings.zip - 42.4MB]', {
      position: 'bottom-right',
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-md p-8 md:p-12 text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
          <CheckCircle2 size={32} />
        </div>

        <div className="space-y-3">
          <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
            {t('contact.ndaProtected', 'Quotation Request Received')}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
            {t('contact.successTitle', 'Thank you. Your inquiry is under review.')}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {t('contact.referenceId', 'Reference ID:')} <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{referenceId}</span>. {t('contact.successDesc', 'A senior engineer and project estimator from our Bhubaneswar office will review your requirements and reach out within 24 hours.')}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={resetForm}
            className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
          >
            <RefreshCw size={15} />
            <span>{t('contact.submitAnother', 'Submit Another Inquiry')}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/90 shadow-md p-8 md:p-10 space-y-6">
      
      {/* Form Header */}
      <div className="border-b border-slate-100 pb-5">
        <h3 className="text-xl font-bold text-slate-900 font-display">
          {t('contact.formTitle', 'Project Estimation & Feasibility')}
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          {t('contact.formSubtitle', 'Fill out the details below to receive a comprehensive technical proposal and cost estimate.')}
        </p>
      </div>

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700">
            {t('contact.fullName', 'Full Name')} <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            value={values.name}
            onChange={handleChange}
            placeholder={t('contact.fullNamePlaceholder', 'e.g. Rajesh Mohanty')}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none transition-all ${
              errors.name ? 'border-rose-400 bg-rose-50/50 ring-2 ring-rose-100' : 'border-slate-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100'
            }`}
          />
          {errors.name && (
            <span role="alert" className="text-xs text-rose-600 block">{errors.name}</span>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700">
            {t('contact.email', 'Business Email')} <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            value={values.email}
            onChange={handleChange}
            placeholder={t('contact.emailPlaceholder', 'e.g. rajesh@utkalbuilders.in')}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none transition-all ${
              errors.email ? 'border-rose-400 bg-rose-50/50 ring-2 ring-rose-100' : 'border-slate-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100'
            }`}
          />
          {errors.email && (
            <span role="alert" className="text-xs text-rose-600 block">{errors.email}</span>
          )}
        </div>
      </div>

      {/* Row 2: Company & Discipline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700">
            {t('contact.company', 'Company / Organization')} <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            required
            aria-required="true"
            aria-invalid={errors.company ? 'true' : 'false'}
            value={values.company}
            onChange={handleChange}
            placeholder={t('contact.companyPlaceholder', 'e.g. Utkal Builders / DN Homes')}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none transition-all ${
              errors.company ? 'border-rose-400 bg-rose-50/50 ring-2 ring-rose-100' : 'border-slate-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100'
            }`}
          />
          {errors.company && (
            <span role="alert" className="text-xs text-rose-600 block">{errors.company}</span>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700">
            {t('contact.service', 'Service Required')} <span className="text-rose-600" aria-hidden="true">*</span>
          </label>
          <select
            id="contact-service"
            name="projectType"
            aria-label={t('contact.service', 'Service Required')}
            value={values.projectType}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all cursor-pointer"
          >
            {defaultServiceOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {isOdia ? item.or : item.en}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Target Scale & Target Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="contact-scale" className="block text-xs font-semibold text-slate-700">
            {t('contact.scale', 'Target Scale / Area (Optional)')}
          </label>
          <input
            id="contact-scale"
            type="text"
            name="scale"
            value={values.scale}
            onChange={handleChange}
            placeholder={t('contact.scalePlaceholder', 'e.g. 1:100 scale or 25,000 sq.ft.')}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <span className="block text-xs font-semibold text-slate-700">
            {t('contact.budget', 'Estimated Budget Allocation')}
          </span>
          <div className="grid grid-cols-2 gap-2" role="group" aria-label={t('contact.budget', 'Estimated Budget Allocation')}>
            {defaultBudgetOptions.map((b) => {
              const label = isOdia ? b.or : b.en;
              const isSelected = values.budget === b.id || values.budget === b.en || values.budget === b.or;
              return (
                <button
                  key={b.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleSelectField('budget', b.id)}
                  className={`py-2 px-2.5 text-xs rounded-lg font-medium border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50 text-amber-900 font-semibold shadow-sm'
                      : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Row 4: File Simulation Dropzone */}
      <div className="space-y-1.5">
        <span className="block text-xs font-semibold text-slate-700">
          {t('contact.attach', 'Attach CAD Drawings / BIM Models / PDFs (Optional)')}
        </span>
        <div
          role="button"
          tabIndex={0}
          aria-label={t('contact.attachSubtitle', 'Click to upload DWG, AutoCAD, Revit, 3DM, or PDF files')}
          onClick={handleFileUploadSim}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleFileUploadSim();
            }
          }}
          className="border-2 border-dashed border-slate-300 hover:border-amber-500 bg-slate-50 hover:bg-amber-50/20 rounded-xl p-5 text-center cursor-pointer transition-all group focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <UploadCloud size={24} className="mx-auto text-slate-500 group-hover:text-amber-600 mb-1.5 transition-colors" />
          <p className="text-xs text-slate-800 font-medium">
            {t('contact.attachSubtitle', 'Click to upload DWG, AutoCAD, Revit, 3DM, or PDF files')}
          </p>
          <p className="text-[11px] text-slate-600 mt-0.5">
            {t('contact.attachMax', 'Maximum file size: 200MB. Handled with strict commercial confidentiality.')}
          </p>
        </div>
      </div>

      {/* Row 5: Message */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700">
          {t('contact.message', 'Project Scope & Timeline Details')} <span className="text-rose-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          rows={3}
          value={values.message}
          onChange={handleChange}
          placeholder={t('contact.messagePlaceholder', 'Please describe your project location, target completion dates, architectural requirements, or steel/RCC specifications...')}
          className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none transition-all ${
            errors.message ? 'border-rose-400 bg-rose-50/50 ring-2 ring-rose-100' : 'border-slate-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100'
          }`}
        />
        {errors.message && (
          <span role="alert" className="text-xs text-rose-600 block">{errors.message}</span>
        )}
      </div>

      {/* Submit Button & Security Note */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-600/10 cursor-pointer disabled:opacity-50"
        >
          <span>{isSubmitting ? t('contact.submitting', 'Sending Quotation Request...') : t('contact.submitBtn', 'Submit Quotation Request')}</span>
          <Send size={15} />
        </button>

        <div className="flex items-center gap-1.5 text-xs text-slate-600">
          <Lock size={13} className="text-emerald-700" />
          <span>{t('contact.ndaProtected', 'NDA Protected & Confidential')}</span>
        </div>
      </div>

    </form>
  );
}
