"use client";
import { useEffect, useState } from "react";

const DAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// Today's weekday in Jakarta (0 = Minggu), or null before hydration / with JS off,
// so the server HTML shows the full-week fallback.
export function useJakartaDay() {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => {
    const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(new Date());
    setDay(DAYS[wd] ?? null);
  }, []);
  return day;
}
