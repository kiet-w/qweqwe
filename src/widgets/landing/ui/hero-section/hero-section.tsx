import Link from "next/link";
import { QueryComposer } from "@/features/research-query";
import { Button } from "@/shared/ui/atoms/button";
import { BodyLarge } from "@/shared/ui/atoms/typography";
import { SentenceHeading } from "@/shared/ui/molecules/sentence-heading";

type HeroSectionProps = {
  heading: string;
  description: string;
  label: string;
  placeholder: string;
  attachLabel: string;
  settingsLabel: string;
  submitLabel: string;
  evidenceA: string;
  evidenceB: string;
  loginHref: string;
  loginLabel: string;
  loginHint: string;
};

export function HeroSection(props: HeroSectionProps) {
  return (
    <section
      id="features"
      className="mx-auto mt-8 flex w-full max-w-3xl scroll-mt-24 flex-col items-center text-center md:mt-16"
    >
      <SentenceHeading className="max-w-3xl">{props.heading}</SentenceHeading>
      <BodyLarge className="mt-6 max-w-2xl">{props.description}</BodyLarge>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button
          asChild
          size="lg"
          className="rounded-sm px-6 text-sm font-semibold"
        >
          <Link href={props.loginHref}>{props.loginLabel}</Link>
        </Button>
        <span className="text-sm text-on-surface-variant">
          {props.loginHint}
        </span>
      </div>

      <div className="mt-12 w-full">
        <QueryComposer
          label={props.label}
          placeholder={props.placeholder}
          attachLabel={props.attachLabel}
          settingsLabel={props.settingsLabel}
          submitLabel={props.submitLabel}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium uppercase tracking-[0.14em] text-on-surface-variant sm:text-sm">
        <span>{props.evidenceA}</span>
        <span className="h-1 w-1 rounded-full bg-outline" />
        <span>{props.evidenceB}</span>
      </div>
    </section>
  );
}
