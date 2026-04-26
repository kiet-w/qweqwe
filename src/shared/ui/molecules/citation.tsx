type CitationProps = {
  index: number;
  source?: string;
};

export function Citation({ index, source }: CitationProps) {
  return (
    <span className="group relative mx-1 inline-flex cursor-pointer items-center justify-center rounded border border-outline-variant/30 bg-surface-container-high px-1.5 py-0.5 align-text-bottom text-[12px] transition-colors hover:bg-surface-dim">
      {index}
      {source ? (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded bg-inverse-surface p-2 text-xs text-inverse-on-surface opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          {source}
        </span>
      ) : null}
    </span>
  );
}
