import { cn } from "@/shared/lib";

type SkeletonLinesProps = {
  widths: string[];
  className?: string;
};

export function SkeletonLines({ widths, className }: SkeletonLinesProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {widths.map((width, index) => (
        <div
          key={`${width}-${index}`}
          className={cn("h-4 rounded-full bg-surface-container-low", width)}
        />
      ))}
    </div>
  );
}
