# Code Review Graph Token-Optimized Workflow

Muc tieu: lay dung luong context nho nhat can thiet truoc khi doc source.

## Mac dinh

Dung cac quy tac nay truoc:

- Bat dau bang `get_minimal_context_tool`
- Uu tien `detail_level: "minimal"`
- De `include_source: false` truoc, chi bat khi can
- Khi can source, gioi han bang `max_lines_per_file`
- Khong goi cac tool rong repo neu da biet file thay doi

## Thu tu goi tool

### 1. Huong dan nhanh truoc moi task

Neu da biet file thay doi:

```json
{
  "repo_root": "D:\\my-frontend-project",
  "task": "review a small change",
  "changed_files": ["src/app/page.tsx"]
}
```

Goi voi `get_minimal_context_tool` truoc.

### 2. Khi can xem tac dong

Dung `detect_changes_tool` hoac `get_impact_radius_tool` voi:

- `detail_level: "minimal"`
- `max_depth: 1` hoac `2`
- truyen `changed_files` ro rang

### 3. Khi can doc source

Chi luc nay moi dung `get_review_context_tool`:

- `detail_level: "minimal"`
- `include_source: true`
- `max_lines_per_file: 80` den `120`
- `max_depth: 1` tru khi that su can lan rong hon

## Mau quyet dinh

- Muon biet repo lien quan gi: `get_minimal_context_tool`
- Muon biet file nay anh huong den dau: `get_impact_radius_tool`
- Muon review diff hien tai: `detect_changes_tool`
- Muon them source co chon loc: `get_review_context_tool`
- Muon tim 1 symbol/file cu the: `query_graph_tool` hoac `semantic_search_nodes_tool`

## Nhung dieu tranh

- Khong bat dau bang `get_review_context_tool` tren toan repo
- Khong `include_source: true` neu chua xac dinh dung file
- Khong de `max_depth` cao cho task nho
- Khong fetch embeddings neu chua thuc su can semantic search

## Preset de dung lai

### Preset: tiny

Cho task nho, 1-2 file:

```json
{
  "detail_level": "minimal",
  "max_depth": 1
}
```

### Preset: focused

Cho review co blast radius vua:

```json
{
  "detail_level": "minimal",
  "max_depth": 2,
  "include_source": false
}
```

### Preset: source-on-demand

Chi sau khi da khoanh vung file:

```json
{
  "detail_level": "minimal",
  "max_depth": 1,
  "include_source": true,
  "max_lines_per_file": 100
}
```
