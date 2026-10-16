"use client";
import { useEffect, useState } from "react";
import { hero, shop } from "@/content";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Static HTML shows the weekly summary; after hydration it shows today's hours in Jakarta time.
// The note under it always points at the other schedule (Saturday opens later).
export default function TodayHours() {
  const [day, setDay] = useState<number | null>(null);

  useEffect(() => {
    const name = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      weekday: "short",
    }).format(new Date());
    const i = WEEKDAYS.indexOf(name);
    if (i >= 0) setDay(i);
  }, []);

  const label = day === null ? hero.hours.everyDay : hero.hours.today;
  const time = shop.hoursByDay[day ?? 0];
  const note = day === 6 ? hero.hours.weekdayNote : hero.hours.saturdayNote;

  return (
    <div>
      <p className="t-lead">
        {label} <strong className="whitespace-nowrap font-bold">{time}</strong>
      </p>
      <p className="t-body">{note}</p>
    </div>
  );
}
