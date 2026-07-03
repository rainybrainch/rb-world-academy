# Image Optimization Standards

**Version**: 1.0  
**Date**: 2026-07-03  
**Status**: MANDATORY STANDARD  
**Applies To**: All Academy Images

---

## 目的

オールアカデミーのすべての画像について、**ファイルサイズ削減と画質維持のバランス**を取ることで、以下を実現します：

- ✅ ページ表示速度の向上
- ✅ Vercel 転送量削減
- ✅ ストレージ容量の削減
- ✅ Lighthouse スコア改善
- ✅ モバイル環境での表示速度向上

---

## 適用範囲

### 必須対象（全画像）

| カテゴリ | 対象 | サイズ目安 |
|---|---|---|
| **Academy Icons** | 各アカデミーアイコン | 256x256px 以下 |
| **App Icons** | 各アプリアイコン | 64x64px 以下 |
| **Course Icons** | コースアイコン（31_コースアイコン） | 256x256px 以下 |
| **BOOTH Icons** | BOOTH販売アイコン（32_BOOTH販売アイコン） | 200x200px 以下 |
| **Teaching Materials** | 講義画像・スライド | 1200px 幅以下 |
| **Cover Pages** | 表紙（01_表紙） | 1200x1600px 以下 |
| **Contents** | 目次（02_はじめに、03_全体目次） | 1200px 幅以下 |
| **Lessons** | 講義画像（08-29_講義01-22） | 1200px 幅以下 |
| **Certificate** | 修了証（30_賞状） | 1200x850px 以下 |
| **Other Web Images** | サイト内のすべての画像 | - |

---

## 実装標準

### 1. 圧縮レベル

#### PNG 画像

| 用途 | 圧縮率 | 品質 | ファイルサイズ目安 |
|---|---|---|---|
| **Icon（< 100x100px）** | 最大圧縮 | 95%+ | 5-20 KB |
| **Thumbnail（100-300px）** | 高圧縮 | 92%+ | 20-50 KB |
| **Standard（300-1200px）** | 標準 | 85-90% | 50-200 KB |
| **High Quality（1200px以上）** | 低圧縮 | 80%+ | 200-500 KB |

#### 推奨ツール

- **ImageOptim**（Mac）
- **PNGQuant**（CLI）
- **Squoosh**（Web UI）
- **Imagemin**（Node.js）

### 2. メタデータ削除

すべての PNG 画像から以下を削除：

- [ ] EXIF データ
- [ ] ICC プロファイル
- [ ] ガンマ情報
- [ ] コメント
- [ ] その他の埋め込み情報

**コマンド例**（ImageMagick）:
```bash
convert input.png -strip output.png
```

### 3. 最適化チェックリスト

#### Before 最適化

```bash
# ファイルサイズ確認
ls -lh image.png

# メタデータ確認
identify -verbose image.png

# Exif データ確認
exiftool image.png
```

#### After 最適化

```bash
# ファイルサイズ確認（削減率の確認）
ls -lh image.png

# メタデータなし確認
identify -verbose image.png | grep -i "profiles"

# Web 表示確認
# ブラウザで画質確認
```

### 4. 目標削減率

| 画像タイプ | 目標削減率 | 最小品質 |
|---|---|---|
| **Icon** | 40-60% | 95% |
| **Thumbnail** | 30-50% | 90% |
| **Standard** | 25-40% | 85% |
| **High Quality** | 15-30% | 80% |

**例**：
- 元サイズ 500 KB → 目標 300-350 KB（40-50% 削減）
- 元サイズ 100 KB → 目標 50-70 KB（30-50% 削減）

---

## 実装フロー

### 画像追加時

```
1. 画像ファイル作成・確保
   ↓
2. リサイズ（必要に応じて）
   - アイコン: 256x256px 以下に統一
   - 教材画像: 1200px 幅に統一
   ↓
3. 圧縮・最適化
   - PNGQuant or ImageOptim で最適化
   - メタデータ削除
   ↓
4. 品質確認
   - ブラウザで表示確認
   - Lighthouse でスコア確認
   ↓
5. フォルダに配置
   - Assets/Academies/ または Courses/ へ
   ↓
6. Git コミット
   - コミットメッセージに「Image optimization」を記載
```

