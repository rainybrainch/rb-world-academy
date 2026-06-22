import type { Genre, TopicCategory } from '@/types';

export const genres: Genre[] = [
  {
    id: 'g-language',
    title: '言語学習',
    description: '11言語を学んで世界と繋がろう。',
  },
];

export const topicCategories: TopicCategory[] = [
  {
    id: 'topic-english',
    title: '英語',
    description: '英語を初級から中級まで学びます。日常会話・文法・語彙を習得。',
    image: '/images/languages/english.png',
    genreId: 'g-language',
  },
  {
    id: 'topic-japanese',
    title: '日本語',
    description: '日本語を初級から中級まで学びます。ひらがな・カタカナ・漢字を習得。',
    image: '/images/categories/japanese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-chinese',
    title: '中国語',
    description: '中国語を初級から中級まで学びます。ピンイン・漢字・会話を習得。',
    image: '/images/categories/chinese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-korean',
    title: '韓国語',
    description: '韓国語を初級から中級まで学びます。ハングル・文法・会話を習得。',
    image: '/images/categories/korean.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-german',
    title: 'ドイツ語',
    description: 'ドイツ語を初級から中級まで学びます。文法・発音・日常会話を習得。',
    image: '/images/categories/german.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-french',
    title: 'フランス語',
    description: 'フランス語を初級から中級まで学びます。文法・発音・会話スキルを習得。',
    image: '/images/categories/french.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-spanish',
    title: 'スペイン語',
    description: 'スペイン語を初級から中級まで学びます。文法・発音・日常表現を習得。',
    image: '/images/categories/spanish.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-italian',
    title: 'イタリア語',
    description: 'イタリア語を初級から中級まで学びます。文法・発音・会話を習得。',
    image: '/images/categories/italian.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-arabic',
    title: 'アラビア語',
    description: 'アラビア語を初級から中級まで学びます。文字・発音・基本会話を習得。',
    image: '/images/categories/arabic.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-portuguese',
    title: 'ポルトガル語',
    description: 'ポルトガル語を初級から中級まで学びます。文法・発音・会話を習得。',
    image: '/images/categories/portuguese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-classical-chinese',
    title: '古文・漢文',
    description: '古文・漢文を学びます。古典的な中国語と日本の古典表現を習得。',
    image: '/images/categories/classical-chinese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-sign-language',
    title: '手話',
    description: '日本手話を学びます。ろう者コミュニティとの対話・表現スキルを習得。',
    image: '/images/languages/12手話.png',
    genreId: 'g-language',
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
