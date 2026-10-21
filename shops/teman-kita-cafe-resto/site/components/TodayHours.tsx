"use client";
import { useEffect, useState } from "react";
import { hours, hero, visit } from "@/content";

// Today's weekday in Jakarta (0 = Minggu … 6 = Sabtu), or null before mount / without JS.
function useJakartaWeekday() {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => {
    const short = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" })
      .format(new Date());
    const i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(short);
    setDay(i >= 0 ? i : null);
  }, []);
  return day;
}

// Hero line. Server and no-JS: the weekly summary. After mount: today's hours.
export function TodayLine({ className = "" }: { className?: string }) {
  const day = useJakartaWeekday();
  if (day === null) {
    return (
      <p className={`flex items-center gap-2.5 ${className}`}>
        <span className="size-3 flex-none rounded-full bg-mint ring-2 ring-tinta" aria-hidden="true" />
        <span>{hours.noJs}</span>
      </p>
    );
  }
  const d = hours.days[day];
  return (
    <p className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 ${className}`}>
      <span className="t-small rounded-full bg-mint px-3 py-1 font-semibold text-tinta">
        {hero.todayLabel} ({d.name})
      </span>
      <span>
        buka <span className="price">{d.open}–{d.close}</span>
      </span>
    </p>
  );
}

// Visit section: the grouped rows, with today's row on mint and Friday marked.
export function HoursList() {
  const day = useJakartaWeekday();
  return (
    <ul className="border-t-2 border-tinta">
      {hours.rows.map((row) => {
        const today = day !== null && row.days.includes(day);
        return (
          <li
            key={row.label}
            className={`hours-row border-b border-tinta ${today ? "bg-mint" : ""}`}
          >
            <span className="flex items-center gap-2 font-semibold">
              {row.label}
              {row.friday && <span className="size-2.5 rounded-full bg-jeruk ring-2 ring-tinta" aria-hidden="true" />}
            </span>
            <span className="price">{row.time}</span>
            {today && <span className="t-small font-semibold whitespace-nowrap">{visit.todayTag}</span>}
            {row.note && <span className="t-small col-start-1 -mt-1">{row.note}</span>}
          </li>
        );
      })}
    </ul>
  );
}
