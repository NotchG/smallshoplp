"use client";
import { shop } from "@/content";
import { useJakartaDay } from "@/lib/hours";

// Seven rows, Senin first. Today's row (Asia/Jakarta) turns kuning and carries aria-current.
export default function HoursTable({ labelledBy }: { labelledBy?: string }) {
  const day = useJakartaDay();

  return (
    <table className="hours-table t-body" aria-labelledby={labelledBy}>
      <tbody>
        {shop.hours.map((r) => (
          <tr key={r.day} aria-current={r.jsDay === day ? "date" : undefined}>
            <th scope="row">{r.day}</th>
            <td>
              {r.open}–{r.close}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
