import type { LandingDictionary, Locale } from "@/shared/i18n";

import { ResearchSidebar } from "./research-sidebar";

type ResearchShellProps = {
  locale: Locale;
  dictionary: LandingDictionary;
  children: React.ReactNode;
};

export function ResearchShell({
  locale,
  dictionary,
  children,
}: ResearchShellProps) {
  const { agentTracking, nav } = dictionary;

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <ResearchSidebar
        locale={locale}
        brand={nav.brand}
        brandSubtext={agentTracking.brandSubtext}
        newInquiry={agentTracking.newInquiry}
        navigation={agentTracking.navigation}
      />

      <main className="min-w-0 lg:ml-64">{children}</main>
    </div>
  );
}
