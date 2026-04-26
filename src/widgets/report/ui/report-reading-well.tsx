import {
  BrainCircuit,
  FlaskConical,
  Network,
  ShieldCheck,
} from "lucide-react";

import type { ReportPageDictionary } from "@/shared/i18n";
import { Citation } from "@/shared/ui";
import { cn } from "@/shared/lib";

type ReportReadingWellProps = {
  reportPage: ReportPageDictionary;
};

export function ReportReadingWell({ reportPage }: ReportReadingWellProps) {
  return (
    <article className="max-w-[720px] flex-1 rounded-sm border border-outline-variant/20 bg-surface p-12 shadow-sm">
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

      <section id="executive-summary" className="mb-20">
        <h2 className="mb-6 border-b border-outline-variant/20 pb-2 text-[32px] font-semibold tracking-tight text-on-surface">
          {reportPage.sections.executiveSummary.title}
        </h2>
        {reportPage.sections.executiveSummary.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={cn(
              "font-serif text-[20px] leading-relaxed text-on-surface",
              index > 0 && "mt-4",
            )}
          >
            {paragraph}
            {index === reportPage.sections.executiveSummary.paragraphs.length - 1 ? (
              <Citation
                index={1}
                source="Vaswani et al., 2023. 'Beyond Attention.'"
              />
            ) : null}
          </p>
        ))}
      </section>

      <section id="key-findings" className="mb-20">
        <h2 className="mb-6 border-b border-outline-variant/20 pb-2 text-[32px] font-semibold tracking-tight text-on-surface">
          {reportPage.sections.keyFindings.title}
        </h2>
        <div className="flex flex-col gap-8">
          {reportPage.sections.keyFindings.items.map((item, index) => (
            <div key={index} className="flex gap-4">
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
                  <Citation index={index + 2} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="market-data" className="mb-20">
        <h3 className="mb-4 text-2xl font-semibold text-on-surface">
          {reportPage.sections.performanceMetrics.title}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-serif text-[17px]">
            <thead>
              <tr>
                {reportPage.sections.performanceMetrics.headers.map((header, index) => (
                  <th
                    key={index}
                    className={cn(
                      "border-b-2 border-on-surface py-4 text-sm font-semibold text-on-surface",
                      index > 0 && "text-right",
                    )}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reportPage.sections.performanceMetrics.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={cn(
                        "border-b border-surface-container-highest py-4",
                        cellIndex > 0 && "text-right tabular-nums",
                        rowIndex ===
                          reportPage.sections.performanceMetrics.rows.length - 1 &&
                          "bg-surface-container-low font-medium",
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

      <section id="source-reliability">
        <h2 className="mb-6 border-b border-outline-variant/20 pb-2 text-[32px] font-semibold tracking-tight text-on-surface">
          {reportPage.sections.sourceReliability.title}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {reportPage.sections.sourceReliability.sources.map((source, index) => (
            <div
              key={index}
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
              <h4 className="mb-1 text-sm font-semibold text-on-surface">{source.title}</h4>
              <p className="mb-2 text-xs text-on-surface-variant">{source.author}</p>
              <div className="mt-3 flex items-center gap-2 border-t border-outline-variant/20 pt-3">
                <span
                  className={cn(
                    "h-2 w-2 rounded-full",
                    source.type === "verified" ? "bg-green-500" : "bg-yellow-500",
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
  );
}
