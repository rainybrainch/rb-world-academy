// ============================================================
// INTEGRATION TEMPLATE: How to Merge Expanded Chinese Curriculum
// into existing courses.ts
// ============================================================

// Step 1: Add import at top of courses.ts
import { ChineseCurriculumExpanded, ChineseLectureTopicMatrix } from './data/chinese-curriculum-complete';

// Step 2: Replace existing Chinese categories with expanded versions

// ==================== A1 - EXPANDED ====================
const zhoa1_expanded: Category = {
  id: 'cat-zho-a1-expanded',
  title: 'Chinese - A1 (Expanded)',
  description: '30 comprehensive beginner lessons with cultural depth',
  level: 'A1',
  topicCategoryId: 'topic-zho',
  courses: [
    {
      id: 'zho-a1-1',
      title: 'Chapter 1: Foundations',
      lessons: [
        {
          id: 'l1',
          title: 'Lesson 1: Basic Greetings & Introduction',
          duration: '8:00',
          videoId: '',
          isPremium: false,
          checkItems: ['Greetings', 'Introduction', 'Politeness'],
          sections: [
            {
              type: 'heading',
              level: 2,
              content: 'Basic Greetings (基本问候 / 基本問候)'
            },
            {
              type: 'text',
              content: '在中文里，问候是日常交流的基础。"你好"是最常见的问候语。根据时间和场合选择合适的问候方式：早上说"早上好"，下午说"下午好"，晚上说"晚上好"。学习基本问候能帮助你建立友好的沟通。了解不同场景的问候方式显示了对中文文化的尊重。'
            },
            {
              type: 'glossary',
              terms: [
                {
                  term: '你好 (nǐ hǎo)',
                  definition: 'Hello / Hi',
                  traditional: '你好',
                  simplified: '你好',
                  pinyin: 'nǐ hǎo',
                  synonym: ['各位好 (gè wèi hǎo)', '大家好 (dà jiā hǎo)'],
                  antonym: [],
                  example: '你好！很高兴认识你。(Hello! Nice to meet you.)',
                  note: 'Most common general greeting, used anytime'
                },
                {
                  term: '早上好 (zǎo shang hǎo)',
                  definition: 'Good morning',
                  traditional: '早上好',
                  simplified: '早上好',
                  pinyin: 'zǎo shang hǎo',
                  synonym: ['早安 (zǎo ān)', '早 (zǎo)'],
                  antonym: [],
                  example: '早上好！今天天气很好。(Good morning! The weather is nice today.)',
                  note: 'Used from dawn until around noon'
                },
                {
                  term: '下午好 (xià wǔ hǎo)',
                  definition: 'Good afternoon',
                  traditional: '下午好',
                  simplified: '下午好',
                  pinyin: 'xià wǔ hǎo',
                  synonym: ['午安 (wǔ ān)'],
                  antonym: [],
                  example: '下午好！你忙吗？(Good afternoon! Are you busy?)',
                  note: 'Used from noon until sunset'
                },
                {
                  term: '晚上好 (wǎn shang hǎo)',
                  definition: 'Good evening',
                  traditional: '晚上好',
                  simplified: '晚上好',
                  pinyin: 'wǎn shang hǎo',
                  synonym: ['晚安 (wǎn ān)'],
                  antonym: [],
                  example: '晚上好！我们待会儿见。(Good evening! See you in a while.)',
                  note: 'Used from sunset until bedtime'
                },
                {
                  term: '再见 (zài jiàn)',
                  definition: 'Goodbye / See you again',
                  traditional: '再見',
                  simplified: '再见',
                  pinyin: 'zài jiàn',
                  synonym: ['拜拜 (bái bai)', '回见 (huí jiàn)'],
                  antonym: [],
                  example: '再见！明天见。(Goodbye! See you tomorrow.)',
                  note: 'Implies future meeting'
                },
                {
                  term: '谢谢 (xiè xie)',
                  definition: 'Thank you',
                  traditional: '謝謝',
                  simplified: '谢谢',
                  pinyin: 'xiè xie',
                  synonym: ['感谢 (gǎn xiè)', '多谢 (duō xiè)'],
                  antonym: [],
                  example: '谢谢你的帮助。(Thank you for your help.)',
                  note: 'Reduplicated pronunciation'
                },
                {
                  term: '对不起 (duì bu qǐ)',
                  definition: 'Sorry / Excuse me',
                  traditional: '對不起',
                  simplified: '对不起',
                  pinyin: 'duì bu qǐ',
                  synonym: ['抱歉 (bào qiàn)', '不好意思 (bù hǎo yì si)'],
                  antonym: [],
                  example: '对不起，我迟到了。(Sorry, I\'m late.)',
                  note: 'Formal apology'
                },
                {
                  term: '没关系 (méi guān xi)',
                  definition: 'Never mind / It doesn\'t matter',
                  traditional: '沒關係',
                  simplified: '没关系',
                  pinyin: 'méi guān xi',
                  synonym: ['不要紧 (bú yào jǐn)', '没事儿 (méi shì er)'],
                  antonym: [],
                  example: '没关系，没事儿。(Never mind, it\'s okay.)',
                  note: 'Reassuring response'
                },
                {
                  term: '不客气 (bú kè qi)',
                  definition: 'You\'re welcome',
                  traditional: '不客氣',
                  simplified: '不客气',
                  pinyin: 'bú kè qi',
                  synonym: ['不谢 (bú xiè)', '应该的 (yīng gāi de)'],
                  antonym: [],
                  example: '谢谢。不客气。(Thank you. You\'re welcome.)',
                  note: 'Response to thanks'
                },
                {
                  term: '久仰大名 (jiǔ yǎng dà míng)',
                  definition: 'I\'ve heard much about you (formal idiom)',
                  traditional: '久仰大名',
                  simplified: '久仰大名',
                  pinyin: 'jiǔ yǎng dà míng',
                  synonym: [],
                  antonym: [],
                  example: '久仰大名，今天终于见面了。(I\'ve heard much about you; finally we meet.)',
                  note: 'Formal greeting showing respect'
                },
                {
                  term: '请问 (qǐng wèn)',
                  definition: 'May I ask / Excuse me',
                  traditional: '請問',
                  simplified: '请问',
                  pinyin: 'qǐng wèn',
                  synonym: ['请 (qǐng)', '问 (wèn)'],
                  antonym: [],
                  example: '请问，洗手间在哪里？(Excuse me, where is the restroom?)',
                  note: 'Polite way to ask questions'
                }
              ]
            },
            {
              type: 'highlight-box',
              title: 'Conversation Example (对话示例)',
              items: [
                'A: 你好！我叫王明。(Hello! My name is Wang Ming.)',
                'B: 你好！很高兴认识你。我是李红。(Hello! Nice to meet you. I\'m Li Hong.)',
                'A: 谢谢你。今天天气很好。(Thank you. The weather is nice today.)',
                'B: 是的。我们明天见？(Yes. See you tomorrow?)',
                'A: 好的。再见！(Okay. Goodbye!)',
                'B: 再见！(Goodbye!)'
              ]
            },
            {
              type: 'practice',
              question: 'Create Greeting Dialogues',
              auxiliaryPrompt: 'Practice greeting scenarios at different times',
              answer: 'Write 3 complete dialogues (4-5 lines each): 1) Morning greeting between friends, 2) Formal afternoon introduction with a teacher, 3) Evening goodbye after a meeting. Include time-specific greetings.',
              difficulty: 'basic'
            }
          ]
        },
        // L2, L3, L4, L5, L6 follow same pattern...
        // Reference: chinese-curriculum-expanded.ts for complete structure
      ]
    },
    {
      id: 'zho-a1-2',
      title: 'Chapter 2: Development',
      lessons: [
        // Lessons 7-12 content here
        // Lesson 7: Question Words & Question Formation
        // Lesson 8: Food & Dining Culture
        // Lesson 9: Shopping & Money Transactions
        // Lesson 10: Directions & Location Words
        // Lesson 11: Weather & Seasons
        // Lesson 12: Body Parts & Health
      ]
    },
    {
      id: 'zho-a1-3',
      title: 'Chapter 3: Application',
      lessons: [
        // Lessons 13-18 content here
      ]
    },
    {
      id: 'zho-a1-4',
      title: 'Chapter 4: Mastery',
      lessons: [
        // Lessons 19-30 content here
      ]
    }
  ]
};

