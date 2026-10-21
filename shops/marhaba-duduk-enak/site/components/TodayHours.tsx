"use client";
import { useSyncExternalStore } from "react";
import { hours } from "@/content";

// Weekday in Jakarta (0 = Minggu ... 6 = Sabtu). -1 on the server, so the static
// HTML carries the fallback text and today's details appear after hydration.
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function jakartaWeekday() {
  const wd = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" }).format(new Date());
  return DAYS.indexOf(wd);
}
const subscribe = () => () => {};
function useJakartaDay() {
  return useSyncExternalStore(subscribe, jakartaWeekday, () => -1);
}

// Hero sill: "Buka hari ini 08.00–21.00".
export function TodayLine({ className = "" }: { className?: string }) {
  const day = useJakartaDay();
  const row = day >= 0 ? hours.rows.find((r) => r.weekdays.includes(day)) : undefined;
  return (
    <p className={`flex items-center gap-3 nums ${className}`} data-check="today">
      <span className="bulb-dot" aria-hidden="true" />
      <span>{row ? `${hours.todayPrefix} ${row.open}–${row.close}` : hours.fallbackToday}</span>
    </p>
  );
}

// Kunjungi: the weekly rows with a "hari ini" tag right after today's row.
export function HoursList({ className = "" }: { className?: string }) {
  const day = useJakartaDay();
  return (
    <div className={className}>
      <dl className="grid gap-1 nums">
        {hours.rows.map((r) => {
          const isToday = day >= 0 && r.weekdays.includes(day);
          return (
            <div key={r.days} className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <dt className="font-semibold min-w-[8.5rem]">{r.days}</dt>
              <dd>
                {r.open}–{r.close}
              </dd>
              {isToday && <dd className="tag-today">{hours.todayTag}</dd>}
            </div>
          );
        })}
      </dl>
      <p className="mt-2 text-besi-soft">{hours.everyDay}</p>
    </div>
  );
}
