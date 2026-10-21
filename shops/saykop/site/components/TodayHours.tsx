"use client";
import { useEffect, useState } from "react";
import { hero, hours, hoursSummary } from "@/content";
import { jakartaDay } from "@/lib/today";

// Hero hours. Without JS (and on the server) it prints the week summary; in the browser it
// shows today's hours for Asia/Jakarta. Never claims the shop opens every day.
export default function TodayHours({ className = "" }: { className?: string }) {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(jakartaDay()), []);
  const row = today === null ? undefined : hours.find((h) => h.days.includes(today));

  return (
    <p className={`flex items-baseline gap-3 ${className}`}>
      <span aria-hidden="true" className="inline-block size-2.5 shrink-0 rounded-full bg-navy translate-y-[-1px]" />
      {row ? (
        <span>
          {hero.todayPrefix} <strong className="font-bold tabular-nums">{row.open}–{row.close}</strong>
        </span>
      ) : (
        <span className="tabular-nums">{hoursSummary}</span>
      )}
    </p>
  );
}
