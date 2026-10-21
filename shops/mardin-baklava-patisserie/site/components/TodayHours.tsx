"use client";
import { useEffect, useState } from "react";
import { dayNames, hours, hoursShort, visit, weekOrder } from "@/content";

// Today's hours in Asia/Jakarta. Static HTML carries the full hours as the fallback;
// the client swaps in today's line after mount.

type Now = { day: number; minutes: number };
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const toMin = (t: string) => {
  const [h, m] = t.split(".").map(Number);
  return h * 60 + m;
};

function useJakartaNow() {
  const [now, setNow] = useState<Now | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    const read = () => {
      const parts = fmt.formatToParts(new Date());
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
      setNow({ day: WEEKDAYS.indexOf(get("weekday")), minutes: Number(get("hour")) * 60 + Number(get("minute")) });
    };
    read();
    const id = window.setInterval(read, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

export function TodayHours({ className = "" }: { className?: string }) {
  const now = useJakartaNow();
  let text = hoursShort;
  let open = false;
  if (now) {
    const today = hours.find((h) => h.day === now.day)!;
    if (now.minutes < toMin(today.close)) {
      text = `Buka hari ini ${today.open}–${today.close}`;
      open = now.minutes >= toMin(today.open);
    } else {
      const next = hours.find((h) => h.day === (now.day + 1) % 7)!;
      text = `Sudah tutup · besok buka ${next.open}–${next.close}`;
    }
  }
  return (
    <p className={`hours-today ${className}`}>
      <span
        className={`hours-dot ${open ? "is-open" : ""}`}
        {...(open ? { role: "img", "aria-label": "Sedang buka" } : { "aria-hidden": true })}
      />
      <span>{text}</span>
    </p>
  );
}

export function HoursList({ className = "" }: { className?: string }) {
  const now = useJakartaNow();
  return (
    <ul className={`hours-list ${className}`}>
      {weekOrder.map((d) => {
        const h = hours.find((x) => x.day === d)!;
        const isToday = now?.day === d;
        return (
          <li key={d} className={isToday ? "is-today" : undefined} aria-current={isToday ? "date" : undefined}>
            <span className="hours-day">
              {dayNames[d]}
              {isToday ? <span className="hours-flag">{visit.todayLabel}</span> : null}
            </span>
            <span className="hours-time">
              {h.open}–{h.close}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
