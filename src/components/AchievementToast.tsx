'use client';

import { useEffect, useRef, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { ACHIEVEMENTS } from '@/data/achievements';

const SEEN_KEY = 'mb_seen_achievements';

interface ToastItem { id: string; icon: string; title: string }

export default function AchievementToast() {
  const { completedCount, streakDays, bestStreak, completedLessonKeys, mounted } = useProgress();
  const [queue, setQueue] = useState<ToastItem[]>([]);
  const [visible, setVisible] = useState<ToastItem | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const checkedRef = useRef(false);

  useEffect(() => {
    if (!mounted || checkedRef.current) return;
    checkedRef.current = true;

    const seen: string[] = (() => {
      try { return JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]'); }
      catch { return []; }
    })();

    const newlyEarned = ACHIEVEMENTS.filter(
      a => !seen.includes(a.id) && a.check(completedCount, streakDays, bestStreak, completedLessonKeys)
    );

    if (newlyEarned.length === 0) return;

    const updated = [...seen, ...newlyEarned.map(a => a.id)];
    try { localStorage.setItem(SEEN_KEY, JSON.stringify(updated)); } catch {}

    setQueue(newlyEarned.map(a => ({ id: a.id, icon: a.icon, title: a.title })));
  }, [mounted, completedCount, streakDays, bestStreak, completedLessonKeys]);

  useEffect(() => {
    if (visible || queue.length === 0) return;
    const [next, ...rest] = queue;
    setQueue(rest);
    setVisible(next);
    timerRef.current = setTimeout(() => setVisible(null), 3500);
  }, [visible, queue]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed right-4 z-[80] flex items-center gap-3 px-4 py-3 rounded-xl border-2"
      style={{
        background: 'var(--mb-dark)',
        borderColor: 'var(--mb-gold)',
        boxShadow: '3px 3px 0 var(--mb-gold)',
        animation: 'slideInRight 0.35s ease',
        maxWidth: '240px',
        bottom: 'calc(80px + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <span className="text-2xl shrink-0">{visible.icon}</span>
      <div className="min-w-0">
        <div className="text-[9px] font-bold tracking-widest mb-0.5" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          実績解除！
        </div>
        <div className="text-xs font-bold truncate" style={{ color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {visible.title}
        </div>
      </div>
      <button type="button"
        onClick={() => { setVisible(null); if (timerRef.current) clearTimeout(timerRef.current); }}
        className="shrink-0 text-[10px] ml-1"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        ✕
      </button>
    </div>
  );
}
