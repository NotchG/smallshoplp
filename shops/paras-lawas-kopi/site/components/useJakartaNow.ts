"use client";
import { useEffect, useState } from "react";
import { jakartaNow, type JakartaNow } from "@/lib/jakarta";

// null on the server and on the first client render (so hydration matches), then the current
// Jakarta time, refreshed every 30 s so the status stays right if the page is left open.
export function useJakartaNow(intervalMs = 30_000): JakartaNow | null {
  const [now, setNow] = useState<JakartaNow | null>(null);

  useEffect(() => {
    const tick = () =>
      setNow((prev) => {
        const next = jakartaNow();
        return prev && prev.h === next.h && prev.m === next.m && prev.day === next.day ? prev : next;
      });
    tick();
    const id = window.setInterval(tick, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return now;
}
