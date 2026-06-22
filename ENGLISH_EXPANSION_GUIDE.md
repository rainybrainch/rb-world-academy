# English Curriculum Expansion Guide (120 Lessons A1-B2)

**Generated:** 2026-06-22  
**Status:** Framework complete, ready for integration  
**Scope:** 120 lessons (30 A1 + 30 A2 + 30 B1 + 30 B2)

---

## Overview

The English curriculum is being expanded to provide deeper, richer content across all CEFR levels. Each lesson now includes:

1. **Vocabulary Expansion** (5 → 8-12 terms)
   - Original translations
   - Synonyms for each term
   - Antonyms where applicable
   - Regional variations (US vs UK vs Australian English)
   - Usage context and formality level

2. **Example Sentences Expansion** (3-4 → 5-8 examples)
   - Grammatical variety
   - Thematic consistency
   - Japanese translations for comprehension
   - Native speaker natural phrasing

3. **Practice Problems Restructured** (1 generic → 3 tiered levels)
   - **Basic:** Simple, mechanical practice
   - **Intermediate:** Applied understanding, mini-dialogue
   - **Advanced:** Critical thinking, cultural analysis

4. **New Content Sections**
   - **Cultural Background:** History, social context, regional norms
   - **Native Speaker Usage:** How native speakers actually speak (vs textbook English)
   - **Regional Variants:** US, UK, Australian, Indian differences

---

## Data Structure

### Current Section Types (in courses.ts)
```typescript
type Section = 
  | { type: 'heading', level: 2, content: string }
  | { type: 'text', content: string }
  | { type: 'glossary', terms: Array<{term, definition}> }
  | { type: 'highlight-box', title: string, items: string[] }
  | { type: 'practice', question: string, auxiliaryPrompt: string, answer: string }
```

### New Section Types (to be added)
```typescript
type SectionExpanded = 
  | { type: 'glossary-expanded', terms: Array<{
      term: string,
      definition: string,      // Japanese
      synonym: string,         // English synonym(s)
      antonym: string,         // English antonym (or 'n/a')
      usageContext: string,    // When/how to use
      regionalVariant: string  // US/UK/AU differences
    }> }
  | { type: 'cultural-context', 
      title: string, 
      content: string          // ~200-300 words on cultural background
    }
  | { type: 'native-speaker-usage',
      title: string,
      content: string,         // ~150-200 words on actual native usage
      commonMistakes: string[] // What non-natives get wrong
    }
  | { type: 'practice-tiered',
      basic: { question: string, answer: string },
      intermediate: { question: string, answer: string },
      advanced: { question: string, answer: string }
    }
```

---

## Example Integration: Lesson 1 (Basic Greetings & Introduction)

### Before (Current)
```typescript
{
  type: 'glossary',
  terms: [
    { term: 'hello', definition: 'こんにちは' },
    { term: 'goodbye', definition: 'さようなら' },
    { term: 'morning', definition: '朝' },
    { term: 'afternoon', definition: '午後' },
    { term: 'evening', definition: '夜' }
  ]
}
```

### After (Expanded)
```typescript
{
  type: 'glossary-expanded',
  terms: [
    { 
      term: 'hello', 
      definition: 'こんにちは',
      synonym: 'hi',
      antonym: 'goodbye',
      usageContext: 'Formal greeting, works in all situations',
      regionalVariant: 'US/UK: identical'
    },
    { 
      term: 'hi', 
      definition: 'やあ、こんにちは',
      synonym: 'hello',
      antonym: 'bye',
      usageContext: 'Casual and friendly',
      regionalVariant: 'More common in US than UK'
    },
    { 
      term: 'hey', 
      definition: 'おい、ねえ',
      synonym: 'hi',
      antonym: 'n/a',
      usageContext: 'Very informal, attention-getting',
      regionalVariant: 'Casual US/Australian, less formal in UK'
    },
    // ... 9 more terms
  ]
}
```

### New Section: Cultural Context
```typescript
{
  type: 'cultural-context',
  title: 'Greetings Across English-Speaking Cultures',
  content: `Greetings in English-speaking countries are more casual and frequent than in Japanese culture. Americans often greet strangers with "Hi" or "What's up?" even on first meetings. British English maintains slightly more formality, using "How do you do?" in very formal contexts. Australians are extremely casual with greetings. The time-based greeting system (good morning/afternoon/evening) is used more in formal or professional settings. In casual daily life, "Hi" or "Hey" dominates. 

