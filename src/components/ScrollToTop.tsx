'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="ページトップへ"
      className="fixed z-50 flex items-center justify-center rounded-full border-2 transition-all hover:-translate-y-0.5 active:translate-y-0"
      style={{
        bottom: 'calc(76px + env(safe-area-inset-bottom, 0px))',
        right: '16px',
        width: '40px',
        height: '40px',
        background: 'var(--mb-dark)',
        borderColor: 'var(--mb-gold)',
        boxShadow: '2px 2px 0 var(--mb-gold)',
        color: 'var(--mb-gold)',
      }}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
