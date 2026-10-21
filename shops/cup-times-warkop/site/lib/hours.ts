"use client";
import { useEffect, useState } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Day of the week in Jakarta (0 = Minggu ... 6 = Sabtu), whatever the visitor's own time zone.
export function jakartaWeekday(date = new Date()): number {
  const short = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(date);
  const i = WEEKDAYS.indexOf(short);
  return i === -1 ? date.getDay() : i;
}

// null on the server and during hydration; the weekday after mount. The swap is silent (no live region).
export function useJakartaWeekday(): number | null {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => {
    setDay(jakartaWeekday());
  }, []);
  return day;
}
