import { createContext, useContext, useState, useEffect } from 'react';
import en from './locales/en.json';
import or from './locales/or.json';

const translations = {
  en,
  or,
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('mt_lang');
      return saved === 'or' ? 'or' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang) => {
    const selected = lang === 'or' ? 'or' : 'en';
    setLanguageState(selected);
    try {
      localStorage.setItem('mt_lang', selected);
    } catch (e) {
      console.warn('Could not save language to localStorage', e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'or' : 'en');
  };

  // Helper function to resolve nested keys like "hero.title"
  const t = (keyPath, fallback = '') => {
    if (!keyPath) return fallback;

    const keys = keyPath.split('.');
    
    // Try current language
    let currentVal = translations[language];
    for (const k of keys) {
      if (currentVal && typeof currentVal === 'object' && k in currentVal) {
        currentVal = currentVal[k];
      } else {
        currentVal = undefined;
        break;
      }
    }

    if (currentVal !== undefined && (typeof currentVal === 'string' || Array.isArray(currentVal))) {
      return currentVal;
    }

    // Fallback to English
    let fallbackVal = translations.en;
    for (const k of keys) {
      if (fallbackVal && typeof fallbackVal === 'object' && k in fallbackVal) {
        fallbackVal = fallbackVal[k];
      } else {
        fallbackVal = undefined;
        break;
      }
    }

    if (fallbackVal !== undefined && (typeof fallbackVal === 'string' || Array.isArray(fallbackVal))) {
      return fallbackVal;
    }

    return fallback || keyPath;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
