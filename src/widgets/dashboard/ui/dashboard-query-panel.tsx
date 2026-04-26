import { Send, SlidersHorizontal, Upload } from "lucide-react";

type DashboardQueryPanelProps = {
  inquiryLabel: string;
  placeholder: string;
  attachLabel: string;
  parametersLabel: string;
  submitLabel: string;
};

export function DashboardQueryPanel({
  inquiryLabel,
  placeholder,
  attachLabel,
  parametersLabel,
  submitLabel,
}: DashboardQueryPanelProps) {
  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-5 shadow-sm sm:p-6">
      <label
        htmlFor="research-query"
        className="block text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface"
      >
        {inquiryLabel}
      </label>

      <textarea
        id="research-query"
        rows={3}
        placeholder={placeholder}
        className="mt-4 w-full resize-none border-0 border-b border-outline bg-transparent px-0 py-2 font-serif text-[1.25rem] leading-8 text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/70 focus:border-primary"
      />

      <div className="mt-6 flex flex-col gap-4 border-t border-outline-variant pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-on-surface"
          >
            <Upload className="size-[18px]" strokeWidth={1.8} />
            {attachLabel}
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-on-surface"
          >
            <SlidersHorizontal className="size-[18px]" strokeWidth={1.8} />
            {parametersLabel}
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-2.5 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
        >
          {submitLabel}
          <Send className="size-[18px]" strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}
