"use client";
import { hours, kunjungi } from "@/content";
import { useJakartaDow } from "@/lib/today";

// Real table markup; today's row (Jakarta time) gets aria-current="date" after mount.
export default function HoursTable({ className = "" }: { className?: string }) {
  const dow = useJakartaDow();
  return (
    <table className={`hours-table ${className}`}>
      <caption className="vh">Jam buka {kunjungi.everyDay.toLowerCase()}</caption>
      <tbody>
        {hours.map((h) => {
          const isToday = dow === h.dow;
          return (
            <tr key={h.day} aria-current={isToday ? "date" : undefined}>
              <th scope="row">
                {h.day}
                {isToday && (
                  <>
                    {" "}
                    <span className="today-tag">{kunjungi.today}</span>
                  </>
                )}
              </th>
              <td>
                {h.open}–{h.close}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
