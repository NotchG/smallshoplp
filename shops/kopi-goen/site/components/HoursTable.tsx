"use client";
import { hours, visit } from "@/content";
import { useJakartaNow } from "@/lib/hours";

// Weekly hours as a real table. After mount, today's row (Jakarta time) is lit.
export default function HoursTable({ className = "" }: { className?: string }) {
  const now = useJakartaNow();
  return (
    <div className={`max-w-[320px] ${className}`}>
      <table className="t-body w-full border-collapse">
        <caption className="t-lead mb-3 text-left">{visit.hoursCaption}</caption>
        <tbody>
          {hours.rows.map((r) => {
            const today = now !== null && r.days.includes(now.weekday);
            return (
              <tr key={r.label} aria-current={today ? "date" : undefined} className={today ? "bg-malam-terang" : undefined}>
                <th scope="row" className="py-2 pl-3 pr-4 text-left font-normal">
                  {r.label}
                </th>
                <td className={`nums py-2 pr-3 text-right ${today ? "text-lampu" : ""}`}>{r.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="t-small mt-3 pl-3 text-pakis">{hours.everyDay}</p>
    </div>
  );
}
