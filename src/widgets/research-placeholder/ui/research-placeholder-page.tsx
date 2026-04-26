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
        <header className="space-y-3 border-b border-outline-variant pb-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface-variant">
            {eyebrow}
          </p>
          <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-primary">
            {heading}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-on-surface-variant">
            {description}
          </p>
        </header>

        <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
          <div className="space-y-3">
            <div className="h-5 w-48 rounded-full bg-surface-container-low" />
            <div className="h-4 w-full max-w-2xl rounded-full bg-surface-container-low" />
            <div className="h-4 w-full max-w-xl rounded-full bg-surface-container-low" />
          </div>
        </div>
      </div>
    </section>
  );
}
