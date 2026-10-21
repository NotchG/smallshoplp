"use client";
import { hours, lateOpenDays, visit, weekOrder } from "@/content";
import { fmt, useJakartaNow } from "@/lib/hours";

// Full week, Senin first. Today's row glows like a lit bulb; later openings (Rabu, Jumat) in Bata.
export default function HoursTable({ className = "" }: { className?: string }) {
  const now = useJakartaNow();
  const today = now?.day ?? -1;

  return (
    <table className={`hours ${className}`} aria-label="Jam buka Kedai Malabar, setiap hari">
      <tbody>
        {weekOrder.map((d) => {
          const h = hours[d];
          const isToday = d === today;
          const late = lateOpenDays.includes(d);
          return (
            <tr key={h.day} {...(isToday ? { "data-today": "" } : {})}>
              <th scope="row">
                {h.day}
                {isToday && <span className="today-tag">{visit.todayTag}</span>}
              </th>
              <td>
                <span className={late ? "late" : undefined}>{fmt(h.open)}</span>–{fmt(h.close)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
