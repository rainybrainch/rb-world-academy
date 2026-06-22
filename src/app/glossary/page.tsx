import type { Metadata } from 'next';
import { categories } from '@/data/courses';
import GlossaryClient from './GlossaryClient';

export const metadata: Metadata = {
  title: '用語集 | マネぼうアカデミー',
  description: '株式・投資・家計管理に関する用語を一覧で確認できます。',
};

interface GlossaryEntry {
  term: string;
  definition: string;
  lessonTitle: string;
  courseId: string;
  lessonId: string;
  categoryTitle: string;
}

function buildGlossary(): GlossaryEntry[] {
  const seen = new Set<string>();
  const entries: GlossaryEntry[] = [];

  for (const cat of categories) {
    for (const course of cat.courses) {
      for (const lesson of course.lessons) {
        if (lesson.isComingSoon) continue;
        for (const section of lesson.sections) {
          if (section.type !== 'glossary') continue;
          for (const { term, definition } of section.terms) {
            if (seen.has(term)) continue;
            seen.add(term);
            entries.push({
              term,
              definition,
              lessonTitle: lesson.title,
              courseId: course.id,
              lessonId: lesson.id,
              categoryTitle: cat.title,
            });
          }
        }
      }
    }
  }

  return entries.sort((a, b) => a.term.localeCompare(b.term, 'ja'));
}

export default function GlossaryPage() {
  const entries = buildGlossary();
  return <GlossaryClient entries={entries} />;
}
