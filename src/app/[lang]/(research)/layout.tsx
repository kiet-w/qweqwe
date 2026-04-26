import { notFound } from "next/navigation";

import { getDictionary, isLocale } from "@/shared/i18n";
import { ResearchShell } from "@/widgets/research-shell";
import { ResearchSidebar } from "@/widgets/research-sidebar";

export default async function ResearchLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <ResearchSidebar
        locale={lang}
        dictionary={{
          agentTracking: dictionary.agentTracking,
          nav: dictionary.nav,
        }}
      />
      <ResearchShell>{children}</ResearchShell>
    </div>
  );
}
