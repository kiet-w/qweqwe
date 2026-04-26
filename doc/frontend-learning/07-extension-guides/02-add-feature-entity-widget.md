# 02 - Add Feature, Entity, Widget

File nay day ban cach them code moi ma van giu duoc project dep.

## Khi nao tao `entity`

Tao `entity` khi ban co domain object ro rang.

Vi du:

- workspace
- citation
- task

Cau truc goi y:

```text
src/entities/workspace/
  index.ts
  model/workspace.types.ts
  api/workspace.api.ts
  ui/workspace-badge.tsx
```

## Khi nao tao `feature`

Tao `feature` khi ban co hanh dong cua user.

Vi du:

- save-workspace
- export-report
- invite-member

Cau truc goi y:

```text
src/features/export-report/
  index.ts
  ui/export-report-button.tsx
```

## Khi nao tao `widget`

Tao `widget` khi ban co block UI lon hoac page body lon.

Vi du:

- dashboard panel
- report page body
- landing section

## Cong thuc ra quyet dinh nhanh

- day la du lieu? -> `entities`
- day la hanh dong? -> `features`
- day la bo UI lon? -> `widgets`
- day la do nghe dung chung? -> `shared`

## Mot vi du that

Neu muon them "Export report to PDF":

- `entity`: khong can neu chi la hanh dong
- `feature`: `src/features/export-report/`
- `widget`: `ReportUtilityBar` se dung feature do
- `shared`: co the tai su dung `Button`

## Huong mo rong

- Tu chon 1 use case nho va tu map vao 4 layer tren
- Sau do so sanh voi code hien tai xem ban dat dung cho chua
