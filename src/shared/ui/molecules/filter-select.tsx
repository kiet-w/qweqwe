import type { ReactNode, SelectHTMLAttributes } from "react";

import { cn } from "@/shared/lib";

type FilterSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  icon?: ReactNode;
  wrapperClassName?: string;
};

export function FilterSelect({
  label,
  icon,
  className,
  wrapperClassName,
  children,
  ...props
}: FilterSelectProps) {
  return (
    <label className={cn("relative min-w-0", wrapperClassName)}>
      <span className="sr-only">{label}</span>
      {icon ? (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
          {icon}
        </span>
      ) : null}
      <select
        className={cn(
          "h-12 w-full appearance-none rounded-lg border border-outline-variant bg-surface-container-lowest text-sm text-on-surface outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15",
          icon ? "pl-10 pr-10" : "px-4",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    </label>
  );
}
