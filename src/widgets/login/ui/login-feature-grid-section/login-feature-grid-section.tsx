import { ArrowRight, Network, Radio, ShieldCheck } from "lucide-react";

type LoginFeatureGridSectionProps = {
  heading: string;
  description: string;
  multiStepPlanning: {
    title: string;
    description: string;
    steps: string[];
  };
  sourceValidation: {
    title: string;
    description: string;
    status: string;
  };
  parallelSearch: {
    title: string;
    description: string;
  };
  structuredReports: {
    title: string;
    description: string;
    tags: string[];
  };
};

export function LoginFeatureGridSection({
  heading,
  description,
  multiStepPlanning,
  sourceValidation,
  parallelSearch,
  structuredReports,
}: LoginFeatureGridSectionProps) {
  return (
    <section className="bg-surface-container px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-[2rem] font-semibold tracking-[-0.02em] text-primary">
            {heading}
          </h2>
          <p className="text-lg text-on-surface-variant">{description}</p>
        </div>

        <div className="grid auto-rows-[280px] gap-6 md:grid-cols-12">
          <article className="group overflow-hidden border border-outline-variant bg-white p-8 md:col-span-8">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 flex size-10 items-center justify-center rounded-sm bg-primary text-on-primary">
                  <Network className="size-5" strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-primary">
                  {multiStepPlanning.title}
                </h3>
                <p className="max-w-md text-on-surface-variant">
                  {multiStepPlanning.description}
                </p>
              </div>

              <div className="relative mt-4 h-24 overflow-hidden opacity-40 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
                <div className="flex h-full items-center gap-4">
                  {multiStepPlanning.steps.map((step, index) => (
                    <div key={step} className="flex items-center gap-4">
                      <div
                        className={
                          index === multiStepPlanning.steps.length - 1
                            ? "flex h-12 w-24 items-center justify-center rounded-sm border-2 border-primary text-xs font-bold"
                            : "flex h-12 w-24 items-center justify-center rounded-sm border border-primary/20 text-xs"
                        }
                      >
                        {step}
                      </div>
                      {index < multiStepPlanning.steps.length - 1 ? (
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
              <h3 className="mb-2 text-2xl font-semibold">{sourceValidation.title}</h3>
              <p className="text-xs leading-6 text-white/75">{sourceValidation.description}</p>
            </div>
            <div className="mt-4 border-t border-white/20 pt-4">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-medium uppercase tracking-[0.18em]">
                  {sourceValidation.status}
                </span>
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-center border border-outline-variant bg-surface-container-high p-8 md:col-span-4">
            <div className="mb-6 text-primary">
              <Radio className="size-10" strokeWidth={1.7} />
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-primary">
              {parallelSearch.title}
            </h3>
            <p className="text-xs leading-6 text-on-surface-variant">
              {parallelSearch.description}
            </p>
          </article>

          <article className="flex items-center gap-8 border border-outline-variant bg-white p-8 md:col-span-8">
            <div className="flex-1">
              <h3 className="mb-2 text-2xl font-semibold text-primary">
                {structuredReports.title}
              </h3>
              <p className="text-on-surface-variant">{structuredReports.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {structuredReports.tags.map((tag) => (
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
  );
}
