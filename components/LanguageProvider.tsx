'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Locale = 'fr' | 'en';

type TranslationDict = {
  nav: {
    home: string;
    about: string;
    projects: string;
    services: string;
    contact: string;
  };
  hero: {
    hello: string;
    name: string;
    role: string;
    contact: string;
    download: string;
  };
  about: {
    title: string;
    heading: string;
    lines: string[];
  };
};

const translations: Record<Locale, TranslationDict> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'A propos',
      projects: 'Projet',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      hello: 'Bonjour, je suis',
      name: 'Giovanni Marcelo',
      role: 'Développeur web et mobile',
      contact: 'Contactez-moi',
      download: 'Télécharger mon CV',
    },
    about: {
      title: 'A propos',
      heading: 'Qui suis-je ?',
      lines: [
        "_ Développeur full‑stack passionné par le développement web et mobile",
        "_ J’aime transformer des idées en produits élégants et fiables pour satisfaires mes besoins personnels et celles du client.",
        "_ Passionné par l'informatique, je veux réussir dans la vie grace à cette passion",
        "_ Stack préférée: TypeScript, React/Next.js,React Native, Laravel et Tailwind CSS.",
      ],
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      hello: "Hello, I'm",
      name: 'Giovanni Marcelo',
      role: 'Web and mobile Developer',
      contact: 'Contact me',
      download: 'Download CV',
    },
    about: {
      title: 'About',
      heading: 'Who am I?',
      lines: [
        'Full‑stack developer focused on UX and performance.',
        'I turn ideas into elegant, reliable products.',
        'Favorite stack: TypeScript, React/Next.js, Node, and Tailwind CSS.',
      ],
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  dict: TranslationDict;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('locale') as Locale | null) : null;
    if (stored === 'fr' || stored === 'en') {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, dict: translations[locale] }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}


