export interface Level {
  min: number;
  max: number;
  title: string;
  color: string;
  icon: string;
}

export const LEVELS: Level[] = [
  { min: 0,   max: 4,         title: '見習い',       color: '#9B6DD6', icon: '🌱' },
  { min: 5,   max: 9,         title: '学習者',       color: '#5BC8E8', icon: '📖' },
  { min: 10,  max: 19,        title: '努力家',       color: '#4CAF7D', icon: '💪' },
  { min: 20,  max: 29,        title: '猛者',         color: '#F5C842', icon: '⚡' },
  { min: 30,  max: 39,        title: '達人',         color: '#E8354A', icon: '🔥' },
  { min: 40,  max: 49,        title: '修羅',         color: '#9B6DD6', icon: '💎' },
  { min: 50,  max: 74,        title: '伝説',         color: '#F5C842', icon: '👑' },
  { min: 75,  max: 99,        title: '超人',         color: '#F5C842', icon: '🏆' },
  { min: 100, max: Infinity,  title: '100講義の神',   color: '#F5C842', icon: '💯' },
];

export function getLevel(count: number): Level {
  return LEVELS.find(l => count >= l.min && count <= l.max) ?? LEVELS[0];
}

export function getNextLevel(count: number): Level | null {
  const idx = LEVELS.findIndex(l => count >= l.min && count <= l.max);
  return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
}
