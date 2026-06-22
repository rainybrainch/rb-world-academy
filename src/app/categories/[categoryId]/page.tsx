import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories } from '@/data/courses';
import { topicCategories, getTopicCategoryById } from '@/data/structure';
import CategoryPageClient from './CategoryPageClient';

export function generateStaticParams() {
  return topicCategories.map(tc => ({ categoryId: tc.id }));
}

interface Props {
  params: Promise<{ categoryId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const tc = getTopicCategoryById(categoryId);
  if (!tc) return {};
  return {
    title: `${tc.title} | マネぼうアカデミー`,
    description: tc.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;
  const tc = getTopicCategoryById(categoryId);
  if (!tc) notFound();

  const courses = categories.filter(c => c.topicCategoryId === categoryId);
  if (courses.length === 0) notFound();

  return <CategoryPageClient tc={tc} courses={courses} />;
}
