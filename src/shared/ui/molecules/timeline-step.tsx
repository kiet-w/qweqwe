import { cn } from "@/shared/lib";

type TimelineStepProps = {
  title: string;
  status: "completed" | "active" | "pending";
  marker: React.ReactNode;
  meta?: string;
  details?: string[];
  detailIcon?: React.ReactNode;
};

export function TimelineStep({
  title,
  status,
  marker,
  meta,
  details,
  detailIcon,
}: TimelineStepProps) {
  return (
    <div
      className={cn("relative", status === "pending" && "opacity-50")}
    >
      {marker}
      {status === "active" ? (
        <div className="-mt-2 rounded border border-outline-variant bg-surface-bright p-3 pl-2">
          <p className="text-sm font-semibold text-primary">{title}</p>
          {details?.length ? (
            <div className="mt-2 space-y-2">
              {details.map((detail) => (
                <div key={detail} className="flex items-center gap-2">
                  {detailIcon}
                  <span className="text-xs text-on-surface-variant">{detail}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="pl-2">
          <p
            className={cn(
              "text-sm",
              status === "completed"
                ? "text-primary line-through opacity-70"
                : "text-on-surface",
            )}
          >
            {title}
          </p>
          {meta ? (
            <p className="mt-1 text-xs text-on-surface-variant">{meta}</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
