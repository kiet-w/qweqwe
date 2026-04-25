import * as React from "react";

import { cn } from "@/shared/lib";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-6 py-5 text-base text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
