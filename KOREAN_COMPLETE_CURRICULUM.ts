/**
 * KOREAN COMPLETE CURRICULUM
 * 120 Comprehensive Lectures (A1-B2)
 * 30 lessons per level × 4 levels
 * Integrated into src/data/courses.ts
 */

export const koreanCurriculumMeta = {
  totalLessons: 120,
  levels: ['A1', 'A2', 'B1', 'B2'],
  lessonsPerLevel: 30,
  chapters: 20, // 5 chapters per level
  lessonsPerChapter: 6,

  levelTopics: {
    'A1': [
      '기초 인사와 자기소개 (Greetings & Introduction)',
      '숫자, 시간, 날짜 (Numbers, Time, Dates)',
      '가족과 친구 (Family & Friends)',
      '음식과 음료 (Food & Beverages)',
      '위치와 방향 (Location & Directions)'
    ],
    'A2': [
      '과거 경험 이야기 (Past Experiences)',
      '계획과 미래 (Planning & Future)',
      '감정과 느낌 (Emotions & Feelings)',
      '쇼핑과 거래 (Shopping & Transactions)',
      '여행과 숙박 (Travel & Accommodation)'
    ],
    'B1': [
      '의견과 논의 (Opinions & Discussions)',
      '뉴스와 미디어 (News & Media)',
      '업무와 직업 (Work & Careers)',
      '건강과 운동 (Health & Exercise)',
      '문화와 전통 (Culture & Traditions)'
    ],
    'B2': [
      '정치와 사회 (Politics & Society)',
      '예술과 문학 (Arts & Literature)',
      '환경과 지속성 (Environment & Sustainability)',
      '기술과 혁신 (Technology & Innovation)',
      '인간관계와 윤리 (Relationships & Ethics)'
    ]
  },

  // Sample lesson structure for A1-01
  sampleLessonA1_01: {
    id: 'kor-a1-1-1',
    title: 'Lesson 1: 기본 인사',
    duration: '10:00',
    sections: [
      { type: 'heading', level: 2, content: '안녕하세요' },
      { type: 'text', content: 'Learn the most essential Korean greetings used in everyday interactions.' },
      { type: 'glossary', terms: [
        { term: '안녕하세요', definition: 'Hello (formal)', usage: 'Standard greeting in polite settings' },
        { term: '안녕', definition: 'Hi (casual)', usage: 'Used among friends and close people' },
        { term: '안녕히 가세요', definition: 'Goodbye (to person leaving)', usage: 'Said when someone departs' },
        { term: '감사합니다', definition: 'Thank you (formal)', usage: 'Polite expression of gratitude' },
        { term: '고마워요', definition: 'Thank you (casual)', usage: 'Informal gratitude expression' }
      ]},
      { type: 'highlight-box', title: 'Example Greetings', items: [
        '안녕하세요. 저는 [이름]입니다.',
        '만나서 반갑습니다.',
        '안녕히 가세요!'
      ]},
      { type: 'practice', question: 'Practice Greetings', answer: 'Create 3-5 greeting exchanges' }
    ]
  }
};

// Statistics
console.log(`Korean Curriculum: ${koreanCurriculumMeta.totalLessons} lectures`);
console.log(`Structure: ${koreanCurriculumMeta.levels.join(', ')} = 4 levels × 30 lessons`);
