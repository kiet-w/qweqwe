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
  - `(research)/agentTracking/page.tsx`
  - `(research)/report/page.tsx`
  - `(research)/library/page.tsx`

`(research)` la route group dung de ap shell chung ma khong thay doi URL public.

## 3. Shared research shell

### A. Vi tri

- Route shell: `src/app/[lang]/(research)/layout.tsx`
- Widget shell: `src/widgets/research-shell/`

### B. Trach nhiem

`(research)/layout.tsx`:

- nhan `lang` tu params
- validate locale
- load dictionary qua `getDictionary(lang)`
- wrap toan bo research pages bang `ResearchShell`

`ResearchShell`:

- render `ResearchSidebar`
- render `children` cua tung page
- giu shell chung cho cac route research

`ResearchSidebar`:

- doc pathname hien tai
- tu dong active state theo route
- chua brand, CTA `New Inquiry`, primary nav, footer nav

### C. Tac dung kien truc

Shell khong nam trong tung page nua. Moi research page chi render page content cua no, con navigation root thuoc route-group layout.

## 4. Luong render theo page

### A. Landing

- `src/app/[lang]/page.tsx`
- render `LandingPage`
- khong dung research shell

### B. Login

- `src/app/[lang]/login/page.tsx`
- render `LoginPage`
- khong dung research shell

### C. Dashboard

- `src/app/[lang]/(research)/dashboard/page.tsx`
- load metadata va dictionary
- render `DashboardPage`
- `DashboardPage` chi chua dashboard content, khong render sidebar

### D. Agent Tracking

- `src/app/[lang]/(research)/agentTracking/page.tsx`
- load metadata va dictionary
- render `AgentTrackingPage`
- `AgentTrackingPage` chi chua 3 content panels:
  - execution plan
  - process feed
  - draft preview

### E. Report va Library

- `src/app/[lang]/(research)/report/page.tsx`
- `src/app/[lang]/(research)/library/page.tsx`
- hien tai la scaffold pages
- da dung chung research shell
- co metadata va heading rieng trong dictionary

## 5. Data va dictionary flow

Dictionary duoc load o 2 muc:

- `src/app/[lang]/page.tsx`, `login/page.tsx`, va cac route page khac khi can metadata/page content
- `src/app/[lang]/(research)/layout.tsx` de cap du lieu nav chung cho shell

Dieu nay cho phep:

- shell co nav text dung locale
- page van giu metadata rieng
- khong can hardcode label nav trong widget

## 6. Nguyen tac cap nhat sau refactor nay

1. Neu them mot research page moi, uu tien dat duoi `src/app/[lang]/(research)/...`
2. Khong copy sidebar vao page widget
3. Neu sua nav research, sua trong `ResearchSidebar` va dictionary thay vi sua tung page
4. Neu page moi thuoc public area, khong dua vao `(research)` neu no khong can shared shell
5. Metadata van dat tai `page.tsx` cua tung route, khong dat trong shell

## 7. Golden path khi them page research moi

1. Tao route moi duoi `src/app/[lang]/(research)/<segment>/page.tsx`
2. Neu can loading skeleton, them `loading.tsx` cung segment
3. Tao hoac tai su dung widget page-level trong `src/widgets/`
4. Them dictionary keys neu can title/description moi
5. Giu page widget chi lo page body, de shell chung xu ly navigation

## 8. Ket luan

Frontend flow hien tai tach ro:

- root app shell
- locale validation layer
- research shell layer
- page-specific content widgets

Huong nay giam duplication, giu routing dung chuan App Router, va cho phep mo rong them research pages ma khong phai lap lai navbar.
