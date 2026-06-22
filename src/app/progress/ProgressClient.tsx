'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';
import StreakCalendar from '@/components/StreakCalendar';
import MilestoneCard from '@/components/MilestoneCard';
import MoneyQuote from '@/components/MoneyQuote';
import LikedLessons from '@/components/LikedLessons';
import AllNotes from '@/components/AllNotes';
import WeeklySummary from '@/components/WeeklySummary';
import ShareProgress from '@/components/ShareProgress';
import AchievementsCard from '@/components/AchievementsCard';
import WeeklyActivityChart from '@/components/WeeklyActivityChart';
import PacePrediction from '@/components/PacePrediction';
import StudyGoalCard from '@/components/StudyGoalCard';
import { ACHIEVEMENTS } from '@/data/achievements';
import { COURSE_META } from '@/data/course-meta';

export default function ProgressClient() {
  const { isCompleted, completedCount, streakDays, bestStreak, completedLessonKeys, mounted } = useProgress();
  const [hideNotStarted, setHideNotStarted] = useState(false);

  const totalLessons = categories.flatMap(c => c.courses).flatMap(c => c.lessons).filter(l => !l.isComingSoon).length;
  const overallPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const earnedAchievements = useMemo(
    () => mounted ? ACHIEVEMENTS.filter(a => a.check(completedCount, streakDays, bestStreak, completedLessonKeys)) : [],
    [mounted, completedCount, streakDays, bestStreak, completedLessonKeys]
  );

  const studyMinutes = mounted
    ? categories.flatMap(c => c.courses).flatMap(course =>
        course.lessons
          .filter(l => !l.isComingSoon && isCompleted(course.id, l.id) && l.duration)
          .map(l => {
            const parts = l.duration!.split(':');
            return (parseInt(parts[0], 10) || 0) + Math.round((parseInt(parts[1], 10) || 0) / 60);
          })
      ).reduce((a, b) => a + b, 0)
    : 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <div
          className="inline-block text-[10px] font-bold tracking-[4px] px-3 py-1 rounded mb-3"
          style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          REPORT
        </div>
        <h1 className="text-2xl" style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}>
          学習レポート
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          あなたの学習記録と進捗
        </p>
      </div>

      {/* Quote of the day */}
      <MoneyQuote />

      {/* Milestone */}
      <div className="mb-6">
        <MilestoneCard />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
        {[
          { label: '完了講義', value: mounted ? String(completedCount) : '—', unit: '講義', color: 'var(--mb-gold)' },
          { label: '連続学習', value: mounted ? String(streakDays) : '—', unit: '日', color: 'var(--mb-sky)' },
          { label: '最高記録', value: mounted ? String(bestStreak) : '—', unit: '日', color: 'var(--mb-red)' },
          { label: '実績数', value: mounted ? `${earnedAchievements.length}/${ACHIEVEMENTS.length}` : '—', unit: '', color: 'var(--mb-green)' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center py-4 rounded-xl border-2"
            style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: `3px 3px 0 ${stat.color}` }}
          >
            <span style={{ fontFamily: "'Dela Gothic One', sans-serif", fontSize: '28px', color: stat.color, lineHeight: 1 }}>
              {stat.value}
            </span>
            <span className="text-[9px] mt-1" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {stat.unit}
            </span>
            <span className="text-[10px] mt-0.5 font-bold" style={{ color: 'rgba(26,26,46,0.6)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Study time */}
      {mounted && studyMinutes > 0 && (
        <div
          className="mb-6 px-5 py-4 rounded-xl border-2 flex items-center gap-4"
          style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-dark)', boxShadow: '3px 3px 0 var(--mb-sky)' }}
        >
          <div className="text-3xl shrink-0">⏱️</div>
          <div>
            <div style={{ fontFamily: "'Dela Gothic One', sans-serif", fontSize: '22px', color: 'var(--mb-sky)', lineHeight: 1 }}>
              {studyMinutes >= 60
                ? `約${Math.floor(studyMinutes / 60)}時間${studyMinutes % 60 > 0 ? `${studyMinutes % 60}分` : ''}`
                : `約${studyMinutes}分`}
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              累計学習時間（推定）
            </div>
          </div>
        </div>
      )}

      {/* Overall progress bar */}
      <div
        className="mb-8 p-4 rounded-xl border-2"
        style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: '3px 3px 0 var(--mb-gold)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
            全体進捗
          </span>
          <span style={{ fontFamily: "'Dela Gothic One', sans-serif", fontSize: '14px', color: 'var(--mb-gold)' }}>
            {mounted ? overallPct : 0}%
          </span>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,46,0.08)' }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: mounted ? `${overallPct}%` : '0%', background: 'var(--mb-gold)' }}
          />
        </div>
        <p className="text-[10px] mt-2" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {mounted ? completedCount : 0} / {totalLessons} 講義完了
        </p>
      </div>

      {/* Achievements */}
      <AchievementsCard />

      {/* Share progress */}
      <ShareProgress />

      {/* Weekly summary */}
      <WeeklySummary />

      {/* Weekly activity chart */}
      <WeeklyActivityChart />

      {/* Pace prediction */}
      <PacePrediction totalLessons={totalLessons} />

      {/* Study goal */}
      <StudyGoalCard />

      {/* Streak calendar */}
      <div className="mb-8">
        <StreakCalendar />
      </div>

      {/* Per-category progress */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
            カテゴリ別進捗
          </h2>
          {mounted && completedCount > 0 && (
            <button type="button"
              onClick={() => setHideNotStarted(h => !h)}
              className="text-[10px] font-bold px-2.5 py-1 rounded-full border transition-all"
              style={{
                borderColor: hideNotStarted ? 'var(--mb-sky)' : 'rgba(26,26,46,0.2)',
                background: hideNotStarted ? 'rgba(91,200,232,0.12)' : 'transparent',
                color: hideNotStarted ? 'var(--mb-sky)' : 'rgba(26,26,46,0.45)',
                fontFamily: "'Zen Maru Gothic', sans-serif",
              }}
            >
              {hideNotStarted ? '全表示' : '未着手を非表示'}
            </button>
          )}
        </div>
        {categories.map((category) => {
          const accent = COURSE_META[category.id]?.color ?? '#ccc';
          const lessonPairs = category.courses.flatMap(c =>
            c.lessons.filter(l => !l.isComingSoon).map(l => ({ courseId: c.id, lessonId: l.id }))
          );
          const done = mounted
            ? lessonPairs.filter(({ courseId, lessonId }) => isCompleted(courseId, lessonId)).length
            : 0;
          const pct = lessonPairs.length > 0 ? Math.round((done / lessonPairs.length) * 100) : 0;

          if (hideNotStarted && done === 0) return null;

          return (
            <div
              key={category.id}
              className="p-4 rounded-xl border-2"
              style={{ background: 'white', borderColor: accent, boxShadow: `3px 3px 0 ${accent}` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
                  {category.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold" style={{ fontFamily: "'Dela Gothic One', sans-serif", color: accent }}>
                    {done}/{lessonPairs.length}
                  </span>
                  {category.topicCategoryId && (
                    <Link
                      href={`/categories/${category.topicCategoryId}`}
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full transition-opacity hover:opacity-70"
                      style={{ background: `${accent}18`, color: accent, fontFamily: "'Zen Maru Gothic', sans-serif", border: `1px solid ${accent}40` }}
                      onClick={e => e.stopPropagation()}
                    >
                      コース →
                    </Link>
                  )}
                </div>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,46,0.08)' }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: accent }}
                />
              </div>

              {/* Chapter list */}
              <div className="mt-3 space-y-1">
                {category.courses.map((course) => {
                  const courseLessons = course.lessons.filter(l => !l.isComingSoon);
                  const courseDone = mounted ? courseLessons.filter(l => isCompleted(course.id, l.id)).length : 0;
                  const allChDone = courseDone === courseLessons.length && courseLessons.length > 0;

                  const nextIncomplete = mounted && !allChDone && courseDone > 0
                    ? courseLessons.find(l => !isCompleted(course.id, l.id))
                    : null;
                  const chapterHref = nextIncomplete
                    ? `/courses/${course.id}/lessons/${nextIncomplete.id}`
                    : `/courses/${course.id}`;

                  return (
                    <Link
                      key={course.id}
                      href={chapterHref}
                      className="flex items-center gap-2 py-1 transition-opacity hover:opacity-70"
                    >
                      <div
                        className="w-3.5 h-3.5 rounded-full shrink-0 flex items-center justify-center"
                        style={{ background: allChDone ? 'var(--mb-green)' : courseDone > 0 ? accent : 'rgba(26,26,46,0.12)' }}
                      >
                        {allChDone && (
                          <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span
                        className="text-[10px] flex-1 truncate"
                        style={{
                          fontFamily: "'Zen Maru Gothic', sans-serif",
                          color: allChDone ? 'rgba(26,26,46,0.4)' : 'rgba(26,26,46,0.7)',
                          textDecoration: allChDone ? 'line-through' : 'none',
                        }}
                      >
                        {course.title}
                      </span>
                      <span className="text-[9px] shrink-0" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Dela Gothic One', sans-serif" }}>
                        {courseDone}/{courseLessons.length}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* All notes */}
      <AllNotes />

      {/* Liked lessons */}
      <LikedLessons />

      {/* Earned achievements summary */}
      {mounted && earnedAchievements.length > 0 && (
        <div
          className="p-4 rounded-xl border-2 mb-4"
          style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-gold)', boxShadow: '4px 4px 0 var(--mb-gold)' }}
        >
          <div className="text-xs font-bold mb-3" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-gold)' }}>
            獲得実績 ({earnedAchievements.length}/{ACHIEVEMENTS.length})
          </div>
          <div className="grid grid-cols-2 gap-2">
            {earnedAchievements.map((ach) => (
              <div
                key={ach.id}
                className="flex items-center gap-2 px-2.5 py-2 rounded-lg border"
                style={{ background: 'rgba(245,200,66,0.08)', borderColor: 'rgba(245,200,66,0.25)' }}
              >
                <span className="text-xl shrink-0">{ach.icon}</span>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold leading-tight truncate" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {ach.title}
                  </div>
                  <div className="text-[9px] leading-tight mt-0.5 truncate" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {ach.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {mounted && completedCount === 0 && (
        <div className="text-center py-10">
          <div className="text-4xl mb-3">📚</div>
          <p className="text-sm font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
            まだ学習記録がありません
          </p>
          <p className="text-xs mt-1 mb-4" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            コースを受講して、学習を始めましょう！
          </p>
          <Link
            href="/courses"
            className="inline-block px-6 py-2.5 rounded-lg text-sm font-bold border-2 transition-all hover:-translate-y-0.5"
            style={{
              background: 'var(--mb-dark)',
              borderColor: 'var(--mb-dark)',
              color: 'var(--mb-gold)',
              boxShadow: '3px 3px 0 var(--mb-gold)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            コース一覧へ
          </Link>
        </div>
      )}
    </div>
  );
}
