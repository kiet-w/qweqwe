# Tai lieu Luong Xu Ly Frontend (Frontend Architecture & Flow)

Tai lieu nay mo ta luong routing, layout, widget composition, va nguyen tac cap nhat frontend theo trang thai code hien tai cua du an.

## 1. Tong quan kien truc

Du an dang dung:

- `Next.js App Router`
- `Feature-Sliced Design (FSD)`
- `Atomic Design` cho `shared/ui`
- `i18n` theo segment `src/app/[lang]`

Cau truc chinh:

- `src/app/`: root layout, route tree, global styles
- `src/shared/`: i18n, utils, UI atoms/molecules
- `src/widgets/`: page-level va shell-level composition

## 2. Luong routing va i18n

### A. Root flow

1. Request vao `src/app/layout.tsx`
2. Root layout cung cap `html`, `body`, fonts, va global styles
3. Route di vao `src/app/[lang]/layout.tsx`
4. `src/app/[lang]/layout.tsx` validate `lang` bang `isLocale`
5. Neu locale khong hop le thi `notFound()`

### B. Route phan vung hien tai

Co 2 nhom route chinh duoi `src/app/[lang]`:

- Public area:
  - `page.tsx`
  - `login/page.tsx`
- Research area:
  - `(research)/layout.tsx`
  - `(research)/dashboard/page.tsx`
  - `(research)/agent-tracking/page.tsx`
  - `(research)/report/page.tsx`
  - `(research)/library/page.tsx`

`(research)` la route group dung de ap shell chung ma khong thay doi URL public.

## 3. Shared research shell

### A. Vi tri

- Route shell: `src/app/[lang]/(research)/layout.tsx`
- Sidebar widget: `src/widgets/research-sidebar/`
- Content shell widget: `src/widgets/research-shell/`

### B. Trach nhiem

`(research)/layout.tsx`:

- nhan `lang` tu params
- validate locale
- load dictionary qua `getDictionary(lang)`
- compose `ResearchSidebar` va `ResearchShell`
- wrap toan bo research pages bang shared research chrome

`ResearchShell`:

- render vung content `children` cua tung page
- giu shell offset chung cho cac route research

`ResearchSidebar`:

- doc pathname hien tai
- tu dong active state theo route
- dung `ROUTES.*` de tao link research area thay vi hardcode path
- chua brand, CTA `New Inquiry`, primary nav, footer nav

### C. Tac dung kien truc

Shell khong nam trong tung page nua. Moi research page chi render page content cua no, con navigation root thuoc route-group layout.

## 4. Luong render theo page

### A. Landing

- `src/app/[lang]/page.tsx`
- render `LandingPage`
- khong dung research shell
- `LandingPage` compose:
  - `SiteHeader`
  - `HeroSection`
  - `LoginSection`
  - `MethodologySection`
  - `SiteFooter`

### B. Login

- `src/app/[lang]/login/page.tsx`
- render `LoginPage`
- khong dung research shell
- `LoginPage` hien tai khong giu mot file UI lon nua
- no compose cac section tu `src/widgets/login/ui/`:
  - `LoginHeroSection`
  - `LoginFeatureGridSection`
  - `LoginMethodologySection`
  - `LoginFinalCta`
  - `LoginSiteFooter`
- auth form van thuoc `src/features/auth/ui/login-page-form.tsx`

### C. Dashboard

- `src/app/[lang]/(research)/dashboard/page.tsx`
- load metadata va dictionary
- render `DashboardPage`
- `DashboardPage` chi chua dashboard content, khong render sidebar
- `DashboardPage` compose:
  - `PageIntro` tu `shared/ui`
  - `DashboardQueryPanel`
  - `DossierCard`

### D. Agent Tracking

- `src/app/[lang]/(research)/agent-tracking/page.tsx`
- load metadata va dictionary
- render `AgentTrackingPage`
- `AgentTrackingPage` chi chua 3 content panels:
  - execution plan
  - process feed
  - draft preview

### E. Report va Library

