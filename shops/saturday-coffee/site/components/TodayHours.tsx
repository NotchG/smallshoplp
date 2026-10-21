"use client";
import { useSyncExternalStore } from "react";
import { hero, shop, visit } from "@/content";

// Today's weekday in Jakarta (0 = Minggu ... 6 = Sabtu). Server and first paint get null,
// so the static fallback renders first and there is no hydration mismatch.
const DAY: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
const noop = () => () => {};
function jakartaDay(): number | null {
  try {
    const wd = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(
      new Date(),
    );
    return DAY[wd] ?? null;
  } catch {
    return null;
  }
}
export function useJakartaDay() {
  return useSyncExternalStore(noop, jakartaDay, () => null);
}

/** Hero line: "Buka hari ini 08.30–22.00", or the all-week fallback without JS. */
export function TodayHours({ className = "" }: { className?: string }) {
  const day = useJakartaDay();
  const today = day === null ? null : shop.hours.find((h) => h.dayIdx.includes(day));
  return (
    <p className={`flex items-baseline gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className="inline-block size-2.5 shrink-0 translate-y-[-1px] rounded-full bg-lampu shadow-[0_0_10px_2px_rgb(242_189_94/0.55)]"
      />
      <span className="t-num">
        {today ? (
          <>
            {hero.todayPrefix} <strong className="font-semibold">{today.time}</strong>
          </>
        ) : (
          hero.hoursFallback
        )}
      </span>
    </p>
  );
}

/** Hours by day as a <dl>; today's row gets aria-current="date" and a "Hari ini" marker. */
export function HoursList() {
  const day = useJakartaDay();
  return (
    <dl className="t-num">
      {shop.hours.map((h) => {
        const isToday = day !== null && h.dayIdx.includes(day);
        return (
          <div
            key={h.days}
            aria-current={isToday ? "date" : undefined}
            className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-redup/25 py-3 first:border-t-0"
          >
            <dt className="w-36 shrink-0 text-redup">{h.days}</dt>
            <dd className="flex items-center gap-3 font-semibold">
              {h.time}
              {isToday && (
                <span className="rounded-full bg-lampu px-2.5 py-0.5 t-small font-semibold text-ink">
                  {visit.todayLabel}
                </span>
              )}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
