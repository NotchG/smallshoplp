"use client";
import { useToday } from "@/lib/useToday";
import { hoursRows, visit } from "@/content";

// Hours as a real table. Today's row (Asia/Jakarta) is marked after mount; the static build
// shows the plain table.
export default function HoursTable() {
  const today = useToday();
  return (
    <table className="hours t-body tabular" aria-label={visit.hoursCaption}>
      <tbody>
        {hoursRows.map((row) => {
          const isToday = today !== null && row.days.includes(today);
          return (
            <tr key={row.label} aria-current={isToday ? "date" : undefined}>
              <th scope="row" className="font-bold">
                {row.label}
                {isToday && (
                  <span className="t-small ml-2 rounded-md bg-kayu px-1.5 py-0.5 align-middle font-bold text-piring">
                    {visit.todayTag}
                  </span>
                )}
              </th>
              <td className={row.closed ? "font-bold text-awning" : "font-medium"}>{row.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
