# Academy Engine Specification

**Version**: 2.0  
**Date**: 2026-07-03  
**Status**: Active

---

## Overview

Academy Engine は、オールアカデミーの5階層構造を基準に、教育コンテンツの管理・配信を行う統合エンジンです。

**参照仕様**: [ACADEMY_SPECIFICATION_v2.0.md](ACADEMY_SPECIFICATION_v2.0.md)

---

## 階層構造（Sacred Hierarchy）

```
Academy（アカデミー）
  ├── App（アプリ）
  │   └── Course（コース）
  │       ├── Chapter（チャプター：4固定）
  │       │   └── Lesson（講義：22固定）
```

### 階層の役割

| 層 | 役割 | 数 | 管理 |
|---|---|---|---|
| **Academy** | 学習ジャンル | 10固定 | `src/data/academies.ts` |
| **App** | テーマ・シリーズ | N可変 | `src/data/apps.ts` |
| **Course** | 学習教材 | N可変 | `src/data/courses.ts` |
| **Chapter** | セクション | 4固定 | Course 内に統合 |
| **Lesson** | 個別講義 | 22固定 | Course 内に統合 |

---

## データ層

### Core Data Files

```
src/data/
├── academies.ts         # 10 academies (immutable)
├── apps.ts              # Apps by academy (new)
├── courses.ts           # Courses by app (updated)
├── chapters.ts          # Chapter metadata (new)
└── lessons.ts           # Lesson metadata (new)
```

### academies.ts（変更なし）

```typescript
export interface Academy {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  appIds: string[];           // NEW: link to apps
  courseIds?: string[];       // Legacy support (deprecated)
}

export const academies: Academy[] = [
  {
    id: 'academy-language',
    title: '語学アカデミー',
    icon: '🌍',
    description: '...',
    color: '#4ECDC4',
    appIds: [              // NEW
      'app-lang-english',
      'app-lang-japanese',
      'app-lang-chinese',
      // ... 全22言語
    ],
  },
  // ... 他9つのアカデミー
];
```

### apps.ts（新規作成）

```typescript
export interface App {
  id: string;
  title: string;
  academyId: string;
  description: string;
  courseIds: string[];
  icon?: string;
  order: number;
  metadata?: {
    level?: string;
    duration?: number;
  };
}

export const apps: App[] = [
  // Language Academy Apps
  {
    id: 'app-lang-english',
    title: '英語アプリ',
    academyId: 'academy-language',
    description: 'Learn English from beginner to advanced',
    courseIds: [
      'eng-intro-001',
      'eng-basic-001',
      'eng-conv-001',
    ],
    order: 1,
  },
  {
    id: 'app-lang-japanese',
    title: '日本語アプリ',
    academyId: 'academy-language',
    description: '日本語を学ぶ',
    courseIds: ['jpn-intro-001'],
    order: 2,
  },
  
  // World Academy Apps
  {
    id: 'app-world-japan',
    title: '日本アプリ',
    academyId: 'academy-world',
    description: '日本の文化・地理・歴史',
    courseIds: ['japan-intro-001'],
    order: 1,
  },
  
  // IT・AI Academy Apps
  {
    id: 'app-ai-chatgpt',
    title: 'ChatGPT アプリ',
    academyId: 'academy-ai-it',
    description: 'ChatGPT の使い方と活用法',
    courseIds: ['chatgpt-intro-001'],
    order: 1,
  },
  {
    id: 'app-ai-claude',
    title: 'Claude Code アプリ',
    academyId: 'academy-ai-it',
    description: 'Claude Code で効率的にコーディング',
    courseIds: ['claude-code-001'],
    order: 2,
  },
  
  // Business Academy Apps
  {
    id: 'app-biz-booth',
    title: 'BOOTH販売アプリ',
    academyId: 'academy-business',
    description: 'BOOTH での販売ノウハウ',
    courseIds: ['booth-basic-001'],
    order: 1,
  },
  {
    id: 'app-biz-cloudworks',
    title: 'クラウドワークス アプリ',
    academyId: 'academy-business',
    description: 'クラウドワークス で仕事を獲得',
    courseIds: ['cloudworks-basic-001'],
    order: 2,
  },

  // ... その他のアプリ
];

export function getApp(appId: string): App | null {
  return apps.find(a => a.id === appId) ?? null;
}

export function getAppsByCourse(courseId: string): App | null {
  return apps.find(a => a.courseIds.includes(courseId)) ?? null;
}
```

### courses.ts（更新）

```typescript
export interface Course {
  id: string;
  title: string;
  appId: string;              // NEW: parent app
  description: string;
  chapters: Chapter[];        // NEW: 4固定
  lessons: Lesson[];          // NEW: 22固定
  icon?: string;
  metadata: {
    courseNumber: string;     // e.g., "001"
    version: string;
    createdAt: string;
    assets: {
      cover: string;
      icon: string;
      booth: string;
    };
  };
}

export interface Chapter {
  id: string;
  order: 1 | 2 | 3 | 4;
  title: string;
  lessonIds: string[];        // 5,6,6,5 固定
}

export interface Lesson {
  id: string;
  order: number;              // 1-22
  chapterId: string;
  title: string;
  duration: number;           // minutes
  objectives: string[];
}

// 既存データとの互換性を保つ
export function getCourseByCourseId(courseId: string): Course | null {
  // courseId から course を検索（同期）
  const allCourses = getAllCourses();
  return allCourses.find(c => c.id === courseId) ?? null;
}

export function getAppIdByCourseId(courseId: string): string | null {
  const course = getCourseByCourseId(courseId);
  return course?.appId ?? null;
}
```

---

## ルーティング標準（5階層）

### ページコンポーネント

