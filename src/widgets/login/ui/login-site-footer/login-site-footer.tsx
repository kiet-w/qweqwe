import Link from "next/link";
import { Globe, Share2 } from "lucide-react";

import { ROUTES } from "@/shared/config/routes";
import type { LoginPageDictionary, Locale } from "@/shared/i18n";

type LoginSiteFooterProps = {
  locale: Locale;
  brand: string;
  footer: LoginPageDictionary["loginPage"]["footer"];
};

export function LoginSiteFooter({
  locale,
  brand,
  footer,
}: LoginSiteFooterProps) {
  const loginHref = ROUTES.login(locale);

  return (
    <footer className="border-t border-outline-variant bg-surface px-8 py-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="space-y-4">
          <span className="text-xl font-bold tracking-[-0.04em] text-primary">{brand}</span>
          <p className="text-xs leading-6 text-on-surface-variant">{footer.description}</p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.heading}>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {column.heading}
            </h4>
            <ul className="space-y-3 text-xs text-on-surface-variant">
              {column.links.map((link) => (
                <li key={link}>
                  <Link href={loginHref} className="transition-colors hover:text-primary">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-outline-variant pt-8 md:flex-row">
        <p className="text-xs text-outline">{footer.copyright}</p>
        <div className="flex gap-6 text-outline">
          <Link href={loginHref} className="transition-colors hover:text-primary">
            <Globe className="size-5" strokeWidth={1.8} />
          </Link>
          <Link href={loginHref} className="transition-colors hover:text-primary">
            <Share2 className="size-5" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
