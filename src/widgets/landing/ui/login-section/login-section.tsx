import { LoginForm } from "@/features/auth";
import type { Locale } from "@/shared/i18n";
import { BodyText, Eyebrow, SectionHeading } from "@/shared/ui/atoms/typography";
import { FeatureBlurb } from "@/shared/ui/molecules/feature-blurb";

type LoginSectionProps = {
  locale: Locale;
  eyebrow: string;
  heading: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  welcome: string;
  subtitle: string;
  loginTab: string;
  signupTab: string;
  google: string;
  github: string;
  orContinue: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  forgotPassword: string;
  submitLabel: string;
  helper: string;
  agreementPrefix: string;
  termsLabel: string;
  agreementJoiner: string;
  privacyLabel: string;
};

export function LoginSection({
  locale,
  eyebrow,
  heading,
  description,
  features,
  ...loginFormProps
}: LoginSectionProps) {
  return (
    <section
      id="login"
      className="mx-auto w-full max-w-6xl scroll-mt-24 overflow-hidden rounded-[32px] border border-outline-variant bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
    >
      <div className="grid min-h-[720px] lg:grid-cols-2">
        <div className="hidden flex-col justify-center border-r border-outline-variant bg-surface-container-low px-8 py-12 lg:flex xl:px-12">
          <div className="max-w-md space-y-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <SectionHeading className="max-w-md text-[2.5rem] leading-[1.08] tracking-[-0.04em]">
              {heading}
            </SectionHeading>
            <BodyText className="text-base leading-7 text-on-surface-variant">
              {description}
            </BodyText>

            <div className="space-y-4 pt-6">
              {features.map((feature) => (
                <FeatureBlurb
                  key={feature.title}
                  iconName={feature.title === features[0]?.title ? "search" : "summary"}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white px-6 py-12 md:px-10">
          <LoginForm locale={locale} {...loginFormProps} />
          <p className="mt-8 text-center text-sm text-on-surface-variant">{loginFormProps.helper}</p>
        </div>
      </div>
    </section>
  );
}
