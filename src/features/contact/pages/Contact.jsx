import { useEffect, useRef } from 'react';
import { gsap } from '../../../lib/gsap';
import SectionHeading from '../../../components/shared/SectionHeading';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import { useLanguage } from '../../../i18n/LanguageContext';

export default function Contact() {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.contact-reveal'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="pt-32 md:pt-40 pb-24 bg-gradient-to-b from-slate-50 via-[#FAF9F5] to-slate-50/70 relative overflow-hidden min-h-screen">
      {/* Blueprint Coordinate Micro-grid Background Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">

        {/* Page Header */}
        <div className="max-w-3xl mb-12 contact-reveal">
          <SectionHeading
            number="05"
            tag={t('contact.tag', 'GET IN TOUCH')}
            title={t('contact.title', 'Request a Free Project Quotation')}
            subtitle={t('contact.subtitle', 'Submit your project details, architectural drawings, or construction requirements. Our engineering team in Jaydev Vihar responds with a complete feasibility and cost estimate within 24 hours.')}
          />
        </div>

        {/* 2-Column Form & Studio Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start contact-reveal">

          {/* Left: Interactive Form (8 cols) */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Right: Office Info & Verified Badges (4 cols) */}
          <div className="lg:col-span-4">
            <ContactInfo />
          </div>

        </div>

      </div>
    </div>
  );
}
