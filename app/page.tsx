"use client";

import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Phone, Download, ExternalLink, Github, Globe, Code, Palette, Settings, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import  Lottie  from "lottie-react";
import animationData from "@/public/lotties/coding.json";
import Section from "@/components/Section";
import HeroTyping from "@/components/HeroTyping";
import { motion } from "framer-motion";

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
      <main className="site-container -mt-28 flex min-h-screen flex-col sm:items-start" data-scroll-container>
          <Section id="accueil">
          <div className="flex items-center gap-8 md:ml-10">
          <div className="w-90 h-90 bg-gradient-to-tr from-[#E4B9A5] via-[#f0d5c5] to-[#E4B9A5] dark:bg-gradient-to-tr from-[#E4B9A5] via-[#f0d5c5] to-[#E4B9A5] rounded-full overflow-hidden flex items-center justify-center mt-10 border-white shadow-xl">
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
>
  <Image
    src="/sary.png"
    alt="logo"
    width={250}
    height={250}
    className="object-cover"
  />
  </motion.div>
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
            <div className="flex flex-col items-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center text-[#E4B9A5] mb-4">
                {dict.about.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E4B9A5] to-[#eeb244] rounded-full"></div>
            </div>
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
          <Section id="competence" className="w-full py-24">
            <div className="flex flex-col items-center mb-12 ">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center text-[#E4B9A5] mb-4">
                {dict.skills.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E4B9A5] to-[#eeb244] rounded-full "></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  category: dict.skills.languages,
                  skills: [
                    { name: 'HTML', icon: '/logos/html-5-svgrepo-com.svg' },
                    { name: 'CSS', icon: '/logos/css-3-svgrepo-com.svg' },
                    { name: 'TypeScript', icon: '/logos/typescript-official-svgrepo-com.svg' },
                    { name: 'SQL', icon: '/logos/mysql-logo-svgrepo-com.svg' },
                    { name: 'Java', icon:'/logos/java-svgrepo-com.svg'},
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
                  <Card className="border-4 border-[#E4B9A5] bg-background/70 hover:bg-background/90 transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-center text-[#eeb244]">
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
                            transition={{ duration: 0.4, delay: skillIdx * 0.1 }}
                            className="flex flex-col items-center justify-center gap-3 group"
                          >
                            <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-800 p-3 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                              <SkillIcon icon={skill.icon} name={skill.name} />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground dark:text-gray-100 text-center">
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
          <Section id="projet" className="w-full py-24">
            <div className="flex flex-col items-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center text-[#E4B9A5] mb-4">
                {dict.projects.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E4B9A5] to-[#eeb244] rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Portfolio Personnel",
                  description: "Site portfolio moderne avec support multilingue, thème sombre/clair et animations fluides.",
                  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                  image: "/projets/portfolio.png", // <-- à personnaliser selon fichier existant
                },
                {
                  title: "Gest-Livra",
                  description: "Plateforme de gestion de livraison et de stockage de marchandises adaptée aux entreprises de vente en ligne. (dévéloppé en équipe de 3 personnes)",
                  tech: ["Laravel", "React", "TypeScript", "Tailwind CSS", "Inertia.js", "MySQL/PHPMyAdmin"],
                  image: "/projets/gest-livra.jpeg" // <-- à personnaliser selon fichier existant
                },
                {
                  title: "Examada",
                  description: "Projet dévéloppé lors d'un hackaton sur le thème de promouvoir l'éducation à Madagascar. Une plateforme qui permet au classe d'examen de réviser à tout moment.(dévéloppé en équipe de 4 personnes)",
                  tech: ["Laravel", "TypeScript", "Tailwind CSS", "Inertia", "MySQL/PHPMyAdmin","React"],
                  image: "/projets/examada.png" // <-- à personnaliser selon fichier existant
                },
                {
                  title: "Projet Paint by Gio",
                  description: "Un petit projet nommée Paint_by_Gio qui a les fonctionnalités de base du logiciel Paint_3D",
                  tech: ["Java"],
                  image: "/projets/paint.png" // <-- à personnaliser selon fichier existant
                },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-4 border-[#E4B9A5] rounded-xl p-6 bg-background/70 hover:bg-background/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  {project.image && (
                    <div className="w-full mb-4 flex justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={620}
                        height={460}
                        className="object-contain rounded-lg border border-[#E4B9A5]/30 bg-white p-1"
                        style={{ maxHeight: 460 }}
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold tracking-tight text-[#eeb244] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed dark:text-gray-100 mb-4 text-[12px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#E4B9A5]/20 text-[#E4B9A5] border border-[#E4B9A5]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Suppression des liens demo/code ici */}
                </motion.div>
              ))}
            </div>
          </Section>
          <Section id="service" className="w-full py-24">
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center text-[#E4B9A5] mb-4">
                {dict.services.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E4B9A5] to-[#eeb244] rounded-full"></div>
            </div>
            <p className="text-center text-muted-foreground dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
              {dict.services.introduction}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  className="rounded-2xl shadow-lg hover:shadow-xl p-6 bg-background/70 hover:bg-background/90 transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#E4B9A5]/30"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E4B9A5] to-[#eeb244] text-white mb-2">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#eeb244]">
                      {dict.services.items[idx].title}
                    </h3>
                    <p className="text-muted-foreground dark:text-gray-300 leading-relaxed text-sm">
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
              className="text-center text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto text-base italic"
            >
              {dict.services.finalMessage}
            </motion.p>
          </Section>
          <Section id="contact" className="w-full py-24">
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center text-[#E4B9A5] mb-4">
                {dict.contact.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E4B9A5] to-[#eeb244] rounded-full"></div>
            </div>
            <p className="text-center text-muted-foreground dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
              {dict.contact.subtitle}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-4 border-[#E4B9A5] rounded-xl p-8 bg-background/70"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-[#eeb244] mb-6">
                  {dict.contact.info.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E4B9A5] to-[#eeb244] text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">Email</p>
                      <a href={`mailto:${dict.contact.info.email}`} className="text-[#E4B9A5] hover:underline font-medium">
                        {dict.contact.info.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E4B9A5] to-[#eeb244] text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">{dict.contact.info.phoneLabel}</p>
                      <a href={`tel:${dict.contact.info.phone}`} className="text-[#E4B9A5] hover:underline font-medium">
                        {dict.contact.info.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E4B9A5] to-[#eeb244] text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">{dict.contact.info.locationLabel}</p>
                      <p className="text-[#E4B9A5] font-medium">{dict.contact.info.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-4 border-[#E4B9A5] rounded-xl p-8 bg-background/70"
              >
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  // Handle form submission here
                }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground dark:text-gray-300 mb-2">
                      {dict.contact.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-foreground focus:outline-none focus:border-[#E4B9A5] transition-colors"
                      placeholder={dict.contact.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground dark:text-gray-300 mb-2">
                      {dict.contact.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-foreground focus:outline-none focus:border-[#E4B9A5] transition-colors"
                      placeholder={dict.contact.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground dark:text-gray-300 mb-2">
                      {dict.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-foreground focus:outline-none focus:border-[#E4B9A5] transition-colors resize-none"
                      placeholder={dict.contact.message}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#e76f38] to-[#c4715c] text-white hover:from-[#d55a2a] hover:to-[#b35d4a] transition-all duration-200 py-6 rounded-full font-medium shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    {dict.contact.send}
                  </Button>
                </form>
              </motion.div>
            </div>
          </Section>
         
      </main>
      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-background/70 backdrop-blur">
        <div className="site-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-foreground">Gio<span className="text-[#E4B9A5]">Portfolio</span></h3>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Giovanni2907"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#E4B9A5] transition-colors"
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
          <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Giovanni Marcelo. {dict.footer.rights}.
            </p>
            <p className="flex items-center gap-1">
              {dict.footer.madeWith} <span className="text-[#E4B9A5]">❤️</span> {dict.footer.madeWith === 'Fait avec' ? 'à Madagascar' : 'in Madagascar'}
            </p>
          </div>
        </div>
      </footer>
      </ThemeProvider>
  );
}
