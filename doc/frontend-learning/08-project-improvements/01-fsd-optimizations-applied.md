# 01 - FSD Optimizations Applied To This Project

File nay ghi lai nhung cai tien da duoc ap dung truc tiep vao project. Muc tieu khong phai de "khoe refactor", ma de ban thay:

- van de cu the la gi
- dong nao duoc them vao de giai quyet van de do
- tai sao dong do quan trong
- no tac dong den nhung file nao khac

## 1. Dua `QueryComposer` ve dung layer `features`

### Truoc day

`HeroSection` import:

```tsx
import { QueryComposer } from "@/shared/ui/molecules/query-composer";
```

Van de:

- `QueryComposer` khong phai UI trung tinh
- no dai dien cho hanh dong nghiep vu "tao truy van nghien cuu"
- dat no trong `shared/ui` de lam nguoi moi nham rang bat ky input box nao cung co the dung chung y het

### Sau khi toi uu

`HeroSection` import:

```tsx
import { QueryComposer } from "@/features/research-query";
```

Va file `src/shared/ui/molecules/query-composer.tsx` duoc bo.

### Tai sao can dong import moi nay

Vi dong nay noi ro boundary:

- day la business interaction
- owner cua no la `features/research-query`
- widget landing chi dang su dung feature, khong so huu logic cua feature

### Tac dong

- boundary FSD ro hon
- het duplicate `QueryComposer` giua `shared` va `features`
- sau nay neu them `useActionState`, `useOptimistic`, submit handler, validation, ban biet dat vao dau

## 2. Them route helpers cho `settings` va `documentation`

Trong `src/shared/config/routes.ts` da them:

```ts
settings: (lang: string) => `/${lang}/settings`,
documentation: (lang: string) => `/${lang}/documentation`,
```

### Tai sao can them 2 dong nay

Truoc day sidebar footer viet chuoi URL bang tay.

Van de:

- de sai chinh ta duong dan
- doi route phai sua nhieu file
- khong dong nhat voi cac route da dung `ROUTES`

### Tac dong

- `ResearchSidebar` co the dung route config dong bo voi `dashboard`, `library`, `report`
- khi doi URL footer, sua 1 noi

## 3. Them helper `isActivePath`

Trong `src/widgets/research-sidebar/ui/research-sidebar.tsx` da them:

```ts
function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
```

### Tai sao can them dong nay

Truoc day active menu check bang:

```ts
pathname === item.href
```

Van de:

- dung voi route phang
- sai voi nested route tuong lai, vi du `/en/report/123`

### Tac dong

- sidebar van active dung khi sau nay ban them detail page
- `ROUTES.reportDetail` tro nen co y nghia thuc te hon

## 4. Thu hep dictionary props de giam coupling

Trong `src/shared/i18n/get-dictionary.ts` da them:

```ts
export type ResearchSidebarDictionary = Pick<LandingDictionary, "agentTracking" | "nav">;
export type AgentTrackingDictionary = LandingDictionary["agentTracking"];
export type DashboardDictionary = LandingDictionary["dashboard"];
export type ReportPageDictionary = LandingDictionary["reportPage"];
export type LibraryPageDictionary = LandingDictionary["libraryPage"];
export type LandingPageDictionary = Pick<
  LandingDictionary,
  "nav" | "hero" | "login" | "methodology" | "footer"
>;
export type LoginPageDictionary = Pick<LandingDictionary, "nav" | "loginPage">;
```

### Tai sao can cac dong type nay

Truoc day nhieu widget nhan ca `LandingDictionary`.

Van de:

- props qua rong
- widget thay nhu co quyen dung moi key trong dictionary
- doi mot phan khong lien quan cung co the lam file khac bi phu thuoc vo ly

### Sau khi toi uu

Vi du:

- `DashboardPage` chi nhan `dashboard`
- `LibraryPage` chi nhan `libraryPage`
- `ReportPage` chi nhan `reportPage`
- `AgentTrackingPage` chi nhan `agentTracking`
- `LandingPage` chi nhan `nav`, `hero`, `login`, `methodology`, `footer`
- `LoginPage` chi nhan `nav`, `loginPage`

### Tac dong

- props ro nghia hon
- giam blast radius khi dictionary doi
- de test va de doc hon

### Buoc tiep theo thong minh

Khong chi type widget duoc thu hep. `app` cung pass subset ro rang:

```tsx
return (
  <LoginPage
    locale={lang}
    dictionary={{
      nav: dict.nav,
      loginPage: dict.loginPage,
    }}
  />
);
```

Tai sao dong `dictionary={{ ... }}` nay dang gia:

- no bien boundary thanh thu hien ro rang trong code, khong chi nam o type
- nguoi moi nhin vao page se thay widget can dung cai gi
- khi widget doi nhu cau, page la noi bat buoc cap nhat, nen coupling duoc kiem soat

## 5. Thay hardcoded route bang `ROUTES`

Mot loat file da duoc sua:

- `src/features/auth/ui/login-page-form.tsx`
- `src/features/auth/ui/login-form.tsx`
- `src/widgets/landing/ui/landing-page.tsx`
- `src/widgets/landing/ui/site-header/site-header.tsx`
- `src/widgets/login/ui/login-site-footer/login-site-footer.tsx`

Vi du:

```tsx
const loginHref = ROUTES.login(locale);
router.push(ROUTES.dashboard(locale));
```

### Tai sao can dong nay

Van de cua chuoi viet tay:

- lap lai
- kho tim het khi doi route
- nguoi moi hay copy paste sai

### Tac dong

- route locale duoc centralize that su
- doc code nhanh hon vi thay ngay "day la login route" thay vi phai tu parse chuoi template

## 6. Don dep boundary cho `widgets/login`

Truoc day `LoginPage` trong `widgets/login` import section tu `widgets/landing/ui/...`.

Van de:

- do la deep import giua 2 widget cung layer
- `widgets/login` vo tinh phu thuoc vao cau truc noi bo cua `widgets/landing`
- chi can doi ten folder trong `landing` la `login` co the vo theo

Sau khi toi uu:

- `login-hero-section`
- `login-feature-grid-section`
- `login-methodology-section`
- `login-final-cta`
- `login-site-footer`

duoc dua ve `src/widgets/login/ui/`.

### Tai sao can cac dong import moi

Trong `src/widgets/login/ui/login-page.tsx`:

```tsx
import { LoginFeatureGridSection } from "../login-feature-grid-section";
import { LoginFinalCta } from "../login-final-cta";
```

Y nghia:

- `LoginPage` dang dung section thuoc cung widget slice
- owner cua login page va owner cua login sections da trung nhau
- refactor noi bo cua `widgets/landing` khong con anh huong login page

### Tac dong

- boundary giua widget ro hon
- giam nguy co same-layer coupling
- doc project de hon cho nguoi moi vi ten folder noi len ai so huu cai gi

## 7. Bai hoc FSD rut ra tu dot toi uu nay

- UI dung chung that su moi nen vao `shared/ui`
- component nghiep vu nen dat o `features` du no co "ve ngoai" giong UI chung
- page/widget khong nen om object props qua rong neu chi dung 1 phan nho
- route string nen di qua `ROUTES`
- active navigation nen nghi cho nested route som, khong chi cho route hien tai
- widget cung layer khong nen deep import noi bo cua nhau

## 8. Neu ban muon toi uu tiep

- Dua them cac text hardcode cua dashboard vao dictionary de locale `vi` khong bi lai Anh - Viet
- Tao them route/page that su cho `reportDetail`
- Tach them type cho `nav`, `hero`, `loginSection` neu muon props con nho hon nua
- Viet test cho `ResearchSidebar` de check active state voi nested route
