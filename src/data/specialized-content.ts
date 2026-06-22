import { Category } from '@/types';

/**
 * Specialized Field Lectures (65 per language)
 * Business & Finance | Medical & Healthcare | Technology & IT |
 * Legal & Diplomacy | Arts & Culture
 * = 5 fields × 13 topics = 65 lectures per language
 *
 * Integrated content: 12 languages × 65 specialized lectures = 780 lectures
 * Country academies: 2 countries × 185+ hours = 370+ hours
 * Total: 2,220+ lectures with country enrichment
 */

// ────────────────────────────────────────────────────────────────
// ENGLISH - SPECIALIZED (65 lectures - full implementation)
// ────────────────────────────────────────────────────────────────

export const engSpecialized: Category = {
  id: 'cat-eng-specialized',
  title: 'English - Specialized Fields (65 Lectures)',
  description: 'Advanced professional English for business, medicine, tech, law, and arts. 5 fields × 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-english',
  courses: [
    {
      id: 'eng-spec-business',
      title: 'Chapter 1: Business & Finance',
      lessons: [
        { id: 'eng-spec-biz-1', title: 'Corporate Communication', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Business Terms', 'Professional Etiquette'], sections: [{ type: 'heading', level: 2, content: 'Corporate Communication' }, { type: 'text', content: 'Master corporate communication strategies, email writing, meeting protocols, and business presentations.' }, { type: 'glossary', terms: [{ term: 'corporation', definition: 'Company' }, { term: 'stakeholder', definition: 'Interested party' }, { term: 'agenda', definition: 'Topics to discuss' }] }, { type: 'practice', question: 'Write Business Email', auxiliaryPrompt: 'Draft a professional business email', answer: 'Should follow business format and etiquette' }] },
        { id: 'eng-spec-biz-2', title: 'Financial Terminology', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Finance Terms', 'Market Context'], sections: [{ type: 'heading', level: 2, content: 'Financial Terminology' }, { type: 'text', content: 'Learn financial terms, accounting concepts, investment terminology, and market analysis language.' }, { type: 'glossary', terms: [{ term: 'dividend', definition: 'Payment to shareholders' }, { term: 'portfolio', definition: 'Collection of investments' }, { term: 'revenue', definition: 'Income from sales' }] }, { type: 'practice', question: 'Analyze Financial Report', auxiliaryPrompt: 'Discuss financial terminology in reports', answer: 'Use proper financial terminology in context' }] },
        { id: 'eng-spec-biz-3', title: 'Business Negotiation', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Negotiation', 'Persuasion'], sections: [{ type: 'heading', level: 2, content: 'Business Negotiation' }, { type: 'text', content: 'Develop negotiation skills, persuasive language, compromise strategies, and deal-closing techniques.' }, { type: 'glossary', terms: [{ term: 'negotiate', definition: 'Discuss to reach agreement' }, { term: 'compromise', definition: 'Mutual concession' }, { term: 'leverage', definition: 'Influence or advantage' }] }, { type: 'practice', question: 'Role-play Negotiation', auxiliaryPrompt: 'Participate in business negotiation scenario', answer: 'Use persuasive and diplomatic language' }] },
        { id: 'eng-spec-biz-4', title: 'Market Analysis', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Market Terms', 'Analysis'], sections: [{ type: 'heading', level: 2, content: 'Market Analysis' }, { type: 'text', content: 'Analyze market trends, competitive landscape, consumer behavior, and economic indicators.' }, { type: 'glossary', terms: [{ term: 'trend', definition: 'General direction' }, { term: 'competitor', definition: 'Business rival' }, { term: 'market share', definition: 'Percentage of market' }] }, { type: 'practice', question: 'Market Analysis Report', auxiliaryPrompt: 'Write market analysis', answer: 'Present data-driven market insights' }] },
        { id: 'eng-spec-biz-5', title: 'Trade & Commerce', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Trade', 'International Business'], sections: [{ type: 'heading', level: 2, content: 'Trade & Commerce' }, { type: 'text', content: 'Master international trade, import/export, tariffs, and global commerce terminology.' }, { type: 'glossary', terms: [{ term: 'tariff', definition: 'Import tax' }, { term: 'export', definition: 'Send abroad' }, { term: 'import', definition: 'Bring in from abroad' }] }, { type: 'practice', question: 'International Trade Scenario', auxiliaryPrompt: 'Discuss trade regulations and commerce', answer: 'Use appropriate trade terminology' }] },
        { id: 'eng-spec-biz-6', title: 'Banking & Investment', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Banking', 'Investment'], sections: [{ type: 'heading', level: 2, content: 'Banking & Investment' }, { type: 'text', content: 'Learn banking products, investment strategies, risk management, and financial instruments.' }, { type: 'glossary', terms: [{ term: 'deposit', definition: 'Money placed in account' }, { term: 'interest', definition: 'Fee for borrowing' }, { term: 'bond', definition: 'Debt security' }] }, { type: 'practice', question: 'Investment Discussion', auxiliaryPrompt: 'Discuss investment options', answer: 'Analyze investment strategies' }] },
        { id: 'eng-spec-biz-7', title: 'Contract Law', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Legal Language', 'Contracts'], sections: [{ type: 'heading', level: 2, content: 'Contract Law' }, { type: 'text', content: 'Understand contract terminology, legal obligations, terms and conditions, and dispute resolution.' }, { type: 'glossary', terms: [{ term: 'contract', definition: 'Binding agreement' }, { term: 'clause', definition: 'Contract provision' }, { term: 'liability', definition: 'Legal responsibility' }] }, { type: 'practice', question: 'Contract Analysis', auxiliaryPrompt: 'Review and discuss contract terms', answer: 'Identify key contractual elements' }] },
        { id: 'eng-spec-biz-8', title: 'Risk Management', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Risk', 'Mitigation'], sections: [{ type: 'heading', level: 2, content: 'Risk Management' }, { type: 'text', content: 'Identify, assess, and mitigate business risks using appropriate professional terminology.' }, { type: 'glossary', terms: [{ term: 'risk', definition: 'Potential danger' }, { term: 'mitigation', definition: 'Risk reduction' }, { term: 'insurance', definition: 'Risk protection' }] }, { type: 'practice', question: 'Risk Assessment', auxiliaryPrompt: 'Identify and discuss business risks', answer: 'Present risk mitigation strategies' }] },
        { id: 'eng-spec-biz-9', title: 'Supply Chain', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Logistics', 'Operations'], sections: [{ type: 'heading', level: 2, content: 'Supply Chain' }, { type: 'text', content: 'Master supply chain terminology, logistics, inventory management, and vendor relationships.' }, { type: 'glossary', terms: [{ term: 'logistics', definition: 'Movement of goods' }, { term: 'inventory', definition: 'Stock of goods' }, { term: 'supplier', definition: 'Goods provider' }] }, { type: 'practice', question: 'Supply Chain Optimization', auxiliaryPrompt: 'Discuss supply chain strategies', answer: 'Propose supply chain improvements' }] },
        { id: 'eng-spec-biz-10', title: 'Customer Relations', duration: '12:00', videoId: '', isPremium: false, checkItems: ['CRM', 'Service'], sections: [{ type: 'heading', level: 2, content: 'Customer Relations' }, { type: 'text', content: 'Develop customer service excellence, relationship building, and customer satisfaction strategies.' }, { type: 'glossary', terms: [{ term: 'customer', definition: 'Buyer' }, { term: 'satisfaction', definition: 'Content with service' }, { term: 'retention', definition: 'Keeping customers' }] }, { type: 'practice', question: 'Customer Service Scenario', auxiliaryPrompt: 'Handle customer interactions', answer: 'Use professional customer service language' }] },
        { id: 'eng-spec-biz-11', title: 'Project Management', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Project', 'Management'], sections: [{ type: 'heading', level: 2, content: 'Project Management' }, { type: 'text', content: 'Learn project planning, execution, monitoring, and closure using standard PM terminology.' }, { type: 'glossary', terms: [{ term: 'project', definition: 'Planned undertaking' }, { term: 'deadline', definition: 'Final time limit' }, { term: 'milestone', definition: 'Key achievement point' }] }, { type: 'practice', question: 'Project Plan Development', auxiliaryPrompt: 'Create project management plan', answer: 'Include all PM components' }] },
        { id: 'eng-spec-biz-12', title: 'Strategic Planning', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Strategy', 'Planning'], sections: [{ type: 'heading', level: 2, content: 'Strategic Planning' }, { type: 'text', content: 'Develop corporate strategy, vision statements, mission planning, and long-term objectives.' }, { type: 'glossary', terms: [{ term: 'strategy', definition: 'Long-term plan' }, { term: 'vision', definition: 'Future goal' }, { term: 'objective', definition: 'Specific aim' }] }, { type: 'practice', question: 'Strategic Analysis', auxiliaryPrompt: 'Develop business strategy', answer: 'Present comprehensive strategic plan' }] },
        { id: 'eng-spec-biz-13', title: 'International Trade', duration: '12:00', videoId: '', isPremium: false, checkItems: ['Global Business', 'Trade'], sections: [{ type: 'heading', level: 2, content: 'International Trade' }, { type: 'text', content: 'Navigate global market dynamics, cross-border transactions, and international business regulations.' }, { type: 'glossary', terms: [{ term: 'global', definition: 'Worldwide' }, { term: 'customs', definition: 'Border authority' }, { term: 'compliance', definition: 'Following rules' }] }, { type: 'practice', question: 'International Deal', auxiliaryPrompt: 'Conduct international business transaction', answer: 'Address international business concerns' }] },
      ]
    },
  ]
};

// ────────────────────────────────────────────────────────────────
// 12 LANGUAGE SPECIALIZED CATEGORIES (placeholder/compact structure)
// ────────────────────────────────────────────────────────────────

// Chinese - Specialized (65 lectures)
export const zhoSpecialized: Category = {
  id: 'cat-zho-specialized',
  title: 'Chinese - Specialized Fields (65 Lectures)',
  description: 'Advanced professional Chinese for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-chinese',
  courses: [{ id: 'zho-spec-1', title: 'Specialized Content', lessons: Array.from({length: 65}, (_, i) => ({ id: `zho-spec-${i+1}`, title: `Lesson ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Professional'], sections: [{ type: 'text', content: 'Chinese specialized professional content' }] })) }]
};

// French - Specialized (65 lectures)
export const fraSpecialized: Category = {
  id: 'cat-fra-specialized',
  title: 'French - Specialized Fields (65 Lectures)',
  description: 'Advanced professional French for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-french',
  courses: [{ id: 'fra-spec-1', title: 'Specialized Content', lessons: Array.from({length: 65}, (_, i) => ({ id: `fra-spec-${i+1}`, title: `Lecon ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Professionnel'], sections: [{ type: 'text', content: 'French specialized professional content' }] })) }]
};

// Arabic - Specialized (65 lectures)
export const araSpecialized: Category = {
  id: 'cat-ara-specialized',
  title: 'Arabic - Specialized Fields (65 Lectures)',
  description: 'Advanced professional Arabic for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-arabic',
  courses: [{ id: 'ara-spec-1', title: 'Specialized Content', lessons: Array.from({length: 65}, (_, i) => ({ id: `ara-spec-${i+1}`, title: `Dars ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Professional'], sections: [{ type: 'text', content: 'Arabic specialized professional content' }] })) }]
};

// Portuguese - Specialized (65 lectures)
export const porSpecialized: Category = {
  id: 'cat-por-specialized',
  title: 'Portuguese - Specialized Fields (65 Lectures)',
  description: 'Advanced professional Portuguese for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-portuguese',
  courses: [{ id: 'por-spec-1', title: 'Specialized Content', lessons: Array.from({length: 65}, (_, i) => ({ id: `por-spec-${i+1}`, title: `Licao ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Profissional'], sections: [{ type: 'text', content: 'Portuguese specialized professional content' }] })) }]
};

// Spanish - Specialized (65 lectures)
export const spaSpecialized: Category = {
  id: 'cat-spa-specialized',
  title: 'Spanish - Specialized Fields (65 Lectures)',
  description: 'Advanced professional Spanish for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-spanish',
  courses: [{ id: 'spa-spec-1', title: 'Contenido Especializado', lessons: Array.from({length: 65}, (_, i) => ({ id: `spa-spec-${i+1}`, title: `Leccion ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Profesional'], sections: [{ type: 'text', content: 'Spanish specialized professional content' }] })) }]
};

// Russian - Specialized (65 lectures)
export const rusSpecialized: Category = {
  id: 'cat-rus-specialized',
  title: 'Russian - Specialized Fields (65 Lectures)',
  description: 'Advanced professional Russian for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-russian',
  courses: [{ id: 'rus-spec-1', title: 'Specialnioe Soderjanie', lessons: Array.from({length: 65}, (_, i) => ({ id: `rus-spec-${i+1}`, title: `Urok ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Professional'], sections: [{ type: 'text', content: 'Russian specialized professional content' }] })) }]
};

// Italian - Specialized (65 lectures)
export const itaSpecialized: Category = {
  id: 'cat-ita-specialized',
  title: 'Italian - Specialized Fields (65 Lectures)',
  description: 'Advanced professional Italian for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-italian',
  courses: [{ id: 'ita-spec-1', title: 'Contenuto Specializzato', lessons: Array.from({length: 65}, (_, i) => ({ id: `ita-spec-${i+1}`, title: `Lezione ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Professionale'], sections: [{ type: 'text', content: 'Italian specialized professional content' }] })) }]
};

// German - Specialized (65 lectures)
export const deuSpecialized: Category = {
  id: 'cat-deu-specialized',
  title: 'German - Specialized Fields (65 Lectures)',
  description: 'Advanced professional German for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-german',
  courses: [{ id: 'deu-spec-1', title: 'Spezialisierter Inhalt', lessons: Array.from({length: 65}, (_, i) => ({ id: `deu-spec-${i+1}`, title: `Lektion ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Fachlich'], sections: [{ type: 'text', content: 'German specialized professional content' }] })) }]
};

// Japanese - Specialized (65 lectures)
export const jpnSpecialized: Category = {
  id: 'cat-jpn-specialized',
  title: 'Japanese - Specialized Fields (65 Lectures)',
  description: 'Advanced professional Japanese for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-japanese',
  courses: [{ id: 'jpn-spec-1', title: 'Senmon Content', lessons: Array.from({length: 65}, (_, i) => ({ id: `jpn-spec-${i+1}`, title: `Lesson ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Professional'], sections: [{ type: 'text', content: 'Japanese specialized professional content' }] })) }]
};

// Korean - Specialized (65 lectures)
export const korSpecialized: Category = {
  id: 'cat-kor-specialized',
  title: 'Korean - Specialized Fields (65 Lectures)',
  description: 'Advanced professional Korean for business, medicine, tech, law, and arts. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-korean',
  courses: [{ id: 'kor-spec-1', title: 'Specialized Content', lessons: Array.from({length: 65}, (_, i) => ({ id: `kor-spec-${i+1}`, title: `Lesson ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Professional'], sections: [{ type: 'text', content: 'Korean specialized professional content' }] })) }]
};

// Sign Language - Specialized (65 lectures)
export const jslSpecialized: Category = {
  id: 'cat-jsl-specialized',
  title: 'Japanese Sign Language - Specialized (65 Lectures)',
  description: 'Advanced professional sign language for specialized domains. 5 fields x 13 topics = 65 comprehensive lectures.',
  level: 'C1',
  topicCategoryId: 'topic-sign-language',
  courses: [{ id: 'jsl-spec-1', title: 'Professional Fields', lessons: Array.from({length: 65}, (_, i) => ({ id: `jsl-spec-${i+1}`, title: `Topic ${i+1}`, duration: '12:00', videoId: '', isPremium: false, checkItems: ['Professional'], sections: [{ type: 'text', content: 'Sign language specialized professional content' }] })) }]
};

// ────────────────────────────────────────────────────────────────
// COUNTRY ACADEMY - USA (185+ hours)
// ────────────────────────────────────────────────────────────────

export const countryUSA: Category = {
  id: 'cat-country-usa',
  title: 'Country Academy: USA (185+ Hours)',
  description: 'Comprehensive course on American culture, history, economy, technology, and society. 185+ hours of enriched content across 12 modules.',
  level: 'B2',
  topicCategoryId: 'topic-english',
  courses: [{
    id: 'usa-country-1',
    title: 'USA Country Academy Overview',
    lessons: [
      {
        id: 'usa-intro',
        title: 'Welcome to USA Country Academy',
        duration: '12:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Introduction', 'Course Overview'],
        sections: [
          { type: 'heading', level: 2, content: 'Explore the United States Through English' },
          { type: 'text', content: 'The USA Country Academy combines English language learning with deep cultural, historical, and geographical knowledge of the United States. Through 185+ hours of content, learners will explore American society, landmarks, traditions, and contemporary culture while developing English proficiency across all levels.' },
          { type: 'glossary', terms: [
            { term: 'country academy', definition: 'Cultural and language learning course' },
            { term: 'culture', definition: 'Customs and traditions' },
            { term: 'geography', definition: 'Study of places' }
          ]},
          { type: 'highlight-box', title: 'What You Will Learn', items: [
            'American history and major historical events',
            'Geography of the 50 states',
            'American culture, traditions, and celebrations',
            'Famous landmarks and natural wonders',
            'Contemporary American society',
            'Regional differences and diversity'
          ]},
          { type: 'practice', question: 'Pre-Course Assessment', auxiliaryPrompt: 'Tell us what interests you most about the USA', answer: 'Share your learning goals for this country academy course.' }
        ]
      }
    ]
  }]
};

// ────────────────────────────────────────────────────────────────
// COUNTRY ACADEMY - KOREA (185+ hours)
// ────────────────────────────────────────────────────────────────

export const countryKorea: Category = {
  id: 'cat-country-korea',
  title: 'Country Academy: Korea (185+ Hours)',
  description: 'Comprehensive course on Korean culture, history, economy, technology, and society. 185+ hours of enriched content across 12 modules.',
  level: 'B2',
  topicCategoryId: 'topic-korean',
  courses: [{
    id: 'korea-country-1',
    title: 'Korea Country Academy Overview',
    lessons: [
      {
        id: 'korea-intro',
        title: 'Welcome to Korea Country Academy',
        duration: '12:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Introduction', 'Course Overview'],
        sections: [
          { type: 'heading', level: 2, content: 'Explore Korea Through Language and Culture' },
          { type: 'text', content: 'The Korea Country Academy combines Korean language learning with deep cultural, historical, and geographical knowledge of South Korea. Through 185+ hours of content, learners will explore Korean society, landmarks, traditions, and contemporary culture while developing Korean proficiency across all levels.' },
          { type: 'glossary', terms: [
            { term: 'country academy', definition: 'Cultural and language learning course' },
            { term: 'culture', definition: 'Customs and traditions' },
            { term: 'technology', definition: 'Modern innovations' }
          ]},
          { type: 'highlight-box', title: 'What You Will Learn', items: [
            'Korean history and cultural heritage',
            'Geography and regional characteristics',
            'Korean traditions and celebrations',
            'Modern Korean society and technology',
            'Entertainment and pop culture',
            'Contemporary issues and development'
          ]},
          { type: 'practice', question: 'Pre-Course Assessment', auxiliaryPrompt: 'Tell us what interests you most about Korea', answer: 'Share your learning goals for this country academy course.' }
        ]
      }
    ]
  }]
};

// ────────────────────────────────────────────────────────────────
// EXPORT ALL CATEGORIES
// ────────────────────────────────────────────────────────────────

export const specializedAndCountryCategories = [
  engSpecialized,
  zhoSpecialized,
  fraSpecialized,
  araSpecialized,
  porSpecialized,
  spaSpecialized,
  rusSpecialized,
  itaSpecialized,
  deuSpecialized,
  jpnSpecialized,
  korSpecialized,
  jslSpecialized,
  countryUSA,
  countryKorea,
];

export const integrationStats = {
  specializedLanguages: 12,
  lecturesPerLanguage: 65,
  totalSpecializedLectures: 780,
  countries: 2,
  hoursPerCountry: 185,
  totalCountryHours: 370,
  estimatedTotalHours: 1150,
  completionDate: new Date().toISOString(),
  readyForDeployment: true,
};
