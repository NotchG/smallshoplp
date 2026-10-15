import { dayNames, hours } from "@/content";

export type Status = {
  open: boolean;
  word: "Buka" | "Tutup";
  line: string;
  /** Today's day index in Asia/Jakarta (0 = Minggu). */
  today: number;
};

const JAKARTA_OFFSET_MIN = 7 * 60; // WIB, UTC+7, no daylight saving

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
/** "09:00" -> "09.00" (Indonesian time style). */
export const dot = (hhmm: string) => hhmm.replace(":", ".");

/** Day and minute-of-day in Asia/Jakarta, whatever the visitor's own timezone. */
export function jakartaNow(date = new Date()) {
  const shifted = new Date(date.getTime() + JAKARTA_OFFSET_MIN * 60_000);
  return { day: shifted.getUTCDay(), minutes: shifted.getUTCHours() * 60 + shifted.getUTCMinutes() };
}

/** What the door sign should say right now. Truthful about Monday, Tuesday and late nights. */
export function statusNow(date = new Date()): Status {
  const { day, minutes } = jakartaNow(date);
  const todayHours = hours[day];

  if (todayHours.open && todayHours.close) {
    const open = toMinutes(todayHours.open);
    const close = toMinutes(todayHours.close);
    if (minutes >= open && minutes < close) {
      return { open: true, word: "Buka", line: `hari ini ${dot(todayHours.open)}–${dot(todayHours.close)}`, today: day };
    }
    if (minutes < open) {
      return { open: false, word: "Tutup", line: `buka hari ini ${dot(todayHours.open)}`, today: day };
    }
  }

  for (let k = 1; k <= 7; k++) {
    const next = (day + k) % 7;
    const h = hours[next];
    if (h.open) {
      const when = k === 1 ? "besok" : dayNames[next];
      return { open: false, word: "Tutup", line: `buka lagi ${when} ${dot(h.open)}`, today: day };
    }
  }
  return { open: false, word: "Tutup", line: "", today: day };
}
