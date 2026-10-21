"use client";
import { useEffect, useState } from "react";
import { dayNames, todayHours } from "@/content";

const SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Weekday in Jakarta, whatever the visitor's own time zone.
function jakartaDay(): number {
  const short = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(
    new Date(),
  );
  const i = SHORT.indexOf(short);
  return i === -1 ? new Date().getDay() : i;
}

// The server (and JS-off) render shows the weekly summary; after mount it switches to today's line.
// Every possible line sits stacked in one grid cell, so the swap never changes the plate's height.
export default function TodayHours() {
  const [day, setDay] = useState<number | null>(null);
  useEffect(() => setDay(jakartaDay()), []);

  const lines = Array.from(new Set([todayHours.fallbackValue, ...todayHours.byDay]));
  const active = day === null ? todayHours.fallbackValue : todayHours.byDay[day];
  const label =
    day === null ? todayHours.fallbackLabel : `${todayHours.label} · ${dayNames[day]}`;

  return (
    <div>
      <p className="t-small sign-caps tracking-wide">{label}</p>
      <p className="stack t-lead nums mt-1 pretty">
        {lines.map((line) => (
          <span key={line} {...(line === active ? {} : { "data-off": "", "aria-hidden": true })}>
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}
