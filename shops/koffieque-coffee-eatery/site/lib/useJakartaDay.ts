"use client";
import { useEffect, useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Today's weekday in Asia/Jakarta (0 = Minggu), or null before mount so the static HTML
// never claims a day.
export function useJakartaDay(): number | null {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => {
    const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(
      new Date(),
    );
    const i = DAYS.indexOf(wd);
    setDay(i === -1 ? null : i);
  }, []);
  return day;
}
