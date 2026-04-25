import Link from "next/link";
import {
  BookOpen,
  FileText,
  FolderOpen,
  GitBranch,
  LayoutDashboard,
  Plus,
  Send,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Upload,
} from "lucide-react";

import type { LandingDictionary, Locale } from "@/shared/i18n";

type DashboardPageProps = {
  locale: Locale;
  dictionary: LandingDictionary;
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

function StatusBadge({
  status,
  tone,
}: {
  status: string;
  tone: "analyzing" | "complete" | "drafting";
}) {
  if (tone === "complete") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-800">
        <Sparkles className="size-3" strokeWidth={1.9} />
        {status}
      </span>
    );
  }

  if (tone === "drafting") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-slate-300/70 px-2.5 py-1 text-[11px] font-medium text-slate-900">
        <FileText className="size-3" strokeWidth={1.9} />
        {status}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-800">
      <span className="size-1.5 rounded-full bg-slate-500 animate-pulse" />
      {status}
    </span>
  );
}

export function DashboardPage({ locale, dictionary }: DashboardPageProps) {
  const { agentTracking, dashboard, nav } = dictionary;

  const navigation = [
    {
      href: `/${locale}/dashboard`,
      label: agentTracking.navigation.dashboard,
      icon: LayoutDashboard,
      active: true,
    },
    {
      href: `/${locale}/agentTracking`,
      label: agentTracking.navigation.agentTracing,
      icon: GitBranch,
    },
    {
      href: `/${locale}/report`,
      label: agentTracking.navigation.researchReports,
      icon: FileText,
    },
    {
      href: `/${locale}/library`,
      label: agentTracking.navigation.library,
      icon: FolderOpen,
    },
  ];

  const footerNavigation = [
    {
      href: `/${locale}/settings`,
      label: agentTracking.navigation.settings,
      icon: Settings,
    },
    {
      href: `/${locale}/documentation`,
      label: agentTracking.navigation.documentation,
      icon: BookOpen,
    },
  ];

  return (
    <div
      lang={locale}
      className="min-h-screen bg-surface text-on-surface antialiased"
    >
      <div className="lg:flex">
        <aside className="border-b border-outline-variant bg-surface-container-lowest px-5 py-6 lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-64 lg:flex-col lg:gap-8 lg:border-b-0 lg:border-r lg:px-6">
          <div className="flex items-start justify-between gap-4 lg:block">
            <div className="space-y-2">
              <h1 className="text-lg font-black uppercase tracking-[0.22em] text-on-surface">
                {nav.brand}
              </h1>
              <p className="text-xs uppercase tracking-[0.18em] text-on-surface-variant">
                {agentTracking.brandSubtext}
              </p>
            </div>

            <button
              type="button"
              className="hidden rounded-sm bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-opacity hover:opacity-90 lg:flex lg:w-full lg:items-center lg:justify-center lg:gap-2"
            >
              <Plus className="size-[18px]" strokeWidth={2.1} />
              {agentTracking.newInquiry}
            </button>
          </div>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-opacity hover:opacity-90 lg:hidden"
          >
            <Plus className="size-[18px]" strokeWidth={2.1} />
            {agentTracking.newInquiry}
          </button>

          <nav className="mt-5 grid gap-2 sm:grid-cols-2 lg:mt-0 lg:flex-1 lg:grid-cols-1 lg:content-start">
            {navigation.map(({ href, label, icon: Icon, active }) => (
              <Link
                key={label}
                href={href}
                className={
                  active
                    ? "flex items-center gap-3 rounded-sm border border-outline-variant bg-surface-container-low px-3 py-2.5 text-sm font-semibold text-on-surface"
                    : "flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
                }
              >
                <Icon className="size-5" strokeWidth={1.9} />
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 grid gap-2 border-t border-outline-variant pt-5 sm:grid-cols-2 lg:mt-auto lg:grid-cols-1">
            {footerNavigation.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
              >
                <Icon className="size-5" strokeWidth={1.9} />
                {label}
              </Link>
            ))}
          </div>
        </aside>

        <main className="min-w-0 flex-1 lg:ml-64">
          <div className="mx-auto flex w-full max-w-[820px] flex-col gap-16 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
            <section className="space-y-6">
              <header className="space-y-2">
                <h2 className="text-[2rem] font-semibold tracking-[-0.03em] text-primary">
                  {dashboard.heading}
                </h2>
                <p className="max-w-2xl text-base leading-7 text-on-surface-variant">
                  {dashboard.description}
                </p>
              </header>

              <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-5 shadow-sm sm:p-6">
                <label
                  htmlFor="research-query"
                  className="block text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface"
                >
                  Primary Inquiry
                </label>

                <textarea
                  id="research-query"
                  rows={3}
                  placeholder="e.g., What are the emergent methodologies for synthesizing meta-materials at room temperature?"
                  className="mt-4 w-full resize-none border-0 border-b border-outline bg-transparent px-0 py-2 font-serif text-[1.25rem] leading-8 text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/70 focus:border-primary"
                />

                <div className="mt-6 flex flex-col gap-4 border-t border-outline-variant pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-on-surface"
                    >
                      <Upload className="size-[18px]" strokeWidth={1.8} />
                      Attach Datasets
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-on-surface"
                    >
                      <SlidersHorizontal className="size-[18px]" strokeWidth={1.8} />
                      Parameters
                    </button>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-2.5 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
                  >
                    Deploy Agent
                    <Send className="size-[18px]" strokeWidth={1.8} />
                  </button>
                </div>
              </div>
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
                  <article
                    key={dossier.id}
                    className={`flex flex-col gap-4 rounded-lg border border-outline-variant bg-surface-container-lowest p-6 ${
                      dossier.wide ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
                          Dossier ID: {dossier.id}
                        </p>
                        <h4 className="font-serif text-[1.4rem] font-semibold leading-tight text-on-surface">
                          {dossier.title}
                        </h4>
                      </div>

                      <StatusBadge status={dossier.status} tone={dossier.tone} />
                    </div>

                    <p className="text-base leading-7 text-on-surface-variant">
                      {dossier.description}
                    </p>

                    {dossier.metrics ? (
                      <div className="rounded-md bg-surface px-4 py-3">
                        <div className="grid grid-cols-3 gap-4 border-b border-outline-variant/40 px-1 pb-2 text-[11px] uppercase tracking-[0.16em] text-on-surface-variant">
                          <span>Metric</span>
                          <span className="text-right">Sources</span>
                          <span className="text-right">Confidence</span>
                        </div>

                        {dossier.metrics.map((metric, index) => (
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
                        {dossier.footer.map((item) => (
                          <span
                            key={item}
                            className="rounded-sm bg-surface px-2 py-1 text-xs text-on-surface-variant"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {dossier.action ? (
                        <button
                          type="button"
                          className="text-sm font-medium text-primary transition-colors hover:text-on-surface"
                        >
                          {dossier.action}
                        </button>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
