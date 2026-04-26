# 01 - Layers And Responsibilities

Project nay dung kieu chia layer rat quan trong:

- `app`
- `widgets`
- `features`
- `entities`
- `shared`

Neu ban hieu phan nay, ban se biet "viet code moi vao dau".

## 1. `app`

Day la noi:

- dinh nghia route
- dat layout
- dat metadata
- validate params

Vi du:

- `src/app/[lang]/page.tsx`
- `src/app/[lang]/(research)/layout.tsx`

Rule:

- `app` khong nen chua UI lon chi tiet
- `app` nen compose widget

## 2. `widgets`

Day la noi:

- ghep nhieu `shared/ui`
- ghep layout section
- ghep page body lon

Vi du:

- `src/widgets/landing/ui/landing-page.tsx`
- `src/widgets/login/ui/login-page.tsx`
- `src/widgets/research-sidebar/ui/research-sidebar.tsx`
- `src/widgets/report/ui/report-page.tsx`

Rule:

- widget duoc phep biet page flow
- mot so widget duoc phep biet route, nhu sidebar
- moi widget nen so huu section cua chinh page no, tranh deep import `ui/...` tu widget khac

## 3. `features`

Day la noi:

- dat interaction
- dat logic hanh dong cua nguoi dung

Vi du:

- `src/features/auth/ui/login-page-form.tsx`
- `src/features/research-query/ui/query-composer.tsx`

Rule:

- feature la "nguoi dung lam gi"
- widget la "giao dien lon duoc lap the nao"
- component co ve "giong UI chung" nhung gan chat voi mot hanh dong nghiep vu van nen o `features`

## 4. `entities`

Day la noi:

- type domain
- model domain
- API domain

Vi du:

- `src/entities/report/model/report.types.ts`
- `src/entities/query/model/query.types.ts`

Rule:

- entity la "du lieu la gi"
- feature la "nguoi dung thao tac voi du lieu do ra sao"

## 5. `shared`

Day la noi:

- button
- input
- helper `cn`
- routes
- i18n

Rule:

- shared khong nen biet page cu the
- shared nhan props va render

## Mot cong thuc de nho

- `app` = vao duong nao
- `widgets` = bo cuc lon gi
- `features` = user lam gi
- `entities` = du lieu la gi
- `shared` = do nghe dung chung

## Tac dong neu dat sai layer

Neu ban dat route logic vao `shared/ui`:

- component se kho tai su dung
- kho test
- import bi nguoc layer

Neu ban dat het UI vao `app`:

- page dai
- kho tach
- kho maintain

## Huong mo rong

- Khi them domain moi nhu `workspace`, tao `src/entities/workspace/`
- Khi them hanh dong moi nhu `save-search`, tao `src/features/save-search/`
- Khi them page body moi, tao `src/widgets/<page-name>/`
