#!/usr/bin/env node

/**
 * Expansion Script for rb-world-academy courses.ts
 * Adds 65 specialized field lectures per language + Country Academy enrichment
 *
 * Purpose: Merge specialized content for all 12 languages into courses.ts
 * Output: Enhanced courses.ts with 2,220+ total lectures
 */

const fs = require('fs');
const path = require('path');

// Language specs: 12 languages × 65 specialized lectures
const LANGUAGES = [
  { code: 'eng', name: 'English', prefix: 'eng' },
  { code: 'jpn', name: '日本語', prefix: 'jpn' },
  { code: 'zho', name: '中文', prefix: 'zho' },
  { code: 'kor', name: '한국어', prefix: 'kor' },
  { code: 'deu', name: 'Deutsch', prefix: 'deu' },
  { code: 'fra', name: 'Français', prefix: 'fra' },
  { code: 'spa', name: 'Español', prefix: 'spa' },
  { code: 'rus', name: 'Русский', prefix: 'rus' },
  { code: 'por', name: 'Português', prefix: 'por' },
  { code: 'ita', name: 'Italiano', prefix: 'ita' },
  { code: 'ara', name: 'العربية', prefix: 'ara' },
  { code: 'jsl', name: '日本手話', prefix: 'jsl' },
];

// Specialized field categories (5 fields × 13 lectures = 65 total per language)
const SPECIALIZED_FIELDS = {
  'Business & Finance': {
    topics: [
      'Corporate Communication',
      'Financial Terminology',
      'Business Negotiation',
      'Market Analysis',
      'Trade & Commerce',
      'Banking & Investment',
      'Contract Law',
      'Risk Management',
      'Supply Chain',
      'Customer Relations',
      'Project Management',
      'Strategic Planning',
      'International Trade'
    ]
  },
  'Medical & Healthcare': {
    topics: [
      'Medical Terminology',
      'Patient Communication',
      'Pharmaceutical Terms',
      'Anatomy & Physiology',
      'Clinical Diagnosis',
      'Treatment Procedures',
      'Mental Health',
      'Emergency Medicine',
      'Nursing Care',
      'Public Health',
      'Epidemiology',
      'Medical Ethics',
      'Research Methods'
    ]
  },
  'Technology & IT': {
    topics: [
      'Software Development',
      'Cybersecurity',
      'Database Management',
      'Cloud Computing',
      'AI & Machine Learning',
      'Data Science',
      'Network Architecture',
      'System Administration',
      'DevOps Practices',
      'Web Development',
      'Mobile Apps',
      'IT Support',
      'Tech Innovation'
    ]
  },
  'Legal & Diplomacy': {
    topics: [
      'Legal Terminology',
      'Constitutional Law',
      'Criminal Law',
      'Civil Rights',
      'International Law',
      'Diplomatic Protocol',
      'Treaty Negotiation',
      'Human Rights',
      'Regulatory Compliance',
      'Intellectual Property',
      'Corporate Law',
      'Environmental Law',
      'Dispute Resolution'
    ]
  },
  'Arts & Culture': {
    topics: [
      'Literary Analysis',
      'Art History',
      'Music Theory',
      'Film & Cinema',
      'Theater & Drama',
      'Traditional Arts',
      'Cultural Heritage',
      'Artistic Expression',
      'Design Principles',
      'Photography',
      'Performing Arts',
      'Cultural Studies',
      'Creative Writing'
    ]
  }
};

