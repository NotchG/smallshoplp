"use client";
import { useEffect, useState } from "react";
import { hours, type DayHours } from "@/content";

export type Now = { today: DayHours; isOpen: boolean };

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// Day and minutes in the shop's own time zone, whatever the visitor's device says.
export function readJakartaNow(date = new Date()): Now {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const jsDay = WEEKDAYS[get("weekday")] ?? date.getDay();
  const minutes = (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10);
  const today = hours.find((h) => h.jsDay === jsDay) ?? hours[0];
  const isOpen = minutes >= today.openMin && minutes < today.closeMin;
  return { today, isOpen };
}

// null on the server and before mount, so the static HTML never claims open or closed.
export function useJakartaNow() {
  const [now, setNow] = useState<Now | null>(null);
  useEffect(() => {
    const update = () => setNow(readJakartaNow());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}
