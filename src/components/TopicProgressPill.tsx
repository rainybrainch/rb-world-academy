'use client';

import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

interface Props {
  topicCategoryId: string;
  color: string;
}

export default function TopicProgressPill({ topicCategoryId, color }: Props) {
  const { isCompleted, mounted } = useProgress();

  if (!mounted) return null;

  const topicCourses = categories.filter(c => c.topicCategoryId === topicCategoryId);
  const allLessons = topicCourses.flatMap(cat =>
    cat.courses.flatMap(ch => ch.lessons.filter(l => !l.isComingSoon).map(l => ({ courseId: ch.id, lessonId: l.id })))
  );
  const done = allLessons.filter(({ courseId, lessonId }) => isCompleted(courseId, lessonId)).length;
  const total = allLessons.length;

  if (done === 0) return null;

  const pct = Math.round((done / total) * 100);

  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: `${color}20` }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="text-[9px] font-bold shrink-0" style={{ color, fontFamily: "'Dela Gothic One', sans-serif" }}>
        {done}/{total}
      </span>
    </div>
  );
}
