# Spanish 120 Implementation Roadmap

**プロジェクト**: rb-world-academy Spanish 120 Enrichment  
**開始日**: 2026-06-23  
**完了予定日**: 2026-07-31  
**総期間**: 5 週間  
**ステータス**: 🟢 準備完了

---

## 📦 納品済みアセット（4 ファイル）

### 1. SPANISH_120_ENRICHMENT.ts (30 KB)
**内容**: A1 L1-L4 の完全充実化テンプレート  
**構成**:
- `a1_l1_sections` - Saludos y Presentaciones（12 語彙、7 例文、3 練習レベル）
- `a1_l2_sections` - Números y Hora（22 語彙、7 例文、3 練習レベル）
- `a1_l3_sections` - Familia y Relaciones（20 語彙、6 例文、3 練習レベル）
- `a1_l4_sections` - Comida y Preferencias（25 語彙、6 例文、3 練習レベル）
- `culturalNotes` - 地域別コンテンツ配分
- `nativeSpeakerInsights` - Spain / Mexico / Argentina / Colombia / Peru
- `practiceTemplate` - 練習問題の 3 レベルテンプレート

**用途**: courses.ts への直接統合、またはコードジェネレーション用ベース

---

### 2. SPANISH_120_INTEGRATION_GUIDE.md (13 KB)
**内容**: 統合方法・修正リスト・実装フロー  
**主セクション**:
- 充実化内容チェックリスト（語彙・例文・練習・文化・ネイティブ例）
- 実装フロー（Phase 1-4: A1 → A2 → B1 → B2）
- 技術的実装ステップ（2 つの方法：手動 vs スクリプト自動化）
- 地域別コンテンツ配分の詳細
- UI デザインルール
- 進捗トラッキング
- 納品予定日

**用途**: 開発者向け実装ガイド、プロジェクト管理

---

### 3. SPANISH_120_LECTURE_INDEX.md (14 KB)
**内容**: 全 120 講義の索引 & チェックリスト  
**主セクション**:
- A1 Level（30 lectures × 4 chapters）
  - L1-L6: Foundations
  - L7-L12: Development
  - L13-L18: Application
  - L19-L25: Mastery
  - L26-L30: Integration
- A2 / B1 / B2: 構造サマリー
- 学習進行モデル（A1→A2→B1→B2）
- 実装ロードマップ（5 週間 × Phase）
- 完成度トラッキング
- 最終チェックリスト（120 items）

**用途**: QA・進捗管理、各講義の品質確認

---

### 4. SPANISH_120_DELIVERY_SUMMARY.md (16 KB)
**内容**: 納品サマリー・実装方法・次ステップ  
**主セクション**:
- 納品物説明（4 ファイル）
- 充実化内容の詳細（語彙・例文・練習・文化・ネイティブ例）
- スコープ＆進捗（A1-B2 各レベル）
- 実装方法（2 パターン）
- 地域別コンテンツ配分
- 5 週間ロードマップ
- 品質メトリクス（QA チェックリスト）
- 成功の定義
- 次のステップ

**用途**: 全体ビジョン・品質確保・デプロイ確認

---

## 🎯 実装フロー（Week by Week）

### Week 1: A1 Lessons 1-15 (Jun 23-29)
**目標**: A1 の半分を充実化・デプロイ

#### Day 1-2 (Jun 23-24): Preparation
- [ ] 開発環境セットアップ（npm install 確認）
- [ ] courses.ts を読み込み（L1-L6 の構造確認）
- [ ] SPANISH_120_ENRICHMENT.ts の a1_l1_sections ~ a1_l4_sections を確認
- [ ] git branch 作成: `feature/spanish-enrichment-a1-p1`

#### Day 3-4 (Jun 25-26): Implementation
- [ ] courses.ts の spaa1 定義（L1-L6）を更新
  - a1_l1_sections を適用
  - a1_l2_sections を適用
  - a1_l3_sections を適用
  - a1_l4_sections を適用
  - L5-L6 は同じパターンで手動拡張
- [ ] npm run dev でローカル確認（モバイル / タブレット / デスクトップ）
- [ ] コンソール error ゼロ確認

