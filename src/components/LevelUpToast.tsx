'use client';

import { useEffect, useRef, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { LEVELS } from '@/data/levels';

export default function LevelUpToast() {
  const { completedCount, mounted } = useProgress();
  const prev = useRef<number | null>(null);
  const [toast, setToast] = useState<{ title: string; icon: string; color: string } | null>(null);

  useEffect(() => {
    if (!mounted) return;
    if (prev.current === null) {
      prev.current = completedCount;
      return;
    }
    const oldCount = prev.current;
    const newCount = completedCount;
    prev.current = newCount;

    const triggered = LEVELS.filter(l => l.min > 0).find(l => oldCount < l.min && newCount >= l.min);
    if (triggered) {
      setToast({ title: triggered.title, icon: triggered.icon, color: triggered.color });
      const t = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(t);
    }
  }, [completedCount, mounted]);

  if (!toast) return null;

  return (
    <div
      className="fixed top-20 left-1/2 -translate-x-1/2 z-[91] flex items-center gap-3 px-5 py-3.5 rounded-2xl border-2"
      style={{
        background: 'var(--mb-dark)',
        borderColor: toast.color,
        boxShadow: `0 0 30px ${toast.color}60`,
        animation: 'levelSlide 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        whiteSpace: 'nowrap',
      }}
    >
      <span className="text-2xl">{toast.icon}</span>
      <div>
        <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: toast.color, fontSize: '13px' }}>
          レベルアップ！
        </div>
        <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: '11px' }}>
          {toast.icon} {toast.title} に昇格しました
        </div>
      </div>
    </div>
  );
}
