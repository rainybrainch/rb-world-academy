import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLesson, getAdjacentLessons, categories } from '@/data/courses';
import LessonShell from '@/components/LessonShell';

export function generateStaticParams() {
  return categories.flatMap(cat =>
    cat.courses.flatMap(course =>
      course.lessons
        .filter(l => !l.isComingSoon)
        .map(l => ({ courseId: course.id, lessonId: l.id }))
    )
  );
}

interface Props {
  params: Promise<{ courseId: string; lessonId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseId, lessonId } = await params;
  const result = getLesson(courseId, lessonId);
  if (!result) return {};
  const { lesson, course, category } = result;
  const desc = `${category.title} › ${course.title} — ${lesson.title}を学ぼう。ALL ACADEMYで世界と繋がろう。`;
  return {
    title: `${lesson.title} | ${course.title} | ALL ACADEMY`,
    description: desc,
    openGraph: {
      title: lesson.title,
      description: desc,
      url: `https://manebou-juku.vercel.app/courses/${courseId}/lessons/${lessonId}`,
      siteName: 'ALL ACADEMY',
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: { card: 'summary', title: lesson.title, description: desc },
  };
}

export default async function LessonPage({ params }: Props) {
  const { courseId, lessonId } = await params;
  const result = getLesson(courseId, lessonId);
  if (!result) notFound();

  const { lesson, course, category } = result;
  const { prev, next } = getAdjacentLessons(courseId, lessonId);

  return (
    <LessonShell
      lesson={lesson}
      course={course}
      courseId={courseId}
      categoryId={category.id}
      courseTitle={category.title}
      chapterTitle={course.title}
      prev={prev}
      next={next}
    />
  );
}
