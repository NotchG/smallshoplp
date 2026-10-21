"use client";
import { useEffect, useState } from "react";
import { hours, kunjungi } from "@/content";

const DAY: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// Seven day pills, visual only. Today (Asia/Jakarta) is marked after hydration.
// Every day has the same hours; the "Setiap hari 06.00–22.00" line under it says so for everyone.
export default function HoursStrip({ className = "" }: { className?: string }) {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(
      new Date(),
    );
    setToday(DAY[wd] ?? null);
  }, []);

  return (
    <div className={className}>
      <ul className="flex flex-wrap gap-1.5" aria-hidden="true">
        {hours.map((h) => {
          const isToday = today === h.js;
          return (
            <li key={h.day} className="day-pill" data-today={isToday ? "true" : "false"}>
              {h.short}
              {isToday ? <span className="font-normal t-small">· {kunjungi.today}</span> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
