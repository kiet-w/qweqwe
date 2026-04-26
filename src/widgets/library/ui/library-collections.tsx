import { ChevronRight, Folder } from "lucide-react";

import type { LibraryPageDictionary } from "@/shared/i18n";

type LibraryCollection = LibraryPageDictionary["collections"]["items"][number];

type LibraryCollectionsProps = {
  items: LibraryCollection[];
};

export function LibraryCollections({ items }: LibraryCollectionsProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.title}>
          <button
            type="button"
            className="group flex items-center justify-between rounded-lg border border-transparent p-3 transition-colors hover:border-outline-variant hover:bg-surface-container-low"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-surface-container p-2 text-secondary transition-colors group-hover:text-primary">
                <Folder className="size-4" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-sm font-medium text-on-surface">{item.title}</p>
                <p className="text-xs text-on-surface-variant">{item.countLabel}</p>
              </div>
            </div>

            <ChevronRight
              aria-hidden="true"
              className="size-4 text-outline opacity-0 transition-opacity group-hover:opacity-100"
              strokeWidth={1.8}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
