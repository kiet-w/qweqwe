import type { DashboardDictionary } from "@/shared/i18n";
import { PageIntro } from "@/shared/ui";

import { DashboardQueryPanel } from "./dashboard-query-panel";
import { DossierCard } from "./dossier-card";

type DashboardPageProps = {
  dashboard: DashboardDictionary;
};

const DOSSIERS = [
  {
    id: "8492-A",
    title: "Neuromorphic Computing Architectures",
    description:
      "Synthesizing recent papers on memristor crossbar arrays and their application in unsupervised learning models. Currently parsing 42 peer-reviewed sources.",
    status: "Analyzing",
    tone: "analyzing" as const,
    footer: ["42 Sources", "Agent 03"],
  },
  {
    id: "8488-C",
    title: "Efficacy of MRNA Vaccines in Autoimmune Variants",
    description:
      "Final report generated. Strong correlation found between variant X and reduced inflammatory response metrics across three longitudinal studies.",
    status: "Complete",
    tone: "complete" as const,
    footer: ["128 Sources"],
    action: "Read Report",
  },
  {
    id: "8490-B",
    title: "Socio-Economic Impacts of Algorithmic Trading (2015-2023)",
    description:
      "Data extraction complete. Formulating chronological synthesis of market volatility indices correlated with high-frequency trading adoption.",
    status: "Drafting Report",
    tone: "drafting" as const,
    footer: ["Est. 5 mins remaining"],
    wide: true,
    metrics: [
      { label: "Volatility Index", value: "24", confidence: "High" },
      { label: "Liquidity Depth", value: "18", confidence: "Medium" },
    ],
  },
];

export function DashboardPage({ dashboard }: DashboardPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-[820px] flex-col gap-16 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <section className="space-y-6">
        <PageIntro title={dashboard.heading} description={dashboard.description} />
        <DashboardQueryPanel
          inquiryLabel="Primary Inquiry"
          placeholder="e.g., What are the emergent methodologies for synthesizing meta-materials at room temperature?"
          attachLabel="Attach Datasets"
          parametersLabel="Parameters"
          submitLabel="Deploy Agent"
        />
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4 border-b border-outline-variant pb-4">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-primary">
            Active Dossiers
          </h3>
          <button
            type="button"
            className="text-sm font-medium text-on-surface-variant transition-colors hover:text-on-surface"
          >
            View Archive
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {DOSSIERS.map((dossier) => (
            <DossierCard key={dossier.id} {...dossier} />
          ))}
        </div>
      </section>
    </div>
  );
}
