"use client";
import { useEffect, useState } from "react";
import { hours, ui } from "@/content";
import { jakartaNow } from "@/lib/jakarta";

// The week, Senin to Minggu. Today's row (Jakarta time) is marked after mount.
export default function HoursTable({ className = "" }: { className?: string }) {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(jakartaNow().jsDay), []);

  return (
    <table className={`hours t-body ${className}`}>
      <caption className="t-label mb-2 text-left text-mist">{ui.hoursCaption}</caption>
      <tbody>
        {hours.map((h) => {
          const isToday = today === h.jsDay;
          return (
            <tr key={h.day} aria-current={isToday ? "date" : undefined}>
              <th scope="row">
                <span className="inline-flex items-center gap-2.5">
                  {h.day}
                  {isToday && (
                    <span className="t-small font-normal text-lamp">· {ui.todayTag}</span>
                  )}
                </span>
              </th>
              <td>{h.closed ? ui.closed : `${h.open}–${h.close}`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
