import type { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

type LoginHeroSectionProps = {
  badge: string;
  heroHeading: string;
  heroDescription: string;
  launchCta: string;
  methodologyCta: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  formSlot: ReactNode;
};

export function LoginHeroSection({
  badge,
  heroHeading,
  heroDescription,
  launchCta,
  methodologyCta,
  stats,
  formSlot,
}: LoginHeroSectionProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-8 py-20 lg:grid-cols-12 lg:items-center">
      <div className="space-y-8 lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1">
          <Sparkles className="size-3.5" strokeWidth={2} />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
            {badge}
          </span>
        </div>

        <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-primary">
          {heroHeading}
        </h1>

        <p className="max-w-xl font-serif text-[1.25rem] leading-8 text-on-surface-variant">
          {heroDescription}
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-4">
          <button
            type="button"
            className="rounded-sm bg-primary px-8 py-3 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            {launchCta}
          </button>
          <button
            type="button"
            className="group flex items-center gap-2 text-sm font-medium text-primary"
          >
            <span>{methodologyCta}</span>
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRight className="size-4" strokeWidth={1.8} />
            </span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-8 border-t border-outline-variant pt-8">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="text-2xl font-semibold text-primary">{item.value}</span>
              <span className="text-xs text-outline">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5">{formSlot}</div>
    </section>
  );
}
