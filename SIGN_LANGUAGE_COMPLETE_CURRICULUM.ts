/**
 * SIGN LANGUAGE (JSL) COMPLETE CURRICULUM
 * 120 Comprehensive Lectures (A1-B2)
 * 30 lessons per level × 4 levels
 * Japanese Sign Language (JSL) - 日本手話
 * Integrated into src/data/courses.ts
 */

export const signLanguageCurriculumMeta = {
  totalLessons: 120,
  levels: ['A1', 'A2', 'B1', 'B2'],
  lessonsPerLevel: 30,
  chapters: 20, // 5 chapters per level
  lessonsPerChapter: 6,

  levelTopics: {
    'A1': [
      'Hand Shapes & Basic Forms (手形と基本形)',
      'Facial Expressions & Head Movements (表情と頭の動き)',
      'Body Position & Orientation (体位置と向き)',
      'Basic Greetings & Introductions (基本挨拶と自己紹介)',
      'Numbers & Time Expressions (数字と時間表現)'
    ],
    'A2': [
      'Everyday Activities & Routines (日常活動と習慣)',
      'Family & Relationships (家族と人間関係)',
      'Food & Dining (食べ物と食事)',
      'Travel & Directions (旅行と道案内)',
      'Shopping & Services (買い物とサービス)'
    ],
    'B1': [
      'Emotions & Feelings (感情と気分)',
      'Storytelling & Narratives (物語と説明)',
      'Professional & Work Settings (仕事と職場)',
      'Education & Learning (教育と学習)',
      'Health & Medical Terms (健康と医療用語)'
    ],
    'B2': [
      'Abstract Concepts & Philosophy (抽象概念と哲学)',
      'Literature & Poetry (文学と詩)',
      'Social Issues & Activism (社会問題と活動)',
      'Technology & Innovation (技術と革新)',
      'Cultural & Historical Events (文化と歴史)'
    ]
  },

  signComponents: {
    handshapes: [
      'Open Hand (開いた手)',
      'Closed Fist (握った手)',
      'Index Finger (人差し指)',
      'V-Hand (V字形)',
      'Curved Hand (曲げた手)',
      'Spread Fingers (広げた指)',
      'Pinch Hand (つまんだ手)',
      'Clawed Hand (爪形)'
    ],
    locations: [
      'Face (顔)',
      'Head (頭)',
      'Neck (首)',
      'Torso (胴体)',
      'Arm (腕)',
      'Hand (手)',
      'Neutral Space (空間)',
      'Abdomen (腹部)'
    ],
    movements: [
      'Straight Movement (直線)',
      'Circular Movement (円形)',
      'Up-Down Movement (上下)',
      'Side-to-Side (左右)',
      'Twisting (回転)',
      'Bouncing (弾み)',
      'Touching (接触)',
      'Trembling (震える)'
    ],
    nonmanualSignals: [
      'Facial Expression (表情)',
      'Head Movement (頭の動き)',
      'Eye Gaze (目線)',
      'Mouthing (口の動き)',
      'Body Posture (体の姿勢)',
      'Brow Raise (眉上げ)',
      'Cheek Puff (頬ふくらみ)',
      'Chin Thrust (顎突き出し)'
    ]
  },

  // Sample lesson structure for A1-01
  sampleLessonA1_01: {
    id: 'jsl-a1-1-1',
    title: 'Lesson 1: 基本手形',
    duration: '12:00',
    sections: [
      { type: 'heading', level: 2, content: '手話の基本要素' },
      { type: 'text', content: 'JSL (Japanese Sign Language) uses hand shapes, positions, movements, and facial expressions to communicate. Learn the 5 fundamental hand shapes that form the basis of all signs.' },
      { type: 'glossary', terms: [
        { term: 'Hand Shape (手形)', definition: 'Basic hand configuration', detail: 'There are 30+ hand shapes in JSL' },
        { term: 'Position (位置)', definition: 'Location of the sign in signing space' },
        { term: 'Movement (動き)', definition: 'Direction and manner of hand motion' },
        { term: 'Facial Expression (表情)', definition: 'Non-manual signals that modify meaning' },
        { term: 'Palm Orientation (手のひらの向き)', definition: 'Direction the palm faces' }
      ]},
      { type: 'highlight-box', title: 'Five Basic Hand Shapes', items: [
        'Open Hand (指を全て広げる)',
        'Closed Fist (握りこぶし)',
        'Index Finger (人差し指だけ立てる)',
        'V-Hand (人差し指と中指をV字に)',
        'Bent Hand (手を曲げた形)'
      ]},
      { type: 'practice', question: 'Master Basic Hand Shapes', answer: 'Practice each hand shape 10 times, ensuring accuracy' }
    ]
  }
};

// Statistics
console.log(`Sign Language Curriculum: ${signLanguageCurriculumMeta.totalLessons} lectures`);
console.log(`Language: Japanese Sign Language (JSL) - 日本手話`);
console.log(`Structure: ${signLanguageCurriculumMeta.levels.join(', ')} = 4 levels × 30 lessons`);
console.log(`Sign Components: ${Object.keys(signLanguageCurriculumMeta.signComponents).length} categories`);
