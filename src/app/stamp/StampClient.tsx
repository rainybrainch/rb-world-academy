'use client';

import { useEffect, useRef, useState } from 'react';
import { useStamps, generateDailyCode, type StampResult } from '@/hooks/useStamps';

const STAMPS_PER_CARD = 10;
const COUPON_INTERVAL = 10;

function StampIcon({ filled, date, index }: { filled: boolean; date?: string; index: number }) {
  const isCoupon = (index + 1) % COUPON_INTERVAL === 0;

  if (isCoupon && !filled) {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <div
          className="w-14 h-14 rounded-xl border-2 border-dashed flex items-center justify-center"
          style={{ borderColor: 'var(--mb-gold)', opacity: 0.4 }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ color: 'var(--mb-gold)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>
        </div>
        <span className="text-[9px] font-bold" style={{ color: 'var(--mb-gold)', opacity: 0.5 }}>{index + 1}</span>
      </div>
    );
  }

  if (isCoupon && filled) {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <div
          className="w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-0.5"
          style={{ background: 'var(--mb-gold)', boxShadow: '3px 3px 0 var(--mb-gold-dark)' }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>
          <span className="text-[8px] font-bold text-white leading-none">GET!</span>
        </div>
        <span className="text-[9px] font-bold" style={{ color: 'var(--mb-gold)' }}>{date ? date.slice(5).replace('-', '/') : index + 1}</span>
      </div>
    );
  }

  if (filled) {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <div
          className="w-14 h-14 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: 'var(--mb-sky)', background: 'rgba(91,200,232,0.1)' }}
        >
          <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="var(--mb-sky)" strokeWidth="2" fill="rgba(91,200,232,0.15)" />
            <text x="20" y="25" textAnchor="middle" fontSize="16" fontFamily="'Zen Maru Gothic'" fill="var(--mb-sky)">✿</text>
          </svg>
        </div>
        <span className="text-[9px] font-bold" style={{ color: 'var(--mb-sky)' }}>{date ? date.slice(5).replace('-', '/') : index + 1}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div
        className="w-14 h-14 rounded-full border-2 border-dashed"
        style={{ borderColor: 'rgba(26,26,46,0.15)', background: 'rgba(26,26,46,0.03)' }}
      />
      <span className="text-[9px] font-bold" style={{ color: 'rgba(26,26,46,0.25)' }}>{index + 1}</span>
    </div>
  );
}

interface Props {
  isAdmin: boolean;
}

