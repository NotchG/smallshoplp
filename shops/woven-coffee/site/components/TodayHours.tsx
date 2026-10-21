"use client";
import { hours } from "@/content";
import { useJakartaDay } from "@/lib/useJakartaDay";

// "Buka hari ini 09.00–21.00" once we know the day in Jakarta; the full-week line before that.
export default function TodayHours({ className = "" }: { className?: string }) {
  const day = useJakartaDay();
  const row = day === null ? null : hours.rows.find((r) => r.idx.includes(day));
  return (
    <p className={className}>
      {row ? `${hours.todayPrefix} ${row.open}–${row.close}` : hours.fallback}
    </p>
  );
}
