'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';
import { COURSE_META as categoryMeta } from '@/data/course-meta';

export default function NextLessonCard() {
  const { isCompleted, lastViewedLesson, mounted } = useProgress();

  // Memoize target lesson resolution and progress calculation
  const { targetCourseId, targetCourseTitle, targetLesson, targetCategoryId, isResume, courseDone, courseTotal } = useMemo(() => {
    let courseId = '';
    let courseTitle = '';
    let lesson = categories[0]?.courses[0]?.lessons[0];
    let categoryId = categories[0]?.id ?? '';
    let resume = false;
    let done = 0;
    let total = 0;

    // Resolve target: prefer "resume" (last viewed if not completed), else first incomplete
    if (mounted && lastViewedLesson) {
      // Try to resume last viewed
      const [lvCourseId, lvLessonId] = lastViewedLesson.split('/');
      for (const cat of categories) {
        const course = cat.courses.find(c => c.id === lvCourseId);
        if (course) {
          const l = course.lessons.find(l => l.id === lvLessonId);
          if (l && !l.isComingSoon && !isCompleted(lvCourseId, lvLessonId)) {
            courseId = lvCourseId;
            courseTitle = course.title;
            lesson = l;
            categoryId = cat.id;
            resume = true;
            break;
          }
        }
      }
    }

    if (!resume) {
      // Fall through to first incomplete
      outer: for (const cat of categories) {
        for (const course of cat.courses) {
          for (const l of course.lessons) {
            if (!l.isComingSoon && (!mounted || !isCompleted(course.id, l.id))) {
              courseId = course.id;
              courseTitle = course.title;
              lesson = l;
              categoryId = cat.id;
              break outer;
            }
          }
        }
      }
    }

    // Calculate course-level progress
    if (courseId && mounted) {
      for (const cat of categories) {
        const course = cat.courses.find(c => c.id === courseId);
        if (course) {
          const available = course.lessons.filter(l => !l.isComingSoon);
          total = available.length;
          done = available.filter(l => isCompleted(courseId, l.id)).length;
          break;
        }
      }
    }

    return { targetCourseId: courseId, targetCourseTitle: courseTitle, targetLesson: lesson, targetCategoryId: categoryId, isResume: resume, courseDone: done, courseTotal: total };
  }, [mounted, lastViewedLesson, isCompleted]);

  const meta = categoryMeta[targetCategoryId];
  const href = targetLesson ? `/courses/${targetCourseId}/lessons/${targetLesson.id}` : '/courses';
  const coursePct = courseTotal > 0 ? Math.round((courseDone / courseTotal) * 100) : 0;

  if (!mounted) {
    return (
      <div className="rounded-xl border-2 overflow-hidden" style={{ borderColor: 'rgba(26,26,46,0.1)' }}>
        <div className="p-4 space-y-3" style={{ background: 'rgba(26,26,46,0.04)' }}>
          <div className="h-3 w-20 rounded" style={{ background: 'rgba(26,26,46,0.08)' }} />
          <div className="h-5 rounded" style={{ width: '75%', background: 'rgba(26,26,46,0.08)' }} />
          <div className="h-2 w-full rounded" style={{ background: 'rgba(26,26,46,0.08)' }} />
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="flex flex-col rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
      style={{
        background: 'var(--mb-dark)',
        borderColor: 'var(--mb-dark)',
        boxShadow: '4px 4px 0 var(--mb-gold)',
      }}
    >
      {/* Course progress bar */}
      {mounted && courseTotal > 0 && (
        <div className="h-1" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-full transition-all duration-700"
            style={{ width: `${coursePct}%`, background: meta?.color ?? 'var(--mb-gold)' }}
          />
        </div>
      )}

      <div className="flex items-center gap-4 p-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl border-2"
          style={{ background: 'rgba(245,200,66,0.1)', borderColor: 'rgba(245,200,66,0.3)' }}
        >
          {meta?.icon ?? '📖'}
        </div>

        <div className="flex-1 min-w-0">
          {/* Badge: resume or next */}
          <div className="flex items-center gap-1.5 mb-1">
            {isResume ? (
              <span
                className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(245,200,66,0.2)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                ▶ 続きから
              </span>
            ) : (
              <span
                className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(91,200,232,0.15)', color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                次の講義
              </span>
            )}
            {mounted && courseTotal > 0 && courseDone > 0 && (
              <span
                className="text-[8px]"
                style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Dela Gothic One', sans-serif" }}
              >
                {courseDone}/{courseTotal}
              </span>
            )}
          </div>

          {/* Chapter title */}
          {targetCourseTitle && (
            <div className="text-[10px] truncate mb-0.5" style={{ color: meta?.color ?? 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {targetCourseTitle}
            </div>
          )}

          {/* Lesson title */}
          <div className="text-sm font-bold leading-snug line-clamp-2" style={{ color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {targetLesson?.title ?? '最初の講義を始めよう'}
          </div>

          {targetLesson?.duration && (
            <div className="text-[10px] mt-1 flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {`約${targetLesson.duration.split(':')[0]}分`}
            </div>
          )}
        </div>

        <div
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center border-2"
          style={{ background: 'var(--mb-gold)', borderColor: 'var(--mb-gold)' }}
        >
          <svg className="w-4 h-4" style={{ color: 'var(--mb-dark)' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}
