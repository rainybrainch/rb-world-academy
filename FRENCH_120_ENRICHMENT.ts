// FRENCH 120 ENRICHMENT CURRICULUM
// A1 (30 lessons) - A2 (30 lessons) - B1 (30 lessons) - B2 (30 lessons)
// Each lesson includes: 8-12 vocabulary terms, 5-8 example sentences, 3-tier practice questions,
// cultural context, and native speaker usage

// ============================================
// A1 LEVEL (Beginners) - 30 Lessons
// ============================================

export const frenchA1Enrichment = {
  // CHAPTER 1: FOUNDATIONS (Lessons 1-6)

  // Lesson 1: Les Salutations et Formules Polies (Greetings & Polite Phrases)
  lesson1_a1: {
    id: 'l1_a1_enriched',
    title: 'Lesson 1: Les Salutations et Formules Polies',
    theme: 'Introduction et Politesse',
    duration: '10:00',
    vocabulary: [
      { term: 'Bonjour', definition: 'Good morning/afternoon', synonyms: ['Salut', 'Ça va?'], antonym: 'Bonsoir', nativeUsage: 'Used from morning until sunset; essential greeting in French culture' },
      { term: 'Bonsoir', definition: 'Good evening', synonyms: ['Bonne nuit'], antonym: 'Bonjour', nativeUsage: 'Used from sunset onwards; always used before leaving in evening' },
      { term: 'Au revoir', definition: 'Goodbye', synonyms: ['À bientôt', 'À plus tard', 'Salut'], antonym: 'Bonjour', nativeUsage: 'Most formal goodbye; used in formal settings and first meetings' },
      { term: 'S\'il vous plaît', definition: 'Please (formal)', synonyms: ['S\'il te plaît (informal)', 'S.V.P.'], antonym: null, nativeUsage: 'Critical in French; showing politeness is highly valued in social interactions' },
      { term: 'Merci', definition: 'Thank you', synonyms: ['Merci beaucoup', 'Merci infiniment'], antonym: 'Sans merci', nativeUsage: 'Always say merci after receiving something; it\'s considered very rude to omit it' },
      { term: 'De rien', definition: 'You\'re welcome', synonyms: ['Avec plaisir', 'Pas de problème'], antonym: 'Merci', nativeUsage: 'Standard response to gratitude; shows politeness and warmth' },
      { term: 'Excusez-moi', definition: 'Excuse me (formal)', synonyms: ['Pardon', 'Désolé(e)'], antonym: 'Continuez', nativeUsage: 'Use when interrupting or asking for help; respect for personal space is important' },
      { term: 'Comment allez-vous?', definition: 'How are you? (formal)', synonyms: ['Ça va?', 'Comment ça va?'], antonym: null, nativeUsage: 'In France, this is more than politeness; people expect genuine answers' },
      { term: 'Ça va', definition: 'I\'m fine/How are you (informal)', synonyms: ['Ça va bien', 'Pas mal'], antonym: 'Ça ne va pas', nativeUsage: 'Most common casual greeting among friends and colleagues' },
      { term: 'Enchanté(e)', definition: 'Pleased to meet you', synonyms: ['Ravi(e)', 'Heureux(se)'], antonym: null, nativeUsage: 'Said when meeting someone for the first time; shows respect and interest' },
      { term: 'Je m\'appelle', definition: 'My name is', synonyms: ['Mon nom est'], antonym: 'Vous appelez-vous?', nativeUsage: 'Essential introduction phrase; French people appreciate self-introduction' },
      { term: 'Quelle est votre nom?', definition: 'What is your name?', synonyms: ['Comment t\'appelles-tu?'], antonym: 'Je m\'appelle', nativeUsage: 'Formal way to ask someone\'s name; shows interest and politeness' }
    ],
    exampleSentences: [
      { sentence: 'Bonjour, comment allez-vous?', translation: 'Hello, how are you?', context: 'formal greeting in morning' },
      { sentence: 'Bonsoir, enchanté de vous rencontrer.', translation: 'Good evening, pleased to meet you.', context: 'evening formal introduction' },
      { sentence: 'Au revoir et à bientôt!', translation: 'Goodbye and see you soon!', context: 'friendly departure' },
      { sentence: 'S\'il vous plaît, pouvez-vous m\'aider?', translation: 'Please, can you help me?', context: 'polite request' },
      { sentence: 'Merci beaucoup pour votre aide.', translation: 'Thank you very much for your help.', context: 'expressing gratitude' },
      { sentence: 'De rien, c\'est un plaisir!', translation: 'You\'re welcome, it\'s a pleasure!', context: 'polite response to thanks' },
      { sentence: 'Excusez-moi, où est la gare?', translation: 'Excuse me, where is the train station?', context: 'asking for directions politely' },
      { sentence: 'Je m\'appelle Marie et j\'habite à Paris.', translation: 'My name is Marie and I live in Paris.', context: 'self-introduction' }
    ],
    culturalContext: 'In France, greetings are more formal than in English-speaking countries. Air-kissing on the cheek (la bise) is common among friends and family. Always greet people when entering a shop or restaurant. French people value politeness highly; omitting "s\'il vous plaît" or "merci" can be seen as rude.',
    nativeSpeakerNotes: 'Parisians often use casual "Salut" among friends. Regional variations exist; in some areas, people use "Bonjou" or local dialects. The formal "vous" vs. informal "tu" distinction is crucial and varies by region.',
    practiceQuestions: {
      basic: [
        { question: 'How do you say "goodbye" in French?', answer: 'Au revoir', difficulty: 'basic' },
        { question: 'What\'s the polite way to say "please"?', answer: 'S\'il vous plaît (formal) or S\'il te plaît (informal)', difficulty: 'basic' }
      ],
      intermediate: [
        { question: 'What\'s the difference between "Bonjour" and "Bonsoir"?', answer: 'Bonjour is used during day, Bonsoir after sunset', difficulty: 'intermediate' },
        { question: 'How would you introduce yourself formally?', answer: 'Enchanté(e), je m\'appelle [name]', difficulty: 'intermediate' }
      ],
      advanced: [
        { question: 'Explain the cultural significance of "la bise" in French greetings.', answer: 'It\'s a traditional greeting among friends/family showing closeness and warmth', difficulty: 'advanced' }
      ]
    }
  },

  // Lesson 2: Alphabet et Prononciation (Alphabet & Pronunciation)
  lesson2_a1: {
    id: 'l2_a1_enriched',
    title: 'Lesson 2: L\'Alphabet et la Prononciation',
    theme: 'Alphabet et Sons Français',
    duration: '10:00',
    vocabulary: [
      { term: 'L\'alphabet', definition: 'The alphabet', synonyms: ['L\'ABC'], antonym: null, nativeUsage: 'French has 26 letters; pronunciation differs significantly from English' },
      { term: 'La voyelle', definition: 'Vowel', synonyms: ['Une voyelle'], antonym: 'La consonne', nativeUsage: 'French vowels: a, e, i, o, u, y - each can be pronounced multiple ways' },
      { term: 'La consonne', definition: 'Consonant', synonyms: ['Une consonne'], antonym: 'La voyelle', nativeUsage: 'French has silent letters; final consonants are often not pronounced' },
      { term: 'La prononciation', definition: 'Pronunciation', synonyms: ['Comment dire'], antonym: 'L\'orthographe', nativeUsage: 'French pronunciation rules are complex; silent letters are common' },
      { term: 'L\'accent', definition: 'The accent/stress', synonyms: ['L\'accent tonique'], antonym: null, nativeUsage: 'French stress falls on last syllable; accents modify vowel sounds' },
      { term: 'L\'accent aigu (é)', definition: 'Acute accent', synonyms: ['Le premier accent'], antonym: 'L\'accent grave', nativeUsage: 'Changes pronunciation; always pronounced é as in "été"' },
      { term: 'L\'accent grave (è)', definition: 'Grave accent', synonyms: ['L\'accent ouvert'], antonym: 'L\'accent aigu', nativeUsage: 'Opens vowel sound; è pronounced as in English "pet"' },
      { term: 'L\'accent circonflexe (ê)', definition: 'Circumflex accent', synonyms: ['Le chapeau'], antonym: null, nativeUsage: 'Marks historical letter loss; often changes pronunciation subtly' },
      { term: 'Le tréma (ï)', definition: 'Diaeresis/trema', synonyms: ['Les deux points'], antonym: null, nativeUsage: 'Separates vowels for separate pronunciation' },
      { term: 'La cédille (ç)', definition: 'Cedilla', synonyms: ['C avec une queue'], antonym: 'Le c normal', nativeUsage: 'Forces "c" to sound like "s" before a, o, u' },
      { term: 'Muet', definition: 'Silent (letter)', synonyms: ['Qui ne se prononce pas'], antonym: 'Prononcé', nativeUsage: 'Many French words have silent letters at the end' },
      { term: 'La liaison', definition: 'Liaison/linking sounds', synonyms: ['Lier les sons'], antonym: 'Le silence', nativeUsage: 'Connecting final consonant of one word to initial vowel of next; very common' }
    ],
    exampleSentences: [
      { sentence: 'L\'alphabet français a 26 lettres.', translation: 'The French alphabet has 26 letters.', context: 'stating basic fact' },
      { sentence: 'Pouvez-vous épeler votre nom, s\'il vous plaît?', translation: 'Can you spell your name, please?', context: 'asking someone to spell something' },
      { sentence: 'Comment prononcez-vous ce mot?', translation: 'How do you pronounce this word?', context: 'asking about pronunciation' },
      { sentence: 'L\'accent circonflexe change la prononciation.', translation: 'The circumflex accent changes the pronunciation.', context: 'explaining grammar rule' },
      { sentence: 'Le "t" à la fin est muet.', translation: 'The "t" at the end is silent.', context: 'explaining silent letters' },
      { sentence: 'La liaison est très importante en français.', translation: 'Liaison is very important in French.', context: 'explaining pronunciation phenomenon' },
      { sentence: 'A - B - C - D - E - F - G - H...', translation: 'A - B - C - D - E - F - G - H...', context: 'reciting alphabet' },
      { sentence: 'La cédille adoucit le "c".', translation: 'The cedilla softens the "c" sound.', context: 'explaining punctuation mark' }
    ],
    culturalContext: 'French orthography is complex and often irregular. The French language academy (l\'Académie française) maintains strict rules about spelling and pronunciation. Foreign accents are generally tolerated but good pronunciation is respected.',
    nativeSpeakerNotes: 'Parisians often speak quickly with liaisons flowing together. Regional accents vary significantly; southern France (Occitan region) has different intonation. Older French speakers speak more slowly and clearly.',
    practiceQuestions: {
      basic: [
        { question: 'How many letters are in the French alphabet?', answer: '26 letters', difficulty: 'basic' },
        { question: 'What does the cédilla (ç) do?', answer: 'Makes "c" sound like "s" before a, o, u', difficulty: 'basic' }
      ],
      intermediate: [
        { question: 'Explain the difference between é, è, and ê.', answer: 'Different accents that change pronunciation of "e"', difficulty: 'intermediate' },
        { question: 'What is liaison in French?', answer: 'Linking final consonant of one word to initial vowel of next', difficulty: 'intermediate' }
      ],
      advanced: [
        { question: 'How would you explain French pronunciation rules to a beginner?', answer: 'Focus on silent letters, accents, and liaisons which are key to French pronunciation', difficulty: 'advanced' }
      ]
    }
  },

  // Lesson 3: Les Nombres (0-20) - Numbers
  lesson3_a1: {
    id: 'l3_a1_enriched',
    title: 'Lesson 3: Les Nombres de 0 à 20',
    theme: 'Compter et Chiffres',
    duration: '10:00',
    vocabulary: [
      { term: 'Zéro', definition: '0', synonyms: ['Rien'], antonym: 'Un', nativeUsage: 'Used in mathematics, scores, and daily speech' },
      { term: 'Un', definition: '1', synonyms: ['Une (feminine)'], antonym: 'Zéro', nativeUsage: 'Changes gender with noun; "un garçon" (m), "une fille" (f)' },
      { term: 'Deux', definition: '2', synonyms: ['Couple'], antonym: 'Seul', nativeUsage: 'Common in daily counting; unchanged by gender' },
      { term: 'Trois', definition: '3', synonyms: ['Trio'], antonym: null, nativeUsage: 'Used frequently in counting and expressions' },
      { term: 'Quatre', definition: '4', synonyms: ['Quatre-quarts (quarter)'], antonym: null, nativeUsage: 'Builds compound numbers from 20-99' },
      { term: 'Cinq', definition: '5', synonyms: ['Main (hand - 5 fingers)'], antonym: null, nativeUsage: 'Common in time telling and counting' },
      { term: 'Six', definition: '6', synonyms: ['Sextet'], antonym: null, nativeUsage: 'Pronunciation changes when followed by consonant vs. vowel' },
      { term: 'Sept', definition: '7', synonyms: ['Semaine (week)'], antonym: null, nativeUsage: 'Used in days of week; important in French calendar' },
      { term: 'Huit', definition: '8', synonyms: ['Octave'], antonym: null, nativeUsage: 'Pronunciation "oo-ee"; liaison with vowel-starting words' },
      { term: 'Neuf', definition: '9', synonyms: ['Nouveau (new)'], antonym: null, nativeUsage: 'Last single digit before teens; changes pronunciation patterns' },
      { term: 'Dix', definition: '10', synonyms: ['Doigts (fingers)'], antonym: null, nativeUsage: 'Pronounced "dees"; base for teens (11-19) in French' },
      { term: 'Onze', definition: '11', synonyms: ['Teen ending -ze'], antonym: null, nativeUsage: 'Begins irregular teen numbers; different from 10' },
      { term: 'Douze', definition: '12', synonyms: ['Douzaine (dozen)'], antonym: null, nativeUsage: 'Another irregular teen; important for shopping/quantity' },
      { term: 'Treize', definition: '13', synonyms: ['Teen pattern starts'], antonym: null, nativeUsage: 'First regular teen pattern (3+10); easier to remember' },
      { term: 'Quatorze', definition: '14', synonyms: ['4+10 pattern'], antonym: null, nativeUsage: 'Follows pattern: number + ze ending' },
      { term: 'Quinze', definition: '15', synonyms: ['5+10'], antonym: null, nativeUsage: 'Special pronunciation; nasal sound' },
      { term: 'Seize', definition: '16', synonyms: ['6+10'], antonym: null, nativeUsage: 'Similar pattern; important for telling time' },
      { term: 'Dix-sept', definition: '17', synonyms: ['10+7'], antonym: null, nativeUsage: 'Hyphenated; clear compound structure' },
      { term: 'Dix-huit', definition: '18', synonyms: ['10+8'], antonym: null, nativeUsage: 'Compound form; easier than earlier teens' },
      { term: 'Dix-neuf', definition: '19', synonyms: ['10+9'], antonym: null, nativeUsage: 'Last teen number; leads to twenties' },
      { term: 'Vingt', definition: '20', synonyms: ['Deux fois dix (twice ten)'], antonym: null, nativeUsage: 'Base for many compound numbers; changes form (vingtaine)' }
    ],
    exampleSentences: [
      { sentence: 'Combien? Zéro, un, deux, trois...', translation: 'How many? Zero, one, two, three...', context: 'counting up' },
      { sentence: 'J\'ai dix-sept ans.', translation: 'I am seventeen years old.', context: 'stating age' },
      { sentence: 'Il y a vingt personnes à la réunion.', translation: 'There are twenty people at the meeting.', context: 'stating quantity' },
      { sentence: 'Peux-tu compter jusqu\'à vingt?', translation: 'Can you count to twenty?', context: 'asking someone to count' },
      { sentence: 'Quel est ton numéro de téléphone?', translation: 'What is your phone number?', context: 'asking for numbers' },
      { sentence: 'Trois plus quatre égale sept.', translation: 'Three plus four equals seven.', context: 'simple math' },
      { sentence: 'Je veux neuf gâteaux, s\'il vous plaît.', translation: 'I want nine cakes, please.', context: 'shopping/ordering' },
      { sentence: 'Le match a duré dix-huit minutes.', translation: 'The match lasted eighteen minutes.', context: 'describing duration' }
    ],
    culturalContext: 'French numbers have unique characteristics; 20-99 use different patterns. In Belgium and Switzerland, the numbers differ (septante/septante-dix instead of soixante-dix for 70). Numbers are used frequently in French commerce, sports, and daily life.',
    nativeSpeakerNotes: 'French speakers often gesture when counting; hand motions vary by region. Young people often use rapid counting. In formal contexts, numbers may be spoken more slowly for clarity.',
    practiceQuestions: {
      basic: [
        { question: 'Say the number 5 in French.', answer: 'Cinq', difficulty: 'basic' },
        { question: 'How do you say 13 in French?', answer: 'Treize', difficulty: 'basic' }
      ],
      intermediate: [
        { question: 'What is 8 + 4 in French?', answer: 'Huit plus quatre égale douze', difficulty: 'intermediate' },
        { question: 'Say the number 17 in French and explain its structure.', answer: 'Dix-sept (10+7); hyphenated compound', difficulty: 'intermediate' }
      ],
      advanced: [
        { question: 'Create a phone number using all teens and explain how you would say it in French.', answer: 'Example: 06-12-18-14-20 (zéro six, douze, dix-huit, quatorze, vingt)', difficulty: 'advanced' }
      ]
    }
  },

  // Lesson 4: Les Jours et Les Mois (Days & Months)
  lesson4_a1: {
    id: 'l4_a1_enriched',
    title: 'Lesson 4: Les Jours et Les Mois',
    theme: 'Calendrier et Temps',
    duration: '11:00',
    vocabulary: [
      { term: 'Lundi', definition: 'Monday', synonyms: ['Première jour', 'Le début de semaine'], antonym: 'Dimanche', nativeUsage: 'Start of work week in France; traditionally most serious day' },
      { term: 'Mardi', definition: 'Tuesday', synonyms: ['Jour de Mars'], antonym: 'Dimanche', nativeUsage: 'Derives from Mars (god of war); common market day in villages' },
      { term: 'Mercredi', definition: 'Wednesday', synonyms: ['Jour de Mercure'], antonym: 'Dimanche', nativeUsage: 'Derives from Mercury; afternoon off for school children (traditionally)' },
      { term: 'Jeudi', definition: 'Thursday', synonyms: ['Jour de Jupiter'], antonym: 'Dimanche', nativeUsage: 'Derives from Jupiter; mid-week day with cultural events' },
      { term: 'Vendredi', definition: 'Friday', synonyms: ['Jour de Vénus'], antonym: 'Dimanche', nativeUsage: 'Derives from Venus; celebrated as start of weekend' },
      { term: 'Samedi', definition: 'Saturday', synonyms: ['Le Sabbat'], antonym: 'Dimanche', nativeUsage: 'Weekend day; main shopping and social day' },
      { term: 'Dimanche', definition: 'Sunday', synonyms: ['Jour du Seigneur'], antonym: 'Lundi', nativeUsage: 'Religious day (Lord\'s day); family time; some shops closed' },
      { term: 'Janvier', definition: 'January', synonyms: ['Mois 1'], antonym: 'Décembre', nativeUsage: 'New Year month; named after Janus (Roman god of doorways)' },
      { term: 'Février', definition: 'February', synonyms: ['Mois 2'], antonym: 'Janvier', nativeUsage: 'Shortest month; Valentine\'s Day (Saint-Valentin) celebrated' },
      { term: 'Mars', definition: 'March', synonyms: ['Mois 3'], antonym: 'Février', nativeUsage: 'Spring begins; named after Mars (god of war/agriculture)' },
      { term: 'Avril', definition: 'April', synonyms: ['Mois 4'], antonym: 'Mars', nativeUsage: 'April Fools Day (Poisson d\'Avril - April Fish); spring flowers' },
      { term: 'Mai', definition: 'May', synonyms: ['Mois 5'], antonym: 'Avril', nativeUsage: 'Labour Day (1st May); many holidays; warm weather starts' },
      { term: 'Juin', definition: 'June', synonyms: ['Mois 6'], antonym: 'Mai', nativeUsage: 'Summer begins; wedding month; school ends' },
      { term: 'Juillet', definition: 'July', synonyms: ['Mois 7'], antonym: 'Juin', nativeUsage: 'Peak summer; Bastille Day (14th July - national holiday)' },
      { term: 'Août', definition: 'August', synonyms: ['Mois 8'], antonym: 'Juillet', nativeUsage: 'Vacation month; many Parisians leave the city' },
      { term: 'Septembre', definition: 'September', synonyms: ['Mois 9'], antonym: 'Août', nativeUsage: 'School year starts; return from summer; autumn begins' },
      { term: 'Octobre', definition: 'October', synonyms: ['Mois 10'], antonym: 'Septembre', nativeUsage: 'Autumn month; Halloween celebrated; harvest season' },
      { term: 'Novembre', definition: 'November', synonyms: ['Mois 11'], antonym: 'Octobre', nativeUsage: 'Remembrance Day (11th Nov); autumn continues; weather turns cold' },
      { term: 'Décembre', definition: 'December', synonyms: ['Mois 12'], antonym: 'Novembre', nativeUsage: 'Christmas month; winter begins; New Year preparation' },
      { term: 'La semaine', definition: 'The week', synonyms: ['Sept jours'], antonym: 'Le jour', nativeUsage: 'Standard time unit; used for planning and scheduling' }
    ],
    exampleSentences: [
      { sentence: 'Quel jour sommes-nous aujourd\'hui?', translation: 'What day is it today?', context: 'asking about the day' },
      { sentence: 'C\'est lundi, le 15 janvier 2024.', translation: 'It\'s Monday, January 15th, 2024.', context: 'giving full date' },
      { sentence: 'Les vacances commencent en juillet.', translation: 'Vacation starts in July.', context: 'planning holidays' },
      { sentence: 'Je travaille du lundi au vendredi.', translation: 'I work from Monday to Friday.', context: 'describing work schedule' },
      { sentence: 'Nous avons un examen le jeudi 3 mai.', translation: 'We have an exam on Thursday, May 3rd.', context: 'scheduling event' },
      { sentence: 'Mars est le mois du printemps.', translation: 'March is the month of spring.', context: 'describing seasons' },
      { sentence: 'Le 14 juillet est la Fête nationale française.', translation: 'July 14th is the French national holiday.', context: 'cultural reference' },
      { sentence: 'Dimanche est ma journée préférée.', translation: 'Sunday is my favorite day.', context: 'expressing preference' }
    ],
    culturalContext: 'In France, the week starts on Monday (not Sunday). Days and months are not capitalized in French (unlike English). The French calendar is deeply connected to agriculture, holidays, and religious traditions. Many holidays and traditions are tied to specific months.',
    nativeSpeakerNotes: 'French people often refer to weeks by their number (semaine 1, semaine 2, etc.). Regional holidays vary; some days have special names and meanings across different provinces. School holidays (vacances scolaires) are major planning points.',
    practiceQuestions: {
      basic: [
        { question: 'Name the days of the week in French.', answer: 'Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche', difficulty: 'basic' },
        { question: 'What month comes after septembre?', answer: 'Octobre', difficulty: 'basic' }
      ],
      intermediate: [
        { question: 'If today is Wednesday, what day was it 3 days ago?', answer: 'Lundi (Monday)', difficulty: 'intermediate' },
        { question: 'Name the months that have 31 days.', answer: 'Janvier, mars, mai, juillet, août, octobre, décembre', difficulty: 'intermediate' }
      ],
      advanced: [
        { question: 'Explain the cultural significance of the 14th of July and connect it to French national identity.', answer: 'Bastille Day - storming of Bastille in 1789, symbolizes freedom and the start of French Revolution', difficulty: 'advanced' }
      ]
    }
  },

  // Lesson 5: Les Couleurs (Colors)
  lesson5_a1: {
    id: 'l5_a1_enriched',
    title: 'Lesson 5: Les Couleurs',
    theme: 'Vocabulaire des Couleurs',
    duration: '9:00',
    vocabulary: [
      { term: 'Rouge', definition: 'Red', synonyms: ['Écarlate', 'Cramoisi'], antonym: 'Bleu', nativeUsage: 'Associated with passion, revolution, French flag; changes with gender/number' },
      { term: 'Bleu', definition: 'Blue', synonyms: ['Azur', 'Indigo'], antonym: 'Rouge', nativeUsage: 'Associated with royalty, peace; part of French flag; very popular color' },
      { term: 'Blanc', definition: 'White', synonyms: ['Neige', 'Ivoire'], antonym: 'Noir', nativeUsage: 'Associated with purity, peace; part of French flag; used in many expressions' },
      { term: 'Noir', definition: 'Black', synonyms: ['Obscur'], antonym: 'Blanc', nativeUsage: 'Associated with elegance (French fashion); also with sadness/death' },
      { term: 'Jaune', definition: 'Yellow', synonyms: ['Or', 'Citron'], antonym: 'Bleu', nativeUsage: 'Associated with joy, sunshine; changes with gender/number' },
      { term: 'Vert', definition: 'Green', synonyms: ['Émeraude', 'Jade'], antonym: 'Rouge', nativeUsage: 'Associated with nature, hope, life; common in French landscapes' },
      { term: 'Orange', definition: 'Orange', synonyms: ['Abricot'], antonym: null, nativeUsage: 'Named after the fruit; warm, energetic color; doesn\'t change form' },
      { term: 'Rose', definition: 'Pink', synonyms: ['Fuchsia'], antonym: null, nativeUsage: 'Associated with romance, French beauty; also means "rose" (the flower)' },
      { term: 'Violet', definition: 'Purple', synonyms: ['Pourpre', 'Mauve'], antonym: null, nativeUsage: 'Associated with royalty, mystery; less common in everyday use' },
      { term: 'Gris', definition: 'Gray', synonyms: ['Grisâtre'], antonym: null, nativeUsage: 'Associated with Paris, sadness; common in French weather/fashion' },
      { term: 'Marron', definition: 'Brown', synonyms: ['Brun', 'Chocolat'], antonym: null, nativeUsage: 'Named after chestnut (marron); associated with earth, autumn' },
      { term: 'Doré', definition: 'Gold/Golden', synonyms: ['Or'], antonym: 'Argenté', nativeUsage: 'Represents wealth, luxury; used in art and jewelry descriptions' }
    ],
    exampleSentences: [
      { sentence: 'Le drapeau français est bleu, blanc, rouge.', translation: 'The French flag is blue, white, red.', context: 'describing the flag' },
      { sentence: 'J\'aime le vert et le bleu.', translation: 'I like green and blue.', context: 'expressing color preferences' },
      { sentence: 'Quelle est ta couleur préférée?', translation: 'What is your favorite color?', context: 'asking about preferences' },
      { sentence: 'La maison est blanche avec un toit gris.', translation: 'The house is white with a gray roof.', context: 'describing appearance' },
      { sentence: 'Elle porte une robe rouge.', translation: 'She is wearing a red dress.', context: 'describing clothing' },
      { sentence: 'L\'or est jaune et brillant.', translation: 'Gold is yellow and shiny.', context: 'describing qualities' },
      { sentence: 'Les feuilles deviennent orange en automne.', translation: 'The leaves become orange in autumn.', context: 'describing seasonal change' },
      { sentence: 'Il y a des fleurs roses dans le jardin.', translation: 'There are pink flowers in the garden.', context: 'describing nature' }
    ],
    culturalContext: 'In France, colors have symbolic meanings deeply rooted in history and culture. Blue, white, and red represent the French nation. Fashion colors (especially blacks, whites, and pastels) are central to French elegance. Color descriptions in French require gender and number agreement.',
    nativeSpeakerNotes: 'Parisians often wear neutral colors (black, white, gray, beige). Regional color preferences exist; northern regions favor darker tones while southern regions prefer brighter colors. In art discussions, French speakers use many color-related metaphors.',
    practiceQuestions: {
      basic: [
        { question: 'What are the colors of the French flag?', answer: 'Bleu, blanc, rouge (Blue, white, red)', difficulty: 'basic' },
        { question: 'Say five colors in French.', answer: 'Rouge, bleu, vert, jaune, noir (any 5 colors acceptable)', difficulty: 'basic' }
      ],
      intermediate: [
        { question: 'Describe a rainbow in French.', answer: 'Arc-en-ciel: rouge, orange, jaune, vert, bleu, indigo, violet', difficulty: 'intermediate' },
        { question: 'What color symbolizes French royalty and explain why.', answer: 'Bleu (blue) - associated with French monarchy and prestige', difficulty: 'intermediate' }
      ],
      advanced: [
        { question: 'Create a description of a French Impressionist painting using color vocabulary.', answer: 'Example: "Des couleurs pastel - bleu ciel, rose pâle, vert tendre..." (pale colors - sky blue, pale pink, soft green...)', difficulty: 'advanced' }
      ]
    }
  },

  // Lesson 6: La Famille (Family)
  lesson6_a1: {
    id: 'l6_a1_enriched',
    title: 'Lesson 6: La Famille',
    theme: 'Membres de la Famille',
    duration: '10:00',
    vocabulary: [
      { term: 'La famille', definition: 'The family', synonyms: ['Les proches'], antonym: 'L\'étranger', nativeUsage: 'Central to French culture; family gatherings and meals are important traditions' },
      { term: 'Le père', definition: 'The father', synonyms: ['Papa', 'Le papa'], antonym: 'La mère', nativeUsage: 'Formal: "père"; casual: "papa"; role traditionally important in French family structure' },
      { term: 'La mère', definition: 'The mother', synonyms: ['Maman', 'La maman'], antonym: 'Le père', nativeUsage: 'Formal: "mère"; casual: "maman"; deeply honored in French culture' },
      { term: 'Le frère', definition: 'The brother', synonyms: ['Frérot'], antonym: 'La sœur', nativeUsage: 'Can mean older or younger brother; terms like "grand frère" specify age' },
      { term: 'La sœur', definition: 'The sister', synonyms: ['Sœurette'], antonym: 'Le frère', nativeUsage: 'Can mean older or younger sister; "grande sœur" specifies older' },
      { term: 'Le fils', definition: 'The son', synonyms: ['Le garçon'], antonym: 'La fille', nativeUsage: 'Formal term; used in official contexts and family descriptions' },
      { term: 'La fille', definition: 'The daughter', synonyms: ['La jeune fille (young woman)'], antonym: 'Le fils', nativeUsage: 'Can mean daughter or young woman depending on context' },
      { term: 'Le grand-père', definition: 'The grandfather', synonyms: ['Papy', 'Papi'], antonym: 'La grand-mère', nativeUsage: 'Formal: "grand-père"; casual: "papy"; keeper of family traditions' },
      { term: 'La grand-mère', definition: 'The grandmother', synonyms: ['Mamie', 'Mémère'], antonym: 'Le grand-père', nativeUsage: 'Formal: "grand-mère"; casual: "mamie"; central figure in French family' },
      { term: 'L\'oncle', definition: 'The uncle', synonyms: ['L\'oncle du côté paternel'], antonym: 'La tante', nativeUsage: 'Father\'s brother; used in extended family structures' },
      { term: 'La tante', definition: 'The aunt', synonyms: ['La tante paternelle'], antonym: 'L\'oncle', nativeUsage: 'Father\'s sister; important in family gatherings and celebrations' },
      { term: 'Le cousin', definition: 'The cousin (male)', synonyms: ['Le cousin germain'], antonym: 'La cousine', nativeUsage: 'Can specify "premier cousin" (first cousin) to show closeness' },
      { term: 'La cousine', definition: 'The cousin (female)', synonyms: ['La cousine germaine'], antonym: 'Le cousin', nativeUsage: 'Female equivalent; often close relationships in French families' },
      { term: 'Le mari', definition: 'The husband', synonyms: ['L\'époux'], antonym: 'La femme', nativeUsage: 'Modern French increasingly uses "mari" instead of older terms' },
      { term: 'La femme', definition: 'The wife/woman', synonyms: ['L\'épouse'], antonym: 'Le mari', nativeUsage: 'Context-dependent meaning; "femme" can mean woman or wife' },
      { term: 'L\'enfant', definition: 'The child', synonyms: ['Le petit', 'La petite'], antonym: 'L\'adulte', nativeUsage: 'Gender-neutral term; used for both boys and girls' },
      { term: 'Le bébé', definition: 'The baby', synonyms: ['Le nourrisson'], antonym: 'L\'adulte', nativeUsage: 'Affectionate term; commonly used in family contexts' },
      { term: 'Les parents', definition: 'The parents', synonyms: ['Father and mother'], antonym: 'Les enfants', nativeUsage: 'Plural form for both parents together' },
      { term: 'Les enfants', definition: 'The children', synonyms: ['La progéniture'], antonym: 'Les adultes', nativeUsage: 'Refers to children collectively; fundamental family unit' },
      { term: 'L\'aîné', definition: 'The oldest/eldest', synonyms: ['Le premier-né'], antonym: 'Le cadet', nativeUsage: 'Oldest child; often has special status in French families' }
    ],
    exampleSentences: [
      { sentence: 'Ma famille est très importante pour moi.', translation: 'My family is very important to me.', context: 'expressing family values' },
      { sentence: 'J\'ai un frère et une sœur.', translation: 'I have a brother and a sister.', context: 'describing family structure' },
      { sentence: 'Mes parents habitent à Lyon.', translation: 'My parents live in Lyon.', context: 'stating where family lives' },
      { sentence: 'Je vais chez mes grands-parents le dimanche.', translation: 'I go to my grandparents\' house on Sunday.', context: 'describing routine visit' },
      { sentence: 'Mon oncle et ma tante viennent dîner.', translation: 'My uncle and aunt are coming to dinner.', context: 'announcing family gathering' },
      { sentence: 'Combien d\'enfants as-tu?', translation: 'How many children do you have?', context: 'asking about family size' },
      { sentence: 'Mon mari s\'appelle Jean.', translation: 'My husband\'s name is Jean.', context: 'introducing family member' },
      { sentence: 'Les cousins jouent ensemble.', translation: 'The cousins are playing together.', context: 'describing family activity' }
    ],
    culturalContext: 'French family structure values are deeply traditional yet evolving. Multi-generational family homes or frequent visits are common. Family meals, especially Sunday lunch with grandparents, are important cultural practices. Family names and lineage are significant.',
    nativeSpeakerNotes: 'French families often gather for long Sunday lunches lasting hours. Regional variations exist; northern France has different family traditions than southern France. Many older French people prefer formal family titles; younger generations are more casual.',
    practiceQuestions: {
      basic: [
        { question: 'How do you say "mother" in French?', answer: 'La mère (formal) or Maman (informal)', difficulty: 'basic' },
        { question: 'What is the French word for grandmother?', answer: 'La grand-mère', difficulty: 'basic' }
      ],
      intermediate: [
        { question: 'Name five family members in French.', answer: 'Père, mère, frère, sœur, grand-mère (or any five family members)', difficulty: 'intermediate' },
        { question: 'Describe your family structure in French.', answer: 'Example: "J\'ai un frère aîné et une jeune sœur. Mes parents habitent..."', difficulty: 'intermediate' }
      ],
      advanced: [
        { question: 'Explain the cultural importance of family in French society and how it differs from other cultures.', answer: 'Family is central; regular multi-generational gatherings, emphasis on family meals and traditions, strong intergenerational bonds', difficulty: 'advanced' }
      ]
    }
  }

  // ... [Lessons 7-30 would continue with similar enriched structure]
  // Including: Lesson 7: Les Vêtements (Clothing), Lesson 8: Les Aliments (Food), etc.
  // Followed by A2, B1, B2 levels with 30 lessons each
};

// This structure demonstrates the enriched format for all 120 French lessons
// Each lesson includes: detailed vocabulary with synonyms/antonyms/native usage,
// example sentences with context, cultural explanations, native speaker notes,
// and three-tier practice questions (basic/intermediate/advanced)
