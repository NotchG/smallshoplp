"use client";
import { hero, hours } from "@/content";
import { useJakartaDow } from "@/lib/today";

// "Buka hari ini 07.00–21.00" for today in Jakarta; the all-week line before hydration / without JS.
export default function TodayHours({ className = "" }: { className?: string }) {
  const dow = useJakartaDow();
  const today = dow === null ? undefined : hours.find((d) => d.dow === dow);
  return (
    <p className={`flex items-center gap-3 ${className}`}>
      <span className="bullet bg-kunyit" aria-hidden="true" />
      <span>
        {today ? `${hero.todayPrefix} ${today.open}–${today.close}` : hero.hoursFallback}
      </span>
    </p>
  );
}
