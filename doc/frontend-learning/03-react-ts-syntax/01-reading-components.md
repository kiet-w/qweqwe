# 01 - Reading Components Line By Line

Muc tieu file nay la day ban cach doc mot component React + TypeScript trong project nay.

## Vi du 1: `LandingPage`

File: `src/widgets/landing/ui/landing-page.tsx`

```tsx
type LandingPageProps = {
  locale: Locale;
  dictionary: LandingPageDictionary;
};
```

Y nghia:

- component nay yeu cau 2 props
- `locale` la string duoc gioi han boi type `Locale`
- `dictionary` khong con la object lon cua ca app
- no la subset chi gom nhung nhanh ma `LandingPage` that su can

Tac dong:

- neu `dictionary` thieu key, component se loi type ngay o boundary
- neu ban doi `Locale`, nhung noi dung `/${locale}/login` co the bi anh huong
- neu ban doi phan `agentTracking` hay `dashboard`, `LandingPage` se khong bi keo vao coupling khong can thiet

## Destructuring props

```tsx
export function LandingPage({ locale, dictionary }: LandingPageProps) {
```

Y nghia:

- lay truc tiep prop ra dung
- thay vi viet `props.locale`, `props.dictionary`

## Tao bien tam

```tsx
const loginHref = ROUTES.login(locale);
```

Vi sao nen lam:

- code de doc hon
- tranh lap chuoi
- URL duoc tap trung trong `ROUTES`

## JSX compose

```tsx
<SiteHeader ... />
<HeroSection ... />
<LoginSection ... />
<MethodologySection ... />
<SiteFooter ... />
```

Y nghia:

- page lon duoc ghep tu nhieu component nho
- moi component co mot trach nhiem ro

## Vi du 2: map mang

Trong `ResearchSidebar`:

```tsx
{navItems.map((item) => (
  <NavListItem key={item.href} ... />
))}
```

Y nghia:

- lap qua mang de render nhieu item
- `key` giup React nhan dien tung item

Neu bo `key`:

- React canh bao
- update list co the khong on dinh

## Vi du 3: conditional render

Trong `PageIntro`:

```tsx
{eyebrow ? <p>...</p> : null}
```

Y nghia:

- co `eyebrow` thi moi render
- khong co thi khong hien gi

## Tips

- `type XxxProps` thuong nam tren component
- `const` dung cho bien khong doi
- `map` dung khi render list
- JSX trong `return (...)` la UI

## Huong mo rong

- Tu chon 1 component khac trong repo va phan tich theo 6 cau hoi:
- no nhan prop gi
- no co local variable nao
- no render nhung component nao
- no co map hay condition khong
- no import tu dau
- no co biet route/business khong