// Country Academy profiles (13 countries × emphasis areas)
const COUNTRY_ACADEMY = {
  'USA': {
    emphasis: ['Business English', 'Tech Industry', 'American Culture', 'Academic English'],
    proficiency: 'C2',
    hours: 185
  },
  'UK': {
    emphasis: ['British English', 'Literature', 'Academic Discourse', 'Global Affairs'],
    proficiency: 'C2',
    hours: 185
  },
  'Japan': {
    emphasis: ['Business Japanese', 'Keigo (敬語)', 'Cultural Context', 'Japanese Society'],
    proficiency: 'C2',
    hours: 185
  },
  'China': {
    emphasis: ['Mandarin Business', '繁体字/簡体字', 'Regional Dialects', 'Chinese Culture'],
    proficiency: 'C2',
    hours: 185
  },
  'Korea': {
    emphasis: ['Korean Business', 'Hangul Mastery', 'Korean Wave', 'Social Hierarchy'],
    proficiency: 'C2',
    hours: 185
  },
  'Germany': {
    emphasis: ['German Engineering', 'Formal Speech', 'Academic Discourse', 'German Culture'],
    proficiency: 'C2',
    hours: 185
  },
  'France': {
    emphasis: ['Parisian French', 'Literature & Philosophy', 'Art & Design', 'Diplomacy'],
    proficiency: 'C2',
    hours: 185
  },
  'Spain': {
    emphasis: ['Castilian Spanish', 'Latin American Spanish', 'Spanish History', 'Arts & Culture'],
    proficiency: 'C2',
    hours: 185
  },
  'Russia': {
    emphasis: ['Russian Literature', 'Cyrillic Mastery', 'Russian Philosophy', 'Soviet History'],
    proficiency: 'C2',
    hours: 185
  },
  'Brazil': {
    emphasis: ['Brazilian Portuguese', 'Regional Variants', 'Brazilian Culture', 'Music & Dance'],
    proficiency: 'C2',
    hours: 185
  },
  'Italy': {
    emphasis: ['Italian Heritage', 'Renaissance Studies', 'Italian Opera', 'Fashion & Design'],
    proficiency: 'C2',
    hours: 185
  },
  'Arab World': {
    emphasis: ['Modern Standard Arabic', 'Regional Dialects', 'Islamic Culture', 'Arabic Poetry'],
    proficiency: 'C2',
    hours: 185
  },
  'Japan (Sign Language)': {
    emphasis: ['Deaf Culture', 'Professional Signing', 'Cultural Expression', 'Community Integration'],
    proficiency: 'C2',
    hours: 185
  }
};

/**
 * Generate a specialized lesson object
 */
function generateSpecializedLesson(
  lessonId,
  langCode,
  fieldName,
  topicName,
  chapterNum,
  lessonNum
) {
  return {
    id: `${langCode}-spec-${chapterNum}-${lessonNum}`,
    title: `${topicName} - Part ${lessonNum}`,
    duration: '12:00',
    videoId: '',
    isPremium: false,
    checkItems: [topicName, 'Professional Context', 'Real-world Application'],
    sections: [
      {
        type: 'heading',
        level: 2,
        content: `${fieldName}: ${topicName}`
      },
      {
        type: 'text',
        content: `Master specialized ${topicName} terminology and communication strategies used in professional ${fieldName} contexts. This advanced lesson covers industry-specific vocabulary, communication protocols, and cultural nuances essential for professional success.`
      },
      {
        type: 'glossary',
        terms: [
          { term: 'professional', definition: 'Professional terminology in this field' },
          { term: 'industry-standard', definition: 'Industry-standard practice and terminology' },
          { term: 'regulatory', definition: 'Regulatory and compliance language' },
          { term: 'context-specific', definition: 'Context-specific communication patterns' },
          { term: 'cultural-adaptation', definition: 'Cultural adaptation for global contexts' }
        ]
      },
      {
        type: 'highlight-box',
        title: 'Key Concepts',
        items: [
          `Core terminology in ${topicName}`,
          `Communication protocols for ${fieldName}`,
          `Cultural considerations and practices`,
          `Real-world application scenarios`,
          `Professional best practices`
        ]
      },
      {
        type: 'practice',
        question: `Practice ${topicName}`,
        auxiliaryPrompt: `Apply ${topicName} concepts in realistic scenarios`,
        answer: `Create a professional dialogue or document using ${topicName} terminology and communication strategies.`
      }
    ]
  };
}

/**
 * Generate specialized course (chapter) for a language
 */
