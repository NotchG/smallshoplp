"use client";
import { useEffect, useState } from "react";
import { hours, hoursSummary } from "@/content";

type Now = { jsDay: number; minutes: number };

const DAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// The shop's own clock: Asia/Jakarta, whatever the visitor's device is set to.
function jakartaNow(): Now {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return {
    jsDay: DAYS[get("weekday")] ?? new Date().getDay(),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(".").map(Number);
  return h * 60 + m;
};

function useJakartaNow() {
  const [now, setNow] = useState<Now | null>(null);
  useEffect(() => {
    setNow(jakartaNow());
    const id = window.setInterval(() => setNow(jakartaNow()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

// Hero: open/closed status plus today's hours. Server HTML shows the fallback,
// in the same two lines, so nothing shifts when the real status arrives.
export function HeroHours({ className = "" }: { className?: string }) {
  const now = useJakartaNow();
  const today = now ? hours.find((h) => h.jsDay === now.jsDay) : undefined;

  let status = "Buka setiap hari mulai 08.30";
  let detail = hoursSummary;
  let open: boolean | null = null;

  if (now && today) {
    open = now.minutes >= toMinutes(today.open) && now.minutes < toMinutes(today.close);
    status = open ? `Sedang buka · tutup ${today.close}` : `Tutup sekarang · buka lagi ${today.open}`;
    detail = `Hari ini ${today.open}–${today.close}`;
  }

  return (
    <div className={className}>
      <p className="flex items-center gap-2.5 font-semibold">
        <span className={`dot ${open === false ? "dot-closed" : ""}`} aria-hidden="true" />
        <span>{status}</span>
      </p>
      <p className="nums text-abu">{detail}</p>
    </div>
  );
}

// Week table: today's row gets the kursi dot and weight after mount; the server table is unmarked.
export function HoursTable() {
  const now = useJakartaNow();
  return (
    <table className="hours-table" aria-label="Jam buka Halaman Pertama">
      <tbody>
        {hours.map((h) => {
          const isToday = now?.jsDay === h.jsDay;
          return (
            <tr key={h.day} data-today={isToday ? "" : undefined}>
              <th scope="row">
                {h.day}
                {isToday && (
                  <span className="today-tag">
                    <span className="dot" aria-hidden="true" />
                    hari ini
                  </span>
                )}
              </th>
              <td>
                {h.open}–{h.close}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
