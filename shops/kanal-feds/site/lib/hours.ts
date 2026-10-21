import { hours } from "../content";

// Opening hours logic. Always Jakarta time, never the visitor's device time zone.

export type DayState = "before" | "open" | "after";

export type TodayStatus = {
  dayIndex: number; // 0 = Minggu … 6 = Sabtu
  dayName: string;
  state: DayState;
  openLabel: string; // "07.00"
  closeLabel: string; // "21.00"
  openHour: number;
  closeHour: number;
  nextOpenLabel: string; // tomorrow's opening time, for "Sudah tutup · besok buka 07.00"
  progress: number; // 0–1 along the open period
};

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Jakarta",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function jakartaParts(date: Date) {
  const parts = Object.fromEntries(formatter.formatToParts(date).map((p) => [p.type, p.value]));
  return {
    dayIndex: WEEKDAYS[parts.weekday] ?? 0,
    minutes: (Number(parts.hour) % 24) * 60 + Number(parts.minute),
  };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// "07:00" -> "07.00" (Indonesian time notation)
export const timeLabel = (hhmm: string) => hhmm.replace(":", ".");

export function todayStatus(date: Date = new Date()): TodayStatus {
  const { dayIndex, minutes } = jakartaParts(date);
  const today = hours[dayIndex];
  const tomorrow = hours[(dayIndex + 1) % 7];
  const open = toMinutes(today.open);
  const close = toMinutes(today.close);
  const state: DayState = minutes < open ? "before" : minutes >= close ? "after" : "open";
  const progress = Math.min(1, Math.max(0, (minutes - open) / (close - open)));
  return {
    dayIndex,
    dayName: today.day,
    state,
    openLabel: timeLabel(today.open),
    closeLabel: timeLabel(today.close),
    openHour: open / 60,
    closeHour: close / 60,
    nextOpenLabel: timeLabel(tomorrow.open),
    progress,
  };
}
