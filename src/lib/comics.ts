import fs from 'fs';
import path from 'path';
import type { ComicData } from '@/types';

export function getComic(courseId: string, lessonId: string): ComicData | null {
  const filePath = path.join(process.cwd(), 'content', 'courses', courseId, lessonId, 'comic.json');
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as ComicData;
  } catch {
    return null;
  }
}
