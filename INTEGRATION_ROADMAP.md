# English Curriculum Expansion - Integration Roadmap

**Project:** English Content Enrichment (120 Lessons A1-B2)  
**Generated:** 2026-06-22  
**Status:** Framework & Sample Content Complete → Ready for Implementation  
**Scope:** Vocabulary 5→8-12 | Examples 3→5-8 | Practice 1→3-tier | + Cultural + Native Speaker Usage

---

## 📊 Project Summary

### Current State
- 120 English lessons exist (A1-30 + A2-30 + B1-30 + B2-30)
- Each lesson has basic sections: heading → text → glossary (5 items) → highlight-box → practice (1 generic)
- Content is functional but lacks depth, cultural context, and real-world usage patterns

### Target State (Post-Expansion)
- Each lesson enhanced with:
  - **Vocabulary:** 8-12 items with synonym, antonym, usage context, regional variant
  - **Examples:** 5-8 sentences with Japanese translations and grammatical variety
  - **Cultural Background:** 150-300 words on cultural context and regional differences
  - **Native Speaker Usage:** 150-200 words + common mistakes for non-native speakers
  - **Practice Problems:** 3 tiers (basic/intermediate/advanced) instead of 1 generic

### Deliverables
1. ✅ Framework document (`english_content_enhanced.ts`)
2. ✅ Expansion guide with standards (`ENGLISH_EXPANSION_GUIDE.md`)
3. ✅ Sample expansions for A1 L1-L5 (`LESSON_EXPANSIONS_SAMPLE.json`)
4. ⏳ Full integration into `courses.ts` (Phase 2 below)
5. ⏳ TypeScript type updates (Phase 1 below)
6. ⏳ UI/UX testing and optimization

---

## 🔧 Phase 1: TypeScript Type System Update (Days 1-2)

### Objective
Update type definitions to support new section types without breaking existing code.

### Tasks

#### 1.1 Update `src/types/index.ts`
```typescript
// Add new section types to discriminated union

// NEW: Expanded glossary with metadata
export interface GlossaryTermExpanded {
  term: string;
  definition: string;           // Japanese translation
  synonym: string;              // English synonym(s)
  antonym: string;              // English antonym (or 'n/a')
  usageContext: string;         // When/how to use
  regionalVariant: string;      // US/UK/AU differences
  formality?: 'formal' | 'neutral' | 'casual' | 'very casual';
}

export interface Section_GlossaryExpanded extends BaseSection {
  type: 'glossary-expanded';
  items: GlossaryTermExpanded[];
}

// NEW: Cultural context section
export interface Section_CulturalContext extends BaseSection {
  type: 'cultural-context';
  title: string;
  content: string;
}

// NEW: Native speaker usage section
export interface Section_NativeSpeakerUsage extends BaseSection {
  type: 'native-speaker-usage';
  title: string;
  content: string;
  commonMistakes: string[];
}

// NEW: Expanded examples
export interface Section_ExamplesExpanded extends BaseSection {
  type: 'examples-expanded';
  items: string[];  // Each string is "English - Japanese"
}

// NEW: Tiered practice problems
export interface PracticeTier {
  question: string;
  answer: string;
}

export interface Section_PracticeTiered extends BaseSection {
  type: 'practice-tiered';
  basic: PracticeTier;
  intermediate: PracticeTier;
  advanced: PracticeTier;
}

// Update discriminated union to include new types
export type Section = 
  | Section_Heading
  | Section_Text
  | Section_Glossary        // Keep existing for backward compatibility
  | Section_GlossaryExpanded // NEW
  | Section_HighlightBox
  | Section_ExamplesExpanded // NEW
  | Section_CulturalContext  // NEW
  | Section_NativeSpeakerUsage // NEW
  | Section_Practice        // Keep existing
  | Section_PracticeTiered; // NEW
```

#### 1.2 Update `src/components/LessonContent.tsx`
Add render handlers for new section types:

```typescript
const renderSection = (section: Section) => {
  switch (section.type) {
    case 'glossary-expanded':
      return <GlossaryExpandedRenderer section={section} />;
    case 'cultural-context':
      return <CulturalContextRenderer section={section} />;
    case 'native-speaker-usage':
      return <NativeSpeakerUsageRenderer section={section} />;
    case 'examples-expanded':
      return <ExamplesExpandedRenderer section={section} />;
    case 'practice-tiered':
      return <PracticeTieredRenderer section={section} />;
    // ... existing cases
  }
};
```

