"use client";
import { useEffect, useState } from "react";
import { hero, shop } from "@/content";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Today's hours in Asia/Jakarta. Static HTML (and no-JS) shows the fallback line,
// which sits on the same single line box, so nothing shifts when it updates.
export default function TodayHours({ className = "" }: { className?: string }) {
  const [text, setText] = useState(hero.hoursFallback);

  useEffect(() => {
    const weekday = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      weekday: "short",
    }).format(new Date());
    const i = WEEKDAYS.indexOf(weekday);
    if (i >= 0) setText(`${hero.hoursPrefix} ${shop.openTime}–${shop.closeByWeekday[i]}`);
  }, []);

  return <p className={`nums ${className}`}>{text}</p>;
}
