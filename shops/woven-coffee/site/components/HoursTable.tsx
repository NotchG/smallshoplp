"use client";
import { hours } from "@/content";
import { useJakartaDay } from "@/lib/useJakartaDay";

// Real table: day as row header, time in a fixed 12ch column right after it. Today's row is marked.
export default function HoursTable({ caption, className = "" }: { caption: string; className?: string }) {
  const day = useJakartaDay();
  return (
    <table className={`hours-table ${className}`}>
      <caption className="t-term pb-2 text-left">{caption}</caption>
      <tbody>
        {hours.rows.map((r) => {
          const today = day !== null && r.idx.includes(day);
          return (
            <tr key={r.days} {...(today ? { "aria-current": "date" as const } : {})}>
              <th scope="row">{r.days}</th>
              <td>
                {r.open}–{r.close}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
