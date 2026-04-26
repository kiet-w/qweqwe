import { FileCode, FileText } from "lucide-react";

type ReportUtilityBarProps = {
  exportPdf: string;
  exportMd: string;
};

export function ReportUtilityBar({
  exportPdf,
  exportMd,
}: ReportUtilityBarProps) {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-end gap-4 border-b border-outline-variant/30 bg-background/80 px-12 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-low"
        >
          <FileText className="size-4" strokeWidth={1.8} />
          {exportPdf}
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-low"
        >
          <FileCode className="size-4" strokeWidth={1.8} />
          {exportMd}
        </button>
      </div>
    </header>
  );
}
