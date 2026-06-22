import ptNav from "./locales/pt/nav";
import ptHero from "./locales/pt/hero";
import ptAbout from "./locales/pt/about";
import ptTechnologies from "./locales/pt/technologies";
import ptPortfolio from "./locales/pt/portfolio";
import ptContact from "./locales/pt/contact";

import enNav from "./locales/en/nav";
import enHero from "./locales/en/hero";
import enAbout from "./locales/en/about";
import enTechnologies from "./locales/en/technologies";
import enPortfolio from "./locales/en/portfolio";
import enContact from "./locales/en/contact";

export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: ptNav,
    hero: ptHero,
    about: ptAbout,
    technologies: ptTechnologies,
    portfolio: ptPortfolio,
    contact: ptContact,
  },
  en: {
    nav: enNav,
    hero: enHero,
    about: enAbout,
    technologies: enTechnologies,
    portfolio: enPortfolio,
    contact: enContact,
  },
} as const;

export type Translations = typeof translations;
