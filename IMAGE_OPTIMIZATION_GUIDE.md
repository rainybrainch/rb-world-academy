# 画像最適化 実装ガイド

**Version**: 1.0  
**Date**: 2026-07-03  
**Target**: All Academy Content Creators

---

## クイックスタート

### 最短手順（5分）

```bash
# 1. Homebrew でツール インストール（Mac）
brew install pngquant imagemagick

# 2. 単一ファイル最適化
pngquant --quality=85-90 --output optimized.png original.png
convert optimized.png -strip optimized.png

# 3. 確認
ls -lh optimized.png  # ファイルサイズ確認
```

---

## 環境構築

### Mac ユーザー

```bash
# Homebrew をインストール（未インストール時）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 最適化ツール インストール
brew install pngquant imagemagick

# 確認
pngquant --version
convert --version
```

### Windows ユーザー

#### オプション 1: ImageMagick GUI

1. https://imagemagick.org/script/download.php から ダウンロード
2. インストール
3. Windows Terminal や PowerShell で使用

#### オプション 2: WSL 環境

```bash
# WSL 内で実行
wsl --install
wsl ubuntu

# Ubuntu 内で
sudo apt-get update
sudo apt-get install pngquant imagemagick

# 確認
pngquant --version
```

### Linux ユーザー

```bash
# Ubuntu/Debian
sudo apt-get install pngquant imagemagick

# CentOS/RHEL
sudo yum install pngquant ImageMagick

# 確認
pngquant --version
```

---

## 3つの最適化方法

### 方法1：Web UI（最簡単・推奨）

**用途**: 単発画像の最適化、初心者向け

#### Squoosh（Google 公式）

1. https://squoosh.app/ にアクセス
2. 画像をドラッグ＆ドロップ
3. 右側で圧縮設定
   - Quality: 85-90
   - Effort: 6（標準）
4. ダウンロード
5. 右クリック → プロパティで メタデータ削除（または手順6へ）

#### TinyPNG

1. https://tinypng.com/ にアクセス
2. 画像をドラッグ＆ドロップ
3. 自動圧縮（メタデータも削除）
4. ダウンロード

**メリット**: クリックのみ、設定不要  
**デメリット**: 月 20 回までの制限

### 方法2：CLI ツール（推奨・自動化可能）

**用途**: 複数画像の一括最適化、自動化

#### PNGQuant（PNG 圧縮）

```bash
# 単一ファイル
pngquant --quality=85-90 --output optimized.png input.png

# ディレクトリ一括
for f in *.png; do 
  pngquant --quality=85-90 --output "$f" "$f"
done

# パイプで直接処理
pngquant --quality=85-90 < input.png > output.png
```

**オプション**:
- `--quality=85-90`: 品質レベル（85-90 推奨）
- `--speed=2`: 処理速度（1-11、デフォルト 3）
- `--output`: 出力ファイル名

#### ImageMagick（メタデータ削除）

```bash
# メタデータ削除のみ
convert input.png -strip output.png

# 圧縮 + メタデータ削除
convert input.png -strip -quality 85 -optimize output.png

# リサイズ + 圧縮 + メタデータ削除
convert input.png \
  -resize 1200x \
  -strip \
  -quality 85 \
  -optimize \
  output.png

# ディレクトリ一括処理
mogrify -strip -quality 85 -optimize *.png
```

### 方法3：自動化スクリプト（推奨・効率的）

**用途**: CI/CD 統合、大量画像処理

#### Bash スクリプト

```bash
#!/bin/bash
# optimize-images.sh

TARGET_DIR="${1:-.}"
QUALITY="${2:-85}"

echo "Optimizing PNG images in: $TARGET_DIR"
echo "Quality level: $QUALITY"

for file in "$TARGET_DIR"/**/*.png; do
  if [ -f "$file" ]; then
    echo "Processing: $file"
    
    # Backup
    cp "$file" "$file.backup"
    
    # Compress
    pngquant --quality=$QUALITY-95 --output "$file" "$file"
    
    # Remove metadata
    convert "$file" -strip "$file"
    
    # Check size reduction
    original=$(stat -f%z "$file.backup" 2>/dev/null || stat -c%s "$file.backup")
    optimized=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")
    reduction=$((100 - (optimized * 100 / original)))
    
    echo "  Reduced: $original → $optimized bytes ($reduction% reduction)"
    
    # Remove backup if successful
    if [ $? -eq 0 ]; then
      rm "$file.backup"
    fi
  fi
done

echo "✓ Optimization complete"
```

