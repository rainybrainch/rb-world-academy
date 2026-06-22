import type { MetadataRoute } from 'next';
import { topicCategories } from '@/data/structure';
import { categories } from '@/data/courses';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://manebou-juku.vercel.app';

  const categoryUrls: MetadataRoute.Sitemap = topicCategories.map(tc => ({
    url: `${base}/categories/${tc.id}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const courseUrls: MetadataRoute.Sitemap = categories.flatMap(cat =>
    cat.courses.map(course => ({
      url: `${base}/courses/${course.id}`,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  );

  return [
    { url: base,                   changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/courses`,      changeFrequency: 'weekly',  priority: 0.9 },
    ...categoryUrls,
    ...courseUrls,
    { url: `${base}/news`,         changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/glossary`,     changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/questions`,    changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/progress`,     changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/stamp`,        changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/manual`,       changeFrequency: 'monthly', priority: 0.4 },
  ];
}