```
app/
├── academies/
│   ├── page.tsx                      # /academies
│   │   └── Academy List
│   │
│   └── [academyId]/
│       └── page.tsx                  # /academies/[academyId]
│           └── Academy Detail
│
├── apps/                             # NEW
│   └── [appId]/
│       └── page.tsx                  # /apps/[appId]
│           └── App Detail & Course List
│
├── courses/
│   ├── page.tsx                      # /courses
│   │   └── Course List
│   │
│   └── [courseId]/
│       ├── page.tsx                  # /courses/[courseId]
│       │   └── Course Detail
│       │
│       ├── chapters/                 # NEW
│       │   └── [chapterId]/
│       │       └── page.tsx          # /courses/[courseId]/chapters/[chapterId]
│       │           └── Chapter Detail
│       │
│       └── lessons/
│           └── [lessonId]/
│               └── page.tsx          # /courses/[courseId]/lessons/[lessonId]
│                   └── Lesson Player
```

### ルーティングマップ

| Route | Component | Hierarchy |
|---|---|---|
| `/` | Home | - |
| `/academies` | AcademyList | Academy Layer |
| `/academies/[academyId]` | AcademyDetail | Academy → App |
| `/apps/[appId]` | AppDetail | App → Course |
| `/courses` | CourseList | Course Layer |
| `/courses/[courseId]` | CourseDetail | Course → Chapter |
| `/courses/[courseId]/chapters/[chapterId]` | ChapterDetail | Chapter |
| `/courses/[courseId]/lessons/[lessonId]` | LessonPlayer | Lesson |

---

## Component Architecture

### Hierarchy Components

```
<AcademyList>
  ├── <AcademyCard>
  │   └── <AppLink> x N
  │
<AcademyDetail>
  └── <AppList>
      ├── <AppCard>
      │   └── <CourseLink> x N
      │
<AppDetail>
  └── <CourseList>
      └── <CourseCard>
      
<CourseDetail>
  └── <ChapterSelector>
      └── <ChapterDetail>
          └── <LessonList>
              └── <LessonLink> x 22
              
<LessonPlayer>
  ├── <LessonContent>
  ├── <ChapterProgress>
  └── <NavigationControls>
```

---

## Data Flow

### 階層間のデータフロー

```
Academy
  │ appIds[]
  ├── App
  │   │ courseIds[]
  │   ├── Course
  │   │   │ chapters[]
  │   │   ├── Chapter
  │   │   │   │ lessonIds[]
  │   │   │   └── Lesson
  │   │   │       └── LessonContent
  │   │   │
  │   │   └── metadata
  │   │       ├── assets
  │   │       ├── chapters (4固定)
  │   │       └── lessons (22固定)
```

### 取得関数

```typescript
// Academy → Apps
function getAppsByAcademyId(academyId: string): App[]
// App → Courses
function getCoursesByAppId(appId: string): Course[]
// Course → Chapters
function getChaptersByCourseId(courseId: string): Chapter[]
// Chapter → Lessons
function getLessonsByChapterId(chapterId: string): Lesson[]
// Lesson
function getLessonById(lessonId: string): Lesson | null
```

---

## Static Generation Strategy

### Static Pages

```
generateStaticParams:
- /academies                    # 1個
- /academies/[academyId]        # 10個
- /apps/[appId]                 # N個（全app数）
- /courses/[courseId]           # N個（全course数）
- /courses/[courseId]/chapters/[chapterId]  # N×4個
- /courses/[courseId]/lessons/[lessonId]    # N×22個

Total pre-rendered: 1 + 10 + N + N + 4N + 22N
```

### ISR Strategy（必要に応じて）

```
revalidate: 3600  # 1 hour
```

---

## Template Standards

### 新規コース作成テンプレート

```typescript
// Minimal course template
const courseTemplate = {
  id: 'course-id-###',
  title: 'コース名',
  appId: 'app-id',
  description: 'Description',
  chapters: [
    { id: 'ch1', order: 1, title: 'Chapter 1', lessonIds: ['l01', 'l02', 'l03', 'l04', 'l05'] },
    { id: 'ch2', order: 2, title: 'Chapter 2', lessonIds: ['l06', 'l07', 'l08', 'l09', 'l10', 'l11'] },
    { id: 'ch3', order: 3, title: 'Chapter 3', lessonIds: ['l12', 'l13', 'l14', 'l15', 'l16', 'l17'] },
    { id: 'ch4', order: 4, title: 'Chapter 4', lessonIds: ['l18', 'l19', 'l20', 'l21', 'l22'] },
  ],
  lessons: [
    // l01-l22 (22個固定)
  ],
};
```

---

## Immutable Rules

以下の仕様は**変更禁止**です。

| Rule | Value | Reason |
|---|---|---|
| Academies Count | 10 | ブランド統一 |
| Chapters per Course | 4 | 教育設計最適化 |
| Lessons per Course | 22 | バランス済みカリキュラム |
| Course Assets | 32個 | 品質管理 |

---

## Migration Path

### v1 → v2 Migration Strategy

1. **No Data Loss**: 既存データはそのままアーカイブ
2. **Gradual Adoption**: 新規コースから v2 適用
3. **Backward Compatibility**: 既存ルート `/courses/[courseId]` は維持
4. **UI Updates**: 段階的に5階層UI導入

---

## Version History

| Version | Date | Changes |
|---|---|---|
| v1.0 | 2026-06-15 | Initial (flat structure) |
| v2.0 | 2026-07-03 | **5-tier hierarchy** |

---

**Adopted**: 2026-07-03  
**Status**: ACTIVE  
**Reference**: ACADEMY_SPECIFICATION_v2.0.md
