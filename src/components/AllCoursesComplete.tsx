'use client';

import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

export default function AllCoursesComplete() {
  const { completedCount, mounted } = useProgress();
  if (!mounted) return null;

  const totalAvailable = categories
    .flatMap(c => c.courses)
    .flatMap(c => c.lessons)
    .filter(l => !l.isComingSoon).length;

  if (completedCount < totalAvailable || totalAvailable === 0) return null;

  return (
    <div
      className="px-5 py-6 rounded-2xl border-2 text-center relative overflow-hidden"
      style={{
        background: 'var(--mb-dark)',
        borderColor: 'var(--mb-gold)',
        boxShadow: '6px 6px 0 var(--mb-gold)',
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 50% 0%, var(--mb-gold), transparent 60%)' }} />

      <div className="relative">
        <div className="text-5xl mb-3">🏆</div>
        <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-gold)', fontSize: '20px', marginBottom: '8px' }}>
          全講義制覇！
        </div>
        <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.6 }}>
          全{totalAvailable}講義をクリアしました。<br />
          あなたはマネぼうアカデミーの最高学習者です。
        </div>
        <div className="flex justify-center gap-1 mt-4 flex-wrap">
          {['💴', '📈', '🎲', '🏦', '📚', '💰'].map((e, i) => (
            <span key={i} className="text-xl">{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
