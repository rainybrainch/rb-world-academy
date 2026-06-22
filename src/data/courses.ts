import { Category } from '@/types';

// English - A1 Level
const englishA1: Category = {
  id: 'cat-eng-a1',
  title: 'English - Beginner',
  description: 'English language learning at beginner level (A1).',
  level: 'A1',
  topicCategoryId: 'topic-english',
  courses: [{
    id: 'eng-a1-1',
    title: 'Chapter 1: Foundations',
    lessons: [
      {
        id: 'l1',
        title: 'Greetings & Self-Introduction',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Greetings', 'Self-intro'],
        sections: [
          { type: 'info-box', content: 'Learn basic English greetings and how to introduce yourself.' },
          { type: 'heading', level: 2, content: 'Greetings' },
          { type: 'text', content: 'Hello / Hi / Good morning / Good afternoon / Good evening / Goodbye / See you later' },
          { type: 'heading', level: 2, content: 'Self-Introduction' },
          { type: 'text', content: 'My name is... / I am... / Nice to meet you / Where are you from?' },
        ],
      },
      {
        id: 'l2',
        title: 'Numbers & Colors',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['Numbers 1-20', 'Basic colors'],
        sections: [
          { type: 'info-box', content: 'Learn numbers and colors in English.' },
          { type: 'heading', level: 2, content: 'Numbers (1-20)' },
          { type: 'text', content: 'one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty' },
          { type: 'heading', level: 2, content: 'Colors' },
          { type: 'text', content: 'red, blue, green, yellow, black, white, gray, orange, purple, pink' },
        ],
      },
      {
        id: 'l3',
        title: 'Family & Occupations',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Family members', 'Jobs'],
        sections: [
          { type: 'info-box', content: 'Vocabulary for family members and common occupations.' },
          { type: 'heading', level: 2, content: 'Family' },
          { type: 'text', content: 'father, mother, brother, sister, grandmother, grandfather, uncle, aunt' },
          { type: 'heading', level: 2, content: 'Occupations' },
          { type: 'text', content: 'engineer, teacher, doctor, lawyer, artist, chef, nurse, manager' },
        ],
      },
      {
        id: 'l4',
        title: 'Food & Drinks',
        duration: '7:45',
        videoId: '',
        isPremium: false,
        checkItems: ['Food vocabulary', 'Drink vocabulary'],
        sections: [
          { type: 'info-box', content: 'Learn common foods and drinks.' },
          { type: 'heading', level: 2, content: 'Food' },
          { type: 'text', content: 'bread, cheese, meat, chicken, fish, vegetables, fruits, rice' },
          { type: 'heading', level: 2, content: 'Drinks' },
          { type: 'text', content: 'water, coffee, tea, wine, beer, juice, milk' },
        ],
      },
      {
        id: 'l5',
        title: 'Days & Time',
        duration: '8:15',
        videoId: '',
        isPremium: false,
        checkItems: ['Days of week', 'Time expressions'],
        sections: [
          { type: 'info-box', content: 'Days of the week and time expressions.' },
          { type: 'heading', level: 2, content: 'Days' },
          { type: 'text', content: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday' },
          { type: 'heading', level: 2, content: 'Time' },
          { type: 'text', content: 'What time is it? / It is 1 o\'clock / It is 2 o\'clock / noon / midnight' },
        ],
      },
    ],
  }],
};

// English - A2 Level
const englishA2: Category = {
  id: 'cat-eng-a2',
  title: 'English - Elementary',
  description: 'English language learning at elementary level (A2).',
  level: 'A2',
  topicCategoryId: 'topic-english',
  courses: [{
    id: 'eng-a2-1',
    title: 'Chapter 1: Daily Life',
    lessons: [
      {
        id: 'l1',
        title: 'Present Tense & Daily Routines',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Present tense', 'Daily routines'],
        sections: [
          { type: 'info-box', content: 'Learn present tense and talk about daily routines.' },
          { type: 'heading', level: 2, content: 'Present Tense' },
          { type: 'text', content: 'I work / You play / He/She eats / We study / They sleep' },
          { type: 'heading', level: 2, content: 'Daily Routines' },
          { type: 'text', content: 'Wake up / Eat breakfast / Go to work / Have lunch / Go home / Dinner / Sleep' },
        ],
      },
      {
        id: 'l2',
        title: 'Shopping & Money',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['Shopping', 'Money'],
        sections: [
          { type: 'info-box', content: 'Shopping expressions and money vocabulary.' },
          { type: 'heading', level: 2, content: 'Shopping' },
          { type: 'text', content: 'How much is it? / That\'s expensive / I want to buy... / Do you have...?' },
          { type: 'heading', level: 2, content: 'Money' },
          { type: 'text', content: 'Dollar / Euro / Pound / Cash / Card / Price / Cost' },
        ],
      },
    ],
  }],
};

// English - B1 Level
const englishB1: Category = {
  id: 'cat-eng-b1',
  title: 'English - Intermediate',
  description: 'English language learning at intermediate level (B1).',
  level: 'B1',
  topicCategoryId: 'topic-english',
  courses: [{
    id: 'eng-b1-1',
    title: 'Chapter 1: Advanced Conversations',
    lessons: [
      {
        id: 'l1',
        title: 'Past Tense & Storytelling',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Past tense', 'Storytelling'],
        sections: [
          { type: 'info-box', content: 'Master past tense and tell stories.' },
          { type: 'heading', level: 2, content: 'Past Tense' },
          { type: 'text', content: 'I went / You saw / He/She ate / We lived / They played' },
          { type: 'heading', level: 2, content: 'Storytelling' },
          { type: 'text', content: 'Once upon a time / Then / After that / Finally / It was amazing' },
        ],
      },
    ],
  }],
};

// English - B2 Level
const englishB2: Category = {
  id: 'cat-eng-b2',
  title: 'English - Upper-Intermediate',
  description: 'English language learning at upper-intermediate level (B2).',
  level: 'B2',
  topicCategoryId: 'topic-english',
  courses: [{
    id: 'eng-b2-1',
    title: 'Chapter 1: Advanced Topics',
    lessons: [
      {
        id: 'l1',
        title: 'Complex Sentences & Debate',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Complex grammar', 'Debate skills'],
        sections: [
          { type: 'info-box', content: 'Complex sentence structures and debate.' },
          { type: 'heading', level: 2, content: 'Complex Sentences' },
          { type: 'text', content: 'Although / Because / However / Therefore / In addition / On the other hand' },
          { type: 'heading', level: 2, content: 'Debate' },
          { type: 'text', content: 'I agree/disagree / My point is / Consider this / To sum up / In conclusion' },
        ],
      },
    ],
  }],
};

// Japanese - A1 Level
const japaneseA1: Category = {
  id: 'cat-jpn-a1',
  title: '日本語 - 初級',
  description: '日本語学習（初級レベル A1）。',
  level: 'A1',
  topicCategoryId: 'topic-japanese',
  courses: [{
    id: 'jpn-a1-1',
    title: '第1章：基礎',
    lessons: [
      {
        id: 'l1',
        title: '挨拶と自己紹介',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['挨拶ができる', '自己紹介できる'],
        sections: [
          { type: 'info-box', content: '日本語の基本挨拶と自己紹介を習得します。' },
          { type: 'heading', level: 2, content: '基本挨拶' },
          { type: 'text', content: 'おはよう / こんにちは / こんばんは / さようなら / ありがとう' },
          { type: 'heading', level: 2, content: '自己紹介' },
          { type: 'text', content: '私は...です / 〇〇から来ました / はじめまして / どうぞよろしく' },
        ],
      },
      {
        id: 'l2',
        title: '数字と色',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['数字が言える', '色が言える'],
        sections: [
          { type: 'info-box', content: '日常に必須の数字と色を学びます。' },
          { type: 'heading', level: 2, content: '数字 (1-20)' },
          { type: 'text', content: 'ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とう, じゅういち, じゅうに, じゅうさん, じゅうし, じゅうご, じゅうろく, じゅうしち, じゅうはち, じゅうく, にじゅう' },
          { type: 'heading', level: 2, content: '色' },
          { type: 'text', content: '赤, 青, 緑, 黄色, 黒, 白, 灰色, オレンジ' },
        ],
      },
    ],
  }],
};

// Japanese - A2 Level
const japaneseA2: Category = {
  id: 'cat-jpn-a2',
  title: '日本語 - 初中級',
  description: '日本語学習（初中級レベル A2）。',
  level: 'A2',
  topicCategoryId: 'topic-japanese',
  courses: [{
    id: 'jpn-a2-1',
    title: '第1章：日常会話',
    lessons: [
      {
        id: 'l1',
        title: '過去形・経験',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['過去形', '経験表現'],
        sections: [
          { type: 'info-box', content: '過去形と経験を表現します。' },
          { type: 'heading', level: 2, content: '過去形' },
          { type: 'text', content: '食べました / 飲みました / 行きました / 見ました' },
          { type: 'heading', level: 2, content: '経験' },
          { type: 'text', content: '〜ことがあります / 〜たことがあります / 昨年 / 去年' },
        ],
      },
      {
        id: 'l2',
        title: '買い物と値段',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['買い物表現', '値段'],
        sections: [
          { type: 'info-box', content: '買い物での会話と値段表現。' },
          { type: 'heading', level: 2, content: '買い物' },
          { type: 'text', content: 'いくらですか / 高いです / 安いです / これください' },
          { type: 'heading', level: 2, content: '値段' },
          { type: 'text', content: '100円 / 1000円 / 10000円 / 高い / 安い' },
        ],
      },
    ],
  }],
};

// Japanese - B1 Level
const japaneseB1: Category = {
  id: 'cat-jpn-b1',
  title: '日本語 - 中級',
  description: '日本語学習（中級レベル B1）。',
  level: 'B1',
  topicCategoryId: 'topic-japanese',
  courses: [{
    id: 'jpn-b1-1',
    title: '第1章：より高度な会話',
    lessons: [
      {
        id: 'l1',
        title: '条件形・仮定',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['条件形', '仮定表現'],
        sections: [
          { type: 'info-box', content: '条件形と仮定を学びます。' },
          { type: 'heading', level: 2, content: '条件形' },
          { type: 'text', content: 'もし〜たら / 〜ば / 〜なら / 〜た場合' },
          { type: 'heading', level: 2, content: '仮定' },
          { type: 'text', content: 'もしかして / もし〜だったら / 仮に' },
        ],
      },
    ],
  }],
};

// Japanese - B2 Level
const japaneseB2: Category = {
  id: 'cat-jpn-b2',
  title: '日本語 - 中上級',
  description: '日本語学習（中上級レベル B2）。',
  level: 'B2',
  topicCategoryId: 'topic-japanese',
  courses: [{
    id: 'jpn-b2-1',
    title: '第1章：論文的表現',
    lessons: [
      {
        id: 'l1',
        title: '敬語と論理表現',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['敬語', '論理表現'],
        sections: [
          { type: 'info-box', content: '敬語と論理的表現を習得します。' },
          { type: 'heading', level: 2, content: '敬語' },
          { type: 'text', content: 'いたします / おります / いらっしゃる / 申し上げます' },
          { type: 'heading', level: 2, content: '論理表現' },
          { type: 'text', content: 'したがって / とはいえ / むしろ / 要するに' },
        ],
      },
    ],
  }],
};

// Chinese - A1 Level
const chineseA1: Category = {
  id: 'cat-chs-a1',
  title: '中国語 - 初級',
  description: '中国語学習（初級レベル A1）。',
  level: 'A1',
  topicCategoryId: 'topic-chinese',
  courses: [{
    id: 'chs-a1-1',
    title: '第1章：基础',
    lessons: [
      {
        id: 'l1',
        title: '问候和自我介绍',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['会问候', '会自我介绍'],
        sections: [
          { type: 'info-box', content: '学习中文基本问候和自我介绍。' },
          { type: 'heading', level: 2, content: '问候' },
          { type: 'text', content: '早上好 / 你好 / 晚上好 / 再见 / 谢谢' },
          { type: 'heading', level: 2, content: '自我介绍' },
          { type: 'text', content: '我叫... / 我来自... / 认识你很高兴 / 请多指教' },
        ],
      },
    ],
  }],
};

// Chinese - A2 Level
const chineseA2: Category = {
  id: 'cat-chs-a2',
  title: '中国語 - 初中級',
  description: '中国語学習（初中級レベル A2）。',
  level: 'A2',
  topicCategoryId: 'topic-chinese',
  courses: [{
    id: 'chs-a2-1',
    title: '第1章：日常交流',
    lessons: [
      {
        id: 'l1',
        title: '過去形と経験',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['過去形', '経験表現'],
        sections: [
          { type: 'info-box', content: '過去形と経験を表現します。' },
          { type: 'heading', level: 2, content: '過去形' },
          { type: 'text', content: '吃了 / 喝了 / 去了 / 看了' },
          { type: 'heading', level: 2, content: '経験' },
          { type: 'text', content: '去过 / 吃过 / 见过 / 做过' },
        ],
      },
      {
        id: 'l2',
        title: '買い物と値段',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['買い物', '値段'],
        sections: [
          { type: 'info-box', content: '買い物での会話。' },
          { type: 'heading', level: 2, content: '買い物' },
          { type: 'text', content: '多少钱 / 便宜 / 贵 / 要这个' },
          { type: 'heading', level: 2, content: '値段' },
          { type: 'text', content: '100块 / 1000块 / 便宜 / 很便宜' },
        ],
      },
    ],
  }],
};

// Chinese - B1 Level
const chineseB1: Category = {
  id: 'cat-chs-b1',
  title: '中国語 - 中級',
  description: '中国語学習（中級レベル B1）。',
  level: 'B1',
  topicCategoryId: 'topic-chinese',
  courses: [{
    id: 'chs-b1-1',
    title: '第1章：高度な会話',
    lessons: [
      {
        id: 'l1',
        title: '条件形と仮定',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['条件形', '仮定'],
        sections: [
          { type: 'info-box', content: '条件形と仮定を学びます。' },
          { type: 'heading', level: 2, content: '条件形' },
          { type: 'text', content: '如果...就 / 要是...就 / 假如...的话' },
          { type: 'heading', level: 2, content: '仮定' },
          { type: 'text', content: '如果 / 要是 / 假如 / 要不是' },
        ],
      },
    ],
  }],
};

// Chinese - B2 Level
const chineseB2: Category = {
  id: 'cat-chs-b2',
  title: '中国語 - 中上級',
  description: '中国語学習（中上級レベル B2）。',
  level: 'B2',
  topicCategoryId: 'topic-chinese',
  courses: [{
    id: 'chs-b2-1',
    title: '第1章：論文的表現',
    lessons: [
      {
        id: 'l1',
        title: '複雑な構文と論理',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['複雑な構文', '論理表現'],
        sections: [
          { type: 'info-box', content: '複雑な構文と論理的表現。' },
          { type: 'heading', level: 2, content: '複雑な構文' },
          { type: 'text', content: '虽然...但是 / 即使...也 / 因为...所以' },
          { type: 'heading', level: 2, content: '論理表現' },
          { type: 'text', content: '因此 / 然而 / 相反 / 总之' },
        ],
      },
    ],
  }],
};

// Korean - A1 Level
const koreanA1: Category = {
  id: 'cat-kor-a1',
  title: '한국어 - 초급',
  description: '한국어 학습 (초급 레벨 A1).',
  level: 'A1',
  topicCategoryId: 'topic-korean',
  courses: [{
    id: 'kor-a1-1',
    title: '제1장: 기초',
    lessons: [
      {
        id: 'l1',
        title: '인사와 자기소개',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['인사할 수 있다', '자기소개할 수 있다'],
        sections: [
          { type: 'info-box', content: '한국어 기본 인사와 자기소개를 배웁니다.' },
          { type: 'heading', level: 2, content: '인사' },
          { type: 'text', content: '안녕하세요 / 안녕 / 감사합니다 / 안녕히 가세요' },
          { type: 'heading', level: 2, content: '자기소개' },
          { type: 'text', content: '저는...입니다 / 저는...에서 왔습니다 / 만나서 반갑습니다' },
        ],
      },
    ],
  }],
};

// Korean - A2 Level
const koreanA2: Category = {
  id: 'cat-kor-a2',
  title: '한국어 - 초중급',
  description: '한국어 학습 (초중급 A2).',
  level: 'A2',
  topicCategoryId: 'topic-korean',
  courses: [{
    id: 'kor-a2-1',
    title: '제1장: 일상 대화',
    lessons: [
      {
        id: 'l1',
        title: '과거형과 경험',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['과거형', '경험'],
        sections: [
          { type: 'info-box', content: '과거형과 경험을 배웁니다.' },
          { type: 'heading', level: 2, content: '과거형' },
          { type: 'text', content: '먹었어요 / 마셨어요 / 갔어요 / 봤어요' },
          { type: 'heading', level: 2, content: '경험' },
          { type: 'text', content: '본 적 있어요 / 먹어본 적 있어요' },
        ],
      },
      {
        id: 'l2',
        title: '쇼핑과 가격',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['쇼핑', '가격'],
        sections: [
          { type: 'info-box', content: '쇼핑 표현과 가격.' },
          { type: 'heading', level: 2, content: '쇼핑' },
          { type: 'text', content: '얼마예요 / 비싸요 / 싸요 / 이거 주세요' },
          { type: 'heading', level: 2, content: '가격' },
          { type: 'text', content: '100원 / 1000원 / 싼 / 비싼' },
        ],
      },
    ],
  }],
};

// Korean - B1 Level
const koreanB1: Category = {
  id: 'cat-kor-b1',
  title: '한국어 - 중급',
  description: '한국어 학습 (중급 B1).',
  level: 'B1',
  topicCategoryId: 'topic-korean',
  courses: [{
    id: 'kor-b1-1',
    title: '제1장: 고급 회화',
    lessons: [
      {
        id: 'l1',
        title: '조건형과 가정',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['조건형', '가정'],
        sections: [
          { type: 'info-box', content: '조건형과 가정을 배웁니다.' },
          { type: 'heading', level: 2, content: '조건형' },
          { type: 'text', content: '만약...면 / 만약...다면 / ...면' },
          { type: 'heading', level: 2, content: '가정' },
          { type: 'text', content: '만약 / 혹시 / 실은' },
        ],
      },
    ],
  }],
};

// Korean - B2 Level
const koreanB2: Category = {
  id: 'cat-kor-b2',
  title: '한국어 - 중상급',
  description: '한국어 학습 (중상급 B2).',
  level: 'B2',
  topicCategoryId: 'topic-korean',
  courses: [{
    id: 'kor-b2-1',
    title: '제1장: 논문적 표현',
    lessons: [
      {
        id: 'l1',
        title: '복잡한 문법과 논리',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['복잡한 문법', '논리'],
        sections: [
          { type: 'info-box', content: '복잡한 문법과 논리 표현.' },
          { type: 'heading', level: 2, content: '복잡한 문법' },
          { type: 'text', content: '비록...지만 / 설령...도 / 때문에 / 그러므로' },
          { type: 'heading', level: 2, content: '논리 표현' },
          { type: 'text', content: '따라서 / 그러나 / 반대로 / 요약하면' },
        ],
      },
    ],
  }],
};

// German - A2/B1/B2
const germanA2: Category = {
  id: 'cat-deu-a2',
  title: 'Deutsch - Anfänger+',
  description: 'Deutschkurs A2.',
  level: 'A2',
  topicCategoryId: 'topic-german',
  courses: [{
    id: 'deu-a2-1',
    title: 'Kapitel 1',
    lessons: [{
      id: 'l1',
      title: 'Vergangenheit & Einkaufen',
      duration: '9:00',
      videoId: '',
      isPremium: false,
      checkItems: ['Präteritum', 'Einkaufen'],
      sections: [
        { type: 'info-box', content: 'Vergangenheit und Einkaufen lernen.' },
        { type: 'heading', level: 2, content: 'Präteritum' },
        { type: 'text', content: 'ich aß / du trankst / er ging / wir sahen' },
        { type: 'heading', level: 2, content: 'Einkaufen' },
        { type: 'text', content: 'Wie viel kostet das? / Das ist teuer / Das ist billig' },
      ],
    }],
  }],
};

const germanB1: Category = {
  id: 'cat-deu-b1',
  title: 'Deutsch - Mittelstufe',
  description: 'Deutschkurs B1.',
  level: 'B1',
  topicCategoryId: 'topic-german',
  courses: [{
    id: 'deu-b1-1',
    title: 'Kapitel 1',
    lessons: [{
      id: 'l1',
      title: 'Bedingungsformen',
      duration: '10:00',
      videoId: '',
      isPremium: false,
      checkItems: ['Bedingungsformen'],
      sections: [
        { type: 'info-box', content: 'Bedingungsformen lernen.' },
        { type: 'heading', level: 2, content: 'Wenn-Sätze' },
        { type: 'text', content: 'Wenn...dann / Falls...würde / Sollte...so' },
      ],
    }],
  }],
};

const germanB2: Category = {
  id: 'cat-deu-b2',
  title: 'Deutsch - Oberstufe',
  description: 'Deutschkurs B2.',
  level: 'B2',
  topicCategoryId: 'topic-german',
  courses: [{
    id: 'deu-b2-1',
    title: 'Kapitel 1',
    lessons: [{
      id: 'l1',
      title: 'Komplexe Strukturen',
      duration: '11:00',
      videoId: '',
      isPremium: false,
      checkItems: ['Komplexe Strukturen'],
      sections: [
        { type: 'info-box', content: 'Komplexe Strukturen und Logik.' },
        { type: 'heading', level: 2, content: 'Komplexe Sätze' },
        { type: 'text', content: 'Obwohl...aber / Trotzdem...jedoch / Daher...somit' },
      ],
    }],
  }],
};

// Additional languages - placeholder A1
const otherLanguagesA1: Category[] = [
  {
    id: 'cat-deu-a1',
    title: 'Deutsch - Anfänger',
    description: 'Deutschkurs für Anfänger (A1).',
    level: 'A1',
    topicCategoryId: 'topic-german',
    courses: [{
      id: 'deu-a1-1',
      title: 'Kapitel 1',
      lessons: [{
        id: 'l1',
        title: 'Grüße und Vorstellung',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Grüße'],
        sections: [{ type: 'info-box', content: 'Deutschunterricht A1' }],
      }],
    }],
  },
  {
    id: 'cat-fra-a1',
    title: 'Français - Débutant',
    description: 'Cours de français pour débutants (A1).',
    level: 'A1',
    topicCategoryId: 'topic-french',
    courses: [{
      id: 'fra-a1-1',
      title: 'Chapitre 1',
      lessons: [{
        id: 'l1',
        title: 'Salutations et présentation',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Salutations'],
        sections: [{ type: 'info-box', content: 'Cours de français A1' }],
      }],
    }],
  },
  {
    id: 'cat-spa-a1',
    title: 'Español - Principiante',
    description: 'Curso de español para principiantes (A1).',
    level: 'A1',
    topicCategoryId: 'topic-spanish',
    courses: [{
      id: 'spa-a1-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Saludos y presentación',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Saludos'],
        sections: [{ type: 'info-box', content: 'Curso de español A1' }],
      }],
    }],
  },
  {
    id: 'cat-ita-a1',
    title: 'Italiano - Principiante',
    description: 'Corso di italiano per principianti (A1).',
    level: 'A1',
    topicCategoryId: 'topic-italian',
    courses: [{
      id: 'ita-a1-1',
      title: 'Capitolo 1',
      lessons: [{
        id: 'l1',
        title: 'Saluti e presentazione',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Saluti'],
        sections: [{ type: 'info-box', content: 'Corso di italiano A1' }],
      }],
    }],
  },
  {
    id: 'cat-ara-a1',
    title: 'العربية - مبتدئ',
    description: 'دورة اللغة العربية للمبتدئين (A1).',
    level: 'A1',
    topicCategoryId: 'topic-arabic',
    courses: [{
      id: 'ara-a1-1',
      title: 'الفصل الأول',
      lessons: [{
        id: 'l1',
        title: 'التحيات والتعريف بالنفس',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['التحيات'],
        sections: [{ type: 'info-box', content: 'دورة اللغة العربية A1' }],
      }],
    }],
  },
  {
    id: 'cat-por-a1',
    title: 'Português - Iniciante',
    description: 'Curso de português para iniciantes (A1).',
    level: 'A1',
    topicCategoryId: 'topic-portuguese',
    courses: [{
      id: 'por-a1-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Saudações e apresentação',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Saudações'],
        sections: [{ type: 'info-box', content: 'Curso de português A1' }],
      }],
    }],
  },
  {
    id: 'cat-cyc-a1',
    title: '古文・漢文 - 初級',
    description: '古典中国語学習（初級レベル A1）。',
    level: 'A1',
    topicCategoryId: 'topic-classical-chinese',
    courses: [{
      id: 'cyc-a1-1',
      title: '第1章：基礎',
      lessons: [{
        id: 'l1',
        title: '基本文法',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['基本文法'],
        sections: [{ type: 'info-box', content: '古典中国語の基礎' }],
      }],
    }],
  },
  {
    id: 'cat-cyc-a2',
    title: '古文・漢文 - 初中級',
    description: '古典中国語学習（初中級レベル A2）。',
    level: 'A2',
    topicCategoryId: 'topic-classical-chinese',
    courses: [{
      id: 'cyc-a2-1',
      title: '第1章：古典表現',
      lessons: [{
        id: 'l1',
        title: '過去形と経験',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['過去形', '経験'],
        sections: [
          { type: 'info-box', content: '古典中国語の過去形と経験表現。' },
          { type: 'heading', level: 2, content: '過去形' },
          { type: 'text', content: '曾 / 嘗 / 過 / 昔日' },
          { type: 'heading', level: 2, content: '経験' },
          { type: 'text', content: '前日 / 昨時 / 往昔 / 往日' },
        ],
      }],
    }],
  },
  {
    id: 'cat-cyc-b1',
    title: '古文・漢文 - 中級',
    description: '古典中国語学習（中級レベル B1）。',
    level: 'B1',
    topicCategoryId: 'topic-classical-chinese',
    courses: [{
      id: 'cyc-b1-1',
      title: '第1章：古文解読',
      lessons: [{
        id: 'l1',
        title: '条件形と仮定',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['条件形', '仮定'],
        sections: [
          { type: 'info-box', content: '古典中国語の条件形と仮定。' },
          { type: 'heading', level: 2, content: '条件形' },
          { type: 'text', content: '若...則 / 如...則 / 若夫' },
          { type: 'heading', level: 2, content: '仮定' },
          { type: 'text', content: '假如 / 若是 / 設令 / 倘若' },
        ],
      }],
    }],
  },
  {
    id: 'cat-cyc-b2',
    title: '古文・漢文 - 中上級',
    description: '古典中国語学習（中上級レベル B2）。',
    level: 'B2',
    topicCategoryId: 'topic-classical-chinese',
    courses: [{
      id: 'cyc-b2-1',
      title: '第1章：古籍研究',
      lessons: [{
        id: 'l1',
        title: '複雑な構文と論理',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['複雑な構文', '論理'],
        sections: [
          { type: 'info-box', content: '古典中国語の複雑な構文と論理。' },
          { type: 'heading', level: 2, content: '複雑な構文' },
          { type: 'text', content: '雖然...然而 / 縱然...亦 / 由於...因此' },
          { type: 'heading', level: 2, content: '論理表現' },
          { type: 'text', content: '故 / 是以 / 然 / 諸 / 總而言之' },
        ],
      }],
    }],
  },
];

