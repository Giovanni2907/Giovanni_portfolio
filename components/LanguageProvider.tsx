'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Locale = 'fr' | 'en';

type TranslationDict = {
  nav: {
    home: string;
    about: string;
    skills: string;
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
    intro: string;
    lines: string[];
  };
  skills: {
    title: string;
    languages: string;
    frameworks: string;
    tools: string;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
  };
  services: {
    title: string;
    introduction: string;
    finalMessage: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    info: {
      title: string;
      phoneLabel: string;
      locationLabel: string;
      email: string;
      phone: string;
      location: string;
    };
  };
  footer: {
    rights: string;
    madeWith: string;
  };
};

const translations: Record<Locale, TranslationDict> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'A propos',
      skills: 'Compétences',
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
      intro: 'Je suis un développeur web basé à Madagascar qui continue à perfectionner ses compétences pour devenir un professionnel complet du web.\n\nMon objectif : développer des solutions modernes et participer à des projets innovants, que ce soit en freelance ou en équipe.',
      lines: [
        "_RAJAONARISON Notahinjanahary Marcelo Giovanni",
        "_ Développeur full‑stack passionné par le développement web et mobile",
        "_ J'aime transformer des idées en produits élégants et fiables pour satisfaires mes besoins personnels et celles du client.",
        "_ Passionné par l'informatique, je veux réussir dans la vie grace à cette passion",
        "_ Stack préférée: TypeScript, React/Next.js,React Native, Laravel et Tailwind CSS.",
      ],
    },
    skills: {
      title: 'Mes Compétences',
      languages: 'Langages maîtrisés',
      frameworks: 'Frameworks & Librairies',
      tools: 'Outils & Technologies',
    },
    projects: {
      title: 'Mes Projets',
      viewProject: 'Voir le projet',
      viewCode: 'Voir le code',
    },
    services: {
      title: 'Mes Services',
      introduction: 'J\'aide les entreprises et particuliers à concevoir des solutions web performantes et esthétiques.',
      finalMessage: 'Chaque projet est une collaboration : je vous aide à transformer vos idées en produits digitaux performants.',
      items: [
        {
          title: 'Développement Web complet',
          description: 'Création de sites web modernes, performants et responsives adaptés à vos besoins.',
        },
        {
          title: 'Applications sur mesure',
          description: 'Développement d\'applications mobiles adaptées à vos besoins spécifiques et à votre activité.',
        },
        {
          title: 'Déploiement & Maintenance',
          description: 'Gestion du projet du début jusqu\'à sa mise en ligne.',
        },
      ],
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Une question ? Un projet ? N\'hésitez pas à me contacter !',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Une erreur est survenue. Veuillez réessayer.',
      info: {
        title: 'Informations de contact',
        phoneLabel: 'Téléphone',
        locationLabel: 'Localisation',
        email: 'steewygio@gmail.com',
        phone: '+261 34 68 442 49',
        location: 'Antananarivo, Madagascar',
      },
    },
    footer: {
      rights: 'Tous droits réservés',
      madeWith: 'Fait avec',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
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
      intro: 'I am a web developer based in Madagascar who continues to perfect my skills to become a complete web professional.\n\nMy goal: to develop modern solutions and participate in innovative projects, whether freelance or in a team.',
      lines: [
        "_RAJAONARISON Notahinjanahary Marcelo Giovanni",
        "_ Full-stack developer passionate about web and mobile development",
        "_ I love transforming ideas into elegant and reliable products to satisfy my personal needs and those of the client.",
        "_ Passionate about computer science, I want to succeed in life thanks to this passion",
        "_ Favorite stack: TypeScript, React/Next.js, React Native, Laravel and Tailwind CSS.",
      ],
    },
    skills: {
      title: 'My Skills',
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools & Technologies',
    },
    projects: {
      title: 'My Projects',
      viewProject: 'View Project',
      viewCode: 'View Code',
    },
    services: {
      title: 'My Services',
      introduction: 'I help businesses and individuals design performant and aesthetic web solutions.',
      finalMessage: 'Every project is a collaboration: I help you transform your ideas into performant digital products.',
      items: [
        {
          title: 'Complete Web Development',
          description: 'Creation of modern, performant and responsive websites adapted to your needs.',
        },
        {
          title: 'Custom Applications',
          description: 'Development of mobile applications adapted to your specific needs and activity.',
        },
        {
          title: 'Deployment & Maintenance',
          description: 'Project management from start to deployment.',
        },
      ],
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Have a question? A project? Don\'t hesitate to contact me!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'An error occurred. Please try again.',
      info: {
        title: 'Contact Information',
        phoneLabel: 'Phone',
        locationLabel: 'Location',
        email: 'steewygio@gmail.com',
        phone: '+261 34 68 442 49',
        location: 'Antananarivo, Madagascar',
      },
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
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


