import { cn } from "@/shared/lib";
import { Eyebrow, SectionHeading } from "@/shared/ui/atoms/typography";
import { FeatureBlurb } from "@/shared/ui/molecules/feature-blurb";

type MethodologySectionProps = {
  heading: string;
  phases: Array<{
    label: string;
    title: string;
    description: string;
  }>;
};

const phaseIcons = ["branch", "search", "summary"] as const;
const offsets = ["", "md:translate-y-8", "md:translate-y-16"] as const;

export function MethodologySection({
  heading,
  phases,
}: MethodologySectionProps) {
  return (
    <section
      id="methodology"
      className="mx-auto flex w-full max-w-5xl scroll-mt-24 flex-col items-center"
    >
      <SectionHeading className="max-w-2xl text-center">{heading}</SectionHeading>

      <div className="mt-14 grid w-full gap-6 md:grid-cols-3">
        {phases.map((phase, index) => (
          <article
            key={phase.label}
            className={cn(
              "flex h-full flex-col rounded-lg border border-outline-variant bg-surface-container-lowest p-8 transition-transform duration-300 hover:-translate-y-1",
              offsets[index],
            )}
          >
            <Eyebrow className="text-[11px] tracking-[0.22em]">{phase.label}</Eyebrow>
            <FeatureBlurb
              className="mt-6 flex-col gap-6"
              iconName={phaseIcons[index]}
              title={phase.title}
              description={phase.description}
              iconWrapperClassName="mb-0 inline-flex h-12 w-12 items-center justify-center rounded-md border-outline-variant/70 bg-surface-container p-0"
              titleClassName="text-2xl tracking-[-0.03em]"
              descriptionClassName="mt-0 font-serif text-lg leading-8 text-on-surface-variant"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
