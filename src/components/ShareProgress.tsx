'use client';

import { useMemo, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';
import { ACHIEVEMENTS } from '@/data/achievements';

export default function ShareProgress() {
  const { completedCount, streakDays, bestStreak, completedLessonKeys, mounted } = useProgress();
  const [shared, setShared] = useState(false);

  const totalLessons = useMemo(
    () => categories.flatMap(c => c.courses).flatMap(c => c.lessons).filter(l => !l.isComingSoon).length,
    []
  );
  const badges = useMemo(
    () => ACHIEVEMENTS.filter(a => a.check(completedCount, streakDays, bestStreak, completedLessonKeys)).length,
    [completedCount, streakDays, bestStreak, completedLessonKeys]
  );

  if (!mounted || completedCount === 0) return null;

  const pct = Math.round((completedCount / totalLessons) * 100);

  const bar = (filled: number, total: number) => {
    const f = Math.round((filled / total) * 10);
    return '█'.repeat(f) + '░'.repeat(10 - f);
  };

  const shareMsg =
    completedCount >= 100 ? '100講義制覇！お金の達人になりました🏆' :
    completedCount >= 50  ? '50講義突破！金融知識がどんどん深まる💎' :
    completedCount >= 20  ? '着実に積み上げ中。お金と仲良くなっています📈' :
    completedCount >= 10  ? 'お金の知識を積み上げ中！継続が力🌱' :
                            'マネぼうアカデミーで学び始めました！';

  const text = [
    '📚 マネぼうアカデミー 学習記録',
    '',
    `✅ 完了講義　${completedCount} / ${totalLessons} 講義`,
    `${bar(completedCount, totalLessons)} ${pct}%`,
    '',
    `🔥 連続学習　${streakDays}日（最高: ${bestStreak}日）`,
    `🏅 獲得実績　${badges}個`,
    '',
    shareMsg,
    'https://manebou-juku.vercel.app',
    '',
    '#マネぼう塾 #お金の勉強 #金融リテラシー',
  ].join('\n');

  const tweetText = [
    `📚 マネぼうアカデミーで学習中！`,
    `✅ ${completedCount}/${totalLessons}講義完了（${pct}%）`,
    streakDays >= 1 ? `🔥 ${streakDays}日連続学習中` : `🏅 実績${badges}個獲得`,
    '',
    'https://manebou-juku.vercel.app',
    '',
    '#マネぼう塾 #お金の勉強 #金融リテラシー',
  ].join('\n');

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'マネぼうアカデミー 学習記録', text });
      } else {
        await navigator.clipboard.writeText(text);
      }
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    } catch {}
  }

  function handleTwitterShare() {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function handleLineShare() {
    const url = `https://line.me/R/share?text=${encodeURIComponent(tweetText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div
      className="mb-8 p-5 rounded-xl border-2"
      style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-gold)', boxShadow: '4px 4px 0 var(--mb-gold)' }}
    >
      <div className="text-xs font-bold mb-3" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        学習成果をシェア
      </div>
      <pre
        className="text-[11px] leading-relaxed mb-4 whitespace-pre-wrap break-all"
        style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        {text}
      </pre>
      <div className="flex gap-2">
        <button type="button"
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:opacity-90 active:scale-95"
          style={{
            background: shared ? 'rgba(76,175,125,0.15)' : 'var(--mb-gold)',
            borderColor: shared ? 'var(--mb-green)' : 'var(--mb-gold)',
            color: shared ? 'var(--mb-green)' : 'var(--mb-dark)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          {shared ? (
            <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>{canNativeShare ? 'シェア完了！' : 'コピー完了！'}</>
          ) : canNativeShare ? (
            <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>シェア</>
          ) : (
            <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>コピー</>
          )}
        </button>
        <button type="button"
          onClick={handleTwitterShare}
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:opacity-90 active:scale-95 shrink-0"
          style={{
            background: '#000',
            borderColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          X
        </button>
        <button type="button"
          onClick={handleLineShare}
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:opacity-90 active:scale-95 shrink-0"
          style={{
            background: '#00B900',
            borderColor: '#00B900',
            color: 'white',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          LINE
        </button>
      </div>
    </div>
  );
}
