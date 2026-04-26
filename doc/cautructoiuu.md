# Architecture Spec - Research Platform

> **Stack:** Next.js 15 (App Router) � React 19 � Tailwind v4 � TypeScript � Supabase  
> **Pattern:** Feature-Sliced Design + Atomic Design  
> **Source of truth:** `GEMINI.md` (Golden Rules + ADR history)

---

## 1. Nguyen tac cot loi

| Quy tac | Chi tiet |
| ------ | -------- |
| Import mot chieu | `app -> pages -> widgets -> features -> entities -> shared`. Khong bao gio import nguoc. |
| Slice isolation | Moi slice chi expose qua `index.ts`. Khong import file noi bo cua slice khac. |
| Thin page | `pages/` chi compose, khong fetch data truc tiep. Data flow qua Server Action hoac props tu `app/`. |
| Logic placement | UI thuan -> `shared/ui`. Logic nghiep vu -> `features/` hoac `entities/`. |
| No cross-widget import | Widget khong import widget khac. Neu can share -> dua xuong `shared/` hoac `entities/`. |

---

## 2. Cau truc thu muc

```text
src/
|-- app/
|   `-- [lang]/
|       |-- layout.tsx
|       |-- globals.css
|       |-- page.tsx
|       |-- login/
|       |   `-- page.tsx
|       `-- (research)/
|           |-- layout.tsx
|           |-- dashboard/
|           |   `-- page.tsx
|           |-- library/
|           |   `-- page.tsx
|           |-- report/
|           |   `-- page.tsx
|           `-- agent-tracking/
|               `-- page.tsx
|-- pages/
|   |-- landing/
|   |   `-- ui/landing-page.tsx
|   |-- login/
|   |   `-- ui/login-page.tsx
|   |-- dashboard/
|   |   `-- ui/dashboard-page.tsx
|   |-- library/
|   |   `-- ui/library-page.tsx
|   |-- report/
|   |   `-- ui/report-page.tsx
|   `-- agent-tracking/
|       `-- ui/agent-tracking-page.tsx
|-- widgets/
|   |-- landing/
|   |   |-- index.ts
|   |   `-- ui/
|   |       |-- site-header.tsx
|   |       |-- hero-section.tsx
|   |       |-- login-section.tsx
|   |       |-- methodology-section.tsx
|   |       |-- login-hero-section.tsx
|   |       |-- login-feature-grid-section.tsx
|   |       |-- login-methodology-section.tsx
|   |       |-- login-final-cta.tsx
|   |       `-- site-footer.tsx
|   |-- research-shell/
|   |   |-- index.ts
|   |   `-- ui/research-shell.tsx
|   |-- research-sidebar/
|   |   |-- index.ts
|   |   `-- ui/research-sidebar.tsx
|   |-- dashboard/
|   |   |-- index.ts
|   |   `-- ui/
|   |       |-- dashboard-query-panel.tsx
|   |       `-- dossier-card.tsx
|   |-- library/
|   |   |-- index.ts
|   |   `-- ui/
|   |       |-- library-toolbar.tsx
|   |       |-- library-report-card.tsx
|   |       |-- library-collections.tsx
|   |       `-- library-reading-list.tsx
|   |-- report/
|   |   |-- index.ts
|   |   `-- ui/
|   |       |-- report-utility-bar.tsx
|   |       `-- report-reading-well.tsx
|   |-- agent-tracking/
|   |   |-- index.ts
|   |   `-- ui/
|   |       |-- agent-tracking-page.tsx
|   |       |-- execution-plan-panel.tsx
|   |       |-- process-feed-panel.tsx
|   |       `-- draft-preview-panel.tsx
|   `-- research-placeholder/
|       |-- index.ts
|       `-- ui/research-placeholder-page.tsx
|-- features/
|   |-- auth/
|   |   |-- index.ts
|   |   |-- api/
|   |   `-- ui/login-page-form.tsx
|   |-- research-query/
|   |   |-- index.ts
|   |   |-- api/
|   |   `-- ui/query-composer.tsx
|   `-- save-to-library/
|       |-- index.ts
|       |-- api/
|       `-- ui/save-button.tsx
|-- entities/
|   |-- user/
|   |   |-- index.ts
|   |   |-- api/user.api.ts
|   |   |-- model/user.types.ts
|   |   `-- ui/user-avatar.tsx
|   |-- report/
|   |   |-- index.ts
|   |   |-- api/report.api.ts
|   |   |-- model/report.types.ts
|   |   `-- ui/report-status-badge.tsx
|   |-- query/
|   |   |-- index.ts
|   |   |-- api/query.api.ts
|   |   |-- model/query.types.ts
|   |   `-- ui/query-preview-chip.tsx
|   `-- collection/
|       |-- index.ts
|       |-- api/collection.api.ts
|       |-- model/collection.types.ts
|       `-- ui/collection-badge.tsx
`-- shared/
    |-- ui/
    |   |-- atoms/
    |   `-- molecules/
    |       |-- search-field.tsx
    |       |-- status-badge.tsx
    |       |-- nav-list-item.tsx
    |       |-- page-intro.tsx
    |       |-- toc-nav.tsx
    |       |-- filter-select.tsx
    |       `-- skeleton-lines.tsx
    |-- i18n/
    |   |-- config.ts
    |   `-- messages/
    |       |-- en.json
    |       `-- vi.json
    |-- lib/
    |   |-- supabase/
    |   |   |-- client.ts
    |   |   `-- server.ts
    |   `-- utils.ts
    `-- config/
        `-- routes.ts
