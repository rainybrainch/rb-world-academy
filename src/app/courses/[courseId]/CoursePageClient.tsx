'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';
import { TOPIC_META } from '@/data/topic-meta';
import CourseOverviewSheet from '@/components/CourseOverviewSheet';
import type { Course, Category } from '@/types';
import ConfettiBurst from '@/components/ConfettiBurst';

type Filter = 'all' | 'todo' | 'done';

function fmtDuration(d: string | undefined): string {
  if (!d || d === '—') return d ?? '';
  const mins = parseInt(d.split(':')[0], 10);
  return isNaN(mins) ? d : `約${mins}分`;
}

interface Props {
  course: Course;
  category: Category;
  courseId: string;
}

type ViewTab = 'overview' | 'lessons';

export default function CoursePageClient({ course, category, courseId }: Props) {
  const { isCompleted, mounted, lessonCompletionDates } = useProgress();
  const [filter, setFilter] = useState<Filter>('all');
  const [lessonMeta, setLessonMeta] = useState<Record<string, { scroll: number; hasNote: boolean; isLiked: boolean }>>({});
  const [tab, setTab] = useState<ViewTab>('overview');
  const categoryMeta = category.topicCategoryId ? TOPIC_META[category.topicCategoryId] : null;
  const categoryColor = categoryMeta?.color ?? 'var(--mb-dark)';

  useEffect(() => {
    if (!mounted) return;
    const meta: typeof lessonMeta = {};
    course.lessons.forEach(l => {
      try {
        const rawScroll = localStorage.getItem(`mb_scroll_${courseId}_${l.id}`);
        const scroll = rawScroll ? parseFloat(rawScroll) : 0;
        const hasNote = !!(localStorage.getItem(`mb_note_${courseId}_${l.id}`)?.trim());
        const isLiked = localStorage.getItem(`mb_like_${courseId}_${l.id}`) === '1';
        if (scroll > 3 || hasNote || isLiked) {
          meta[l.id] = { scroll: scroll > 3 ? scroll : 0, hasNote, isLiked };
        }
      } catch {}
    });
    setLessonMeta(meta);
  }, [mounted, course.lessons, courseId]);

  // Keep legacy scrollPcts for compatibility
  const scrollPcts: Record<string, number> = Object.fromEntries(
    Object.entries(lessonMeta).filter(([, v]) => v.scroll > 0).map(([k, v]) => [k, v.scroll])
  );

  const completedCount = mounted
    ? course.lessons.filter(l => !l.isComingSoon && isCompleted(courseId, l.id)).length
    : 0;
  const availableCount = course.lessons.filter(l => !l.isComingSoon).length;

  // Estimate total duration from lesson duration strings (e.g. "8:30")
  const totalMinutes = course.lessons.reduce((acc, l) => {
    if (!l.duration || l.isComingSoon) return acc;
    const parts = l.duration.split(':');
    return acc + (parseInt(parts[0], 10) || 0) + Math.round((parseInt(parts[1], 10) || 0) / 60);
  }, 0);

  // Remaining time (uncompleted lessons)
  const remainingMinutes = mounted ? course.lessons.reduce((acc, l) => {
    if (!l.duration || l.isComingSoon || isCompleted(courseId, l.id)) return acc;
    const parts = l.duration.split(':');
    return acc + (parseInt(parts[0], 10) || 0) + Math.round((parseInt(parts[1], 10) || 0) / 60);
  }, 0) : totalMinutes;
  const progressPct = availableCount > 0 ? Math.round((completedCount / availableCount) * 100) : 0;

  // First incomplete lesson for smart start button
  const nextLesson = mounted
    ? course.lessons.find(l => !l.isComingSoon && !isCompleted(courseId, l.id)) ?? course.lessons[0]
    : course.lessons[0];

  const courseComplete = mounted && completedCount >= availableCount && availableCount > 0;

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <ConfettiBurst trigger={courseComplete} />
      {/* Breadcrumb */}
      <nav className="text-xs mb-4 flex items-center gap-1.5 flex-wrap" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/courses" className="hover:underline">コース</Link>
        <span>/</span>
        {category.topicCategoryId ? (
          <Link href={`/categories/${category.topicCategoryId}`} className="hover:underline">{category.title}</Link>
        ) : (
          <span>{category.title}</span>
        )}
        <span>/</span>
        <span style={{ color: 'var(--mb-dark)' }}>{course.title}</span>
      </nav>

      {/* Course header */}
      <div
        className="rounded-xl p-4 mb-5 border-2"
        style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-dark)', boxShadow: '4px 4px 0 var(--mb-gold)' }}
      >
        <div className="text-[10px] tracking-[3px] mb-1" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {category.title}
        </div>
        <h1 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {course.title}
        </h1>

        {/* Stats row */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {availableCount}講義
          </span>
          {totalMinutes > 0 && (
            <span className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {totalMinutes >= 60
                ? `約${Math.floor(totalMinutes / 60)}時間${totalMinutes % 60 > 0 ? `${totalMinutes % 60}分` : ''}`
                : `約${totalMinutes}分`}
            </span>
          )}
          {mounted && remainingMinutes > 0 && completedCount < availableCount && (
            <span className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {remainingMinutes >= 60
                ? `残り約${Math.floor(remainingMinutes / 60)}時間${remainingMinutes % 60 > 0 ? `${remainingMinutes % 60}分` : ''}`
                : `残り約${remainingMinutes}分`}
            </span>
          )}
          {course.lessons.some(l => l.gameTags?.length) && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(245,200,66,0.15)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              🎲 ZAi連動
            </span>
          )}
        </div>
        {course.description && (
          <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {course.description}
          </p>
        )}

        {/* Tab selector */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setTab('overview')}
            className="flex-1 py-2 px-3 rounded-lg text-sm font-bold border-2 transition-all"
            style={{
              background: tab === 'overview' ? 'var(--mb-gold)' : 'rgba(245,200,66,0.1)',
              borderColor: tab === 'overview' ? 'var(--mb-gold)' : 'rgba(245,200,66,0.3)',
              color: tab === 'overview' ? 'var(--mb-dark)' : 'var(--mb-gold)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            📖 全体フロー
          </button>
          <button
            type="button"
            onClick={() => setTab('lessons')}
            className="flex-1 py-2 px-3 rounded-lg text-sm font-bold border-2 transition-all"
            style={{
              background: tab === 'lessons' ? 'var(--mb-gold)' : 'rgba(245,200,66,0.1)',
              borderColor: tab === 'lessons' ? 'var(--mb-gold)' : 'rgba(245,200,66,0.3)',
              color: tab === 'lessons' ? 'var(--mb-dark)' : 'var(--mb-gold)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            📝 この章
          </button>
        </div>

        {/* Estimated completion */}
        {mounted && completedCount > 0 && completedCount < availableCount && (() => {
          const courseDates = Object.entries(lessonCompletionDates)
            .filter(([key]) => key.startsWith(courseId + '/'))
            .map(([, date]) => date);
          const activeDays = new Set(courseDates).size;
          const remaining = availableCount - completedCount;
          if (activeDays === 0) return null;
          const eta = Math.ceil(remaining * (activeDays / completedCount));
          return (
            <div className="mb-3 flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <span className="text-sm">📅</span>
              <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                このペースなら約<span style={{ color: 'var(--mb-gold)', fontWeight: 'bold' }}>{eta}日</span>で完了できます
              </span>
            </div>
          );
        })()}

        {/* Course complete banner */}
        {mounted && completedCount >= availableCount && availableCount > 0 && (() => {
          const idx = category.courses.findIndex(c => c.id === courseId);
          const nextCourse = category.courses[idx + 1] ?? null;
          return (
            <div
              className="mb-4 rounded-xl overflow-hidden border-2"
              style={{ borderColor: 'var(--mb-gold)', boxShadow: '0 0 20px rgba(245,200,66,0.2)' }}
            >
              <div className="px-4 py-3 flex items-center gap-3" style={{ background: 'rgba(245,200,66,0.12)' }}>
                <span className="text-3xl shrink-0">🏆</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}>
                    {nextCourse ? '完全制覇！' : 'コース完全制覇！'}
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    全{availableCount}講義クリア ⭐⭐⭐
                  </div>
                </div>
                {nextCourse ? (
                  <Link
                    href={`/courses/${nextCourse.id}`}
                    className="shrink-0 text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all hover:opacity-90"
                    style={{ background: 'var(--mb-gold)', borderColor: 'var(--mb-gold)', color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    次の章へ →
                  </Link>
                ) : (
                  <Link
                    href={category.topicCategoryId ? `/categories/${category.topicCategoryId}` : '/courses'}
                    className="shrink-0 text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all hover:opacity-90"
                    style={{ background: 'var(--mb-gold)', borderColor: 'var(--mb-gold)', color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    コース一覧へ →
                  </Link>
                )}
              </div>
            </div>
          );
        })()}

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              進捗
            </span>
            <span className="text-[10px] font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}>
              {mounted ? `${completedCount} / ${availableCount}` : `0 / ${availableCount}`}
            </span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%`, background: 'var(--mb-gold)' }}
            />
          </div>

          {/* Lesson dot-map */}
          {mounted && availableCount > 0 && (
            <div className="flex items-center gap-1 mt-2 flex-wrap">
              {course.lessons
                .filter(l => !l.isComingSoon)
                .slice(0, 20)
                .map((l, i) => {
                  const done = isCompleted(courseId, l.id);
                  const isNext = l.id === nextLesson?.id && !done;
                  return (
                    <Link
                      key={l.id}
                      href={`/courses/${courseId}/lessons/${l.id}`}
                      title={l.title}
                      className="flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 shrink-0"
                      style={{
                        width: isNext ? '22px' : '14px',
                        height: isNext ? '22px' : '14px',
                        background: done ? 'var(--mb-gold)' : isNext ? 'var(--mb-sky)' : 'rgba(255,255,255,0.15)',
                        fontSize: '8px',
                        fontFamily: "'Dela Gothic One', sans-serif",
                        color: done ? 'var(--mb-dark)' : 'white',
                      }}
                    >
                      {done ? (
                        <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : isNext ? '▶' : i < 9 ? (i + 1) : ''}
                    </Link>
                  );
                })}
              {availableCount > 20 && (
                <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  +{availableCount - 20}
                </span>
              )}
            </div>
          )}
        </div>

        {nextLesson && (
          <Link
            href={`/courses/${courseId}/lessons/${nextLesson.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border-2 transition-all hover:-translate-y-0.5"
            style={{
              background: 'var(--mb-gold)',
              borderColor: 'var(--mb-gold)',
              color: 'var(--mb-dark)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
              boxShadow: '2px 2px 0 rgba(255,255,255,0.2)',
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            {completedCount > 0 && completedCount < availableCount ? '続きから始める' : completedCount >= availableCount ? '最初から復習する' : '最初のレッスンを始める'}
          </Link>
        )}
      </div>

      {/* Tab content: lessons */}
      {tab === 'lessons' && (
        <div
          className="rounded-xl overflow-hidden border-2"
        style={{ borderColor: categoryColor, background: 'white', boxShadow: `3px 3px 0 ${categoryColor}` }}
      >
        <div className="px-4 py-3 border-b-2 flex items-center justify-between" style={{ background: 'rgba(26,26,46,0.04)', borderColor: 'rgba(26,26,46,0.1)' }}>
          <h2 className="text-sm font-bold" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>講義一覧</h2>
          {mounted && (
            <div className="flex gap-1">
              {(['all', 'todo', 'done'] as Filter[]).map(f => (
                <button type="button"
                  key={f}
                  onClick={() => setFilter(f)}
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full border transition-all"
                  style={{
                    background: filter === f ? 'var(--mb-dark)' : 'transparent',
                    borderColor: filter === f ? 'var(--mb-dark)' : 'rgba(26,26,46,0.2)',
                    color: filter === f ? 'var(--mb-gold)' : 'rgba(26,26,46,0.5)',
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                  }}
                >
                  {f === 'all' ? 'すべて' : f === 'todo' ? '未完了' : '完了'}
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          {course.lessons.map((lesson, idx) => {
            const done = mounted && !lesson.isComingSoon && isCompleted(courseId, lesson.id);
            if (filter === 'todo' && (done || lesson.isComingSoon)) return null;
            if (filter === 'done' && !done) return null;
            const isNext = lesson.id === nextLesson?.id && !done && mounted;

            return (
              <Link
                key={lesson.id}
                href={lesson.isComingSoon ? '#' : `/courses/${courseId}/lessons/${lesson.id}`}
                className="flex items-center gap-3 px-4 py-3.5 transition-colors border-b"
                style={{
                  borderColor: 'rgba(26,26,46,0.08)',
                  background: isNext ? 'rgba(245,200,66,0.06)' : 'white',
                  pointerEvents: lesson.isComingSoon ? 'none' : undefined,
                }}
              >
                {/* Number / check */}
                <div
                  className="w-7 h-7 rounded flex items-center justify-center shrink-0"
                  style={{
                    background: done ? 'var(--mb-green)' : isNext ? 'var(--mb-gold)' : 'var(--mb-dark)',
                    color: done || isNext ? 'white' : 'var(--mb-gold)',
                  }}
                >
                  {done ? (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-[11px] font-bold" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>{idx + 1}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-1.5 flex-wrap">
                    <span
                      className="text-sm font-medium flex-1 min-w-0"
                      style={{
                        color: lesson.isComingSoon ? 'rgba(26,26,46,0.3)' : done ? 'rgba(26,26,46,0.5)' : 'var(--mb-dark)',
                        fontFamily: "'Zen Maru Gothic', sans-serif",
                        textDecoration: done ? 'line-through' : 'none',
                        wordBreak: 'break-word',
                      }}
                    >
                      {lesson.title}
                    </span>
                    {isNext && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0" style={{ background: 'var(--mb-gold)', color: 'var(--mb-dark)' }}>
                        NEXT
                      </span>
                    )}
                    {mounted && lessonMeta[lesson.id]?.isLiked && (
                      <span className="text-[10px] shrink-0" title="いいね済み">❤️</span>
                    )}
                    {mounted && lessonMeta[lesson.id]?.hasNote && (
                      <span className="text-[10px] shrink-0" title="メモあり">📝</span>
                    )}
                    {lesson.isPremium && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0" style={{ background: 'rgba(245,200,66,0.2)', color: '#D4A017' }}>プレミアム</span>
                    )}
                    {lesson.isComingSoon && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0" style={{ background: 'rgba(26,26,46,0.08)', color: 'rgba(26,26,46,0.4)' }}>準備中</span>
                    )}
                    {lesson.gameTags?.length ? (
                      <span className="text-[9px] px-1.5 py-0.5 rounded font-bold shrink-0" style={{ background: 'rgba(245,200,66,0.15)', color: '#D4A017' }}>🎲 ZAi</span>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{fmtDuration(lesson.duration)}</span>
                    {done && (() => {
                      const dateStr = lessonCompletionDates[`${courseId}/${lesson.id}`];
                      if (!dateStr) return null;
                      const d = new Date(dateStr + 'T00:00:00');
                      const today = new Date(); today.setHours(0, 0, 0, 0);
                      const diff = Math.round((today.getTime() - d.getTime()) / 86400000);
                      const label = diff === 0 ? '今日' : diff === 1 ? '昨日' : diff <= 6 ? `${diff}日前` : `${d.getMonth() + 1}/${d.getDate()}`;
                      return <span className="text-[9px]" style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{label}</span>;
                    })()}
                    {!done && scrollPcts[lesson.id] && (
                      <div className="flex items-center gap-1.5">
                        <div className="w-16 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(91,200,232,0.2)' }}>
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${scrollPcts[lesson.id]}%`, background: 'var(--mb-sky)' }}
                          />
                        </div>
                        <span className="text-[9px] font-bold" style={{ color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                          読みかけ
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {!lesson.isComingSoon && (
                  <svg className="w-4 h-4 shrink-0" style={{ color: done ? 'var(--mb-green)' : 'rgba(26,26,46,0.25)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>
      </div>
      )}

      {/* Tab content: overview */}
      {tab === 'overview' && (
        <CourseOverviewSheet
          category={category}
          meta={{ shadow: 'none', icon: '📖', label: category.title, color: 'var(--mb-gold)' }}
          onClose={() => {}}
        />
      )}
    </div>
  );
}
