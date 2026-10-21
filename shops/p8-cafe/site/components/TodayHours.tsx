"use client";
import { useEffect, useState } from "react";
import { hours, hoursFallback, todayLabel, todayTag } from "@/content";

const DOW: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// Today's weekday in Jakarta, whatever the visitor's own time zone.
function useJakartaDow() {
  const [dow, setDow] = useState<number | null>(null);
  useEffect(() => {
    const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(new Date());
    setDow(DOW[wd] ?? null);
  }, []);
  return dow;
}

// Hero line. Without JS (or before mount) it shows the whole week in one line.
export function TodayLine({ className = "" }: { className?: string }) {
  const dow = useJakartaDow();
  const today = dow === null ? null : hours.find((h) => h.dow === dow);
  return (
    <p className={`today-line ${className}`}>
      <svg viewBox="0 0 16 16" aria-hidden="true" className="today-dot">
        <circle cx="8" cy="8" r="6" fill="#E2B66E" stroke="#24211F" strokeWidth="2" />
      </svg>
      <span className="tabular">{today ? `${todayLabel} · ${today.time}` : hoursFallback}</span>
    </p>
  );
}

// Visit table: seven rows, today's row in butter with a small tag.
export function HoursTable() {
  const dow = useJakartaDow();
  return (
    <table className="hours" aria-label="Jam buka P8 Cafe">
      <tbody>
        {hours.map((h) => {
          const isToday = h.dow === dow;
          return (
            <tr key={h.day} {...(isToday ? { "data-today": "" } : {})}>
              <th scope="row">
                {h.day}
                {isToday && <span className="today-tag">{todayTag}</span>}
              </th>
              <td>{h.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