export default function StampClient({ isAdmin }: Props) {
  const { stamps, totalStamps, todayUsed, expiryDate, addStamp, mounted } = useStamps();
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState('');
  const [result, setResult] = useState<StampResult | 'idle'>('idle');
  const [justStamped, setJustStamped] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const t = new Date();
  const today = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
  const todayCode = generateDailyCode(today);

  const openModal = () => {
    setCode('');
    setResult('idle');
    setShowModal(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleAuth = () => {
    const res = addStamp(code.trim());
    setResult(res);
    if (res === 'ok') {
      setJustStamped(true);
      setTimeout(() => {
        setShowModal(false);
        setJustStamped(false);
      }, 1800);
    }
  };

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setShowModal(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showModal]);

  // Build card grid: group by STAMPS_PER_CARD
  const currentCardIndex = Math.floor(totalStamps / STAMPS_PER_CARD);
  const stampsInCurrentCard = totalStamps % STAMPS_PER_CARD;
  const cardStart = currentCardIndex * STAMPS_PER_CARD;

  const gridSlots = Array.from({ length: STAMPS_PER_CARD }, (_, i) => {
    const absoluteIndex = cardStart + i;
    const stamp = stamps[absoluteIndex];
    return { filled: !!stamp, date: stamp?.date, index: absoluteIndex };
  });

  const couponsEarned = Math.floor(totalStamps / COUPON_INTERVAL);

  return (
    <div className="min-h-screen pb-24" style={{ background: 'var(--mb-cream)' }}>
      <div className="max-w-xl mx-auto px-4 pt-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="font-display text-2xl" style={{ color: 'var(--mb-dark)' }}>スタンプカード</h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(26,26,46,0.5)' }}>
            対面授業に参加すると1個押せます
          </p>
        </div>

        {/* Admin: today's code */}
        {isAdmin && (
          <div className="mb-6 rounded-xl border-2 p-4 flex items-center justify-between" style={{ borderColor: 'var(--mb-red)', background: 'rgba(232,53,74,0.06)' }}>
            <div>
              <p className="text-xs font-bold mb-1" style={{ color: 'var(--mb-red)' }}>🔐 管理者ビュー（本日の認証コード）</p>
              <p className="font-display text-4xl tracking-widest" style={{ color: 'var(--mb-red)' }}>{todayCode}</p>
            </div>
            <div className="text-right">
              <p className="text-xs" style={{ color: 'rgba(26,26,46,0.4)' }}>{today}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(26,26,46,0.4)' }}>毎日0時更新</p>
            </div>
          </div>
        )}

        {/* Expiry */}
        {mounted && expiryDate && (
          <p className="text-sm mb-4 text-center" style={{ color: 'rgba(26,26,46,0.5)' }}>
            現在の有効期限：{(() => { const [y, m, d] = expiryDate.split('-'); return `${y}年${parseInt(m)}月${parseInt(d)}日`; })()}
          </p>
        )}

        {/* Total count */}
        <div className="rounded-2xl border-2 p-5 mb-6 flex items-center justify-between" style={{ borderColor: 'var(--mb-dark)', background: 'white', boxShadow: '4px 4px 0 var(--mb-dark)' }}>
          <div>
            <p className="text-sm font-bold mb-1" style={{ color: 'rgba(26,26,46,0.5)' }}>累計スタンプ数</p>
            {couponsEarned > 0 && (
              <p className="text-xs" style={{ color: 'var(--mb-gold)' }}>クーポン獲得回数 {couponsEarned}回</p>
            )}
          </div>
          <div className="font-display text-5xl" style={{ color: 'var(--mb-red)' }}>
            {mounted ? totalStamps : '—'}<span className="text-xl ml-1" style={{ color: 'rgba(26,26,46,0.4)' }}>個</span>
          </div>
        </div>

        {/* Card label */}
        <p className="text-xs font-bold mb-3" style={{ color: 'rgba(26,26,46,0.4)' }}>
          {currentCardIndex + 1}枚目のカード（{stampsInCurrentCard}/{STAMPS_PER_CARD}）
        </p>

        {/* Stamp grid */}
        <div className="rounded-2xl border-2 p-4 mb-6" style={{ borderColor: 'var(--mb-dark)', background: 'white', boxShadow: '4px 4px 0 var(--mb-dark)' }}>
          <div className="grid grid-cols-5 gap-3 justify-items-center">
            {gridSlots.map((slot) => (
              <StampIcon key={slot.index} filled={slot.filled} date={slot.date} index={slot.index} />
            ))}
          </div>
        </div>

        {/* Notice */}
        <p className="text-xs text-center mb-6" style={{ color: 'rgba(26,26,46,0.45)' }}>
          ※最後にスタンプを押した日から1年経過するとカードがリセットされます
        </p>
        <p className="text-xs text-center mb-8 font-bold" style={{ color: 'rgba(26,26,46,0.5)' }}>
          スタンプは1日1回のみです！
        </p>

        {/* CTA */}
        {mounted && !todayUsed && (
          <button type="button"
            onClick={openModal}
            className="w-full py-4 rounded-xl font-display text-lg font-bold transition-transform active:scale-95"
            style={{ background: 'var(--mb-sky)', color: 'white', boxShadow: '4px 4px 0 var(--mb-dark)' }}
          >
            スタンプを押す
          </button>
        )}
        {mounted && todayUsed && (
          <div className="w-full py-4 rounded-xl text-center font-bold" style={{ background: 'rgba(26,26,46,0.07)', color: 'rgba(26,26,46,0.4)' }}>
            本日のスタンプ済み ✓
          </div>
        )}

      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ background: 'rgba(26,26,46,0.55)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
          role="dialog"
          aria-modal="true"
          aria-label="スタンプ入力"
        >
          <div className="w-full max-w-sm rounded-2xl p-6" style={{ background: 'white', boxShadow: '6px 6px 0 var(--mb-dark)' }}>
            {justStamped ? (
              <div className="text-center py-4">
                <div className="text-5xl mb-3">✿</div>
                <p className="font-display text-xl" style={{ color: 'var(--mb-sky)' }}>スタンプ押印！</p>
                <p className="text-sm mt-2" style={{ color: 'rgba(26,26,46,0.5)' }}>ありがとうございました</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-lg text-center mb-1" style={{ color: 'var(--mb-dark)' }}>スタンプ認証</h2>
                <p className="text-sm text-center mb-6" style={{ color: 'rgba(26,26,46,0.5)' }}>
                  スタンプを1個押します。<br />認証番号を入力してください。
                </p>

                <input
                  ref={inputRef}
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={4}
                  value={code}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, '').slice(0, 4);
                    setCode(v);
                    setResult('idle');
                  }}
                  onKeyDown={(e) => { if (e.key === 'Enter' && code.length === 4) handleAuth(); }}
                  placeholder="4桁の数字"
                  className="w-full text-center text-3xl font-display tracking-widest py-3 border-b-2 outline-none mb-2"
                  style={{ borderColor: 'var(--mb-sky)', color: 'var(--mb-dark)' }}
                />

                {result === 'wrong_code' && (
                  <p className="text-xs text-center mb-3" style={{ color: 'var(--mb-red)' }}>認証番号が違います</p>
                )}
                {result === 'already_used' && (
                  <p className="text-xs text-center mb-3" style={{ color: 'var(--mb-red)' }}>本日はすでにスタンプ済みです</p>
                )}
                {result === 'idle' && <div className="mb-3 h-4" />}

                <div className="flex gap-3 mt-2">
                  <button type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-3 rounded-xl font-bold text-sm"
                    style={{ background: 'rgba(26,26,46,0.08)', color: 'var(--mb-dark)' }}
                  >
                    キャンセル
                  </button>
                  <button type="button"
                    onClick={handleAuth}
                    disabled={code.length !== 4}
                    className="flex-1 py-3 rounded-xl font-bold text-sm transition-opacity"
                    style={{
                      background: code.length === 4 ? 'var(--mb-sky)' : 'rgba(91,200,232,0.3)',
                      color: 'white',
                    }}
                  >
                    認証
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
