import { DashboardStatusBadge } from "./dashboard-status-badge";

type DossierMetric = {
  label: string;
  value: string;
  confidence: string;
};

type DossierCardProps = {
  id: string;
  title: string;
  description: string;
  status: string;
  tone: "analyzing" | "complete" | "drafting";
  footer: string[];
  action?: string;
  wide?: boolean;
  metrics?: DossierMetric[];
};

export function DossierCard({
  id,
  title,
  description,
  status,
  tone,
  footer,
  action,
  wide,
  metrics,
}: DossierCardProps) {
  return (
    <article
      className={`flex flex-col gap-4 rounded-lg border border-outline-variant bg-surface-container-lowest p-6 ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
            Dossier ID: {id}
          </p>
          <h4 className="font-serif text-[1.4rem] font-semibold leading-tight text-on-surface">
            {title}
          </h4>
        </div>

        <DashboardStatusBadge status={status} tone={tone} />
      </div>

      <p className="text-base leading-7 text-on-surface-variant">{description}</p>

      {metrics ? (
        <div className="rounded-md bg-surface px-4 py-3">
          <div className="grid grid-cols-3 gap-4 border-b border-outline-variant/40 px-1 pb-2 text-[11px] uppercase tracking-[0.16em] text-on-surface-variant">
            <span>Metric</span>
            <span className="text-right">Sources</span>
            <span className="text-right">Confidence</span>
          </div>

          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`grid grid-cols-3 gap-4 px-1 py-3 text-sm text-on-surface ${
                index > 0 ? "border-t border-outline-variant/20" : ""
              }`}
            >
              <span>{metric.label}</span>
              <span className="text-right font-mono">{metric.value}</span>
              <span className="text-right font-mono">{metric.confidence}</span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-outline-variant pt-4">
        <div className="flex flex-wrap gap-2">
          {footer.map((item) => (
            <span
              key={item}
              className="rounded-sm bg-surface px-2 py-1 text-xs text-on-surface-variant"
            >
              {item}
            </span>
          ))}
        </div>

        {action ? (
          <button
            type="button"
            className="text-sm font-medium text-primary transition-colors hover:text-on-surface"
          >
            {action}
          </button>
        ) : null}
      </div>
    </article>
  );
}
