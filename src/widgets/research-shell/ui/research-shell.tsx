type ResearchShellProps = {
  children: React.ReactNode;
};

export function ResearchShell({ children }: ResearchShellProps) {
  return (
    <main className="min-w-0 lg:ml-64">{children}</main>
  );
}