#### Day 5 (Jun 27): Testing & Deployment
- [ ] UI テスト（375px / 768px / 1280px）
  - 語彙表示が読みやすいか
  - 練習問題が明確か
  - スクロール性能良好か
- [ ] git add / git commit / git push
- [ ] npm run build
- [ ] npx vercel --prod
- [ ] rb-world-academy.vercel.app で本番確認

#### Day 6-7 (Jun 28-29): L7-L15 Continuation
- [ ] L7-L12 を同じパターンで拡張
- [ ] L13-L15 を同じパターンで拡張
- [ ] git push / npm run build / npx vercel --prod

**Week 1 Deliverable**: A1 L1-L15 (15 講義) 完全拡張 ✓ Vercel デプロイ ✓

---

### Week 2: A1 Lessons 16-30 (Jun 30-Jul 6)
**目標**: A1 完成・本番運用開始

#### Day 1-2 (Jun 30-Jul 1): L16-L20
- [ ] L16-L20 を同じパターンで拡張
- [ ] npm run dev / npm run build
- [ ] UI テスト（3 ブレークポイント）

#### Day 3-4 (Jul 2-3): L21-L25
- [ ] L21-L25 を同じパターンで拡張（統合レッスン重視）
- [ ] A1 の文法的統合性確認

#### Day 5-6 (Jul 4-5): L26-L30
- [ ] L26-L30（統合・会話・復習レッスン）を拡張
- [ ] A1 全体のコンテンツ一貫性チェック
- [ ] 10 講義ランダムスポットチェック

#### Day 7 (Jul 6): Final A1 Deployment
- [ ] git commit: "feat: Spanish A1 enrichment complete (120 lectures)"
- [ ] npm run build / npm run prod
- [ ] rb-world-academy.vercel.app 本番確認
- [ ] README.md 更新：「Spanish A1 充実化完成」

**Week 2 Deliverable**: A1 全 30 講義完成 ✓ Vercel 本番稼働 ✓

---

### Week 3: A2 Lessons 31-60 (Jul 7-13)
**目標**: A2 完成・Preterite/Imperfect 詳細化

#### Day 1-2 (Jul 7-8): A2 Structure Setup
- [ ] git branch: `feature/spanish-enrichment-a2`
- [ ] A2 講義リスト確認（L31-L60）
- [ ] Preterite / Imperfect 文法ポイント整理

#### Day 3-5 (Jul 9-11): A2 L31-L45 Implementation
- [ ] L31-L45 を同じパターンで拡張（Preterite 重視）
- [ ] 各講義の例文に Preterite 例を多数含む
- [ ] ネイティブ例（过去形使用例）追加

#### Day 6-7 (Jul 12-13): A2 L46-L60 + Deployment
- [ ] L46-L60 を拡張（Preterite vs Imperfect 比較）
- [ ] git push / npm run build / npx vercel --prod
- [ ] README 更新：「Spanish A2 充実化完成」

**Week 3 Deliverable**: A2 全 30 講義完成 ✓ Vercel デプロイ ✓

---

### Week 4: B1 Lessons 61-90 (Jul 14-20)
**目標**: B1 完成・Subjunctive 詳細化

#### Day 1-2 (Jul 14-15): B1 Structure Setup
- [ ] git branch: `feature/spanish-enrichment-b1`
- [ ] Subjunctive 文法構造確認

#### Day 3-5 (Jul 16-18): B1 L61-L75 Implementation
- [ ] L61-L75 を同じパターンで拡張（Subjunctive 導入）
- [ ] L61: Subjunctivo introducción
- [ ] L62-L75: Subjunctive usage 各種

#### Day 6-7 (Jul 19-20): B1 L76-L90 + Deployment
- [ ] L76-L90 を拡張（Subjunctive advanced）
- [ ] git push / npm run build / npx vercel --prod

**Week 4 Deliverable**: B1 全 30 講義完成 ✓ Vercel デプロイ ✓

---

### Week 5: B2 Lessons 91-120 (Jul 21-27)
**目標**: B2 完成・全 120 講義完成

