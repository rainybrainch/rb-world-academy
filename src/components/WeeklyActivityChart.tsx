'use client';

import { useMemo } from 'react';
import { useProgress } from '@/hooks/useProgress';

const DAY_LABELS = ['日', '月', '火', '水', '木', '金', '土'];

// Sky blue intensity based on lesson count
function intensityColor(count: number, isToday: boolean): string {
  if (isToday && count === 0) return 'rgba(245,200,66,0.18)';
  if (count === 0) return 'rgba(26,26,46,0.07)';
  if (count === 1) return 'rgba(91,200,232,0.4)';
  if (count === 2) return 'rgba(91,200,232,0.7)';
  if (count >= 5) return 'var(--mb-gold)'; // super_speed!
  return 'var(--mb-sky)'; // 3-4
}

export default function WeeklyActivityChart() {
  const { dailyLessonCounts, mounted } = useProgress();

  const { weeks, startStr, availableDays } = useMemo(() => {
    const localStr = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = localStr(today);
    const todayDow = today.getDay();

    // Align to Sunday: start = Sunday 4 weeks ago
    const start = new Date(today);
    start.setDate(today.getDate() - todayDow - 21);
    const startIso = localStr(start);

    const days: { date: string; label: string; count: number; isToday: boolean; isFuture: boolean }[] = [];
    for (let i = 0; i < 28; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const iso = localStr(d);
      const isFuture = iso > todayStr;
      days.push({
        date: iso,
        label: `${d.getMonth() + 1}/${d.getDate()}`,
        count: isFuture ? 0 : (dailyLessonCounts[iso] ?? 0),
        isToday: iso === todayStr,
        isFuture,
      });
    }
    const result: typeof days[] = [];
    for (let w = 0; w < 4; w++) result.push(days.slice(w * 7, w * 7 + 7));
    return { weeks: result, startStr: startIso, availableDays: days.filter(d => !d.isFuture).length };
  }, [dailyLessonCounts]);

  const totalActive = useMemo(() => {
    return Object.entries(dailyLessonCounts).filter(([d, c]) => d >= startStr && c > 0).length;
  }, [dailyLessonCounts, startStr]);

  const totalLessonsThisMonth = useMemo(() => {
    return Object.entries(dailyLessonCounts)
      .filter(([d]) => d >= startStr)
      .reduce((a, [, c]) => a + c, 0);
  }, [dailyLessonCounts, startStr]);

  if (!mounted) return null;

  return (
    <div
      className="mb-8 p-4 rounded-xl border-2"
      style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: '3px 3px 0 var(--mb-sky)' }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
          過去4週間の活動
        </span>
        <div className="flex items-center gap-2">
          {totalLessonsThisMonth > 0 && (
            <span className="text-[10px] font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}>
              {totalLessonsThisMonth}講義
            </span>
          )}
          <span
            className="text-[11px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(91,200,232,0.15)', color: 'var(--mb-sky)', fontFamily: "'Dela Gothic One', sans-serif" }}
          >
            {totalActive}日 / {availableDays}日
          </span>
        </div>
      </div>

      {/* Day-of-week header */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAY_LABELS.map((d, i) => (
          <div
            key={d}
            className="text-center text-[9px]"
            style={{
              fontFamily: "'Zen Maru Gothic', sans-serif",
              color: i === 0 || i === 6 ? 'rgba(232,53,74,0.6)' : 'rgba(26,26,46,0.35)',
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* 4 weeks × 7 days grid */}
      <div className="space-y-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 gap-1">
            {week.map((day) => (
              <div
                key={day.date}
                title={day.isFuture ? undefined : `${day.label}${day.count > 0 ? ` · ${day.count}講義` : ''}`}
                className="aspect-square rounded-md relative flex items-center justify-center"
                style={{
                  background: day.isFuture ? 'rgba(26,26,46,0.03)' : intensityColor(day.count, day.isToday),
                  border: day.isToday ? '2px solid var(--mb-dark)' : day.isFuture ? '1px dashed rgba(26,26,46,0.1)' : '1px solid transparent',
                  boxShadow: !day.isFuture && day.count > 0 ? '1px 1px 0 rgba(0,0,0,0.1)' : 'none',
                  transition: 'background 0.2s',
                }}
              >
                {!day.isFuture && day.count >= 2 && (
                  <span style={{ fontSize: '7px', color: 'white', fontFamily: "'Dela Gothic One', sans-serif", lineHeight: 1 }}>
                    {day.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3 mt-3 flex-wrap">
        <span className="text-[8px]" style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>講義数：</span>
        {[
          { label: '0', bg: 'rgba(26,26,46,0.07)' },
          { label: '1', bg: 'rgba(91,200,232,0.4)' },
          { label: '2', bg: 'rgba(91,200,232,0.7)' },
          { label: '3-4', bg: 'var(--mb-sky)' },
          { label: '5+🌩️', bg: 'var(--mb-gold)' },
        ].map(({ label, bg }) => (
          <div key={label} className="flex items-center gap-1">
            <div className="w-3 h-3 rounded" style={{ background: bg }} />
            <span className="text-[8px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1 ml-1">
          <div className="w-3 h-3 rounded" style={{ background: 'rgba(245,200,66,0.18)', border: '1.5px solid var(--mb-dark)' }} />
          <span className="text-[8px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>今日</span>
        </div>
      </div>
    </div>
  );
}
