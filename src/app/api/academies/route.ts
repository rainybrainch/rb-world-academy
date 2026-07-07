import { NextResponse } from 'next/server';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

// ローカル開発環境と本番環境の両方に対応
const getAcademiesPath = () => {
  // ローカル開発時
  if (process.env.NODE_ENV === 'development') {
    const localPath = 'C:\\Users\\fukuf\\OneDrive\\画像\\オールアカデミー\\Academies';
    try {
      statSync(localPath);
      return localPath;
    } catch (e) {
      console.warn(`Local path not found: ${localPath}`);
    }
  }

  // Vercel本番環境用の代替パス
  const vercelPath = '/tmp/academies'; // キャッシュフォルダ
  const projectPath = join(process.cwd(), '..', '..', 'academies-data'); // プロジェクト外部参照

  try {
    if (statSync(vercelPath)) return vercelPath;
  } catch (e) {
    // パスなし
  }

  // フォールバック
  return null;
};

const ACADEMIES_PATH = getAcademiesPath();

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
    // パスチェック
    if (!ACADEMIES_PATH) {
      return NextResponse.json(
        {
          error: 'Academies folder path not found',
          details: 'Both local and Vercel paths are inaccessible',
          environment: process.env.NODE_ENV,
          cwd: process.cwd(),
        },
        { status: 503 }
      );
    }

    const academies: any[] = [];

    // Academiesディレクトリを読み込む
    let entries: string[];
    try {
      entries = readdirSync(ACADEMIES_PATH);
    } catch (readError) {
      console.error(`Failed to read ACADEMIES_PATH: ${ACADEMIES_PATH}`, readError);
      return NextResponse.json(
        {
          error: 'Failed to read Academies folder',
          path: ACADEMIES_PATH,
          message: readError instanceof Error ? readError.message : String(readError),
          environment: process.env.NODE_ENV,
        },
        { status: 500 }
      );
    }

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
      source: 'filesystem',
    });
  } catch (error) {
    console.error('Error reading Academies:', error);

    // 本番環境ではフォールバックデータを返す
    if (process.env.NODE_ENV === 'production') {
      console.warn('Returning fallback mock data for production');
      return NextResponse.json({
        academies: [
          {
            id: 'life',
            name: '❤️ ライフアカデミー',
            icon: '❤️',
            description: 'ライフスキル、健康、メンタルヘルスに関するコース',
            color: '#FF6B9D',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
          {
            id: 'language',
            name: '🌍 語学アカデミー',
            icon: '🌍',
            description: '多言語学習コース',
            color: '#4ECDC4',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
          {
            id: 'world',
            name: '🌎 世界アカデミー',
            icon: '🌎',
            description: '各国の文化、地理、歴史を学べるアカデミー',
            color: '#45B7D1',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
          {
            id: 'subject',
            name: '🎓 学問アカデミー',
            icon: '🎓',
            description: '数学、科学、哲学など基礎学問を深掘りするコース',
            color: '#96CEB4',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
          {
            id: 'hobby',
            name: '🎨 趣味・教養アカデミー',
            icon: '🎨',
            description: '趣味と教養を深める多様なコース',
            color: '#FFE66D',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
          {
            id: 'money',
            name: '💰 お金アカデミー',
            icon: '💰',
            description: '経済、投資、ファイナンシャルリテラシー',
            color: '#95E1D3',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
          {
            id: 'it',
            name: '💻 IT・AIアカデミー',
            icon: '💻',
            description: 'IT、AI、プログラミング技術',
            color: '#6C5CE7',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
          {
            id: 'business',
            name: '💼 ビジネスアカデミー',
            icon: '💼',
            description: 'ビジネススキル、経営、キャリア',
            color: '#A29BFE',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
          {
            id: 'credential',
            name: '📜 資格アカデミー',
            icon: '📜',
            description: '資格取得に向けた学習',
            color: '#74B9FF',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
          {
            id: 'rb',
            name: '🌳 RBアカデミー',
            icon: '🌳',
            description: 'RAINYBRAIN独自コンテンツ',
            color: '#55EFC4',
            appCount: 0,
            apps: [],
            source: 'mock',
          },
        ],
        totalAcademies: 10,
        totalApps: 0,
        source: 'fallback-mock',
        error: 'Could not read Academies folder, returning empty structure',
        details: error instanceof Error ? error.message : String(error),
      });
    }

    return NextResponse.json(
      {
        error: 'Failed to read Academies folder',
        details: error instanceof Error ? error.message : String(error),
        environment: process.env.NODE_ENV,
        path: ACADEMIES_PATH,
      },
      { status: 500 }
    );
  }
}
