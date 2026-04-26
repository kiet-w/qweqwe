import type { ReactNode } from "react";

import { cn } from "@/shared/lib";

type StatusBadgeTone = "neutral" | "muted" | "accent";

type StatusBadgeProps = {
  label: string;
  tone?: StatusBadgeTone;
  icon?: ReactNode;
  dotClassName?: string;
  className?: string;
};

const toneClassNames: Record<StatusBadgeTone, string> = {
  neutral:
    "border-outline-variant bg-slate-100 text-slate-800 dark:bg-slate-900/40 dark:text-slate-100",
  muted:
    "border-outline-variant bg-surface-container-low text-on-surface-variant",
  accent:
    "border-outline-variant bg-slate-300/70 text-slate-900 dark:bg-slate-200/20 dark:text-slate-100",
};

export function StatusBadge({
  label,
  tone = "muted",
  icon,
  dotClassName,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
        toneClassNames[tone],
        className,
      )}
    >
      {icon ?? <span className={cn("size-1.5 rounded-full bg-outline", dotClassName)} />}
      {label}
    </span>
  );
}
