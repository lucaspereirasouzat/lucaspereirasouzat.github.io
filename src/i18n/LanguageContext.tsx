import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, type Language, type Translations } from "./index";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations["pt"];
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang],
    toggle,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