### 画像更新時

```
1. 既存画像をダウンロード
   ↓
2. 編集・修正
   ↓
3. 圧縮・最適化（必須）
   - 最適化処理は省略不可
   ↓
4. 品質確認
   ↓
5. 上書き保存
   ↓
6. Git コミット
```

---

## 推奨ツール・コマンド

### CLI ツール

#### PNGQuant（推奨）
```bash
# 単一ファイル最適化
pngquant --quality=85-90 --output optimized.png input.png

# ディレクトリ一括最適化
for f in *.png; do pngquant --quality=85-90 --output "$f" "$f"; done
```

#### ImageMagick（メタデータ削除）
```bash
# メタデータ削除 + 圧縮
convert input.png -strip -quality 85 output.png

# 複数ファイル処理
mogrify -strip -quality 85 *.png
```

#### Imagemin（Node.js）
```bash
npm install imagemin imagemin-pngquant

# JavaScript で自動化
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  await imagemin(['images/*.png'], {
    destination: 'images/optimized',
    plugins: [
      imageminPngquant({
        quality: [0.85, 0.90]
      })
    ]
  });
})();
```

### Web UI ツール

- **Squoosh**: https://squoosh.app/ (Google 公式)
- **Tinypng**: https://tinypng.com/ (PNG/JPG 圧縮)
- **ImageOptimizer**: https://www.imageoptimizer.net/

---

## ファイルサイズ基準

### 許容最大サイズ

| 用途 | 最大サイズ | 理由 |
|---|---|---|
| **Icon（各アカデミー）** | 50 KB | Vercel 転送量最小化 |
| **App Icon** | 20 KB | ページ読み込み速度 |
| **Course Thumbnail** | 100 KB | Lighthouse スコア |
| **Teaching Material** | 300 KB | Mobile 環境対応 |
| **High Res Image** | 500 KB | 絶対最大 |

**基準超過時の対応**：
- さらなる圧縮を試みる
- 画像解像度を下げる
- WebP 形式への変換を検討

---

## Lighthouse スコア改善

### 最適化前後の比較

| メトリクス | 最適化前 | 最適化後 | 目標 |
|---|---|---|---|
| **Largest Contentful Paint** | 3.5s | 2.0s < | 2.5s 以下 |
| **Cumulative Layout Shift** | 0.15 | 0.05 < | 0.1 以下 |
| **First Input Delay** | 150ms | 80ms < | 100ms 以下 |
| **Lighthouse Score** | 65 | 85+ | 90+ |

### 確認方法

```bash
# ローカル確認
npm run build
npm run start

# Lighthouse CLI で確認
npm install -g @lhci/cli@latest
lhci autorun
```

---

## チェックリスト

### 画像追加・更新時

- [ ] ファイルサイズ確認（元サイズ記録）
- [ ] 画像リサイズ（必要に応じて）
- [ ] PNGQuant で圧縮
- [ ] ImageMagick でメタデータ削除
- [ ] ブラウザで品質確認
- [ ] 削減率確認（目標達成）
- [ ] Lighthouse スコア確認
- [ ] Git コミット
- [ ] 本番デプロイ後に検証

### デプロイ前

- [ ] すべての画像ファイルが最適化済み
- [ ] メタデータがすべて削除済み
- [ ] ファイルサイズが基準以下
- [ ] Lighthouse スコア 90 以上
- [ ] モバイルでの表示確認
- [ ] 画像の品質低下がないか確認

---

## 例：実践的な最適化手順

### 例 1：アプリアイコン（64x64px PNG）

```bash
# 元ファイル確認
ls -lh app-icon.png
# -rw-r--r-- 1 user staff 85K

# ステップ1：PNGQuant で圧縮
pngquant --quality=90-95 --output app-icon.png app-icon.png

# ステップ2：メタデータ削除
convert app-icon.png -strip app-icon.png

# ステップ3：結果確認
ls -lh app-icon.png
# -rw-r--r-- 1 user staff 18K ← 80% 削減

# ステップ4：品質確認
# ブラウザで表示 OK
```

### 例 2：教材画像（1200px 標準）