#### Day 1-2 (Jul 21-22): B2 Structure Setup
- [ ] git branch: `feature/spanish-enrichment-b2`
- [ ] Advanced grammar / Literary language 確認

#### Day 3-5 (Jul 23-25): B2 L91-L105 Implementation
- [ ] L91-L105 を同じパターンで拡張
- [ ] Advanced subjunctive + Passive voice

#### Day 6 (Jul 26): B2 L106-L120 + Final Testing
- [ ] L106-L120 を拡張（Capstone lectures）
- [ ] 全 120 講義ランダム 20 講義スポットチェック
- [ ] 最終 QA テスト

#### Day 7 (Jul 27): Final Deployment
- [ ] git commit: "feat: Spanish 120 enrichment complete"
- [ ] npm run build / npx vercel --prod
- [ ] rb-world-academy.vercel.app 最終確認
- [ ] Documentation 完成

**Week 5 Deliverable**: B2 全 30 講義完成 ✓ 全 120 講義完成 ✓

---

### Week 6: Buffer & UIKI Integration (Jul 28-31)
**目標**: 完全性確認・UIKI 連携・ドキュメント完成

#### Day 1-2 (Jul 28-29): Extended QA
- [ ] 全 120 講義の品質再確認
- [ ] UI/UX テスト（全 3 ブレークポイント確認）
- [ ] パフォーマンス測定（ページ読み込み時間等）

#### Day 3 (Jul 30): UIKI Integration
- [ ] UIKI にタスク登録：
  - "Spanish 120 充実化完成"
  - 関連プロジェクト: p_rbai_inc (rb-world-academy)
  - 期限: 2026-07-31
  - device: pc (コード変更)
  - 完了: true
- [ ] UIKI に新規降雨：実機確認タスク等

#### Day 4 (Jul 31): Documentation & Celebration
- [ ] README.md 最終更新
- [ ] DELIVERY_MANIFEST.md に Spanish 120 エントリ追加
- [ ] GitHub commit message: "Feat: Spanish 120 lectures fully enriched (vocab 8-12, sentences 5-8, practice 3-levels, cultural context, native examples)"
- [ ] 🎉 Project Complete

**Week 6 Deliverable**: 全ドキュメント完成 ✓ UIKI 連携完了 ✓ 納品 ✓

---

## 🔧 技術的実装チェックリスト

### Pre-Implementation
- [ ] Node.js v18+ / npm 8+ 確認
- [ ] courses.ts の現在のサイズ確認（20,821 行）
- [ ] git 認証確認
- [ ] Vercel CLI インストール確認

### Per Week Checklist
- [ ] `npm run dev` でローカルサーバー起動
- [ ] 3 ブレークポイント（375 / 768 / 1280px）で表示確認
- [ ] ブラウザコンソール error ゼロ
- [ ] タップ領域・読みやすさ確認
- [ ] git status で差分確認
- [ ] git push 前に npm run build 実行
- [ ] npx vercel --prod で本番デプロイ
- [ ] デプロイ後 URL で確認

### Quality Assurance
- [ ] 各 Week ごと 10 講義ランダムスポットチェック
- [ ] 語彙数確認：8-12 個
- [ ] 例文数確認：5-8 文
- [ ] 練習レベル確認：Basic / Applied / Advanced 3 段階
- [ ] 文化背景確認：1+ 段落
- [ ] ネイティブ例確認：3+ 地域
- [ ] UI レイアウト確認：段階開示・読みやすさ

---

## 📊 進捗トラッキング

### Target vs Actual
```
Week 1 (A1 L1-L15):
  Target: 15 lectures
  Current: 0/15 (準備中)
  Actual: — (未実装)

Week 2 (A1 L16-L30):
  Target: 15 lectures (合計 30)
  Current: 0/15
  Actual: —

Week 3 (A2 L31-L60):
  Target: 30 lectures
  Current: 0/30
  Actual: —

Week 4 (B1 L61-L90):
  Target: 30 lectures
  Current: 0/30
  Actual: —

Week 5 (B2 L91-L120):
  Target: 30 lectures
  Current: 0/30
  Actual: —

TOTAL:
  Target: 120 lectures
  Current: 0/120 (準備中)
  Actual: —
```

