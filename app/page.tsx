"use client";

import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Phone, Download } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import  Lottie  from "lottie-react";
import animationData from "@/public/lotties/coding.json";
import Section from "@/components/Section";
import HeroTyping from "@/components/HeroTyping";

export default function Home() {
  const { dict } = useLanguage();
  return (
      <ThemeProvider>
      <main className="site-container -mt-28 flex min-h-screen flex-col sm:items-start" data-scroll-container>
          <Section id="accueil">
          <div className="flex items-center gap-8 md:ml-10">
          <div className="w-80 h-100 bg-[#E4B9A5] rounded-full overflow-hidden flex items-center justify-center mt-10">
  <Image
    src="/sary.png"
    alt="logo"
    width={250}
    height={250}
    className="object-cover"
  />
</div>
<div className="flex flex-col items-center gap-4 ml-30 mt-10 justify-center ">
 <div className="text-2xl sm:text-3xl font-light text-zinc-500 dark:text-zinc-400 opacity-100 transition-opacity duration-500 mb-6">
    👋 Bienvenue sur mon portfolio
  </div>
 <div className="min-h-[280px] flex items-start justify-center">
 <HeroTyping
    hello={dict.hero.hello}
    name={dict.hero.name}
    role={dict.hero.role}
    typingSpeedMs={70}
    deletingSpeedMs={40}
    pauseAfterComplete={2000}
    pauseBeforeRestart={800}
  />   
</div>
<div className="flex items-center gap-6 -mt-10">
            <Button className="bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border-2 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer px-8 py-5 rounded-full font-medium shadow-sm"><Phone className="mr-2 w-4 h-4"/>{dict.hero.contact}</Button>
            <Button className="bg-linear-to-r from-[#e76f38] to-[#c4715c] text-white hover:from-[#d55a2a] hover:to-[#b35d4a] transition-all duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer px-8 py-5 rounded-full font-medium shadow-md"><Download className="mr-2 w-4 h-4"/>{dict.hero.download}</Button>
          </div>
          </div>
          </div>
          </Section>

          <Section id="about" className="w-full py-24">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center text-[#E4B9A5] mb-10">
              {dict.about.title}
            </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col justify-center">
              <div className="space-y-4 border-4 border-[#E4B9A5] rounded-xl p-4 bg-background/70 text-zinc-500 dark:text-gray-100">
              Je suis un développeur web basé à Madagascar qui continue à perfectionner ses compétences pour devenir un professionnel complet du web.<br/>

              Mon objectif : développer des solutions modernes et participer à des projets innovants, que ce soit en freelance ou en équipe.
              </div>

                <Lottie animationData={animationData}
                  src="/lotties/coding.json"
                  loop
                  autoplay
                  style={{ width: '100%', maxWidth: '420px', height: 'auto' }}
                  className="-mt-10 ml-20"
                />
              </div>
              <div className="space-y-4 border-4 border-[#E4B9A5] rounded-xl p-4 bg-background/70 -mt-15">
                <h3 className="text-2xl font-semibold tracking-tight text-[#eeb244]">{dict.about.heading}</h3>
                {dict.about.lines.map((line, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed dark:text-gray-100">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Section>
         
      </main>
      </ThemeProvider>
  );
}
