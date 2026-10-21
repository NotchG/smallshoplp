"use client";
import { hours, todayHours } from "@/content";
import { useJakartaDow } from "@/lib/today";

// Static fallback on the server; after mount, today's hours in Jakarta.
export default function TodayHours({ className = "" }: { className?: string }) {
  const dow = useJakartaDow();
  const today = dow === null ? undefined : hours.find((h) => h.dow === dow);
  return (
    <p className={`today ${className}`}>
      <span className="today-dot" aria-hidden="true" />
      <span>{today ? `${todayHours.prefix} ${today.open}–${today.close}` : todayHours.fallback}</span>
    </p>
  );
}
