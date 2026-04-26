import type { LandingPageDictionary, Locale } from "@/shared/i18n";
import { ROUTES } from "@/shared/config/routes";

import { HeroSection } from "./hero-section";
import { LoginSection } from "./login-section";
import { MethodologySection } from "./methodology-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type LandingPageProps = {
  locale: Locale;
  dictionary: LandingPageDictionary;
};

export function LandingPage({ locale, dictionary }: LandingPageProps) {
  const loginHref = ROUTES.login(locale);

  return (
    <div lang={locale} className="min-h-screen bg-surface text-on-surface">
      <SiteHeader
        locale={locale}
        brand={dictionary.nav.brand}
        items={dictionary.nav}
      />
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-12 md:gap-24 md:px-8 md:pt-20">
        <HeroSection
          heading={dictionary.hero.heading}
          description={dictionary.hero.description}
          label={dictionary.hero.label}
          placeholder={dictionary.hero.placeholder}
          attachLabel={dictionary.hero.attach}
          settingsLabel={dictionary.hero.settings}
          submitLabel={dictionary.hero.cta}
          evidenceA={dictionary.hero.evidenceA}
          evidenceB={dictionary.hero.evidenceB}
          loginHref={loginHref}
          loginLabel={dictionary.hero.loginCta}
          loginHint={dictionary.hero.loginHint}
        />
        <LoginSection locale={locale} {...dictionary.login} />
        <MethodologySection
          heading={dictionary.methodology.heading}
          phases={dictionary.methodology.phases}
        />
      </main>
      <SiteFooter {...dictionary.footer} />
    </div>
  );
}
