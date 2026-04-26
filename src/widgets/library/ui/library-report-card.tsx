import { Download, MoreHorizontal, Share2 } from "lucide-react";

import type { LibraryPageDictionary } from "@/shared/i18n";
import { Button, StatusBadge } from "@/shared/ui";

type LibraryReport = LibraryPageDictionary["reports"][number];

type LibraryReportCardProps = {
  report: LibraryReport;
  labels: {
    share: string;
    export: string;
  };
};

export function LibraryReportCard({
  report,
  labels,
}: LibraryReportCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-outline-variant bg-surface-container-lowest p-5 transition-colors hover:border-outline">
      <div className="mb-3 flex items-start justify-between gap-3">
        <StatusBadge
          label={report.statusLabel}
          tone="muted"
          dotClassName={report.statusTone === "complete" ? "bg-primary" : "bg-outline"}
          className={
            report.statusTone === "complete"
              ? "bg-surface-container text-on-surface-variant uppercase tracking-[0.14em]"
              : "bg-surface-container-low text-on-surface-variant uppercase tracking-[0.14em]"
          }
        />
        <Button type="button" variant="ghost" size="icon-sm" aria-label={report.moreLabel}>
          <MoreHorizontal className="size-4" strokeWidth={1.8} />
        </Button>
      </div>

      <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-on-surface">
        {report.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-on-surface-variant">
        {report.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-outline-variant/60 pt-4">
        <span className="text-xs text-on-surface-variant">{report.meta}</span>

        <div className="flex items-center gap-2 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
          {report.statusTone === "complete" ? (
            <>
              <Button type="button" variant="ghost" size="icon-sm" aria-label={labels.share}>
                <Share2 className="size-4" strokeWidth={1.8} />
              </Button>
              <Button type="button" variant="ghost" size="icon-sm" aria-label={labels.export}>
                <Download className="size-4" strokeWidth={1.8} />
              </Button>
            </>
          ) : null}

          <Button type="button" variant="outline" size="sm" className="rounded-sm">
            {report.actionLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
