"use client";
// The server render shows the static two-group line and no marked row. After mount the
// visitor's device works out today's weekday in Asia/Jakarta. Space is reserved, so nothing shifts.
import { dayNames, hours, hoursText, visit } from "@/content";
import { hoursFor, useJakartaDay } from "@/lib/today";

export function TodayLine({ className = "" }: { className?: string }) {
  const day = useJakartaDay();
  let text = hoursText.fallback;
  if (day !== null) {
    const h = hoursFor(day);
    text = hoursText.todayLine.replace("{day}", dayNames[day]).replace("{open}", h.open).replace("{close}", h.close);
  }
  return <p className={`today-line nums ${className}`}>{text}</p>;
}

export function HoursTable({ className = "" }: { className?: string }) {
  const day = useJakartaDay();
  return (
    <table className={`hours-table ${className}`}>
      <caption className="t-small">{visit.hoursCaption}</caption>
      <tbody>
        {hours.map((h) => {
          const today = day !== null && h.days.includes(day);
          return (
            <tr key={h.label}>
              <th scope="row">{h.label}</th>
              <td className="time">
                {h.open}–{h.close}
              </td>
              <td className="mark t-small" style={{ visibility: today ? "visible" : "hidden" }}>
                {visit.todayLabel}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
