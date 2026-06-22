'use client';

import { useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { clearAllMbData } from '@/lib/clearMbData';

export default function ResetProgressButton() {
  const { completedCount, mounted } = useProgress();
  const [confirmed, setConfirmed] = useState(false);
  const [done, setDone] = useState(false);

  if (!mounted || completedCount === 0) return null;

  function handleReset() {
    if (!confirmed) {
      setConfirmed(true);
      return;
    }
    try {
      clearAllMbData();
    } catch {}
    setDone(true);
    setTimeout(() => window.location.reload(), 800);
  }

  if (done) {
    return (
      <div className="text-center py-3 text-sm" style={{ color: 'var(--mb-green)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        ✓ リセット完了
      </div>
    );
  }

  return (
    <div className="mt-2">
      {confirmed ? (
        <div className="space-y-2">
          <p className="text-xs text-center" style={{ color: 'rgba(26,26,46,0.6)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            本当にリセットしますか？この操作は取り消せません
          </p>
          <div className="flex gap-2">
            <button type="button"
              onClick={() => setConfirmed(false)}
              className="flex-1 py-2 rounded-lg border-2 text-xs font-bold"
              style={{ borderColor: 'var(--mb-dark)', color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              キャンセル
            </button>
            <button type="button"
              onClick={handleReset}
              className="flex-1 py-2 rounded-lg border-2 text-xs font-bold"
              style={{ background: 'var(--mb-red)', borderColor: 'var(--mb-red)', color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              リセットする
            </button>
          </div>
        </div>
      ) : (
        <button type="button"
          onClick={handleReset}
          className="w-full py-2.5 rounded-lg border-2 text-xs font-bold transition-all hover:opacity-80"
          style={{
            borderColor: 'rgba(232,53,74,0.4)',
            color: 'var(--mb-red)',
            background: 'rgba(232,53,74,0.06)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          🗑️ 学習データをリセット
        </button>
      )}
    </div>
  );
}
