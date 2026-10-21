"use client";
import { copy, hours } from "@/content";
import { useJakartaDay } from "@/lib/useJakartaDay";

// Hours as a real table; today's row gets the blush ground and a "hari ini" label (JS only).
export default function HoursTable({ labelledBy }: { labelledBy: string }) {
  const day = useJakartaDay();
  return (
    <table className="hours-table t-body" aria-labelledby={labelledBy}>
      <tbody>
        {hours.rows.map((row) => {
          const today = day !== null && row.days.includes(day);
          return (
            <tr key={row.label} className={today ? "is-today" : undefined}>
              <th scope="row">
                {row.label}
                {today ? <span className="today-tag">{copy.lokasi.todayLabel}</span> : null}
              </th>
              <td>{row.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
