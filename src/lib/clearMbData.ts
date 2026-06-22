export function clearAllMbData() {
  const keys = Object.keys(localStorage).filter(k => k.startsWith('mb_'));
  keys.forEach(k => localStorage.removeItem(k));
}
