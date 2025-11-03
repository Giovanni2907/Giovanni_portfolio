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
import { Button } from './ui/button';
import { ModeToggle } from "@/components/ThemeToggle";

export default function Menu() {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        isDesktop ? <div className=' flex justify-between items-center px-5'>
            <h1 className='text-4xl text-gray-500 font-bold'>Gio<span className=' text-[#E4B9A5] font-bold'>Portfolio</span> </h1>
            <div className='flex items-center gap-8 font-semibold text-gray-500 dark:text-gray-200 text-[18px] '>
                <Link href="/">Accueil</Link>
                <Link href="/about">A propos</Link>
                <Link href="/projet">Projet</Link>
                <Link href="/service">Services</Link>
                <Link href="/contact">Contact</Link>

            </div>
            <ModeToggle />
        </div> 
        : <div className='flex justify-between'>
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
                        <Link href="/">Accueil</Link>
                        <Link href="/about">A propos</Link>
                        <Link href="/projet">Projet</Link>
                        <Link href="/service">Services</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    
                    </DrawerContent>
            </Drawer>
            <div className='flex justify-center'>
            <ModeToggle />
                    </div>
        </div> 
    )
}