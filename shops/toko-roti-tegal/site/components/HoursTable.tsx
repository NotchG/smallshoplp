"use client";
import { useEffect, useState } from "react";
import { hours, labels } from "@/content";
import { jakartaDow } from "@/lib/today";

// The full week is rendered on the server. After hydration, today's row (Asia/Jakarta)
// gets aria-current, a kulit highlight on its time, and a "Hari ini" tag right after it.
export default function HoursTable() {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    setToday(jakartaDow());
  }, []);

  return (
    <table aria-labelledby="jam-h" className="hours w-full border-collapse text-left t-body tabular">
      <tbody>
        {hours.map((h) => {
          const isToday = h.dow === today;
          return (
            <tr key={h.day} className="hours-row" aria-current={isToday ? "date" : undefined}>
              <th scope="row" className={`day-col ${isToday ? "font-semibold" : "font-normal"}`}>
                {h.day}
              </th>
              <td>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className={isToday ? "today-pill" : undefined}>
                    {h.periods.map((p) => (
                      <span key={p} className="block">
                        {p}
                      </span>
                    ))}
                  </span>
                  {isToday && <span className="today-tag t-small">{labels.today}</span>}
                </div>
                {h.note && <span className="mt-0.5 block t-small">{h.note}</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
