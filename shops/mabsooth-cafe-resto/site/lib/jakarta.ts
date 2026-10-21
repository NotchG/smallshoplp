"use client";
import { useEffect, useState } from "react";
import { hours, type HoursRow } from "@/content";

const DAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export type JakartaNow = { jsDay: number; hour: number; minute: number };

// Weekday and time in Asia/Jakarta, whatever the visitor's own time zone.
export function jakartaNow(date = new Date()): JakartaNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { jsDay: DAYS[get("weekday")] ?? 0, hour: Number(get("hour")), minute: Number(get("minute")) };
}

export type TodayStatus =
  | { kind: "late"; row: HoursRow } // 00.00–00.59 after a Jumat or Sabtu: still open until 01.00
  | { kind: "before"; row: HoursRow } // before 08.00: opens again at 08.00
  | { kind: "open"; row: HoursRow }; // today's hours

const rowFor = (jsDay: number) => hours.find((h) => h.jsDay === jsDay) ?? hours[0];

export function todayStatus(now: JakartaNow): TodayStatus {
  const prev = (now.jsDay + 6) % 7;
  const prevRow = rowFor(prev);
  if (now.hour === 0 && prevRow.closeMin > 1440) return { kind: "late", row: prevRow };
  const row = rowFor(now.jsDay);
  if (now.hour * 60 + now.minute < row.openMin) return { kind: "before", row };
  return { kind: "open", row };
}

// null on the server and before mount, so static HTML never claims a day.
export function useJakartaToday(): TodayStatus | null {
  const [status, setStatus] = useState<TodayStatus | null>(null);
  useEffect(() => {
    const update = () => setStatus(todayStatus(jakartaNow()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return status;
}
