"use client";
import { hours, visit } from "@/content";
import { rowFor, useJakartaDay } from "@/lib/today";

// The week in two rows; today's row is marked after mount.
export default function HoursList() {
  const today = rowFor(useJakartaDay());
  return (
    <dl className="hours-grid tabular">
      {hours.map((h) => {
        const isToday = today === h;
        return (
          <div key={h.label} className="contents">
            <dt className={isToday ? "font-extrabold" : ""}>{h.label}</dt>
            <dd className={isToday ? "font-extrabold" : ""}>
              {h.open}–{h.close}
              {isToday && <span className="today-tag">{visit.todayTag}</span>}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
