import { Search } from "lucide-react";

import { cn } from "@/shared/lib";

import { Input } from "../atoms/input";

type SearchFieldProps = {
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
};

export function SearchField({
  label,
  placeholder,
  className,
  inputClassName,
}: SearchFieldProps) {
  return (
    <label className={cn("relative block", className)}>
      <span className="sr-only">{label}</span>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant"
        strokeWidth={1.8}
      />
      <Input
        type="search"
        placeholder={placeholder}
        className={cn("pl-10", inputClassName)}
      />
    </label>
  );
}
