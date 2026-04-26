import { cn } from "@/shared/lib";

type TocNavItem = {
  id: string;
  label: string;
  indent?: boolean;
};

type TocNavProps = {
  heading: string;
  items: TocNavItem[];
};

export function TocNav({ heading, items }: TocNavProps) {
  return (
    <div className="sticky top-[120px] flex flex-col gap-4 border-l border-outline-variant/30 pl-4">
      <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-on-surface">
        {heading}
      </h2>
      <nav className="flex flex-col gap-3 text-sm text-on-surface-variant">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "transition-colors hover:text-on-surface",
              item.indent && "border-l border-transparent pl-4 hover:border-outline-variant",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
