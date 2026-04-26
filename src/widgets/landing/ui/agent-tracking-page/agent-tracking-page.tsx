import type { LandingDictionary } from "@/shared/i18n";

import { DraftPreviewPanel } from "./draft-preview-panel";
import { ExecutionPlanPanel } from "./execution-plan-panel";
import { ProcessFeedPanel } from "./process-feed-panel";

type AgentTrackingPageProps = {
  dictionary: LandingDictionary;
};

export function AgentTrackingPage({ dictionary }: AgentTrackingPageProps) {
  const { agentTracking } = dictionary;

  return (
    <section className="flex min-h-screen overflow-hidden bg-surface text-on-surface">
      <ExecutionPlanPanel
        activeInquiry={agentTracking.activeInquiry}
        executionPlan={agentTracking.executionPlan}
      />
      <ProcessFeedPanel processFeed={agentTracking.processFeed} />
      <DraftPreviewPanel draftPreview={agentTracking.draftPreview} />
    </section>
  );
}
