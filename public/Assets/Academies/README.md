# Academy Assets

各アカデミー専用のブランド素材を管理します。

## フォルダ構成

```
Academies/
├── life/              ライフアカデミー
├── language/          語学アカデミー
├── world/             世界アカデミー
├── subject/           学問アカデミー
├── hobby/             趣味・教養アカデミー
├── money/             お金アカデミー
├── it-ai/             IT・AIアカデミー
├── business/          ビジネスアカデミー
├── qualification/     資格アカデミー
└── rb/                RBアカデミー
```

## 各アカデミーフォルダの構成

### 格納予定ファイル

- `icon.png` - アカデミー一覧・アプリ・Web で使用
- `banner.png` - 横長バナー
- `cover.png` - 紹介画像
- `thumbnail.png` - SNS・カード表示用

## 命名ルール

| ファイル名 | 用途 | 推奨サイズ |
|---|---|---|
| icon.png | アカデミー一覧・アプリ・Web で使用 | 256x256px or 512x512px |
| banner.png | 横長バナー | 1200x400px or 800x300px |
| cover.png | 紹介画像 | 1200x600px or 800x600px |
| thumbnail.png | SNS・カード表示用 | 200x200px or 400x400px |

## 参照方法

Academy Engine や Web サイトから以下のパスで参照：

```
/Assets/Academies/{academyId}/{filename}.png
```

例：
```
/Assets/Academies/life/icon.png
/Assets/Academies/it-ai/banner.png
/Assets/Academies/business/thumbnail.png
```

## 注意事項

- 各ファイルは PNG 形式を推奨（WebP も可）
- 既存ファイルは削除しない
- 新規追加は各アカデミーフォルダの README.md を確認後に行う
