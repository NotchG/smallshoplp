"use client";
import { copy, hours } from "@/content";
import { useJakartaNow } from "./useJakartaNow";

// Hours in Indonesian, Senin first. Today's row (Jakarta calendar day) in kayu with a
// "hari ini" tag 8px after the time. Max 20rem wide; the time column starts at 7rem.
export default function HoursTable() {
  const now = useJakartaNow();
  return (
    <table aria-label={copy.visit.hoursLabel} className="tabular w-full max-w-[20rem] border-collapse t-body on-dark">
      <tbody>
        {hours.map((d) => {
          const today = now?.jsDay === d.jsDay;
          return (
            <tr key={d.day} className={today ? "text-kayu font-semibold" : undefined}>
              <th scope="row" className="w-[7rem] py-1 text-left font-semibold">
                {d.day}
              </th>
              <td className="py-1">
                {d.open ? `${d.open}–${d.close}` : copy.visit.closed}
                {today && <span className="ml-2 t-label align-[0.1em]">{copy.visit.today}</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
