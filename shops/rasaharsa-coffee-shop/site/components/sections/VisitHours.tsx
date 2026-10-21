"use client";
import StatusLine from "@/components/StatusLine";
import { hours, visit } from "@/content";
import { useJakartaStatus } from "@/lib/useJakartaStatus";

// Status plus the week's hours; today's row gets "Hari ini" once the page knows the day.
export default function VisitHours() {
  const now = useJakartaStatus();
  return (
    <div className="mt-8">
      <StatusLine status={now?.status ?? null} tone="light" />
      <h3 className="sr-only">{visit.hoursTitle}</h3>
      <dl className="hours tabular mt-5">
        {hours.rows.map((r) => {
          const today = now ? r.days.includes(now.day) : false;
          return (
            <div key={r.label} className="hours-row" data-today={today || undefined}>
              <dt>{r.label}</dt>
              <dd>
                {r.time}
                {today && <span className="hours-today">{hours.todayLabel}</span>}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
