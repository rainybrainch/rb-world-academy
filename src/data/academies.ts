// オールアカデミー - 10アカデミーマスターデータ

export interface Academy {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  courseIds: string[]; // コースID配列
}

export const academies: Academy[] = [
  {
    id: 'academy-life',
    title: 'ライフアカデミー',
    icon: '❤️',
    description: 'ライフスキル、健康、メンタルヘルス、自己啓発に関するコース',
    color: '#FF6B9D',
    courseIds: [
      'love-intro-001',
      'food-alcohol-001',
    ],
  },
  {
    id: 'academy-language',
    title: '語学アカデミー',
    icon: '🌍',
    description: '多言語学習コース。12言語対応の包括的な言語学習',
    color: '#4ECDC4',
    courseIds: [], // 既存の言語学習コースと連携
  },
  {
    id: 'academy-world',
    title: '世界アカデミー',
    icon: '🌎',
    description: '各国の文化、地理、歴史を学べるアカデミー',
    color: '#45B7D1',
    courseIds: [],
  },
  {
    id: 'academy-subject',
    title: '学問アカデミー',
    icon: '🧠',
    description: '数学、科学、哲学など基礎学問を深掘りするコース',
    color: '#96CEB4',
    courseIds: [],
  },
  {
    id: 'academy-hobby',
    title: '趣味・教養アカデミー',
    icon: '🎨',
    description: 'アート、音楽、文化教養など人生を豊かにするコース',
    color: '#FFEAA7',
    courseIds: [
      'tarot-intro-001',
      'singing-intro-001',
    ],
  },
  {
    id: 'academy-money',
    title: 'お金アカデミー',
    icon: '💰',
    description: '金融リテラシー、投資、家計管理を学ぶアカデミー',
    color: '#FFD93D',
    courseIds: [],
  },
  {
    id: 'academy-ai-it',
    title: 'IT・AIアカデミー',
    icon: '💻',
    description: 'プログラミング、AI、テクノロジーの最新スキルを習得',
    color: '#6C5CE7',
    courseIds: [
      'ai-intro-001',
      'claude-code-intro-001',
    ],
  },
  {
    id: 'academy-business',
    title: 'ビジネスアカデミー',
    icon: '💼',
    description: 'ビジネススキル、営業、マネジメント、起業を学べるコース',
    color: '#A29BFE',
    courseIds: [
      'cloudworks-basic-001',
    ],
  },
  {
    id: 'academy-qualification',
    title: '資格アカデミー',
    icon: '📖',
    description: '各種資格取得に向けた試験対策コース',
    color: '#74B9FF',
    courseIds: [],
  },
  {
    id: 'academy-rb',
    title: 'RBアカデミー',
    icon: '🌳',
    description: 'RAINYBRAIN公式のスペシャルアカデミー',
    color: '#55EFC4',
    courseIds: [],
  },
];

// アカデミーID でアカデミー を取得
export function getAcademy(academyId: string): Academy | null {
  return academies.find(a => a.id === academyId) ?? null;
}

// すべてのアカデミーを取得
export function getAllAcademies(): Academy[] {
  return academies;
}

// アカデミーのコースIDを取得
export function getAcademyCourseIds(academyId: string): string[] {
  const academy = getAcademy(academyId);
  return academy?.courseIds ?? [];
}
