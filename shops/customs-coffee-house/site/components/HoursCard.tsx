"use client";
import { useSyncExternalStore } from "react";
import { shop } from "@/content";
import CheckerEdge from "@/components/CheckerEdge";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Today's weekday in Jakarta, 0 = Minggu … 6 = Sabtu. -1 on the server and before hydration,
// so the static HTML shows the full week. No "open now" status (it could be wrong after midnight).
function jakartaWeekday() {
  try {
    const wd = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" }).format(
      new Date(),
    );
    return DAYS.indexOf(wd);
  } catch {
    return -1;
  }
}
const subscribe = () => () => {};

export default function HoursCard({ variant }: { variant: "today" | "week" }) {
  const today = useSyncExternalStore(subscribe, jakartaWeekday, () => -1);
  const day = today >= 0 ? shop.hoursByWeekday[today] : null;

  if (variant === "today") {
    return (
      <div className="hours-card">
        <CheckerEdge />
        <div className="hours-card-body">
          {day ? (
            <>
              <p className="t-label t-small">Buka hari ini · {day.day}</p>
              <p className="t-label t-lead tnum normal-case">{day.time}</p>
            </>
          ) : (
            <>
              <p className="t-label t-small">Jam buka</p>
              <p className="tnum">
                {shop.hours.map((h, i) => (
                  <span key={h.days}>
                    {i > 0 && " · "}
                    {h.days} {h.time}
                  </span>
                ))}
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="hours-card">
      <CheckerEdge />
      <div className="hours-card-body px-[8px]">
        <p className="t-label t-small px-[12px] pb-[4px]">Jam buka</p>
        <dl>
          {shop.hours.map((h, i) => {
            const isToday = day?.group === i;
            return (
              <div key={h.days} className="hours-row" {...(isToday ? { "data-today": "" } : {})}>
                <dt className="font-semibold">
                  {h.days}
                  {isToday && <span className="t-label t-small ml-[8px]">hari ini</span>}
                </dt>
                <dd className="t-label t-lead tnum normal-case">{h.time}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
