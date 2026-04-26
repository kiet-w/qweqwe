import {
  Bell,
  Bookmark,
  ChevronRight,
  Clock3,
  Download,
  FileClock,
  FileText,
  Folder,
  FolderPlus,
  MoreHorizontal,
  Share2,
  SlidersHorizontal,
  UserCircle2,
} from "lucide-react";

import type { LandingDictionary } from "@/shared/i18n";
import { Button, SearchField, SectionHeading } from "@/shared/ui";

type LibraryPageProps = {
  dictionary: LandingDictionary;
};

type LibraryReport = LandingDictionary["libraryPage"]["reports"][number];
type LibraryCollection = LandingDictionary["libraryPage"]["collections"]["items"][number];
type LibraryReadingItem = LandingDictionary["libraryPage"]["readingList"]["items"][number];

function ReportStatusBadge({
  label,
  tone,
}: {
  label: string;
  tone: "complete" | "draft";
}) {
  return (
    <span
      className={
        tone === "complete"
          ? "inline-flex items-center gap-1 rounded-full bg-surface-container px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-on-surface-variant"
          : "inline-flex items-center gap-1 rounded-full bg-surface-container-low px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-on-surface-variant"
      }
    >
      <span
        className={
          tone === "complete"
            ? "size-1.5 rounded-full bg-primary"
            : "size-1.5 rounded-full bg-outline"
        }
      />
      {label}
    </span>
  );
}

function LibraryToolbar({
  searchLabel,
  searchPlaceholder,
  activityLabel,
  historyLabel,
  profileLabel,
}: {
  searchLabel: string;
  searchPlaceholder: string;
  activityLabel: string;
  historyLabel: string;
  profileLabel: string;
}) {
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

function LibraryReportCard({
  report,
  labels,
}: {
  report: LibraryReport;
  labels: {
    share: string;
    export: string;
  };
}) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-outline-variant bg-surface-container-lowest p-5 transition-colors hover:border-outline">
      <div className="mb-3 flex items-start justify-between gap-3">
        <ReportStatusBadge label={report.statusLabel} tone={report.statusTone} />
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

function LibraryCollections({ items }: { items: LibraryCollection[] }) {
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

function LibraryReadingList({
  items,
  actionLabel,
}: {
  items: LibraryReadingItem[];
  actionLabel: string;
}) {
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

export function LibraryPage({ dictionary }: LibraryPageProps) {
  const { libraryPage } = dictionary;

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <LibraryToolbar
        searchLabel={libraryPage.toolbar.searchLabel}
        searchPlaceholder={libraryPage.toolbar.searchPlaceholder}
        activityLabel={libraryPage.toolbar.activityLabel}
        historyLabel={libraryPage.toolbar.historyLabel}
        profileLabel={libraryPage.toolbar.profileLabel}
      />

      <div className="px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-primary">
                {libraryPage.heading}
              </h1>
              <p className="mt-2 text-base leading-7 text-on-surface-variant">
                {libraryPage.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:w-auto">
              <label className="relative min-w-0 sm:w-56">
                <span className="sr-only">{libraryPage.filterLabel}</span>
                <SlidersHorizontal
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant"
                  strokeWidth={1.8}
                />
                <select className="h-12 w-full appearance-none rounded-lg border border-outline-variant bg-surface-container-lowest pl-10 pr-10 text-sm text-on-surface outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15">
                  {libraryPage.filters.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <Button type="button" size="lg" className="rounded-sm px-4 text-sm font-semibold">
                <FolderPlus className="size-4" strokeWidth={1.9} />
                {libraryPage.newCollection}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <section className="space-y-6 lg:col-span-2">
              <SectionHeading
                title={libraryPage.recentReports.heading}
                icon={<FileText className="size-5" strokeWidth={1.8} />}
                action={
                  <Button type="button" variant="link" className="px-0 text-sm">
                    {libraryPage.recentReports.viewAll}
                  </Button>
                }
              />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {libraryPage.reports.map((report) => (
                  <LibraryReportCard
                    key={report.title}
                    report={report}
                    labels={libraryPage.reportActions}
                  />
                ))}
              </div>
            </section>

            <div className="space-y-8">
              <section className="space-y-4">
                <SectionHeading
                  title={libraryPage.collections.heading}
                  icon={<Folder className="size-5" strokeWidth={1.8} />}
                />
                <LibraryCollections items={libraryPage.collections.items} />
              </section>

              <section className="space-y-4">
                <SectionHeading
                  title={libraryPage.readingList.heading}
                  icon={<Bookmark className="size-5" strokeWidth={1.8} />}
                />
                <LibraryReadingList
                  items={libraryPage.readingList.items}
                  actionLabel={libraryPage.readingList.viewAll}
                />
              </section>

              <section className="rounded-lg border border-outline-variant bg-surface-container-lowest p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-surface-container p-2 text-secondary">
                    <FileClock className="size-4" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-on-surface">
                      {libraryPage.savedQueue.heading}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                      {libraryPage.savedQueue.description}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
