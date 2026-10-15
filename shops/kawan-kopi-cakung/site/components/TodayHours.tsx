"use client";
import { useEffect, useState } from "react";
import { hero, type HoursRow } from "@/content";
import { commonOpen, jakartaDay, range, rowForDay, scheduleLine } from "@/lib/hours";

// Static render: "Buka setiap hari dari 07.30". After mount, today's hours in Jakarta time.
// Same two-line shape either way, so nothing jumps.
export default function TodayHours() {
  const [today, setToday] = useState<HoursRow | null>(null);

  useEffect(() => {
    setToday(rowForDay(jakartaDay()) ?? null);
  }, []);

  return (
    <div>
      <p className="t-lead">
        {today ? (
          <>
            <span className="block">{hero.todayPrefix}</span>
            <span className="tabular font-semibold">{range(today)}</span>
          </>
        ) : (
          <>
            <span className="block">{hero.everyDayPrefix}</span>
            <span className="tabular font-semibold">dari {commonOpen()}</span>
          </>
        )}
      </p>
      <p className="t-small tabular mt-2">{scheduleLine()}</p>
    </div>
  );
}
