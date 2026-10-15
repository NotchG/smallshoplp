"use client";
import { useEffect, useState } from "react";
import { hours, hoursText } from "@/content";

const SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Today's weekday (0 = Minggu) in Asia/Jakarta, or null before mount (SSR / no JS). */
export function useJakartaDay() {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => {
    try {
      const name = new Intl.DateTimeFormat("en-US", { timeZone: hoursText.timeZone, weekday: "short" }).format(new Date());
      const i = SHORT.indexOf(name);
      // read the clock once, after mount; the server render keeps the static line
      if (i >= 0) setDay(i);
    } catch {
      /* keep the static line */
    }
  }, []);
  return day;
}

export function hoursFor(day: number) {
  return hours.find((h) => h.days.includes(day)) ?? hours[0];
}