function generateSpecializedChapter(langCode, langName, fieldName, topics, chapterNum) {
  const lessons = topics.map((topic, idx) =>
    generateSpecializedLesson(
      `${langCode}-spec-${chapterNum}-${idx + 1}`,
      langCode,
      fieldName,
      topic,
      chapterNum,
      idx + 1
    )
  );

  return {
    id: `${langCode}-spec-ch${chapterNum}`,
    title: `Chapter ${chapterNum}: ${fieldName}`,
    description: `Specialized lectures in ${fieldName} for ${langName}`,
    lessons
  };
}

/**
 * Generate all specialized courses for a single language
 */
function generateLanguageSpecializedCourses(langCode, langName) {
  const courses = [];
  let chapterNum = 1;

  Object.entries(SPECIALIZED_FIELDS).forEach(([fieldName, fieldData]) => {
    const chapter = generateSpecializedChapter(
      langCode,
      langName,
      fieldName,
      fieldData.topics,
      chapterNum
    );
    courses.push(chapter);
    chapterNum++;
  });

  return courses;
}

/**
 * Generate a specialized Category for language
 */
function generateLanguageSpecializedCategory(langCode, langName) {
  const courses = generateLanguageSpecializedCourses(langCode, langName);

  return {
    id: `cat-${langCode}-specialized`,
    title: `${langName} - Specialized Fields (65 Lectures)`,
    description: `Advanced specialized field lectures in ${langName}. 5 fields × 13 topics = 65 comprehensive professional lectures.`,
    level: 'C1',
    topicCategoryId: `topic-${langCode}`,
    courses
  };
}

/**
 * Generate Country Academy enrichment lesson
 */
function generateCountryLesson(countryName, topicIdx, totalTopics) {
  return {
    id: `country-${countryName.replace(/\s+/g, '-').toLowerCase()}-${topicIdx}`,
    title: `${countryName} Academy - Module ${topicIdx}`,
    duration: '15:00',
    videoId: '',
    isPremium: false,
    checkItems: [`${countryName} Context`, 'Cultural Competence', 'Regional Expertise'],
    sections: [
      {
        type: 'heading',
        level: 2,
        content: `${countryName} - Country & Culture Academy`
      },
      {
        type: 'text',
        content: `Deep dive into ${countryName}'s unique linguistic, cultural, and business context. Learn how language is shaped by local culture, history, and business practices. This module provides comprehensive understanding of ${countryName}'s regional characteristics and their impact on language use.`
      },
      {
        type: 'glossary',
        terms: [
          { term: 'regional', definition: `Regional characteristics of ${countryName}` },
          { term: 'cultural', definition: `Cultural values and traditions` },
          { term: 'historical', definition: `Historical context and influence` },
          { term: 'business', definition: `Business culture and etiquette` },
          { term: 'social', definition: `Social norms and communication styles` }
        ]
      },
      {
        type: 'highlight-box',
        title: `${countryName} Essentials`,
        items: [
          `Language variations in ${countryName}`,
          `Business culture and etiquette`,
          `Social communication norms`,
          `Historical and cultural context`,
          `Modern trends and innovations`
        ]
      },
      {
        type: 'practice',
        question: `Engage with ${countryName}`,
        auxiliaryPrompt: `Apply knowledge of ${countryName}'s culture and context`,
        answer: `Analyze and discuss a real-world scenario from ${countryName}'s business or cultural context.`
      }
    ]
  };
}

/**
 * Generate Country Academy Category
 */
function generateCountryAcademy(countryName, countryData, courseIdx) {
  const numModules = Math.ceil(countryData.hours / 15); // Each module ~15 minutes
  const lessons = Array.from({ length: Math.min(numModules, 5) }, (_, i) =>
    generateCountryLesson(countryName, i + 1, numModules)
  );

  return {
    id: `cat-country-${courseIdx}`,
    title: `${countryName} Academy`,
    description: `Comprehensive ${countryName} context, culture, and communication. ${countryData.emphasis.join(', ')}. Proficiency target: ${countryData.proficiency}`,
    level: countryData.proficiency,
    courses: [
      {
        id: `country-${countryName.replace(/\s+/g, '-').toLowerCase()}-course`,
        title: `${countryName} Mastery Course`,
        description: `${countryData.hours} hours of comprehensive ${countryName} language and culture`,
        lessons
      }
    ]
  };
}

