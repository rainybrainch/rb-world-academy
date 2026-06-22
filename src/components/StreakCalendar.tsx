'use client';

import { useMemo } from 'react';
import { useProgress } from '@/hooks/useProgress';

const DAY_SHORT = ['日', '月', '火', '水', '木', '金', '土'];
const MONTH_NAMES = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

function intensityColor(count: number, isToday: boolean): string {
  if (isToday && count === 0) return 'rgba(245,200,66,0.22)';
  if (count === 0) return 'rgba(26,26,46,0.07)';
  if (count === 1) return 'rgba(76,175,125,0.4)';
  if (count === 2) return 'rgba(76,175,125,0.7)';
  return 'var(--mb-green)';
}

function localStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export default function StreakCalendar() {
  const { dailyLessonCounts, streakDays, bestStreak, mounted } = useProgress();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = localStr(today);

  // Build 91 days aligned so today is in last column
  const todayDow = today.getDay();
  const totalCells = 91 + todayDow;

  const days = useMemo(() => {
    const result: { date: string; count: number; isToday: boolean; month: number; dayOfMonth: number; dayOfWeek: number }[] = [];
    for (let i = totalCells - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = localStr(d);
      const count = dailyLessonCounts[dateStr] ?? 0;
      result.push({
        date: dateStr,
        count,
        isToday: dateStr === todayStr,
        month: d.getMonth(),
        dayOfMonth: d.getDate(),
        dayOfWeek: d.getDay(),
      });
    }
    return result;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dailyLessonCounts, todayStr, totalCells]);

  if (!mounted) return null;

  // Arrange as columns (each column = 1 week)
  const cols: typeof days[] = [];
  for (let i = 0; i < days.length; i += 7) {
    cols.push(days.slice(i, i + 7));
  }

  // Build month label positions: record which column each month first appears at
  const monthLabels: { colIdx: number; label: string }[] = [];
  let lastMonth = -1;
  cols.forEach((col, ci) => {
    const firstDay = col[0];
    if (firstDay && firstDay.month !== lastMonth) {
      lastMonth = firstDay.month;
      monthLabels.push({ colIdx: ci, label: MONTH_NAMES[firstDay.month] });
    }
  });
  // Only keep labels that have enough space (skip the first if too close to edge)
  const filteredLabels = monthLabels.filter((_, i) => i === 0 || monthLabels[i].colIdx - monthLabels[i - 1].colIdx >= 3);

  const totalActive = Object.values(dailyLessonCounts).filter(c => c > 0).length;

  return (
    <div
      className="p-4 rounded-xl border-2"
      style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: '3px 3px 0 var(--mb-sky)' }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
          学習カレンダー（90日間）
        </span>
        <div className="flex items-center gap-1.5">
          {bestStreak > streakDays && (
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
              style={{
                background: 'rgba(155,109,214,0.12)',
                color: '#9B6DD6',
                fontFamily: "'Zen Maru Gothic', sans-serif",
                border: '1px solid rgba(155,109,214,0.2)',
              }}
            >
              最高{bestStreak}日
            </span>
          )}
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{
              background: streakDays >= 3 ? 'rgba(245,200,66,0.15)' : 'rgba(26,26,46,0.06)',
              color: streakDays >= 3 ? '#D4A017' : 'rgba(26,26,46,0.4)',
              fontFamily: "'Dela Gothic One', sans-serif",
            }}
          >
            {streakDays >= 3 ? '🔥' : '✨'} {streakDays}日連続
          </span>
        </div>
      </div>

      <div className="flex gap-0.5">
        {/* Row labels */}
        <div className="flex flex-col gap-0.5 mr-0.5 mt-4">
          {DAY_SHORT.map((d, i) => (
            <div
              key={d}
              className="flex items-center justify-end"
              style={{ height: '10px', fontSize: '7px', color: 'rgba(26,26,46,0.25)', fontFamily: "'Zen Maru Gothic', sans-serif", minWidth: '10px' }}
            >
              {i % 2 === 0 ? d : ''}
            </div>
          ))}
        </div>

        {/* Columns with month labels on top */}
        <div className="flex gap-0.5 flex-1 overflow-hidden">
          {cols.map((col, ci) => {
            const monthLabel = filteredLabels.find(m => m.colIdx === ci);
            return (
              <div key={ci} className="flex flex-col gap-0.5 flex-1">
                {/* Month label row */}
                <div style={{ height: '12px', display: 'flex', alignItems: 'flex-end' }}>
                  {monthLabel && (
                    <span style={{ fontSize: '7px', color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif", whiteSpace: 'nowrap', lineHeight: 1 }}>
                      {monthLabel.label}
                    </span>
                  )}
                </div>
                {col.map((day) => (
                  <div
                    key={day.date}
                    className="rounded-sm transition-colors"
                    style={{
                      height: '10px',
                      background: intensityColor(day.count, day.isToday),
                      outline: day.isToday ? '1.5px solid var(--mb-gold)' : 'none',
                      outlineOffset: '0px',
                    }}
                    title={`${day.month + 1}月${day.dayOfMonth}日（${DAY_SHORT[day.dayOfWeek]}）${day.count > 0 ? ` · ${day.count}講義` : ''}`}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 flex-wrap gap-1">
        <p className="text-[8px]" style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          累計学習日数: <span style={{ color: 'var(--mb-green)', fontWeight: 'bold' }}>{totalActive}日</span>
        </p>
        <div className="flex items-center gap-2">
          <span className="text-[8px]" style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>講義数：</span>
          {[
            { label: '0', bg: 'rgba(26,26,46,0.07)' },
            { label: '1', bg: 'rgba(76,175,125,0.4)' },
            { label: '2', bg: 'rgba(76,175,125,0.7)' },
            { label: '3+', bg: 'var(--mb-green)' },
          ].map(({ label, bg }) => (
            <div key={label} className="flex items-center gap-0.5">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ background: bg }} />
              <span className="text-[7px]" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