- `src/app/[lang]/(research)/report/page.tsx`
- `src/app/[lang]/(research)/library/page.tsx`
- da dung chung research shell
- co metadata va heading rieng trong dictionary
- `ReportPage` compose:
  - `ReportUtilityBar`
  - `TocNav` tu `shared/ui`
  - `ReportReadingWell`
- `LibraryPage` compose:
  - `LibraryToolbar`
  - `PageIntro` tu `shared/ui`
  - `FilterSelect` tu `shared/ui`
  - `LibraryReportCard`
  - `LibraryCollections`
  - `LibraryReadingList`

### F. Research Placeholder

- `src/widgets/research-placeholder/ui/research-placeholder-page.tsx`
- dung cho scaffold/empty research pages
- compose:
  - `PageIntro`
  - `SkeletonLines`

## 5. Data va dictionary flow

Dictionary duoc load o 2 muc:

- `src/app/[lang]/page.tsx`, `login/page.tsx`, va cac route page khac khi can metadata/page content
- `src/app/[lang]/(research)/layout.tsx` de cap du lieu nav chung cho shell

Sau refactor, `app` khong dua ca dictionary object lon vao moi widget nua. Thay vao do:

- `LandingPage` nhan subset: `nav`, `hero`, `login`, `methodology`, `footer`
- `LoginPage` nhan subset: `nav`, `loginPage`
- `ResearchSidebar` nhan subset: `nav`, `agentTracking`

Route string duoc tap trung o:

- `src/shared/config/routes.ts`
- `ResearchSidebar` dang dung `ROUTES.dashboard`, `ROUTES.agentTracking`, `ROUTES.report`, `ROUTES.library`, `ROUTES.settings`, `ROUTES.documentation`
- `ROUTES.reportDetail` duoc de san cho URL report theo id, va active-state cua sidebar da duoc viet de ho tro nested route nay

Dieu nay cho phep:

- shell co nav text dung locale
- page van giu metadata rieng
- khong can hardcode label nav trong widget
- reusable UI pieces van nhan text qua props, khong doc dictionary truc tiep neu khong can

## 6. Nguyen tac cap nhat sau refactor nay

1. Neu them mot research page moi, uu tien dat duoi `src/app/[lang]/(research)/...`
2. Khong copy sidebar vao page widget
3. Neu sua nav research, sua trong `ResearchSidebar`, `ROUTES`, va dictionary thay vi sua tung page
4. Neu page moi thuoc public area, khong dua vao `(research)` neu no khong can shared shell
5. Metadata van dat tai `page.tsx` cua tung route, khong dat trong shell
6. Neu chi la presentation pattern nho va route-agnostic, uu tien dua vao `src/shared/ui/`
7. Neu la section lon cua landing/login/research page, giu o `src/widgets/...`

## 7. Golden path khi them page research moi

1. Tao route moi duoi `src/app/[lang]/(research)/<segment>/page.tsx`
2. Neu can loading skeleton, them `loading.tsx` cung segment
3. Tao hoac tai su dung widget page-level trong `src/widgets/`
4. Them dictionary keys neu can title/description moi
5. Giu page widget chi lo page body, de shell chung xu ly navigation
6. Neu thay lap lai intro/badge/select/skeleton/toc/citation, uu tien tai su dung tu `shared/ui`
7. Neu page body qua lon, tach tiep thanh cac file nho trong cung widget slice

## 8. Shared UI flow

`shared/ui` hien tai duoc dung theo 2 cap:

- `atoms`: button, input, textarea, typography, icon
- `molecules`: search-field, section-heading, feature-blurb, page-intro, status-badge, filter-select, skeleton-lines, citation, toc-nav...

Nguyen tac:

- `atoms` va `molecules` chi nhan props
- khong biet route shell
- khong chua business interaction
- duoc page widget va landing section tai su dung de giam duplication

`QueryComposer` khong con nam trong `shared/ui`. No thuoc `features/research-query` vi day la business interaction, khong phai molecule trung tinh.

## 9. Ket luan

Frontend flow hien tai tach ro:

- root app shell
- locale validation layer
- research shell layer
- page-specific content widgets
- reusable presentation layer trong `shared/ui`

Huong nay giam duplication, giu routing dung chuan App Router, va cho phep mo rong them research pages ma khong phai lap lai navbar.
