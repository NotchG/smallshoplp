"use client";
import type { CSSProperties } from "react";
import { useJakartaNow } from "@/lib/jakarta";
import { hours, status } from "@/content";

// Opening hours drawn as seven slats hanging from a 07.00 rail. Length is proportional to
// hours open, so Friday and Saturday hang longer to midnight. Today's lamp is lit after
// mount; with JS off no slat is highlighted. The <dl> beside it carries the hours.
export default function HoursSlats() {
  const now = useJakartaNow();
  const first = hours[0].open;

  return (
    <div className="hours-chart" aria-hidden="true">
      <p className="t-small tabular text-bilah-muted">{first}</p>
      <div className="hours-rail mt-1" />
      <div className="flex">
        {hours.map((h) => {
          const isToday = now?.today.jsDay === h.jsDay;
          return (
            <div
              key={h.day}
              className="hours-slat"
              data-today={isToday ? "" : undefined}
              style={{ "--hrs": (h.closeMin - h.openMin) / 60 } as CSSProperties}
            >
              <span className="slat-body block" />
              <span className="lamp" />
              <div className="hours-label t-small tabular">
                <span className="block">{h.close}</span>
                <span className="block font-semibold">{h.short}</span>
                {isToday && <span className="hours-today block font-semibold">{status.today}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
