"use client";
import { useEffect, useState } from "react";
import { jakartaNow } from "@/lib/hours";

// Day and hour in Asia/Jakarta, computed after mount so the static HTML keeps the fallback.
// Re-checks every minute so an open tab flips at 19.00 and 02.00.
export function useJakartaNow() {
  const [now, setNow] = useState<{ jsDay: number; hour: number } | null>(null);
  useEffect(() => {
    const update = () => setNow(jakartaNow());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}
