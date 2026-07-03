# All Academy Standard Specification v2.0

**正式採用日**: 2026-07-03  
**バージョン**: 2.0  
**ステータス**: 正式仕様

---

## 基本理念

オールアカデミーは、すべての教材を共通構造で管理します。

すべてのアカデミーは、以下の**5階層構造**を採用する必須仕様です。

```
オールアカデミー
  └── Academy（アカデミー）
      └── App（アプリ）
          └── Course（コース）
              └── Chapter（チャプター）
                  └── Lesson（講義）
```

---

## 第1階層：Academy（アカデミー）

### 定義
学習ジャンルの最上位単位。10種類の公式アカデミーを定義します。

### 公式アカデミー一覧

| ID | アイコン | 名称 | テーマ |
|---|---|---|---|
| academy-life | ❤️ | ライフアカデミー | ライフスキル・健康・メンタルヘルス |
| academy-language | 🌍 | 語学アカデミー | 多言語学習 |
| academy-world | 🌎 | 世界アカデミー | 各国の文化・地理・歴史 |
| academy-subject | 🧠 | 学問アカデミー | 基礎学問 |
| academy-hobby | 🎨 | 趣味・教養アカデミー | アート・音楽・文化教養 |
| academy-money | 💰 | お金アカデミー | 金融リテラシー・投資 |
| academy-ai-it | 💻 | IT・AIアカデミー | プログラミング・AI・テクノロジー |
| academy-business | 💼 | ビジネスアカデミー | ビジネススキル・営業・起業 |
| academy-qualification | 📖 | 資格アカデミー | 資格取得対策 |
| academy-rb | 🌳 | RBアカデミー | RAINYBRAIN公式 |

### データ管理
- 親ID: なし（トップレベル）
- 子要素: App
- 保存先: `src/data/academies.ts`
- UI参照: `/academies`, `/academies/[academyId]`

---

## 第2階層：App（アプリ）

### 定義
アカデミー内のテーマ・シリーズ単位。Academy の下に複数の App が存在します。

### 例

**【語学アカデミー内】**
- 01_英語アプリ
- 02_日本語アプリ
- 03_中国語アプリ
- 04_韓国語アプリ
- ... など 22 言語対応

**【世界アカデミー内】**
- 01_日本アプリ
- 02_アメリカアプリ
- 03_中国アプリ
- ... など 25 国対応

**【IT・AIアカデミー内】**
- ChatGPT アプリ
- Claude Code アプリ
- Python アプリ
- ... など複数

**【ビジネスアカデミー内】**
- BOOTH 販売アプリ
- クラウドワークス アプリ
- ココナラ アプリ

### 仕様
- 親ID: Academy ID
- 子要素: Course（複数可）
- フォルダ構成: `Academies/[Academy]/[App]/Courses/`
- データ構造: `AppInfo` インターフェース

```typescript
interface AppInfo {
  id: string;                    // e.g., "app-lang-english"
  title: string;                 // "英語アプリ"
  description: string;
  academyId: string;             // parent academy
  courseIds: string[];           // child courses
  icon?: string;
  color: string;
  metadata?: {
    totalCourses: number;
    targetLevel?: string;
  };
}
```

### 管理方法
- 親ID: academyId
- 子 ID: courseIds[]
- リレーション: 1 App = N Courses（1:N）

---

## 第3階層：Course（コース）

### 定義
実際に学習する教材単位。一つの完成した学習体験として設計されます。

### 特性
- **1コース = 32成果物**（固定仕様）
- **1コース = 4チャプター**（固定仕様）
- **1コース = 22講義**（固定仕様）

### 命名規則

**形式**: `[ジャンル][レベル/種類]###`

**例**：
- `英語入門001` - English beginner course 1
- `中学英語001` - Junior high school English 1
- `BOOTH販売基礎001` - BOOTH sales foundation 1
- `Claude Code基礎001` - Claude Code fundamentals 1
- `AI入門001` - AI introduction 1

### 32成果物仕様

コースは必ず以下の32成果物で構成されます。

| # | 名称 | 説明 |
|---|---|---|
| 01 | 表紙 | Cover image |
| 02 | はじめに | Introduction section |
| 03 | 全体目次 | Table of contents |
| 04 | Chapter1 目次 | Chapter 1 outline |
| 05 | Chapter2 目次 | Chapter 2 outline |
| 06 | Chapter3 目次 | Chapter 3 outline |
| 07 | Chapter4 目次 | Chapter 4 outline |
| 08-29 | 講義01～22 | 22 lessons (固定) |
| 30 | 修了証 | Certificate of completion |
| 31 | コースアイコン | Course icon for display |
| 32 | BOOTH販売アイコン | BOOTH marketplace icon |

### データ構造

```typescript
interface Course {
  id: string;                    // e.g., "eng-intro-001"
  title: string;                 // "英語入門001"
  description: string;
  appId: string;                 // parent app
  chapters: Chapter[];           // 4 fixed chapters
  lessons: Lesson[];             // 22 fixed lessons
  metadata: {
    version: string;
    createdAt: string;
    updatedAt: string;
    assets: {
      cover: string;
      icon: string;
      booth: string;
    };
  };
}
```

