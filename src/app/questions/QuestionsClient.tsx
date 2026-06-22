'use client';

import { useState } from 'react';
import AnimatedCollapse from '@/components/AnimatedCollapse';

interface FaqEntry {
  q: string;
  a: string;
}

interface FaqSection {
  label: string;
  icon: string;
  color: string;
  items: FaqEntry[];
}

const FAQ_SECTIONS: FaqSection[] = [
  {
    label: 'アプリについて',
    icon: '📱',
    color: '#5BC8E8',
    items: [
      {
        q: 'マネぼうアカデミーは無料ですか？',
        a: 'はい、現在公開されているすべての講義は無料でご利用いただけます。一部「プレミアム」マークの講義は今後有料化を予定しています。',
      },
      {
        q: '学習の進捗はどこに保存されますか？',
        a: '進捗データはブラウザの localStorage に保存されます。同じデバイス・同じブラウザからアクセスすれば引き続き学習できます。別のデバイスへの同期はアカウント機能（近日公開予定）で対応予定です。',
      },
      {
        q: 'データを別のブラウザに移行できますか？',
        a: '現時点では自動移行機能はありません。学習レポートページの「学習成果をシェアする」で進捗のテキストコピーは可能です。アカウント連携機能を開発中ですので、しばらくお待ちください。',
      },
      {
        q: '講義の内容に誤りを見つけたらどうすればいいですか？',
        a: '大変申し訳ございません。お問い合わせフォームまたはSNSからご連絡ください。迅速に確認・修正いたします。',
      },
    ],
  },
  {
    label: '学習・進捗',
    icon: '📊',
    color: '#4CAF7D',
    items: [
      {
        q: '学習の進捗はリセットできますか？',
        a: 'マニュアルページの「学習データをリセット」ボタンから全進捗データを削除できます。個別の講義のチェックマークは、各講義ページ下部の「完了を取り消す」からリセット可能です。',
      },
      {
        q: '学習成果をSNSでシェアできますか？',
        a: '学習レポートページの「学習成果をシェアする」カードから、進捗をテキスト形式でコピー・シェアできます。',
      },
      {
        q: '「今週の目標」の目標数を変えるには？',
        a: 'ホーム画面の「今週の目標」カードにある「目標: 週○講義 ↻」ボタンをタップすると、週3/5/7/10/15講義の中から目標を切り替えられます。',
      },
      {
        q: '学習レポートの「目標完了日」とは何ですか？',
        a: '全講義を何日までに完了するかの個人目標を設定できる機能です。設定すると、現在のペースで目標日に間に合うかを自動計算して表示します。',
      },
    ],
  },
  {
    label: '機能・操作',
    icon: '⚙️',
    color: '#F5C842',
    items: [
      {
        q: 'キーボードショートカットはありますか？',
        a: '講義ページで「←」「→」で前後の講義に移動、「C」で講義を完了できます。「?」キーでショートカット一覧を表示できます。',
      },
      {
        q: '用語集ページはありますか？',
        a: 'はい、下部メニューの「メニュー」→「用語集」から全講義で登場したキーワードを一覧で確認できます。検索・カテゴリ絞り込み機能もあり、気になる用語をすぐに調べられます。',
      },
      {
        q: 'ZAiゲームとは何ですか？',
        a: 'ZAiは経済・投資の概念をボードゲームで体験できるゲームです。🎲マークがついた講義はZAiゲームと連動しており、ゲームをプレイしながら学んだ知識を実践できます。',
      },
      {
        q: 'スタンプ機能とは何ですか？',
        a: 'スタンプカードは対面授業への参加を記録する機能です。授業で配られるデイリーコード（4桁）を入力するとスタンプが1個押せます。10個貯まるとクーポンが獲得できます。スタンプ数に応じて「初スタンプ・常連・職人」の実績バッジも解除されます。サイドバーまたはメニューの「スタンプ」からアクセスできます。',
      },
      {
        q: '講義検索はどこで使えますか？',
        a: '⌘K（Mac）/Ctrl+K（Windows）または「/」キーでどのページからでも講義検索ダイアログを開けます。講義名・コース名でリアルタイム検索でき、上下キーで選択・Enterで移動できます。完了済みの講義は✓マークで区別されます。',
      },
    ],
  },
  {
    label: 'コンテンツ',
    icon: '📚',
    color: '#E8354A',
    items: [
      {
        q: '開設されているコースの種類は？どれから始めればいい？',
        a: '現在7カテゴリ・20以上のコースがあります。①お金（家計・税金・保険・ライフプラン）②投資（株式・NISA・インデックス・配当）③経済（日本経済・為替）④政治⑤ZAiゲーム連動⑥ボードゲーム⑦公共・政治経済（受験対策）。初めての方には「お金」カテゴリの「マネーの基礎」から始めるのがおすすめです。',
      },
      {
        q: 'コンテンツはどのくらいの頻度で追加されますか？',
        a: '現在鋭意制作中です。「準備中」表示の講義が随時公開されていきます。SNSでの最新情報をお待ちください。',
      },
      {
        q: 'リクエストした講義を追加してもらえますか？',
        a: 'SNSまたはお問い合わせフォームでリクエストを受け付けています。多くのリクエストをいただいた内容を優先的に制作します。',
      },
    ],
  },
  {
    label: 'NISA・投資',
    icon: '🏦',
    color: '#9B6DD6',
    items: [
      {
        q: 'NISAとiDeCoはどちらを先に始めるべき？',
        a: '基本的には「まずNISA」がおすすめです。NISAはいつでも引き出せる柔軟性があります。iDeCoは節税効果が高いですが60歳まで引き出せないため、20〜30代で住宅購入などのライフイベントが見込まれる方はNISAを先に最大活用しましょう。',
      },
      {
        q: '新NISAで積み立てるならどんな商品がいい？',
        a: 'つみたて投資枠では「全世界株式インデックスファンド（オルカン）」か「S&P500インデックスファンド」が初心者に人気です。信託報酬が0.1%以下のものを選ぶのがポイント。コストが低いほど長期での差が大きくなります。',
      },
      {
        q: '毎月いくらから積み立て始められる？',
        a: '証券会社によっては月100円から積立できます。大切なのは金額より「始めること」と「継続すること」。収入の5〜10%を目安に、生活費を圧迫しない金額から始めましょう。慣れてきたら増額するのが鉄則です。',
      },
      {
        q: '投資信託の「信託報酬」はなぜ重要？',
        a: '信託報酬は保有し続ける間かかるコストです。年0.1%と年1%では、30年後に数百万円の差が生まれます。特に積立NISAで長期運用する場合、コストが低いインデックスファンドを選ぶことが長期リターンを最大化する重要なポイントです。',
      },
      {
        q: '「オルカン」と「S&P500」どっちがいい？',
        a: '甲乙つけがたいです。S&P500は米国500社のみで過去のリターンが高めですが、「米国に集中」というリスクがあります。オルカン（全世界株式）は約50カ国3,000社以上に分散でき、より広い意味で分散投資ができます。長期でどちらも優秀な選択肢です。迷ったらオルカン1本が万人向けの答えかもしれません。',
      },
      {
        q: '株式投資と投資信託はどう違う？',
        a: '株式投資は個別企業の株を直接買うこと。1社の業績次第で大きく変動します。投資信託は複数の株・債券などをまとめたパッケージを購入するもの。プロが運用し、1本で分散投資ができます。初心者にはまず投資信託（特にインデックスファンド）から始めるのがリスクが低く始めやすいです。',
      },
    ],
  },
  {
    label: 'ライフプラン・節税',
    icon: '🗓️',
    color: '#4CAF7D',
    items: [
      {
        q: '20代から資産形成を始めるべき理由は？',
        a: '最大の理由は「時間の複利」です。20歳から月1万円を年利5%で積み立てると40年後は約1,530万円。30歳から始めると30年後は約830万円。10年の差で倍近く変わります。若さは最大の資産。今すぐ始めることが唯一の最適解です。',
      },
      {
        q: 'ライフイベントとお金の準備はどう考える？',
        a: '主なライフイベントの目安費用：①結婚：約300万円②出産・育児：子ども1人あたり約500〜1,000万円③住宅：頭金10〜20%（購入価格の）④教育費：大学まで私立で約2,000万円⑤老後：2,000〜3,000万円（年金次第）。逆算して今の積立額を決めるのが家計設計の基本です。',
      },
      {
        q: '副業収入を節税する方法は？',
        a: '①経費を正確に計上する（スマホ・PC・書籍・交通費など）②青色申告（最大65万円の控除）を活用する③iDeCoで掛金を全額所得控除にする④ふるさと納税で実質的な節税と返礼品をもらう。年20万円超えたら確定申告必須ですが、申告することで節税できるケースがほとんどです。',
      },
    ],
  },
  {
    label: '実績・メモ・シェア',
    icon: '🏆',
    color: '#9B6DD6',
    items: [
      {
        q: '実績バッジはどんな種類がありますか？',
        a: '現在39種類の実績があります。講義数系（5/10/15/20/25/30/40/50/60/75/100講義）・連続学習系（3日/1週間/2週間/3週間/1ヶ月連続、週間パーフェクト）・行動系（集中学習・超集中学習・チェック魔・メモ魔・いいね魔・メモの達人・いいね上手）・クイズ系（一問入魂・クイズマスター・3日/7日連続クイズ）・スタンプ系（初スタンプ・スタンプ常連・スタンプ職人）・攻略系（章マスター・カテゴリ制覇・完全制覇）などです。学習レポートページの「実績トロフィー」カードから確認できます。',
      },
      {
        q: '「いいね」ボタンは何に使いますか？',
        a: '気に入った・もう一度見たい講義にいいねをつけておけます。学習レポートページの「お気に入り講義」から一覧で確認できます。いいねした数が5件を超えると「いいね魔」実績も獲得できます。',
      },
      {
        q: 'メモ機能はどう使いますか？',
        a: '各講義ページの下部にメモ欄があります。学んだこと・疑問・気づきを自由に書き留めておけます。メモした内容は学習レポートの「すべてのメモ」から検索・確認でき、Markdownとしてエクスポートすることもできます。',
      },
      {
        q: '学習成果をX（Twitter）でシェアするには？',
        a: '学習レポートページの「学習成果をシェアする」カードに「X」ボタンがあります。完了講義数・連続学習日数などを自動で文章にしてXの投稿画面を開きます。',
      },
      {
        q: 'メモをエクスポートするにはどうすれば？',
        a: '学習レポートページの「すべてのメモ」カードに「全メモをMarkdownでエクスポート」ボタンがあります。押すと全講義のメモをまとめたMarkdown形式でクリップボードにコピーできます。',
      },
      {
        q: '活動チャート（カレンダー）の色の意味は？',
        a: '過去4週間の学習パターンが色で表示されます。薄い青（1講義）→中程度の青（2講義）→濃い青（3〜4講義）→ゴールド🌩️（5講義以上＝超集中学習！）。ゴールド色の日は「超集中学習」実績の達成条件である1日5講義を超えた日です。',
      },
      {
        q: 'ウェルカムバナーのレベル表示の意味は？',
        a: 'ホームのウェルカムバナーには現在の称号（見習い／学習者／努力家／猛者／達人／伝説／超人／100講義の神）と、次のレベルまでの進捗バーが表示されます。累計完了講義数によって自動で変わります。',
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl border-2 overflow-hidden transition-all"
      style={{
        borderColor: open ? 'var(--mb-dark)' : 'rgba(26,26,46,0.12)',
        boxShadow: open ? '3px 3px 0 var(--mb-gold)' : 'none',
      }}
    >
      <button type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-left"
        style={{ background: open ? 'var(--mb-dark)' : 'white' }}
      >
        <span className="text-sm font-bold pr-4" style={{ color: open ? 'var(--mb-gold)' : 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {q}
        </span>
        <span className="shrink-0 text-lg leading-none" style={{ color: open ? 'var(--mb-gold)' : 'rgba(26,26,46,0.3)' }}>
          {open ? '−' : '+'}
        </span>
      </button>
      <AnimatedCollapse open={open}>
        <div className="px-4 py-3 border-t" style={{ borderColor: 'rgba(26,26,46,0.1)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,26,46,0.75)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {a}
          </p>
        </div>
      </AnimatedCollapse>
    </div>
  );
}

export default function QuestionsClient() {
  const totalQuestions = FAQ_SECTIONS.reduce((a, s) => a + s.items.length, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div
        className="inline-block text-[10px] font-bold tracking-[4px] px-3 py-1 rounded mb-3"
        style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        FAQ
      </div>
      <h1 className="text-2xl mb-1" style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}>
        よくある質問
      </h1>
      <p className="text-sm mb-8" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        {totalQuestions}件の質問 — ご不明な点はこちらをご確認ください
      </p>

      <div className="space-y-8">
        {FAQ_SECTIONS.map(section => (
          <div key={section.label}>
            {/* Section header */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0"
                style={{ background: `${section.color}20`, border: `1.5px solid ${section.color}40` }}
              >
                {section.icon}
              </div>
              <span
                className="text-xs font-bold tracking-[2px]"
                style={{ color: 'rgba(26,26,46,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {section.label.toUpperCase()}
              </span>
              <div className="flex-1 h-px" style={{ background: 'rgba(26,26,46,0.08)' }} />
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: `${section.color}15`, color: section.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {section.items.length}
              </span>
            </div>

            <div className="space-y-2.5">
              {section.items.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-10 p-5 rounded-xl border-2 text-center"
        style={{ background: 'rgba(26,26,46,0.03)', borderColor: 'rgba(26,26,46,0.12)' }}
      >
        <p className="text-sm font-bold mb-1" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          解決しない場合は？
        </p>
        <p className="text-xs" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          SNSまたはお問い合わせフォームからご連絡ください
        </p>
      </div>
    </div>
  );
}