#### 1.3 Create New Component Files
- `src/components/sections/GlossaryExpandedRenderer.tsx`
  - Render 8-12 vocabulary items with metadata
  - Show synonym, antonym, regional variants in hover/toggle
  - Color-code formality levels

- `src/components/sections/CulturalContextRenderer.tsx`
  - Display cultural background text
  - Optional: Add icons for US/UK/AU context

- `src/components/sections/NativeSpeakerUsageRenderer.tsx`
  - Display native speaker patterns
  - Highlight common mistakes in red/warning style
  - Include examples if provided

- `src/components/sections/ExamplesExpandedRenderer.tsx`
  - Display 5-8 examples in two-column layout (English / Japanese)
  - Syntax highlighting for grammar patterns

- `src/components/sections/PracticeTieredRenderer.tsx`
  - Three collapsible sections (basic/intermediate/advanced)
  - Show question and reveal answer on click

#### 1.4 Backward Compatibility Check
- Ensure existing sections (glossary, practice) still render
- Add migration function to convert old format to new (if needed)
- Test on existing A1 L1 without modification

**Deliverable:** All new types compile, existing code unaffected, new components render correctly

---

## 🎯 Phase 2: Content Generation & Integration (Days 3-12)

### Objective
Generate detailed expanded content for all 120 lessons and integrate into `courses.ts`.

### Strategy
Generate content in batches by level to catch patterns early and ensure consistency.

#### 2.1 A1 Level Expansion (Days 3-4)
**30 lessons → comprehensive content with all new sections**

**Lessons 1-10:** Core daily life vocabulary
- Lesson 1: Basic Greetings & Introduction ✅ (sample provided)
- Lesson 2: Daily Routines & Time ✅ (sample provided)
- Lesson 3: Family & Relationships
- Lesson 4: Numbers & Quantities
- Lesson 5: Shopping & Money ✅ (sample provided)
- Lesson 6: Food & Drinks
- Lesson 7: Clothes & Appearance
- Lesson 8: House & Home
- Lesson 9: Transportation
- Lesson 10: Weather & Seasons

**Lessons 11-20:** Extended daily life
- Lesson 11: Sports & Hobbies
- Lesson 12: School & Education
- Lesson 13: Health & Body
- Lesson 14: Animals & Pets
- Lesson 15: Countries & Cultures
- Lesson 16: Emergency & Safety
- Lesson 17: Directions & Location
- Lesson 18: Technology & Devices
- Lesson 19: Emotions & Feelings
- Lesson 20: Colors & Shapes

**Lessons 21-30:** Communication & social contexts
- Lesson 21: Time & Dates (Advanced)
- Lesson 22: Professions & Jobs
- Lesson 23: Birthday & Celebration
- Lesson 24: Nature & Environment
- Lesson 25: Coffee Shop Conversation
- Lesson 26: Bank & Money (Advanced)
- Lesson 27: Hotel & Accommodation
- Lesson 28: Restaurant & Food Culture
- Lesson 29: Asking for Help
- Lesson 30: Complaint & Apology

**Output:** 30 lessons in JSON format, each with:
- Glossary expanded (8-12 items)
- Examples expanded (5-8 items)
- Cultural context
- Native speaker usage + common mistakes
- Practice tiered (3 levels)

**Validation:** Vocabulary appropriateness for A1 (present simple, basic contexts, common objects/activities)

#### 2.2 A2 Level Expansion (Days 5-6)
**30 lessons → intermediate content with more complex grammar**

**Grammar focus:** Present perfect, comparatives, future plans, conditionals, passive voice intro, phrasal verbs, reported speech basics, modals

**Vocabulary:** 10-12 items per lesson (more synonyms, more context)

**Cultural depth:** Business etiquette, travel culture, regional entertainment differences

**Native speaker usage:** Contractions, abbreviations, colloquial expressions

#### 2.3 B1 Level Expansion (Days 7-8)
**30 lessons → upper-intermediate content with analytical depth**

**Grammar focus:** Mixed conditionals, subjunctive, advanced phrasal verbs

