// Today's opening status, worked out in Asia/Jakarta time from the listing hours only.
// Feeds the BUKA sign (OpenSign) and the "hari ini" row of HoursTable.
import type { HoursRow } from "@/content";

export type Status = { open: boolean; title: "BUKA" | "TUTUP"; sub: string; todayJs: number };

const WEEKDAY: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export function jakartaClock(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const hour = Number(get("hour")) % 24; // some engines print 24 at midnight
  return { day: WEEKDAY[get("weekday")] ?? 0, minutes: hour * 60 + Number(get("minute")) };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(".").map(Number);
  return h * 60 + m;
};

const rowFor = (js: number, table: HoursRow[]) => table.find((r) => r.js === js);

export function statusAt(date: Date, table: HoursRow[]): Status {
  const { day, minutes } = jakartaClock(date);
  const today = rowFor(day, table);

  if (today && !today.closed) {
    const open = toMinutes(today.open);
    const close = toMinutes(today.close);
    if (minutes >= open && minutes < close) {
      return { open: true, title: "BUKA", sub: `Hari ini ${today.open}–${today.close}`, todayJs: day };
    }
    if (minutes < open) {
      return { open: false, title: "TUTUP", sub: `Buka hari ini pukul ${today.open}`, todayJs: day };
    }
  }

  // After closing, or closed all day: find the next day that opens.
  for (let i = 1; i <= 7; i++) {
    const next = rowFor((day + i) % 7, table);
    if (next && !next.closed) {
      const when = i === 1 && today && !today.closed ? "besok" : next.day;
      return { open: false, title: "TUTUP", sub: `Buka lagi ${when} ${next.open}`, todayJs: day };
    }
  }
  return { open: false, title: "TUTUP", sub: "", todayJs: day };
}
