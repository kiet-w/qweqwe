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

import { Button } from "@/shared/ui/atoms/button";
import { NavListItem } from "@/shared/ui/molecules/nav-list-item";

type AgentTrackingSidebarProps = {
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

export function AgentTrackingSidebar({
  brand,
  brandSubtext,
  newInquiry,
  navigation,
}: AgentTrackingSidebarProps) {
  return (
    <nav className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col gap-8 border-r border-slate-200 bg-slate-50 p-6">
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
        className="w-full justify-center rounded-sm text-sm font-medium"
      >
        <Plus className="size-[18px]" strokeWidth={2.2} />
        {newInquiry}
      </Button>

      <div className="flex flex-1 flex-col gap-1 overflow-y-auto">
        <NavListItem
          href="#"
          label={navigation.dashboard}
          icon={<LayoutDashboard className="size-5" strokeWidth={1.9} />}
        />
        <NavListItem
          href="#"
          label={navigation.agentTracing}
          active
          icon={<GitBranch className="size-5" strokeWidth={1.9} />}
        />
        <NavListItem
          href="#"
          label={navigation.researchReports}
          icon={<FileText className="size-5" strokeWidth={1.9} />}
        />
        <NavListItem
          href="#"
          label={navigation.library}
          icon={<LibraryBig className="size-5" strokeWidth={1.9} />}
        />
      </div>

      <div className="flex flex-col gap-1 border-t border-slate-200 pt-4">
        <NavListItem
          href="#"
          label={navigation.settings}
          icon={<Settings className="size-5" strokeWidth={1.9} />}
        />
        <NavListItem
          href="#"
          label={navigation.documentation}
          icon={<BookOpen className="size-5" strokeWidth={1.9} />}
        />
      </div>
    </nav>
  );
}
