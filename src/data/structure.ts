import type { Genre, TopicCategory } from '@/types';

export const genres: Genre[] = [
  {
    id: 'g-language',
    title: 'Language Learning',
    description: 'Learn 11 languages to connect with the world.',
  },
];

export const topicCategories: TopicCategory[] = [
  {
    id: 'topic-english',
    title: 'English',
    description: 'English language learning at A1, A2, and B1 levels.',
    image: '/images/categories/english.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-japanese',
    title: '日本語',
    description: 'Japanese language learning at A1, A2, and B1 levels.',
    image: '/images/categories/japanese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-chinese',
    title: '中国語',
    description: 'Chinese language learning at A1, A2, and B1 levels.',
    image: '/images/categories/chinese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-korean',
    title: '한국어',
    description: 'Korean language learning at A1, A2, and B1 levels.',
    image: '/images/categories/korean.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-german',
    title: 'Deutsch',
    description: 'German language learning at A1, A2, and B1 levels.',
    image: '/images/categories/german.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-french',
    title: 'Français',
    description: 'French language learning at A1, A2, and B1 levels.',
    image: '/images/categories/french.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-spanish',
    title: 'Español',
    description: 'Spanish language learning at A1, A2, and B1 levels.',
    image: '/images/categories/spanish.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-italian',
    title: 'Italiano',
    description: 'Italian language learning at A1, A2, and B1 levels.',
    image: '/images/categories/italian.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-arabic',
    title: 'العربية',
    description: 'Arabic language learning at A1, A2, and B1 levels.',
    image: '/images/categories/arabic.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-portuguese',
    title: 'Português',
    description: 'Portuguese language learning at A1, A2, and B1 levels.',
    image: '/images/categories/portuguese.webp',
    genreId: 'g-language',
  },
  {
    id: 'topic-classical-chinese',
    title: '古文・漢文',
    description: 'Classical Chinese language learning.',
    image: '/images/categories/classical-chinese.webp',
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
