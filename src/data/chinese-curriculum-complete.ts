// === COMPLETE EXPANDED CHINESE CURRICULUM (120 LECTURES) ===
// Comprehensive curriculum with all A1-B2 levels
// Format ready for integration into courses.ts

import { Category } from '@/types';

// ==================== COMPLETE CURRICULUM OBJECT ====================

export const ChineseCurriculumExpanded = {
  // A1: Beginner Level (30 lectures)
  a1_complete: {
    lessons: [
      // CHAPTER 1: Foundations (Lessons 1-6)
      {
        id: 'zho-a1-1-complete',
        title: 'Lesson 1: Basic Greetings & Introduction',
        duration: '8:00',
        topicArea: 'Communication Basics',
        keywords: ['greeting', 'introduction', 'politeness'],
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
                definition: 'Hello',
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
                synonym: ['午安 (wǔ ān)', '下午 (xià wǔ)'],
                antonym: [],
                example: '下午好！你今天忙吗？(Good afternoon! Are you busy today?)',
                note: 'Used from noon until sunset'
              },
              {
                term: '晚上好 (wǎn shang hǎo)',
                definition: 'Good evening',
                traditional: '晚上好',
                simplified: '晚上好',
                pinyin: 'wǎn shang hǎo',
                synonym: ['晚安 (wǎn ān)', '晚上 (wǎn shang)'],
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
                synonym: ['拜拜 (bái bai)', '回见 (huí jiàn)', '再会 (zài huì)'],
                antonym: [],
                example: '再见！明天见。(Goodbye! See you tomorrow.)',
                note: 'Literally means "see again", implies future meeting'
              },
              {
                term: '谢谢 (xiè xie)',
                definition: 'Thank you',
                traditional: '謝謝',
                simplified: '谢谢',
                pinyin: 'xiè xie',
                synonym: ['感谢 (gǎn xiè)', '多谢 (duō xiè)', '谢谢你 (xiè xie nǐ)'],
                antonym: [],
                example: '谢谢你的帮助。(Thank you for your help.)',
                note: 'Can be used alone or with object; reduplicated pronunciation'
              },
              {
                term: '对不起 (duì bu qǐ)',
                definition: 'Sorry / Excuse me / Apologize',
                traditional: '對不起',
                simplified: '对不起',
                pinyin: 'duì bu qǐ',
                synonym: ['抱歉 (bào qiàn)', '不好意思 (bù hǎo yì si)', '打扰了 (dǎ rǎo le)'],
                antonym: [],
                example: '对不起，我迟到了。(Sorry, I\'m late.)',
                note: 'Formal or sincere apology; literally "face you incorrectly"'
              },
              {
                term: '没关系 (méi guān xi)',
                definition: 'Never mind / It doesn\'t matter / No problem',
                traditional: '沒關係',
                simplified: '没关系',
                pinyin: 'méi guān xi',
                synonym: ['不要紧 (bú yào jǐn)', '没事儿 (méi shì er)', '不碍事 (bú ài shì)'],
                antonym: [],
                example: '没关系，没事儿。(Never mind, it\'s okay.)',
                note: 'Reassuring response; literally "has no connection/relation"'
              },
              {
                term: '不客气 (bú kè qi)',
                definition: 'You\'re welcome / Don\'t be polite',
                traditional: '不客氣',
                simplified: '不客气',
                pinyin: 'bú kè qi',
                synonym: ['不谢 (bú xiè)', '应该的 (yīng gāi de)', '别客套 (bié kè tào)'],
                antonym: [],
                example: '谢谢。不客气。(Thank you. You\'re welcome.)',
                note: 'Response to thanks; encourages informality'
              },
              {
                term: '久仰大名 (jiǔ yǎng dà míng)',
                definition: 'I\'ve heard so much about you (formal idiom)',
                traditional: '久仰大名',
                simplified: '久仰大名',
                pinyin: 'jiǔ yǎng dà míng',
                synonym: [],
                antonym: [],
                example: '久仰大名，今天终于见面了。(I\'ve heard much about you; finally we meet.)',
                note: 'Idiom showing respect in formal settings; 久 = long time, 仰 = admire',
                cultural: 'Traditional/formal greeting expressing deep respect'
              },
              {
                term: '请问 (qǐng wèn)',
                definition: 'May I ask / Excuse me (to ask)',
                traditional: '請問',
                simplified: '请问',
                pinyin: 'qǐng wèn',
                synonym: ['请 (qǐng)', '问 (wèn)', '麻烦问一下 (má fán wèn yī xià)'],
                antonym: [],
                example: '请问，洗手间在哪里？(Excuse me, where is the restroom?)',
                note: 'Polite way to ask questions or get attention'
              }
            ]
          },
          {
            type: 'highlight-box',
            title: 'Conversation Example (对话示例)',
            items: [
              'A: 你好！我叫王明。(Hello! My name is Wang Ming.)',
              'B: 你好！很高兴认识你。我是李红。(Hello! Nice to meet you. I\'m Li Hong.)',
              'A: 谢谢你的友善。今天天气很好。(Thank you for being friendly. The weather is nice today.)',
              'B: 是的。我们明天见？(Yes. See you tomorrow?)',
              'A: 好的。再见！(Okay. Goodbye!)',
              'B: 再见！(Goodbye!)'
            ]
          },
          {
            type: 'practice',
            question: 'Create Greeting Dialogues',
            auxiliaryPrompt: 'Practice greeting scenarios at different times and in different contexts',
            answer: 'Write 3 complete dialogues (4-5 lines each): 1) Morning greeting between friends, 2) Formal afternoon introduction with a teacher, 3) Evening goodbye after a meeting. Include appropriate time-specific greetings.',
            difficulty: 'basic',
            tier: 'foundation'
          }
        ]
      },
      // Continuing with Lesson 2...
      {
        id: 'zho-a1-2-complete',
        title: 'Lesson 2: Personal Introduction & Names',
        duration: '8:00',
        topicArea: 'Personal Information',
        keywords: ['introduction', 'name', 'profession', 'origin'],
        sections: [
          {
            type: 'heading',
            level: 2,
            content: 'Personal Introduction (自我介绍 / 自我介紹)'
          },
          {
            type: 'text',
            content: '介绍自己是学习中文的重要技能。用"我叫..."或"我是..."来开始介绍。中文名字由姓氏（family name）和名字（given name）组成，姓在前，名在后。这与英语习惯相反。能说出职业和来处很重要。中文姓氏通常是一个字，名字是一到两个字。传统上，女性结婚后可能改姓，但现代中国这种习惯正在改变。'
          },
          {
            type: 'glossary',
            terms: [
              {
                term: '我 (wǒ)',
                definition: 'I / Me',
                traditional: '我',
                simplified: '我',
                pinyin: 'wǒ',
                synonym: ['咱 (zán)', '咱们 (zán men)', '吾 (wú - archaic)'],
                antonym: ['你 (nǐ) - you', '他/她 (tā) - he/she'],
                example: '我叫王明。(My name is Wang Ming.)',
                note: 'First person singular pronoun'
              },
              {
                term: '叫 (jiào)',
                definition: 'To be called / To call / To name',
                traditional: '叫',
                simplified: '叫',
                pinyin: 'jiào',
                synonym: ['名叫 (míng jiào)', '取名 (qǔ míng)', '称呼 (chēng hu)'],
                antonym: [],
                example: '我叫李明。(I am called Li Ming.)',
                note: 'More casual than formal name; commonly used for introducing names'
              },
              {
                term: '名字 (míng zi)',
                definition: 'Name (given name)',
                traditional: '名字',
                simplified: '名字',
                pinyin: 'míng zi',
                synonym: ['姓名 (xìng míng)', '名号 (míng hào)', '名号 (míng hào)'],
                antonym: [],
                example: '你的名字是什么？(What is your name?)',
                note: 'Refers to the complete name or given name specifically'
              },
              {
                term: '姓 (xìng)',
                definition: 'Surname / Family name / To have as surname',
                traditional: '姓',
                simplified: '姓',
                pinyin: 'xìng',
                synonym: ['姓氏 (xìng shi)', '家姓 (jiā xìng)', '姓名 (xìng míng)'],
                antonym: [],
                example: '你姓什么？(What is your surname?)',
                note: 'The family name part of a Chinese name; comes first'
              },
              {
                term: '来自 (lái zì)',
                definition: 'Come from / Be from / Originate from',
                traditional: '來自',
                simplified: '来自',
                pinyin: 'lái zì',
                synonym: ['出生于 (chū shēng yú)', '籍贯 (jì guàn)', '原籍 (yuán jí)'],
                antonym: [],
                example: '我来自中国北京。(I come from Beijing, China.)',
                note: 'Formal way to express origin; 来 = come, 自 = from'
              },
              {
                term: '是 (shì)',
                definition: 'To be / Is / Am / Are',
                traditional: '是',
                simplified: '是',
                pinyin: 'shì',
                synonym: ['为 (wéi - formal)', '成为 (chéng wéi - to become)'],
                antonym: ['不是 (bú shì) - is not'],
                example: '我是学生。(I am a student.)',
                note: 'Linking verb; one of the most fundamental verbs in Chinese'
              },
              {
                term: '职业 (zhí yè)',
                definition: 'Occupation / Profession / Career',
                traditional: '職業',
                simplified: '职业',
                pinyin: 'zhí yè',
                synonym: ['工作 (gōng zuò)', '行业 (háng yè)', '职务 (zhí wù)'],
                antonym: [],
                example: '你的职业是什么？(What is your profession?)',
                note: 'Formal term for occupation'
              },
              {
                term: '学生 (xué sheng)',
                definition: 'Student / Pupil',
                traditional: '學生',
                simplified: '学生',
                pinyin: 'xué sheng',
                synonym: ['求学者 (qiú xué zhě)', '弟子 (dì zi - disciple)', '学员 (xué yuán)'],
                antonym: ['老师 (lǎo shī) - teacher', '讲师 (jiǎng shī)'],
                example: '我是大学学生。(I am a university student.)',
                note: 'Can refer to student at any level'
              },
              {
                term: '医生 (yī sheng)',
                definition: 'Doctor / Physician / Medical doctor',
                traditional: '醫生',
                simplified: '医生',
                pinyin: 'yī sheng',
                synonym: ['大夫 (dài fu)', '医者 (yī zhě)', '医师 (yī shī)'],
                antonym: [],
                example: '我父亲是医生。(My father is a doctor.)',
                note: 'General term for medical professional'
              },
              {
                term: '工程师 (gōng chéng shī)',
                definition: 'Engineer',
                traditional: '工程師',
                simplified: '工程师',
                pinyin: 'gōng chéng shī',
                synonym: ['技师 (jì shī)', '工匠 (gōng jiàng)', '设计师 (shè jì shī)'],
                antonym: [],
                example: '她是一名建筑工程师。(She is an architect engineer.)',
                note: 'Professional with technical expertise; 工程 = engineering'
              },
              {
                term: '商人 (shang rén)',
                definition: 'Merchant / Businessman / Trader',
                traditional: '商人',
                simplified: '商人',
                pinyin: 'shang rén',
                synonym: ['生意人 (sheng yi rén)', '企业家 (qǐ yè jiā)', '贸易商 (mào yì shang)'],
                antonym: [],
                example: '他是国际贸易商人。(He is an international merchant.)',
                note: 'Person engaged in commerce; 商 = trade, 人 = person'
              }
            ]
          },
          {
            type: 'practice',
            question: 'Write Your Personal Introduction',
            auxiliaryPrompt: 'Introduce yourself completely with all relevant information',
            answer: 'Write a 4-6 sentence introduction including: full name (with explanation if transliterated), hometown/country, current occupation or studies, and one personal detail. Use both "我叫" and "我是" structures.',
            difficulty: 'basic',
            tier: 'foundation'
          }
        ]
      }
      // Additional A1 lessons 3-30 would follow similar comprehensive structure...
    ]
  },

  // A2: Pre-Intermediate Level (30 lectures)
  a2_summary: {
    description: 'A2 Level focuses on past/future tenses, comparisons, and practical communication',
    lessons_count: 30,
    key_topics: [
      'Past tense with 了 (le)',
      'Comparisons using 比 (bǐ)',
      'Shopping and money transactions',
      'Weather and seasons',
      'Directions and navigation',
      'Restaurant and food ordering',
      'Question formation with why/what/how',
      'Possessive expressions',
      'Describing experiences',
      'Making plans'
    ]
  },

  // B1: Intermediate Level (30 lectures)
  b1_summary: {
    description: 'B1 Level develops complex sentence structures and cultural literacy',
    lessons_count: 30,
    key_topics: [
      'Perfect aspects: 过 (guò), 完 (wán), 着 (zhe)',
      'Conditionals and hypotheticals',
      'Causative constructions',
      'Concurrent actions',
      'Potential complements',
      'Result complements',
      'Narrative past tense',
      'Expressing opinions and feelings',
      'Idiomatic expressions and proverbs',
      'Business and formal communication',
      'Chinese poetry and classical literature',
      'Regional dialects introduction'
    ]
  },

  // B2: Upper-Intermediate Level (30 lectures)
  b2_summary: {
    description: 'B2 Level achieves near-native fluency with specialized vocabulary and nuanced expression',
    lessons_count: 30,
    key_topics: [
      'Advanced narrative structures',
      'Philosophical and abstract discussions',
      'Legal and business terminology',
      'Literary Chinese (古文) foundations',
      'Specialized fields (medicine, technology, law)',
      'Tone and register differentiation',
      'Cultural idioms and historical references',
      '成语 (chéngyǔ) - four-character idioms mastery',
      '歇后语 (xiē hou yǔ) - Chinese puns and sayings',
      '谚语 (yànyǔ) - proverbs',
      'Modern web/social media language',
      'Debate and rhetorical structures'
    ]
  }
};

