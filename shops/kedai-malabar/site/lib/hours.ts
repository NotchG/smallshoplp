"use client";
import { useLayoutEffect, useEffect, useState } from "react";
import { hours } from "@/content";

// "10:00" -> "10.00" (Indonesian time format)
export const fmt = (t: string) => t.replace(":", ".");
const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

export type JakartaNow = { day: number; minutes: number };

// Day of week (0 = Minggu) and minutes since midnight in Asia/Jakarta, whatever the visitor's zone.
export function jakartaNow(date = new Date()): JakartaNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export type Status =
  | { kind: "open"; label: string; detail: string }
  | { kind: "closed"; label: string; detail: string };

export function getStatus(now: JakartaNow): Status {
  const today = hours[now.day];
  const open = toMin(today.open);
  const close = toMin(today.close);
  if (now.minutes >= open && now.minutes < close) {
    return { kind: "open", label: "Buka sekarang", detail: `hari ini ${fmt(today.open)}–${fmt(today.close)}` };
  }
  if (now.minutes < open) {
    return { kind: "closed", label: "Belum buka", detail: `hari ini buka ${fmt(today.open)}` };
  }
  const tomorrow = hours[(now.day + 1) % 7];
  return { kind: "closed", label: "Sudah tutup", detail: `besok buka ${fmt(tomorrow.open)}` };
}

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

// null on the server and before hydration; then the current Jakarta time, refreshed each minute.
export function useJakartaNow() {
  const [now, setNow] = useState<JakartaNow | null>(null);
  useIsoLayoutEffect(() => {
    const tick = () => setNow(jakartaNow());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}
