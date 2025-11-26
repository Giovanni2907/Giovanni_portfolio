"use client";

import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ModeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

export default function Menu() {
    const linkHover = 'relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E4B9A5] after:transition-all after:duration-300 hover:after:w-full';
    const { dict } = useLanguage();
    const [activeId, setActiveId] = useState<string>('accueil');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        { id: 'accueil', label: dict.nav.home },
        { id: 'about', label: dict.nav.about },
        { id: 'competence', label: dict.nav.skills },
        { id: 'project', label: dict.nav.projects },
        { id: 'service', label: dict.nav.services },
        { id: 'contact', label: dict.nav.contact },
    ];

    const handleNav = (event: React.MouseEvent, id: string) => {
        event.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -80; // Hauteur du menu sticky
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveId(id);
            setIsMobileOpen(false);
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                // Filtrer les sections visibles
                const visibleSections = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                // Mettre à jour avec la section la plus visible
                if (visibleSections.length > 0) {
                    setActiveId(visibleSections[0].target.id);
                }
            },
            { 
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                rootMargin: '-80px 0px -50% 0px' // Compte pour le menu sticky
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
            <div className="site-container flex items-center justify-between gap-4 py-4">
                <a href="/#accueil" className="text-2xl font-bold text-foreground md:text-3xl" onClick={(e) => handleNav(e, 'accueil')}>
                    Gio<span className="text-[#E4B9A5]">Portfolio</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map(({ id, label }) => (
                        <Link
                            key={id}
                            href={`/#${id}`}
                            onClick={(e) => handleNav(e, id)}
                            className={`${linkHover} text-base md:text-lg hover:text-[#E4B9A5] text-gray-700 dark:text-gray-300 tracking-wide font-medium ${
                                activeId === id ? 'after:w-full text-[#E4B9A5]' : ''
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden items-center gap-2 md:flex">
                        <LanguageToggle />
                        <ModeToggle />
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full border border-border p-2 md:hidden"
                        onClick={() => setIsMobileOpen((prev) => !prev)}
                        aria-label="Toggle navigation"
                    >
                        {isMobileOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isMobileOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-[max-height] duration-300`}>
                <div className="site-container flex flex-col gap-4 py-4">
                    {navItems.map(({ id, label }) => (
                        <Link
                            key={id}
                            href={`/#${id}`}
                            onClick={(e) => handleNav(e, id)}
                            className={`text-base font-medium text-foreground ${linkHover} ${activeId === id ? 'after:w-full text-[#E4B9A5]' : ''}`}
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 pt-2">
                        <LanguageToggle />
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}