'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface Props {
  courseTitle: string;
  categoryId: string;
  nextCourseId?: string | null;
  nextCourseTitle?: string | null;
  nextFirstLessonId?: string | null;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  'money-basics-full': '#5BC8E8',
  'money-knowledge':   '#9B6DD6',
  'zai-course':        '#F5C842',
  'stock-intro':       '#4CAF7D',
  'nisa-basics':       '#E8354A',
};

const MESSAGES = [
  '知識が、あなたの武器になった。',
  '学んだことは、一生消えない資産だ。',
  '一歩ずつ、頂きに近づいている。',
  '諦めなかったあなたが、輝いている。',
  '次の章が、あなたを待っている。',
  '今日の努力が、未来の自由になる。',
  '知ることは、選択肢を増やすことだ。',
  '小さな積み重ねが、大きな差になる。',
  'この一章が、あなたの人生を変える。',
  '賢く生きる力が、また一つ増えた。',
  '複利のように、知識は使うたびに利子がつく。',
  '終わった章より、始まる章のほうが多い。',
  'これがあなたの経済的リテラシーの基礎になる。',
  'お金と向き合えた今日に、乾杯。',
  '学ぶことをやめた日が、成長の止まる日だ。',
  '一章ずつ、世界の見え方が変わっていく。',
  'この章を終えた瞬間、あなたは昨日より賢くなった。',
  '知識を持つ人は、持たない人とは違う選択ができる。',
  '今日の1時間が、10年後の100万円になるかもしれない。',
  'やり遂げた達成感が、次への原動力になる。',
  '学んだことを誰かに話せば、記憶が2倍定着する。',
  'お金のことは誰も教えてくれない。だから学んだあなたが有利になる。',
  '知識はどこへ行っても持ち出せる。最高の携帯資産だ。',
  '次の扉を開ける鍵は、もう手の中にある。',
  '積み上げた知識は、利子がつく。',
  '続けてきた自分を、少し褒めてあげて。',
  '「やればできた」は、やってみた人だけが言える言葉だ。',
  'もう一歩先に進む準備が、もうできている。',
  '自分に投資した時間は、決して無駄にならない。',
  '分からなかったことが分かった。それだけで今日は勝ちだ。',
  '諦める理由より、続ける理由を探せ。あなたはもう見つけている。',
  '章をクリアするたびに、未来の自分が少し笑顔になっている。',
  '勉強した記憶は消えても、考え方は残る。',
];

export default function CourseCompleteModal({ courseTitle, categoryId, nextCourseId, nextCourseTitle, nextFirstLessonId, onClose }: Props) {
  const color = categoryColors[categoryId] ?? 'var(--mb-gold)';
  const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center px-5"
      style={{ background: 'rgba(10,10,26,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`${courseTitle} 完了`}
    >
      <div
        className="w-full max-w-sm rounded-3xl border-2 overflow-hidden text-center"
        style={{
          background: 'var(--mb-dark)',
          borderColor: color,
          boxShadow: `0 0 60px ${color}40, 0 8px 40px rgba(0,0,0,0.6)`,
          animation: 'courseModalIn 0.45s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Top accent bar */}
        <div className="h-1.5" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

        {/* Trophy */}
        <div className="pt-8 pb-4 px-6">
          <div
            className="mx-auto w-20 h-20 rounded-full flex items-center justify-center text-5xl mb-4 border-2"
            style={{
              background: `${color}18`,
              borderColor: `${color}50`,
              animation: 'spinBadge 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.1s both',
              boxShadow: `0 0 24px ${color}30`,
            }}
          >
            🏆
          </div>

          <div
            className="text-xs font-bold tracking-[3px] mb-2"
            style={{
              color,
              fontFamily: "'Zen Maru Gothic', sans-serif",
              animation: 'shimmerPulse 1.8s ease-in-out infinite',
            }}
          >
            CHAPTER COMPLETE
          </div>

          <h2
            className="text-xl leading-snug mb-2"
            style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'white' }}
          >
            {courseTitle}
          </h2>
          <p
            className="text-[11px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif", fontStyle: 'italic' }}
          >
            「{msg}」
          </p>
        </div>

        {/* Divider */}
        <div className="mx-6" style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

        {/* Actions */}
        <div className="p-5 space-y-3">
          {nextCourseId ? (
            <Link
              href={nextFirstLessonId ? `/courses/${nextCourseId}/lessons/${nextFirstLessonId}` : `/courses/${nextCourseId}`}
              onClick={onClose}
              className="flex flex-col items-center justify-center gap-0.5 w-full py-3 rounded-xl border-2 text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{
                background: color,
                borderColor: color,
                color: 'var(--mb-dark)',
                fontFamily: "'Dela Gothic One', sans-serif",
                boxShadow: `3px 3px 0 rgba(255,255,255,0.12)`,
              }}
            >
              <span>次の章へ進む →</span>
              {nextCourseTitle && (
                <span className="text-[10px] font-bold opacity-60" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {nextCourseTitle}
                </span>
              )}
            </Link>
          ) : (
            <Link
              href="/courses"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{
                background: color,
                borderColor: color,
                color: 'var(--mb-dark)',
                fontFamily: "'Dela Gothic One', sans-serif",
                boxShadow: `3px 3px 0 rgba(255,255,255,0.12)`,
              }}
            >
              コース一覧へ →
            </Link>
          )}
          <button type="button"
            onClick={onClose}
            className="w-full py-2 text-xs"
            style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
