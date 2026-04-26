"use client";

import { usePathname } from "next/navigation";
import {
  BookOpen,
  BrainCircuit,
  FileText,
  GitBranch,
  LayoutDashboard,
  LibraryBig,
  Plus,
  Settings,
} from "lucide-react";

import type { Locale } from "@/shared/i18n";
import { Button } from "@/shared/ui/atoms/button";
import { NavListItem } from "@/shared/ui/molecules/nav-list-item";

type ResearchSidebarProps = {
  locale: Locale;
  brand: string;
  brandSubtext: string;
  newInquiry: string;
  navigation: {
    dashboard: string;
    agentTracing: string;
    researchReports: string;
    library: string;
    settings: string;
    documentation: string;
  };
};

export function ResearchSidebar({
  locale,
  brand,
  brandSubtext,
  newInquiry,
  navigation,
}: ResearchSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      href: `/${locale}/dashboard`,
      label: navigation.dashboard,
      icon: <LayoutDashboard className="size-5" strokeWidth={1.9} />,
    },
    {
      href: `/${locale}/agentTracking`,
      label: navigation.agentTracing,
      icon: <GitBranch className="size-5" strokeWidth={1.9} />,
    },
    {
      href: `/${locale}/report`,
      label: navigation.researchReports,
      icon: <FileText className="size-5" strokeWidth={1.9} />,
    },
    {
      href: `/${locale}/library`,
      label: navigation.library,
      icon: <LibraryBig className="size-5" strokeWidth={1.9} />,
    },
  ];

  const footerItems = [
    {
      href: `/${locale}/settings`,
      label: navigation.settings,
      icon: <Settings className="size-5" strokeWidth={1.9} />,
    },
    {
      href: `/${locale}/documentation`,
      label: navigation.documentation,
      icon: <BookOpen className="size-5" strokeWidth={1.9} />,
    },
  ];

  return (
    <nav className="border-b border-slate-200 bg-slate-50 p-6 lg:fixed lg:left-0 lg:top-0 lg:z-40 lg:flex lg:h-screen lg:w-64 lg:flex-col lg:gap-8 lg:border-b-0 lg:border-r">
      <div>
        <div className="mb-1 flex items-center gap-3">
          <BrainCircuit className="size-5 text-primary" strokeWidth={2.2} />
          <span className="text-lg font-black uppercase tracking-[0.22em] text-slate-900">
            {brand}
          </span>
        </div>
        <p className="text-sm text-on-surface-variant">{brandSubtext}</p>
      </div>

      <Button
        type="button"
        className="mt-6 w-full justify-center rounded-sm text-sm font-medium lg:mt-0"
      >
        <Plus className="size-[18px]" strokeWidth={2.2} />
        {newInquiry}
      </Button>

      <div className="mt-6 grid gap-1 sm:grid-cols-2 lg:mt-0 lg:flex-1 lg:grid-cols-1 lg:content-start lg:overflow-y-auto">
        {navItems.map((item) => (
          <NavListItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={pathname === item.href}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-1 border-t border-slate-200 pt-4 sm:grid-cols-2 lg:mt-0 lg:grid-cols-1">
        {footerItems.map((item) => (
          <NavListItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={pathname === item.href}
          />
        ))}
      </div>
    </nav>
  );
}
