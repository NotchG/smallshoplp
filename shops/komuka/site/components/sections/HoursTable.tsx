"use client";
import { useEffect, useState } from "react";
import { hoursRows } from "@/content";
import { jakartaNow } from "@/lib/hours";

// Full hours. "Senin–Selasa Tutup" is the most visible row; today's row (Asia/Jakarta)
// is tinted after mount and marked aria-current="date".
export default function HoursTable({ caption, todayLabel }: { caption: string; todayLabel: string }) {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(jakartaNow().day);
  }, []);

  return (
    <table className="hours-table t-body">
      <caption className="t-small text-left font-semibold uppercase tracking-[0.08em]">{caption}</caption>
      <tbody>
        {hoursRows.map((row) => {
          const isToday = today !== null && row.days.includes(today);
          return (
            <tr
              key={row.label}
              className={`${row.closed ? "is-closed" : ""} ${isToday ? "is-today" : ""}`}
              aria-current={isToday ? "date" : undefined}
            >
              <th scope="row">{row.label}</th>
              <td>
                {row.time}
                {isToday && <span className="hours-today t-small">{todayLabel}</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
