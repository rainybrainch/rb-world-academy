# All Academy Specification Index

**Version**: 2.0  
**Date**: 2026-07-03  
**Status**: ACTIVE

---

## 📚 仕様書一覧

すべての仕様は以下のドキュメントで定義されています。

### 1. メイン仕様書

| ドキュメント | 目的 | 対象 |
|---|---|---|
| **[ACADEMY_SPECIFICATION_v2.0.md](ACADEMY_SPECIFICATION_v2.0.md)** | オールアカデミーの基本理念と5階層構造 | 全プロジェクト |
| **[ENGINE_SPECIFICATION.md](ENGINE_SPECIFICATION.md)** | Academy Engine の実装仕様とルーティング | 開発チーム |
| **[SPECIFICATION_INDEX.md](SPECIFICATION_INDEX.md)** | 仕様書インデックス（このファイル） | リファレンス |

### 2. 実装リファレンス

| ファイル | 説明 | 場所 |
|---|---|---|
| `src/types/academy-hierarchy.ts` | TypeScript型定義（5階層） | コード |
| `src/data/academies.ts` | Academy データ（10個固定） | コード |
| `src/data/apps.ts` | App データ（予定） | コード |
| `src/data/courses.ts` | Course データ | コード |

---

## 🏛️ 5階層構造

```
┌─────────────────────────────────────────┐
│        Academy（アカデミー）            │
│      10種類（固定）               │
├─────────────────────────────────────────┤
│ App（アプリ）                      │
│ テーマ・シリーズ単位               │
├─────────────────────────────────────────┤
│ Course（コース）                   │
│ 実際の学習教材                     │
│ 32成果物 × 1コース                │
├─────────────────────────────────────────┤
│ Chapter（チャプター）              │
│ 4個固定 per コース                │
├─────────────────────────────────────────┤
│ Lesson（講義）                     │
│ 22個固定 per コース               │
└─────────────────────────────────────────┘
```

---

## 📋 不変条件（Sacred Rules）

以下の5つは**絶対に変更不可**です。

| # | 層 | 不変条件 | 理由 |
|---|---|---|---|
| 1 | Academy | 10個固定 | ブランド統一性・管理効率 |
| 2 | Chapter | 4個固定/course | 教育設計最適化 |
| 3 | Lesson | 22個固定/course | カリキュラムバランス |
| 4 | Assets | 32成果物固定 | 品質・テンプレート化 |
| 5 | Distribution | [5,6,6,5] | 章別講義配分 |

---

## 🗂️ ディレクトリ標準

### プロジェクト構造

```
rb-world-academy/
├── SPECIFICATION_INDEX.md           ← このファイル
├── ACADEMY_SPECIFICATION_v2.0.md    ← メイン仕様
├── ENGINE_SPECIFICATION.md          ← エンジン仕様
│
├── src/
│   ├── types/
│   │   └── academy-hierarchy.ts     ← 型定義
│   │
│   ├── data/
│   │   ├── academies.ts            ← Academy
│   │   ├── apps.ts                 ← App（新規）
│   │   ├── courses.ts              ← Course
│   │   ├── chapters.ts             ← Chapter（新規）
│   │   └── lessons.ts              ← Lesson（新規）
│   │
│   └── app/
│       ├── academies/
│       │   ├── page.tsx            # /academies
│       │   └── [academyId]/        # /academies/[academyId]
│       │
│       ├── apps/                   # NEW
│       │   └── [appId]/            # /apps/[appId]
│       │
│       └── courses/
│           └── [courseId]/
│               ├── page.tsx
│               ├── chapters/        # NEW: /chapters/[chapterId]
│               └── lessons/         # /lessons/[lessonId]
│
└── Academies/                      # コンテンツ
    ├── ❤️ ライフアカデミー/
    ├── 🌍 語学アカデミー/
    ├── 🌎 世界アカデミー/
    └── ... (全 10 アカデミー)
```

### コンテンツディレクトリ標準

```
Academies/[Academy]/[App]/Courses/[Course]/
├── 01_Source/
│   └── README.md
├── 02_Scripts/
│   └── README.md
├── 03_Images/
│   ├── 01_Cover/
│   ├── 02_Contents/
│   ├── 03_Lessons/
│   ├── 04_Certificate/
│   ├── 05_Icons/
│   ├── 06_Booth/
│   └── README.md
├── 04_Sales/
│   └── README.md
├── 05_Output/
│   └── README.md
├── README.md
└── metadata.json
```

---

## 🔄 ルーティングマップ（5階層）

