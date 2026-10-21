"use client";
import { useEffect, useState } from "react";
import { shop } from "@/content";

const DAY = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 } as Record<string, number>;

// Before JS (and in the static HTML): "Buka setiap hari mulai 08.00".
// After mount: today's hours, using the weekday in Jakarta, wherever the visitor is.
export default function TodayHours({ className = "" }: { className?: string }) {
  const [text, setText] = useState(shop.hoursFallback);

  useEffect(() => {
    const weekday = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      weekday: "short",
    }).format(new Date());
    const time = shop.hoursByDay[DAY[weekday]];
    if (time) setText(`Buka hari ini ${time}`);
  }, []);

  return (
    <p className={`nums ${className}`}>
      {text}
    </p>
  );
}
