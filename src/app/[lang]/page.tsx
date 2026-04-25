import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary, isLocale } from "@/shared/i18n";
import { LandingPage } from "@/widgets/landing";

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
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <LandingPage locale={lang} dictionary={dict} />;
}
