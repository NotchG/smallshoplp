"use client";
import { useEffect, useState } from "react";
import { hours, work } from "@/content";
import { jakartaDay, spanPercent } from "@/lib/hours";

// Opening hours drawn as lit panels on a tile track (06.00–24.00, one grout line per hour).
// Spans are static, placed from content.hours. The "hari ini" tag appears after mount.
const SCALE = ["06.00", "12.00", "18.00", "24.00"];

export default function HoursBars() {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => setDay(jakartaDay()), []);

  return (
    <div>
      <ul className="space-y-5" aria-label={work.hoursHeading}>
        {hours.map((row) => {
          const isToday = day !== null && row.days.includes(day);
          return (
            <li key={row.label}>
              <p className="flex items-center gap-2 font-semibold">
                {row.label}
                {isToday && <span className="today-tag t-small">{work.todayTag}</span>}
              </p>
              <span className="sr-only">
                buka {row.open} sampai {row.close}
              </span>
              <div className="hours-track mt-2" aria-hidden="true">
                <div className="hours-lit t-small tabular" style={spanPercent(row)}>
                  <span>{row.open}</span>
                  <span>{row.close}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="hours-scale t-small tabular text-ubin mt-2" aria-hidden="true">
        {SCALE.map((t, i) => (
          <span key={t} style={{ left: `${(i / (SCALE.length - 1)) * 100}%` }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
