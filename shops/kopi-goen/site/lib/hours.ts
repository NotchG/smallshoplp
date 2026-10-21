"use client";
import { useEffect, useState } from "react";
import { hours } from "@/content";

export type JakartaNow = { weekday: number; minutes: number };

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const toMinutes = (t: string) => {
  const [h, m] = t.split(".").map(Number);
  return h * 60 + m;
};

// The shop's own clock: Asia/Jakarta, whatever the visitor's timezone.
export function jakartaNow(date = new Date()): JakartaNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    weekday: WEEKDAYS.indexOf(get("weekday")),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

// null until mounted, so the server render and first paint use the static summary.
export function useJakartaNow() {
  const [now, setNow] = useState<JakartaNow | null>(null);
  useEffect(() => {
    const tick = () => setNow(jakartaNow());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

export type Status =
  | { open: true; today: (typeof hours.byDay)[number] }
  | { open: false; today: (typeof hours.byDay)[number]; reopen: string; tomorrow: boolean };

export function statusFor(now: JakartaNow): Status {
  const today = hours.byDay[now.weekday];
  const opens = toMinutes(today.open);
  const closes = toMinutes(today.close);
  if (now.minutes >= opens && now.minutes < closes) return { open: true, today };
  if (now.minutes < opens) return { open: false, today, reopen: today.open, tomorrow: false };
  const next = hours.byDay[(now.weekday + 1) % 7];
  return { open: false, today, reopen: next.open, tomorrow: true };
}
