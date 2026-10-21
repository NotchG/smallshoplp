"use client";
import { useEffect, useState } from "react";
import { shop, visit } from "@/content";

const EN_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Seven real rows. Today is marked only after hydration (Jakarta time), never in the server HTML.
export default function HoursTable() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const day = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "long" }).format(new Date());
    setToday(EN_DAYS.indexOf(day));
  }, []);

  return (
    <table className="hours t-body">
      <caption className="sr-offscreen">{visit.hoursCaption}</caption>
      <tbody>
        {shop.hours.days.map((d, i) => (
          <tr key={d} {...(i === today ? { "data-today": "" } : {})}>
            <th scope="row">
              {d}
              {i === today && <span className="today-tag">{visit.todayTag}</span>}
            </th>
            <td>{shop.hours.display}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
