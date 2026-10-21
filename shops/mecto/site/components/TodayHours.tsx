"use client";
import { hero, shop } from "@/content";
import { useJakartaDay } from "@/lib/hours";

// "Buka hari ini 07.00–23.00" for today in Asia/Jakarta; static fallback before JS.
// Both states are one line of the same type, so nothing shifts when it swaps.
export default function TodayHours({ className = "" }: { className?: string }) {
  const day = useJakartaDay();
  const row = day === null ? undefined : shop.hours.find((r) => r.jsDay === day);
  const text = row ? `${hero.todayPrefix} ${row.open}–${row.close}` : hero.hoursFallback;

  return (
    <p className={`flex items-center gap-3 t-body font-semibold tnum ${className}`}>
      <span className="hours-dot" aria-hidden="true" />
      <span>{text}</span>
    </p>
  );
}
