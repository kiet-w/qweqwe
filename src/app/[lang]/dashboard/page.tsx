import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary, isLocale } from "@/shared/i18n";
import { DashboardPage } from "@/widgets/dashboard";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const dict = await getDictionary(lang);

  return {
    title: dict.dashboard.metadata.title,
    description: dict.dashboard.metadata.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <DashboardPage locale={lang} dictionary={dict} />;
}
