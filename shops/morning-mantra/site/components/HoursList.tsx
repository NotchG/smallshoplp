"use client";
import { useEffect, useState } from "react";

const DAY_INDEX: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// Senin–Minggu. After mount, today's row (Jakarta time) gets aria-current="date" and a gold
// dot in a slot that is always reserved, so nothing shifts.
export default function HoursList({
  hours,
  className = "",
}: {
  hours: { day: string; index: number; time: string }[];
  className?: string;
}) {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    const short = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(new Date());
    setToday(DAY_INDEX[short] ?? null);
  }, []);

  return (
    <dl className={`hours max-w-80 ${className}`}>
      {hours.map((h) => (
        <div key={h.day} className="hours-row" aria-current={h.index === today ? "date" : undefined}>
          <span className="hours-dot" aria-hidden="true" />
          <dt>{h.day}</dt>
          <dd className="nums">{h.time}</dd>
        </div>
      ))}
    </dl>
  );
}
