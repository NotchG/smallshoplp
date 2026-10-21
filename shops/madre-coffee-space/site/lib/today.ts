"use client";
import { useEffect, useState } from "react";

const DAYS = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// Weekday in Jakarta (0 = Minggu), whatever the visitor's own timezone.
export function jakartaDow(): number {
  try {
    const name = new Intl.DateTimeFormat("id-ID", { timeZone: "Asia/Jakarta", weekday: "long" }).format(new Date());
    const i = DAYS.indexOf(name);
    if (i >= 0) return i;
  } catch {
    /* fall through to a fixed UTC+7 offset */
  }
  return new Date(Date.now() + 7 * 3600 * 1000).getUTCDay();
}

// null on the server and on first render (static fallback), the Jakarta weekday after mount.
export function useJakartaDow(): number | null {
  const [dow, setDow] = useState<number | null>(null);
  useEffect(() => setDow(jakartaDow()), []);
  return dow;
}
