"use client";
import { useSyncExternalStore } from "react";
import { hours, hoursCopy, type HoursRow } from "@/content";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const noop = () => () => {};

// Weekday in Asia/Jakarta (0 = Minggu … 6 = Sabtu). Null on the server, so the static
// HTML carries the fallback and the browser swaps in today's hours after hydration.
function jakartaDay(): number {
  const wd = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Jakarta" }).format(new Date());
  return DAYS.indexOf(wd);
}
function useJakartaDay(): number | null {
  return useSyncExternalStore(noop, jakartaDay, () => null);
}
function rowFor(day: number | null): HoursRow | undefined {
  return day == null || day < 0 ? undefined : hours.find((r) => r.dayIdx.includes(day));
}

// Hero: two lines, always two lines, so nothing moves when the text swaps.
export function HeroHours() {
  const row = rowFor(useJakartaDay());
  const other = row && hours.find((r) => r !== row);
  return (
    <div>
      <p className="flex items-center gap-2.5 font-semibold tnum">
        <span className="dot" aria-hidden />
        {row ? `${hoursCopy.today} ${row.time}` : hoursCopy.fallbackMain}
      </p>
      <p className="t-small mt-1 pl-[1.15rem] font-normal">
        {row && other ? `Buka setiap hari · ${other.days} sampai ${other.close}` : hoursCopy.fallbackNote}
      </p>
    </div>
  );
}

// Visit: the real hours table. The "hari ini" marker is text, in a cell that always exists.
export function HoursTable() {
  const row = rowFor(useJakartaDay());
  return (
    <table className="hours-table w-full tnum" aria-label="Jam buka Sajenak">
      <tbody>
        {hours.map((r) => {
          const isToday = row === r;
          return (
            <tr key={r.days} aria-current={isToday ? "date" : undefined}>
              <th scope="row" className="pr-6 font-semibold whitespace-nowrap">
                {r.days}
              </th>
              <td className="w-full">
                {/* On narrow phones the marker wraps under the time. */}
                <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <span className="whitespace-nowrap">{r.time}</span>
                  {isToday ? (
                    <span className="today-pill">
                      <span className="dot" aria-hidden style={{ background: "var(--color-arang)", width: 6, height: 6 }} />
                      {hoursCopy.todayMarker}
                    </span>
                  ) : null}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
