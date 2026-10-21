"use client";
import { useEffect, useState } from "react";
import type { Hours } from "@/content";

// Day of week in Jakarta (0 = Sunday), whatever the visitor's own time zone.
export function jakartaDow(): number {
  const day = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(new Date());
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(day);
}

export function useJakartaDow() {
  const [dow, setDow] = useState<number | null>(null);
  useEffect(() => setDow(jakartaDow()), []);
  return dow;
}

// Hero line. Renders the fallback at build time and swaps to today's hours after mount.
export default function TodayHours({
  hours,
  prefix,
  fallback,
  className,
}: {
  hours: Hours[];
  prefix: string;
  fallback: string;
  className?: string;
}) {
  const dow = useJakartaDow();
  const today = dow === null ? undefined : hours.find((h) => h.dow.includes(dow));
  return (
    <p className={className}>
      {today ? (
        <>
          {prefix} <strong>{today.time}</strong>
        </>
      ) : (
        fallback
      )}
    </p>
  );
}

// Full hours list for the visit section, with today's row marked.
export function HoursList({ hours, todayTag, label }: { hours: Hours[]; todayTag: string; label: string }) {
  const dow = useJakartaDow();
  return (
    <dl className="hours t-body" aria-label={label}>
      {hours.map((h) => {
        const isToday = dow !== null && h.dow.includes(dow);
        return (
          <div key={h.days} className="hours-row" {...(isToday ? { "data-today": "" } : {})}>
            <dt>{h.days}</dt>
            <dd className="flex items-center gap-2">
              {isToday && (
                <span className="tag tag-mustard">{todayTag}</span>
              )}
              {h.time}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
