import type { LibraryPageDictionary } from "@/shared/i18n";

type LibraryReadingItem = LibraryPageDictionary["readingList"]["items"][number];

type LibraryReadingListProps = {
  items: LibraryReadingItem[];
  actionLabel: string;
};

export function LibraryReadingList({
  items,
  actionLabel,
}: LibraryReadingListProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest">
      {items.map((item, index) => (
        <button
          key={item.title}
          type="button"
          className={`w-full px-4 py-4 text-left transition-colors hover:bg-surface-container-low ${
            index > 0 ? "border-t border-outline-variant/60" : ""
          }`}
        >
          <p className="text-sm font-semibold text-on-surface transition-colors hover:text-primary">
            {item.title}
          </p>
          <p className="mt-1 text-xs text-on-surface-variant">{item.meta}</p>
        </button>
      ))}

      <button
        type="button"
        className="flex w-full items-center justify-center border-t border-outline-variant/60 px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-secondary transition-colors hover:bg-surface-container-low hover:text-primary"
      >
        {actionLabel}
      </button>
    </div>
  );
}
