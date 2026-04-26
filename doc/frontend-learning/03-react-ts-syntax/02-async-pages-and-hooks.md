# 02 - Async Pages, Hooks, Client vs Server

Project nay cho ban hoc mot diem rat hay: khong phai component nao cung giong nhau.

## 1. Async page la gi

Trong `src/app/[lang]/page.tsx`:

```tsx
export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <LandingPage locale={lang} dictionary={dict} />;
}
```

Y nghia:

- page nay la Server Component
- duoc phep `await`
- load data truoc roi moi render UI

## 2. `use client` la gi

Trong `src/widgets/research-sidebar/ui/research-sidebar.tsx`:

```tsx
"use client";
```

Y nghia:

- file nay chay o phia client
- duoc dung hook nhu `usePathname`

Tai sao sidebar can client:

- vi no can biet route hien tai de active menu

## 3. `usePathname`

```tsx
const pathname = usePathname();
```

Y nghia:

- lay URL hien tai
- so sanh voi `item.href` de biet menu nao active

Tac dong:

- doi `ROUTES` co the doi logic active menu

## 4. `useTransition`

Trong `src/features/auth/ui/login-page-form.tsx`:

```tsx
const [isPending, startTransition] = useTransition();
```

Y nghia:

- danh dau 1 update la khong khan cap
- cho phep UI biet dang pending

Vi du:

```tsx
startTransition(() => {
  router.push(`/${locale}/dashboard`);
});
```

Y nghia:

- chuyen route
- trong luc cho, button co the disable bang `isPending`

## 5. `useRouter`

```tsx
const router = useRouter();
router.push(...);
```

Y nghia:

- dieu huong o client side

## 6. Khi nao dung server, khi nao dung client

Dung server component khi:

- can `await` data
- can metadata
- khong can browser hook

Dung client component khi:

- can `useState`
- can `usePathname`
- can event handler nhu submit, click, input

## Tips

- thay `"use client"` o dong dau => danh dau file nay la client
- thay `async function Page` => danh dau la server page
- thay hook `use...` => thuong la client component

## Huong mo rong

- Thu doi login form thanh goi Server Action that su
- Thu them loading state cho query form bang `useTransition`
- Thu them active state phuc tap hon cho sidebar
