"use client";
import { useSyncExternalStore } from "react";

// Day of week in Jakarta (0 = Minggu), whatever the visitor's own time zone.
// The static HTML renders the server snapshot (null), so the fallback line shows without JS;
// after hydration the client snapshot swaps in today's hours.
const DOW: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function jakartaDow(): number {
  const name = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(
    new Date(),
  );
  return DOW[name] ?? new Date().getDay();
}

const subscribe = () => () => {};

export function useJakartaDow(): number | null {
  return useSyncExternalStore(subscribe, jakartaDow, () => null);
}
