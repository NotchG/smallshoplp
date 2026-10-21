"use client";
import { useEffect, useState } from "react";
import { hours, ui } from "@/content";

const WEEKDAY: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// Highlights today's row in Jakarta time. No highlight before hydration.
export default function HoursTable() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const wd = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" }).format(new Date());
    setToday(WEEKDAY[wd] ?? null);
  }, []);

  return (
    <table className="hours-table t-body w-full max-w-[360px]" aria-label={ui.jamBuka}>
      <tbody>
        {hours.map((h) => {
          const isToday = today === h.dayIndex;
          return (
            <tr key={h.day} {...(isToday ? { "data-today": "" } : {})}>
              <th scope="row" className="text-left font-semibold">
                <span className="inline-flex items-center gap-2">
                  {h.day}
                  {isToday && (
                    <span className="t-small rounded-full bg-biru-krat px-2 py-px font-extrabold text-putih-ubin">
                      {ui.hariIni}
                    </span>
                  )}
                </span>
              </th>
              <td className="text-right font-semibold">{h.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