// ==================== A2 - EXPANDED ====================
const zhoa2_expanded: Category = {
  id: 'cat-zho-a2-expanded',
  title: 'Chinese - A2 (Expanded)',
  description: '30 pre-intermediate lessons with conversation scenarios',
  level: 'A2',
  topicCategoryId: 'topic-zho',
  courses: [
    {
      id: 'zho-a2-1',
      title: 'Chapter 1: Foundations',
      lessons: [
        // Lessons 31-36 (Past tense, Future, Comparisons, etc.)
      ]
    },
    {
      id: 'zho-a2-2',
      title: 'Chapter 2: Development',
      lessons: [
        // Lessons 37-42 (Restaurant, Hotel, Medical, Phone, etc.)
      ]
    },
    {
      id: 'zho-a2-3',
      title: 'Chapter 3: Application',
      lessons: [
        // Lessons 43-48
      ]
    },
    {
      id: 'zho-a2-4',
      title: 'Chapter 4: Mastery',
      lessons: [
        // Lessons 49-60 (Holidays, Measure words, News reading, etc.)
      ]
    }
  ]
};

// ==================== B1 - EXPANDED ====================
const zhob1_expanded: Category = {
  id: 'cat-zho-b1-expanded',
  title: 'Chinese - B1 (Expanded)',
  description: '30 intermediate lessons with specialized vocabulary',
  level: 'B1',
  topicCategoryId: 'topic-zho',
  courses: [
    {
      id: 'zho-b1-1',
      title: 'Chapter 1: Foundations',
      lessons: [
        // Lessons 61-66 (Aspect markers, Potential complements, etc.)
      ]
    },
    {
      id: 'zho-b1-2',
      title: 'Chapter 2: Development',
      lessons: [
        // Lessons 67-72 (Business, Literature, Regional dialects)
      ]
    },
    {
      id: 'zho-b1-3',
      title: 'Chapter 3: Application',
      lessons: [
        // Lessons 73-78 (Medical, Tech, Environment, Idioms, Classical Chinese)
      ]
    },
    {
      id: 'zho-b1-4',
      title: 'Chapter 4: Mastery',
      lessons: [
        // Lessons 79-90 (Debate, History, Translation, Internet slang, Proverbs)
      ]
    }
  ]
};

