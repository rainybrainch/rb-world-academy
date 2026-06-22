'use client';

import { useEffect, useState } from 'react';

export default function LessonScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function update() {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  const show = pct > 2 && pct < 100;
  const done = pct >= 100;

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[70] h-[3px] pointer-events-none"
        style={{ background: 'rgba(26,26,46,0.08)' }}
      >
        <div
          className="h-full transition-none"
          style={{
            width: `${pct}%`,
            background: done ? 'var(--mb-green)' : 'var(--mb-gold)',
          }}
        />
      </div>

      {/* Percentage badge — larger and more visible */}
      <div
        className="fixed top-1/2 right-4 z-[69] text-lg font-bold px-3 py-2 rounded-full transition-all duration-300"
        style={{
          fontFamily: "'Dela Gothic One', sans-serif",
          background: done ? 'rgba(76,175,125,0.25)' : 'rgba(26,26,46,0.12)',
          color: done ? 'var(--mb-green)' : 'var(--mb-dark)',
          opacity: (show || done) ? 1 : 0,
          transform: (show || done) ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.7)',
          pointerEvents: 'none',
          border: done ? '2px solid var(--mb-green)' : '2px solid rgba(26,26,46,0.15)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        {done ? '✓ 読了' : `${Math.round(pct)}%`}
      </div>
    </>
  );
}