| 階層 | ルート | コンポーネント | 数量 |
|---|---|---|---|
| **Academy** | `/academies` | AcademyList | 1 |
| | `/academies/[academyId]` | AcademyDetail | 10 |
| **App** | `/apps/[appId]` | AppDetail | N |
| **Course** | `/courses/[courseId]` | CourseDetail | N |
| **Chapter** | `/courses/[courseId]/chapters/[chapterId]` | ChapterDetail | 4N |
| **Lesson** | `/courses/[courseId]/lessons/[lessonId]` | LessonPlayer | 22N |

---

## 📊 データモデル関係図

```
Academy (10個)
  │
  ├─1:N── App (複数)
  │         │
  │         ├─1:N── Course (複数)
  │                   │
  │                   ├─1:4── Chapter (4個固定)
  │                   │         │
  │                   │         └─1:N── Lesson (5,6,6,5 分配)
  │                   │
  │                   └─ Assets (32個固定)
```

---

## 🛠️ 実装ガイドライン

### 新規コース作成時

1. **App の確認/作成**
   - `src/data/apps.ts` に App を定義
   - Academy ID を指定

2. **Course の作成**
   - `src/data/courses.ts` に Course を定義
   - AppId を指定
   - Chapter 4個、Lesson 22個は必須

3. **Chapter の定義**
   ```typescript
   chapters: [
     { order: 1, lessonIds: ['l01','l02','l03','l04','l05'] },  // 5
     { order: 2, lessonIds: ['l06','l07','l08','l09','l10','l11'] }, // 6
     { order: 3, lessonIds: ['l12','l13','l14','l15','l16','l17'] }, // 6
     { order: 4, lessonIds: ['l18','l19','l20','l21','l22'] }, // 5
   ]
   ```

4. **Lesson の定義**
   - 22個のLesson を定義
   - 各章に正確に割り当て

5. **ディレクトリ構造**
   - `Academies/[Academy]/[App]/Courses/[Course]/`
   - 03_Images に サブフォルダ6個
   - 各フォルダに README.md

---

## 📝 タイムライン

| 日付 | イベント | 内容 |
|---|---|---|
| 2026-06-15 | v1.0 採用 | 単層フラット構造 |
| 2026-07-03 | v2.0 採用 | **5階層構造に全面刷新** |
| 2026-07-30 | Phase 1 | 既存コースのメタデータ充実 |
| 2026-08-31 | Phase 2 | App 層の完全実装 |
| 2026-09-30 | Phase 3 | Academy Engine 全機能対応 |

---

## ✅ チェックリスト

### 仕様書の準備
- [x] ACADEMY_SPECIFICATION_v2.0.md 作成
- [x] ENGINE_SPECIFICATION.md 作成
- [x] academy-hierarchy.ts 型定義作成
- [x] SPECIFICATION_INDEX.md 作成

### データモデルの実装
- [ ] src/data/apps.ts 作成
- [ ] src/data/chapters.ts 作成（必要に応じて）
- [ ] src/data/lessons.ts 作成（必要に応じて）
- [ ] academies.ts を v2.0 へ更新

### UI/ルーティングの更新
- [ ] /apps/[appId] ページ作成
- [ ] /chapters/[chapterId] ページ作成
- [ ] Academy → App → Course ナビゲーション実装

### テスト・検証
- [ ] 静的ページ生成の確認（generateStaticParams）
- [ ] 5階層すべてのルーティング テスト
- [ ] 既存データ互換性確認

---

## 📖 参照

### Academy Specification v2.0
- **目的**: オールアカデミーの基本構造を定義
- **対象**: すべてのプロジェクト関係者
- **内容**: 5階層定義、コース仕様、不変条件

### Engine Specification
- **目的**: Academy Engine の実装方法を定義
- **対象**: 開発チーム
- **内容**: データモデル、ルーティング、UI設計

### Type Definitions
- **ファイル**: `src/types/academy-hierarchy.ts`
- **内容**: TypeScript インターフェース定義

---

## 🔗 リンク集

| リソース | 説明 |
|---|---|
| [ACADEMY_SPECIFICATION_v2.0.md](ACADEMY_SPECIFICATION_v2.0.md) | メイン仕様書 |
| [ENGINE_SPECIFICATION.md](ENGINE_SPECIFICATION.md) | エンジン仕様書 |
| [src/types/academy-hierarchy.ts](src/types/academy-hierarchy.ts) | 型定義 |
| [src/data/academies.ts](src/data/academies.ts) | Academy データ |

---

## 📞 質問・提案

新規コース作成やアプリ追加時は、必ずこの仕様に従ってください。

不明な点は ACADEMY_SPECIFICATION_v2.0.md を参照してください。

---

**正式採用日**: 2026-07-03  
**Document Version**: 2.0  
**Status**: ACTIVE
