"use client";
import { hours, visit } from "@/content";
import { useJakartaDow } from "@/lib/today";

// The week as seven tiles: Jumat and Sabtu in kunyit (open to 22.00), the rest sage,
// today in botol with a visible "Hari ini" label (not colour alone).
export default function WeekTiles() {
  const dow = useJakartaDow();
  return (
    <dl className="week">
      {hours.map((d) => {
        const isToday = d.dow === dow;
        const late = d.close !== "21.00";
        const tile = isToday ? "tile-botol" : late ? "tile-kunyit" : "tile-sage";
        return (
          <div key={d.day} className={`${tile} flex flex-col justify-between p-2 lg:p-2.5`}>
            <dt className="week-text font-semibold">
              <abbr title={d.day} className="no-underline">
                {d.short}
              </abbr>
              {isToday ? <span className="block font-medium">{visit.todayLabel}</span> : null}
            </dt>
            <dd className="week-text font-medium">
              <span className="sr-only">{d.day} </span>
              {d.open}–<br />
              {d.close}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