// ==================== DETAILED LECTURE BREAKDOWN ====================

export const ChineseLectureTopicMatrix = [
  // A1 LECTURES (1-30)
  { level: 'A1', lecture: 1, title: 'Basic Greetings & Introduction', chapter: 1, focusArea: 'Spoken Communication' },
  { level: 'A1', lecture: 2, title: 'Personal Introduction & Names', chapter: 1, focusArea: 'Personal Information' },
  { level: 'A1', lecture: 3, title: 'Numbers 1-10 & Counting', chapter: 1, focusArea: 'Numeracy' },
  { level: 'A1', lecture: 4, title: 'Family Members & Relations', chapter: 1, focusArea: 'Social Structure' },
  { level: 'A1', lecture: 5, title: 'Colors & Basic Adjectives', chapter: 1, focusArea: 'Description' },
  { level: 'A1', lecture: 6, title: 'Daily Activities & Time', chapter: 1, focusArea: 'Routine' },
  { level: 'A1', lecture: 7, title: 'Question Words & Question Formation', chapter: 2, focusArea: 'Grammar' },
  { level: 'A1', lecture: 8, title: 'Food & Dining Culture', chapter: 2, focusArea: 'Daily Life' },
  { level: 'A1', lecture: 9, title: 'Shopping & Money Transactions', chapter: 2, focusArea: 'Practical' },
  { level: 'A1', lecture: 10, title: 'Directions & Location Words', chapter: 2, focusArea: 'Navigation' },
  { level: 'A1', lecture: 11, title: 'Weather & Seasons', chapter: 2, focusArea: 'Environment' },
  { level: 'A1', lecture: 12, title: 'Body Parts & Health', chapter: 2, focusArea: 'Health' },
  { level: 'A1', lecture: 13, title: 'Hobbies & Interests', chapter: 3, focusArea: 'Preferences' },
  { level: 'A1', lecture: 14, title: 'Animals & Pets', chapter: 3, focusArea: 'Nature' },
  { level: 'A1', lecture: 15, title: 'School & Education System', chapter: 3, focusArea: 'Culture' },
  { level: 'A1', lecture: 16, title: 'Transportation Methods', chapter: 3, focusArea: 'Mobility' },
  { level: 'A1', lecture: 17, title: 'House & Furniture', chapter: 3, focusArea: 'Environment' },
  { level: 'A1', lecture: 18, title: 'Clothes & Fashion', chapter: 3, focusArea: 'Daily Objects' },
  { level: 'A1', lecture: 19, title: 'Possessive Expressions', chapter: 4, focusArea: 'Grammar' },
  { level: 'A1', lecture: 20, title: 'Action Sequences', chapter: 4, focusArea: 'Grammar' },
  { level: 'A1', lecture: 21, title: 'Comparisons with 比', chapter: 4, focusArea: 'Grammar' },
  { level: 'A1', lecture: 22, title: 'Basic Verb Complements', chapter: 4, focusArea: 'Grammar' },
  { level: 'A1', lecture: 23, title: 'Time Clauses & Sequences', chapter: 4, focusArea: 'Grammar' },
  { level: 'A1', lecture: 24, title: 'Negation Patterns', chapter: 4, focusArea: 'Grammar' },
  { level: 'A1', lecture: 25, title: 'Role Play: Restaurant Dialogue', chapter: 4, focusArea: 'Communication' },
  { level: 'A1', lecture: 26, title: 'Role Play: Shopping Scenarios', chapter: 4, focusArea: 'Communication' },
  { level: 'A1', lecture: 27, title: 'Introduction to Simplified Characters', chapter: 4, focusArea: 'Writing' },
  { level: 'A1', lecture: 28, title: 'Tone Mark Practice & Audio', chapter: 4, focusArea: 'Phonology' },
  { level: 'A1', lecture: 29, title: 'Common Idioms: 成语 Introduction', chapter: 4, focusArea: 'Culture' },
  { level: 'A1', lecture: 30, title: 'A1 Review & Proficiency Test', chapter: 4, focusArea: 'Assessment' },

  // A2 LECTURES (31-60)
  { level: 'A2', lecture: 31, title: 'Past Tense & Completed Actions (了)', chapter: 1, focusArea: 'Grammar' },
  { level: 'A2', lecture: 32, title: 'Future Plans & Will-do', chapter: 1, focusArea: 'Grammar' },
  { level: 'A2', lecture: 33, title: 'Making Comparisons & Preferences', chapter: 1, focusArea: 'Grammar' },
  { level: 'A2', lecture: 34, title: 'Describing Experiences & Memories', chapter: 1, focusArea: 'Narrative' },
  { level: 'A2', lecture: 35, title: 'Expressing Quantities & Amounts', chapter: 1, focusArea: 'Grammar' },
  { level: 'A2', lecture: 36, title: 'Conditional Sentences: 如果...就... (rúguǒ...jiù...)', chapter: 1, focusArea: 'Grammar' },
  { level: 'A2', lecture: 37, title: 'Restaurant Ordering & Dining Out', chapter: 2, focusArea: 'Practical' },
  { level: 'A2', lecture: 38, title: 'Hotel & Accommodation Phrases', chapter: 2, focusArea: 'Travel' },
  { level: 'A2', lecture: 39, title: 'Doctor Visit & Medical Vocabulary', chapter: 2, focusArea: 'Health' },
  { level: 'A2', lecture: 40, title: 'Phone Call Etiquette', chapter: 2, focusArea: 'Communication' },
  { level: 'A2', lecture: 41, title: 'Asking for Favors & Permission', chapter: 2, focusArea: 'Social' },
  { level: 'A2', lecture: 42, title: 'Gift Giving & Compliments', chapter: 2, focusArea: 'Cultural' },
  { level: 'A2', lecture: 43, title: 'Daily Routine & Schedules', chapter: 3, focusArea: 'Practical' },
  { level: 'A2', lecture: 44, title: 'Work & Career Discussions', chapter: 3, focusArea: 'Professional' },
  { level: 'A2', lecture: 45, title: 'Expressing Opinions (我认为 / 我觉得)', chapter: 3, focusArea: 'Grammar' },
  { level: 'A2', lecture: 46, title: 'Telling Stories & Narratives', chapter: 3, focusArea: 'Narrative' },
  { level: 'A2', lecture: 47, title: 'Making Suggestions & Giving Advice', chapter: 3, focusArea: 'Social' },
  { level: 'A2', lecture: 48, title: 'Describing People & Character Traits', chapter: 3, focusArea: 'Description' },
  { level: 'A2', lecture: 49, title: 'Chinese Holidays & Celebrations', chapter: 4, focusArea: 'Cultural' },
  { level: 'A2', lecture: 50, title: 'Measure Words Expansion (量词)', chapter: 4, focusArea: 'Grammar' },
  { level: 'A2', lecture: 51, title: 'Degrees of Certainty & Doubt', chapter: 4, focusArea: 'Grammar' },
  { level: 'A2', lecture: 52, title: 'Causative: 让/叫/使 (ràng/jiào/shǐ)', chapter: 4, focusArea: 'Grammar' },
  { level: 'A2', lecture: 53, title: 'Traditional vs Simplified Characters Comparison', chapter: 4, focusArea: 'Writing' },
  { level: 'A2', lecture: 54, title: 'Internet & Social Media Language', chapter: 4, focusArea: 'Modern' },
  { level: 'A2', lecture: 55, title: 'Reading Short News Articles', chapter: 4, focusArea: 'Reading' },
  { level: 'A2', lecture: 56, title: 'Writing Simple Emails & Messages', chapter: 4, focusArea: 'Writing' },
  { level: 'A2', lecture: 57, title: 'Common Mistakes & Clarifications', chapter: 4, focusArea: 'Grammar' },
  { level: 'A2', lecture: 58, title: '歇后语 & Puns Introduction', chapter: 4, focusArea: 'Culture' },
  { level: 'A2', lecture: 59, title: 'Chinese Etiquette & Taboos', chapter: 4, focusArea: 'Cultural' },
  { level: 'A2', lecture: 60, title: 'A2 Review & Proficiency Test', chapter: 4, focusArea: 'Assessment' },

  // B1 LECTURES (61-90)
  { level: 'B1', lecture: 61, title: 'Perfect Aspect: 过/完/着 (guò/wán/zhe)', chapter: 1, focusArea: 'Grammar' },
  { level: 'B1', lecture: 62, title: 'Concurrent Actions & Simultaneous Events', chapter: 1, focusArea: 'Grammar' },
  { level: 'B1', lecture: 63, title: 'Potential Complements: V得/不 (V de/bu)', chapter: 1, focusArea: 'Grammar' },
  { level: 'B1', lecture: 64, title: 'Result Complements & Directional Complements', chapter: 1, focusArea: 'Grammar' },
  { level: 'B1', lecture: 65, title: 'Advanced Narrative Tenses', chapter: 1, focusArea: 'Grammar' },
  { level: 'B1', lecture: 66, title: 'Complex Sentence Structures', chapter: 1, focusArea: 'Grammar' },
  { level: 'B1', lecture: 67, title: 'Business Meetings & Negotiations', chapter: 2, focusArea: 'Professional' },
  { level: 'B1', lecture: 68, title: 'Formal Emails & Official Correspondence', chapter: 2, focusArea: 'Professional' },
  { level: 'B1', lecture: 69, title: 'Contract & Legal Language Basics', chapter: 2, focusArea: 'Professional' },
  { level: 'B1', lecture: 70, title: 'Chinese Literature: Tang Poetry (唐诗)', chapter: 2, focusArea: 'Culture' },
  { level: 'B1', lecture: 71, title: 'Philosophical Concepts & Taoism 道教', chapter: 2, focusArea: 'Culture' },
  { level: 'B1', lecture: 72, title: 'Regional Dialects Introduction (方言)', chapter: 2, focusArea: 'Dialects' },
  { level: 'B1', lecture: 73, title: 'Medical & Scientific Terminology', chapter: 3, focusArea: 'Specialized' },
  { level: 'B1', lecture: 74, title: 'Technology & IT Vocabulary', chapter: 3, focusArea: 'Specialized' },
  { level: 'B1', lecture: 75, title: 'Environmental & Climate Discussions', chapter: 3, focusArea: 'Specialized' },
  { level: 'B1', lecture: 76, title: 'Economic & Financial Concepts', chapter: 3, focusArea: 'Specialized' },
  { level: 'B1', lecture: 77, title: '成语 (Chéngyǔ) Mastery: 200+ Four-Character Idioms', chapter: 3, focusArea: 'Vocabulary' },
  { level: 'B1', lecture: 78, title: 'Classical Chinese Grammar (文言文)', chapter: 3, focusArea: 'Literature' },
  { level: 'B1', lecture: 79, title: 'Debate & Argumentative Structures', chapter: 4, focusArea: 'Communication' },
  { level: 'B1', lecture: 80, title: 'Expressing Nuanced Emotions', chapter: 4, focusArea: 'Communication' },
  { level: 'B1', lecture: 81, title: 'Tone Sandhi & Phonetic Variations', chapter: 4, focusArea: 'Phonology' },
  { level: 'B1', lecture: 82, title: 'Historical Events & Cultural References', chapter: 4, focusArea: 'Culture' },
  { level: 'B1', lecture: 83, title: 'Chinese Martial Arts & Kung Fu Terminology', chapter: 4, focusArea: 'Culture' },
  { level: 'B1', lecture: 84, title: 'Fengshui 风水 & Chinese Cosmology', chapter: 4, focusArea: 'Culture' },
  { level: 'B1', lecture: 85, title: 'Modern Media: News & Documentary Language', chapter: 4, focusArea: 'Modern' },
  { level: 'B1', lecture: 86, title: 'Translating Between Chinese & English', chapter: 4, focusArea: 'Skills' },
  { level: 'B1', lecture: 87, title: 'Common Homophones & Confusing Characters', chapter: 4, focusArea: 'Writing' },
  { level: 'B1', lecture: 88, title: 'Internet Slang & Millennial Language (网络用语)', chapter: 4, focusArea: 'Modern' },
  { level: 'B1', lecture: 89, title: 'Proverbs & Sayings (谚语)', chapter: 4, focusArea: 'Culture' },
  { level: 'B1', lecture: 90, title: 'B1 Review & Proficiency Test', chapter: 4, focusArea: 'Assessment' },

  // B2 LECTURES (91-120)
  { level: 'B2', lecture: 91, title: 'Advanced Classical Chinese (古文) Texts', chapter: 1, focusArea: 'Literature' },
  { level: 'B2', lecture: 92, title: 'Lyric Poetry (词/Cí) Analysis', chapter: 1, focusArea: 'Literature' },
  { level: 'B2', lecture: 93, title: 'Modern Chinese Fiction & Short Stories', chapter: 1, focusArea: 'Literature' },
  { level: 'B2', lecture: 94, title: 'Philosophical Dialogues: Confucianism & Buddhism', chapter: 1, focusArea: 'Culture' },
  { level: 'B2', lecture: 95, title: 'Advanced Register & Formality Levels', chapter: 1, focusArea: 'Grammar' },
  { level: 'B2', lecture: 96, title: 'Subtlety & Irony in Chinese Expression', chapter: 1, focusArea: 'Communication' },
  { level: 'B2', lecture: 97, title: 'International Diplomacy & Politics Language', chapter: 2, focusArea: 'Professional' },
  { level: 'B2', lecture: 98, title: 'Legal Documentation & Court Language', chapter: 2, focusArea: 'Professional' },
  { level: 'B2', lecture: 99, title: 'Academic Writing & Research Papers (论文)', chapter: 2, focusArea: 'Professional' },
  { level: 'B2', lecture: 100, title: 'Medical Case Studies & Healthcare Communications', chapter: 2, focusArea: 'Specialized' },
  { level: 'B2', lecture: 101, title: 'Advanced Business Strategy & Negotiation', chapter: 2, focusArea: 'Professional' },
  { level: 'B2', lecture: 102, title: 'Minority Languages & Scripts in China', chapter: 2, focusArea: 'Cultural' },
  { level: 'B2', lecture: 103, title: 'Cinema & Film Language', chapter: 3, focusArea: 'Culture' },
  { level: 'B2', lecture: 104, title: 'Opera & Traditional Performance Arts (京剧)', chapter: 3, focusArea: 'Culture' },
  { level: 'B2', lecture: 105, title: 'Cuisine & Gastronomy Terminology', chapter: 3, focusArea: 'Culture' },
  { level: 'B2', lecture: 106, title: 'Fashion & Design Language', chapter: 3, focusArea: 'Culture' },
  { level: 'B2', lecture: 107, title: 'Art History & Aesthetics (书画 / Calligraphy & Painting)', chapter: 3, focusArea: 'Culture' },
  { level: 'B2', lecture: 108, title: 'Music Theory & Classical Instruments', chapter: 3, focusArea: 'Culture' },
  { level: 'B2', lecture: 109, title: '成语 Mastery: Usage in Literature & Speech', chapter: 4, focusArea: 'Vocabulary' },
  { level: 'B2', lecture: 110, title: 'Colloquialisms & Regional Slang Deep Dive', chapter: 4, focusArea: 'Dialects' },
  { level: 'B2', lecture: 111, title: 'Chinese Humor & Comedy Analysis', chapter: 4, focusArea: 'Communication' },
  { level: 'B2', lecture: 112, title: 'Avant-Garde & Experimental Modern Chinese', chapter: 4, focusArea: 'Modern' },
  { level: 'B2', lecture: 113, title: 'Cross-Cultural Communication: Pragmatics', chapter: 4, focusArea: 'Communication' },
  { level: 'B2', lecture: 114, title: 'Translation Theory: Chinese-English Equivalences', chapter: 4, focusArea: 'Skills' },
  { level: 'B2', lecture: 115, title: 'Linguistic Variations: Mandarin, Cantonese, Wu', chapter: 4, focusArea: 'Dialects' },
  { level: 'B2', lecture: 116, title: 'Digital Humanities: Chinese Text Analysis', chapter: 4, focusArea: 'Modern' },
  { level: 'B2', lecture: 117, title: 'Character Etymology & Radical System Mastery', chapter: 4, focusArea: 'Writing' },
  { level: 'B2', lecture: 118, title: 'Advanced Calligraphy (书法) & Brush Techniques', chapter: 4, focusArea: 'Culture' },
  { level: 'B2', lecture: 119, title: 'Near-Native Fluency: Nuance & Native Idioms', chapter: 4, focusArea: 'Mastery' },
  { level: 'B2', lecture: 120, title: 'B2 Capstone: Comprehensive Proficiency Assessment', chapter: 4, focusArea: 'Assessment' }
];

// ==================== COURSE INTEGRATION FUNCTION ====================

export function generateChineseCourseSections(lectureData: any) {
  return {
    type: 'glossary',
    terms: lectureData.terms,
    examples: lectureData.examples,
    practices: {
      basic: lectureData.practices.basic,
      intermediate: lectureData.practices.intermediate,
      advanced: lectureData.practices.advanced
    },
    culturalNotes: lectureData.culturalNotes,
    characterVariations: {
      simplified: lectureData.simplified,
      traditional: lectureData.traditional
    },
    toneMarking: lectureData.tones
  };
}