使用方法：
```bash
chmod +x optimize-images.sh
./optimize-images.sh ./images 85
```

#### Node.js スクリプト

```javascript
// optimize-images.js
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');

(async () => {
  try {
    const files = await imagemin(['images/**/*.{png,jpg}'], {
      destination: 'images-optimized',
      plugins: [
        imageminPngquant({
          quality: [0.85, 0.90]
        }),
        imageminJpegtran({
          progressive: true
        })
      ]
    });

    console.log('✓ Images optimized:');
    files.forEach(file => console.log(`  - ${file}`));
  } catch (error) {
    console.error('✗ Error:', error);
  }
})();
```

インストール・使用：
```bash
npm install imagemin imagemin-pngquant imagemin-jpegtran
node optimize-images.js
```

---

## 実行例

### 例 1：アプリアイコン最適化（64x64px）

```bash
# 入力確認
$ ls -lh app-icon.png
-rw-r--r-- 1 user staff 85K Mar  3 10:00 app-icon.png

# ステップ1：PNGQuant で圧縮
$ pngquant --quality=90-95 --output app-icon.png app-icon.png

# ステップ2：メタデータ削除
$ convert app-icon.png -strip app-icon.png

# ステップ3：結果確認
$ ls -lh app-icon.png
-rw-r--r-- 1 user staff 18K Mar  3 10:01 app-icon.png

# 削減率 = (85-18)/85 = 78.8% ✓
```

### 例 2：教材画像最適化（1200px 標準）

```bash
# 入力確認
$ ls -lh lesson-image.png
-rw-r--r-- 1 user staff 1.2M Mar  3 10:00 lesson-image.png

# ステップ1：リサイズ（必要な場合）
$ convert lesson-image.png -resize 1200x lesson-image.png

# ステップ2：PNGQuant で圧縮
$ pngquant --quality=85-88 --output lesson-image.png lesson-image.png

# ステップ3：メタデータ削除
$ convert lesson-image.png -strip lesson-image.png

# ステップ4：結果確認
$ ls -lh lesson-image.png
-rw-r--r-- 1 user staff 380K Mar  3 10:02 lesson-image.png

# 削減率 = (1.2M-380K)/1.2M = 68% ✓
```

---

## よくあるトラブルシューティング

### Q1：圧縮後に色がおかしい

**原因**: 品質が低すぎる（デフォルト 65-75）  
**解決策**: `--quality` を高める
```bash
pngquant --quality=90-95 --output output.png input.png
```

### Q2：convert コマンドが見つからない

**原因**: ImageMagick がインストールされていない  
**解決策**:
```bash
# Mac
brew install imagemagick

# Windows (WSL/Git Bash)
sudo apt-get install imagemagick

# 確認
convert --version
```

### Q3：ファイルサイズが変わらない

**原因**: すでに最適化済み、または PNG が小さすぎる  
**対応**: 既に最適状態です。スキップして OK

### Q4：エラー「no decode delegate for this image format」

**原因**: ImageMagick の設定不足  
**解決策**:
```bash
# Windows (WSL)
sudo apt-get install libmagickwand-dev

# 再インストール
brew reinstall imagemagick
```

---

## チェックリスト（画像追加時）

### Before 最適化

- [ ] 元のファイルサイズを記録
- [ ] 画像の内容・用途を確認
- [ ] 推奨サイズ内か確認
  - アイコン: 256x256px 以下
  - 教材: 1200px 以下

### Optimization