### Completion Metrics
- **Vocabulary Expansion**: 8-12 terms per lecture
- **Example Sentences**: 5-8 sentences per lesson
- **Practice Levels**: 3 (basic / applied / advanced)
- **Cultural Context**: 1+ paragraph per major topic
- **Native Examples**: 3+ regions (Spain + Latam)
- **UI/UX**: Pass 3 breakpoint tests
- **Vercel**: Production deployment success

---

## 🚨 Risk Management

### Risk 1: File Size Explosion
**Issue**: courses.ts が現재 20,821 行。追加で ~15,000 行増加予測。  
**Mitigation**:
- `courses-spanish.ts` に分割検討
- Tree-shaking で未使用コード削除
- Lazy loading 検討

### Risk 2: Build Time Increase
**Issue**: npm run build 時間が増加する可能性。  
**Mitigation**:
- 段階的デプロイ（Week ごと）
- キャッシング最適化
- 本番ビルド時間監視

### Risk 3: UI Rendering Performance
**Issue**: 120 講義 × 多数のセクション = DOM 要素多数。  
**Mitigation**:
- 3 ブレークポイントで性能測定
- 仮想スクロール検討
- Lighthouse スコア確認

### Risk 4: Content Quality Drift
**Issue**: 120 講義で品質が一定でない可能性。  
**Mitigation**:
- テンプレート厳密適用
- ランダムスポットチェック（毎週 10 講義）
- ピアレビュー

---

## 📞 Communication & Coordination

### 週次報告書（Every Friday）
```markdown
# Week N Report (Jun 23 - Jun 29)

## Completed
- [x] A1 L1-L6 enrichment (6/15)
- [x] UI testing (3 breakpoints)
- [x] Vercel deployment

## In Progress
- [ ] A1 L7-L15 (Est. complete Jul 1)

## Blockers
- None

## Metrics
- Lectures completed: 6/15 (40%)
- Quality score: 24/25 (96%)
- Build time: 2m 34s (acceptable)
- Lighthouse: 95+ (all metrics)

## Next Week Plan
- Complete A1 L7-L15
- Begin A2 L31-L45
```

### Escalation Path
1. **Minor Issues** (typo, formatting): Self-fix + commit
2. **Medium Issues** (grammar, content): Peer review + CTO approval
3. **Major Issues** (architecture, performance): CEO decision + Phase 0 rerun

---

## 📚 Related Documentation

| Document | Purpose | Owner |
|---|---|---|
| SPANISH_120_ENRICHMENT.ts | Implementation template | Development |
| SPANISH_120_INTEGRATION_GUIDE.md | Modification checklist | QA |
| SPANISH_120_LECTURE_INDEX.md | Lecture tracking | PM |
| SPANISH_120_DELIVERY_SUMMARY.md | Overview & next steps | Stakeholders |
| **This file** | Implementation roadmap | Project Lead |

---

## ✅ Success Criteria (Final Acceptance)

✓ **All 120 lectures enriched** with:
- 8-12 vocabulary items per lesson
- 5-8 example sentences per lesson
- 3-level practice problems (basic / applied / advanced)
- 1+ paragraph cultural context
- 3+ native speaker examples (Spain + regions)

✓ **UI/UX** passes:
- 375px responsive (mobile)
- 768px responsive (tablet)
- 1280px responsive (desktop)
- Accessibility (WCAG AA)

✓ **Deployment** successful:
- rb-world-academy.vercel.app live
- Zero build errors
- Zero runtime console errors
- Performance: Lighthouse 90+

✓ **Documentation** complete:
- README.md updated
- DELIVERY_MANIFEST.md entry
- UIKI integration (completion + new tasks)

---

**Prepared by**: RBAI Inc. Spanish Enrichment Task Force  
**Date**: 2026-06-22  
**Status**: 🟢 Ready to Execute  
**Estimated Completion**: 2026-07-27

---

## 🎓 Learn Spanish with rb-world-academy!

120 enriched lectures await your mastery journey.

**¡Vamos a aprender español!** 🇪🇸
