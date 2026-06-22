import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center px-4 text-center">
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 border-2"
        style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-gold)', boxShadow: '5px 5px 0 var(--mb-gold)' }}
      >
        😶
      </div>

      <div
        className="text-[64px] leading-none font-bold mb-2"
        style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}
      >
        404
      </div>

      <h1
        className="text-lg font-bold mb-2"
        style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}
      >
        ページが見つかりません
      </h1>
      <p
        className="text-sm mb-8 max-w-xs"
        style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif", lineHeight: 1.8 }}
      >
        お探しのページは存在しないか、移動した可能性があります。
      </p>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-bold text-sm transition-all hover:-translate-y-0.5"
          style={{
            background: 'var(--mb-dark)',
            borderColor: 'var(--mb-dark)',
            color: 'var(--mb-gold)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
            boxShadow: '3px 3px 0 var(--mb-gold)',
          }}
        >
          ホームへ戻る
        </Link>
        <Link
          href="/courses"
          className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-bold text-sm transition-all hover:-translate-y-0.5"
          style={{
            background: 'white',
            borderColor: 'var(--mb-dark)',
            color: 'var(--mb-dark)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
            boxShadow: '3px 3px 0 var(--mb-sky)',
          }}
        >
          コース一覧へ
        </Link>
      </div>
    </div>
  );
}
