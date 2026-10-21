"use client";
import { useEffect, useState } from "react";
import Square from "@/components/Square";
import { hours, hoursNote, hoursOrder, visit } from "@/content";
import { timeLabel, todayStatus } from "@/lib/hours";

// Seven rows, static in the HTML. After mount, today's row (Jakarta time) gets the square,
// weight 600 and aria-current="date".
export default function HoursTable() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(todayStatus(new Date()).dayIndex);
  }, []);

  return (
    <table className="hours-table t-body">
      <caption className="t-label mb-3 text-left">
        {visit.hoursCaption} <span className="font-normal normal-case tracking-normal text-muted">· {hoursNote}</span>
      </caption>
      <tbody>
        {hoursOrder.map((i) => {
          const h = hours[i];
          const isToday = today === i;
          return (
            <tr key={h.day} {...(isToday ? { "aria-current": "date" as const } : {})}>
              <th scope="row">
                <span className="flex items-center gap-2">
                  <span className={isToday ? "" : "invisible"}>
                    <Square />
                  </span>
                  {h.day}
                </span>
              </th>
              <td className="whitespace-nowrap">
                {timeLabel(h.open)}–{timeLabel(h.close)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
