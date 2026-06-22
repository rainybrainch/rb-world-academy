import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourse, categories } from '@/data/courses';
import CoursePageClient from './CoursePageClient';

export function generateStaticParams() {
  return categories.flatMap(cat => cat.courses.map(course => ({ courseId: course.id })));
}

interface Props {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseId } = await params;
  const result = getCourse(courseId);
  if (!result) return {};
  const { course, category } = result;
  return {
    title: `${course.title} | ${category.title} | マネぼうアカデミー`,
    description: course.description ?? `${course.title}の全講義を学ぼう。${category.title}のコースです。`,
  };
}

export default async function CoursePage({ params }: Props) {
  const { courseId } = await params;
  const result = getCourse(courseId);
  if (!result) notFound();
  const { course, category } = result;
  return <CoursePageClient course={course} category={category} courseId={courseId} />;
}
