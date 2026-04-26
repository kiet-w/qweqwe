import { FileText, Sparkles } from "lucide-react";

import { StatusBadge } from "@/shared/ui";

type DashboardStatusBadgeProps = {
  status: string;
  tone: "analyzing" | "complete" | "drafting";
};

export function DashboardStatusBadge({
  status,
  tone,
}: DashboardStatusBadgeProps) {
  if (tone === "complete") {
    return (
      <StatusBadge
        label={status}
        tone="muted"
        icon={<Sparkles className="size-3" strokeWidth={1.9} />}
        className="bg-slate-200 text-slate-800"
      />
    );
  }

  if (tone === "drafting") {
    return (
      <StatusBadge
        label={status}
        tone="accent"
        icon={<FileText className="size-3" strokeWidth={1.9} />}
      />
    );
  }

  return (
    <StatusBadge
      label={status}
      tone="neutral"
      dotClassName="bg-slate-500 animate-pulse"
    />
  );
}
