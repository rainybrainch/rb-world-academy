'use client';

import { useEffect, useState } from 'react';

interface Props {
  courseId: string;
  lessonId: string;
}

const KEY = (c: string, l: string) => `mb_like_${c}_${l}`;

export default function LessonLike({ courseId, lessonId }: Props) {
  const [liked, setLiked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem(KEY(courseId, lessonId)) === '1');
    setMounted(true);
  }, [courseId, lessonId]);

  function toggle() {
    const next = !liked;
    setLiked(next);
    if (next) localStorage.setItem(KEY(courseId, lessonId), '1');
    else localStorage.removeItem(KEY(courseId, lessonId));
    if (next) try { navigator.vibrate?.(20); } catch {}
  }

  if (!mounted) return null;

  return (
    <button type="button"
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 text-[11px] font-bold transition-all hover:scale-105 active:scale-95"
      style={{
        borderColor: liked ? 'var(--mb-red)' : 'rgba(26,26,46,0.15)',
        background: liked ? 'rgba(232,53,74,0.08)' : 'transparent',
        color: liked ? 'var(--mb-red)' : 'rgba(26,26,46,0.4)',
        fontFamily: "'Zen Maru Gothic', sans-serif",
      }}
      title={liked ? 'いいね済み' : 'いいね！'}
      aria-label={liked ? `この講義にいいね済み。いいね！をクリックして解除できます` : `この講義にいいね！をする`}
      aria-pressed={liked}
    >
      <span style={{ fontSize: '14px', lineHeight: 1 }} aria-hidden="true">{liked ? '❤️' : '🤍'}</span>
      {liked ? 'いいね！' : 'いいね'}
    </button>
  );
}
