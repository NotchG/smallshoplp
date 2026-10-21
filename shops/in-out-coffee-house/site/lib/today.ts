"use client";
import { useEffect, useState } from "react";
import { hours } from "@/content";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Today's JS day number (0 = Minggu) in Asia/Jakarta, known only after mount so the
// static HTML stays the same for everyone.
export function useJakartaDay(): number | null {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => {
    const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(
      new Date(),
    );
    const i = WEEKDAYS.indexOf(wd);
    setDay(i >= 0 ? i : null);
  }, []);
  return day;
}

export function rowFor(day: number | null) {
  return day === null ? undefined : hours.find((h) => h.days.includes(day));
}
