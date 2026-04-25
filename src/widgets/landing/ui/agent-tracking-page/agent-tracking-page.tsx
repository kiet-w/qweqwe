import type { LandingDictionary, Locale } from "@/shared/i18n";

import { AgentTrackingSidebar } from "./agent-tracking-sidebar";
import { DraftPreviewPanel } from "./draft-preview-panel";
import { ExecutionPlanPanel } from "./execution-plan-panel";
import { ProcessFeedPanel } from "./process-feed-panel";

type AgentTrackingPageProps = {
  locale: Locale;
  dictionary: LandingDictionary;
};

export function AgentTrackingPage({
  locale,
  dictionary,
}: AgentTrackingPageProps) {
  const { agentTracking } = dictionary;

  return (
    <div
      lang={locale}
      className="flex min-h-screen overflow-hidden bg-surface text-on-surface"
    >
      <AgentTrackingSidebar
        brand={dictionary.nav.brand}
        brandSubtext={agentTracking.brandSubtext}
        newInquiry={agentTracking.newInquiry}
        navigation={agentTracking.navigation}
      />

      <main className="ml-64 flex h-screen flex-1 overflow-hidden">
        <ExecutionPlanPanel
          activeInquiry={agentTracking.activeInquiry}
          executionPlan={agentTracking.executionPlan}
        />
        <ProcessFeedPanel processFeed={agentTracking.processFeed} />
        <DraftPreviewPanel draftPreview={agentTracking.draftPreview} />
      </main>
    </div>
  );
}