**Vocabulary:** 10-12 items with nuanced synonyms and contextual distinctions

**Cultural depth:** Political systems, media landscapes, social movements, literature

**Native speaker usage:** Register shifting, idioms, discourse markers

#### 2.4 B2 Level Expansion (Days 9-10)
**30 lessons → advanced content with expert nuance**

**Grammar focus:** Sophisticated structures, discourse analysis

**Vocabulary:** 12+ items with subtle distinctions and collocations

**Cultural depth:** Philosophy, linguistics, cross-cultural pragmatics, literary analysis

**Native speaker usage:** Sociolinguistic nuance, code-switching, stylistic variation

#### 2.5 Integration into courses.ts (Days 11-12)
**Process:**
1. Extract lessons 1-30 from `courses.ts` (A1 category)
2. Replace each lesson's sections array with expanded content
3. Test rendering with new components
4. Repeat for A2, B1, B2
5. Full regression test on entire English curriculum
6. Commit to git with message: "feat: expand English curriculum with deep vocabulary, cultural context, and tiered practice (120 lessons)"

**Validation:** All 120 lessons render correctly, no TypeScript errors, backward compatible

---

## 🎨 Phase 3: UI/UX Optimization (Days 13-14)

### Objective
Ensure expanded content displays beautifully and intuitively at all breakpoints.

#### 3.1 Visual Design
**Glossary Expanded Section**
- Display 8-12 items in a table or card grid
- Color-code by formality level (formal/neutral/casual/very casual)
- Hover/click to reveal synonym, antonym, regional variant
- Mobile: Vertical stack with expandable cards

**Examples Expanded Section**
- Two-column layout: English (left) | Japanese (right)
- Desktop: full width, easy scanning
- Tablet: 1 column, easy reading
- Mobile: Stacked, with language toggle button

**Cultural Context Section**
- Light gray background (differentiate from other sections)
- Icons for regions (🇺🇸 US, 🇬🇧 UK, 🇦🇺 AU)
- Quote marks or left border for emphasis

**Native Speaker Usage Section**
- Different background color (light blue?)
- "Common Mistakes" in warning/alert style
- Checkmark for correct patterns

**Practice Tiered Section**
- Three tabs or accordions: BASIC | INTERMEDIATE | ADVANCED
- Color gradient (green for basic, orange for intermediate, red for advanced)
- Reveal answers on click with smooth animation

#### 3.2 Responsive Testing
- Desktop 1280px: Full layout with all metadata visible
- Tablet 768px: Adjusted columns, maintain readability
- Mobile 375px: Vertical stack, touch-friendly expandable cards

#### 3.3 Accessibility
- All text has sufficient contrast (WCAG AA minimum)
- Interactive elements are keyboard accessible
- Color not the only means of distinction (use icons + text)
- Tap targets at least 44x44px on mobile

#### 3.4 Performance
- Lazy load examples and practice sections
- Compress images in cultural context
- Minimize re-renders when toggling content

**Deliverable:** Responsive screenshots at 375/768/1280px, accessibility audit passed

---

## 🧪 Phase 4: Testing & QA (Days 15-16)

### Objective
Ensure all 120 lessons render correctly, content is accurate, and functionality works as designed.

#### 4.1 Automated Testing
```typescript
// src/tests/english-curriculum.test.ts
describe('English Curriculum Expansion', () => {
  test('All 120 lessons load without errors', () => {
    const levels = ['a1', 'a2', 'b1', 'b2'];
    levels.forEach(level => {
      const lessons = getEnglishLessons(level);
      expect(lessons).toHaveLength(30);
      lessons.forEach(lesson => {
        expect(lesson.sections).toBeDefined();
        expect(lesson.sections.length).toBeGreaterThan(0);
      });
    });
  });

  test('Glossary expanded sections have 8-12 items', () => {
    // Test each lesson's vocabulary count
  });

  test('All example sentences have English-Japanese pairs', () => {
    // Validate example format
  });

  test('Practice sections have all 3 tiers', () => {
    // Validate basic/intermediate/advanced exist
  });

  test('New section types render without errors', () => {
    // Render each new section type in isolation
  });
});
```

