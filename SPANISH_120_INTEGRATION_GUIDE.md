# Spanish 120 Lecture Enrichment - Integration Guide

**対象**: rb-world-academy での Spanish コンテンツ完全拡張  
**現状**: 120 講義が基本構成（各レベル 30 講義）  
**タスク**: 各講義を「語彙8-12 / 例文5-8 / 練習3段階 / 文化背景 / ネイティブ例」で充実化

---

## 📊 スコープ概要

| レベル | 講義数 | 状態 | 優先度 |
|---|---|---|---|
| A1 | 30 | 基本構成完成・拡張中 | **高** |
| A2 | 30 | 基本構成完成・拡張待ち | 中 |
| B1 | 30 | 基本構成完成・拡張待ち | 中 |
| B2 | 30 | 基本構成完成・拡張待ち | 中 |
| **合計** | **120** | — | — |

---

## 🎯 各講義の充実化内容チェックリスト

### 1. 語彙拡張（8-12 項目）

**現状**: 5-7 語  
**拡張後**: 8-12 語（同義語・反対語・文脈別表現を含む）

**例**: A1 L1「Saludos Básicos」
- 旧: Hola, Adiós, Buenos días, Buenas noches, Hasta luego (5個)
- 新: + Buenas tardes, Buenas noches, Hasta mañana, Hasta siempre, Chao, Cuídate, Un beso, ¿Qué tal? (12個)

**実装方法**:
```typescript
type: 'glossary',
terms: [
  { term: 'XXX', definition: 'YYY' },
  // ...
  // 同義語グループをコメントで示唆
  // 【Formal】【Informal】【Regional】タグ追加
]
```

---

### 2. 例文拡充（5-8 個）

**現状**: 3 文  
**拡張後**: 5-8 文（文法バリエーション・実用性を重視）

**例**: A1 L2「Decir la Hora」
```
旧:
- '¿Qué hora es? Es la una y media.'
- 'Son las tres y cuarto.'
- 'Tengo cita a las cinco.'

新:
+ '朝9時：「Son las nueve de la mañana.」'
+ '昼12時：「Es la una del mediodía.」'
+ '午後2時30分：「Son las dos y media de la tarde.」'
+ '夜8時：「Son las ocho de la noche.」'
+ '真夜中：「Es la medianoche.」'
+ 'ネイティブ（スペイン）: "¿A qué hora quedamos?" → "A las siete menos cuarto en la puerta del cine."'
+ 'ネイティブ（ラテンアメリカ）: "Tengo clase a las ocho de la mañana."'
```

**実装方法**:
```typescript
type: 'highlight-box',
title: 'Ejemplos - [Contexto]',
items: [
  '【場面1】...',
  '【場面2】...',
  '【ネイティブ（スペイン）】...',
  '【ネイティブ（メキシコ）】...',
  // 最低7-8個
]
```

---

### 3. 練習問題の 3 段階化

**現状**: 1 つの練習  
**拡張後**: Basic / Applied / Advanced の 3 レベル

**例**: A1 L1「Presentación」
```
Basic:
  question: 'Práctica Básica: Escribe la Presentación'
  answer: 'Me llamo [nombre]. Soy de [país/ciudad].'

Applied:
  question: 'Práctica Aplicada: Presentación de 3 oraciones'
  answer: 'Me llamo [nombre]. Soy de [país]. [Dato extra: profesión/hobby].'

Advanced:
  question: 'Práctica Avanzada: Conversación Completa'
  answer: 'A: Buenos días, ¿cómo te llamas? / B: Me llamo Juan. ¿Y tú?...'
```

**実装方法** (courses.ts 内):
```typescript
{
  type: 'practice',
  question: 'Práctica Básica: [题目]',
  auxiliaryPrompt: '[ヒント]',
  answer: '[期待される回答]'
},
{
  type: 'practice',
  question: 'Práctica Aplicada: [题目]',
  auxiliaryPrompt: '[ヒント]',
  answer: '[期待される回答]'
},
{
  type: 'practice',
  question: 'Práctica Avanzada: [题目]',
  auxiliaryPrompt: '[ヒント]',
  answer: '[期待される回答]'
}
```

---

### 4. 文化背景の説明追加

**現状**: ほぼなし  
**拡張後**: 段落で文化的背景を明示

**例**: A1 L1「Saludos」
```
追加セクション:
{
  type: 'text',
  content: '文化的背景: スペイン語圏では「手を握る」や「頬にキスをする」が一般的な挨拶。
  回数は地域による（スペイン北部=2回、南部=1回、ラテンアメリカ=1回が多い）。'
}
```

**実装方法**:
```typescript
// 各セクションの最後に "文化的背景" セクションを追加
{
  type: 'heading',
  level: 2,
  content: 'Contexto Cultural'
},
{
  type: 'text',
  content: '[地域差・歴史的背景・実用的注記]'
}
```

---

### 5. ネイティブスピーカーの使用例

