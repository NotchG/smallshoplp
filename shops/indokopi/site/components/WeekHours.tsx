"use client";
import { useEffect, useState } from "react";
import { visit, week } from "@/content";

const SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TICKS = ["00", "06", "12", "18", "24"];

// Weekly hours: the text per day carries the meaning; each 24-hour bar (aspal = open) is
// decoration that makes the nonstop weekend and the Monday-morning closure visible at a glance.
export default function WeekHours() {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    const short = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(new Date());
    setToday(SHORT.indexOf(short));
  }, []);

  return (
    <div>
      <h3 className="t-lead sign-caps">{visit.hoursTitle}</h3>
      <ul className="mt-4 space-y-3.5">
        {week.map((row) => {
          const isToday = row.jsDay === today;
          return (
            <li key={row.day}>
              <p className="grid grid-cols-[4.6em_1fr] gap-x-3 items-baseline">
                <span className="font-bold">{row.day}</span>
                <span>
                  <span className="nums">{row.text}</span>
                  {isToday && <span className="t-small sign-caps chip ml-3 align-[0.1em]">Hari ini</span>}
                </span>
              </p>
              <div className="hour-bar mt-1.5" aria-hidden="true">
                {row.open.map(([a, b]) => (
                  <span key={a} style={{ left: `${(a / 24) * 100}%`, width: `${((b - a) / 24) * 100}%` }} />
                ))}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-1.5 flex justify-between t-small nums" aria-hidden="true">
        {TICKS.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <p className="t-small mt-3 text-konter">
        {visit.legend}. {visit.note}
      </p>
    </div>
  );
}
