import * as React from "react";

import { cn } from "@/shared/lib";

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