### 保存先
- ディレクトリ: `Academies/[Academy]/[App]/Courses/[Course]/`
- コース データ: `src/data/courses.ts`
- 画像/素材: `Academies/[Academy]/[App]/Courses/[Course]/03_Images/`

---

## 第4階層：Chapter（チャプター）

### 定義
コースを構成する大きなセクション。1コース = 4チャプターで固定。

### 仕様

| チャプター | 講義 | 詳細 |
|---|---|---|
| Chapter1 | 01-05 | 基礎・導入（5講義） |
| Chapter2 | 06-11 | 発展・実践（6講義） |
| Chapter3 | 12-17 | 応用・深化（6講義） |
| Chapter4 | 18-22 | 統合・演習（5講義） |

### データ構造

```typescript
interface Chapter {
  id: string;                    // "ch1", "ch2", "ch3", "ch4"
  title: string;                 // "Chapter 1: Introduction"
  description: string;
  order: number;                 // 1, 2, 3, 4
  lessonIds: string[];           // child lesson IDs
  metadata: {
    outline: string;
    objectives: string[];
    estimatedDuration: number;   // in minutes
  };
}
```

### 不変条件
- **4チャプター厳密固定**
- 順序変更禁止
- 講義の再配分による変更禁止

---

## 第5階層：Lesson（講義）

### 定義
個別の学習単位。1コース = 22講義で固定。

### 仕様

| 章 | 講義番号 | 数 | 役割 |
|---|---|---|---|
| Chapter1 | 01-05 | 5 | 基礎知識・導入 |
| Chapter2 | 06-11 | 6 | スキル開発・実践 |
| Chapter3 | 12-17 | 6 | 応用・問題解決 |
| Chapter4 | 18-22 | 5 | 統合・発展演習 |

### データ構造

```typescript
interface Lesson {
  id: string;                    // "l01", "l02", ..., "l22"
  title: string;                 // "Lesson 1: Basic Concepts"
  courseId: string;              // parent course
  chapterId: string;             // parent chapter
  order: number;                 // 1-22
  duration: number;              // minutes
  content: LessonContent[];       // text, video, etc.
  exercises?: Exercise[];
  metadata: {
    keyPoints: string[];
    objectives: string[];
    difficulty: "beginner" | "intermediate" | "advanced";
  };
}
```

### 不変条件
- **22講義厳密固定**
- 講義の追加/削除禁止
- 順序変更禁止

---

## ディレクトリ標準

### フォルダ構成（新規作成時）

```
Academies/
│
├── ❤️ ライフアカデミー/
│   ├── README.md
│   ├── 01_恋愛アプリ/
│   │   ├── App/
│   │   │   ├── README.md
│   │   │   └── Metadata/
│   │   │
│   │   └── Courses/
│   │       ├── 恋愛入門001/
│   │       │   ├── 01_Source/
│   │       │   ├── 02_Scripts/
│   │       │   ├── 03_Images/
│   │       │   │   ├── 01_Cover/
│   │       │   │   ├── 02_Contents/
│   │       │   │   ├── 03_Lessons/
│   │       │   │   ├── 04_Certificate/
│   │       │   │   ├── 05_Icons/
│   │       │   │   └── 06_Booth/
│   │       │   ├── 04_Sales/
│   │       │   ├── 05_Output/
│   │       │   └── README.md
│   │       │
│   │       └── 恋愛基礎001/
│   │           └── (同じ構成)
│   │
│   └── 02_健康・ウェルネスアプリ/
│       └── Courses/
│           ├── 瞑想入門001/
│           ├── ストレス管理001/
│           └── ...
│
├── 🌍 語学アカデミー/
│   ├── 01_英語アプリ/
│   │   └── Courses/
│   │       ├── 英語入門001/
│   │       ├── 中学英語001/
│   │       └── 英会話基礎001/
│   │
│   ├── 02_日本語アプリ/
│   │   └── Courses/ (同様)
│   │
│   ├── 03_中国語アプリ/
│   ├── 04_韓国語アプリ/
│   └── ... (全 22言語)
│
├── 💻 IT・AIアカデミー/
│   ├── ChatGPT アプリ/
│   │   └── Courses/
│   │       └── ChatGPT入門001/
│   │
│   ├── Claude Code アプリ/
│   │   └── Courses/
│   │       └── Claude Code基礎001/
│   │
│   └── Python アプリ/
│       └── Courses/
│           └── Python入門001/
│
└── ... (全 10 アカデミー)

Assets/Academies/
│
├── business/
│   └── icon.png
│
├── hobby/
│   └── icon.png
│
├── it-ai/
│   └── icon.png
│
└── ... (全 10 アカデミー)
```

### 各層のファイル構成

**App層** (`[App]/App/`)
```
App/
├── README.md
├── metadata.json
├── branding/
│   ├── logo.png
│   ├── banner.png
│   └── colors.json
└── templates/
    └── course-template.json
```

