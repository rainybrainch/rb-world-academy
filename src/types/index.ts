// ── 学習構造の5層 ─────────────────────────────────────
// Genre（ジャンル） → Category（カテゴリ） → Category（コース）
//   → Course（章） → Lesson（講義）
//
// コード内の既存型との対応:
//   Genre      = 新規（座学系 / ゲーム系 / 受験用）
//   Category   = 新規（お金 / 投資 / ZAi …）
//   Category   = 既存（お金の基本コース など）← 画像・レベルを追加
//   Course     = 既存（第1章 など）
//   Lesson     = 既存
// ─────────────────────────────────────────────────────

export type CourseLevel = '入門' | '基礎' | '応用' | '上級' | 'A1' | 'A2' | 'B1' | 'B2';

export interface Genre {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface TopicCategory {
  id: string;
  title: string;
  description: string;
  image?: string;
  genreId: string;
}

export type LessonSection =
  | { type: 'text'; content: string }
  | { type: 'heading'; level: 2 | 3; content: string }
  | { type: 'bullet-list'; items: string[] }
  | { type: 'numbered-list'; items: string[] }
  | { type: 'highlight-box'; title: string; items: string[] }
  | { type: 'info-box'; content: string }
  | { type: 'practice'; question: string; auxiliaryPrompt: string; answer: string }
  | { type: 'glossary'; terms: { term: string; definition: string }[] }
  | { type: 'summary'; content: string; nextLesson: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'comic'; data: ComicData };

export interface GameTag {
  source: 'ZAi';
  mechanic: string;
  description: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoId: string;
  isPremium: boolean;
  checkItems: string[];
  sections: LessonSection[];
  gameTags?: GameTag[];
  isComingSoon?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  image?: string;
  lessons: Lesson[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image?: string;
  level?: CourseLevel;
  topicCategoryId?: string;
  courses: Course[];
}

// ── 漫画機能 ────────────────────────────────────────────

export type ComicPanel = {
  role: string;
  character: string;
  text: string;
};

export type ComicData = {
  title: string;
  lessonId: string;
  image: string;
  panels: ComicPanel[];
  learning: string[];
  comicPrompt?: string;
  generatedAt?: string;
  imageVersion?: string;
};

export interface AdjacentLesson {
  lesson: Lesson;
  courseId: string;
  chapterTitle: string;
}
