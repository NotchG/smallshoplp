"use client";
import { useEffect, useState } from "react";

// Current time, refreshed every minute, so "no answer for …" timers stay current.
export default function useNow(everyMs: number = 60000): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), everyMs);
    return () => clearInterval(t);
  }, [everyMs]);
  return now;
}