#### 4.2 Manual Testing Checklist
- [ ] A1 Level: All 30 lessons open and display correctly
- [ ] A2 Level: All 30 lessons open and display correctly
- [ ] B1 Level: All 30 lessons open and display correctly
- [ ] B2 Level: All 30 lessons open and display correctly
- [ ] Glossary expanded: All 12 terms show properly on desktop/mobile
- [ ] Examples expanded: Japanese translations are accurate
- [ ] Cultural context: Text flows naturally, no formatting issues
- [ ] Native speaker usage: Common mistakes highlight properly
- [ ] Practice tiered: All 3 levels are accessible, answers reveal on click
- [ ] Mobile view: No overflow, readable at 375px
- [ ] Tablet view: Proper column layout at 768px
- [ ] Desktop view: Full featured at 1280px
- [ ] Navigation: Can browse between all 120 lessons without errors
- [ ] Performance: No lag when switching between lessons
- [ ] Accessibility: Tab through all interactive elements, all work

#### 4.3 Content Accuracy Review
- [ ] All 360+ vocabulary definitions are accurate
- [ ] Regional variants (US/UK/AU) are correct
- [ ] Example sentences are grammatically correct
- [ ] Japanese translations are accurate
- [ ] Cultural information is factually accurate and updated
- [ ] Native speaker patterns match modern usage
- [ ] No outdated slang or expressions

#### 4.4 Comparison Testing
- Compare old single-practice format with new tiered format
- Verify that beginner-friendly content is not lost
- Ensure advanced content is truly more challenging

**Deliverable:** QA checklist 100% complete, all tests passing, no known issues

---

## 📦 Phase 5: Deployment & Documentation (Day 17)

### Objective
Deploy to production and document the expansion.

#### 5.1 Git Workflow
```bash
# Create feature branch
git checkout -b feat/english-curriculum-expansion

# Stage changes
git add src/data/courses.ts
git add src/types/index.ts
git add src/components/sections/*.tsx
git add ENGLISH_EXPANSION_GUIDE.md
git add LESSON_EXPANSIONS_SAMPLE.json

# Commit with detailed message
git commit -m "feat: expand English curriculum (120 lessons, A1-B2)

- Vocabulary: 5 items → 8-12 items per lesson
- Examples: 3-4 → 5-8 sentences with Japanese translations
- Practice: 1 generic → 3 tiered levels (basic/intermediate/advanced)
- New sections: cultural context (regional differences, social norms)
- New sections: native speaker usage (common mistakes, real patterns)
- Added TypeScript types for all new section formats
- Created 5 new UI components for expanded content rendering
- Full backward compatibility with existing curriculum

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"

# Push to remote
git push origin feat/english-curriculum-expansion

# Create pull request on GitHub
```

#### 5.2 Documentation Updates
- [ ] Update README.md with new curriculum scope
- [ ] Add ENGLISH_EXPANSION_GUIDE.md to repository
- [ ] Create CHANGELOG entry
- [ ] Update API documentation if applicable

#### 5.3 Deployment Checklist
- [ ] All tests passing on CI/CD
- [ ] Manual testing on staging environment completed
- [ ] No TypeScript errors
- [ ] No console warnings/errors
- [ ] Lighthouse score maintained or improved
- [ ] PR approved by team lead
- [ ] Merge to main branch
- [ ] Deploy to production (Vercel)
- [ ] Verify on live site

#### 5.4 Post-Deployment Verification
- [ ] All 120 lessons accessible on production
- [ ] No broken links or images
- [ ] Performance metrics normal
- [ ] No increase in error rate
- [ ] User feedback monitored

**Deliverable:** Deployed to production, all 120 expanded lessons live and accessible

---

## 📈 Phase 6: Continuous Improvement (Ongoing)

### Objective
Monitor usage, collect feedback, and iteratively improve content.

#### 6.1 Metrics to Track
- Student completion rate by lesson
- Time spent per lesson (watch for sections that are too long)
- Practice problem success rates by tier
- User feedback and ratings

#### 6.2 Feedback Loop
- Quarterly review of student feedback
- Update cultural context as social norms change
- Add new native speaker patterns as language evolves
- Improve practice problems based on common mistakes

