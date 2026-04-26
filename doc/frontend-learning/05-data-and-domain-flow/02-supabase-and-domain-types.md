# 02 - Supabase And Domain Types

Project nay da tach Supabase theo dung huong: client va server rieng.

## 1. Browser client

File: `src/shared/lib/supabase/client.ts`

```ts
import { createBrowserClient } from "@supabase/ssr";
```

Y nghia:

- dung cho Client Component
- chay tren browser

## 2. Server client

File: `src/shared/lib/supabase/server.ts`

```ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
```

Y nghia:

- dung cho Server Component hoac Server Action
- co the doc/ghi cookie session

Tai sao phai tach:

- tranh dung nham environment
- giam bug runtime

## 3. Entities type la cot song cua domain

File: `src/entities/report/model/report.types.ts`

```ts
export interface Report {
  id: string;
  title: string;
  content: string;
  status: ReportStatus;
}
```

Y nghia:

- day la hinh dang du lieu report
- cac layer khac nen dua vao day

Tac dong:

- doi type `Report` co the anh huong widget, feature, API

## 4. Cach nghi dung

- `entities` = hop dong du lieu
- `features` = thao tac len hop dong do
- `widgets` = hien thi hop dong do

## 5. Tips

- Khong nen tu viet type report moi o moi noi
- Neu DB doi schema, cap nhat `entities` truoc
- Sau do de TypeScript chi ra noi nao can sua

## Huong mo rong

- Them `api/` that cho `report`, `query`, `collection`
- Them Zod schema de validate data vao/ra
- Them mapping layer tu row Supabase sang entity type
