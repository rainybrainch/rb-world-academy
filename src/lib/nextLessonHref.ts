import { categories } from '@/data/courses';

export function nextLessonHref(
  isCompleted: (courseId: string, lessonId: string) => boolean,
  lastViewedLesson: string | null
): string {
  if (lastViewedLesson) {
    const [lvCourseId, lvLessonId] = lastViewedLesson.split('/');
    for (const cat of categories) {
      const course = cat.courses.find(c => c.id === lvCourseId);
      if (course) {
        const lesson = course.lessons.find(l => l.id === lvLessonId);
        if (lesson && !lesson.isComingSoon && !isCompleted(lvCourseId, lvLessonId)) {
          return `/courses/${lvCourseId}/lessons/${lvLessonId}`;
        }
        break;
      }
    }
  }
  for (const cat of categories) {
    for (const course of cat.courses) {
      for (const lesson of course.lessons) {
        if (!lesson.isComingSoon && !isCompleted(course.id, lesson.id)) {
          return `/courses/${course.id}/lessons/${lesson.id}`;
        }
      }
    }
  }
  return '/courses';
}
