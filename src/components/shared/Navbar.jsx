import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { gsap } from '../../lib/gsap';
import { Menu, X, ArrowRight, Phone, MapPin, Sparkles, Building2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const location = useLocation();
  const { t, language } = useLanguage();
  const isOdia = language === 'or';

  const navItems = [
    { label: t('nav.work', 'Work'), path: '/work' },
    { label: t('nav.capabilities', 'Capabilities'), path: '/capabilities' },
    { label: t('nav.process', 'Process'), path: '/process' },
    { label: t('nav.about', 'About'), path: '/about' },
    { label: t('nav.contact', 'Contact'), path: '/contact' },
  ];

  // Detect scroll for dynamic navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate Mobile Drawer and Backdrop
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (backdropRef.current && drawerRef.current) {
        gsap.to(backdropRef.current, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.25,
          ease: 'power2.out',
        });
        gsap.fromTo(
          drawerRef.current,
          { x: '100%' },
          { x: '0%', duration: 0.35, ease: 'power3.out' }
        );
      }
    } else {
      document.body.style.overflow = 'unset';
      if (backdropRef.current && drawerRef.current) {
        gsap.to(backdropRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.2,
          ease: 'power2.in',
        });
        gsap.to(drawerRef.current, {
          x: '100%',
          duration: 0.25,
          ease: 'power3.in',
        });
      }
    }
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-2 sm:py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2.5 sm:py-4'
        }`}
      >
        <div className="w-full px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-2 sm:gap-4 h-11 sm:h-12">
            
            {/* Left: Brand Logo & Tagline (Fully visible, no truncation) */}
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base shadow-xs group-hover:bg-amber-600 transition-colors shrink-0">
                MT
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-bold text-sm sm:text-base lg:text-lg text-slate-900 tracking-tight leading-tight group-hover:text-amber-600 transition-colors font-display">
                  {t('nav.brandName', 'MT ENGINEERING')}
                </span>
                <span className="text-[9.5px] sm:text-[10.5px] lg:text-[11px] font-medium text-slate-500 tracking-wider uppercase leading-none mt-0.5 sm:mt-1">
                  {t('nav.brandTagline', '& Construction • Bhubaneswar')}
                </span>
              </div>
            </Link>

            {/* Center: Desktop Nav Links (Hidden on tablet/mobile < lg) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-amber-700 bg-amber-50/80 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: Desktop Controls (Language, Phone & Quote CTA) */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
              <LanguageSwitcher />

              <a
                href="tel:+919437012890"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-amber-600 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-slate-50 whitespace-nowrap"
              >
                <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                  <Phone size={12} />
                </div>
                <span>+91 94370 12890</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md hover:shadow-amber-600/20 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>{t('nav.getQuote', 'Get Free Quote')}</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile / Tablet Controls (< lg) */}
            <div className="flex lg:hidden items-center shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-800 hover:text-amber-600 bg-slate-100 hover:bg-amber-50 border border-slate-200/90 transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        ref={backdropRef}
        onClick={() => setMobileMenuOpen(false)}
        className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs opacity-0 pointer-events-none lg:hidden transition-opacity"
        aria-hidden="true"
      />

      {/* Mobile Drawer (Slide in from Right) */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden translate-x-full"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-xs">
              MT
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-slate-900 leading-tight">
                {t('nav.brandName', 'MT ENGINEERING')}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                {isOdia ? 'ଭୁବନେଶ୍ୱର • ଓଡ଼ିଶା' : 'Bhubaneswar • Odisha'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Prominent Language Switcher Bar in Drawer */}
        <div className="px-5 py-3.5 bg-amber-50/50 border-b border-amber-100/70 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-700">
            {isOdia ? 'ଭାଷା ବଦଳାନ୍ତୁ (Language):' : 'Select Language:'}
          </span>
          <LanguageSwitcher />
        </div>

        {/* Navigation Links */}
        <div className="p-4 sm:p-5 space-y-1.5 flex-1">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 px-2">
            {t('nav.menu', 'Menu')}
          </div>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-50 text-amber-700 border border-amber-200/80 shadow-xs'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <span>{item.label}</span>
              <ArrowRight size={15} className="text-slate-400" />
            </NavLink>
          ))}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/50 space-y-2.5">
          <a
            href="tel:+919437012890"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors shadow-xs"
          >
            <Phone size={14} className="text-amber-600" />
            <span>+91 94370 12890</span>
          </a>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full text-center bg-amber-600 text-white font-semibold text-xs py-3 rounded-xl hover:bg-amber-500 transition-colors shadow-sm cursor-pointer"
          >
            <span>{t('nav.getQuote', 'Get Free Quote')}</span>
            <ArrowRight size={14} />
          </Link>

          <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400 pt-0.5">
            <MapPin size={12} className="text-amber-600" />
            <span>{t('nav.location', 'Jaydev Vihar, Bhubaneswar, Odisha')}</span>
          </div>
        </div>
      </div>
    </>
  );
}
