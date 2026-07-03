/**
 * Academy Hierarchy Types
 * Based on ACADEMY_SPECIFICATION_v2.0
 *
 * 5-tier structure:
 * Academy → App → Course → Chapter → Lesson
 */

// ==================== ACADEMY ====================
export interface Academy {
  id: string;                    // e.g., "academy-language"
  title: string;                 // e.g., "語学アカデミー"
  icon: string;                  // emoji or icon
  description: string;
  color: string;                 // hex color
  appIds: string[];              // child apps (new v2.0)
  courseIds?: string[];          // legacy support (deprecated)
  metadata?: {
    totalApps?: number;
    totalCourses?: number;
    established?: string;
  };
}

// ==================== APP ====================
export interface App {
  id: string;                    // e.g., "app-lang-english"
  title: string;                 // e.g., "英語アプリ"
  academyId: string;             // parent academy (e.g., "academy-language")
  description: string;
  courseIds: string[];           // child courses
  icon?: string;
  order: number;                 // display order within academy
  metadata?: {
    level?: "beginner" | "intermediate" | "advanced";
    duration?: number;           // total hours
    languages?: string[];
    targets?: string[];          // target audience
  };
}

// ==================== COURSE ====================
export interface Course {
  id: string;                    // e.g., "eng-intro-001"
  title: string;                 // e.g., "英語入門001"
  appId: string;                 // parent app (e.g., "app-lang-english")
  description: string;
  chapters: Chapter[];           // exactly 4 chapters (immutable)
  lessons: Lesson[];             // exactly 22 lessons (immutable)
  icon?: string;
  metadata: CourseMetadata;
}

export interface CourseMetadata {
  version: string;               // e.g., "1.0"
  createdAt: string;             // ISO date
  updatedAt: string;             // ISO date
  estimatedHours?: number;
  difficulty?: "beginner" | "intermediate" | "advanced";
  prerequisites?: string[];
  learningOutcomes?: string[];
  assets: {
    cover: string;               // 01_cover
    intro: string;               // 02_intro
    contents: string;            // 03_contents
    ch1Outline: string;           // 04_chapter1_outline
    ch2Outline: string;           // 05_chapter2_outline
    ch3Outline: string;           // 06_chapter3_outline
    ch4Outline: string;           // 07_chapter4_outline
    lessons: string[];            // 08-29 (lesson01-lesson22)
    certificate: string;          // 30_certificate
    courseIcon: string;           // 31_course_icon
    boothIcon: string;            // 32_booth_icon
  };
}

// ==================== CHAPTER ====================
/**
 * 1 Course = 4 Chapters (immutable)
 * Chapter1: Lessons 01-05
 * Chapter2: Lessons 06-11
 * Chapter3: Lessons 12-17
 * Chapter4: Lessons 18-22
 */
export interface Chapter {
  id: string;                    // e.g., "ch1", "ch2", "ch3", "ch4"
  order: 1 | 2 | 3 | 4;         // fixed order (immutable)
  courseId: string;              // parent course
  title: string;                 // e.g., "Chapter 1: Foundations"
  description?: string;
  lessonIds: string[];           // child lesson IDs (5, 6, 6, 5 distribution)
  objectives?: string[];
  estimatedDuration?: number;    // minutes
  metadata?: {
    keyTopics?: string[];
    exercises?: number;
  };
}

// ==================== LESSON ====================
/**
 * 1 Course = 22 Lessons (immutable)
 * Distributed across 4 chapters as:
 * Chapter1: 01-05 (5 lessons)
 * Chapter2: 06-11 (6 lessons)
 * Chapter3: 12-17 (6 lessons)
 * Chapter4: 18-22 (5 lessons)
 */
export interface Lesson {
  id: string;                    // e.g., "l01", "l02", ..., "l22"
  order: number;                 // 1-22 (immutable)
  courseId: string;              // parent course
  chapterId: string;             // parent chapter
  title: string;                 // e.g., "Lesson 1: Basic Concepts"
  description?: string;
  duration: number;              // minutes
  difficulty?: "beginner" | "intermediate" | "advanced";
  content: LessonContent[];
  exercises?: Exercise[];
  metadata?: {
    keywords?: string[];
    objectives?: string[];
    resources?: string[];
  };
}

export interface LessonContent {
  type: "heading" | "text" | "video" | "image" | "code" | "glossary" | "exercise";
  level?: number;                // for headings
  content: string;
}

export interface Exercise {
  id: string;
  type: "multiple-choice" | "short-answer" | "essay" | "project";
  question: string;
  options?: string[];            // for multiple-choice
  correctAnswer?: string;
  explanation?: string;
}

// ==================== HIERARCHY RELATIONS ====================

export interface HierarchyRelation {
  academyId: string;
  appIds: string[];              // child apps
  courseIds: string[];           // all courses in this academy
  chapterIds: string[];          // all chapters (4 per course)
  lessonIds: string[];           // all lessons (22 per course)
}

// ==================== UTILITY TYPES ====================

export interface CourseHierarchyTree {
  academy: Academy;
  apps: App[];
  courses: Course[];
  chapters: Chapter[];
  lessons: Lesson[];
}

export interface AppHierarchyTree {
  app: App;
  courses: Course[];
  chapters: Chapter[];
  lessons: Lesson[];
}

// ==================== CONSTANTS ====================

export const HIERARCHY_CONSTRAINTS = {
  ACADEMIES_COUNT: 10,           // immutable
  CHAPTERS_PER_COURSE: 4,        // immutable
  LESSONS_PER_COURSE: 22,        // immutable
  COURSE_ASSETS_COUNT: 32,       // immutable
  LESSONS_DISTRIBUTION: [5, 6, 6, 5], // chapter 1-4
} as const;

export const CHAPTER_ORDERS = [1, 2, 3, 4] as const;
export const LESSON_ORDERS = Array.from({ length: 22 }, (_, i) => i + 1);
