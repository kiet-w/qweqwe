import { FileText } from "lucide-react";

type LoginMethodologySectionProps = {
  eyebrow: string;
  heading: string;
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  quote: string;
  author: string;
};

export function LoginMethodologySection({
  eyebrow,
  heading,
  steps,
  quote,
  author,
}: LoginMethodologySectionProps) {
  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-[720px]">
        <span className="mb-8 block text-center text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mb-12 text-center text-[2rem] font-semibold tracking-[-0.02em] text-primary">
          {heading}
        </h2>
        <div className="space-y-16">
          {steps.map((step) => (
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
            {quote}
          </p>
          <span className="text-xs font-bold uppercase tracking-[0.16em]">{author}</span>
        </div>
      </div>
    </section>
  );
}
