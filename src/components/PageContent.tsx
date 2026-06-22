import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "@/i18n/LanguageToggle";
import { TextGenerateEffect } from "@/components/TextGenerative";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import { Vortex } from "@/components/vortext";
import { WobbleCard } from "@/components/wobble-card";
import ParallaxSection from "@/components/scroll-animation";
import TechCards from "@/components/tech-list";
import { PortifolioCard } from "@/components/card3d";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Menu,
  X,
} from "lucide-react";

const PROFILE_PHOTO = `${import.meta.env.BASE_URL}/profile.jpg`;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/lucaspereirasouzat",
    icon: Instagram,
  },
  { label: "GitHub", href: "https://github.com/lucaspereirasouzat", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/lucas-pereira-511292142",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/banasplit78",
    icon: Facebook,
  },
  {
    label: "Email",
    href: "mailto:lucaspereiradesouzat@gmail.com",
    icon: Mail,
  },
];

export default function PageContent() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const typewriterWords = t.hero.typewriter.map((word, i) => ({
    text: word,
    className:
      i === t.hero.typewriter.length - 1
        ? "text-blue-500 dark:text-blue-500"
        : undefined,
  }));

  const wobbleCards = [
    {
      title: t.technologies.cards.frontend.title,
      description: t.technologies.cards.frontend.description,
      containerClassName:
        "col-span-1 lg:col-span-2 h-full bg-zinc-900 min-h-[420px] lg:min-h-[320px] border border-zinc-800",
    },
    {
      title: t.technologies.cards.backend.title,
      description: t.technologies.cards.backend.description,
      containerClassName:
        "col-span-1 bg-zinc-900 min-h-[320px] border border-zinc-800",
    },
    {
      title: t.technologies.cards.devops.title,
      description: t.technologies.cards.devops.description,
      containerClassName:
        "col-span-1 lg:col-span-3 bg-zinc-900 min-h-[420px] lg:min-h-[360px] xl:min-h-[320px] border border-zinc-800",
    },
  ];

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.technologies, href: "#technologies" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      {/* Header */}
      <header>
        <div className="w-full mx-auto bg-black/80 backdrop-blur-sm fixed z-50 text-white">
          {/* Mobile nav */}
          <nav className="sm:hidden flex items-center justify-between px-4 py-3">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              LS
            </a>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
          {mobileMenuOpen && (
            <div className="sm:hidden bg-black/95 border-t border-zinc-800 px-4 pb-4">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-zinc-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Desktop nav */}
          <nav className="justify-between items-center h-10 p-10 hidden sm:flex">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              LS
            </a>

            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <li key={link.href} className="hover:text-gray-500">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <LanguageToggle />
              <a
                className="px-5 py-1 bg-gray-50 rounded-full ring-1 ring-gray-100 hover:bg-white text-gray-900 transition-colors"
                href="#contact"
              >
                {t.nav.hireMe}
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={100}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className="container mx-auto">
            <div className="flex flex-col gap-6 items-center text-center">
              <img
                src={PROFILE_PHOTO}
                alt="Lucas Pereira de Souza"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-zinc-700 shadow-2xl"
              />
              <TextGenerateEffect words="Lucas Pereira de Souza" />
              <TypewriterEffectSmooth
                words={typewriterWords}
                lastOptions={t.hero.rotatingTechs}
                lastColors={t.hero.rotatingColors}
                intervalMs={3000}
              />
              <p className="max-w-[600px] text-zinc-300 md:text-xl mx-auto">
                {t.hero.tagline}
              </p>
              <p className="text-gray-500 text-sm">{t.hero.role}</p>
              <div className="flex gap-4 mt-2">
                <a
                  href="#portfolio"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  {t.hero.ctaPortfolio}
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-zinc-500 text-zinc-200 hover:bg-zinc-800 font-medium rounded-lg transition-colors"
                >
                  {t.hero.ctaContact}
                </a>
              </div>
            </div>
          </div>
        </Vortex>
      </div>

      {/* Main */}
      <main className="w-full">
        {/* About */}
        <section id="about" className="bg-black shadow-xl w-full p-10">
          <ParallaxSection>
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-10 items-start">
              <img
                src={PROFILE_PHOTO}
                alt="Lucas Pereira de Souza"
                className="w-64 h-64 rounded-2xl object-cover shrink-0 shadow-xl"
              />
              <div>
                <h2 className="text-bold text-2xl mb-3 text-white">
                  {t.about.title}
                </h2>
                <p className="mb-5 text-sm text-gray-400">
                  {t.about.subtitle}
                </p>
                <p className="text-gray-500 text-justify leading-10">
                  {t.about.bio}
                </p>
              </div>
            </div>
          </ParallaxSection>
        </section>

        {/* Tech Cards */}
        <TechCards />

        {/* Technologies WobbleCards */}
        <section className="lg:p-20 p-5 w-full" id="technologies">
          <ParallaxSection>
            <div className="w-full mx-auto">
              <h2 className="text-center text-4xl font-bold pb-10">
                {t.technologies.sectionTitle}
              </h2>
              <div className="lg:columns-2 sm:columns-1 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                  {wobbleCards.map((card, i) => (
                    <WobbleCard
                      key={i}
                      containerClassName={card.containerClassName}
                    >
                      <div className="max-w-lg">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                          {card.title}
                        </h2>
                        <p className="mt-4 text-left text-base/6 text-zinc-300">
                          {card.description}
                        </p>
                      </div>
                    </WobbleCard>
                  ))}
                </div>
              </div>
            </div>
          </ParallaxSection>
        </section>

        {/* Portfolio */}
        <section className="lg:p-20 p-5" id="portfolio">
          <ParallaxSection>
            <div className="w-full mx-auto">
              <h2 className="text-center text-4xl font-bold pb-10">
                {t.portfolio.title}
              </h2>
              <PortifolioCard />
            </div>
          </ParallaxSection>
        </section>

        {/* Contact */}
        <section className="sm:p-20 p-5" id="contact">
          <ParallaxSection>
            <div className="sm:container mx-auto">
              <h2 className="text-center text-4xl font-bold pb-4">
                {t.contact.title}
              </h2>
              <p className="text-center text-zinc-400 text-lg mb-10">
                {t.contact.letsTalk}
              </p>
              <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-zinc-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {t.contact.email}
                    </h3>
                  </div>
                  <a
                    className="text-zinc-400 hover:text-white transition-colors ml-8"
                    href="mailto:lucaspereiradesouzat@gmail.com"
                  >
                    lucaspereiradesouzat@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {t.contact.social}
                  </h3>
                  <ul className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <li key={social.label}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white"
                          >
                            <Icon className="w-4 h-4" />
                            {social.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </ParallaxSection>
        </section>
      </main>
    </>
  );
}
