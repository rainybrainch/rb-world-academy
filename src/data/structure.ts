import type { Genre, TopicCategory } from '@/types';

export const genres: Genre[] = [
  {
    id: 'g-lecture',
    title: '座学系',
    description: 'テキストと図解でじっくり学ぶ。お金・経済・投資・政治の基礎から応用まで。',
  },
  {
    id: 'g-game',
    title: '遊び系',
    description: 'ボードゲームや体験型コンテンツで学ぶ。ZAiなど実践的なゲームと連動。',
  },
  {
    id: 'g-exam',
    title: '受験用',
    description: '共通テスト「公共」対策。金融リテラシー・経済・政治を受験視点で整理。',
  },
];

export const topicCategories: TopicCategory[] = [
  // ── 座学系 ──────────────────────────────────────────
  {
    id: 'cat-money',
    title: 'お金',
    description: 'お金を楽しく学ぼうマネぼう！お金の仕組みから家計管理まで。',
    image: '/images/categories/cat-money.webp',
    genreId: 'g-lecture',
  },
  {
    id: 'cat-investment',
    title: '投資',
    description: 'お金を育てるしくみを学ぼうマネぼう！株・NISA・資産運用の基本。',
    image: '/images/categories/cat-investment.webp',
    genreId: 'g-lecture',
  },
  {
    id: 'cat-economics',
    title: '経済',
    description: '世界のお金の流れを学ぼうマネぼう！GDP・為替・国際経済のしくみ。',
    image: '/images/categories/cat-economics.webp',
    genreId: 'g-lecture',
  },
  {
    id: 'cat-politics',
    title: '政治',
    description: '社会のルールを学ぼうマネぼう！選挙・税金・社会保障のしくみ。',
    image: '/images/categories/cat-politics.webp',
    genreId: 'g-lecture',
  },
  // ── 遊び系 ────────────────────────────────────────
  {
    id: 'cat-play',
    title: '遊び',
    description: 'ゲームで遊びながら経済を学ぼう！ZAi・ボードゲーム・様々な体験型コンテンツ。',
    image: '/images/categories/cat-play.webp',
    genreId: 'g-game',
  },
  // ── 受験用 ──────────────────────────────────────────
  {
    id: 'cat-exam-public',
    title: '受験',
    description: '共通テスト対策マネぼう！「公共」「政治経済」の頻出テーマを網羅。',
    image: '/images/categories/cat-exam-public.webp',
    genreId: 'g-exam',
  },
];

export function getGenreById(id: string): Genre | undefined {
  return genres.find(g => g.id === id);
}

export function getCategoriesByGenre(genreId: string): TopicCategory[] {
  return topicCategories.filter(c => c.genreId === genreId);
}

export function getTopicCategoryById(id: string): TopicCategory | undefined {
  return topicCategories.find(c => c.id === id);
}
