import { cn } from "@/shared/lib";

export type IconName =
  | "paperclip"
  | "sliders"
  | "arrow-right"
  | "branch"
  | "search"
  | "summary";

type IconProps = {
  name: IconName;
  className?: string;
};

const iconPaths: Record<IconName, string> = {
  paperclip:
    "M8.5 12.5 14.86 6.14a3 3 0 1 1 4.24 4.24l-8.49 8.48a5 5 0 0 1-7.07-7.07l8.84-8.84",
  sliders:
    "M4 6h10M18 6h2M10 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10 12H10M6 18H4M18 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM4 12h2m4 0h10m-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  "arrow-right": "M5 12h14m-5-5 5 5-5 5",
  branch:
    "M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM7 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-2-2V8m2 8c4 0 4-6 10-6m-10 0c4 0 4 6 10 6",
  search: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm9 2-5.2-5.2",
  summary: "M7 5h10M7 10h10M7 15h6M5 4h.01M5 9h.01M5 14h.01"
};

export function Icon({ name, className }: IconProps) {
  const strokeWidth = name === "arrow-right" || name === "summary" ? 1.8 : 1.6;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn("size-5", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
