import type { Metadata } from 'next';
import Link from 'next/link';
import ResetProgressButton from '@/components/ResetProgressButton';

export const metadata: Metadata = {
  title: '使用マニュアル | マネぼうアカデミー',
  description: 'マネぼうアカデミーの使い方ガイド。学習の進め方・いいね・メモ・実績・キーボードショートカットを解説します。',
};

const shortcuts = [
  { key: '⌘K / Ctrl+K / /', desc: '講義を全文検索（どのページからでも）' },
  { key: '?', desc: 'ショートカット一覧を表示' },
  { key: '← →', desc: '前後の講義に移動（講義ページのみ）' },
  { key: 'C', desc: '現在の講義を完了にする（講義ページのみ）' },
  { key: 'ESC', desc: 'パネル・モーダルを閉じる' },
];

const sections = [
  {
    title: 'マネぼうアカデミーの使い方',
    icon: '📱',
    steps: [
      'ホーム画面から「続きから学ぶ」ボタンで前回のレッスンに続きから戻れます',
      '「コース一覧」でコース→章→講義の順に学習できます',
      '各講義を最後まで読んで「講義を完了にする」を押すと進捗が記録されます',
      '間違って完了にした場合は、完了ボタン横の「取り消し」ボタンで戻せます',
      '下部メニューの「メニュー」→「用語集」から、講義で登場したキーワードを一覧確認できます',
      '学習レポートで自分の進捗・連続学習日数・実績を確認できます',
    ],
  },
  {
    title: 'いいね・メモ機能',
    icon: '❤️',
    steps: [
      '各講義ページの下部に「いいね」ボタンとメモ欄があります',
      'いいねした講義は学習レポートの「お気に入り講義」からまとめて確認できます',
      'メモは自由に書き留めておけます。学習中に気づいたことを残しておきましょう',
      'すべてのメモは学習レポートの「すべてのメモ」から検索・確認できます',
      'メモは「全メモをMarkdownでエクスポート」ボタンでMarkdown形式のままクリップボードにコピーすることもできます',
    ],
  },
  {
    title: '実績トロフィー',
    icon: '🏆',
    steps: [
      '学習の節目に39種類の実績バッジが解除されます',
      '例：「最初の一歩（1講義完了）」「3日連続学習（連続3日）」「50講義の頂（50講義）」「超集中学習（1日5講義）」など',
      '学習レポートの「実績トロフィー」カードで進捗を確認できます',
      'いいねを5件以上すると「いいね魔」実績も獲得できます',
    ],
  },
  {
    title: '学習成果をシェア',
    icon: '📤',
    steps: [
      '学習レポートの「学習成果をシェアする」カードからシェアできます',
      '「コピー」ボタンで完了講義数・連続日数・実績数を含むテキストをコピーできます',
      '「X」ボタンでX（Twitter）の投稿画面を直接開けます（280文字以内に自動調整済み）',
    ],
  },
  {
    title: 'ZAiゲームとの連動',
    icon: '🎲',
    steps: [
      '🎲マークがついた講義はボードゲーム「ZAi」と連動しています',
      '講義で学んだ知識を実際にゲームで使うことで深く身につきます',
      'ZAiについては別途ゲームのルールブックをご確認ください',
    ],
  },
  {
    title: '今週の目標・週次サマリー',
    icon: '🎯',
    steps: [
      'ホーム画面の「今週の目標」カードで、週の学習目標を設定できます',
      '「目標: 週○講義 ↻」ボタンをタップすると3/5/7/10/15講義の中から切り替えられます',
      '今週達成した講義数と残り数がリアルタイムで表示されます',
      '週間サマリーカードで今週の学習日数・ストリークが確認できます',
      '7日間すべて学習すると「🎉 今週7日間パーフェクト！」と表示されます',
    ],
  },
  {
    title: 'スタンプ機能',
    icon: '⭐',
    steps: [
      '画面下部メニューの「メニュー」→「スタンプ」からスタンプページを開けます',
      '各ページに表示される5桁のデイリーコードを入力してスタンプを押せます',
      'スタンプを集めることで実績バッジが解除されます（初スタンプ・常連・職人）',
      '1日1回押せるコードは毎日変わります。毎日チェックしてみましょう',
    ],
  },
  {
    title: '進捗について',
    icon: '📊',
    steps: [
      '進捗データはこのデバイスのブラウザに保存されます',
      '別のデバイスでは共有されません（アカウント機能は近日公開予定）',
      'ブラウザのデータを消去すると進捗がリセットされます',
    ],
  },
];

export default function ManualPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div
        className="inline-block text-[10px] font-bold tracking-[4px] px-3 py-1 rounded mb-3"
        style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        MANUAL
      </div>
      <h1 className="text-2xl mb-2" style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}>
        使用マニュアル
      </h1>
      <p className="text-sm mb-8" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        マネぼうアカデミーの使い方ガイド
      </p>

      <div className="space-y-6">
        {sections.map((section, i) => (
          <div
            key={i}
            className="p-5 rounded-xl border-2"
            style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: '3px 3px 0 var(--mb-gold)' }}
          >
            <h2 className="flex items-center gap-2 text-sm font-bold mb-4" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
              <span className="text-xl">{section.icon}</span>
              {section.title}
            </h2>
            <ol className="space-y-2">
              {section.steps.map((step, j) => (
                <li key={j} className="flex gap-3">
                  <span
                    className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold mt-0.5"
                    style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}
                  >
                    {j + 1}
                  </span>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(26,26,46,0.75)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* Keyboard shortcuts */}
      <div
        className="mt-6 p-5 rounded-xl border-2"
        style={{ background: 'white', borderColor: 'var(--mb-dark)', boxShadow: '3px 3px 0 var(--mb-sky)' }}
      >
        <h2 className="flex items-center gap-2 text-sm font-bold mb-4" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
          <span className="text-xl">⌨️</span>
          キーボードショートカット
        </h2>
        <div className="space-y-2">
          {shortcuts.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <kbd
                className="shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-bold border-2"
                style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', borderColor: 'var(--mb-dark)', fontFamily: "'Dela Gothic One', sans-serif", boxShadow: '2px 2px 0 var(--mb-gold)' }}
              >
                {s.key}
              </kbd>
              <span className="text-xs" style={{ color: 'rgba(26,26,46,0.7)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{s.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Danger zone */}
      <div
        className="mt-6 p-5 rounded-xl border-2"
        style={{ background: 'rgba(232,53,74,0.04)', borderColor: 'rgba(232,53,74,0.25)' }}
      >
        <h2 className="text-sm font-bold mb-1" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-red)' }}>
          ⚠️ 危険ゾーン
        </h2>
        <p className="text-xs mb-3" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          学習データをすべて削除します。この操作は取り消せません。
        </p>
        <ResetProgressButton />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/courses"
          className="inline-block px-6 py-3 rounded-lg text-sm font-bold border-2 transition-all hover:-translate-y-0.5"
          style={{
            background: 'var(--mb-dark)',
            borderColor: 'var(--mb-dark)',
            color: 'var(--mb-gold)',
            boxShadow: '3px 3px 0 var(--mb-gold)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
          }}
        >
          学習を始める →
        </Link>
      </div>
    </div>
  );
}
