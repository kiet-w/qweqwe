import {
  CheckCircle2,
  Circle,
  Search,
  Sparkles,
} from "lucide-react";

import { Eyebrow } from "@/shared/ui/atoms/typography";
import { TimelineStep } from "@/shared/ui/molecules/timeline-step";

type ExecutionPlanPanelProps = {
  activeInquiry: {
    eyebrow: string;
    title: string;
  };
  executionPlan: {
    heading: string;
    steps: Array<{
      status: "completed" | "active" | "pending";
      title: string;
      meta?: string;
      details?: string[];
    }>;
  };
};

function getMarker(status: "completed" | "active" | "pending") {
  if (status === "completed") {
    return (
      <span className="absolute -left-[21px] top-0.5 bg-surface-container-lowest text-primary">
        <CheckCircle2
          className="size-4 rounded-full bg-[#d5e3fd] p-0.5"
          strokeWidth={2.2}
        />
      </span>
    );
  }

  if (status === "active") {
    return (
      <span className="absolute -left-[21px] top-0.5 bg-surface-container-lowest text-primary">
        <Search className="size-4 animate-pulse" strokeWidth={2.2} />
      </span>
    );
  }

  return (
    <span className="absolute -left-[21px] top-0.5 bg-surface-container-lowest text-outline">
      <Circle className="size-4" strokeWidth={1.9} />
    </span>
  );
}

export function ExecutionPlanPanel({
  activeInquiry,
  executionPlan,
}: ExecutionPlanPanelProps) {
  return (
    <section className="z-10 flex w-80 flex-col border-r border-outline-variant bg-surface-container-lowest shadow-[1px_0_24px_rgba(0,0,0,0.02)]">
      <div className="border-b border-outline-variant p-6">
        <Eyebrow className="mb-1 tracking-[0.16em]">
          {activeInquiry.eyebrow}
        </Eyebrow>
        <h1 className="text-[18px] leading-snug text-primary">
          {activeInquiry.title}
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <Eyebrow className="mb-4 tracking-[0.16em]">
          {executionPlan.heading}
        </Eyebrow>

        <div className="space-y-6 border-l border-outline-variant pl-4">
          {executionPlan.steps.map((step, index) => (
            <TimelineStep
              key={`${step.title}-${index}`}
              title={step.title}
              status={step.status}
              meta={step.meta}
              details={step.details}
              marker={getMarker(step.status)}
              detailIcon={
                <Sparkles
                  className="size-[14px] text-on-surface-variant"
                  strokeWidth={1.8}
                />
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
