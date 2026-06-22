import { useEffect, useRef } from 'react';

export function useScrollMemory(courseId: string, lessonId: string, enabled: boolean) {
  const key = `mb_scroll_${courseId}_${lessonId}`;
  const restoredRef = useRef(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Restore scroll position after mount
  useEffect(() => {
    if (!enabled || restoredRef.current) return;
    restoredRef.current = true;

    try {
      const saved = localStorage.getItem(key);
      if (!saved) return;
      const pct = parseFloat(saved);
      if (!pct || pct < 5 || pct > 90) return;

      // Delay to let the page render fully before scrolling
      const t = setTimeout(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        if (total > 0) {
          window.scrollTo({ top: Math.round(total * (pct / 100)), behavior: 'smooth' });
        }
      }, 600);
      return () => clearTimeout(t);
    } catch {}
  }, [key, enabled]);

  // Save scroll position (throttled)
  useEffect(() => {
    if (!enabled) return;

    function onScroll() {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(() => {
        const el = document.documentElement;
        const total = el.scrollHeight - el.clientHeight;
        if (total <= 0) return;
        const pct = Math.min(100, (el.scrollTop / total) * 100);
        try {
          if (pct > 1 && pct < 90) {
            localStorage.setItem(key, String(pct.toFixed(1)));
          }
        } catch {}
      }, 500);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [key, enabled]);
}

export function clearScrollMemory(courseId: string, lessonId: string) {
  try {
    localStorage.removeItem(`mb_scroll_${courseId}_${lessonId}`);
  } catch {}
}
