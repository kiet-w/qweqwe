import { FileText, Send, Sparkles } from "lucide-react";

import { Input } from "@/shared/ui/atoms/input";
import { ActivityFeedEntry } from "@/shared/ui/molecules/activity-feed-entry";

type ProcessFeedPanelProps = {
  processFeed: {
    heading: string;
    pause: string;
    exportLogs: string;
    entries: Array<
      | {
          type: "papers";
          time: string;
          text: string;
          papers: string[];
        }
      | {
          type: "insight";
          time: string;
          prefix: string;
          text: string;
        }
      | {
          type: "status";
          time: string;
          text: string;
        }
    >;
    steerLabel: string;
    steerPlaceholder: string;
  };
};

export function ProcessFeedPanel({ processFeed }: ProcessFeedPanelProps) {
  return (
    <section className="flex min-w-0 flex-1 flex-col bg-surface-bright">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-lowest p-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-20" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
          </span>
          <h2 className="text-sm uppercase tracking-[0.16em] text-primary">
            {processFeed.heading}
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded border border-outline-variant px-3 py-1 text-xs transition-colors hover:bg-surface-container"
          >
            {processFeed.pause}
          </button>
          <button
            type="button"
            className="rounded border border-outline-variant px-3 py-1 text-xs transition-colors hover:bg-surface-container"
          >
            {processFeed.exportLogs}
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        {processFeed.entries.map((entry) => (
          <ActivityFeedEntry
            key={`${entry.time}-${entry.text}`}
            time={entry.time}
          >
            {entry.type === "papers" ? (
              <>
                <p className="text-on-surface">{entry.text}</p>
                <div className="mt-2 flex gap-2">
                  {entry.papers.map((paper) => (
                    <span
                      key={paper}
                      className="inline-flex items-center gap-1 rounded border border-outline-variant bg-surface-container px-2 py-1 text-xs"
                    >
                      <FileText className="size-3" strokeWidth={1.8} />
                      {paper}
                    </span>
                  ))}
                </div>
              </>
            ) : null}

            {entry.type === "insight" ? (
              <p className="text-on-surface">
                <span className="font-semibold text-primary">
                  {entry.prefix}{" "}
                </span>
                {entry.text}
              </p>
            ) : null}

            {entry.type === "status" ? (
              <p className="flex items-center gap-2 text-[#3d89c3]">
                <Sparkles className="size-4 animate-spin" strokeWidth={1.8} />
                {entry.text}
              </p>
            ) : null}
          </ActivityFeedEntry>
        ))}
      </div>

      <div className="border-t border-outline-variant bg-surface-container-lowest p-6">
        <label
          htmlFor="agent-steer"
          className="mb-2 block text-sm text-on-surface-variant"
        >
          {processFeed.steerLabel}
        </label>
        <div className="relative">
          <Input
            id="agent-steer"
            type="text"
            placeholder={processFeed.steerPlaceholder}
            className="border-0 border-b border-outline bg-transparent py-2 pr-10 text-[17px] shadow-none hover:border-primary focus-visible:border-primary focus-visible:ring-0"
          />
          <button
            type="button"
            className="absolute right-0 top-2 text-primary transition-colors hover:text-on-surface-variant"
          >
            <Send className="size-5" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}
