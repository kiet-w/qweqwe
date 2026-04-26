import type { ReportPageDictionary } from "@/shared/i18n";
import { TocNav } from "@/shared/ui";

import { ReportReadingWell } from "./report-reading-well";
import { ReportUtilityBar } from "./report-utility-bar";

type ReportPageProps = {
  reportPage: ReportPageDictionary;
};

export function ReportPage({ reportPage }: ReportPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <ReportUtilityBar
        exportPdf={reportPage.exportPdf}
        exportMd={reportPage.exportMd}
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-1 gap-16 px-12 py-20">
        <aside className="relative hidden w-48 shrink-0 lg:block">
          <TocNav heading={reportPage.contents.heading} items={reportPage.contents.items} />
        </aside>

        <ReportReadingWell reportPage={reportPage} />
      </div>
    </div>
  );
}