// ==================== B2 - EXPANDED ====================
const zhob2_expanded: Category = {
  id: 'cat-zho-b2-expanded',
  title: 'Chinese - B2 (Expanded)',
  description: '30 upper-intermediate lessons achieving near-native fluency',
  level: 'B2',
  topicCategoryId: 'topic-zho',
  courses: [
    {
      id: 'zho-b2-1',
      title: 'Chapter 1: Foundations',
      lessons: [
        // Lectures 91-96 (Classical Chinese, Poetry, Fiction, Philosophy)
      ]
    },
    {
      id: 'zho-b2-2',
      title: 'Chapter 2: Development',
      lessons: [
        // Lectures 97-102 (Diplomacy, Legal, Academic, Medical, Business, Minorities)
      ]
    },
    {
      id: 'zho-b2-3',
      title: 'Chapter 3: Application',
      lessons: [
        // Lectures 103-108 (Cinema, Opera, Cuisine, Fashion, Art, Music)
      ]
    },
    {
      id: 'zho-b2-4',
      title: 'Chapter 4: Mastery',
      lessons: [
        // Lectures 109-120 (Idiom mastery, Slang, Humor, Translation, Dialects, Calligraphy)
      ]
    }
  ]
};

// Step 3: Update export array
export const allCategories = [
  // ... existing categories
  zhoa1_expanded,  // Replace old zhoa1
  zhoa2_expanded,  // Replace old zhoa2
  zhob1_expanded,  // (If exists) Replace or add
  zhob2_expanded,  // (If exists) Replace or add
  // ... other language categories
];

// ============================================================
// HELPER FUNCTIONS FOR COURSE BUILDERS
// ============================================================

// Get vocabulary for a specific lecture
export function getChineseLectureVocabulary(lectureNumber: number) {
  const lecture = ChineseLectureTopicMatrix.find(l => l.lecture === lectureNumber);
  if (!lecture) return null;

  // Reference the detailed vocabulary from expanded files
  return {
    lectureInfo: lecture,
    estimatedVocabulary: 8-12,
    focusArea: lecture.focusArea
  };
}

// Get all lectures for a specific level
export function getChineseCoursesForLevel(level: 'A1' | 'A2' | 'B1' | 'B2') {
  return ChineseLectureTopicMatrix.filter(l => l.level === level);
}