Failure to greet properly in business contexts is considered rude, while being over-formal in casual settings is awkward. In the US, business culture emphasizes building rapport quickly through casual greetings. In the UK, maintaining a degree of formality even in casual settings is valued. In Australia, breaking down hierarchies with very casual greetings ("G'day mate") is a sign of friendliness, not disrespect.`
}
```

### New Section: Native Speaker Usage
```typescript
{
  type: 'native-speaker-usage',
  title: 'How Native Speakers Actually Greet',
  content: `Native speakers rarely say the complete "How are you?" in casual contexts - it becomes "How are you?" or even just "How's it going?" They often combine greeting + question: "Hey, how've you been?" 

Native speakers from different regions use different defaults: Americans prefer "Hey/Hi", British prefer "Hello", Australians "G'day mate". Most native speakers do NOT expect a detailed answer to "How are you?" - "Good, thanks" or "Not bad" suffices. Using overly detailed answers to casual greetings marks you as non-native.`,
  commonMistakes: [
    'Saying "What's up?" in a job interview (too casual)',
    'Saying "Good morning" at 9pm (wrong time)',
    'Using Australian slang in formal UK business context',
    'Waiting for "How are you?" to finish speaking before answering'
  ]
}
```

### Restructured Practice
```typescript
{
  type: 'practice-tiered',
  basic: {
    question: 'Greet 5 people at different times of day (7am, noon, 3pm, 6pm, 10pm) using appropriate expressions',
    answer: 'Good morning (7am), Good afternoon (noon/3pm), Good evening (6pm/10pm), or casual Hi/Hey in any situation'
  },
  intermediate: {
    question: 'Create a dialogue: Meet an old friend at a coffee shop. Include greeting, how are you, and farewell.',
    answer: 'A: "Hey Sarah! How have you been?" B: "Great to see you! I\'ve been good. How about you?" A: "Can\'t complain. Let\'s catch up!" ... Later: A: "It was great seeing you. Take care!" B: "You too! See you soon."'
  },
  advanced: {
    question: 'Research and explain the cultural differences between American, British, and Australian greetings. When would each be inappropriate?',
    answer: 'Americans: casual "Hi/Hey/What's up" everywhere. British: more formal "Hello" in business, casual in leisure. Australian: very casual "G'day" to strangers. Inappropriate: Saying "What's up?" in a job interview (too casual)...'
  }
}
```

---

## Implementation Roadmap

### Phase 1: Update Type Definitions (CTO Task)
- Add new section types to `src/types/index.ts`
- Create TypeScript interfaces for expanded content

### Phase 2: Content Generation for A1 Level (Days 1-2)
- Expand all 30 A1 lessons
- Add vocabulary, cultural context, native speaker usage
- Implement tiered practice problems
- Test rendering in UI

### Phase 3: Content Generation for A2 Level (Days 3-4)
- Expand all 30 A2 lessons
- Increase complexity of cultural/native speaker sections
- Add more advanced practice problems

### Phase 4: Content Generation for B1 Level (Days 5-6)
- Expand all 30 B1 lessons
- Advanced vocabulary and nuanced cultural background
- Complex real-world scenarios

### Phase 5: Content Generation for B2 Level (Days 7-8)
- Expand all 30 B2 lessons
- Expert-level content with deep cultural/linguistic nuance
- Integration with literary analysis, academic writing

### Phase 6: UI/UX Review (Day 9)
- Test expanded content rendering at different breakpoints
- Ensure readability and navigation
- Accessibility review

### Phase 7: Testing & QA (Day 10)
- Cross-browser testing
- Mobile responsiveness
- Content accuracy review

---

## Vocabulary Expansion Examples

### A1 Level: Basic Greetings (12 terms)
```
hello, hi, hey, good morning, good afternoon, good evening, goodbye, bye, 
see you later, take care, how are you, what's up
```

### A2 Level: Present Perfect (12+ terms)
```
have, has, present perfect, irregular verbs, recently, just, already, yet, 
experience, current relevance, ever, never, before, specific time markers
```

### B1 Level: Complex Conditionals (12+ terms)
```
conditional, if-clause, main clause, zero conditional, first conditional, 
second conditional, third conditional, mixed conditional, subjunctive, would, 
past subjunctive, hypothetical, counterfactual
```

