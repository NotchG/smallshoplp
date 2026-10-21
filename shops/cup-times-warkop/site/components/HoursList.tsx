"use client";
import { hours } from "@/content";
import { useJakartaWeekday } from "@/lib/hours";

// Days and times in a two-column grid (max 384px so "09.00–23.00 hari ini" never wraps), each time next to its day.
// Today's row turns bold with a dot after mount. The dot is cup green: amber never sits on white.
export default function HoursList() {
  const day = useJakartaWeekday();
  const todayRow = day === null ? -1 : hours.byWeekday[day];
  return (
    <dl className="grid max-w-[24rem] grid-cols-[auto_1fr] gap-x-6 gap-y-1">
      {hours.rows.map((row, i) => {
        const isToday = i === todayRow;
        return (
          <div key={row.days} className={`contents ${isToday ? "font-bold" : ""}`}>
            <dt className="flex items-center gap-2.5">
              <span
                className={`size-2.5 flex-none rounded-full ${isToday ? "bg-cup" : "bg-transparent"}`}
                aria-hidden="true"
              />
              {row.days}
            </dt>
            <dd className="tnum whitespace-nowrap">
              {row.time}
              {isToday ? <span className="t-small ml-2 font-medium text-cup">hari ini</span> : null}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