**現状**: ほぼなし  
**拡張後**: Spain + 2-3 のラテンアメリカ地域（メキシコ・アルゼンチン等）

**例**: 
```
ネイティブ（スペイン）: "Encantada, soy Ana. Llevo tres años viviendo en Madrid."
ネイティブ（メキシコ）: "Mucho gusto, me llamo Diego. Soy de Ciudad de México."
ネイティブ（アルゼンチン）: "Hola, boludo. Soy Roberto de La Plata."
```

**実装方法**:
```typescript
{
  type: 'highlight-box',
  title: 'Ejemplos de Saludos - Contexto & Variantes',
  items: [
    '【スペイン標準】...',
    '【メキシコ】...',
    '【アルゼンチン】...',
    '【ネイティブ（スペイン）】"..."',
    '【ネイティブ（メキシコ）】"..."',
    // etc
  ]
}
```

---

## 🔄 実装フロー（120 講義）

### Phase 1: A1 詳細展開（優先）
**目標**: 30 講義 × 充実化パターン実装

1. **L1-L6**: Foundations（基礎の基礎）
   - Saludos y Presentaciones
   - Números y Hora
   - Familia y Relaciones
   - Comida y Preferencias
   - Colores y Adjetivos
   - Ropa y Descripción Física

2. **L7-L12**: Development（応用基礎）
   - Profesiones y Ocupaciones
   - Salud y Síntomas
   - Casa y Muebles
   - Transporte
   - Actividades Diarias
   - Clima y Estaciones

3. **L13-L18**: Application（実用）
   - Compras y Dinero
   - En el Restaurante
   - Viajes
   - Animales
   - Deportes
   - Hobbies y Intereses

4. **L19-L24**: Mastery（習熟）
   - Pasado Simple Introducción
   - Preguntas Avanzadas
   - Negación y Afirmación
   - Pronombres de Objeto Directo
   - Verbos Irregulares Comunes
   - Imperativo Simple

5. **L25-L30**: Integration（統合）
   - Conversaciones Completas
   - Situaciones Reales
   - Errores Comunes
   - Práctica Libre
   - Repaso A1 Completo
   - Transición a A2

### Phase 2: A2 詳細展開
**目標**: 30 講義 × 充実化パターン

内容：Pretérito、Imperfecto、複雑な記述、意見表現

### Phase 3: B1 詳細展開
**目標**: 30 講義 × 充実化パターン

内容：Subjuntivo、イディオム、議論、文学

### Phase 4: B2 詳細展開
**目標**: 30 講義 × 充実化パターン

内容：高度な文法、文学分析、文化的ニュアンス

---

## 📝 修正リスト（courses.ts 内）

### A1 レベル（spaa1）

#### Lesson 1: Saludos y Presentaciones
- [x] 語彙を 5 → 12 個に拡張
- [x] 例文を 3 → 7 個に拡充
- [x] 練習を 3 段階化
- [x] 文化背景セクション追加
- [x] ネイティブ例（Spain / Mexico / Argentina）追加

#### Lesson 2: Números y Hora
- [x] 語彙を 5 → 22 個に拡張（全番号パターン）
- [x] 例文を 3 → 7 個に拡充
- [x] 練習を 3 段階化
- [x] 時間表現の文化的背景追加
- [x] ネイティブ例（速度・自然な使用）追加

#### Lesson 3: Familia y Relaciones
- [x] 語彙を 5 → 20 個に拡張（遠い親族含む）
- [x] 例文を 3 → 6 個に拡充
- [x] 練習を 3 段階化
- [x] 所有形容詞の性・数変化説明
- [x] ラテンアメリカと Spain の違い明記

#### Lesson 4: Comida y Preferencias
- [x] 語彙を 5 → 25 個に拡張（カテゴリー分類）
- [x] 地域別料理文化の説明
- [x] 「gustar」構文の詳細説明
- [x] 例文を 3 → 6 個に拡充
- [x] 練習を 3 段階化

#### Lessons 5-30: 同じパターンで継続
- [ ] L5-L6: 各 12 語彙、7 例文、3 段階練習、文化背景、ネイティブ例
- [ ] L7-L12: 同上
- [ ] L13-L18: 同上
- [ ] L19-L24: 同上
- [ ] L25-L30: 同上

---

## 🛠 技術的実装ステップ

### Step 1: SPANISH_120_ENRICHMENT.ts の生成（完了）
- A1 L1-L4 の完全拡張テンプレート作成
- 文化的注記、ネイティブ例、練習テンプレート完備

### Step 2: courses.ts への統合
**方法 A（推奨）**: TypeScript で courses.ts を手動編集
```typescript
// courses.ts 内の spaa1 定義を以下の方式に置き換え
const a1_l1_enriched = a1_l1_sections;  // SPANISH_120_ENRICHMENT.ts から import
// ...
lessons: [
  { id: 'l1', title: 'Lesson 1: Saludos...', sections: a1_l1_enriched },
  // ...
]
```

