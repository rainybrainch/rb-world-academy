'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { nextLessonHref } from '@/lib/nextLessonHref';

function localDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function last7Days(): string[] {
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(localDateStr(d));
  }
  return days;
}

const DAY_LABELS = ['日', '月', '火', '水', '木', '金', '土'];

export default function DailyGoalCard() {
  const { streakDays, completedCount, dailyLessonCounts, isCompleted, lastViewedLesson, mounted } = useProgress();

  if (!mounted || completedCount === 0) return null;

  const nextHref = nextLessonHref(isCompleted, lastViewedLesson);

  const msg = streakDays >= 30
    ? `🔮 ${streakDays}日連続伝説！今日もクリアしよう`
    : streakDays >= 14
      ? `🌙 ${streakDays}日連続！2週間継続中！`
      : streakDays >= 7
        ? `⚡ ${streakDays}日連続！1週間達成！`
        : streakDays >= 3
          ? `🔥 ${streakDays}日連続中！今日も1講義クリアしよう`
          : streakDays === 2
            ? '🌱 2日連続！あと1日で習慣が始まる。'
            : streakDays === 1
              ? '🌱 連続記録スタート！今日も続けよう。'
              : '毎日1講義で、確実にうまくなる。';

  const days = last7Days();
  const todayStr = days[days.length - 1];
  const todayCount = dailyLessonCounts[todayStr] ?? 0;
  const todayDone = todayCount > 0;

  // Max lessons in any of the 7 days (for proportional bar height)
  const maxCount = Math.max(1, ...days.map(d => dailyLessonCounts[d] ?? 0));

  return (
    <div
      className="p-4 rounded-xl border-2"
      style={{ background: 'white', borderColor: 'var(--mb-sky)', boxShadow: '3px 3px 0 var(--mb-sky)' }}
    >
      {/* Top row */}
      <div className="flex items-center gap-4 mb-3">
        <div className="text-3xl shrink-0">{todayDone ? '✅' : '🎯'}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <div className="text-xs font-bold" style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}>
              {todayDone ? '今日の目標 達成！' : '今日の目標'}
            </div>
            {todayCount >= 2 && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(91,200,232,0.15)', color: 'var(--mb-sky)', fontFamily: "'Dela Gothic One', sans-serif" }}>
                {todayCount}講義
              </span>
            )}
          </div>
          <div className="text-[11px]" style={{ color: 'rgba(26,26,46,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {todayDone
              ? todayCount >= 5
                ? `🌩️ ${todayCount}講義！超集中学習モード！`
                : todayCount >= 3
                  ? `🔥 ${todayCount}講義完了！今日は特にすごい！`
                  : todayCount === 2
                    ? '🌟 2講義完了！ダブル達成、最高！'
                    : 'よく頑張った！明日もまた来てね。'
              : msg}
          </div>
        </div>
        {!todayDone && (
          <Link
            href={nextHref}
            className="shrink-0 px-3 py-1.5 rounded-lg border-2 text-[11px] font-bold transition-all hover:opacity-80"
            style={{
              background: 'var(--mb-sky)',
              borderColor: 'var(--mb-sky)',
              color: 'var(--mb-dark)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            学ぶ →
          </Link>
        )}
      </div>

      {/* 7-day bar chart (height proportional to lesson count) */}
      <div className="flex items-end justify-between gap-1 pt-2" style={{ borderTop: '1px solid rgba(91,200,232,0.2)' }}>
        {days.map((day, i) => {
          const isToday = i === 6;
          const count = dailyLessonCounts[day] ?? 0;
          const isActive = count > 0;
          const dow = new Date(day + 'T00:00:00').getDay();
          // Bar height: min 4px (inactive) → up to 28px (max count)
          const barH = isActive ? Math.max(8, Math.round((count / maxCount) * 28)) : 4;
          return (
            <div key={day} className="flex flex-col items-center gap-0.5 flex-1" title={isActive ? `${count || 1}講義` : undefined}>
              <div className="flex items-end justify-center w-full" style={{ height: '30px' }}>
                <div
                  className="w-full rounded-t-sm transition-all duration-500 relative flex items-center justify-center"
                  style={{
                    height: `${barH}px`,
                    background: isActive
                      ? isToday ? 'var(--mb-sky)' : 'rgba(91,200,232,0.45)'
                      : 'rgba(26,26,46,0.08)',
                    boxShadow: isActive && isToday ? '0 0 6px rgba(91,200,232,0.4)' : 'none',
                  }}
                >
                  {count >= 2 && (
                    <span style={{ fontSize: '7px', color: isToday ? 'var(--mb-dark)' : 'white', fontFamily: "'Dela Gothic One', sans-serif", lineHeight: 1, position: 'absolute', bottom: 1 }}>
                      {count}
                    </span>
                  )}
                </div>
              </div>
              <span
                className="text-[9px]"
                style={{
                  color: isToday ? 'var(--mb-sky)' : 'rgba(26,26,46,0.3)',
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                  fontWeight: isToday ? 700 : 400,
                }}
              >
                {DAY_LABELS[dow]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
