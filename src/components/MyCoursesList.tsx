'use client';

import Link from 'next/link';
import { useMyCourses } from '@/hooks/useMyCourses';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';
import { COURSE_META as courseMeta } from '@/data/course-meta';

export default function MyCoursesList() {
  const { myCourses, remove, mounted } = useMyCourses();
  const { isCompleted } = useProgress();

  if (!mounted || myCourses.length === 0) return null;

  const selectedCourses = myCourses
    .map(id => categories.find(c => c.id === id))
    .filter(Boolean) as typeof categories;

  if (selectedCourses.length === 0) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-gold)' }} />
          <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            マイコース
          </span>
        </div>
        <Link
          href="/courses"
          className="text-xs font-bold hover:underline"
          style={{ color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          変更する →
        </Link>
      </div>

      <div className="space-y-2">
        {selectedCourses.map(course => {
          const meta = courseMeta[course.id];
          const firstChapter = course.courses[0];

          const allLessons = course.courses.flatMap(ch =>
            ch.lessons.filter(l => !l.isComingSoon).map(l => ({ courseId: ch.id, lessonId: l.id }))
          );
          const availableCount = allLessons.length;
          const done = mounted ? allLessons.filter(({ courseId, lessonId }) => isCompleted(courseId, lessonId)).length : 0;
          const pct = availableCount > 0 ? Math.round((done / availableCount) * 100) : 0;
          const accent = meta?.color ?? 'var(--mb-gold)';

          // 「続き」は最初の未完了レッスンへ、全完了なら最初の章へ
          const nextLesson = mounted && done > 0
            ? allLessons.find(({ courseId, lessonId }) => !isCompleted(courseId, lessonId))
            : null;
          const href = nextLesson
            ? `/courses/${nextLesson.courseId}/lessons/${nextLesson.lessonId}`
            : firstChapter ? `/courses/${firstChapter.id}` : '/courses';

          return (
            <div
              key={course.id}
              className="rounded-xl border-2 bg-white overflow-hidden"
              style={{ borderColor: 'var(--mb-dark)', boxShadow: `2px 2px 0 ${accent}` }}
            >
              <div className="flex items-center gap-3">
                {/* Color accent */}
                <div
                  className="w-1.5 self-stretch shrink-0"
                  style={{ background: accent }}
                />

                {/* Icon */}
                <div className="text-xl shrink-0 py-3">
                  {meta?.icon ?? '📚'}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 py-3">
                  <div
                    className="text-xs font-bold truncate"
                    style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {course.title}
                  </div>
                  <div className="text-[10px] mt-0.5 flex items-center gap-1.5" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {done > 0 ? `${done}/${availableCount}講義完了` : `${course.courses.length}章 · ${availableCount}講義`}
                    {pct === 100 && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(76,175,125,0.12)', color: 'var(--mb-green)', fontFamily: "'Dela Gothic One', sans-serif" }}>
                        完了！
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 pr-2 shrink-0">
                  <Link
                    href={href}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all hover:opacity-80"
                    style={{ background: accent, color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    aria-label={pct === 100 ? `${course.title}を復習する` : done > 0 ? `${course.title}の続きから学ぶ` : `${course.title}を学ぶ`}
                  >
                    {pct === 100 ? '復習' : done > 0 ? '続き' : '学ぶ'}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <button type="button"
                    onClick={() => remove(course.id)}
                    className="w-6 h-6 flex items-center justify-center rounded-full transition-all hover:opacity-60"
                    style={{ color: 'rgba(26,26,46,0.3)' }}
                    title="マイコースから削除"
                    aria-label={`${course.title}をマイコースから削除`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 進捗バー */}
              {mounted && done > 0 && (
                <div className="px-3 pb-2.5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="h-1.5 flex-1 rounded-full overflow-hidden mr-2" style={{ background: `${accent}20` }}>
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: accent }} />
                    </div>
                    <span className="text-[9px] font-bold shrink-0" style={{ color: accent, fontFamily: "'Dela Gothic One', sans-serif" }}>
                      {pct}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
