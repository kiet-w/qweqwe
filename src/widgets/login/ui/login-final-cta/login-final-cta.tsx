type LoginFinalCtaProps = {
  heading: string;
  description: string;
  primary: string;
  secondary: string;
};

export function LoginFinalCta({
  heading,
  description,
  primary,
  secondary,
}: LoginFinalCtaProps) {
  return (
    <section className="bg-primary px-8 py-20 text-on-primary">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-5xl font-bold leading-[1.08] tracking-[-0.04em]">
          {heading}
        </h2>
        <p className="mb-12 font-serif text-[1.25rem] leading-8 text-white/75">
          {description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="w-full rounded-sm bg-white px-10 py-4 text-sm font-bold text-primary transition-opacity hover:opacity-90 sm:w-auto"
          >
            {primary}
          </button>
          <button
            type="button"
            className="w-full rounded-sm border border-white/20 px-10 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            {secondary}
          </button>
        </div>
      </div>
    </section>
  );
}
