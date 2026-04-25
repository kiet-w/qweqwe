type DraftPlaceholderProps = {
  label: string;
};

export function DraftPlaceholder({ label }: DraftPlaceholderProps) {
  return (
    <div className="group relative my-6 border border-outline-variant bg-surface-bright p-4">
      <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#d5e3fd]" />
      <p className="text-[17px] italic text-on-surface-variant">{label}</p>
      <div className="mt-2 h-2 w-1/3 animate-pulse rounded bg-surface-container-highest" />
      <div className="mt-2 h-2 w-1/2 animate-pulse rounded bg-surface-container-highest" />
    </div>
  );
}
