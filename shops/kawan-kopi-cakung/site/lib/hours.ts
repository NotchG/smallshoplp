import { hours, type HoursRow } from "@/content";

// Hours helpers. Everything derives from content.hours; nothing is typed twice.

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Day of the week in Jakarta (0 = Minggu ... 6 = Sabtu), whatever the visitor's timezone. */
export function jakartaDay(date = new Date()): number {
  const wd = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" }).format(date);
  return Math.max(0, WEEKDAYS.indexOf(wd));
}

export function rowForDay(day: number): HoursRow | undefined {
  return hours.find((row) => row.days.includes(day));
}

export const range = (row: HoursRow) => `${row.open}–${row.close}`;

/** "07.30" -> 7.5 */
export function toHour(time: string): number {
  const [h, m] = time.split(".").map(Number);
  return h + (m || 0) / 60;
}

/** Position of a row's open span on a scale (default 06.00–24.00), as CSS percentages. */
export function spanPercent(row: HoursRow, from = 6, to = 24) {
  const span = to - from;
  const left = ((toHour(row.open) - from) / span) * 100;
  const width = ((toHour(row.close) - toHour(row.open)) / span) * 100;
  return { left: `${left.toFixed(3)}%`, width: `${width.toFixed(3)}%` };
}

/** Shared opening time if every row opens at the same time, e.g. "07.30". */
export function commonOpen(): string | undefined {
  const opens = new Set(hours.map((row) => row.open));
  return opens.size === 1 ? hours[0].open : undefined;
}

/** "Sen–Jum 07.30–22.00 · Sab–Min 07.30–23.00" */
export const scheduleLine = () => hours.map((row) => `${row.short} ${range(row)}`).join(" · ");
