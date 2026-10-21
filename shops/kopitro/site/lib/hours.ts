// Open-status rules for a bar that opens 19.00 and closes 02.00 the next day (TRD).
// Pure functions, so they can be tested with a fake clock. No React here.
export type LiveStatus = "openNow" | "tonight" | "monday";

// Days with an opening at 19.00 (jsDay, 0 = Minggu). Monday (1) is closed. (hours)
const OPEN_DAYS = new Set([0, 2, 3, 4, 5, 6]);
const OPEN_HOUR = 19;
const CLOSE_HOUR = 2;

export function statusFor(jsDay: number, hour: number): LiveStatus {
  const yesterday = (jsDay + 6) % 7;
  if (hour < CLOSE_HOUR && OPEN_DAYS.has(yesterday)) return "openNow"; // 1. still last night
  if (hour >= OPEN_HOUR && OPEN_DAYS.has(jsDay)) return "openNow"; // 2. tonight, already open
  if (OPEN_DAYS.has(jsDay)) return "tonight"; // 3. opens later today
  return "monday"; // 4. Monday from 02.00
}

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// Current day and hour in Asia/Jakarta, whatever the visitor's own time zone.
export function jakartaNow(date: Date = new Date()): { jsDay: number; hour: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  return { jsDay: WEEKDAYS[weekday] ?? 1, hour };
}
