"use client";
import { shop, labels } from "@/content";
import { useJakartaDay } from "@/lib/useJakartaDay";

// Hero pane C. Static HTML shows a line that is never wrong ("Buka setiap hari");
// after mount it swaps to today's hours in Jakarta. Same three lines either way, so no shift.
// No "open now" or "closed" states.
export default function TodayHours() {
  const day = useJakartaDay();
  const today = day === null ? undefined : shop.hours.find((h) => h.days.includes(day));
  const weekday = shop.hours[0];
  const weekend = shop.hours[1];

  return (
    <div>
      <p className="t-small font-semibold text-abu">{today ? labels.openToday : shop.hoursNote}</p>
      <p className="t-lead tabular mt-1 flex items-center gap-3 font-semibold">
        <span data-open-dot className="open-dot" aria-hidden="true" />
        {today ? today.time : weekday.time}
      </p>
      <p className="t-small mt-1 text-abu">
        {today ? shop.hoursNote : `${weekend.label} ${weekend.time}`}
      </p>
    </div>
  );
}
