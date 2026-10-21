"use client";
import { useEffect, useState } from "react";
import { hours, visit } from "@/content";
import { jakartaDay } from "@/lib/today";

// Week hours. Today's row: bold, rust dot and the words "hari ini" (not colour alone).
export default function HoursTable({ className = "" }: { className?: string }) {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(jakartaDay()), []);

  return (
    <dl className={`hours tabular-nums ${className}`}>
      {hours.map((h) => {
        const isToday = today !== null && h.days.includes(today);
        return (
          <div key={h.label} className="contents">
            <dt className={`flex items-center gap-3 ${isToday ? "font-bold" : ""}`}>
              <span aria-hidden="true" className={`hours-dot ${isToday ? "" : "invisible"}`} />
              {h.label}
            </dt>
            <dd className={isToday ? "font-bold" : ""}>
              {h.open}–{h.close}
              {isToday && <span className="ml-3 font-medium text-rust">{visit.todayTag}</span>}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
