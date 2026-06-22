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
      { id: 'l1', title: '인사와 자기소개', duration: '8:00', videoId: '', isPremium: false, checkItems: ['인사할 수 있다', '자기소개할 수 있다'], sections: [{ type: 'info-box', content: '기본 인사와 자기소개를 배웁니다.' }, { type: 'heading', level: 2, content: '인사' }, { type: 'text', content: '안녕하세요 / 안녕 / 감사합니다 / 안녕히 가세요' }, { type: 'heading', level: 2, content: '자기소개' }, { type: 'text', content: '저는...입니다 / 저는...에서 왔습니다 / 만나서 반갑습니다' }] },
      { id: 'l2', title: '숫자와 색상', duration: '8:30', videoId: '', isPremium: false, checkItems: ['숫자', '색상'], sections: [{ type: 'info-box', content: '숫자와 색상을 배웁니다.' }, { type: 'heading', level: 2, content: '숫자' }, { type: 'text', content: '하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열' }, { type: 'heading', level: 2, content: '색상' }, { type: 'text', content: '빨강색, 파랑색, 녹색, 노랑색, 검정색, 흰색, 회색, 주황색' }] },
      { id: 'l3', title: '가족과 직업', duration: '8:00', videoId: '', isPremium: false, checkItems: ['가족', '직업'], sections: [{ type: 'info-box', content: '가족과 직업을 배웁니다.' }, { type: 'heading', level: 2, content: '가족' }, { type: 'text', content: '아버지, 어머니, 형, 누나, 동생, 할아버지, 할머니, 삼촌' }, { type: 'heading', level: 2, content: '직업' }, { type: 'text', content: '의사, 선생님, 변호사, 회사원, 엔지니어, 요리사, 간호사' }] },
      { id: 'l4', title: '음식과 음료', duration: '7:45', videoId: '', isPremium: false, checkItems: ['음식', '음료'], sections: [{ type: 'info-box', content: '음식과 음료를 배웁니다.' }, { type: 'heading', level: 2, content: '음식' }, { type: 'text', content: '밥, 면, 고기, 닭, 생선, 야채, 과일, 빵, 계란' }, { type: 'heading', level: 2, content: '음료' }, { type: 'text', content: '물, 커피, 차, 우유, 주스, 맥주, 포도주, 소주' }] },
      { id: 'l5', title: '요일과 시간', duration: '8:15', videoId: '', isPremium: false, checkItems: ['요일', '시간'], sections: [{ type: 'info-box', content: '요일과 시간을 배웁니다.' }, { type: 'heading', level: 2, content: '요일' }, { type: 'text', content: '월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일' }, { type: 'heading', level: 2, content: '시간' }, { type: 'text', content: '한 시, 두 시, 세 시, 정오, 자정, 아침, 오후, 저녁' }] },
      { id: 'l6', title: '학교와 공부', duration: '8:00', videoId: '', isPremium: false, checkItems: ['학교', '공부'], sections: [{ type: 'info-box', content: '학교 생활을 배웁니다.' }, { type: 'heading', level: 2, content: '학교' }, { type: 'text', content: '학교, 교실, 책, 펜, 노트, 칠판, 책상, 의자' }, { type: 'heading', level: 2, content: '공부' }, { type: 'text', content: '읽다, 쓰다, 듣다, 말하다, 배우다, 시험, 숙제' }] },
      { id: 'l7', title: '집과 방', duration: '7:30', videoId: '', isPremium: false, checkItems: ['집', '방'], sections: [{ type: 'info-box', content: '집과 방을 배웁니다.' }, { type: 'heading', level: 2, content: '집' }, { type: 'text', content: '집, 아파트, 방, 부엌, 욕실, 거실, 침실, 현관' }, { type: 'heading', level: 2, content: '가구' }, { type: 'text', content: '침대, 소파, 냉장고, 전자레인지, 세탁기, 선풍기, 에어컨' }] },
      { id: 'l8', title: '옷과 패션', duration: '7:45', videoId: '', isPremium: false, checkItems: ['옷', '패션'], sections: [{ type: 'info-box', content: '옷과 액세서리를 배웁니다.' }, { type: 'heading', level: 2, content: '옷' }, { type: 'text', content: '셔츠, 바지, 치마, 드레스, 코트, 신발, 양말, 모자' }, { type: 'heading', level: 2, content: '액세서리' }, { type: 'text', content: '안경, 반지, 목걸이, 팔찌, 시계, 크다, 작다, 길다' }] },
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
      { id: 'l1', title: '과거형과 경험', duration: '9:00', videoId: '', isPremium: false, checkItems: ['과거형', '경험'], sections: [{ type: 'info-box', content: '과거형과 경험을 배웁니다.' }, { type: 'heading', level: 2, content: '과거형' }, { type: 'text', content: '먹었어요 / 마셨어요 / 갔어요 / 봤어요' }, { type: 'heading', level: 2, content: '경험' }, { type: 'text', content: '본 적 있어요 / 먹어본 적 있어요' }] },
      { id: 'l2', title: '쇼핑과 가격', duration: '8:30', videoId: '', isPremium: false, checkItems: ['쇼핑', '가격'], sections: [{ type: 'info-box', content: '쇼핑 표현을 배웁니다.' }, { type: 'heading', level: 2, content: '쇼핑' }, { type: 'text', content: '얼마예요 / 비싸요 / 싸요 / 이거 주세요' }, { type: 'heading', level: 2, content: '가격' }, { type: 'text', content: '100원 / 1000원 / 싼 / 비싼' }] },
      { id: 'l3', title: '날씨와 계절', duration: '8:00', videoId: '', isPremium: false, checkItems: ['날씨', '계절'], sections: [{ type: 'info-box', content: '날씨와 계절을 배웁니다.' }, { type: 'heading', level: 2, content: '날씨' }, { type: 'text', content: '맑다, 흐리다, 비오다, 눈오다, 춥다, 덥다, 따뜻하다, 시원하다' }, { type: 'heading', level: 2, content: '계절' }, { type: 'text', content: '봄, 여름, 가을, 겨울, 봄이 좋아요, 여름은 더워요' }] },
      { id: 'l4', title: '여행과 관광', duration: '9:00', videoId: '', isPremium: false, checkItems: ['여행', '관광'], sections: [{ type: 'info-box', content: '여행 표현을 배웁니다.' }, { type: 'heading', level: 2, content: '이동 수단' }, { type: 'text', content: '비행기, 기차, 버스, 지하철, 택시, 자동차, 자전거' }, { type: 'heading', level: 2, content: '장소' }, { type: 'text', content: '호텔, 산, 해변, 박물관, 궁전, 절, 공원, 탑' }] },
      { id: 'l5', title: '건강과 신체', duration: '8:30', videoId: '', isPremium: false, checkItems: ['신체', '건강'], sections: [{ type: 'info-box', content: '건강과 신체를 배웁니다.' }, { type: 'heading', level: 2, content: '신체 부위' }, { type: 'text', content: '머리, 눈, 코, 입, 귀, 팔, 다리, 손, 발, 배' }, { type: 'heading', level: 2, content: '건강 상태' }, { type: 'text', content: '아프다, 피곤하다, 건강하다, 감기, 열, 두통, 배탈' }] },
      { id: 'l6', title: '운동과 취미', duration: '8:15', videoId: '', isPremium: false, checkItems: ['운동', '취미'], sections: [{ type: 'info-box', content: '운동과 취미를 배웁니다.' }, { type: 'heading', level: 2, content: '운동' }, { type: 'text', content: '축구, 농구, 테니스, 수영, 조깅, 걷기, 자전거, 탁구' }, { type: 'heading', level: 2, content: '취미' }, { type: 'text', content: '독서, 영화 보기, 그림 그리기, 음악, 노래, 춤, 게임, 여행' }] },
      { id: 'l7', title: '직장과 업무', duration: '8:45', videoId: '', isPremium: false, checkItems: ['직장', '업무'], sections: [{ type: 'info-box', content: '직장 생활을 배웁니다.' }, { type: 'heading', level: 2, content: '직장' }, { type: 'text', content: '회사, 사무실, 부서, 회의, 보고서, 프로젝트, 마감일, 급여' }, { type: 'heading', level: 2, content: '업무' }, { type: 'text', content: '일하다, 회의하다, 보고하다, 계획하다, 완성하다, 도움을 주다' }] },
      { id: 'l8', title: '음식과 요리', duration: '9:00', videoId: '', isPremium: false, checkItems: ['한식', '요리'], sections: [{ type: 'info-box', content: '한국 음식을 배웁니다.' }, { type: 'heading', level: 2, content: '한식' }, { type: 'text', content: '비빔밥, 불고기, 김밥, 떡볶이, 된장찌개, 김치, 국, 반찬' }, { type: 'heading', level: 2, content: '요리 표현' }, { type: 'text', content: '요리하다, 끓이다, 볶다, 굽다, 찌다, 재료, 맛있다, 맛이 없다' }] },
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
      { id: 'l1', title: '조건형과 가정', duration: '10:00', videoId: '', isPremium: false, checkItems: ['조건형', '가정'], sections: [{ type: 'info-box', content: '조건형과 가정을 배웁니다.' }, { type: 'heading', level: 2, content: '조건형' }, { type: 'text', content: '만약...면 / 만약...다면 / ...면 / 비가 오면' }, { type: 'heading', level: 2, content: '가정' }, { type: 'text', content: '만약 / 혹시 / 실은 / 어쩌다' }] },
      { id: 'l2', title: '마음과 감정', duration: '9:30', videoId: '', isPremium: false, checkItems: ['감정', '심리'], sections: [{ type: 'info-box', content: '감정을 표현하는 방법을 배웁니다.' }, { type: 'heading', level: 2, content: '감정' }, { type: 'text', content: '행복하다, 슬프다, 화나다, 기쁘다, 두렵다, 놀라다, 부끄럽다' }, { type: 'heading', level: 2, content: '심리' }, { type: 'text', content: '우울하다, 불안하다, 초조하다, 답답하다, 희망적이다' }] },
      { id: 'l3', title: '사회와 문화', duration: '10:00', videoId: '', isPremium: false, checkItems: ['사회', '문화'], sections: [{ type: 'info-box', content: '한국 사회와 문화를 배웁니다.' }, { type: 'heading', level: 2, content: '사회' }, { type: 'text', content: '정부, 법, 권리, 의무, 교육, 환경, 사회, 문화' }, { type: 'heading', level: 2, content: '한국 문화' }, { type: 'text', content: '한복, 명절, 설날, 추석, 태권도, 한글, 한국 영화' }] },
      { id: 'l4', title: '기술과 미래', duration: '9:45', videoId: '', isPremium: false, checkItems: ['기술', '미래'], sections: [{ type: 'info-box', content: '기술과 미래를 배웁니다.' }, { type: 'heading', level: 2, content: '기술' }, { type: 'text', content: '인공지능, 로봇, 스마트폰, 인터넷, 컴퓨터, 소프트웨어, 앱' }, { type: 'heading', level: 2, content: '미래' }, { type: 'text', content: '미래, 발전, 변화, 진화, 혁신, 가능성, 기회' }] },
      { id: 'l5', title: '인간관계와 소통', duration: '9:30', videoId: '', isPremium: false, checkItems: ['관계', '소통'], sections: [{ type: 'info-box', content: '인간관계를 배웁니다.' }, { type: 'heading', level: 2, content: '관계' }, { type: 'text', content: '친구, 지인, 동료, 선후배, 부부, 이웃, 신뢰, 우정' }, { type: 'heading', level: 2, content: '소통' }, { type: 'text', content: '이야기하다, 대화하다, 상의하다, 제안하다, 동의하다, 이해하다' }] },
      { id: 'l6', title: '의견 표현과 논의', duration: '10:15', videoId: '', isPremium: false, checkItems: ['의견', '논의'], sections: [{ type: 'info-box', content: '의견을 표현하는 방법을 배웁니다.' }, { type: 'heading', level: 2, content: '의견 표현' }, { type: 'text', content: '제 생각에는, 저는 이렇게 생각해요, 개인적으로는, 내 의견은' }, { type: 'heading', level: 2, content: '논의' }, { type: 'text', content: '그렇군요, 정확히 맞아요, 뭔가 다르게 생각해요, 하지만, 게다가' }] },
      { id: 'l7', title: '연애와 결혼', duration: '9:00', videoId: '', isPremium: false, checkItems: ['연애', '결혼'], sections: [{ type: 'info-box', content: '연애와 결혼을 배웁니다.' }, { type: 'heading', level: 2, content: '연애' }, { type: 'text', content: '좋아하다, 사랑하다, 남자친구, 여자친구, 만나다, 헤어지다' }, { type: 'heading', level: 2, content: '결혼' }, { type: 'text', content: '결혼, 신랑, 신부, 결혼식, 약혼, 신혼부부' }] },
      { id: 'l8', title: '환경과 지속가능성', duration: '9:30', videoId: '', isPremium: false, checkItems: ['환경', '지속가능'], sections: [{ type: 'info-box', content: '환경을 배웁니다.' }, { type: 'heading', level: 2, content: '환경' }, { type: 'text', content: '자연, 지구, 공기, 물, 숲, 나무, 오염, 쓰레기' }, { type: 'heading', level: 2, content: '지속가능성' }, { type: 'text', content: '재활용하다, 에너지 절약, 태양광, 친환경, 보호하다' }] },
      { id: 'l9', title: '예술과 창의성', duration: '9:15', videoId: '', isPremium: false, checkItems: ['예술', '창의성'], sections: [{ type: 'info-box', content: '예술과 창의성을 배웁니다.' }, { type: 'heading', level: 2, content: '예술' }, { type: 'text', content: '그림, 조각, 음악, 춤, 연극, 영화, 문학, 시' }, { type: 'heading', level: 2, content: '창의성' }, { type: 'text', content: '창의적이다, 상상력, 아이디어, 영감, 표현하다, 만들다' }] },
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
      { id: 'l1', title: '복잡한 문법과 논리', duration: '11:00', videoId: '', isPremium: false, checkItems: ['복잡한 문법', '논리'], sections: [{ type: 'info-box', content: '복잡한 문법과 논리를 배웁니다.' }, { type: 'heading', level: 2, content: '복잡한 문법' }, { type: 'text', content: '비록...지만, 설령...도, 때문에, 그러므로, ...을/를 막론하고' }, { type: 'heading', level: 2, content: '논리' }, { type: 'text', content: '따라서, 그러나, 반대로, 요약하면, 결론적으로, 이와 같이' }] },
      { id: 'l2', title: '지적인 논의와 분석', duration: '11:30', videoId: '', isPremium: false, checkItems: ['분석', '비평'], sections: [{ type: 'info-box', content: '분석과 비평을 배웁니다.' }, { type: 'heading', level: 2, content: '분석' }, { type: 'text', content: '분석하다, 검토하다, 조사하다, 비교하다, 대조하다, 평가하다' }, { type: 'heading', level: 2, content: '비평' }, { type: 'text', content: '비판하다, 긍정적이다, 부정적이다, 객관적이다, 타당하다' }] },
      { id: 'l3', title: '학문적 글쓰기', duration: '11:45', videoId: '', isPremium: false, checkItems: ['학술', '에세이'], sections: [{ type: 'info-box', content: '학문적 글쓰기를 배웁니다.' }, { type: 'heading', level: 2, content: '학술' }, { type: 'text', content: '논문, 학위, 연구, 발표, 인용, 참고문헌, 가설, 결과' }, { type: 'heading', level: 2, content: '구조' }, { type: 'text', content: '서론, 본론, 결론, 주제문, 근거, 반박, 요점' }] },
      { id: 'l4', title: '정치와 경제', duration: '11:15', videoId: '', isPremium: false, checkItems: ['정치', '경제'], sections: [{ type: 'info-box', content: '정치와 경제를 배웁니다.' }, { type: 'heading', level: 2, content: '정치' }, { type: 'text', content: '민주주의, 공화제, 독재, 국회, 투표, 정책, 정치인, 선거' }, { type: 'heading', level: 2, content: '경제' }, { type: 'text', content: '자본주의, 시장, 경제학, 재정, 투자, 주식, 회사채, 경기' }] },
      { id: 'l5', title: '철학과 윤리', duration: '11:30', videoId: '', isPremium: false, checkItems: ['철학', '윤리'], sections: [{ type: 'info-box', content: '철학과 윤리를 배웁니다.' }, { type: 'heading', level: 2, content: '철학' }, { type: 'text', content: '존재, 의식, 진리, 가치, 정의, 자유, 인간성, 영혼' }, { type: 'heading', level: 2, content: '윤리' }, { type: 'text', content: '도덕, 윤리, 책임, 양심, 의무, 선, 악, 올바름' }] },
      { id: 'l6', title: '문학과 비평', duration: '11:00', videoId: '', isPremium: false, checkItems: ['문학', '비평'], sections: [{ type: 'info-box', content: '문학과 비평을 배웁니다.' }, { type: 'heading', level: 2, content: '문학' }, { type: 'text', content: '소설, 단편소설, 시, 희곡, 에세이, 자전, 기행문, 판타지' }, { type: 'heading', level: 2, content: '비평 기법' }, { type: 'text', content: '상징, 은유, 풍자, 아이러니, 캐릭터 분석, 주제, 플롯' }] },
      { id: 'l7', title: '과학과 기술', duration: '11:15', videoId: '', isPremium: false, checkItems: ['과학', '기술'], sections: [{ type: 'info-box', content: '과학과 기술을 배웁니다.' }, { type: 'heading', level: 2, content: '과학' }, { type: 'text', content: '물리학, 화학, 생물학, 유전자, 세포, 원자, 분자, 에너지' }, { type: 'heading', level: 2, content: '첨단기술' }, { type: 'text', content: '인공지능, 빅데이터, 클라우드, 블록체인, 사물인터넷, 가상현실' }] },
      { id: 'l8', title: '국제관계와 외교', duration: '11:30', videoId: '', isPremium: false, checkItems: ['외교', '국제'], sections: [{ type: 'info-box', content: '국제관계와 외교를 배웁니다.' }, { type: 'heading', level: 2, content: '외교' }, { type: 'text', content: '외교, 대사, 조약, 협상, 합의, 분쟁, 중재, 평화' }, { type: 'heading', level: 2, content: '국제 이슈' }, { type: 'text', content: '인권, 난민, 테러, 제재, 핵 문제, 무역 분쟁, 기후변화' }] },
      { id: 'l9', title: '개인 성장과 자기계발', duration: '11:00', videoId: '', isPremium: false, checkItems: ['성장', '자기계발'], sections: [{ type: 'info-box', content: '개인 성장을 배웁니다.' }, { type: 'heading', level: 2, content: '성장' }, { type: 'text', content: '발전하다, 성장하다, 성숙하다, 개선하다, 진화하다, 극복하다' }, { type: 'heading', level: 2, content: '자기계발' }, { type: 'text', content: '학습, 노력, 열정, 의지, 동기, 실패, 성공, 교훈' }] },
      { id: 'l10', title: '미디어와 커뮤니케이션', duration: '11:15', videoId: '', isPremium: false, checkItems: ['미디어', '소통'], sections: [{ type: 'info-box', content: '미디어와 소통을 배웁니다.' }, { type: 'heading', level: 2, content: '미디어' }, { type: 'text', content: '뉴스, 기자, 언론, 신문, 방송, 라디오, 소셜 미디어, 유튜브' }, { type: 'heading', level: 2, content: '소통 전략' }, { type: 'text', content: '메시지, 타겟, 청중, 영향력, 확산, 바이럴, 캠페인, 브랜딩' }] },
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
