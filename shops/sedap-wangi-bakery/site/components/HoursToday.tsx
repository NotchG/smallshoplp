"use client";
import { copy, hours } from "@/content";
import { useJakartaDay } from "@/lib/useJakartaDay";

// "Buka hari ini 09.00–19.00" for today in Asia/Jakarta; "Buka setiap hari" without JS.
export default function HoursToday() {
  const day = useJakartaDay();
  const today = day === null ? null : hours.days.find((d) => d.day === day);
  return (
    <p className="hours-today t-body">
      <span className="pip" aria-hidden="true" />
      {today ? (
        <span>
          {copy.hero.todayPrefix}{" "}
          <strong className="num">
            {today.open}–{today.close}
          </strong>
        </span>
      ) : (
        <span>{hours.everyDay}</span>
      )}
    </p>
  );
}
