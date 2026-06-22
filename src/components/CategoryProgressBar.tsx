'use client';

import { useProgress } from '@/hooks/useProgress';
import type { Category } from '@/types';

interface Props {
  category: Category;
  accentColor: string;
}

export default function CategoryProgressBar({ category, accentColor }: Props) {
  const { isCompleted, mounted } = useProgress();
  if (!mounted) return null;

  const allLessons = category.courses.flatMap(c =>
    c.lessons.filter(l => !l.isComingSoon).map(l => ({ courseId: c.id, lessonId: l.id }))
  );
  const done = allLessons.filter(({ courseId, lessonId }) => isCompleted(courseId, lessonId)).length;
  if (done === 0) return null;

  const pct = Math.round((done / allLessons.length) * 100);

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[9px] font-bold" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          進捗
        </span>
        <span className="text-[9px] font-bold" style={{ color: accentColor, fontFamily: "'Dela Gothic One', sans-serif" }}>
          {done}/{allLessons.length}
        </span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: accentColor }}
        />
      </div>
    </div>
  );
}
