'use client';

import React from 'react';
import { Button } from '@/components/AllAcademyDesign/Button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/AllAcademyDesign/Card';
import { Badge, LevelBadge, AchievementBadge } from '@/components/AllAcademyDesign/Badge';
import { ProgressBar, CircularProgress, StepProgress } from '@/components/AllAcademyDesign/ProgressBar';

export default function DesignPage() {
  const mockCourses = [
    {
      id: 1,
      title: 'プロテイン完全ガイド',
      academy: 'ライフアカデミー',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=250&fit=crop',
      level: 'beginner',
      duration: '4時間',
      lessons: 22,
      progress: 65,
      students: 1234,
    },
    {
      id: 2,
      title: 'ChatGPT 完全マスター',
      academy: 'IT・AIアカデミー',
      image: 'https://images.unsplash.com/photo-1677442d019cecf3da4991854202b092?w=400&h=250&fit=crop',
      level: 'intermediate',
      duration: '6時間',
      lessons: 18,
      progress: 42,
      students: 5678,
    },
    {
      id: 3,
      title: '世界の歴史を学ぶ',
      academy: '世界アカデミー',
      image: 'https://images.unsplash.com/photo-1450126613956-b51d3e7dee59?w=400&h=250&fit=crop',
      level: 'advanced',
      duration: '12時間',
      lessons: 30,
      progress: 88,
      students: 3456,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* ========== Hero Section ========== */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Badge variant="outline" size="lg" icon="🎓">
              All Academy Design System
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-800 mb-6 leading-tight">
            オール・ドメディアと一緒に<br />
            <span className="bg-gradient-to-r from-ocean-400 to-ocean-500 bg-clip-text text-transparent">
              世界を学ぼう
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            漫画、解説、クイズで学ぶ次世代教育プラットフォーム。<br />
            ゲーム感覚で、楽しく、確実に成長できます。
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="primary" icon="🚀">
              今すぐ始める
            </Button>
            <Button size="lg" variant="tertiary" icon="📚">
              コースを見る
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        {/* ========== Component Showcase ========== */}

        {/* Buttons Section */}
        <section>
          <h2 className="text-3xl font-bold text-navy-800 mb-8">ボタンシステム</h2>
          <Card variant="glass" className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-navy-800 mb-3">プライマリボタン</h3>
                <div className="flex gap-3 flex-wrap">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-navy-800 mb-3">セカンダリボタン</h3>
                <div className="flex gap-3 flex-wrap">
                  <Button variant="secondary" size="md">Secondary</Button>
                  <Button variant="tertiary" size="md">Tertiary</Button>
                  <Button variant="ghost" size="md">Ghost</Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-navy-800 mb-3">アイコン付きボタン</h3>
                <div className="flex gap-3 flex-wrap">
                  <Button icon="▶️">再生</Button>
                  <Button icon="⭐">いいね</Button>
                  <Button icon="📤">共有</Button>
                  <Button icon="❌" variant="tertiary">キャンセル</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Badge Section */}
        <section>
          <h2 className="text-3xl font-bold text-navy-800 mb-8">バッジシステム</h2>
          <Card variant="glass" className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-navy-800 mb-3">レベルバッジ</h3>
                <div className="flex gap-3 flex-wrap">
                  <LevelBadge level="beginner" />
                  <LevelBadge level="intermediate" />
                  <LevelBadge level="advanced" />
                  <LevelBadge level="expert" />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-navy-800 mb-3">アチーブメントバッジ</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <AchievementBadge icon="🏆" label="初級マスター" unlocked />
                  <AchievementBadge icon="💯" label="完走" unlocked />
                  <AchievementBadge icon="🔥" label="7連続" unlocked />
                  <AchievementBadge icon="🌟" label="全問正解" unlocked={false} progress={60} />
                  <AchievementBadge icon="🚀" label="エキスパート" unlocked={false} progress={25} />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Progress Section */}
        <section>
          <h2 className="text-3xl font-bold text-navy-800 mb-8">進捗表示システム</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="glass" className="p-8">
              <h3 className="font-semibold text-navy-800 mb-6">リニアプログレス</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-navy-800 mb-2">デフォルト (65%)</p>
                  <ProgressBar progress={65} color="ocean" showLabel />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800 mb-2">ゴールド (88%)</p>
                  <ProgressBar progress={88} color="gold" showLabel />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800 mb-2">チャンク形式 (60%)</p>
                  <ProgressBar progress={60} variant="chunked" color="ocean" />
                </div>
              </div>
            </Card>

            <Card variant="glass" className="p-8">
              <h3 className="font-semibold text-navy-800 mb-6">サーキュラープログレス</h3>
              <div className="flex justify-around flex-wrap gap-4">
                <CircularProgress progress={35} size="md" label="講義1" icon="📖" />
                <CircularProgress progress={72} size="md" label="講義2" icon="✍️" color="gold" />
                <CircularProgress progress={100} size="md" label="講義3" icon="✅" color="green" />
              </div>
            </Card>
          </div>

          <Card variant="glass" className="p-8 mt-8">
            <h3 className="font-semibold text-navy-800 mb-6">ステッププログレス</h3>
            <StepProgress
              steps={[
                { label: '漫画', completed: true },
                { label: '解説', completed: true },
                { label: '図解', completed: false },
                { label: 'クイズ', completed: false },
              ]}
              currentStep={2}
            />
          </Card>
        </section>

        {/* Course Cards Section */}
        <section>
          <h2 className="text-3xl font-bold text-navy-800 mb-8">コースカード</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mockCourses.map((course) => (
              <Card key={course.id} variant="elevated" interactive className="group overflow-hidden">
                <CardHeader image={course.image} badge={<LevelBadge level={course.level as any} />} />

                <CardContent>
                  <p className="text-xs text-ocean-600 font-semibold mb-2">{course.academy}</p>
                  <h3 className="font-semibold text-navy-800 mb-3 group-hover:text-ocean-500 transition-colors">
                    {course.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">進捗</span>
                      <span className="font-semibold text-navy-800">{course.progress}%</span>
                    </div>
                    <ProgressBar progress={course.progress} size="sm" color="ocean" />
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs text-slate-600">
                    <div className="text-center">
                      <div className="font-semibold text-navy-800">{course.lessons}</div>
                      <div>講義</div>
                    </div>
                    <div className="text-center border-l border-r border-slate-200">
                      <div className="font-semibold text-navy-800">{course.duration}</div>
                      <div>学習時間</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-navy-800">{(course.students / 1000).toFixed(1)}K</div>
                      <div>受講者</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="gap-2 justify-between">
                  <Button variant="primary" size="sm" className="flex-1" icon="▶️">
                    続ける
                  </Button>
                  <Button variant="ghost" size="sm" icon="⭐" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Cards */}
        <section>
          <h2 className="text-3xl font-bold text-navy-800 mb-8">学習体験フロー</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="glass" className="p-8">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">漫画で学ぶ</h3>
              <p className="text-slate-600 mb-4">
                プロが描いた漫画で、ワクワクしながら学習がスタート。複雑な概念も物語で理解できます。
              </p>
              <Button variant="tertiary" size="md" icon="📖">もっと見る</Button>
            </Card>

            <Card variant="glass" className="p-8">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">ゲーム感覚で進む</h3>
              <p className="text-slate-600 mb-4">
                バッジ、ランキング、ストリークで、自然とモチベーションが続く。毎日の学習が楽しみに。
              </p>
              <Button variant="tertiary" size="md" icon="🏆">ランキングを見る</Button>
            </Card>

            <Card variant="glass" className="p-8">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">理解度チェック</h3>
              <p className="text-slate-600 mb-4">
                イラストや図解で知識を定着。クイズで理解度を可視化し、効果的に復習できます。
              </p>
              <Button variant="tertiary" size="md" icon="✍️">クイズに挑戦</Button>
            </Card>

            <Card variant="glass" className="p-8">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">修了で達成感</h3>
              <p className="text-slate-600 mb-4">
                コース完走で修了バッジを獲得。SNS共有で、あなたの学習成果をみんなに見せよう。
              </p>
              <Button variant="tertiary" size="md" icon="🎉">修了ギャラリーへ</Button>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <section className="py-12 text-center border-t border-slate-200">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">準備はいいですか？</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            今すぐ始めて、あなたの学習の旅を開始しましょう。<br />
            オール・ドメディアがあなたのサポーターです。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="primary" icon="🚀">
              10アカデミーを探索
            </Button>
            <Button size="lg" variant="secondary" icon="👤">
              ログイン
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