```bash
# 元ファイル確認
ls -lh lesson-image.png
# -rw-r--r-- 1 user staff 1.2M

# ステップ1：リサイズ（必要に応じて）
convert lesson-image.png -resize 1200x lesson-image.png

# ステップ2：圧縮
pngquant --quality=85-88 --output lesson-image.png lesson-image.png

# ステップ3：メタデータ削除
convert lesson-image.png -strip lesson-image.png

# 結果確認
ls -lh lesson-image.png
# -rw-r--r-- 1 user staff 380K ← 68% 削減
```

---

## 監視と改善

### 定期確認（月 1 回）

```bash
# すべての PNG ファイルサイズ確認
find . -name "*.png" -exec ls -lh {} \; | awk '{print $5, $9}' | sort -rh

# メタデータのあるファイル検出
find . -name "*.png" -exec identify -verbose {} \; | grep -i "profiles"
```

### Lighthouse スコア監視

```bash
# CI/CD で自動チェック
npm run lighthouse:ci

# 警告: スコア 85 未満の場合は警告
# エラー: スコア 80 未満の場合はビルド失敗
```

---

## 例外と特別対応

### WebP 形式への検討

PNG が大きすぎる場合、WebP への変換を検討：

```bash
# WebP 変換（30-40% さらに削減可能）
cwebp -q 85 -o output.webp input.png
```

ただし以下の場合は PNG 維持：
- iOS 14 未満対応が必要
- メタデータ保持が必須
- アイコン等の小さな画像

### 高解像度（Retina）対応

- 2x 高解像度画像の最適化も必須
- 最適化後でも元の 2x サイズは維持
- モバイル版と PC 版で画像を分離検討

---

## 不変条件（Sacred Rule）

以下の項目は**変更・例外禁止**：

| 項目 | 基準 | 理由 |
|---|---|---|
| **メタデータ削除** | 必須 | セキュリティ・ファイルサイズ |
| **品質確認** | 必須 | ユーザー体験の維持 |
| **Lighthouse >= 85** | 目標 | 検索エンジン最適化 |
| **モバイル確認** | 必須 | 対応デバイス最適化 |

---

## ドキュメント・コミット例

### コミットメッセージ

```
Optimize: Reduce image file sizes for performance

- Compress all PNG images with pngquant (quality 85-90)
- Remove metadata (EXIF, ICC profiles) from all images
- Academy icons: 85KB → 18KB (79% reduction)
- Course thumbnails: 1.2MB → 380KB (68% reduction)
- Lighthouse score improved: 65 → 87

Benefits:
- Faster page load times
- Reduced Vercel bandwidth usage
- Improved mobile experience
- Better Lighthouse scores

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

### PR 説明文

```markdown
## 画像最適化実装

### 概要
すべての Academy 画像を圧縮・最適化し、ファイルサイズ削減と画質維持のバランスを実現。

### 対象画像
- アカデミーアイコン（256x256px）
- アプリアイコン（64x64px）
- 教材画像（1200px 標準）
- コースアイコン・賞状

### 削減実績
- 総ファイルサイズ: 150MB → 45MB (70% 削減)
- Lighthouse スコア: 65 → 87
- 平均読み込み時間: 3.5s → 2.0s

### チェックリスト
- [x] すべての PNG 圧縮完了
- [x] メタデータ削除完了
- [x] ブラウザで品質確認
- [x] Lighthouse 85+ 達成
- [x] モバイル表示確認
```

---

## サポートリソース

| リソース | URL | 用途 |
|---|---|---|
| **PNGQuant Official** | https://pngquant.org/ | CLI ツール |
| **Squoosh App** | https://squoosh.app/ | Web UI 圧縮 |
| **ImageMagick Docs** | https://imagemagick.org/ | コマンドリファレンス |
| **Lighthouse CI** | https://github.com/GoogleChrome/lighthouse-ci | CI/CD 統合 |
| **Web Vitals** | https://web.dev/vitals/ | パフォーマンス指標 |

---

## バージョン履歴

| バージョン | 日付 | 内容 |
|---|---|---|
| v1.0 | 2026-07-03 | **初版・正式採用** |

---

**Adopted**: 2026-07-03  
**Status**: MANDATORY FOR ALL IMAGE OPERATIONS  
**Enforced**: All Academy content projects

すべての画像追加・更新時に、このスタンダードを必ず遵守してください。
