import type { AgentTrackingDictionary } from "@/shared/i18n";

import { DraftPreviewPanel } from "./draft-preview-panel";
import { ExecutionPlanPanel } from "./execution-plan-panel";
import { ProcessFeedPanel } from "./process-feed-panel";

type AgentTrackingPageProps = {
  agentTracking: AgentTrackingDictionary;
};

export function AgentTrackingPage({ agentTracking }: AgentTrackingPageProps) {
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