**Course層** (`[Course]/`)
```
Course/
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

## Academy Engine 標準仕様

### 階層ベースの設計

Academy Engine はすべての機能を以下の5階層を前提に設計します。

```
Academy Layer
  ↓
App Layer
  ↓
Course Layer
  ↓
Chapter Layer
  ↓
Lesson Layer
```

### ルーティング標準

| 層 | ルート例 | ファイル |
|---|---|---|
| Academy | `/academies` | `app/academies/page.tsx` |
| Academy詳細 | `/academies/[academyId]` | `app/academies/[academyId]/page.tsx` |
| App | `/apps/[appId]` | `app/apps/[appId]/page.tsx` |
| Course | `/courses/[courseId]` | `app/courses/[courseId]/page.tsx` |
| Chapter | `/courses/[courseId]/chapters/[chapterId]` | `app/courses/[courseId]/chapters/[chapterId]/page.tsx` |
| Lesson | `/courses/[courseId]/lessons/[lessonId]` | `app/courses/[courseId]/lessons/[lessonId]/page.tsx` |

### データモデル関連図

```
Academy (1)
  ↓ 1:N
  App (N)
    ↓ 1:N
    Course (N)
      ↓ 1:N
      Chapter (4固定)
        ↓ 1:N
        Lesson (22固定)
```

### 必須インターフェース

```typescript
// src/types/academy.ts

export interface AcademyHierarchy {
  academies: Academy[];
}

export interface Academy {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  appIds: string[];           // child apps
}

export interface App {
  id: string;
  title: string;
  academyId: string;          // parent academy
  description: string;
  courseIds: string[];        // child courses
  icon?: string;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  appId: string;              // parent app
  chapters: Chapter[];         // always 4
  lessons: Lesson[];          // always 22
  metadata: CourseMetadata;
}

export interface Chapter {
  id: string;
  order: 1 | 2 | 3 | 4;      // 固定4値
  title: string;
  lessonIds: string[];
}

export interface Lesson {
  id: string;
  order: number;              // 1-22
  chapterId: string;
  courseId: string;
  title: string;
  content: LessonContent[];
}
```

---

## 今後の標準テンプレート

### 新規コース作成テンプレート

新規コース作成時は必ず以下のテンプレートを使用します。

**course-template.json**
```json
{
  "id": "course-id-###",
  "title": "コース名",
  "appId": "app-id",
  "chapters": [
    {
      "id": "ch1",
      "order": 1,
      "title": "Chapter 1: [Title]",
      "lessonIds": ["l01", "l02", "l03", "l04", "l05"]
    },
    {
      "id": "ch2",
      "order": 2,
      "title": "Chapter 2: [Title]",
      "lessonIds": ["l06", "l07", "l08", "l09", "l10", "l11"]
    },
    {
      "id": "ch3",
      "order": 3,
      "title": "Chapter 3: [Title]",
      "lessonIds": ["l12", "l13", "l14", "l15", "l16", "l17"]
    },
    {
      "id": "ch4",
      "order": 4,
      "title": "Chapter 4: [Title]",
      "lessonIds": ["l18", "l19", "l20", "l21", "l22"]
    }
  ],
  "lessons": [
    {
      "id": "l01",
      "order": 1,
      "chapterId": "ch1",
      "title": "Lesson 1: [Title]",
      "duration": 10,
      "content": []
    },
    // ... l02 - l22
  ],
  "metadata": {
    "courseAssets": [
      "01_cover",
      "02_intro",
      "03_contents",
      "04_ch1_outline",
      "05_ch2_outline",
      "06_ch3_outline",
      "07_ch4_outline",
      "08_lesson01",
      // ... 09-29 (lessons 02-22)
      "30_certificate",
      "31_course_icon",
      "32_booth_icon"
    ]
  }
}
```

---

## 不変条件（Sacred Rules）

以下の条件は **絶対に変更・例外を認めない** 仕様です。

| 層 | 不変条件 | 理由 |
|---|---|---|
| Academy | 10個固定 | ブランド統一性 |
| Chapter | 1コース4固定 | 学習構造の一貫性 |
| Lesson | 1コース22固定 | 教育設計の最適化 |
| Assets | 32成果物固定 | 品質管理・テンプレート化 |

---

## バージョン管理

| バージョン | 日付 | 変更内容 |
|---|---|---|
| v1.0 | 2026-06-15 | 初版（単層構造） |
| v2.0 | 2026-07-03 | **5階層構造への全面刷新** |

---

## 附録：マイグレーション手順

### 既存コースから v2.0 への移行

v2.0 採用後、既存コースは以下の手順で段階的に移行します。

1. **データ損失なし**: 既存データはそのままアーカイブ
2. **アプリ層の追加**: 既存コースを App でグループ化
3. **メタデータの充実**: 章・講義の明示的定義
4. **UI/ルーティングの更新**: 5階層ナビゲーション対応

---

**正式採用日: 2026-07-03**  
**Document Version: 2.0**  
**Status: ACTIVE**

この仕様は Academy Engine の全機能、全ルーティング、全テンプレートの基準となります。
