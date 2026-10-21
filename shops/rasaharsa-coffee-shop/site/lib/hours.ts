// Open/closed status in Jakarta time, from the listing's hours (content.ts).
import { hours } from "../content";

export type JakartaNow = { day: number; minutes: number };
export type Status = {
  open: boolean;
  todayClose: string; // "22.30"
  state: string; // "Sedang buka" | "Sedang tutup"
  detail: string; // "Buka hari ini 08.00–22.30" | "Buka lagi pukul 08.00"
  label: string; // state · detail
};

const DAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export function getJakartaNow(date: Date = new Date()): JakartaNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    day: DAYS[get("weekday")] ?? 0,
    minutes: (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10),
  };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const dotted = (hhmm: string) => hhmm.replace(":", "."); // "08:00" -> "08.00"

export function getStatus(now: JakartaNow = getJakartaNow()): Status {
  const today = hours.periods[now.day];
  const open = now.minutes >= toMinutes(today.open) && now.minutes < toMinutes(today.close);
  const todayClose = dotted(today.close);
  if (open) {
    const state = "Sedang buka";
    const detail = `Buka hari ini ${dotted(today.open)}–${todayClose}`;
    return { open, todayClose, state, detail, label: `${state} · ${detail}` };
  }
  // Closed: before opening today, or after closing (then it's tomorrow's opening time).
  const next = now.minutes < toMinutes(today.open) ? today : hours.periods[(now.day + 1) % 7];
  const state = "Sedang tutup";
  const detail = `Buka lagi pukul ${dotted(next.open)}`;
  return { open, todayClose, state, detail, label: `${state} · ${detail}` };
}
