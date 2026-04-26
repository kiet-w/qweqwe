# 02 - Metadata, Params, Route Groups

File nen xem:

- `src/app/[lang]/page.tsx`
- `src/app/[lang]/(research)/dashboard/page.tsx`
- `src/app/[lang]/(research)/agent-tracking/page.tsx`

## `generateMetadata` de lam gi

Vi du:

```tsx
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}
```

Y nghia:

- page co the co title/description rieng
- metadata duoc tao dua theo locale
- SEO va title tren tab se dung ngôn ngu

Tac dong:

- doi key dictionary -> metadata co the loi
- doi cau truc locale -> metadata phai cap nhat theo

## `params` tai sao la Promise

Project nay dang theo convention moi:

```tsx
params: Promise<{ lang: string }>;
```

Ban phai:

```tsx
const { lang } = await params;
```

Neu ban quen `await`, TypeScript se bao loi hoac logic sai.

## Route group `(research)` co loi ich gi

- gom nhung route cung shell
- khong lam URL dai hon
- giu layout code gon

Neu khong co route group nay, ban se phai:

- copy sidebar vao tung page
- hoac tao layout theo cach roi rac

## `notFound()` tac dung nhu the nao

Khi locale sai:

```tsx
if (!isLocale(lang)) {
  notFound();
}
```

Y nghia:

- dung request ngay tai boundary
- tranh render page voi data vo nghia

## Tips

- `generateMetadata` la noi dat SEO/page title
- `page.tsx` la noi render page
- `layout.tsx` la noi dat shell dung chung
- `loading.tsx` la noi dat loading state cua route

## Huong mo rong

- Them metadata rieng cho tung research page dua tren dictionary
- Them `generateStaticParams` cho route dong moi
- Them `not-found.tsx` de giao dien 404 dep hon
