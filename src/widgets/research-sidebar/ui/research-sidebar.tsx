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

import type { Locale, ResearchSidebarDictionary } from "@/shared/i18n";
import { ROUTES } from "@/shared/config/routes";
import { Button } from "@/shared/ui/atoms/button";
import { NavListItem } from "@/shared/ui/molecules/nav-list-item";

type ResearchSidebarProps = {
  locale: Locale;
  dictionary: ResearchSidebarDictionary;
};

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function ResearchSidebar({
  locale,
  dictionary,
}: ResearchSidebarProps) {
  const pathname = usePathname();
  const { agentTracking, nav } = dictionary;

  const navItems = [
    {
      href: ROUTES.dashboard(locale),
      label: agentTracking.navigation.dashboard,
      icon: <LayoutDashboard className="size-5" strokeWidth={1.9} />,
    },
    {
      href: ROUTES.agentTracking(locale),
      label: agentTracking.navigation.agentTracing,
      icon: <GitBranch className="size-5" strokeWidth={1.9} />,
    },
    {
      href: ROUTES.report(locale),
      label: agentTracking.navigation.researchReports,
      icon: <FileText className="size-5" strokeWidth={1.9} />,
    },
    {
      href: ROUTES.library(locale),
      label: agentTracking.navigation.library,
      icon: <LibraryBig className="size-5" strokeWidth={1.9} />,
    },
  ];

  const footerItems = [
    {
      href: ROUTES.settings(locale),
      label: agentTracking.navigation.settings,
      icon: <Settings className="size-5" strokeWidth={1.9} />,
    },
    {
      href: ROUTES.documentation(locale),
      label: agentTracking.navigation.documentation,
      icon: <BookOpen className="size-5" strokeWidth={1.9} />,
    },
  ];

  return (
    <nav className="border-b border-slate-200 bg-slate-50 p-6 lg:fixed lg:left-0 lg:top-0 lg:z-40 lg:flex lg:h-screen lg:w-64 lg:flex-col lg:gap-8 lg:border-b-0 lg:border-r">
      <div>
        <div className="mb-1 flex items-center gap-3">
          <BrainCircuit className="size-5 text-primary" strokeWidth={2.2} />
          <span className="text-lg font-black uppercase tracking-[0.22em] text-slate-900">
            {nav.brand}
          </span>
        </div>
        <p className="text-sm text-on-surface-variant">
          {agentTracking.brandSubtext}
        </p>
      </div>

      <Button
        type="button"
        className="mt-6 w-full justify-center rounded-sm text-sm font-medium lg:mt-0"
      >
        <Plus className="size-[18px]" strokeWidth={2.2} />
        {agentTracking.newInquiry}
      </Button>

      <div className="mt-6 grid gap-1 sm:grid-cols-2 lg:mt-0 lg:flex-1 lg:grid-cols-1 lg:content-start lg:overflow-y-auto">
        {navItems.map((item) => (
          <NavListItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={isActivePath(pathname, item.href)}
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
            active={isActivePath(pathname, item.href)}
          />
        ))}
      </div>
    </nav>
  );
}
