import { notFound } from "next/navigation";

import { getDictionary, isLocale } from "@/shared/i18n";
import { ResearchShell } from "@/widgets/research-shell";

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
    <ResearchShell locale={lang} dictionary={dictionary}>
      {children}
    </ResearchShell>
  );
}
