'use client';

import { useEffect, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

const GOAL_KEY = 'mb_weekly_goal';
const GOAL_OPTIONS = [3, 5, 7, 10, 15];

function daysLeftInWeek(): number {
  const today = new Date().getDay(); // 0=Sun
  return today === 0 ? 0 : 7 - today;
}

export default function WeeklyGoalCard() {
  const { weeklyCompletedCount, completedCount, mounted } = useProgress();
  const [goal, setGoal] = useState(5);
  const [goalMounted, setGoalMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(GOAL_KEY);
    if (stored) setGoal(Number(stored));
    setGoalMounted(true);
  }, []);

  if (!mounted || !goalMounted || completedCount === 0) return null;

  function cycleGoal() {
    const next = GOAL_OPTIONS[(GOAL_OPTIONS.indexOf(goal) + 1) % GOAL_OPTIONS.length];
    setGoal(next);
    localStorage.setItem(GOAL_KEY, String(next));
  }

  const pct = Math.min(weeklyCompletedCount / goal, 1);
  const done = weeklyCompletedCount >= goal;
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - pct);
  const daysLeft = daysLeftInWeek();

  return (
    <div
      className="p-4 rounded-xl border-2 flex items-center gap-4"
      style={{
        background: done ? 'rgba(76,175,125,0.06)' : 'white',
        borderColor: done ? 'var(--mb-green)' : 'var(--mb-dark)',
        boxShadow: done ? '3px 3px 0 var(--mb-green)' : '3px 3px 0 rgba(26,26,46,0.15)',
      }}
    >
      {/* SVG progress ring */}
      <div className="shrink-0 relative" style={{ width: 72, height: 72 }}>
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r={radius} fill="none" stroke="rgba(26,26,46,0.08)" strokeWidth="6" />
          <circle
            cx="36" cy="36" r={radius} fill="none"
            stroke={done ? 'var(--mb-green)' : 'var(--mb-gold)'}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 36 36)"
            style={{ transition: 'stroke-dashoffset 0.6s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span style={{ fontFamily: "'Dela Gothic One', sans-serif", fontSize: 18, color: done ? 'var(--mb-green)' : 'var(--mb-dark)', lineHeight: 1 }}>
            {weeklyCompletedCount}
          </span>
          <span style={{ fontSize: 9, color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            /{goal}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="text-xs font-bold mb-0.5" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
          {done ? '🎉 今週の目標達成！' : '今週の目標'}
        </div>
        <div className="text-[11px] mb-2" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {done
            ? weeklyCompletedCount >= goal * 1.5
              ? '🔥 目標大幅超え！超人ペースだ！'
              : '素晴らしい！来週もこの調子で。'
            : daysLeft === 0
              ? `あと${goal - weeklyCompletedCount}講義で達成！今日中に！`
              : pct >= 0.8
                ? `残り${daysLeft}日・もうすぐ達成！あと${Math.max(goal - weeklyCompletedCount, 0)}講義`
                : pct >= 0.5
                  ? `折り返し超え！残り${daysLeft}日・あと${Math.max(goal - weeklyCompletedCount, 0)}講義`
                  : daysLeft <= 2 && pct < 0.3
                    ? `⚡ 残り${daysLeft}日！ペースを上げよう・あと${Math.max(goal - weeklyCompletedCount, 0)}講義`
                    : `残り${daysLeft}日・あと${Math.max(goal - weeklyCompletedCount, 0)}講義`
          }
        </div>
        <button type="button"
          onClick={cycleGoal}
          className="text-[10px] px-2.5 py-1 rounded-full border font-bold transition-opacity hover:opacity-70"
          style={{
            borderColor: 'rgba(26,26,46,0.2)',
            color: 'rgba(26,26,46,0.5)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          目標: 週{goal}講義 ↻
        </button>
      </div>
    </div>
  );
}
