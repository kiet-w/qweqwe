# Architecture: Atomic FSD

Project nay ket hop `Feature-Sliced Design (FSD)` de kiem soat dependency va `Atomic Design` de to chuc UI.

## 1. Layer mapping hien tai

### `app`

- Chua route tree, layouts, metadata wiring, global styles
- Duoc phep compose shell theo segment route
- Vi du:
  - `src/app/[lang]/layout.tsx`
  - `src/app/[lang]/(research)/layout.tsx`

### `shared`

- Chua reusable UI atoms/molecules, utils, i18n
- Khong chua business flow theo page hay route
- Vi du:
  - `src/shared/ui/atoms/`
  - `src/shared/ui/molecules/`
  - `src/shared/i18n/`

### `widgets`

- Chua page-level va shell-level composition
- Duoc phep lap ghep tu `shared/ui` de thanh page section hoac page body lon
- Vi du:
  - `src/widgets/research-shell/`
  - `src/widgets/dashboard/`
  - `src/widgets/login/`
  - `src/widgets/library/`
  - `src/widgets/report/`
  - `src/widgets/landing/`

### `features`

- Danh cho interaction/business actions
- Vi du hien tai: `src/features/auth/`

### `entities`

- Danh cho domain-centric data UI va logic
- Hien chua la tam diem cua refactor nay

## 2. Architecture decisions sau refactor

### A. Research shell va research sidebar van thuoc `widgets`, khong dua vao `shared/ui`

`ResearchSidebar` va `ResearchShell`:

- biet route structure
- phu thuoc locale path
- xac dinh active state theo pathname
- compose research-area navigation

Vi vay chung la shell/widget logic, khong phai atom/molecule thuan UI.

Sau khi tach sidebar:

- `src/widgets/research-sidebar/` giu navigation widget rieng
- `src/widgets/research-shell/` chi giu content shell va offset cho research area
- `src/app/[lang]/(research)/layout.tsx` la noi compose 2 widget nay

### B. Shared shell dat o nested layout

Shell chung dat o:

- `src/app/[lang]/(research)/layout.tsx`

Ly do:

- dung cach App Router chia se UI qua nested layout
- khong lap lai markup sidebar
- giu duoc state/layout qua navigation

### C. Page widget chi compose page body

Sau refactor:

- `DashboardPage` compose `PageIntro`, `DashboardQueryPanel`, `DossierCard`
- `LibraryPage` compose `LibraryToolbar`, `LibraryReportCard`, `LibraryCollections`, `LibraryReadingList`
- `ReportPage` compose `ReportUtilityBar`, `TocNav`, `ReportReadingWell`
- `ResearchPlaceholderPage` compose `PageIntro` va `SkeletonLines`

Rule: page widget khong gianh trach nhiem cua route shell.

### D. Moi widget page nen so huu section cua chinh no

Hien tai:

- `widgets/landing` so huu cac section cua public landing page:
  - `hero-section`
  - `login-section`
  - `methodology-section`
  - `site-header`
  - `site-footer`
- `widgets/login` so huu cac section cua login page:
  - `login-hero-section`
  - `login-feature-grid-section`
  - `login-methodology-section`
  - `login-final-cta`
  - `login-site-footer`

Ly do:

- `widgets/login` khong nen deep import `ui/...` tu `widgets/landing`
- neu 2 page khac nhau dung chung section, phai xac dinh lai owner that su hoac nang no len layer phu hop
- ownership ro rang giup refactor an toan hon

### E. Shared molecules moi chi giu presentation

Nhung component moi dua xuong `shared/ui/molecules` gom:

- `page-intro`
- `status-badge`
- `filter-select`
- `skeleton-lines`
- `citation`
- `toc-nav`

Rule: chi dua xuong `shared/ui` neu component khong biet business area, route group, hay page content flow.

## 3. Public API rules

Moi slice trong `widgets`, `features`, `entities` phai expose bang `index.ts`.

Ap dung cho cac module dang su dung:

- `src/widgets/research-shell/index.ts`
- `src/widgets/research-sidebar/index.ts`
- `src/widgets/research-placeholder/index.ts`
- `src/widgets/dashboard/index.ts`
- `src/widgets/library/index.ts`
- `src/widgets/login/index.ts`
- `src/widgets/report/index.ts`
- `src/widgets/landing/index.ts`

Layer ben tren nen uu tien import qua public API. Deep import vao `ui/...` chi dung khi can noi bo composition trong cung mot slice.

## 4. Logic distribution hien tai

| Logic | Layer dung |
| :--- | :--- |
| Route grouping, locale layout, shell boundary | `app` |
| Route constants cho URL app | `shared/config/routes.ts` |
| Research sidebar navigation | `widgets/research-sidebar` |
| Research content shell composition | `widgets/research-shell` |
| Landing page composition | `widgets/landing` |
| Login page composition | `widgets/login` |
| Research page body composition | `widgets/<page>` |
| Reusable intro, badge, select, skeleton, toc, citation | `shared/ui` |
| Dictionary typing va localized content | `shared/i18n` |
| Auth form interaction | `features/auth` |

## 5. Quy tac thiet ke va dependency

1. `shared/ui` phai giu pure, khong biet route business area.
2. `widgets` duoc compose tu `shared`, nhung `shared` khong duoc import nguoc `widgets`.
3. Layout dung chung theo route phai dat trong `app`, khong dat trong page widget.
4. Neu mot component can biet pathname, locale route, hay active navigation, no thuoc shell/widget layer.
5. Route string dung chung nen tap trung trong `shared/config/routes.ts`, khong rai rac trong widget/page.
6. Metadata route van la trach nhiem cua `page.tsx`, ngay ca khi page da duoc wrap boi shell chung.
7. Section lon theo landing/login/research page nen o `widgets`, khong nham lan voi `shared/ui`.
8. `shared/ui` chi nhan props va render presentation state, khong chua business rule.
9. `app` nen pass dictionary subset cho widget thay vi dua nguyen object lon neu widget chi can mot phan.
10. Widget khong nen deep import `ui/...` cua widget khac; neu gap truong hop do, can sua lai owner.

## 6. Golden path mo rong

Neu them trang moi:

1. Xac dinh no thuoc public area hay research area
2. Neu thuoc research area, dat route duoi `src/app/[lang]/(research)/`
3. Tao widget page body rieng
4. Tai su dung `ResearchShell` qua nested layout
5. Tach cac pattern presentation lap lai xuong `shared/ui` neu chung route-agnostic
6. Giu cac section lon, content-rich trong widget slice phu hop

## 7. Anti-pattern can tranh

- Copy sidebar vao nhieu page
- Hardcode route research trong nhieu component thay vi dung `ROUTES`
- Dua active-route logic vao `shared/ui`
- De page widget vua lam content vua lam route shell
- Hardcode nav labels trong component thay vi lay tu dictionary
- Dat route research moi ben ngoai `(research)` roi lap lai layout
- Dua section lon cua landing/login xuong `shared/ui` du chi de giam so file
- Deep import widget khac slice khi public API da du
- De widget A so huu page nhung lai lay section noi bo tu `ui/...` cua widget B

## 8. Ket luan

Architecture hien tai chia ro 4 muc trach nhiem:

- `app` lo route va layout boundary
- `widgets` lo shell, section, va page composition
- `shared` lo primitive/presentation va i18n
- `features` lo interaction nghiep vu cu the

Refactor nay lam ro ranh gioi giua reusable presentation va page composition: thu nho file, de doc hon, nhung van dung layer.

