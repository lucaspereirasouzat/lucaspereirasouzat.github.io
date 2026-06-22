import { useLanguage } from "./LanguageContext";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 text-sm font-medium rounded-full border border-zinc-600 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors"
      aria-label="Toggle language"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
