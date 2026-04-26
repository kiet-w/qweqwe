import { LoginPageForm } from "@/features/auth";
import type { LoginPageDictionary, Locale } from "@/shared/i18n";

import { LoginFeatureGridSection } from "./login-feature-grid-section";
import { LoginFinalCta } from "./login-final-cta";
import { LoginHeroSection } from "./login-hero-section";
import { LoginMethodologySection } from "./login-methodology-section";
import { LoginSiteFooter } from "./login-site-footer";

type LoginPageProps = {
  locale: Locale;
  dictionary: LoginPageDictionary;
};

export function LoginPage({ locale, dictionary }: LoginPageProps) {
  const { loginPage } = dictionary;

  return (
    <div lang={locale} className="bg-surface font-sans text-on-surface antialiased">
      <main className="relative pt-8">
        <LoginHeroSection
          badge={loginPage.badge}
          heroHeading={loginPage.heroHeading}
          heroDescription={loginPage.heroDescription}
          launchCta={loginPage.launchCta}
          methodologyCta={loginPage.methodologyCta}
          stats={loginPage.stats}
          formSlot={<LoginPageForm locale={locale} {...loginPage.form} />}
        />

        <LoginFeatureGridSection
          heading={loginPage.featureGrid.heading}
          description={loginPage.featureGrid.description}
          multiStepPlanning={loginPage.featureGrid.multiStepPlanning}
          sourceValidation={loginPage.featureGrid.sourceValidation}
          parallelSearch={loginPage.featureGrid.parallelSearch}
          structuredReports={loginPage.featureGrid.structuredReports}
        />

        <LoginMethodologySection
          eyebrow={loginPage.methodology.eyebrow}
          heading={loginPage.methodology.heading}
          steps={loginPage.methodology.steps}
          quote={loginPage.methodology.quote}
          author={loginPage.methodology.author}
        />

        <LoginFinalCta {...loginPage.finalCta} />
      </main>

      <LoginSiteFooter
        locale={locale}
        brand={dictionary.nav.brand}
        footer={loginPage.footer}
      />
    </div>
  );
}
