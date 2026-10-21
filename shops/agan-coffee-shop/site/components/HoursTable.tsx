"use client";
import { useEffect, useState } from "react";
import type { HoursRow } from "@/content";
import { statusAt } from "@/lib/status";

// The full week renders on the server; after mount, today's row (Jakarta time) gets 700 and "hari ini".
export default function HoursTable({ rows, className = "" }: { rows: HoursRow[]; className?: string }) {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(statusAt(new Date(), rows).todayJs);
  }, [rows]);

  return (
    <table className={`hours t-body ${className}`} aria-label="Jam buka Agan Coffee">
      <tbody>
        {rows.map((r) => {
          const isToday = r.js === today;
          return (
            <tr
              key={r.day}
              className={`${r.closed ? "is-closed" : ""} ${isToday ? "is-today" : ""}`}
              aria-current={isToday ? "date" : undefined}
            >
              <th scope="row">
                {r.day}
                {isToday && <span className="today-tag">hari ini</span>}
              </th>
              <td>{r.closed ? "Tutup" : `${r.open}–${r.close}`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
