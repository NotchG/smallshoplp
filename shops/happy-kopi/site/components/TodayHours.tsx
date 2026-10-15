"use client";
import { hours } from "@/content";
import { useJakartaDay } from "@/lib/useToday";

// Hero chip: today's status in words (the sun says the same thing in shape).
// Static HTML shows the full week until the browser knows the day in Asia/Jakarta.
export function HeroHoursChip({ className = "" }: { className?: string }) {
  const day = useJakartaDay();
  const open = day === null ? null : hours.openDays.includes(day);
  const text = open === null ? hours.summary : open ? hours.todayOpen : hours.todayClosed;
  return (
    <p className={`inline-flex items-center gap-2.5 rounded-full bg-sage/30 px-4 py-2 t-body nums ${className}`}>
      <span className={`dot ${open === false ? "dot-closed" : "dot-open"}`} aria-hidden="true" />
      <span>{text}</span>
    </p>
  );
}

// Kunjungi: the week, with today's row bold and dotted.
export function HoursList({ className = "" }: { className?: string }) {
  const day = useJakartaDay();
  return (
    <dl className={`t-body nums ${className}`}>
      {hours.rows.map((row) => {
        const today = day !== null && row.days.includes(day);
        return (
          <div
            key={row.label}
            className={`flex items-center gap-3 border-b border-kopi/15 py-2.5 ${today ? "font-bold" : ""}`}
            aria-current={today ? "date" : undefined}
          >
            <span className={`dot dot-open ${today ? "" : "invisible"}`} aria-hidden="true" />
            <dt className="min-w-[7.5rem]">{row.label}</dt>
            <dd>
              {row.time}
              {today && <span className="t-small font-normal"> · {hours.todayLabel}</span>}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
