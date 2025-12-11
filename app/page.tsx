"use client";

import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Phone, Download, ExternalLink, Github, Globe, Code, Settings, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Lottie from "lottie-react";
import animationData from "@/public/lotties/coding.json";
import Section from "@/components/Section";
import HeroTyping from "@/components/HeroTyping";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

function SkillIcon({ icon, name }: { icon: string; name: string }) {
  const [imageError, setImageError] = React.useState(false);

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-[#E4B9A5]">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={icon}
      alt={name}
      width={50}
      height={50}
      className="object-contain w-full h-full"
      onError={() => setImageError(true)}
    />
  );
}

export default function Home() {
  const { dict } = useLanguage();
  return (
    <ThemeProvider>
      <main className="-mt-20 flex min-h-screen flex-col gap-12 overflow-x-hidden sm:gap-16 lg:gap-20">
        <Section id="accueil" className="pt-16 sm:pt-20 lg:pt-24">
          <div className="flex flex-col items-center gap-10 md:gap-6 lg:flex-row lg:items-center lg:mt-15">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="flex md:h-90 md:w-90 h-60 w-60 ml-10 lg:ml-20 items-center justify-center rounded-full bg-linear-to-tr from-[#E4B9A5] via-[#f0d5c5] to-[#E4B9A5] p-6 shadow-xl overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="flex items-center justify-center"
                >

                  <Image
                    src="/sary.png"
                    alt="logo"
                    width={250}
                    height={250}
                    priority
                    className=" object-cover "
                  />
                </motion.div>
              </div>
            </div>
            <div className="w-full max-w-2xl space-y-6 text-center lg:text-left md:grid md:grid-cols-1 md:items-center md:justify-center">
              <p className="text-xl text-muted-foreground md:text-lg lg:text-xl lg:text-center">
                👋 {dict.hero.hello}
              </p>
              <div className="md:min-h-[220px] w-full ">
                <HeroTyping
                  name={dict.hero.name}
                  role={dict.hero.role}
                  typingSpeedMs={70}
                  deletingSpeedMs={40}
                  pauseAfterComplete={2000}
                  pauseBeforeRestart={800}
                />
              </div>
              <div className="flex -mt-40 md:mt-0 w-full flex-col gap-4 sm:flex-row sm:justify-center items-center justify-center md:items-center lg:justify-center lg:-mt-30">
                <Button onClick={() => {
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                  if (isMobile) {
                    window.location.href = "tel:+261346844249"; // appel direct
                  } else {
                    window.open("https://wa.me/261346844249", "_blank"); // WhatsApp
                  }
                }}
                  className="flex md:w-50 w-60 items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-6 py-4 text-base font-medium text-zinc-800 transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  {dict.hero.contact}
                </Button>
                <a href="/cv.pdf" download="cv.pdf">
                  <Button className="flex md:w-50 w-60 items-center justify-center rounded-full bg-linear-to-r from-[#e76f38] to-[#c4715c] px-6 py-4 text-base font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:from-[#d55a2a] hover:to-[#b35d4a] sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    {dict.hero.download}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="about">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold text-[#E4B9A5] sm:text-4xl lg:text-5xl">
              {dict.about.title}
            </h2>
            <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-[#E4B9A5] to-[#eeb244]" />
          </div>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="rounded-xl border-4 border-[#E4B9A5] bg-background/70 px-6 py-5 text-base text-muted-foreground shadow-sm dark:text-gray-100 lg:text-[17px] whitespace-pre-line">
                {dict.about.intro}
              </div>
              <div className="mx-auto w-full max-w-md md:-mt-22">
                <Lottie animationData={animationData} loop autoplay style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
            <div className="space-y-4 rounded-xl border-4 border-[#E4B9A5] bg-background/70 px-6 py-8 lg:-mt-10">
              <h3 className="text-2xl font-semibold text-[#eeb244] sm:text-3xl lg:text-2xl">{dict.about.heading}</h3>
              {dict.about.lines.map((line, idx) => (
                <p key={idx} className="text-base text-muted-foreground dark:text-gray-100 lg:text-[17px]">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Section>
        <Section id="competence">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold text-[#E4B9A5] sm:text-4xl lg:text-5xl">
              {dict.skills.title}
            </h2>
            <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-[#E4B9A5] to-[#eeb244]" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {[
              {
                category: dict.skills.languages,
                skills: [
                  { name: 'HTML', icon: '/logos/html-5-svgrepo-com.svg' },
                  { name: 'CSS', icon: '/logos/css-3-svgrepo-com.svg' },
                  { name: 'TypeScript', icon: '/logos/typescript-official-svgrepo-com.svg' },
                  { name: 'SQL', icon: '/logos/mysql-logo-svgrepo-com.svg' },
                  { name: 'Java', icon: '/logos/java-svgrepo-com.svg' },
                ],
              },
              {
                category: dict.skills.frameworks,
                skills: [
                  { name: 'React', icon: '/logos/react-svgrepo-com.svg' },
                  { name: 'Next.js', icon: '/logos/next-dot-js-svgrepo-com.svg' },
                  { name: 'Laravel', icon: '/logos/laravel-svgrepo-com (1).svg' },
                  { name: 'Tailwind CSS', icon: '/logos/tailwind-svgrepo-com.svg' },
                  { name: 'Expo', icon: '/logos/expo-svgrepo-com.svg' },
                  { name: 'Flutter', icon: '/logos/flutter-svgrepo-com.svg' },
                ],
              },
              {
                category: dict.skills.tools,
                skills: [
                  { name: 'Git', icon: '/logos/git-svgrepo-com.svg' },
                  { name: 'Github', icon: '/logos/github-color-svgrepo-com.svg' },
                  { name: 'Figma', icon: '/logos/figma-svgrepo-com.svg' },
                  { name: 'Vercel', icon: '/logos/vercel-svgrepo-com.svg' },
                  { name: 'MySQL/PHPMyAdmin', icon: '/logos/mysql-svgrepo-com.svg' },
                ],
              },
            ].map((category, categoryIdx) => (
              <motion.div
                key={categoryIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
              >
                <Card className="flex h-full flex-col border-4 border-[#E4B9A5] bg-background/70 transition-all duration-300 hover:bg-background/90">
                  <CardHeader>
                    <CardTitle className="text-center text-xl text-[#eeb244] md:text-2xl">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skillIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: skillIdx * 0.08 }}
                          className="group flex flex-col items-center justify-center gap-3"
                        >
                          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md dark:bg-zinc-800">
                            <SkillIcon icon={skill.icon} name={skill.name} />
                          </div>
                          <span className="text-center text-sm font-medium text-muted-foreground dark:text-gray-100 md:text-base">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
        <Section id="project" className="w-full py-12 md:py-16 lg:py-20">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold text-[#E4B9A5] sm:text-4xl lg:text-5xl">
              {dict.projects.title}
            </h2>
            <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-[#E4B9A5] to-[#eeb244]" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "portfolio",
                title: "Portfolio Personnel",
                description: "Site portfolio moderne avec support multilingue, thème sombre/clair et animations fluides.",
                tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                image: "/projets/portfolio.png",
              },
              {
                id: "gest-livra",
                title: "Gest-Livra",
                description: "Plateforme de gestion de livraison et de stockage de marchandises adaptée aux entreprises de vente en ligne. (développé en équipe de 3 personnes)",
                tech: ["Laravel", "React", "TypeScript", "Tailwind CSS", "Inertia.js", "MySQL/PHPMyAdmin"],
                image: "/projets/gest-livra.jpeg"
              },
              {
                id: "examada",
                title: "Examada",
                description: "Projet développé lors d'un hackaton sur le thème de promouvoir l'éducation à Madagascar. Une plateforme qui permet au classe d'examen de réviser à tout moment.(développé en équipe de 4 personnes)",
                tech: ["Laravel", "TypeScript", "Tailwind CSS", "Inertia", "MySQL/PHPMyAdmin", "React"],
                image: "/projets/examada.png"
              },
              {
                id: "paint",
                title: "Projet Paint by Gio",
                description: "Un petit projet nommée Paint_by_Gio qui a les fonctionnalités de base du logiciel Paint_3D",
                tech: ["Java"],
                image: "/projets/paint.png"
              },
              {
                id: "agrinova",
                title: "AgriNova",
                description: "Projet développé lors d'un hackaton sur le thème de CULTIVER DEMAIN. Une plateforme qui permet aux agriculteurs/passionnés par l'agriculture de maximiser ses récoltes grace à l'aide de l'IA.(développé en équipe de 3 personnes)",
                tech: ["Laravel", "TypeScript", "Tailwind CSS", "Inertia", "MySQL/PHPMyAdmin", "React"],
                image: "/projets/agrinova.png"
              },
            ].map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col project-card-glass overflow-hidden"
              >
                {project.image && (
                  <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-52 xl:h-56 overflow-hidden bg-gray-100 dark:bg-zinc-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                      className="object-cover transition-transform duration-500 hover:scale-110 p-6 lg:p-6 md:p-6 lg:radius-2xl"
                      onError={(e) => {
                        console.error(`Failed to load: ${project.image}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 p-4 sm:p-5 md:p-6">
                  <h3 className="mb-2 sm:mb-3 text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-[#eeb244] leading-tight line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mb-4 flex-1 text-sm sm:text-base md:text-base lg:text-sm xl:text-base text-muted-foreground dark:text-gray-100 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="rounded-full border border-[#E4B9A5]/30 bg-[#E4B9A5]/20 px-2 py-1 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 text-xs sm:text-xs md:text-sm font-medium text-[#E4B9A5] transition-colors hover:bg-[#E4B9A5]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
        <Section id="service">
          <div className="mb-6 flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold text-[#E4B9A5] sm:text-4xl lg:text-5xl">
              {dict.services.title}
            </h2>
            <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-[#E4B9A5] to-[#eeb244]" />
          </div>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base text-muted-foreground dark:text-gray-300 md:text-lg lg:text-xl">
            {dict.services.introduction}
          </p>
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Globe },
              { icon: Code },
              { icon: Settings },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border-2 border-transparent bg-background/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#E4B9A5]/30 hover:bg-background/90 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#E4B9A5] to-[#eeb244] text-white">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#eeb244] md:text-2xl">
                    {dict.services.items[idx].title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-300 md:text-base">
                    {dict.services.items[idx].description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto max-w-3xl text-center text-base italic text-muted-foreground dark:text-gray-300 md:text-lg"
          >
            {dict.services.finalMessage}
          </motion.p>
        </Section>
        <Section id="contact">
          <div className="mb-6 flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold text-[#E4B9A5] sm:text-4xl lg:text-5xl">
              {dict.contact.title}
            </h2>
            <div className="mt-4 h-1 w-24 rounded-full bg-linear-to-r from-[#E4B9A5] to-[#eeb244]" />
          </div>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base text-muted-foreground dark:text-gray-300 md:text-lg lg:text-xl">
            {dict.contact.subtitle}
          </p>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border-4 border-[#E4B9A5] bg-background/70 p-8"
            >
              <h3 className="mb-6 text-2xl font-semibold text-[#eeb244] sm:text-3xl">
                {dict.contact.info.title}
              </h3>
              <div className="space-y-6">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#E4B9A5] to-[#eeb244] text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">Email</p>
                    <a href={`mailto:${dict.contact.info.email}`} className="font-medium text-[#E4B9A5] hover:underline">
                      {dict.contact.info.email}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#E4B9A5] to-[#eeb244] text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{dict.contact.info.phoneLabel}</p>
                    <a href={`tel:${dict.contact.info.phone}`} className="font-medium text-[#E4B9A5] hover:underline">
                      {dict.contact.info.phone}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#E4B9A5] to-[#eeb244] text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{dict.contact.info.locationLabel}</p>
                    <p className="font-medium text-[#E4B9A5]">{dict.contact.info.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border-4 border-[#E4B9A5] bg-background/70 p-8"
            >
              <ContactForm
                labels={{
                  name: dict.contact.name,
                  email: dict.contact.email,
                  message: dict.contact.message,
                  send: dict.contact.send,
                }}
              />
            </motion.div>
          </div>
        </Section>

      </main>
      <footer className="w-full border-t border-zinc-200 bg-background/70 backdrop-blur dark:border-zinc-800">
        <div className="site-container py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">Gio<span className="text-[#E4B9A5]">Portfolio</span></h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a
                href="https://github.com/Giovanni2907"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-[#E4B9A5]"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/giovanni-marcelo-7712112b5/"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#E4B9A5] transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${dict.contact.info.email}`}
                className="text-muted-foreground hover:text-[#E4B9A5] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-center text-sm text-muted-foreground dark:border-zinc-800 md:flex-row md:text-base md:text-left">
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Giovanni Marcelo. {dict.footer.rights}.
            </p>
            <p className="flex items-center gap-1 text-sm md:text-base">
              {dict.footer.madeWith} <span className="text-[#E4B9A5]">❤️</span> {dict.footer.madeWith === 'Fait avec' ? 'à Madagascar' : 'in Madagascar'}
            </p>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}