// Get curriculum roadmap
export function getChineseCurriculumRoadmap() {
  return {
    totalLectures: 120,
    levels: {
      A1: { lectures: 30, focus: 'Basic communication and everyday scenarios' },
      A2: { lectures: 30, focus: 'Past/future tenses, practical conversations' },
      B1: { lectures: 30, focus: 'Professional Chinese, idioms, literature' },
      B2: { lectures: 30, focus: 'Near-native fluency, specialized fields' }
    },
    totalVocabulary: '1,360+ core items',
    specialFeatures: [
      'Traditional & Simplified characters',
      'Tone marks for all vocabulary',
      '3-tier practice system (Basic/Intermediate/Advanced)',
      '成语 (Idiom) progression across all levels',
      'Cultural context integration',
      'Modern language updates (internet, social media)'
    ]
  };
}

// ============================================================
// NOTES FOR IMPLEMENTATION
// ============================================================

/*
1. VOCABULARY STRUCTURE:
   Each vocabulary term includes:
   - term (with pinyin and tone marks)
   - definition (English)
   - traditional character variant
   - simplified character variant
   - pinyin
   - synonym/antonyms
   - usage example with translation
   - cultural notes

2. PRACTICE STRUCTURE:
   - Basic: Simple recognition, dialogue completion
   - Intermediate: Creative application, paragraph writing
   - Advanced: Nuanced expression, cultural analysis

3. MEASURE WORDS (量词):
   A1 introduces basic measure words (个, 只, 本, 张)
   A2 expands to 20+ measure words
   B1 covers specialized measure words by context
   B2 includes archaic and literary measure words

4. IDIOM PROGRESSION:
   - A1 Lesson 29: 10 basic idioms (久仰大名, etc.)
   - A2 Lesson 58: 歇后语 (puns and wordplay)
   - B1 Lesson 77: 200+ 成语 four-character idioms
   - B1 Lesson 89: 谚语 traditional proverbs
   - B2 Lecture 109: Advanced idiom usage in literature

5. CHARACTER LEARNING:
   - A1: 300-400 characters (focus on simplified)
   - A2: Add 200+ more (total 500-600)
   - B1: Add 300+ more + classical character variants
   - B2: Rare characters, etymological analysis

6. ASSESSMENT FRAMEWORK:
   - A1 Test (Lecture 30): Vocabulary, basic dialogue, listening
   - A2 Test (Lecture 60): Writing, storytelling, reading news
   - B1 Test (Lecture 90): Formal writing, idiom usage, debate
   - B2 Test (Lecture 120): Comprehensive proficiency evaluation

7. AUDIO/VIDEO RECOMMENDATIONS:
   - Per lecture: Word pronunciation, sentence audio, dialogue
   - Per chapter: Cultural video, native speaker interviews
   - Per level: Listening comprehension tests, speaking practice

8. INTEGRATION CHECKLIST:
   ☐ Import ChineseCurriculumExpanded & ChineseLectureTopicMatrix
   ☐ Create Category objects for all 4 levels
   ☐ Map lessons to courses structure
   ☐ Add to export array
   ☐ Update TYPE definitions if needed (for cultural notes, etc.)
   ☐ Link video IDs (if available)
   ☐ Test all glossary terms render correctly
   ☐ Verify tone mark display
   ☐ Check character encoding for Traditional characters
   ☐ Test practice questions UI
*/

// ============================================================
// TYPE DEFINITIONS (if needed to extend)
// ============================================================

interface VocabularyTermExpanded {
  term: string;                    // 你好 (nǐ hǎo)
  definition: string;              // Hello
  traditional: string;             // 你好
  simplified: string;              // 你好
  pinyin: string;                  // nǐ hǎo
  synonym?: string[];              // Alternative expressions
  antonym?: string[];              // Opposite expressions
  example: string;                 // Example sentence with translation
  note?: string;                   // Additional note
  cultural?: string;               // Cultural context
  toneMarks?: string;              // Detailed tone information
}

interface LessonSectionExpanded {
  type: 'heading' | 'text' | 'glossary' | 'highlight-box' | 'practice';
  level?: number;                  // For heading levels (1-6)
  content?: string;                // Text content
  title?: string;                  // For highlight-box and practice
  items?: string[];                // For highlight-box
  terms?: VocabularyTermExpanded[]; // For glossary
  question?: string;               // For practice
  auxiliaryPrompt?: string;        // For practice
  answer?: string;                 // For practice
  difficulty?: 'basic' | 'intermediate' | 'advanced';
}

// ============================================================
export { zhoa1_expanded, zhoa2_expanded, zhob1_expanded, zhob2_expanded };