**方法 B（代替）**: JSON + Script で一括生成
```bash
# Python/Node.js スクリプトで JSON → TypeScript に変換
node scripts/expand-spanish-content.js SPANISH_120_ENRICHMENT.ts src/data/courses.ts
```

### Step 3: UI テスト
- 375px / 768px / 1280px で表示確認
- タップ領域・スクロール性能確認
- glossary の長さが適切か確認

### Step 4: Vercel デプロイ
```bash
npm run build
npx vercel --prod
```

---

## 📈 進捗トラッキング

### 完成度指標
```
A1 コンテンツ拡張: ████░░░░░░ 40% (L1-L4 完成)
A2 コンテンツ拡張: ░░░░░░░░░░ 0%
B1 コンテンツ拡張: ░░░░░░░░░░ 0%
B2 コンテンツ拡張: ░░░░░░░░░░ 0%
全体: ██░░░░░░░░ 10%
```

### 品質メトリクス（チェックリスト）
- [ ] 全 120 講義で「語彙 8-12」達成
- [ ] 全 120 講義で「例文 5-8」達成
- [ ] 全 120 講義で「練習 3 段階化」達成
- [ ] 全 120 講義で「文化背景」1 段落以上
- [ ] 全 120 講義で「ネイティブ例」3 地域以上
- [ ] UI テスト：3 ブレークポイント合格
- [ ] Vercel デプロイ：本番環境で動作確認

---

## 🌍 地域別コンテンツ配分

### スペイン（Spain）
- 発音：Theta (/θ/) for z, c before e/i
- 代名詞：vosotros（複数形）
- 典型的トピック：Paella, Jamón Ibérico, Flamenco, Siesta

### メキシコ（Mexico）
- 発音：Seseo（z, c = /s/）
- 代名詞：ustedes のみ（vosotros なし）
- 典型的トピック：Tacos, Mole, Mariachi, Día de Muertos

### アルゼンチン（Argentina）
- 発音：Yeísmo（ll = /ʒ/）
- 代名詞：vos（2人称・インフォーマル）/ ustedes（複数形）
- 典型的トピック：Asado, Tango, Mate, Fútbol

### ペルー（Peru）
- 発音：標準スペイン語に近い
- 代名詞：tú / ustedes
- 典型的トピック：Ceviche, Machu Picchu, Quechua 言語影響

### コロンビア（Colombia）
- 発音：中立的スペイン語（学習者に好ましい）
- 代名詞：tú / ustedes
- 典型的トピック：コーヒー、Carnaval de Barranquilla

### チリ（Chile）
- 発音：子音・母音削減が多い
- 代名詞：tú / ustedes
- 典型的トピック：Empanadas, Vino, Atacama 砂漠

---

## 💡 デザインルール（Visual Consistency）

### Glossary セクション
```
【形式】
┌─────────────────────────────────────┐
│ Vocabulario de [Tema]               │
├─────────────────────────────────────┤
│ [Formal] / [Informal] / [Regional]  │
│                                       │
│ • Term 1: Definition 1               │
│ • Term 2: Definition 2 (同義語)      │
│ • Term 3: Definition 3 (反対語)      │
│ ...                                   │
│ • Term 12: Definition 12             │
└─────────────────────────────────────┘
```

### Example Box セクション
```
Ejemplos - [Contexto]
━━━━━━━━━━━━━━━━━━━━━━━━
【場面1】... (Basic)
【場面2】... (Intermediate)
【ネイティブ（Spain）】"..." (Native)
【ネイティブ（Mexico）】"..." (Regional)
【ネイティブ（Argentina）】"..." (Regional)
```

### Practice セクション
```
Nivel Básico:        記憶・単純な文法
Nivel Aplicado:      実用会話・複文
Nivel Avanzado:      拡張対話・文化的ニュアンス
```

---

## 🎯 納品予定日

| フェーズ | 対象 | 予定日 | 状態 |
|---|---|---|---|
| Phase 1 | A1 (30) | 2026-06-25 | **進行中** |
| Phase 2 | A2 (30) | 2026-07-02 | 未開始 |
| Phase 3 | B1 (30) | 2026-07-09 | 未開始 |
| Phase 4 | B2 (30) | 2026-07-16 | 未開始 |
| **最終** | **全 120** | **2026-07-16** | — |

---

## 📞 サポート資料

- `SPANISH_120_ENRICHMENT.ts`: 完全な内容テンプレート
- `FRENCH_120_ENRICHMENT.ts`: 参考実装（French から学ぶパターン）
- `courses.ts`: 統合ターゲット
- UI デザイン確認: `/public/screenshots/` (今後撮影)

---

**最後の確認**: 全 120 講義が統一されたフォーマット（語彙 8-12 / 例文 5-8 / 練習 3 段階 / 文化背景 / ネイティブ例）で充実化され、Vercel 本番環境に反映される予定です。
