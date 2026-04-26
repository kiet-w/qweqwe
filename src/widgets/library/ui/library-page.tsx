import {
  Bookmark,
  FileClock,
  FileText,
  Folder,
  FolderPlus,
  SlidersHorizontal,
} from "lucide-react";

import type { LibraryPageDictionary } from "@/shared/i18n";
import { Button, FilterSelect, PageIntro, SectionHeading } from "@/shared/ui";

import { LibraryCollections } from "./library-collections";
import { LibraryReadingList } from "./library-reading-list";
import { LibraryReportCard } from "./library-report-card";
import { LibraryToolbar } from "./library-toolbar";

type LibraryPageProps = {
  libraryPage: LibraryPageDictionary;
};

export function LibraryPage({ libraryPage }: LibraryPageProps) {
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
            <PageIntro
              title={libraryPage.heading}
              description={libraryPage.description}
              className="max-w-2xl"
            />

            <div className="flex flex-col gap-3 sm:flex-row md:w-auto">
              <FilterSelect
                label={libraryPage.filterLabel}
                wrapperClassName="sm:w-56"
                icon={
                  <SlidersHorizontal
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.8}
                  />
                }
              >
                  {libraryPage.filters.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
              </FilterSelect>

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