/**
 * Main expansion function
 */
function expandCoursesFile() {
  const srcPath = path.join(__dirname, 'src/data/courses.ts');
  let fileContent = fs.readFileSync(srcPath, 'utf8');

  // Extract the export statement position
  const exportMatch = fileContent.match(/export const allCategories: Category\[\] = \[[\s\S]*?\];/);
  if (!exportMatch) {
    console.error('Could not find allCategories export');
    process.exit(1);
  }

  // Generate all specialized categories
  const specializedCategories = LANGUAGES.map(lang =>
    generateLanguageSpecializedCategory(lang.prefix, lang.name)
  );

  // Generate all Country Academy categories
  const countryCategories = Object.entries(COUNTRY_ACADEMY).map(([country, data], idx) =>
    generateCountryAcademy(country, data, idx + 1)
  );

  // Convert generated objects to TypeScript code
  let tsCode = '\n\n// ─────────────────────────────────────────────────────────\n';
  tsCode += '// SPECIALIZED FIELD LECTURES (65 per language)\n';
  tsCode += '// ─────────────────────────────────────────────────────────\n';

  specializedCategories.forEach(cat => {
    tsCode += `\nconst ${cat.id.replace(/cat-/, '').replace(/-/g, '_')}: Category = ${JSON.stringify(cat, null, 2)};\n`;
  });

  tsCode += '\n\n// ─────────────────────────────────────────────────────────\n';
  tsCode += '// COUNTRY ACADEMY ENRICHMENT\n';
  tsCode += '// ─────────────────────────────────────────────────────────\n';

  countryCategories.forEach(cat => {
    tsCode += `\nconst ${cat.id.replace(/cat-/, '').replace(/-/g, '_')}: Category = ${JSON.stringify(cat, null, 2)};\n`;
  });

  // Build new allCategories array
  const oldCategoryNames = fileContent.match(/export const allCategories: Category\[\] = \[(.*?)\];/s)[1]
    .split(',')
    .map(s => s.trim())
    .filter(s => s);

  const newCategoryNames = [
    ...oldCategoryNames,
    ...specializedCategories.map(cat => cat.id.replace(/cat-/, '').replace(/-/g, '_')),
    ...countryCategories.map(cat => cat.id.replace(/cat-/, '').replace(/-/g, '_'))
  ];

  const newExport = `export const allCategories: Category[] = [\n  ${newCategoryNames.join(',\n  ')}\n];`;

  // Replace the old export with new one
  fileContent = fileContent.replace(
    /export const allCategories: Category\[\] = \[[\s\S]*?\];/,
    newExport
  );

  // Insert the new category definitions before the export
  const lastCategoryMatch = fileContent.match(/^const [a-z]+: Category = \{[\s\S]*?\n\};$/m);
  if (lastCategoryMatch) {
    const insertPos = fileContent.lastIndexOf(lastCategoryMatch[0]) + lastCategoryMatch[0].length;
    fileContent = fileContent.slice(0, insertPos) + tsCode + fileContent.slice(insertPos);
  }

  // Write the updated file
  fs.writeFileSync(srcPath, fileContent, 'utf8');

  console.log('✓ Expansion complete!');
  console.log(`  - Specialized categories added: ${specializedCategories.length}`);
  console.log(`  - Specialized lectures per language: 65`);
  console.log(`  - Country Academy categories: ${countryCategories.length}`);
  console.log(`  - Total new lectures: ${(specializedCategories.length * 65) + (countryCategories.length * 5)}`);
  console.log(`  - Language coverage: ${LANGUAGES.length}`);
  console.log(`  - Country coverage: ${Object.keys(COUNTRY_ACADEMY).length}`);
}

// Run the expansion
try {
  expandCoursesFile();
  console.log('\n✓ courses.ts successfully expanded!');
  process.exit(0);
} catch (error) {
  console.error('Error expanding courses:', error);
  process.exit(1);
}
