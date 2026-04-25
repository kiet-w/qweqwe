type ActivityFeedEntryProps = {
  time: string;
  children: React.ReactNode;
};

export function ActivityFeedEntry({
  time,
  children,
}: ActivityFeedEntryProps) {
  return (
    <div className="group flex gap-4">
      <div className="w-16 shrink-0 pt-1 text-xs text-on-surface-variant">
        {time}
      </div>
      <div className="flex-1 border-l-2 border-transparent pl-4 transition-colors group-hover:border-outline-variant">
        {children}
      </div>
    </div>
  );
}
