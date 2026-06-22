'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { getLevel, getNextLevel } from '@/data/levels';

export default function WelcomeBack() {
  const { completedCount, streakDays, dailyLessonCounts, mounted } = useProgress();

  if (!mounted || completedCount === 0) return null;

  const hour = new Date().getHours();
  const dayOfWeek = new Date().getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const greetingBase =
    hour < 5  ? '深夜も学ぶ、その姿勢がすごい。' :
    hour < 10 ? (isWeekend ? '休日の朝から！最高の使い方だ。' : '朝から勉強、最高のスタートだ！') :
    hour < 12 ? 'こんしは！今日も一緒に頑張ろう。' :
    hour < 14 ? 'お昼休みも学ぶ、それが差をつくる。' :
    hour < 17 ? 'こんしは！続けてるね、えらい！' :
    hour < 21 ? 'こんばんは！今日も学習してる、すごい！' :
                '夜遅くまで、ありがとう。';
  const greeting = streakDays >= 14 ? `${streakDays}日連続！本物の習慣になってきた。` : greetingBase;

  const streakMsg =
    streakDays >= 30 ? `驚異の${streakDays}日連続！` :
    streakDays >= 14 ? `${streakDays}日連続、すごい！` :
    streakDays >= 7  ? `${streakDays}日連続中！` :
    streakDays >= 3  ? `${streakDays}日連続中` :
    streakDays >= 2  ? `${streakDays}日連続` :
    streakDays >= 1  ? '連続記録スタート！' :
    null;

  const t = new Date();
  const todayKey = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
  const todayCount = dailyLessonCounts[todayKey] ?? 0;

  const level = getLevel(completedCount);
  const next = getNextLevel(completedCount);

  const levelProgress = next
    ? Math.min(100, Math.round(((completedCount - level.min) / (next.min - level.min)) * 100))
    : 100;

  return (
    <Link
      href="/progress"
      className="block px-4 py-3 rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0"
      style={{
        background: `${level.color}08`,
        borderColor: `${level.color}35`,
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl shrink-0">
          {streakDays >= 7 ? '🔥' : streakDays >= 3 ? '⚡' : level.icon}
        </span>
        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-bold"
            style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {greeting}
          </p>
          <p
            className="text-[10px] mt-0.5"
            style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            累計{completedCount}講義完了
            {todayCount > 0 && <span style={{ color: 'var(--mb-green)', fontWeight: 700 }}> · 今日{todayCount}講義</span>}
            {streakMsg && ` · ${streakMsg}`}
          </p>
        </div>
        <div
          className="shrink-0 text-[10px] font-bold px-2 py-1 rounded-full"
          style={{ background: `${level.color}20`, color: level.color, fontFamily: "'Zen Maru Gothic', sans-serif", border: `1px solid ${level.color}40` }}
        >
          {level.icon} {level.title}
        </div>
      </div>
      {next && (
        <div className="mt-2.5">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              次: {next.icon} {next.title}
            </span>
            <span className="text-[9px] font-bold" style={{ color: level.color, fontFamily: "'Dela Gothic One', sans-serif" }}>
              あと{next.min - completedCount}
            </span>
          </div>
          <div className="w-full rounded-full overflow-hidden" style={{ height: '4px', background: `${level.color}18` }}>
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${levelProgress}%`, background: level.color }}
            />
          </div>
        </div>
      )}
    </Link>
  );
}
