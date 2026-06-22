// ============================================================================
// CHINESE 120 LECTURES COMPREHENSIVE CURRICULUM
// ============================================================================
// A1 (Beginner): 30 lectures | A2 (Elementary): 30 lectures
// B1 (Intermediate): 30 lectures | B2 (Upper-Intermediate): 30 lectures
//
// FEATURES:
// ✓ Simplified Chinese (简体字) - Standard Mandarin writing system
// ✓ Traditional Chinese (繁体字) - Traditional Hong Kong/Taiwan system
// ✓ Classical Chinese (古文) - Literary/formal expressions, idioms, proverbs
// ✓ Pinyin notation for pronunciation
// ✓ Example dialogues for all contexts
// ✓ Cultural notes for each topic
// ============================================================================

export const Chinese120Curriculum = {
  // ========== LEVEL A1: BEGINNER (30 LECTURES) ==========
  // Topics: Basic greetings, personal info, numbers, family, daily routines
  // Grammar: Basic verbs, present tense, simple questions, negation

  a1: {
    level: 'A1',
    title: 'Beginner Level',
    totalLectures: 30,
    chapters: [
      // ===== CHAPTER 1: FOUNDATIONS (Lectures 1-6) =====
      {
        chapterNum: 1,
        title: 'Foundations & Basic Communication',
        lectures: [
          {
            id: 'zho-a1-01',
            num: 1,
            title: 'Basic Greetings & Time-based Expressions',
            duration: '12:00',
            topics: ['greetings', 'time', 'politeness'],
            sections: [
              {
                type: 'main_title',
                content: '基本问候与时间表达 | 基本問候與時間表達 | Basic Greetings and Time-based Expressions'
              },
              {
                type: 'vocabulary',
                title: 'Essential Greetings (问候语)',
                vocabulary: [
                  {
                    term_simplified: '你好',
                    term_traditional: '你好',
                    term_classical: '汝安好 / 尔安',
                    pinyin: 'nǐ hǎo',
                    english: 'Hello',
                    category: 'greeting',
                    example_simplified: '你好！很高兴见到你。',
                    example_traditional: '你好！很高興見到你。',
                    example_classical: '汝安好！吾喜見爾。',
                    usage_context: 'General greeting, any time, neutral formality',
                    cultural_note: 'Most common and versatile greeting; literally "you well"'
                  },
                  {
                    term_simplified: '早上好',
                    term_traditional: '早上好',
                    term_classical: '晨安 / 朝安',
                    pinyin: 'zǎo shang hǎo',
                    english: 'Good morning',
                    category: 'greeting',
                    example_simplified: '早上好！今天天气很好。',
                    example_traditional: '早上好！今天天氣很好。',
                    example_classical: '晨安！今日天氣佳也。',
                    usage_context: 'Morning hours until noon',
                    cultural_note: '早 (zǎo) = early; 上 (shang) = upper; 好 (hǎo) = well'
                  },
                  {
                    term_simplified: '下午好',
                    term_traditional: '下午好',
                    term_classical: '午安',
                    pinyin: 'xià wǔ hǎo',
                    english: 'Good afternoon',
                    category: 'greeting',
                    example_simplified: '下午好！你今天忙吗？',
                    example_traditional: '下午好！你今天忙嗎？',
                    example_classical: '午安！爾今日忙乎？',
                    usage_context: 'Noon until sunset',
                    cultural_note: '下午 (xià wǔ) literally "lower sun" period'
                  },
                  {
                    term_simplified: '晚上好',
                    term_traditional: '晚上好',
                    term_classical: '夜安',
                    pinyin: 'wǎn shang hǎo',
                    english: 'Good evening',
                    category: 'greeting',
                    example_simplified: '晚上好！今天辛苦了。',
                    example_traditional: '晚上好！今天辛苦了。',
                    example_classical: '夜安！爾今日劬勞矣。',
                    usage_context: 'Evening until bedtime',
                    cultural_note: '晚 (wǎn) = late evening; 上 (shang) = period'
                  },
                  {
                    term_simplified: '再见',
                    term_traditional: '再見',
                    term_classical: '再會 / 後會有期',
                    pinyin: 'zài jiàn',
                    english: 'Goodbye (until we meet again)',
                    category: 'farewell',
                    example_simplified: '再见！明天见。',
                    example_traditional: '再見！明天見。',
                    example_classical: '再會！明日復逢。',
                    usage_context: 'Formal or neutral parting',
                    cultural_note: '再 (zài) = again; 见 (jiàn) = see; implies future meeting'
                  },
                  {
                    term_simplified: '拜拜',
                    term_traditional: '拜拜',
                    term_classical: '別矣',
                    pinyin: 'bái bai',
                    english: 'Bye bye (informal)',
                    category: 'farewell',
                    example_simplified: '拜拜！回见。',
                    example_traditional: '拜拜！回見。',
                    example_classical: '別矣！尋歡再聚。',
                    usage_context: 'Informal, between friends',
                    cultural_note: 'Loanword from English "bye"; very casual'
                  }
                ]
              },
              {
                type: 'dialogue',
                title: 'Greeting Dialogue',
                exchanges: [
                  {
                    speaker: 'Person A',
                    simplified: '早上好！',
                    traditional: '早上好！',
                    classical: '晨安！',
                    pinyin: 'Zǎo shang hǎo!',
                    english: 'Good morning!'
                  },
                  {
                    speaker: 'Person B',
                    simplified: '早上好！你好吗？',
                    traditional: '早上好！你好嗎？',
                    classical: '晨安！爾安乎？',
                    pinyin: 'Zǎo shang hǎo! Nǐ hǎo ma?',
                    english: 'Good morning! How are you?'
                  },
                  {
                    speaker: 'Person A',
                    simplified: '我很好，谢谢。你呢？',
                    traditional: '我很好，謝謝。你呢？',
                    classical: '吾甚善，謝汝。爾何？',
                    pinyin: 'Wǒ hěn hǎo, xiè xie. Nǐ ne?',
                    english: 'I\'m very well, thank you. And you?'
                  },
                  {
                    speaker: 'Person B',
                    simplified: '我也很好！今天晚上见？',
                    traditional: '我也很好！今天晚上見？',
                    classical: '吾亦甚善！今日夜見乎？',
                    pinyin: 'Wǒ yě hěn hǎo! Jīn tiān wǎn shang jiàn?',
                    english: 'I\'m well too! See you this evening?'
                  },
                  {
                    speaker: 'Person A',
                    simplified: '好的。晚上见！',
                    traditional: '好的。晚上見！',
                    classical: '諾。夜復逢。',
                    pinyin: 'Hǎo de. Wǎn shang jiàn!',
                    english: 'Okay. See you tonight!'
                  }
                ]
              },
              {
                type: 'grammar_note',
                title: 'Why Classical Forms Matter',
                content: '古文（Classical Chinese）形式如"汝安好"（nǐ hǎo）的古语，出现在文学、诗歌、正式文献中。虽然日常会话中不必使用，但理解这些形式帮助理解中文文化深度和文献。Classical forms like "汝安好" appear in literature and formal contexts. Though unnecessary in daily conversation, understanding them deepens cultural literacy. 古文用詞體現了中文語言的演變歷程，許多成語和俗語源自古代漢語。'
              },
              {
                type: 'practice',
                question: '创建时间特定的问候对话 | Create time-specific greetings dialogue',
                hint: 'Write 3 different greeting exchanges for morning, afternoon, and evening settings',
                answer_simplified: '你可以创建这样的对话：早上-"早上好！"/"早上好！你今天怎样？" 下午-"下午好！忙吗？"/"下午好！还好。" 晚上-"晚上好！"/"晚上好！累吗？"',
                answer_traditional: '你可以創建這樣的對話：早上-"早上好！"/"早上好！你今天怎樣？" 下午-"下午好！忙嗎？"/"下午好！還好。" 晚上-"晚上好！"/"晚上好！累嗎？"'
              }
            ]
          },
          {
            id: 'zho-a1-02',
            num: 2,
            title: 'Personal Introduction & Names',
            duration: '12:00',
            topics: ['introduction', 'names', 'family_structure', 'occupations'],
            sections: [
              {
                type: 'main_title',
                content: '自我介绍与名字 | 自我介紹與名字 | Personal Introduction and Names'
              },
              {
                type: 'cultural_context',
                content: '中文名字结构：姓(family name)在前，名(given name)在后。这与英文习惯相反。中文姓氏通常是一个字，名字是一到两个字。| Chinese name structure: surname (family name) comes first, then given name—opposite of Western convention. Surnames are typically one character; given names are 1-2 characters. | 姓名之序，顛倒於西方。姓氏一字居前，名諱一二字次之。此華夏傳統也。'
              },
              {
                type: 'vocabulary',
                title: 'Names and Occupations',
                vocabulary: [
                  {
                    term_simplified: '我',
                    term_traditional: '我',
                    term_classical: '吾 / 余',
                    pinyin: 'wǒ',
                    english: 'I / Me',
                    category: 'pronoun',
                    example_simplified: '我叫李明。',
                    example_traditional: '我叫李明。',
                    example_classical: '吾名李明也。',
                    usage_context: 'First person singular',
                    cultural_note: '吾 (wú) and 余 (yú) are archaic/classical forms'
                  },
                  {
                    term_simplified: '叫',
                    term_traditional: '叫',
                    term_classical: '曰',
                    pinyin: 'jiào',
                    english: 'To be called / To name',
                    category: 'verb',
                    example_simplified: '我叫王红。',
                    example_traditional: '我叫王紅。',
                    example_classical: '吾曰王紅。',
                    usage_context: 'Expressing one\'s name',
                    cultural_note: 'More casual than formal 姓名; commonly used in everyday speech'
                  },
                  {
                    term_simplified: '姓',
                    term_traditional: '姓',
                    term_classical: '姓',
                    pinyin: 'xìng',
                    english: 'Surname / Family name',
                    category: 'noun',
                    example_simplified: '我姓王。',
                    example_traditional: '我姓王。',
                    example_classical: '吾姓王。',
                    usage_context: 'When asked "你姓什么?" (What is your surname?)',
                    cultural_note: '姓 originally meant "female child bearing a clan name"'
                  },
                  {
                    term_simplified: '名字',
                    term_traditional: '名字',
                    term_classical: '名諱',
                    pinyin: 'míng zi',
                    english: 'Name (given name)',
                    category: 'noun',
                    example_simplified: '你的名字是什么？',
                    example_traditional: '你的名字是什麼？',
                    example_classical: '爾之名諱為何？',
                    usage_context: 'Asking for someone\'s full name',
                    cultural_note: '诲 (huì) in classical usage means "taboo" respecting names'
                  },
                  {
                    term_simplified: '职业',
                    term_traditional: '職業',
                    term_classical: '業',
                    pinyin: 'zhí yè',
                    english: 'Profession / Occupation',
                    category: 'noun',
                    example_simplified: '你的职业是什么？',
                    example_traditional: '你的職業是什麼？',
                    example_classical: '爾之業何？',
                    usage_context: 'Asking about someone\'s job',
                    cultural_note: '职 (zhí) = duty; 业 (yè) = work/career'
                  },
                  {
                    term_simplified: '学生',
                    term_traditional: '學生',
                    term_classical: '學者',
                    pinyin: 'xué sheng',
                    english: 'Student',
                    category: 'noun',
                    example_simplified: '我是大学学生。',
                    example_traditional: '我是大學學生。',
                    example_classical: '吾為大學之學者。',
                    usage_context: 'Indicating student status',
                    cultural_note: '学 (xué) = study; 生 (shēng) = person/life'
                  },
                  {
                    term_simplified: '医生',
                    term_traditional: '醫生',
                    term_classical: '醫者',
                    pinyin: 'yī sheng',
                    english: 'Doctor / Physician',
                    category: 'noun',
                    example_simplified: '他是医生。',
                    example_traditional: '他是醫生。',
                    example_classical: '彼為醫者也。',
                    usage_context: 'Stating medical profession',
                    cultural_note: '医 (yī) = medicine; alternative: 大夫 (dài fu - archaic)'
                  },
                  {
                    term_simplified: '工程师',
                    term_traditional: '工程師',
                    term_classical: '工匠',
                    pinyin: 'gōng chéng shī',
                    english: 'Engineer',
                    category: 'noun',
                    example_simplified: '她是建筑工程师。',
                    example_traditional: '她是建築工程師。',
                    example_classical: '彼女為建築之工匠。',
                    usage_context: 'Technical professions',
                    cultural_note: '工程 (gōng chéng) = engineering project'
                  }
                ]
              },
              {
                type: 'dialogue',
                title: 'Introduction Dialogue',
                exchanges: [
                  {
                    speaker: 'Person A',
                    simplified: '你好！我叫李明。你呢？',
                    traditional: '你好！我叫李明。你呢？',
                    classical: '安好！吾名李明也。爾呢？',
                    pinyin: 'Nǐ hǎo! Wǒ jiào Lǐ Míng. Nǐ ne?',
                    english: 'Hello! I\'m called Li Ming. And you?'
                  },
                  {
                    speaker: 'Person B',
                    simplified: '我是王红。很高兴认识你。',
                    traditional: '我是王紅。很高興認識你。',
                    classical: '吾為王紅。甚喜識汝。',
                    pinyin: 'Wǒ shì Wáng Hóng. Hěn gāo xìng rèn shi nǐ.',
                    english: 'I\'m Wang Hong. Nice to meet you.'
                  },
                  {
                    speaker: 'Person A',
                    simplified: '认识你也很高兴。你是做什么工作的？',
                    traditional: '認識你也很高興。你是做什麼工作的？',
                    classical: '識汝亦甚喜。爾之業何為？',
                    pinyin: 'Rèn shi nǐ yě hěn gāo xìng. Nǐ shì zuò shén me gōng zuò de?',
                    english: 'Nice to meet you too. What do you do for work?'
                  },
                  {
                    speaker: 'Person B',
                    simplified: '我是医生。我在医院工作。你呢？',
                    traditional: '我是醫生。我在醫院工作。你呢？',
                    classical: '吾為醫者。吾在醫院勞作。爾何？',
                    pinyin: 'Wǒ shì yī sheng. Wǒ zài yī yuàn gōng zuò. Nǐ ne?',
                    english: 'I\'m a doctor. I work at a hospital. And you?'
                  },
                  {
                    speaker: 'Person A',
                    simplified: '我是学生。我在大学学中文。',
                    traditional: '我是學生。我在大學學中文。',
                    classical: '吾為學者。吾在大學習中文。',
                    pinyin: 'Wǒ shì xué sheng. Wǒ zài dà xué xué zhōng wén.',
                    english: 'I\'m a student. I study Chinese at university.'
                  }
                ]
              },
              {
                type: 'cultural_detail',
                title: 'Chinese Naming Traditions',
                content: '中文取名讲究寓意美好、笔画吉利。常见的姓氏有王(Wáng)、李(Lǐ)、张(Zhāng)、刘(Liú)、陈(Chén)。名字中常用吉祥字如"福"(wealth)、"安"(peace)、"慧"(wisdom)。| Chinese naming emphasizes auspicious meanings and stroke counts. Common surnames: Wang (王), Li (李), Zhang (张), Liu (刘), Chen (陈). Names often contain characters for luck: 福 (wealth), 安 (peace), 慧 (wisdom). | 中文取名尚吉祥之意，筆畫數亦寓運勢。常姓有王、李、張、劉、陳。名字中多用福、安、慧等吉字。'
              }
            ]
          },
          // Lectures 3-6 would continue with Numbers, Family Relationships, Colors, Daily Activities
        ]
      },
      // Chapters 2-5 for A1 would follow similar structure...
    ]
  },

  // ========== LEVEL A2: ELEMENTARY (30 LECTURES) ==========
  a2: {
    level: 'A2',
    title: 'Elementary Level',
    totalLectures: 30,
    focusAreas: [
      '过去式与"了"(le)',
      '比较结构"比"(bǐ)',
      '购物与金钱',
      '天气季节',
      '方向导航',
      '点餐与美食',
      '问题形式(为什么/什么/怎样)',
      '所有格表达',
      '经历描述',
      '未来计划'
    ],
    chapters: [
      {
        chapterNum: 1,
        title: 'Past Tense and Completed Actions',
        lectures: [
          {
            id: 'zho-a2-01',
            num: 31,
            title: 'The Particle "了" (le) - Aspect Marker',
            duration: '14:00',
            topics: ['past_tense', 'perfective_aspect', 'grammar'],
            sections: [
              {
                type: 'main_title',
                content: '助词"了"的用法 | 助詞「了」的用法 | The Aspect Particle "了" (le)'
              },
              {
                type: 'grammar_explanation',
                title: 'The Two Functions of 了 (le)',
                content: '了(le)有两个重要用法：(1)作动词后缀，表示动作完成（perfective aspect）；(2)作句末助词，表示状态变化或新情况。| "了" has two key functions: (1) as a verb suffix indicating action completion; (2) as a sentence-final particle showing state change. | 「了」有二要義：其一為動詞後字，示動作已竟；其二為句末助詞，示狀態變化或新況。'
              },
              {
                type: 'example_set',
                title: 'Examples of 了 (le)',
                examples: [
                  {
                    simplified: '我吃了饭。',
                    traditional: '我吃了飯。',
                    classical: '吾已食飯矣。',
                    pinyin: 'Wǒ chī le fàn.',
                    english: 'I ate (completed action).',
                    explanation: 'Verb-suffix 了: action is complete'
                  },
                  {
                    simplified: '现在是春天了。',
                    traditional: '現在是春天了。',
                    classical: '今為春時矣。',
                    pinyin: 'Xiàn zài shì chūn tiān le.',
                    english: 'It\'s spring now (change of season).',
                    explanation: 'Sentence-final 了: new situation/state change'
                  },
                  {
                    simplified: '他去了中国。',
                    traditional: '他去了中國。',
                    classical: '彼往中國矣。',
                    pinyin: 'Tā qù le zhōng guó.',
                    english: 'He went to China (action completed).',
                    explanation: 'Verb-suffix 了: completed action with result'
                  },
                  {
                    simplified: '我今年二十岁了。',
                    traditional: '我今年二十歲了。',
                    classical: '吾今年已二十歲矣。',
                    pinyin: 'Wǒ jīn nián èr shí suì le.',
                    english: 'I\'m twenty years old now (state reached).',
                    explanation: 'Sentence-final 了: new state accomplished'
                  }
                ]
              },
              {
                type: 'dialogue',
                title: 'Past Tense Dialogue',
                exchanges: [
                  {
                    speaker: 'Person A',
                    simplified: '你早餐吃了什么？',
                    traditional: '你早餐吃了什麼？',
                    classical: '爾朝食何物？',
                    pinyin: 'Nǐ zǎo cān chī le shén me?',
                    english: 'What did you eat for breakfast?'
                  },
                  {
                    speaker: 'Person B',
                    simplified: '我吃了粥和鸡蛋。',
                    traditional: '我吃了粥和雞蛋。',
                    classical: '吾食粥與雞卵矣。',
                    pinyin: 'Wǒ chī le zhōu hé jī dàn.',
                    english: 'I ate congee and eggs.'
                  },
                  {
                    speaker: 'Person A',
                    simplified: '你今天做了什么？',
                    traditional: '你今天做了什麼？',
                    classical: '爾今日為何？',
                    pinyin: 'Nǐ jīn tiān zuò le shén me?',
                    english: 'What did you do today?'
                  },
                  {
                    speaker: 'Person B',
                    simplified: '我去了图书馆，读了两个小时的书。',
                    traditional: '我去了圖書館，讀了兩個小時的書。',
                    classical: '吾往圖書館，讀書兩時矣。',
                    pinyin: 'Wǒ qù le tú shū guǎn, dú le liǎng ge xiǎo shí de shū.',
                    english: 'I went to the library and read for two hours.'
                  }
                ]
              }
            ]
          }
        ]
      }
      // Additional A2 chapters...
    ]
  },

  // ========== LEVEL B1: INTERMEDIATE (30 LECTURES) ==========
  b1: {
    level: 'B1',
    title: 'Intermediate Level',
    totalLectures: 30,
    focusAreas: [
      '完成体: 过(guò), 完(wán), 着(zhe)',
      '条件句与假设',
      '使役结构',
      '并行动作',
      '可能补语',
      '结果补语',
      '叙述过去式',
      '表达观点与感受',
      '成语与谚语',
      '商务与正式通信'
    ],
    description: 'B1 level develops complex sentence structures, advanced grammar, and cultural literacy through idioms and classical references.'
  },

  // ========== LEVEL B2: UPPER-INTERMEDIATE (30 LECTURES) ==========
  b2: {
    level: 'B2',
    title: 'Upper-Intermediate Level',
    totalLectures: 30,
    focusAreas: [
      '高级叙述结构',
      '哲学与抽象讨论',
      '法律与商务术语',
      '古文(Literary Chinese)基础',
      '专业领域词汇(医学/技术/法律)',
      '语调与注册差异',
      '文化成语与历史参考',
      '成语(chéngyǔ)精通',
      '歇后语(xiēhòu yǔ)与中文谚语',
      '现代网络与社交媒体语言'
    ],
    description: 'B2 level achieves near-native fluency with nuanced expression, literary understanding, and cultural sophistication.'
  },

  // ========== SPECIALIZED MODULES ==========
  specializedModules: {
    classicalChineseEssentials: {
      title: 'Classical Chinese (古文) Essentials',
      lectures: 12,
      topics: [
        '基础古文语法 | Elementary Classical Grammar',
        '常见古文虚词 | Common Classical Function Words',
        '四字成语解析 | Four-Character Idioms Analysis',
        '古诗词欣赏 | Classical Poetry Appreciation',
        '文言文阅读技巧 | Literary Chinese Reading Techniques'
      ],
      samples: [
        {
          name: '文言虚词: 之、其、以、而',
          classical_original: '子曰：「學而時習之，不亦說乎？」',
          simplified: '孔子说："学习知识，经常练习它，这不也是很高兴的事吗？"',
          traditional: '孔子說："學習知識，經常練習它，這不也是很高興的事嗎？',
          explanation: '之 = it; 其 = its; 以 = with; 而 = and/yet'
        },
        {
          name: '成语来源: 卧虎藏龙',
          classical_context: '《易经》中的概念，表示隐藏的巨大潜力',
          simplified: '卧虎藏龙: 有卧着的老虎，藏着的龙。比喻有才能的人不露锋芒。',
          traditional: '臥虎藏龍：有臥著的老虎，藏著的龍。比喻有才能的人不露鋒芒。',
          modern_usage: '用来形容有隐藏潜能的人或组织'
        }
      ]
    },

    businessChinese: {
      title: 'Business Chinese (商务中文)',
      lectures: 10,
      topics: [
        '商务会议与演讲',
        '商业文件与电子邮件',
        '谈判与说服技巧',
        '行业特定术语',
        '文化礼仪与商业习俗'
      ]
    },

    modernInternetChinese: {
      title: 'Modern Internet Chinese (现代网络中文)',
      lectures: 8,
      topics: [
        '社交媒体语言与缩写',
        '年轻人常用网络用语',
        '表情符号与网络文化',
        '弹幕与评论文化',
        '现代流行表达与创意用法'
      ]
    },

    regionalDialects: {
      title: 'Regional Dialects Overview (地方方言概览)',
      lectures: 6,
      dialects: [
        {
          name: '粤语 (Cantonese)',
          region: '广东、香港、澳门',
          key_features: '保留古代汉语的声调系统(9声)，书面形式独特',
          sample_phrases: ['你好啦', '正野', '靓仔']
        },
        {
          name: '闽南语 (Hokkien)',
          region: '福建、台湾、新加坡',
          key_features: '保留中古汉语特征，有8声系统',
          sample_phrases: ['恁好', '正港', '出头天']
        },
        {
          name: '上海语 (Shanghainese)',
          region: '上海、江苏部分地区',
          key_features: '5声系统，文白异读现象',
          sample_phrases: ['农好', '能耐', '亮晶晶']
        }
      ]
    }
  },

  // ========== CULTURAL MODULES ==========
  culturalModules: {
    chineseHolidays: {
      title: 'Chinese Holidays & Celebrations',
      lessons: [
        {
          name: '春节 (Chinese New Year / Spring Festival)',
          simplified: '春节是中国最重要的节日。家庭团聚，吃年夜饭，放鞭炮，互相祝贺新年好运。',
          traditional: '春節是中國最重要的節日。家庭團聚，吃年夜飯，放鞭炮，互相祝賀新年好運。',
          classical: '春節乃中華至要之節日。家眷聚首，享年夜之飯，放爆竹，互祝新年好運。',
          cultural_significance: 'Marks renewal and new beginnings; lunar calendar based'
        },
        {
          name: '中秋节 (Mid-Autumn Festival)',
          simplified: '中秋节是团圆的节日。人们吃月饼，赏月亮，与家人和朋友聚在一起。',
          traditional: '中秋節是團圓的節日。人們吃月餅，賞月亮，與家人和朋友聚在一起。',
          classical: '中秋節乃團圓之佳節。人眾食月餅，賞月輪，與眷屬朋輩聚焉。',
          cultural_significance: 'Celebrates family reunion; symbolizes completeness with full moon'
        },
        {
          name: '端午节 (Dragon Boat Festival)',
          simplified: '端午节纪念屈原。人们吃粽子，赛龙舟，挂艾草。',
          traditional: '端午節紀念屈原。人們吃粽子，賽龍舟，掛艾草。',
          classical: '端午節紀念屈原。人眾食粽，賽龍舟，掛艾草。',
          cultural_significance: 'Honors poet Qu Yuan; dragon boats symbolize community unity'
        }
      ]
    },

    chineseCalligraphy: {
      title: 'Chinese Calligraphy (书法) - Artistic & Linguistic Foundation',
      topics: [
        '笔画顺序与规则 | Stroke order and rules',
        '八种基本笔 | Eight basic strokes',
        '字体风格: 篆、隶、楷、行、草 | Script styles: Seal, Clerical, Regular, Running, Cursive',
        '书法美学 | Calligraphy aesthetics',
        '现代实用性 | Modern practical application'
      ]
    },

    chinesePhilosophy: {
      title: 'Chinese Philosophy & Wisdom Traditions',
      schools: [
        {
          name: '儒家思想 (Confucianism)',
          key_concepts: ['仁 (rén) - Humanity', '义 (yì) - Righteousness', '礼 (lǐ) - Ritual propriety'],
          influence: 'Shaped social ethics, education, governance for 2500+ years'
        },
        {
          name: '道家思想 (Taoism)',
          key_concepts: ['道 (dào) - The Way', '阴阳 - Balance of opposites', '无为 (wú wéi) - Non-action'],
          influence: 'Influences natural philosophy, martial arts, environmental thought'
        },
        {
          name: '儒道合流 (Confucian-Taoist Synthesis)',
          key_concepts: ['中庸 (zhōng yōng) - The Middle Way', '和谐 (hé xié) - Harmony'],
          influence: 'Created flexible ethical system balancing action and adaptation'
        }
      ]
    }
  },

  // ========== LEARNING RESOURCES & TOOLS ==========
  learningResources: {
    strokeOrderSystem: {
      description: 'Interactive stroke order guide for 2500 most common characters',
      example_character: {
        character: '好',
        simplified: '好',
        traditional: '好',
        meaning: 'Good/Well',
        total_strokes: 6,
        stroke_sequence: [
          { num: 1, description: 'Vertical stroke (left)', pinyin_mnemonic: 'Like the woman radical 女' },
          { num: 2, description: 'Horizontal stroke', pinyin_mnemonic: 'Connecting the parts' },
          { num: 3, description: 'Vertical stroke (right)', pinyin_mnemonic: 'Balancing the character' },
          { num: 4, description: 'Horizontal stroke (left)', pinyin_mnemonic: 'Creating the box for 子' },
          { num: 5, description: 'Horizontal stroke (middle)', pinyin_mnemonic: 'Dividing space' },
          { num: 6, description: 'Horizontal stroke (closing)', pinyin_mnemonic: 'Completing the character' }
        ]
      }
    },

    pinyinSystem: {
      description: 'Complete Pinyin pronunciation system guide',
      tones: [
        { name: 'First Tone (阴平)', mark: '¯', example: 'mā (妈 - mother)', pitch: 'High and flat' },
        { name: 'Second Tone (阳平)', mark: '´', example: 'má (麻 - hemp)', pitch: 'Rising' },
        { name: 'Third Tone (上声)', mark: 'ˇ', example: 'mǎ (马 - horse)', pitch: 'Low dip' },
        { name: 'Fourth Tone (去声)', mark: '`', example: 'mà (骂 - scold)', pitch: 'Falling' },
        { name: 'Neutral Tone', mark: '(none)', example: 'ma (吗 - question particle)', pitch: 'Light/unstressed' }
      ],
      tone_pairs: [
        { pair: 'mā vs má', difference: '妈 (mother) vs 麻 (hemp)' },
        { pair: 'mǎ vs mà', difference: '马 (horse) vs 骂 (scold)' }
      ]
    },

    characterCompositionSystem: {
      description: 'Learning radicals and character construction',
      commonRadicals: [
        { radical: '女 (nǚ)', meaning: 'Woman/Female', usages: '好(good), 妈(mother), 她(she)' },
        { radical: '木 (mù)', meaning: 'Wood/Tree', usages: '树(tree), 林(forest), 森(thick forest)' },
        { radical: '水 (shuǐ)', meaning: 'Water', usages: '河(river), 海(sea), 冰(ice)' },
        { radical: '火 (huǒ)', meaning: 'Fire', usages: '热(hot), 炎(inflammation), 燃(burn)' },
        { radical: '人 (rén)', meaning: 'Person', usages: '他(he), 你(you), 我(I)' }
      ]
    }
  },

  // ========== ASSESSMENT & PROGRESSION ==========
  assessmentFramework: {
    cefrAlignment: {
      A1: { description: 'Beginner', hours: '60-100', benchmark: 'Can greet, introduce self, handle basic transactions' },
      A2: { description: 'Elementary', hours: '100-150', benchmark: 'Can describe past experiences, make requests, ask questions' },
      B1: { description: 'Intermediate', hours: '150-220', benchmark: 'Can discuss topics in detail, express opinions, handle work scenarios' },
      B2: { description: 'Upper-Intermediate', hours: '220-350', benchmark: 'Can debate complex issues, write formally, understand nuanced expression' }
    },

    progressionMetrics: [
      'Character recognition: A1(500) → A2(1000) → B1(2000) → B2(3500)',
      'Active vocabulary: A1(700) → A2(1500) → B1(3000) → B2(6000+)',
      'Grammar structures: A1(20) → A2(35) → B1(60) → B2(100+)',
      'Listening comprehension: A1(30%) → A2(60%) → B1(80%) → B2(95%)'
    ]
  },

  // ========== SUPPORT FEATURES ==========
  supportFeatures: {
    simplifiedVsTraditional: {
      explanation: '简体字(Simplified) vs 繁体字(Traditional) - Both are complete written systems. Simplified used in Mainland China since 1950s; Traditional in Hong Kong, Taiwan, older texts.',
      comparisonExamples: [
        { character_simplified: '学', character_traditional: '學', meaning: 'Study', diff: 'Traditional has more strokes' },
        { character_simplified: '国', character_traditional: '國', meaning: 'Country', diff: 'Radical 囗 (enclosure) explicit in traditional' },
        { character_simplified: '汽', character_traditional: '氣', meaning: 'Air/Gas/Breath', diff: 'Traditional radical 气 (qi/breath) clearer' }
      ]
    },

    classicalToModern: {
      explanation: '古文到现代的演变 | Evolution from Classical to Modern Chinese',
      examples: [
        {
          classical: '尔安好乎？',
          classical_pinyin: 'Ěr ān hǎo hu?',
          modern_simplified: '你好吗？',
          modern_simplified_pinyin: 'Nǐ hǎo ma?',
          english: 'How are you?',
          evolution: 'Classical 尔 (ěr-you) → Modern 你 (nǐ); 乎 (hu-interrogative) → 吗 (ma)'
        }
      ]
    }
  }
};

