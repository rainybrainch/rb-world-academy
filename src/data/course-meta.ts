import { allCategories } from './courses';

export interface CategoryMeta {
  id: string;
  title: string;
  level: string;
  color: string;
  icon: string;
}

// Generate COURSE_META from allCategories
export const COURSE_META: Record<string, CategoryMeta> = allCategories.reduce((acc, cat) => {
  acc[cat.id] = {
    id: cat.id,
    title: cat.title,
    level: cat.level || '初級',
    color: '#3498db',
    icon: cat.topicCategoryId?.replace('topic-', 'genre-') || 'genre-default',
  };
  return acc;
}, {} as Record<string, CategoryMeta>);