export const allCategories: Category[] = [
  englishA1,
  englishA2,
  englishB1,
  englishB2,
  japaneseA1,
  japaneseA2,
  japaneseB1,
  japaneseB2,
  chineseA1,
  chineseA2,
  chineseB1,
  chineseB2,
  koreanA1,
  koreanA2,
  koreanB1,
  koreanB2,
  germanA2,
  germanB1,
  germanB2,
  {
    id: 'cat-fra-a2',
    title: 'Français - Élémentaire',
    level: 'A2',
    topicCategoryId: 'topic-french',
    courses: [{
      id: 'fra-a2-1',
      title: 'Chapitre 1',
      lessons: [{
        id: 'l1',
        title: 'Passé & Shopping',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Passé', 'Shopping'],
        sections: [
          { type: 'info-box', content: 'Passé composé et shopping.' },
          { type: 'heading', level: 2, content: 'Passé' },
          { type: 'text', content: 'J\'ai mangé / Tu as bu / Il est allé' },
          { type: 'heading', level: 2, content: 'Shopping' },
          { type: 'text', content: 'Combien ça coûte? / C\'est cher / C\'est bon marché' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-fra-b1',
    title: 'Français - Intermédiaire',
    level: 'B1',
    topicCategoryId: 'topic-french',
    courses: [{
      id: 'fra-b1-1',
      title: 'Chapitre 1',
      lessons: [{
        id: 'l1',
        title: 'Conditions',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Conditions'],
        sections: [
          { type: 'info-box', content: 'Phrases conditionnelles.' },
          { type: 'heading', level: 2, content: 'Si' },
          { type: 'text', content: 'Si...alors / Si j\'étais' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-fra-b2',
    title: 'Français - Supérieur',
    level: 'B2',
    topicCategoryId: 'topic-french',
    courses: [{
      id: 'fra-b2-1',
      title: 'Chapitre 1',
      lessons: [{
        id: 'l1',
        title: 'Structures Complexes',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Structures'],
        sections: [
          { type: 'info-box', content: 'Structures complexes et logique.' },
          { type: 'heading', level: 2, content: 'Logique' },
          { type: 'text', content: 'Bien que / Cependant / Par conséquent' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-spa-a2',
    title: 'Español - Elemental',
    level: 'A2',
    topicCategoryId: 'topic-spanish',
    courses: [{
      id: 'spa-a2-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Pasado & Compras',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Pasado', 'Compras'],
        sections: [
          { type: 'info-box', content: 'Pasado preterito y compras.' },
          { type: 'heading', level: 2, content: 'Pasado' },
          { type: 'text', content: 'Comí / Bebiste / Fue / Vimos' },
          { type: 'heading', level: 2, content: 'Compras' },
          { type: 'text', content: '¿Cuánto cuesta? / Es caro / Es barato' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-spa-b1',
    title: 'Español - Intermedio',
    level: 'B1',
    topicCategoryId: 'topic-spanish',
    courses: [{
      id: 'spa-b1-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Condicionales',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Condicionales'],
        sections: [
          { type: 'info-box', content: 'Oraciones condicionales.' },
          { type: 'heading', level: 2, content: 'Si clauses' },
          { type: 'text', content: 'Si...entonces / Si fuera / Aunque' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-spa-b2',
    title: 'Español - Superior',
    level: 'B2',
    topicCategoryId: 'topic-spanish',
    courses: [{
      id: 'spa-b2-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Estructuras Complejas',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Estructuras'],
        sections: [
          { type: 'info-box', content: 'Estructuras complejas y lógica.' },
          { type: 'heading', level: 2, content: 'Lógica' },
          { type: 'text', content: 'Aunque / Sin embargo / Por lo tanto' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ita-a2',
    title: 'Italiano - Elementare',
    level: 'A2',
    topicCategoryId: 'topic-italian',
    courses: [{
      id: 'ita-a2-1',
      title: 'Capitolo 1',
      lessons: [{
        id: 'l1',
        title: 'Passato & Shopping',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Passato', 'Shopping'],
        sections: [
          { type: 'info-box', content: 'Passato prossimo e shopping.' },
          { type: 'heading', level: 2, content: 'Passato' },
          { type: 'text', content: 'Ho mangiato / Hai bevuto / È andato' },
          { type: 'heading', level: 2, content: 'Shopping' },
          { type: 'text', content: 'Quanto costa? / È caro / È economico' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ita-b1',
    title: 'Italiano - Intermedio',
    level: 'B1',
    topicCategoryId: 'topic-italian',
    courses: [{
      id: 'ita-b1-1',
      title: 'Capitolo 1',
      lessons: [{
        id: 'l1',
        title: 'Condizionali',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Condizionali'],
        sections: [
          { type: 'info-box', content: 'Frasi condizionali.' },
          { type: 'heading', level: 2, content: 'Se clauses' },
          { type: 'text', content: 'Se...allora / Se fossi / Benché' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ita-b2',
    title: 'Italiano - Superiore',
    level: 'B2',
    topicCategoryId: 'topic-italian',
    courses: [{
      id: 'ita-b2-1',
      title: 'Capitolo 1',
      lessons: [{
        id: 'l1',
        title: 'Strutture Complesse',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Strutture'],
        sections: [
          { type: 'info-box', content: 'Strutture complesse e logica.' },
          { type: 'heading', level: 2, content: 'Logica' },
          { type: 'text', content: 'Sebbene / Tuttavia / Perciò' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ara-a2',
    title: 'العربية - مبتدئ متقدم',
    level: 'A2',
    topicCategoryId: 'topic-arabic',
    courses: [{
      id: 'ara-a2-1',
      title: 'الفصل الأول',
      lessons: [{
        id: 'l1',
        title: 'الماضي والتسوق',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['الماضي', 'التسوق'],
        sections: [
          { type: 'info-box', content: 'الماضي والتسوق بالعربية.' },
          { type: 'heading', level: 2, content: 'الماضي' },
          { type: 'text', content: 'أكلت / شربت / ذهبت / رأيت' },
          { type: 'heading', level: 2, content: 'التسوق' },
          { type: 'text', content: 'كم السعر؟ / غالي / رخيص' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ara-b1',
    title: 'العربية - متوسط',
    level: 'B1',
    topicCategoryId: 'topic-arabic',
    courses: [{
      id: 'ara-b1-1',
      title: 'الفصل الأول',
      lessons: [{
        id: 'l1',
        title: 'الشروط والافتراضات',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['الشروط'],
        sections: [
          { type: 'info-box', content: 'جمل شرطية.' },
          { type: 'heading', level: 2, content: 'إذا' },
          { type: 'text', content: 'إذا...فإن / لو...لكان / إن' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ara-b2',
    title: 'العربية - متقدم',
    level: 'B2',
    topicCategoryId: 'topic-arabic',
    courses: [{
      id: 'ara-b2-1',
      title: 'الفصل الأول',
      lessons: [{
        id: 'l1',
        title: 'التراكيب المعقدة',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['التراكيب'],
        sections: [
          { type: 'info-box', content: 'تراكيب معقدة ومنطق.' },
          { type: 'heading', level: 2, content: 'المنطق' },
          { type: 'text', content: 'مع أن / لكن / لذلك / بناءً على' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-por-a2',
    title: 'Português - Elementar',
    level: 'A2',
    topicCategoryId: 'topic-portuguese',
    courses: [{
      id: 'por-a2-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Passado & Compras',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Passado', 'Compras'],
        sections: [
          { type: 'info-box', content: 'Passado e compras em português.' },
          { type: 'heading', level: 2, content: 'Passado' },
          { type: 'text', content: 'Comi / Bebi / Fui / Vi' },
          { type: 'heading', level: 2, content: 'Compras' },
          { type: 'text', content: 'Quanto custa? / É caro / É barato' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-por-b1',
    title: 'Português - Intermediário',
    level: 'B1',
    topicCategoryId: 'topic-portuguese',
    courses: [{
      id: 'por-b1-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Condicionais',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Condicionais'],
        sections: [
          { type: 'info-box', content: 'Frases condicionais.' },
          { type: 'heading', level: 2, content: 'Se clauses' },
          { type: 'text', content: 'Se...então / Se fosse / Mesmo que' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-por-b2',
    title: 'Português - Superior',
    level: 'B2',
    topicCategoryId: 'topic-portuguese',
    courses: [{
      id: 'por-b2-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Estruturas Complexas',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Estruturas'],
        sections: [
          { type: 'info-box', content: 'Estruturas complexas e lógica.' },
          { type: 'heading', level: 2, content: 'Lógica' },
          { type: 'text', content: 'Embora / Porém / Portanto' },
        ],
      }],
    }],
  } as Category,
  ...otherLanguagesA1,
];

// Alias for backwards compatibility
export const categories = allCategories;

export const topicCategories = [
  { id: 'topic-english', name: 'English', icon: 'genre-english' },
  { id: 'topic-japanese', name: '日本語', icon: 'genre-japanese-modern' },
  { id: 'topic-chinese', name: '中国語', icon: 'genre-chinese' },
  { id: 'topic-korean', name: '한국어', icon: 'genre-korean' },
  { id: 'topic-german', name: 'Deutsch', icon: 'genre-german' },
  { id: 'topic-french', name: 'Français', icon: 'genre-french' },
  { id: 'topic-spanish', name: 'Español', icon: 'genre-spanish' },
  { id: 'topic-italian', name: 'Italiano', icon: 'genre-italian' },
  { id: 'topic-arabic', name: 'العربية', icon: 'genre-arabic' },
  { id: 'topic-portuguese', name: 'Português', icon: 'genre-portuguese' },
  { id: 'topic-classical-chinese', name: '古文・漢文', icon: 'genre-classical' },
];

// Utility functions
export function getCourse(courseId: string) {
  for (const category of allCategories) {
    for (const course of category.courses) {
      if (course.id === courseId) {
        return { course, category };
      }
    }
  }
  return null;
}

export function getLesson(courseId: string, lessonId: string) {
  for (const category of allCategories) {
    for (const course of category.courses) {
      if (course.id === courseId) {
        for (const lesson of course.lessons) {
          if (lesson.id === lessonId) {
            return { lesson, course, category };
          }
        }
      }
    }
  }
  return null;
}

export function getAdjacentLessons(courseId: string, lessonId: string) {
  const courseResult = getCourse(courseId);
  if (!courseResult) return { prev: null, next: null };

  const { course, category } = courseResult;
  const currentIndex = course.lessons.findIndex(l => l.id === lessonId);

  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0 ? {
      lesson: course.lessons[currentIndex - 1],
      courseId,
      chapterTitle: course.title,
    } : null,
    next: currentIndex < course.lessons.length - 1 ? {
      lesson: course.lessons[currentIndex + 1],
      courseId,
      chapterTitle: course.title,
    } : null,
  };
}
