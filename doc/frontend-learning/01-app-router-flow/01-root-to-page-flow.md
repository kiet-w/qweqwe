# 01 - Root To Page Flow

File quan trong nhat de hieu project nay la:

- `src/app/layout.tsx`
- `src/app/[lang]/layout.tsx`
- `src/app/[lang]/page.tsx`
- `src/app/[lang]/(research)/layout.tsx`

## Luong chay tong quat

1. Request vao `src/app/layout.tsx`
2. Sau do vao `src/app/[lang]/layout.tsx`
3. Neu route nam trong `(research)` thi di tiep qua `src/app/[lang]/(research)/layout.tsx`
4. Cuoi cung moi toi `page.tsx` cua route cu the

## 1. Root layout lam gi

Trong `src/app/layout.tsx`:

```tsx
const geist = Geist({ ... });
export default function RootLayout({ children }) {
  return (
    <html className={cn(...fonts)}>
      <body>{children}</body>
    </html>
  );
}
```

Y nghia:

- setup font toan app
- setup `html` va `body`
- nhan `children` la toan bo phan con ben trong

Tac dong:

- doi class tai day anh huong moi page
- doi metadata tai day anh huong title mac dinh cua app

## 2. Locale layout lam gi

Trong `src/app/[lang]/layout.tsx`:

```tsx
const { lang } = await params;
if (!isLocale(lang)) {
  notFound();
}
return children;
```

Y nghia:

- route co segment dong `[lang]`
- Next dua `params` vao layout/page
- layout nay validate locale truoc khi vao page that

Tai sao thong minh:

- validate 1 lan o boundary
- page ben trong co the tin `lang` hop le

## 3. Page lam gi

Trong `src/app/[lang]/page.tsx`:

```tsx
const dict = await getDictionary(lang);
return (
  <LandingPage
    locale={lang}
    dictionary={{
      nav: dict.nav,
      hero: dict.hero,
      login: dict.login,
      methodology: dict.methodology,
      footer: dict.footer,
    }}
  />
);
```

Y nghia:

- page la noi ket noi route voi widget
- page lo lay data can thiet
- widget lo giao dien
- page co the cat nho data truoc khi dua vao widget de boundary ro hon

## 4. Research route group lam gi

Trong `src/app/[lang]/(research)/layout.tsx`:

```tsx
<ResearchSidebar
  locale={lang}
  dictionary={{
    nav: dictionary.nav,
    agentTracking: dictionary.agentTracking,
  }}
/>
<ResearchShell>{children}</ResearchShell>
```

Y nghia:

- route group `(research)` khong xuat hien trong URL
- nhung no cho phep nhieu page dung chung 1 shell
- page dashboard, library, report, agent-tracking deu duoc wrap cung kieu
- layout chi dua phan nav can dung cho sidebar, khong dua ca dictionary object

Tac dong:

- sua sidebar 1 cho, tat ca research pages doi theo
- sua shell spacing 1 cho, tat ca research pages doi theo

## Tips

- Khi ban khong thay URL co `(research)`, do la binh thuong. Day la route group, khong phai segment xuat hien tren trinh duyet.
- Layout dung cho UI dung chung.
- Page dung cho noi dung rieng cua route do.

## Huong mo rong

- Them `src/app/[lang]/(research)/settings/page.tsx` neu muon them page moi trong research area
- Them `loading.tsx` ben canh `page.tsx` neu muon co skeleton khi page loading
