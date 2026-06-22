'use client';

import { useEffect, useState } from 'react';

export default function LessonTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  if (seconds < 5) return null;

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const label = m > 0 ? `${m}分${s.toString().padStart(2, '0')}秒` : `${s}秒`;
  const isPomodoro = m >= 25;

  return (
    <div
      className="flex items-center gap-1 text-[10px] shrink-0"
      style={{
        color: isPomodoro ? 'var(--mb-gold)' : 'rgba(26,26,46,0.35)',
        fontFamily: "'Dela Gothic One', sans-serif",
      }}
      title={isPomodoro ? 'ポモドーロ達成！25分集中学習中' : undefined}
    >
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {isPomodoro && <span style={{ fontSize: '9px' }}>🍅</span>}
      {label}
    </div>
  );
}