```

---

## 3. Nhung thay doi so voi spec goc

### 3.1 Doi ten `features/add-to-cart` -> `features/save-to-library`

**Ly do:** `add-to-cart` la ngon ngu e-commerce, khong phan anh dung domain research platform. Hanh dong thuc te la luu report vao thu vien ca nhan.

```text
features/save-to-library/
  api/       <- saveReport(reportId), removeReport(reportId)
  ui/        <- SaveButton component
```

### 3.2 Them entities: `report`, `query`, `collection`

**Ly do:** Day la domain object cot loi cua research platform nhung dang thieu. Khong co entity thi widgets va features se tu dinh nghia types, dan den duplicate va drift.

```text
entities/report/     <- Report, ReportStatus, ReportMeta types + Supabase queries
entities/query/      <- Query, QueryStatus types + Supabase queries
entities/collection/ <- Collection, CollectionItem types + Supabase queries
```

### 3.3 Tach `shared/lib/supabase/` thanh `client.ts` + `server.ts`

**Ly do:** Supabase co hai client khac nhau cho browser va server. Gop chung de gay loi runtime khi dung server client trong Client Component.

```typescript
// shared/lib/supabase/server.ts
import { createServerClient } from "@supabase/ssr";

// shared/lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
```

### 3.4 Them `shared/config/routes.ts`

**Ly do:** Tranh magic string rai rac khap codebase. Khi doi route chi can sua mot cho.

```typescript
// shared/config/routes.ts
export const ROUTES = {
  home: (lang: string) => `/${lang}`,
  login: (lang: string) => `/${lang}/login`,
  dashboard: (lang: string) => `/${lang}/dashboard`,
  library: (lang: string) => `/${lang}/library`,
  report: (lang: string) => `/${lang}/report`,
  reportDetail: (lang: string, id: string) => `/${lang}/report/${id}`,
  agentTracking: (lang: string) => `/${lang}/agent-tracking`,
} as const;
```

---

## 4. Public API pattern (index.ts)

Moi slice chi export qua `index.ts`. Khong import truc tiep file noi bo cua slice khac.

```typescript
// widgets/dashboard/index.ts
export { DashboardQueryPanel } from "./ui/dashboard-query-panel";
export { DossierCard } from "./ui/dossier-card";

// entities/report/index.ts
export type { Report, ReportStatus, ReportMeta } from "./model/report.types";
export { getReport, listReports } from "./api/report.api";
export { ReportStatusBadge } from "./ui/report-status-badge";
```

```typescript
// Dung
import { DashboardQueryPanel } from "@/widgets/dashboard";
import type { Report } from "@/entities/report";

// Sai
import { DashboardQueryPanel } from "@/widgets/dashboard/ui/dashboard-query-panel";
```

---

## 5. Import rule matrix

| Layer | Duoc import tu | Khong duoc import tu |
| ----- | -------------- | -------------------- |
| `app/` | `pages/` `shared/` | `features/` `entities/` truc tiep |
| `pages/` | `widgets/` `features/` `shared/` | `app/` va `pages/` khac |
| `widgets/` | `features/` `entities/` `shared/` | `pages/` `app/` `widgets/` khac |
| `features/` | `entities/` `shared/` | moi layer tren |
| `entities/` | `shared/` | moi layer tren |
| `shared/` | - | khong import gi ca |

---

## 6. Checklist khi them slice moi

- [ ] Dat dung layer theo import rule matrix o tren
- [ ] Tao `index.ts` export public API ngay tu dau
- [ ] Khong dinh nghia types trung voi `entities/` da co
- [ ] Server Action nam trong `api/` cua slice, khong nam trong `ui/`
- [ ] Neu can Supabase: import tu `shared/lib/supabase/server` hoac `shared/lib/supabase/client`
- [ ] Route string dung `ROUTES.*` tu `shared/config/routes`
- [ ] i18n key them vao `shared/i18n/messages/en.json` va `vi.json` dong thoi
