// Academy Applications (Apps)
// V2.0 hierarchy: Academy → App → Course

export interface AppInfo {
  id: string;
  academyId: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
  courseIds: string[];
}

// World Academy Apps (世界アカデミー)
export const worldApps: AppInfo[] = [
  {
    id: 'app-world-japan',
    academyId: 'academy-world',
    title: '日本',
    description: '日本の文化・地理・歴史を学ぶ',
    order: 1,
    courseIds: [],
  },
  {
    id: 'app-world-usa',
    academyId: 'academy-world',
    title: 'アメリカ',
    description: 'アメリカの政治・経済・文化',
    order: 2,
    courseIds: [],
  },
  {
    id: 'app-world-china',
    academyId: 'academy-world',
    title: '中国',
    description: '中国の歴史・文化・経済',
    order: 3,
    courseIds: [],
  },
  {
    id: 'app-world-korea',
    academyId: 'academy-world',
    title: '韓国',
    description: '韓国の文化・歴史・現在',
    order: 4,
    courseIds: [],
  },
  {
    id: 'app-world-taiwan',
    academyId: 'academy-world',
    title: '台湾',
    description: '台湾の文化と歴史',
    order: 5,
    courseIds: [],
  },
  {
    id: 'app-world-india',
    academyId: 'academy-world',
    title: 'インド',
    description: 'インドの文化・宗教・経済',
    order: 6,
    courseIds: [],
  },
  {
    id: 'app-world-uk',
    academyId: 'academy-world',
    title: 'イギリス',
    description: 'イギリスの歴史・文化・政治',
    order: 7,
    courseIds: [],
  },
  {
    id: 'app-world-canada',
    academyId: 'academy-world',
    title: 'カナダ',
    description: 'カナダの文化・地理・経済',
    order: 8,
    courseIds: [],
  },
  {
    id: 'app-world-australia',
    academyId: 'academy-world',
    title: 'オーストラリア',
    description: 'オーストラリアの文化・自然',
    order: 9,
    courseIds: [],
  },
  {
    id: 'app-world-france',
    academyId: 'academy-world',
    title: 'フランス',
    description: 'フランスの文化・歴史・美術',
    order: 10,
    courseIds: [],
  },
  {
    id: 'app-world-germany',
    academyId: 'academy-world',
    title: 'ドイツ',
    description: 'ドイツの歴史・文化・哲学',
    order: 11,
    courseIds: [],
  },
  {
    id: 'app-world-italy',
    academyId: 'academy-world',
    title: 'イタリア',
    description: 'イタリアの美術・歴史・文化',
    order: 12,
    courseIds: [],
  },
  {
    id: 'app-world-russia',
    academyId: 'academy-world',
    title: 'ロシア',
    description: 'ロシアの歴史・文化・政治',
    order: 13,
    courseIds: [],
  },
  {
    id: 'app-world-mexico',
    academyId: 'academy-world',
    title: 'メキシコ',
    description: 'メキシコの文化・歴史・民族',
    order: 14,
    courseIds: [],
  },
  {
    id: 'app-world-brazil',
    academyId: 'academy-world',
    title: 'ブラジル',
    description: 'ブラジルの文化・音楽・自然',
    order: 15,
    courseIds: [],
  },
  {
    id: 'app-world-argentina',
    academyId: 'academy-world',
    title: 'アルゼンチン',
    description: 'アルゼンチンの文化・歴史',
    order: 16,
    courseIds: [],
  },
  {
    id: 'app-world-indonesia',
    academyId: 'academy-world',
    title: 'インドネシア',
    description: 'インドネシアの文化・多様性',
    order: 17,
    courseIds: [],
  },
  {
    id: 'app-world-philippines',
    academyId: 'academy-world',
    title: 'フィリピン',
    description: 'フィリピンの文化・歴史',
    order: 18,
    courseIds: [],
  },
  {
    id: 'app-world-malaysia',
    academyId: 'academy-world',
    title: 'マレーシア',
    description: 'マレーシアの文化・経済',
    order: 19,
    courseIds: [],
  },
  {
    id: 'app-world-singapore',
    academyId: 'academy-world',
    title: 'シンガポール',
    description: 'シンガポールの都市文化・経済',
    order: 20,
    courseIds: [],
  },
  {
    id: 'app-world-turkey',
    academyId: 'academy-world',
    title: 'トルコ',
    description: 'トルコの文化・歴史・橋渡し',
    order: 21,
    courseIds: [],
  },
  {
    id: 'app-world-southafrica',
    academyId: 'academy-world',
    title: '南アフリカ',
    description: '南アフリカの文化・歴史',
    order: 22,
    courseIds: [],
  },
  {
    id: 'app-world-uae',
    academyId: 'academy-world',
    title: 'UAE（ドバイ）',
    description: 'UAEの発展・文化・ビジネス',
    order: 23,
    courseIds: [],
  },
  {
    id: 'app-world-saudi',
    academyId: 'academy-world',
    title: 'サウジアラビア',
    description: 'サウジアラビアの文化・歴史',
    order: 24,
    courseIds: [],
  },
  {
    id: 'app-world-eu',
    academyId: 'academy-world',
    title: 'EU（欧州連合）',
    description: 'EUの政治・経済・統合',
    order: 25,
    courseIds: [],
  },
];

// Language Academy Apps (語学アカデミー) - 将来実装
export const languageApps: AppInfo[] = [
  // 言語別アプリ定義（22言語）
  // 今後実装
];

// All apps
export const apps: AppInfo[] = [...worldApps, ...languageApps];

// Helper functions
export function getApp(appId: string): AppInfo | null {
  return apps.find(a => a.id === appId) ?? null;
}

export function getAppsByAcademy(academyId: string): AppInfo[] {
  return apps
    .filter(a => a.academyId === academyId)
    .sort((a, b) => a.order - b.order);
}

export function getAppFolderName(appId: string): string | null {
  // Map app ID to folder name
  // e.g., "app-world-japan" → "01_日本"
  const folderMap: Record<string, string> = {
    'app-world-japan': '01_日本',
    'app-world-usa': '02_アメリカ',
    'app-world-china': '03_中国',
    'app-world-korea': '04_韓国',
    'app-world-taiwan': '05_台湾',
    'app-world-india': '06_インド',
    'app-world-uk': '07_イギリス',
    'app-world-canada': '08_カナダ',
    'app-world-australia': '09_オーストラリア',
    'app-world-france': '10_フランス',
    'app-world-germany': '11_ドイツ',
    'app-world-italy': '12_イタリア',
    'app-world-russia': '13_ロシア',
    'app-world-mexico': '14_メキシコ',
    'app-world-brazil': '15_ブラジル',
    'app-world-argentina': '16_アルゼンチン',
    'app-world-indonesia': '17_インドネシア',
    'app-world-philippines': '18_フィリピン',
    'app-world-malaysia': '19_マレーシア',
    'app-world-singapore': '20_シンガポール',
    'app-world-turkey': '21_トルコ',
    'app-world-southafrica': '22_南アフリカ',
    'app-world-uae': '23_UAE（ドバイ）',
    'app-world-saudi': '24_サウジアラビア',
    'app-world-eu': '25_EU（欧州連合）',
  };

  return folderMap[appId] ?? null;
}
