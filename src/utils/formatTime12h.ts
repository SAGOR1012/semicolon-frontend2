// src/utils/formatTime12h.ts
/**
 * Convert a "HH:mm" 24-hour string (e.g. "18:05")
 * to a 12-hour string with AM/PM (e.g. "06:05 PM").
 */
export function formatTime12h(hhmm: string): string {
  if (!hhmm) return '';
  const [hourStr, minute] = hhmm.split(':');
  let hour = Number(hourStr);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; // 0 → 12, 13 → 1, etc.
  return `${hour.toString().padStart(2, '0')}:${minute} ${ampm}`;
}
