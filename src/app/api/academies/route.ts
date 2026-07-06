import { NextResponse } from 'next/server';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const ACADEMIES_PATH = 'C:\\Users\\fukuf\\OneDrive\\画像\\オールアカデミー\\Academies';

// アカデミーのマッピング（フォルダ名 → メタデータ）
const academyMetadata: Record<string, { id: string; icon: string; description: string; color: string }> = {
  '❤️ ライフアカデミー': {
    id: 'life',
    icon: '❤️',
    description: 'ライフスキル、健康、メンタルヘルスに関するコース',
    color: '#FF6B9D',
  },
  '🌍 語学アカデミー': {
    id: 'language',
    icon: '🌍',
    description: '多言語学習コース',
    color: '#4ECDC4',
  },
  '🌎 世界アカデミー': {
    id: 'world',
    icon: '🌎',
    description: '各国の文化、地理、歴史を学べるアカデミー',
    color: '#45B7D1',
  },
  '🎓 学問アカデミー': {
    id: 'subject',
    icon: '🎓',
    description: '数学、科学、哲学など基礎学問を深掘りするコース',
    color: '#96CEB4',
  },
  '🎨 趣味・教養アカデミー': {
    id: 'hobby',
    icon: '🎨',
    description: '趣味と教養を深める多様なコース',
    color: '#FFE66D',
  },
  '💰 お金アカデミー': {
    id: 'money',
    icon: '💰',
    description: '経済、投資、ファイナンシャルリテラシー',
    color: '#95E1D3',
  },
  '💻 IT・AIアカデミー': {
    id: 'it',
    icon: '💻',
    description: 'IT、AI、プログラミング技術',
    color: '#6C5CE7',
  },
  '💼 ビジネスアカデミー': {
    id: 'business',
    icon: '💼',
    description: 'ビジネススキル、経営、キャリア',
    color: '#A29BFE',
  },
  '📜 資格アカデミー': {
    id: 'credential',
    icon: '📜',
    description: '資格取得に向けた学習',
    color: '#74B9FF',
  },
  '🌳 RBアカデミー': {
    id: 'rb',
    icon: '🌳',
    description: 'RAINYBRAIN独自コンテンツ',
    color: '#55EFC4',
  },
};

export async function GET() {
  try {
    const academies: any[] = [];

    // Academiesディレクトリを読み込む
    const entries = readdirSync(ACADEMIES_PATH);

    for (const entry of entries) {
      const fullPath = join(ACADEMIES_PATH, entry);
      const stat = statSync(fullPath);

      if (!stat.isDirectory()) continue;

      // アカデミーメタデータを取得
      const metadata = academyMetadata[entry];
      if (!metadata) continue;

      const apps: any[] = [];

      // アプリディレクトリを読み込む
      const appEntries = readdirSync(fullPath);

      for (const appEntry of appEntries) {
        const appPath = join(fullPath, appEntry);
        const appStat = statSync(appPath);

        if (!appStat.isDirectory()) continue;

        // Skip if it's Courses or numbered folders (old format)
        if (appEntry === 'Courses' || /^\d+_/.test(appEntry)) continue;

        // 32フォルダを読み込む
        const folders: string[] = [];
        try {
          const folderEntries = readdirSync(appPath);
          for (const folderEntry of folderEntries) {
            const folderPath = join(appPath, folderEntry);
            const folderStat = statSync(folderPath);
            if (folderStat.isDirectory()) {
              folders.push(folderEntry);
            }
          }
        } catch (err) {
          console.error(`Error reading app folders: ${appPath}`, err);
        }

        apps.push({
          id: appEntry.replace('アプリ', ''),
          name: appEntry,
          folderCount: folders.length,
          folders: folders.sort(),
        });
      }

      if (apps.length > 0) {
        academies.push({
          id: metadata.id,
          name: entry,
          icon: metadata.icon,
          description: metadata.description,
          color: metadata.color,
          appCount: apps.length,
          apps: apps.sort((a, b) => a.name.localeCompare(b.name, 'ja')),
        });
      }
    }

    return NextResponse.json({
      academies: academies.sort((a, b) => Object.keys(academyMetadata).indexOf(a.name) - Object.keys(academyMetadata).indexOf(b.name)),
      totalAcademies: academies.length,
      totalApps: academies.reduce((sum, a) => sum + a.appCount, 0),
    });
  } catch (error) {
    console.error('Error reading Academies:', error);
    return NextResponse.json(
      { error: 'Failed to read Academies folder', details: String(error) },
      { status: 500 }
    );
  }
}
