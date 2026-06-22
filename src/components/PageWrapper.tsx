import { LanguageProvider } from "@/i18n/LanguageContext";
import PageContent from "@/components/PageContent";

export default function PageWrapper() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
