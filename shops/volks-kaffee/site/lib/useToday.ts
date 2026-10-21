"use client";
import { useSyncExternalStore } from "react";

const DAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function jakartaWeekday(): number {
  try {
    const name = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      weekday: "short",
    }).format(new Date());
    return DAYS[name] ?? new Date().getDay();
  } catch {
    return new Date().getDay();
  }
}

const subscribe = () => () => {};

// Today's weekday in Asia/Jakarta (0 = Minggu ... 6 = Sabtu) after mount, null at build,
// so the static HTML shows the generic hours and hydration never mismatches.
export function useToday(): number | null {
  return useSyncExternalStore(subscribe, jakartaWeekday, () => null);
}
