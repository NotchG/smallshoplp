"use client";
import { useEffect, useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Today's weekday in Jakarta (0 = Minggu ... 6 = Sabtu). null during SSR and with JS off,
// so the static HTML shows the "Buka setiap hari" fallback.
export function useJakartaDay(): number | null {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => {
    const name = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" }).format(new Date());
    const index = DAYS.indexOf(name);
    setDay(index >= 0 ? index : null);
  }, []);
  return day;
}