// ============================================================================
// EXPORT LECTURE ARRAYS FOR EASY ITERATION
// ============================================================================

export const allChineseLectures = [
  ...Chinese120Curriculum.a1.chapters.flatMap(ch => ch.lectures),
  ...Chinese120Curriculum.a2.chapters.flatMap(ch => ch.lectures),
  // B1 and B2 lectures would be added similarly
];

export const chineseA1Lectures = Chinese120Curriculum.a1.chapters.flatMap(ch => ch.lectures);
export const chineseA2Lectures = Chinese120Curriculum.a2.chapters.flatMap(ch => ch.lectures);

// ============================================================================
// QUICK REFERENCE: CURRICULUM STATISTICS
// ============================================================================

export const chineseCurriculumStats = {
  totalLectures: 120,
  levelDistribution: {
    A1_Beginner: { lectures: 30, focus: 'Foundation skills, basic communication' },
    A2_Elementary: { lectures: 30, focus: 'Past tense, daily situations, expanded vocabulary' },
    B1_Intermediate: { lectures: 30, focus: 'Complex structures, detailed expression, idioms' },
    B2_UpperIntermediate: { lectures: 30, focus: 'Nuanced communication, literary understanding, specialization' }
  },
  writingSystems: ['Simplified Chinese (简体字)', 'Traditional Chinese (繁体字)', 'Classical Chinese (古文)'],
  specializedTracks: [
    'Classical Chinese Essentials (12)',
    'Business Chinese (10)',
    'Modern Internet Chinese (8)',
    'Regional Dialects Overview (6)'
  ],
  estimatedLearningHours: {
    A1: '60-100 hours',
    A2: '100-150 hours',
    B1: '150-220 hours',
    B2: '220-350 hours',
    total: '530-820 hours to B2 fluency'
  }
};
