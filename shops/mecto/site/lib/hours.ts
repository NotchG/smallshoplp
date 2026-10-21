"use client";
import { useSyncExternalStore } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Today's weekday in Jakarta (0 = Sunday), whatever the visitor's own time zone.
export function jakartaDay(): number {
  const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(
    new Date(),
  );
  return WEEKDAYS.indexOf(wd);
}

const noSubscribe = () => () => {};

// null on the server and during hydration (static fallback), the Jakarta weekday after.
export function useJakartaDay(): number | null {
  return useSyncExternalStore(noSubscribe, jakartaDay, () => null);
}
