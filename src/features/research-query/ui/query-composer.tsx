import { Button, Icon, Textarea } from "@/shared/ui";

type QueryComposerProps = {
  label: string;
  placeholder: string;
  attachLabel: string;
  settingsLabel: string;
  submitLabel: string;
};

export function QueryComposer({
  label,
  placeholder,
  attachLabel,
  settingsLabel,
  submitLabel,
}: QueryComposerProps) {
  // Logic xử lý tìm kiếm (ví dụ: useActionState, useOptimistic) sẽ nằm ở đây
  return (
    <div className="w-full overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
      <label htmlFor="research-query" className="sr-only">
        {label}
      </label>
      <Textarea
        id="research-query"
        rows={4}
        className="min-h-40 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0"
        placeholder={placeholder}
      />
      <div className="flex flex-col gap-4 border-t border-outline-variant/70 bg-surface-container-low/80 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button type="button" variant="ghost" size="icon" aria-label={attachLabel}>
            <Icon name="paperclip" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={settingsLabel}
          >
            <Icon name="sliders" />
          </Button>
        </div>
        <Button type="button" size="lg" className="rounded-sm px-6 text-sm font-semibold">
          {submitLabel}
          <Icon name="arrow-right" className="size-[18px]" />
        </Button>
      </div>
    </div>
  );
}
