"use client";
import { useEffect, useState } from "react";
import { hoursText, shop, visit } from "@/content";
import { jakartaWeekday } from "@/components/TodayHours";

// Two rows (hours). Today's row gets a "hari ini" tag after hydration; none on the server.
export default function HoursTable({ className = "" }: { className?: string }) {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(jakartaWeekday() === "Sun" ? 1 : 0);
  }, []);

  return (
    <table className={`hours-table ${className}`} aria-label={visit.hoursCaption}>
      <tbody>
        {shop.hours.map((row, i) => (
          <tr key={row.days}>
            <th scope="row">{row.days}</th>
            <td>{row.time}</td>
            <td>{today === i && <span className="today-tag">{hoursText.todayTag}</span>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
