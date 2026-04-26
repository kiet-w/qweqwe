# 02 - Login Widget Boundary Va Dictionary Subsets

File nay tap trung vao 2 cai tien nho nhung rat "dat gia" cho nguoi moi hoc FSD:

- bo deep import giua 2 widget cung layer
- pass dictionary subset thay vi dua nguyen object lon

## 1. Van de cu the la gi

Truoc day `src/widgets/login/ui/login-page.tsx`:

- import section tu `@/widgets/landing/ui/...`
- nhan `dictionary: LandingDictionary`

2 dau hieu nay cho thay:

- owner cua login page dang mo ho
- widget login biet qua nhieu ve noi bo cua widget landing
- component nhin nhu co the dung bat ky key nao trong dictionary, du that ra no khong can

## 2. Import moi co y nghia gi

Sau refactor:

```tsx
import { LoginHeroSection } from "../login-hero-section";
import { LoginMethodologySection } from "../login-methodology-section";
```

Y nghia tung dong:

- `../login-hero-section` cho biet section nay thuoc cung widget `login`
- import tuong doi noi bo co nghia la dang compose ben trong cung slice
- file `login-page.tsx` khong con phu thuoc vao `widgets/landing`

Tac dong:

- doi ten hoac doi folder trong `widgets/landing` se khong lam vo `widgets/login`
- boundary cung layer ro hon
- nguoi doc code thay ngay login page tu so huu cac section nao

## 3. Type moi co y nghia gi

Trong `src/shared/i18n/get-dictionary.ts`:

```ts
export type LoginPageDictionary = Pick<LandingDictionary, "nav" | "loginPage">;
```

Y nghia:

- `Pick` lay ra dung 2 nhanh can cho login page
- login page khong con "co quyen" truy cap toan bo dictionary nua
- type nay la hop dong giua route page va widget page

Tac dong:

- neu ai do co gang dung `dictionary.dashboard` trong `LoginPage`, TypeScript se chan
- widget de test hon vi mock data nho hon
- doi dictionary o khu vuc khac se it gay anh huong day chuyen

## 4. Tai sao `dictionary={{ ... }}` trong `page.tsx` lai hay

Trong `src/app/[lang]/login/page.tsx`:

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

Y nghia:

- route page la noi cat va dua data vao widget
- widget nhan dung du lieu can thiet, khong hon
- nguoi moi co the doc ngay route nay dang cap data nao cho login page

Day la diem rat hay trong codebase vi:

- boundary khong chi dung o level type
- boundary xuat hien ngay trong JSX, de doc bang mat thuong
- khi can them du lieu moi cho login page, ban se biet chinh xac can sua o dau

## 5. Mo rong tu day

- Ban co the ap dung cung kieu cho `LandingPage` bang cach tach nho hon nua thanh `NavDictionary`, `HeroDictionary`, `FooterDictionary`
- Ban co the viet lint rule de canh bao deep import vao `ui/...` cua widget khac
- Ban co the viet test cho `LoginPage` voi mock `LoginPageDictionary` rat gon, khong can fake ca `LandingDictionary`
