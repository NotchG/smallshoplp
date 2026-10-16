"use client";
import { Fragment } from "react";
import { hours } from "@/content";
import { useJakartaNow } from "./useJakartaNow";

// Senin–Minggu, all 10.30–22.30 (listing). Today is marked once the browser knows the Jakarta date.
export default function HoursList() {
  const now = useJakartaNow(60_000);

  return (
    <dl className="hours">
      {hours.days.map((day, i) => {
        const today = now?.day === i;
        return (
          <Fragment key={day}>
            <dt className={today ? "is-today" : undefined}>{day}</dt>
            <dd className={today ? "is-today" : undefined}>
              {hours.range}
              {today && <span className="today-chip">{hours.todayLabel}</span>}
            </dd>
          </Fragment>
        );
      })}
    </dl>
  );
}