- [ ] PNGQuant で圧縮実施
  ```bash
  pngquant --quality=85-90 --output output.png input.png
  ```
- [ ] ImageMagick でメタデータ削除
  ```bash
  convert output.png -strip output.png
  ```

### After 最適化

- [ ] ファイルサイズ確認
  ```bash
  ls -lh output.png
  ```
- [ ] 削減率計算（目標達成したか）
- [ ] ブラウザで品質確認
- [ ] メタデータが削除されたか確認
  ```bash
  identify -verbose output.png | grep -i "profiles"
  ```

### Deploy 前

- [ ] ファイルサイズ基準内か
- [ ] Lighthouse スコア確認（85 以上）
- [ ] モバイルでの表示確認
- [ ] Git にコミット

---

## 自動化の推奨

### オプション 1：Git Hook 自動化

`.git/hooks/pre-commit` に以下を追加：

```bash
#!/bin/bash
# 自動的に変更された PNG を最適化

for file in $(git diff --cached --name-only | grep '\.png$'); do
  if [ -f "$file" ]; then
    pngquant --quality=85-90 --output "$file" "$file"
    convert "$file" -strip "$file"
    git add "$file"
    echo "✓ Optimized: $file"
  fi
done
```

### オプション 2：GitHub Actions 自動化

`.github/workflows/optimize-images.yml`:

```yaml
name: Optimize Images

on: [push]

jobs:
  optimize:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install tools
        run: |
          sudo apt-get install pngquant imagemagick
      - name: Optimize PNG
        run: |
          for f in $(find . -name "*.png"); do
            pngquant --quality=85-90 --output "$f" "$f"
            convert "$f" -strip "$f"
          done
      - name: Commit changes
        run: |
          git config --global user.name "Image Optimizer"
          git config --global user.email "bot@example.com"
          git add -A
          git commit -m "Optimize images" || true
          git push
```

---

## パフォーマンス測定

### Lighthouse で確認

```bash
# ローカル計測
npm run build
npm run start

# 別のターミナルで
npm install -g @lhci/cli
lhci autorun
```

### ファイルサイズ確認

```bash
# 最大ファイル 10 個を表示
find . -name "*.png" -exec ls -lh {} \; | \
  awk '{print $5, $9}' | \
  sort -rh | \
  head -10
```

---

## ドキュメント・記録例

### コミットメッセージ

```
Optimize: Reduce Academy image file sizes

- Compressed 127 PNG images using pngquant
- Removed all metadata (EXIF, ICC profiles)
- Average reduction: 65-75%
- Total: 150MB → 45MB

Impact:
- Lighthouse score: 65 → 87
- Page load time: 3.5s → 2.0s
- Mobile experience improved

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

### 最適化ログ例

```
Processing: 127 PNG files
├── 42 Academy icons (256x256px)
│   └── Average: 85KB → 18KB (79% reduction)
├── 35 App icons (64x64px)
│   └── Average: 42KB → 8KB (81% reduction)
└── 50 Teaching materials (1200px)
    └── Average: 1.2MB → 380KB (68% reduction)

Results:
✓ Total size: 150MB → 45MB (70% reduction)
✓ Lighthouse: 65 → 87 (22 point improvement)
✓ Load time: 3.5s → 2.0s (43% faster)
✓ All metadata removed
✓ Quality maintained
```

---

## リソース

| ツール | リンク | 推奨度 |
|---|---|---|
| **Squoosh** | https://squoosh.app/ | ⭐⭐⭐ (Web UI) |
| **PNGQuant** | https://pngquant.org/ | ⭐⭐⭐ (CLI) |
| **ImageMagick** | https://imagemagick.org/ | ⭐⭐⭐ (CLI) |
| **TinyPNG** | https://tinypng.com/ | ⭐⭐ (Web) |
| **Lighthouse CI** | https://github.com/GoogleChrome/lighthouse-ci | ⭐⭐⭐ (CI) |

---

**Version**: 1.0  
**Last Updated**: 2026-07-03  
**Applies To**: All Academy Content Operations
