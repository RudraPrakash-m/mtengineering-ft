import { useEffect, useRef } from 'react';
import { gsap } from '../../../lib/gsap';
import SectionHeading from '../../../components/shared/SectionHeading';
import ImageReveal from '../../../components/shared/ImageReveal';
import Button from '../../../components/shared/Button';
import SEO from '../../../components/shared/SEO';
import { Award, Compass, Building, Sparkles, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';

const clientPractices = [
  'Odisha Bridge & Construction (OBCC)', 'IDCO Odisha', 'Mayfair Hotels & Resorts', 'Utkal Builders',
  'DN Homes Bhubaneswar', 'AIIMS Bhubaneswar Projects', 'Tata Steel Infra Division', 'Paradeep Port Trust Contractors',
  'Falcon Real Estate', 'Bhubaneswar Smart City Corp', 'Odisha Mining Infrastructure', 'Z Estates'
];

export default function About() {
  const containerRef = useRef(null);
  const { t, language } = useLanguage();
  const isOdia = language === 'or';

  const leaders = [
    {
      name: t('aboutPage.ldr1Name', 'Er. M. K. Tripathy'),
      role: t('aboutPage.ldr1Role', 'Principal Director & Chief Structural Engineer'),
      bio: t('aboutPage.ldr1Bio', 'Over 22 years steering civil infrastructure, heavy RCC slab design, and structural steel fabrication across Bhubaneswar and major Odisha industrial corridors.'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: t('aboutPage.ldr2Name', 'Er. T. K. Mohapatra'),
      role: t('aboutPage.ldr2Role', 'Head of Scale Modeling & Computational Fabrication'),
      bio: t('aboutPage.ldr2Bio', 'Specialist in 3D scale prototyping, CNC machining toolpaths, and architectural presentation model manufacturing for state masterplans and commercial bids.'),
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: t('aboutPage.ldr3Name', 'Er. S. Jena'),
      role: t('aboutPage.ldr3Role', 'Head of Structural Steel & RCC Execution'),
      bio: t('aboutPage.ldr3Bio', 'Veteran project engineer overseeing on-site post-tensioned RCC slab casting, hospital superstructure extensions, and heavy industrial steel assemblies.'),
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.about-reveal'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-slate-50 via-[#FAF9F5] to-slate-50/70 relative overflow-hidden min-h-screen">
      <SEO
        title="About Us | Civil & Scale Model Studio"
        description="Learn about MT Engineering & Construction in Jaydev Vihar, Bhubaneswar. Discover our engineering leadership, Mancheswar steel depot, and 18+ years of contracting excellence."
        canonicalUrl="https://mtengineering.netlify.app/about"
      />
      {/* Blueprint Coordinate Micro-grid Background Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            number={isOdia ? '୦୪' : '04'}
            tag={t('about.tag', 'COMPANY OVERVIEW')}
            title={t('about.title', 'Engineering Accuracy & Physical Scale Craft')}
            subtitle={t('about.subtitle', "MT Engineering & Construction is Bhubaneswar's established engineering contractor, delivering structural steel fabrication, RCC slab casting, and master architectural physical scale models.")}
          />
        </div>

        {/* 2-Column Studio Narrative + Hero Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">

          <div className="lg:col-span-6 space-y-5 about-reveal">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-900 border border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="font-bold tracking-widest text-[11px] sm:text-xs">{t('aboutPage.missionTag', 'OUR MISSION & VALUES')}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              {t('aboutPage.missionTitle', 'Bridging digital architectural design with tangible structural reality.')}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              {t('aboutPage.missionP1', 'Established in Jaydev Vihar, Bhubaneswar, MT Engineering & Construction has grown into a multi-disciplinary civil engineering and scale model fabrication firm. We serve leading developers, architectural studios, and government infrastructure bodies across Odisha.')}
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              {t('aboutPage.missionP2', 'From heavy post-tensioned RCC slab contracting and hospital structural extensions to sub-millimeter precision architectural scale models for high-stakes presentations, our engineers guarantee uncompromising standards.')}
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-xl shadow-sm">
                <span className="text-slate-400 block mb-1">{t('footer.hqLabel', 'HEAD OFFICE')}:</span>
                <span className="font-bold text-slate-900 text-sm">
                  {isOdia ? 'ଜୟଦେବ ବିହାର, ଭୁବନେଶ୍ୱର' : 'Jaydev Vihar, Bhubaneswar'}
                </span>
              </div>
              <div className="p-4 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-xl shadow-sm">
                <span className="text-slate-400 block mb-1">{isOdia ? 'ଜଷ୍ଟଡାଏଲ୍ ଯାଞ୍ଚିତ:' : 'JUSTDIAL VERIFIED:'}</span>
                <span className="font-bold text-amber-700 text-sm">{isOdia ? '୪.୮ ★ ରେଟିଂ' : '4.8 ★ Rating'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 about-reveal">
            <ImageReveal
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
              alt="MT Engineering & Construction Bhubaneswar Design & Fabrication Studio"
              aspectRatio="aspect-[4/3]"
              scaleTag={isOdia ? 'ଭୁବନେଶ୍ୱର ଷ୍ଟୁଡିଓ' : 'BHUBANESWAR STUDIO'}
              materialTag={isOdia ? 'ଷ୍ଟ୍ରକଚରାଲ୍ ଓ କ୍ୟାଡ୍' : 'STRUCTURAL & CAD'}
              className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/60"
            />
          </div>

        </div>

        {/* Regional Hubs & Fabrication Units — Architectural Technical Layout */}
        <div className="mb-24 about-reveal">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-500/10 text-amber-900 border border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="font-bold tracking-widest text-[11px] sm:text-xs">{t('aboutPage.facilitiesTag', 'FACILITIES & YARDS')}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('aboutPage.facilitiesTitle', 'Strategic Facilities Across Odisha')}
            </h3>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              {t('aboutPage.facilitiesDesc', 'Our synchronized design studios, scale-model workshops, and heavy steel yards ensure seamless execution across Bhubaneswar, Cuttack, and Paradeep.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300/80 border-y border-slate-300/80">
            <div className="py-8 md:py-6 md:pr-8 space-y-3 transition-colors hover:bg-white/40">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                <span className="font-bold text-lg text-slate-900">{t('aboutPage.fac1Title', 'JAYDEV VIHAR')}</span>
                <span className="font-mono text-[10px] font-bold text-amber-800 bg-amber-500/15 px-2 py-0.5 rounded uppercase tracking-wider">{t('aboutPage.fac1Badge', 'HEAD OFFICE')}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('aboutPage.fac1Desc', 'Central corporate office, architectural scale model studio, client consultation chambers, and CAD/BIM drafting suite.')}
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-400">
                {t('aboutPage.fac1Addr', 'Near Mayfair Spa Gate, Bhubaneswar – 751013')}
              </div>
            </div>

            <div className="py-8 md:py-6 md:px-8 space-y-3 transition-colors hover:bg-white/40">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                <span className="font-bold text-lg text-slate-900">{t('aboutPage.fac2Title', 'MANCHESWAR')}</span>
                <span className="font-mono text-[10px] font-bold text-blue-800 bg-blue-500/15 px-2 py-0.5 rounded uppercase tracking-wider">{t('aboutPage.fac2Badge', 'HEAVY FABRICATION')}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('aboutPage.fac2Desc', 'Dedicated heavy structural steel fabrication yard, automatic beam welding stations, CNC plasma cutters, and staging depot.')}
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-400">
                {t('aboutPage.fac2Addr', 'Mancheswar Industrial Estate, Bhubaneswar')}
              </div>
            </div>

            <div className="py-8 md:py-6 md:pl-8 space-y-3 transition-colors hover:bg-white/40">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                <span className="font-bold text-lg text-slate-900">{t('aboutPage.fac3Title', 'PARADEEP')}</span>
                <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-500/15 px-2 py-0.5 rounded uppercase tracking-wider">{t('aboutPage.fac3Badge', 'SITE DEPOT')}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('aboutPage.fac3Desc', 'Marine-grade coating application unit, jetty support structural staging, and coastal engineering site liaison.')}
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-400">
                {t('aboutPage.fac3Addr', 'Paradeep Port Industrial Zone, Odisha')}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team — Unboxed Architectural Portraits */}
        <div className="mb-24 about-reveal">
          <div className="mb-12 pb-4 border-b border-slate-300/80">
            <div className="font-mono text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">
              // {t('aboutPage.leadershipTag', 'Leadership Team')}
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('aboutPage.leadershipHeading', 'Principal Engineers & Master Builders')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {leaders.map((ldr, idx) => (
              <div key={idx} className="group space-y-4">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <img
                    src={ldr.image}
                    alt={ldr.name}
                    width="600"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-xs font-bold text-amber-700 tracking-wider">
                    {ldr.role}
                  </div>
                  <h4 className="font-bold text-xl text-slate-900">
                    {ldr.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {ldr.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Practices Trust Wall */}
        <div className="p-8 sm:p-12 bg-slate-900 text-white rounded-3xl about-reveal shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider uppercase mb-3 bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-bold tracking-widest text-[11px] sm:text-xs">{t('aboutPage.trustTag', 'PROVEN TRACK RECORD')}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {t('aboutPage.trustTitle', "Trusted by Odisha's Leading Developers & Authorities")}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center font-medium text-xs sm:text-sm text-slate-300">
            {clientPractices.map((client, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-800/60 border border-slate-700 rounded-xl flex items-center justify-center hover:border-amber-400 hover:text-white transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
