"use client";
import { shop } from "@/content";
import { useJakartaDay } from "@/lib/useJakartaDay";

// Kunjungi table. Today's row (Jakarta time) gets weight 600 and the gold dot in a steel ring.
export default function HoursTable() {
  const day = useJakartaDay();
  return (
    <table className="hours-table tabular" aria-label="Jam buka">
      <tbody>
        {shop.hours.map((h) => {
          const isToday = day !== null && h.days.includes(day);
          return (
            <tr key={h.label} aria-current={isToday ? "date" : undefined} className={isToday ? "is-today" : ""}>
              <th scope="row">
                <span className="today-slot" aria-hidden="true">
                  {isToday && <span className="today-dot" />}
                </span>
                {h.label}
              </th>
              <td>{h.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
