import Link from "next/link";

import { cn } from "@/shared/lib";

type NavListItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  className?: string;
};

export function NavListItem({
  href,
  label,
  icon,
  active = false,
  className,
}: NavListItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-sm p-2 text-sm transition-all",
        active
          ? "border border-slate-200 bg-white font-semibold text-slate-900"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
        className,
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
