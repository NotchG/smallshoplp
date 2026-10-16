// Jakarta time, open/closed state and clock-hand angles, computed from the listing hours.
import { hours, status } from "@/content";

export type JakartaNow = {
  h: number;
  m: number;
  /** 0 = Senin … 6 = Minggu, matching hours.days */
  day: number;
};

const DAY_INDEX: Record<string, number> = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };

const formatter = () =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: hours.timeZone,
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hourCycle: "h23",
  });

export function jakartaNow(date: Date = new Date()): JakartaNow {
  const parts = formatter().formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    h: Number(get("hour")) % 24,
    m: Number(get("minute")),
    day: DAY_INDEX[get("weekday")] ?? 0,
  };
}

export type OpenState = "open" | "beforeOpen" | "afterClose";

export function openState({ h, m }: JakartaNow): OpenState {
  const now = h * 60 + m;
  const open = hours.open.h * 60 + hours.open.m;
  const close = hours.close.h * 60 + hours.close.m;
  if (now < open) return "beforeOpen";
  if (now >= close) return "afterClose";
  return "open";
}

export const statusText = (state: OpenState) => status[state];

/** Clock face starts at opening time, 10.30: hour hand 315°, minute hand 180°. */
export const START_ANGLES = { hour: 315, minute: 180 } as const;

/**
 * Target angles, always clockwise from the 10.30 start:
 * hour = (h % 12 + m / 60) × 30°, plus 360° if below 315°; minute = m × 6° + 360°.
 */
export function handAngles({ h, m }: JakartaNow) {
  let hour = ((h % 12) + m / 60) * 30;
  if (hour < START_ANGLES.hour) hour += 360;
  const minute = m * 6 + 360;
  return { hour, minute };
}

const pad = (n: number) => String(n).padStart(2, "0");
export const hhmm = ({ h, m }: JakartaNow) => `${pad(h)}.${pad(m)}`;
