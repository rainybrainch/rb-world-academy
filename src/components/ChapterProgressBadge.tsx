'use client';

import { useProgress } from '@/hooks/useProgress';
import type { Course } from '@/types';
import ProgressRing from './ProgressRing';

interface Props {
  course: Course;
  courseId: string;
  accentColor: string;
}

export default function ChapterProgressBadge({ course, courseId, accentColor }: Props) {
  const { isCompleted, mounted } = useProgress();
  if (!mounted) return null;

  const available = course.lessons.filter(l => !l.isComingSoon);
  const done = available.filter(l => isCompleted(courseId, l.id)).length;
  if (done === 0) return null;

  const pct = Math.round((done / available.length) * 100);

  return (
    <div
      className="relative shrink-0 flex items-center justify-center"
      style={{ width: 36, height: 36 }}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={pct === 100 ? `${course.title}: 完了` : `${course.title}: ${pct}%`}
    >
      <ProgressRing pct={pct} size={36} stroke={3} color={accentColor} />
      <span
        className="absolute text-[8px] font-bold"
        style={{
          color: pct === 100 ? 'var(--mb-green)' : accentColor,
          fontFamily: "'Dela Gothic One', sans-serif",
        }}
        aria-hidden="true"
      >
        {pct === 100 ? '✓' : `${pct}`}
      </span>
    </div>
  );
}
