"use client";
import { useEffect, useState } from "react";
import { hours, today, kunjungi } from "@/content";
import { jakartaDay } from "@/lib/today";

// Weekly hours. Selasa shows a "Tutup" pill (text, not colour only). Today's row is marked after mount.
export default function HoursTable() {
  const [todayDay, setTodayDay] = useState<number | null>(null);
  useEffect(() => setTodayDay(jakartaDay()), []);

  return (
    <table className="hours t-body">
      <caption>{kunjungi.hoursTitle}</caption>
      <tbody>
        {hours.map((h) => {
          const isToday = todayDay === h.jsDay;
          return (
            <tr key={h.day} {...(isToday ? { "data-today": "" } : {})}>
              <th scope="row">{h.day}</th>
              <td>
                {h.closed ? <span className="pill-tutup">{today.closedLabel}</span> : `${h.open}–${h.close}`}
                {isToday && <span className="sr-only"> {today.todayLabel}</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
