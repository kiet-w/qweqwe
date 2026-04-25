import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary, isLocale } from "@/shared/i18n";
import { LoginPage } from "@/widgets/login";

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
    title: dict.loginPage.metadata.title,
    description: dict.loginPage.metadata.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <LoginPage locale={lang} dictionary={dict} />;
}
