import { LayoutDashboard } from "lucide-react";

import { DraftPlaceholder } from "@/shared/ui/molecules/draft-placeholder";

type DraftPreviewPanelProps = {
  draftPreview: {
    heading: string;
    title: string;
    paragraphs: string[];
    composing: string;
  };
};

export function DraftPreviewPanel({
  draftPreview,
}: DraftPreviewPanelProps) {
  return (
    <section className="z-10 flex w-[480px] flex-col border-l border-outline-variant bg-surface-container-lowest">
      <div className="flex items-center justify-between border-b border-outline-variant p-6">
        <h2 className="text-sm uppercase tracking-[0.16em] text-on-surface-variant">
          {draftPreview.heading}
        </h2>
        <button
          type="button"
          className="text-primary transition-colors hover:text-on-surface-variant"
        >
          <LayoutDashboard className="size-5" strokeWidth={1.8} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8 font-serif text-[20px] leading-relaxed">
        <h1 className="mb-6 font-sans text-2xl font-semibold text-primary">
          {draftPreview.title}
        </h1>

        {draftPreview.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-4">
            {paragraph}
          </p>
        ))}

        <DraftPlaceholder label={draftPreview.composing} />
      </div>
    </section>
  );
}