#### 6.3 Expansion Opportunities
- Add audio pronunciation guides (native speaker recordings)
- Add video examples for cultural contexts
- Create downloadable vocabulary lists
- Add quiz functionality with spaced repetition

---

## 📅 Timeline Summary

| Phase | Tasks | Days | Status |
|---|---|---|---|
| **0** | Framework & samples | 1 | ✅ Complete |
| **1** | TypeScript types | 2 | ⏳ Ready |
| **2a** | A1 expansion (30 lessons) | 2 | ⏳ Ready |
| **2b** | A2 expansion (30 lessons) | 2 | ⏳ Ready |
| **2c** | B1 expansion (30 lessons) | 2 | ⏳ Ready |
| **2d** | B2 expansion (30 lessons) | 2 | ⏳ Ready |
| **2e** | Integration into courses.ts | 2 | ⏳ Ready |
| **3** | UI/UX optimization | 2 | ⏳ Ready |
| **4** | Testing & QA | 2 | ⏳ Ready |
| **5** | Deployment & docs | 1 | ⏳ Ready |
| **Total** | | **17 days** | |

---

## 📊 Content Statistics

### By Level
| Level | Lessons | Vocabulary | Examples | Sections | Status |
|---|---|---|---|---|---|
| A1 | 30 | 240-360 | 150-240 | 150 | Framework ready |
| A2 | 30 | 240-360 | 150-240 | 150 | Framework ready |
| B1 | 30 | 240-360 | 150-240 | 150 | Framework ready |
| B2 | 30 | 240-360 | 150-240 | 150 | Framework ready |
| **Total** | **120** | **960-1440** | **600-960** | **600** | |

### Content Breakdown Per Lesson
- Vocabulary terms: 8-12 (avg 10)
- Example sentences: 5-8 (avg 6.5)
- Cultural context: 150-300 words
- Native speaker usage: 150-200 words + 3-5 common mistakes
- Practice tiers: 3 (basic/intermediate/advanced)

### Total New Content
- ~2,000+ lines of structured content across 120 lessons
- ~8,000+ words of cultural/linguistic explanation
- ~1,200+ vocabulary items with metadata
- ~750+ example sentences with translations

---

## 🚀 Success Criteria

### Content Quality
- [ ] All vocabulary is age/level-appropriate
- [ ] Cultural information is accurate and respectful
- [ ] Native speaker patterns reflect current usage
- [ ] Examples are natural and realistic
- [ ] Practice problems are progressively challenging

### Technical Quality
- [ ] All TypeScript types compile without errors
- [ ] All new components render without console errors
- [ ] Backward compatibility maintained (old format still works)
- [ ] Performance impact < 5% increase in load time
- [ ] All tests passing (automated + manual)

### User Experience
- [ ] Responsive design works at all breakpoints (375/768/1280px)
- [ ] Interactive elements are intuitive
- [ ] Content is scannable and readable
- [ ] Accessibility standards met (WCAG AA)
- [ ] No reported usability issues in testing

### Business Impact
- [ ] Increased student engagement (completion rates up)
- [ ] Better learning outcomes (higher practice success rates)
- [ ] Differentiation from competitors (depth of content)
- [ ] Student feedback is positive
- [ ] Attracts new students interested in comprehensive curriculum

---

## 📝 Notes for Implementation

1. **Content Volume:** 2,000+ lines of new content is substantial. Consider using AI assistance (like Claude) for initial drafts, then human review for accuracy and tone.

2. **Consistency:** Maintain consistent tone, style, and depth across all 120 lessons. Use the sample lessons as templates.

3. **Cultural Sensitivity:** When discussing cultural differences, be respectful and avoid stereotypes. Focus on observable patterns and historical context.

4. **Real-World Validation:** Have native speakers from US, UK, and Australia review the "native speaker usage" sections to ensure accuracy.

5. **Progressive Difficulty:** Ensure that each level builds appropriately. A1 should be very simple and mechanical. B2 should require critical thinking.

6. **Backward Compatibility:** Existing lessons without expansion should still display. Don't force all lessons to use new format at once if preference is gradual rollout.

7. **Monitoring:** After launch, monitor which lessons/sections get the most engagement and which need improvement.

---

**Generated by Claude Code | 2026-06-22**  
**Project Lead: RBAI Inc. CTO | Estimated Completion: 17 days**
