type SiteFooterProps = {
  copyright: string;
  privacy: string;
  terms: string;
  apiDocs: string;
  status: string;
};

export function SiteFooter({
  copyright,
  privacy,
  terms,
  apiDocs,
  status,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-outline-variant bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-on-surface-variant md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-medium text-on-surface">{copyright}</p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#privacy"
            className="transition-colors hover:text-on-surface"
          >
            {privacy}
          </a>
          <a href="#terms" className="transition-colors hover:text-on-surface">
            {terms}
          </a>
          <a
            href="#api-docs"
            className="transition-colors hover:text-on-surface"
          >
            {apiDocs}
          </a>
          <a href="#status" className="transition-colors hover:text-on-surface">
            {status}
          </a>
        </div>
      </div>
    </footer>
  );
}
