'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import { Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
    DrawerTitle,
    
 } from './ui/drawer';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ModeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

export default function Menu() {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const linkHover = 'relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E4B9A5] after:transition-all after:duration-300 hover:after:w-full';
    const [activeId, setActiveId] = useState<string>('accueil');
    const { dict } = useLanguage();

    const handleNav = (event: React.MouseEvent, id: string) => {
        event.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]")
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveId(entry.target.id)
              }
            })
          },
          { threshold: 0.5 } // visible à moitié = actif
        )
    
        sections.forEach((section) => observer.observe(section))
    
        return () => {
          sections.forEach((section) => observer.unobserve(section))
        }
      }, [])
    return (
        <div className='sticky top-0 z-50 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border'>
        <div className='site-container'>
        {isDesktop ? <div className=' flex justify-between items-center h-18'>
            <h1 className='text-4xl text-foreground font-bold'>Gio<span className=' text-[#E4B9A5] font-bold'>Portfolio</span> </h1>
            <div className='flex items-center gap-8 font-semibold text-foreground/80 text-[18px] '>
                <Link href="/page#accueil" onClick={(e)=>handleNav(e,'accueil')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='accueil' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.home}</Link>
                <Link href="/page#about" onClick={(e)=>handleNav(e,'about')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='about' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.about}</Link>
                <Link href="/page#competence" onClick={(e)=>handleNav(e,'competence')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='competence' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.skills}</Link>
                <Link href="/page#projet" onClick={(e)=>handleNav(e,'projet')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='projet' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.projects}</Link>
                <Link href="/page#service" onClick={(e)=>handleNav(e,'service')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='service' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.services}</Link>
                <Link href="/page#contact" onClick={(e)=>handleNav(e,'contact')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='contact' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.contact}</Link>

            </div>
            <div className='flex items-center gap-2'>
            <LanguageToggle />
            <ModeToggle />
            </div>
        </div> 
        : <div className='flex justify-between h-16'>
            <Drawer direction='right'>
                <DrawerTrigger>
                    <div className='p-5'>
                    <MenuIcon />
                    </div>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle className='text-center'>
                            Menu
                            </DrawerTitle>
                    </DrawerHeader>
                    <div className='flex flex-col gap-4'>
                        <Link href="#accueil" onClick={(e)=>handleNav(e,'accueil')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='accueil' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.home}</Link>
                        <Link href="#about" onClick={(e)=>handleNav(e,'about')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='about' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.about}</Link>
                        <Link href="#competence" onClick={(e)=>handleNav(e,'competence')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='competence' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.skills}</Link>
                        <Link href="#projet" onClick={(e)=>handleNav(e,'projet')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='projet' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.projects}</Link>
                        <Link href="#service" onClick={(e)=>handleNav(e,'service')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='service' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.services}</Link>
                        <Link href="#contact" onClick={(e)=>handleNav(e,'contact')} className={`${linkHover} hover:text-[#E4B9A5] tracking-wide font-medium ${activeId==='contact' ? 'after:w-full text-[#E4B9A5]' : ''}`}>{dict.nav.contact}</Link>
                    </div>
                    
                    </DrawerContent>
            </Drawer>
            <div className='flex justify-center items-center gap-2 pr-3'>
            <LanguageToggle />
            <ModeToggle />
                    </div>
        </div> }
        </div>
        </div>
    )
}