import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Globe,
  Network,
  Radio,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { LoginPageForm } from "@/features/auth";
import type { LandingDictionary, Locale } from "@/shared/i18n";

type LoginPageProps = {
  locale: Locale;
  dictionary: LandingDictionary;
};

export function LoginPage({ locale, dictionary }: LoginPageProps) {
  const { loginPage } = dictionary;

  return (
    <div lang={locale} className="bg-surface font-sans text-on-surface antialiased">
      <main className="relative pt-8">
        <section className="mx-auto grid max-w-7xl gap-12 px-8 py-20 lg:grid-cols-12 lg:items-center">
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1">
              <Sparkles className="size-3.5" strokeWidth={2} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                {loginPage.badge}
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-primary">
              {loginPage.heroHeading}
            </h1>

            <p className="max-w-xl font-serif text-[1.25rem] leading-8 text-on-surface-variant">
              {loginPage.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                type="button"
                className="rounded-sm bg-primary px-8 py-3 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
              >
                {loginPage.launchCta}
              </button>
              <button
                type="button"
                className="group flex items-center gap-2 text-sm font-medium text-primary"
              >
                <span>{loginPage.methodologyCta}</span>
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowRight className="size-4" strokeWidth={1.8} />
                </span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 border-t border-outline-variant pt-8">
              {loginPage.stats.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-2xl font-semibold text-primary">{item.value}</span>
                  <span className="text-xs text-outline">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <LoginPageForm locale={locale} {...loginPage.form} />
          </div>
        </section>

        <section className="bg-surface-container px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-[2rem] font-semibold tracking-[-0.02em] text-primary">
                {loginPage.featureGrid.heading}
              </h2>
              <p className="text-lg text-on-surface-variant">
                {loginPage.featureGrid.description}
              </p>
            </div>

            <div className="grid auto-rows-[280px] gap-6 md:grid-cols-12">
              <article className="group overflow-hidden border border-outline-variant bg-white p-8 md:col-span-8">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-6 flex size-10 items-center justify-center rounded-sm bg-primary text-on-primary">
                      <Network className="size-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold text-primary">
                      {loginPage.featureGrid.multiStepPlanning.title}
                    </h3>
                    <p className="max-w-md text-on-surface-variant">
                      {loginPage.featureGrid.multiStepPlanning.description}
                    </p>
                  </div>

                  <div className="relative mt-4 h-24 overflow-hidden opacity-40 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
                    <div className="flex h-full items-center gap-4">
                      {loginPage.featureGrid.multiStepPlanning.steps.map((step, index) => (
                        <div key={step} className="flex items-center gap-4">
                          <div
                            className={
                              index === loginPage.featureGrid.multiStepPlanning.steps.length - 1
                                ? "flex h-12 w-24 items-center justify-center rounded-sm border-2 border-primary text-xs font-bold"
                                : "flex h-12 w-24 items-center justify-center rounded-sm border border-primary/20 text-xs"
                            }
                          >
                            {step}
                          </div>
                          {index < loginPage.featureGrid.multiStepPlanning.steps.length - 1 ? (
                            <ArrowRight className="size-4" strokeWidth={1.8} />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <article className="flex flex-col justify-between bg-primary p-8 text-on-primary md:col-span-4">
                <div className="mb-6 flex size-10 items-center justify-center rounded-sm bg-white text-primary">
                  <ShieldCheck className="size-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    {loginPage.featureGrid.sourceValidation.title}
                  </h3>
                  <p className="text-xs leading-6 text-white/75">
                    {loginPage.featureGrid.sourceValidation.description}
                  </p>
                </div>
                <div className="mt-4 border-t border-white/20 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em]">
                      {loginPage.featureGrid.sourceValidation.status}
                    </span>
                  </div>
                </div>
              </article>

              <article className="flex flex-col justify-center border border-outline-variant bg-surface-container-high p-8 md:col-span-4">
                <div className="mb-6 text-primary">
                  <Radio className="size-10" strokeWidth={1.7} />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-primary">
                  {loginPage.featureGrid.parallelSearch.title}
                </h3>
                <p className="text-xs leading-6 text-on-surface-variant">
                  {loginPage.featureGrid.parallelSearch.description}
                </p>
              </article>

              <article className="flex items-center gap-8 border border-outline-variant bg-white p-8 md:col-span-8">
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-semibold text-primary">
                    {loginPage.featureGrid.structuredReports.title}
                  </h3>
                  <p className="text-on-surface-variant">
                    {loginPage.featureGrid.structuredReports.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {loginPage.featureGrid.structuredReports.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-outline-variant bg-surface px-2 py-1 text-[10px] font-medium uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden h-full w-48 border-l border-outline-variant bg-slate-50 p-4 sm:block">
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-slate-200" />
                    <div className="h-2 w-3/4 rounded-full bg-slate-200" />
                    <div className="h-2 w-5/6 rounded-full bg-slate-200" />
                    <div className="mt-4 h-2 w-1/2 rounded-full bg-slate-200" />
                    <div className="h-2 w-full rounded-full bg-slate-200" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="px-8 py-20">
          <div className="mx-auto max-w-[720px]">
            <span className="mb-8 block text-center text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {loginPage.methodology.eyebrow}
            </span>
            <h2 className="mb-12 text-center text-[2rem] font-semibold tracking-[-0.02em] text-primary">
              {loginPage.methodology.heading}
            </h2>
            <div className="space-y-16">
              {loginPage.methodology.steps.map((step) => (
                <article key={step.number} className="flex gap-8">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary text-lg font-semibold text-primary">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-semibold text-primary">{step.title}</h3>
                    <p className="font-serif text-[1.25rem] leading-8 text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-20 flex flex-col items-center border border-outline-variant bg-surface-container-low p-8 text-center">
              <div className="mb-4 text-primary">
                <FileText className="size-10" strokeWidth={1.7} />
              </div>
              <p className="mb-6 max-w-2xl font-serif text-[1.0625rem] italic text-on-surface-variant">
                {loginPage.methodology.quote}
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.16em]">
                {loginPage.methodology.author}
              </span>
            </div>
          </div>
        </section>

        <section className="bg-primary px-8 py-20 text-on-primary">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-5xl font-bold leading-[1.08] tracking-[-0.04em]">
              {loginPage.finalCta.heading}
            </h2>
            <p className="mb-12 font-serif text-[1.25rem] leading-8 text-white/75">
              {loginPage.finalCta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                className="w-full rounded-sm bg-white px-10 py-4 text-sm font-bold text-primary transition-opacity hover:opacity-90 sm:w-auto"
              >
                {loginPage.finalCta.primary}
              </button>
              <button
                type="button"
                className="w-full rounded-sm border border-white/20 px-10 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                {loginPage.finalCta.secondary}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-outline-variant bg-surface px-8 py-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-[-0.04em] text-primary">{dictionary.nav.brand}</span>
            <p className="text-xs leading-6 text-on-surface-variant">{loginPage.footer.description}</p>
          </div>

          {loginPage.footer.columns.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {column.heading}
              </h4>
              <ul className="space-y-3 text-xs text-on-surface-variant">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href={`/${locale}/login`} className="transition-colors hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-outline-variant pt-8 md:flex-row">
          <p className="text-xs text-outline">{loginPage.footer.copyright}</p>
          <div className="flex gap-6 text-outline">
            <Link href={`/${locale}/login`} className="transition-colors hover:text-primary">
              <Globe className="size-5" strokeWidth={1.8} />
            </Link>
            <Link href={`/${locale}/login`} className="transition-colors hover:text-primary">
              <Share2 className="size-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
