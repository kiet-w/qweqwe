import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  icon?: ReactNode;
  action?: ReactNode;
};

export function SectionHeading({
  title,
  icon,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-outline-variant pb-3">
      <h2 className="flex items-center gap-2 text-xl font-semibold tracking-[-0.02em] text-on-surface">
        {icon}
        <span>{title}</span>
      </h2>
      {action}
    </div>
  );
}
