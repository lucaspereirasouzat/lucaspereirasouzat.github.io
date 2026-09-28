import { LanguageProvider } from "@/i18n/LanguageContext";
import PageContent from "@/components/PageContent";
import { Analytics } from "@vercel/analytics/react";

export default function PageWrapper() {
  return (
    <LanguageProvider>
      <PageContent />
      <Analytics />
    </LanguageProvider>
  );
}
