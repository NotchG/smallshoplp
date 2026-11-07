// When to message a shop owner: while the shop is open but quiet, on a weekday, never at night.
// Food shops are busiest at lunch, dinner and weekends, and a message from an unknown number late
// at night is the kind owners block or report. Worked out from the shop's Google opening hours
// (raw.json regularOpeningHours.periods) in Jakarta time. Today only nudges with it: shops in a
// good window come first, the rest say when to try. Shared by the server and the browser.

export interface OpeningPeriod {
  open: { day: number; hour: number; minute: number };   // day: 0 Sunday … 6 Saturday
  close?: { day: number; hour: number; minute: number }; // missing: open around the clock
}

export interface SendTiming {
  now: boolean;  // a good time to message right now
  at: number;    // ms: when this window ends, or when the next one starts
  label: string;
}

const JAKARTA = 7 * 3_600_000; // UTC+7 all year, no daylight saving
const DAY = 1440;              // minutes
const hm = (h: number, m = 0) => h * 60 + m;
const MORNING: [number, number] = [hm(9, 30), hm(11)];  // after prep, before the lunch rush
const AFTERNOON: [number, number] = [hm(14), hm(16, 30)]; // after lunch, before dinner
// Quiet stretches per weekday. Friday keeps the morning only: prayers at midday, then the weekend
// rush coming. None at weekends.
const QUIET: [number, number][][] = [[], [MORNING, AFTERNOON], [MORNING, AFTERNOON], [MORNING, AFTERNOON],
  [MORNING, AFTERNOON], [MORNING], []];
const SETTLE = 30;      // minutes just after opening and before closing don't count
const EARLIEST = hm(8); // never earlier than this (a bar's hours past midnight aren't an opening)
const LATEST = hm(21);  // never later than this
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const clock = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

// Open intervals per weekday in minutes, or null when the hours are unknown or round the clock.
function openByDay(periods: OpeningPeriod[] | null | undefined): [number, number][][] | null {
  if (!periods?.length || periods.some((p) => !p.close)) return null;
  const days: [number, number][][] = Array.from({ length: 7 }, () => []);
  for (const { open, close } of periods) {
    const start = open.day * DAY + hm(open.hour, open.minute);
    let end = close!.day * DAY + hm(close!.hour, close!.minute);
    if (end <= start) end += 7 * DAY;
    // Split at midnight: a bar open 16:00–01:00 is open on two days.
    for (let t = start; t < end;) {
      const d = Math.floor(t / DAY);
      const next = Math.min(end, (d + 1) * DAY);
      days[d % 7].push([t - d * DAY, next - d * DAY]);
      t = next;
    }
  }
  return days;
}

// Good windows on a weekday: its quiet stretches while the shop is open. A weekday shop that is
// only open outside them (an evening café) gets its first hour and a half after opening instead.
function windows(day: number, open: [number, number][][] | null): [number, number][] {
  const quiet = QUIET[day];
  if (!open) return quiet;
  const out: [number, number][] = [];
  for (const [o, c] of open[day]) {
    const from = o + SETTLE;
    const to = Math.min(c - SETTLE, LATEST);
    for (const [qs, qe] of quiet) {
      const s = Math.max(qs, from);
      const e = Math.min(qe, to);
      if (e - s >= 30) out.push([s, e]);
    }
  }
  if (!out.length && quiet.length) {
    for (const [o, c] of open[day]) {
      const s = Math.max(o + SETTLE, EARLIEST);
      const e = Math.min(s + 90, c - SETTLE, LATEST);
      if (e - s >= 30) { out.push([s, e]); break; }
    }
  }
  return out.sort((a, b) => a[0] - b[0]);
}

export function sendTiming(periods: OpeningPeriod[] | null | undefined, now: number = Date.now()): SendTiming {
  const open = openByDay(periods);
  const local = new Date(now + JAKARTA); // read with getUTC*: Jakarta wall-clock time
  const today = local.getUTCDay();
  const minute = local.getUTCHours() * 60 + local.getUTCMinutes();
  const midnight = Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate()) - JAKARTA;
  const closed = open !== null && !open[today].some(([o, c]) => minute >= o && minute < c);
  for (let k = 0; k <= 7; k++) {
    const day = (today + k) % 7;
    for (const [s, e] of windows(day, open)) {
      if (k === 0 && minute >= e) continue;
      if (k === 0 && minute >= s) {
        return { now: true, at: midnight + e * 60_000, label: `Good time to message · until ${clock(e)}` };
      }
      const when = k === 0 ? `from ${clock(s)}` : k === 1 ? `tomorrow ${clock(s)}` : `${DAYS[day]} ${clock(s)}`;
      return { now: false, at: midnight + (k * DAY + s) * 60_000, label: closed ? `Closed now · best ${when}` : `Best ${when}` };
    }
  }
  // No window all week (a weekend-only shop): don't hold it back.
  return { now: true, at: now, label: "" };
}
