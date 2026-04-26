import { Bell, Clock3, UserCircle2 } from "lucide-react";

import { Button, SearchField } from "@/shared/ui";

type LibraryToolbarProps = {
  searchLabel: string;
  searchPlaceholder: string;
  activityLabel: string;
  historyLabel: string;
  profileLabel: string;
};

export function LibraryToolbar({
  searchLabel,
  searchPlaceholder,
  activityLabel,
  historyLabel,
  profileLabel,
}: LibraryToolbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-outline-variant bg-surface/95 backdrop-blur">
      <div className="flex items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <SearchField
          label={searchLabel}
          placeholder={searchPlaceholder}
          className="hidden max-w-md flex-1 md:block"
        />

        <div className="ml-auto flex items-center gap-2">
          <Button type="button" variant="ghost" size="icon" aria-label={activityLabel}>
            <Bell className="size-5" strokeWidth={1.8} />
          </Button>
          <Button type="button" variant="ghost" size="icon" aria-label={historyLabel}>
            <Clock3 className="size-5" strokeWidth={1.8} />
          </Button>
          <Button type="button" variant="ghost" size="icon" aria-label={profileLabel}>
            <UserCircle2 className="size-5" strokeWidth={1.8} />
          </Button>
        </div>
      </div>
    </header>
  );
}
