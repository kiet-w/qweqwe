import {
  BrainCircuit,
  FileCode,
  FileText,
  FlaskConical,
  Network,
  ShieldCheck,
} from "lucide-react";

import type { LandingDictionary } from "@/shared/i18n";
import { cn } from "@/shared/lib";

type ReportPageProps = {
  dictionary: LandingDictionary;
};

export function ReportPage({ dictionary }: ReportPageProps) {
  const { reportPage } = dictionary;

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      {/* Top Utility Bar */}
      <header className="sticky top-0 z-30 flex w-full items-center justify-end gap-4 border-b border-outline-variant/30 bg-background/80 px-12 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-low"
          >
            <FileText className="size-4" strokeWidth={1.8} />
            {reportPage.exportPdf}
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-low"
          >
            <FileCode className="size-4" strokeWidth={1.8} />
            {reportPage.exportMd}
          </button>
        </div>
      </header>

      {/* Report Canvas */}
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 gap-16 px-12 py-20">
        {/* Table of Contents (Sticky Left) */}
        <aside className="relative hidden w-48 shrink-0 lg:block">
          <div className="sticky top-[120px] flex flex-col gap-4 border-l border-outline-variant/30 pl-4">
            <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-on-surface">
              {reportPage.contents.heading}
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-on-surface-variant">
              {reportPage.contents.items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "transition-colors hover:text-on-surface",
                    item.indent && "border-l border-transparent pl-4 hover:border-outline-variant"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Reading Well (Centered Content) */}
        <article className="max-w-[720px] flex-1 rounded-sm border border-outline-variant/20 bg-surface p-12 shadow-sm">
          {/* Report Header */}
          <header className="mb-20">
            <div className="mb-4 flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="rounded bg-surface-container-high px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
                {reportPage.badge}
              </span>
              <span>•</span>
              <span>{reportPage.date}</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-on-surface">
              {reportPage.heading}
            </h1>
            <p className="border-l-2 border-primary pl-4 font-serif text-xl italic text-on-surface-variant">
              {reportPage.description}
            </p>
          </header>

          {/* Executive Summary */}
          <section id="executive-summary" className="mb-20">
            <h2 className="mb-6 border-b border-outline-variant/20 pb-2 text-[32px] font-semibold tracking-tight text-on-surface">
              {reportPage.sections.executiveSummary.title}
            </h2>
            {reportPage.sections.executiveSummary.paragraphs.map((p, i) => (
              <p key={i} className={cn("font-serif text-[20px] leading-relaxed text-on-surface", i > 0 && "mt-4")}>
                {p}
                {i === reportPage.sections.executiveSummary.paragraphs.length - 1 && (
                  <Citation index={1} source="Vaswani et al., 2023. 'Beyond Attention.'" />
                )}
              </p>
            ))}
          </section>

          {/* Key Findings */}
          <section id="key-findings" className="mb-20">
            <h2 className="mb-6 border-b border-outline-variant/20 pb-2 text-[32px] font-semibold tracking-tight text-on-surface">
              {reportPage.sections.keyFindings.title}
            </h2>
            <div className="flex flex-col gap-8">
              {reportPage.sections.keyFindings.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-primary">
                    {item.icon === "psychology" ? (
                      <BrainCircuit className="size-6" strokeWidth={1.8} />
                    ) : (
                      <Network className="size-6" strokeWidth={1.8} />
                    )}
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-semibold text-on-surface">
                      {item.title}
                    </h3>
                    <p className="font-serif text-[17px] leading-relaxed text-on-surface">
                      {item.description}
                      <Citation index={i + 2} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Table */}
          <section id="market-data" className="mb-20">
            <h3 className="mb-4 text-2xl font-semibold text-on-surface">
              {reportPage.sections.performanceMetrics.title}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-serif text-[17px]">
                <thead>
                  <tr>
                    {reportPage.sections.performanceMetrics.headers.map((h, i) => (
                      <th
                        key={i}
                        className={cn(
                          "border-b-2 border-on-surface py-4 text-sm font-semibold text-on-surface",
                          i > 0 && "text-right"
                        )}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reportPage.sections.performanceMetrics.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={cn(
                            "border-b border-surface-container-highest py-4",
                            j > 0 && "text-right tabular-nums",
                            i === reportPage.sections.performanceMetrics.rows.length - 1 && "bg-surface-container-low font-medium"
                          )}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Source Reliability */}
          <section id="source-reliability">
            <h2 className="mb-6 border-b border-outline-variant/20 pb-2 text-[32px] font-semibold tracking-tight text-on-surface">
              {reportPage.sections.sourceReliability.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {reportPage.sections.sourceReliability.sources.map((source, i) => (
                <div
                  key={i}
                  className="rounded border border-outline-variant/30 bg-surface-container-lowest p-4"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
                      {source.id}
                    </span>
                    {source.type === "verified" ? (
                      <ShieldCheck className="size-4 text-outline" strokeWidth={1.8} />
                    ) : (
                      <FlaskConical className="size-4 text-outline" strokeWidth={1.8} />
                    )}
                  </div>
                  <h4 className="mb-1 text-sm font-semibold text-on-surface">
                    {source.title}
                  </h4>
                  <p className="mb-2 text-xs text-on-surface-variant">
                    {source.author}
                  </p>
                  <div className="mt-3 flex items-center gap-2 border-t border-outline-variant/20 pt-3">
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        source.type === "verified" ? "bg-green-500" : "bg-yellow-500"
                      )}
                    />
                    <span className="text-[11px] text-on-surface-variant">
                      {source.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

function Citation({ index, source }: { index: number; source?: string }) {
  return (
    <span className="group relative mx-1 inline-flex cursor-pointer items-center justify-center rounded border border-outline-variant/30 bg-surface-container-high px-1.5 py-0.5 align-text-bottom text-[12px] transition-colors hover:bg-surface-dim">
      {index}
      {source && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded bg-inverse-surface p-2 text-xs text-inverse-on-surface opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          {source}
        </span>
      )}
    </span>
  );
}
