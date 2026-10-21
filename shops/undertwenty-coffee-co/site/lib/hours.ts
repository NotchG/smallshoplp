// Pure helpers for "is it open now" in Jakarta (UTC+7, no DST). Used by OpenPlate and HoursChart.
import { hours, dayNames } from "@/content";

const OPEN = 600; // 10.00, every day
const AXIS = 960; // 10.00 → 02.00, in minutes

export type Status = {
  label: string;
  time: string;
  note: string;
  open: boolean;
};

export function jakartaNow(now: number = Date.now()) {
  const d = new Date(now + 7 * 3600_000);
  return { day: d.getUTCDay(), minutes: d.getUTCHours() * 60 + d.getUTCMinutes() };
}

/** "01.00" from 60, "02.00" from 120. */
export function fmt(minutes: number) {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}.${String(m).padStart(2, "0")}`;
}

export function status(now: number = Date.now()): Status {
  const { day, minutes } = jakartaNow(now);
  const prev = (day + 6) % 7;

  // Still inside last night's period (after midnight, before its close).
  if (minutes < hours[prev].close) {
    return {
      label: `Malam ini · ${dayNames[prev]}`,
      time: `${fmt(OPEN)}–${fmt(hours[prev].close)}`,
      note: "Masih buka",
      open: true,
    };
  }
  const today = hours[day];
  if (minutes >= today.open) {
    return {
      label: `Hari ini · ${dayNames[day]}`,
      time: `${fmt(OPEN)}–${fmt(today.close)}`,
      note: "Sedang buka",
      open: true,
    };
  }
  return {
    label: `Hari ini · ${dayNames[day]}`,
    time: `${fmt(OPEN)}–${fmt(today.close)}`,
    note: "Tutup sekarang · buka lagi 10.00",
    open: false,
  };
}

/** Position of "now" on the 10.00 → 02.00 axis, as a percentage, or null when off the axis. */
export function markerPercent(now: number = Date.now()) {
  const { minutes } = jakartaNow(now);
  const t = (minutes - OPEN + 1440) % 1440;
  if (t > AXIS) return null;
  return { percent: (t / AXIS) * 100, label: fmt(minutes) };
}
