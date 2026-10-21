"use client";
import { hours } from "@/content";
import { useJakartaWeekday } from "@/lib/hours";

// Server/first paint: "Buka setiap hari / 09.00–23.00, Sabtu sampai 00.00".
// After mount: "Buka hari ini / 09.00–23.00" (or 09.00–00.00 on Saturday), Jakarta time.
// Same two-line box both ways. No "open now" claim; not a live region.
export default function HoursToday() {
  const day = useJakartaWeekday();
  const label = day === null ? hours.everyDay : hours.today;
  const time = day === null ? hours.summary : hours.rows[hours.byWeekday[day]].time;
  return (
    <p className="flex items-start gap-3">
      <span className="mt-[0.55em] size-2.5 flex-none rounded-full bg-bulb" aria-hidden="true" />
      <span className="grid min-h-[3.1em] content-start">
        <span className="t-body font-bold text-label">{label}</span>
        <span className="t-body tnum text-frost">{time}</span>
      </span>
    </p>
  );
}
