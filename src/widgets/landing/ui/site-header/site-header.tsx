import Link from "next/link";
import type { Locale } from "@/shared/i18n";

type SiteHeaderProps = {
  locale: Locale;
  brand: string;
  items: {
    login: string;
    getStarted: string;
  };
};

export function SiteHeader({ locale, brand, items }: SiteHeaderProps) {
  const loginHref = `/${locale}/login`;

  return (
    <nav className="sticky top-0 z-50 border-b border-outline-variant/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-8">
        <Link
          href={`/${locale}`}
          className="text-xl font-semibold tracking-[-0.04em]"
        >
          {brand}
        </Link>
        <div className="flex items-center gap-3 text-sm font-medium">
          <Link
            href={loginHref}
            className="hidden text-on-surface-variant transition-colors hover:text-on-surface sm:inline-flex"
          >
            {items.login}
          </Link>
          <Link
            href={loginHref}
            className="inline-flex items-center rounded-sm bg-primary px-4 py-2 text-on-primary transition-all hover:-translate-y-px hover:bg-primary/92"
          >
            {items.getStarted}
          </Link>
        </div>
      </div>
    </nav>
  );
}
