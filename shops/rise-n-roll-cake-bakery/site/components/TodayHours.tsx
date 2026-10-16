"use client";
import { useEffect, useState } from "react";
import { shop } from "@/content";

// Today's weekday in Jakarta (WIB), whatever the visitor's own timezone.
// Server render and no-JS show the full-week fallback; no open/closed claim is made.
const DAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function useJakartaDay(): number | null {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => {
    const wd = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" }).format(new Date());
    setDay(DAYS[wd] ?? null);
  }, []);
  return day;
}

function Clock() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <circle cx="9" cy="9" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 4.8V9l2.8 1.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TodayPill({ label }: { label: string }) {
  const day = useJakartaDay();
  const row = day === null ? undefined : shop.hours.find((h) => h.isoDays.includes(day));
  return (
    <p className="today-pill">
      <Clock />
      {row ? (
        <span>
          {label} <strong>{row.time}</strong>
        </span>
      ) : (
        <span>{shop.hoursFallback}</span>
      )}
    </p>
  );
}

export function HoursList({ todayTag }: { todayTag: string }) {
  const day = useJakartaDay();
  return (
    <ul className="hours">
      {shop.hours.map((h) => {
        const isToday = day !== null && h.isoDays.includes(day);
        return (
          <li key={h.days} className="hours-row" {...(isToday ? { "data-today": "" } : {})}>
            <span>{h.days}</span>
            <span className="hours-time">{h.time}</span>
            {isToday ? <span className="hours-today-tag">{todayTag}</span> : <span aria-hidden="true" />}
          </li>
        );
      })}
    </ul>
  );
}
