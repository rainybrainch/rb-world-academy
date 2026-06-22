'use client';

import { useProgress } from '@/hooks/useProgress';

const DAY_LABELS = ['月', '火', '水', '木', '金', '土', '日'];

export default function WeeklySummary() {
  const { dailyLessonCounts, weeklyCompletedCount, mounted } = useProgress();
  if (!mounted) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const localDate = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const todayStr = localDate(today);
  const dayOfWeek = (today.getDay() + 6) % 7; // 0=Mon … 6=Sun

  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - dayOfWeek + i);
    const dateStr = localDate(d);
    const count = dailyLessonCounts[dateStr] ?? 0;
    return {
      label: DAY_LABELS[i],
      dateStr,
      count,
      active: count > 0,
      isToday: dateStr === todayStr,
      isFuture: d.getTime() > today.getTime(),
    };
  });

  const daysActive = week.filter(d => d.active && !d.isFuture).length;
  const maxCount = Math.max(1, ...week.map(d => d.count));
  const weekTotal = weeklyCompletedCount;

  // Last week's total for comparison
  const lastWeekTotal = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - dayOfWeek - 7 + i);
    return dailyLessonCounts[localDate(d)] ?? 0;
  }).reduce((a, b) => a + b, 0);
  const weekDiff = weekTotal - lastWeekTotal;

  // Current week tail streak
  const streak = week.filter(d => !d.isFuture).reduce((acc, d) => d.active ? acc + 1 : 0, 0);

  return (
    <div
      className="mb-8 p-4 rounded-xl border-2"
      style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: '3px 3px 0 var(--mb-sky)' }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
          今週の学習
        </span>
        <div className="flex items-center gap-2">
          {weekTotal > 0 && (
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(245,200,66,0.15)', color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              {weekTotal}講義
            </span>
          )}
          {lastWeekTotal > 0 && (
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
              style={{
                background: weekDiff > 0 ? 'rgba(76,175,125,0.12)' : weekDiff < 0 ? 'rgba(232,53,74,0.1)' : 'rgba(26,26,46,0.08)',
                color: weekDiff > 0 ? 'var(--mb-green)' : weekDiff < 0 ? 'var(--mb-red)' : 'rgba(26,26,46,0.4)',
                fontFamily: "'Dela Gothic One', sans-serif",
              }}
            >
              {weekDiff > 0 ? `+${weekDiff}` : weekDiff < 0 ? `${weekDiff}` : '±0'} 先週比
            </span>
          )}
          <span style={{ fontFamily: "'Dela Gothic One', sans-serif", fontSize: '14px', color: 'var(--mb-sky)' }}>
            {daysActive} / 7日
          </span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex gap-2 justify-between mb-3 items-end" style={{ height: '52px' }}>
        {week.map(({ label, count, active, isToday, isFuture }) => {
          const barH = isFuture || count === 0
            ? 12
            : Math.max(14, Math.round((count / maxCount) * 44));
          const bg = isFuture
            ? 'rgba(26,26,46,0.04)'
            : count === 0
              ? 'rgba(26,26,46,0.08)'
              : count >= 5
                ? 'var(--mb-gold)'
                : count >= 3
                  ? 'var(--mb-sky)'
                  : count === 2
                    ? 'rgba(91,200,232,0.75)'
                    : 'rgba(91,200,232,0.5)';

          return (
            <div key={label} className="flex flex-col items-center gap-1 flex-1 justify-end">
              <div className="relative w-full flex items-center justify-center">
                {count >= 2 && (
                  <span
                    className="absolute"
                    style={{
                      fontSize: '7px',
                      color: 'white',
                      fontFamily: "'Dela Gothic One', sans-serif",
                      lineHeight: 1,
                      bottom: barH + 2,
                    }}
                  >
                    {count}
                  </span>
                )}
                <div
                  className="w-full rounded-md transition-all duration-500"
                  style={{
                    height: `${barH}px`,
                    background: bg,
                    border: isToday ? '2px solid var(--mb-gold)' : '2px solid transparent',
                    boxShadow: active && isToday ? '0 0 6px rgba(91,200,232,0.35)' : 'none',
                  }}
                />
              </div>
              <span
                className="text-[9px] font-bold"
                style={{
                  color: isToday ? 'var(--mb-gold)' : active ? 'var(--mb-sky)' : 'rgba(26,26,46,0.3)',
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2">
        {weekTotal === 0 ? (
          <p className="text-[10px] flex-1" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            今週はまだ学習がありません。<span style={{ color: 'var(--mb-sky)', fontWeight: 'bold' }}>今日から始めよう！</span>
          </p>
        ) : daysActive === 7 ? (
          <p className="text-[10px] flex-1 font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            🎉 今週7日間パーフェクト！
          </p>
        ) : streak > 0 ? (
          <p className="text-[10px] flex-1" style={{ color: 'rgba(26,26,46,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            今週は連続<span style={{ color: 'var(--mb-sky)', fontWeight: 'bold' }}>{streak}日</span>学習中！
          </p>
        ) : null}
        <div className="flex items-center gap-1.5 ml-auto">
          {[
            { label: '1', bg: 'rgba(91,200,232,0.5)' },
            { label: '2', bg: 'rgba(91,200,232,0.75)' },
            { label: '3-4', bg: 'var(--mb-sky)' },
            { label: '5+🌩️', bg: 'var(--mb-gold)' },
          ].map(({ label, bg }) => (
            <div key={label} className="flex items-center gap-0.5">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ background: bg }} />
              <span className="text-[8px]" style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
