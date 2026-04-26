# 01 - i18n, Routes, Dictionary

Day la mot trong nhung phan gia tri nhat cua project nay.

## 1. Locale duoc dinh nghia o dau

File: `src/shared/i18n/config.ts`

```ts
export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];
```

Y nghia:

- locale hop le chi la `en` hoac `vi`
- TypeScript se biet va giup check type

## 2. `isLocale`

```ts
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
```

Y nghia:

- day la type guard
- sau khi check xong, TypeScript hieu `value` la `Locale`

## 3. Dictionary la gi

File: `src/shared/i18n/get-dictionary.ts`

Project dang dung object dictionary lon de chua text.

Loi ich:

- khong hardcode text khap component
- doi ngon ngu de hon
- SEO title/description cung co the theo locale

## 4. `ROUTES` de lam gi

File: `src/shared/config/routes.ts`

```ts
export const ROUTES = {
  dashboard: (lang: string) => `/${lang}/dashboard`,
  report: (lang: string) => `/${lang}/report`,
  reportDetail: (lang: string, id: string) => `/${lang}/report/${id}`,
};
```

Y nghia:

- route string duoc tap trung 1 noi
- tranh hardcode rải rac

Tac dong:

- doi URL 1 cho, nhieu component duoc cap nhat theo

## 5. Mot diem can de y

Trong code hien tai:

- key dictionary la `agentTracking`
- route URL la `agent-tracking`

Dieu nay khong sai.

Y nghia:

- key object va URL khong bat buoc phai giong 100%
- nhung ban can nhat quan va hieu cai nao la domain key, cai nao la route path

## Tips

- Text hien tren UI -> uu tien dat vao dictionary
- URL -> uu tien dat vao `ROUTES`
- Dung `Locale` type khi co the

## Huong mo rong

- Them locale moi nhu `ja` hoac `fr`
- Tach dictionary type thanh nhieu phan neu object qua lon
- Them helper route cho settings, profile, collections