### B2 Level: Discourse Markers (12+ terms)
```
discourse marker, cohesion, moreover, furthermore, however, nevertheless, 
whereas, similarly, in contrast, as a result, consequently, therefore, hence, 
transitions, logical flow, rhetorical devices
```

---

## Cultural Context Themes by Level

### A1: Daily Life & Basic Interactions
- Greeting customs (formal vs casual)
- Meal times and names across countries
- Personal space and communication distance
- Eye contact and physical gestures

### A2: Social Structures & Business
- Educational systems
- Work culture and hierarchy
- Family structures
- Social etiquette

### B1: Historical & Literary Context
- English-speaking countries' histories
- Media and entertainment industries
- Regional identity and pride
- Social movements

### B2: Philosophical & Linguistic Analysis
- Etymology and word evolution
- Language and thought (Sapir-Whorf hypothesis)
- Sociolinguistics and identity
- Cross-cultural pragmatics

---

## Native Speaker Usage Patterns by Level

### A1: Casual Shortcuts & Contractions
- "How you doing?" vs "How are you doing?"
- "Gonna", "wanna", "gotta" (informal pronunciation)
- Omitting subjects: "(I) woke up late"
- Rising intonation for questions

### A2: Register Variation
- Formal vs casual versions of same idea
- When to use full forms vs contractions
- Politeness strategies
- Regional pronunciations

### B1: Idiomatic Expression & Pragmatics
- Phrasal verbs and their meanings
- Idioms and their literal origins
- Code-switching between formal/casual
- Implicature and indirect requests

### B2: Sociolinguistic Nuance
- Code-switching for identity/solidarity
- Jargon and specialized registers
- Accent features and meanings
- Linguistic markers of class/education

---

## Common Mistakes by Level

### A1 Mistakes
- Omitting be-verb: "I happy" instead of "I am happy"
- Wrong word order: "What you are doing?" instead of "What are you doing?"
- Using present simple for current action: "I eat breakfast" (doing it now)
- Literal translations from Japanese

### A2 Mistakes
- Confusing "since" and "for" in present perfect
- Using present perfect for finished time: "I have eaten breakfast this morning" (wrong - use simple past)
- Wrong prepositions: "interested on" instead of "interested in"
- Overusing "very": "very impossible" (nothing is more impossible)

### B1 Mistakes
- Confusing conditionals: "If I would know, I would tell you" (wrong tense in if-clause)
- Mixing passive and active in same sentence: "It was decided that we go" 
- Over-formal: "I hereby request permission to utilize the facilities"
- Cultural insensitivity: Comparing things considered sacred or deeply personal

### B2 Mistakes
- Over-hedging: "It could be argued that perhaps it might be suggested..."
- Stylistic mismatch: Using academic register in casual email
- Anachronistic language: Using archaic forms inappropriately
- Missing nuance: Treating synonyms as identical

---

## Integration Checklist

- [ ] TypeScript types updated with new section types
- [ ] A1 lessons 1-10 expanded with all new content types
- [ ] A1 lessons 11-20 expanded
- [ ] A1 lessons 21-30 expanded
- [ ] UI renders all new section types correctly
- [ ] Mobile responsiveness verified
- [ ] A2 lessons expanded (1-30)
- [ ] B1 lessons expanded (1-30)
- [ ] B2 lessons expanded (1-30)
- [ ] Content review for accuracy
- [ ] QA testing completed
- [ ] Deployment to production

---

## Content Standards

**All lessons must include:**
1. ✅ 8-12 vocabulary items with definition, synonym, antonym, usage context, regional variant
2. ✅ 5-8 example sentences with Japanese translation
3. ✅ Cultural background section (150-300 words)
4. ✅ Native speaker usage section (150-200 words + common mistakes)
5. ✅ Three-tiered practice problems (basic/intermediate/advanced)

**Cultural content should cover:**
- Time, food, holidays, family structures, work, education, communication styles, regional variations

**Regional variants must address:**
- United States English
- British English
- Australian English
- (B1+) Indian English, Canadian English, other varieties

---

## Example: Full Expanded Lesson (Lesson 2: Daily Routines & Time)

See `/rb-world-academy/LESSONS_EXPANDED/A1_L2_DailyRoutines.json` for complete example with all sections populated.

---

## Maintenance Notes

- Update with latest usage data from language corpora (COCA, BNC)
- Verify regional information annually
- Add new vocabulary as language evolves
- Review cultural sections for changing social norms
- Monitor student feedback for common sticking points

Generated by Claude Code v2 | 2026-06-22
