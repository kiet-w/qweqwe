import { PageIntro, SkeletonLines } from "@/shared/ui";

type ResearchPlaceholderPageProps = {
  eyebrow: string;
  heading: string;
  description: string;
};

export function ResearchPlaceholderPage({
  eyebrow,
  heading,
  description,
}: ResearchPlaceholderPageProps) {
  return (
    <section className="min-h-screen bg-surface px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <PageIntro
          eyebrow={eyebrow}
          title={heading}
          description={description}
          className="border-b border-outline-variant pb-6"
        />

        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
          <SkeletonLines widths={["w-48 h-5", "w-full max-w-2xl", "w-full max-w-xl"]} />
        </div>
      </div>
    </section>
  );
}
