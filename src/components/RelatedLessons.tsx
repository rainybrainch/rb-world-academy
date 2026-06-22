'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { categories } from '@/data/courses';
import { useProgress } from '@/hooks/useProgress';

interface Props {
  categoryId: string;
  courseId: string;
  lessonId: string;
}

export default function RelatedLessons({ categoryId, courseId, lessonId }: Props) {
  const { isCompleted, mounted } = useProgress();

  const related = useMemo(() => {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return [];
    const all = cat.courses.flatMap(course =>
      course.lessons
        .filter(l => !l.isComingSoon && !(course.id === courseId && l.id === lessonId))
        .map(l => ({ lesson: l, course }))
    );
    // Deterministic pseudo-shuffle based on current lessonId
    const seed = Array.from(lessonId).reduce((s, c) => s + c.charCodeAt(0), 0);
    const shuffled = [...all].sort((a, b) =>
      ((a.lesson.id.charCodeAt(0) * 31 + seed) % 97) - ((b.lesson.id.charCodeAt(0) * 31 + seed) % 97)
    );
    // Prioritize incomplete lessons when progress is loaded
    if (mounted) {
      const incomplete = shuffled.filter(({ lesson, course }) => !isCompleted(course.id, lesson.id));
      const done = shuffled.filter(({ lesson, course }) => isCompleted(course.id, lesson.id));
      return [...incomplete, ...done].slice(0, 3);
    }
    return shuffled.slice(0, 3);
  }, [categoryId, courseId, lessonId, mounted, isCompleted]);

  if (related.length === 0) return null;

  return (
    <div className="mx-4 mb-4 mt-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-4 rounded-full" style={{ background: 'var(--mb-sky)' }} />
        <span className="text-[10px] font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          関連講義
        </span>
      </div>
      <div className="space-y-2">
        {related.map(({ lesson, course }) => {
          const done = mounted && isCompleted(course.id, lesson.id);
          return (
            <Link
              key={`${course.id}/${lesson.id}`}
              href={`/courses/${course.id}/lessons/${lesson.id}`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl border-2 bg-white transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{
                borderColor: done ? 'rgba(76,175,125,0.3)' : 'rgba(26,26,46,0.12)',
                boxShadow: done ? 'none' : '2px 2px 0 rgba(26,26,46,0.06)',
              }}
            >
              <div
                className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center"
                style={{ background: done ? 'rgba(76,175,125,0.15)' : 'rgba(26,26,46,0.06)' }}
              >
                {done ? (
                  <svg className="w-3 h-3" style={{ color: 'var(--mb-green)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3" style={{ color: 'rgba(26,26,46,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-xs font-medium truncate"
                  style={{
                    color: done ? 'rgba(26,26,46,0.4)' : 'var(--mb-dark)',
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    textDecoration: done ? 'line-through' : 'none',
                  }}
                >
                  {lesson.title}
                </div>
                <div className="text-[9px] truncate mt-0.5" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {course.title}
                </div>
              </div>
              {lesson.duration && lesson.duration !== '—' && (
                <span className="text-[9px] shrink-0" style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {`約${lesson.duration.split(':')[0]}分`}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
