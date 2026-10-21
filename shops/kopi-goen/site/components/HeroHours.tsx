"use client";
import { hours } from "@/content";
import { statusFor, useJakartaNow } from "@/lib/hours";

// Today's hours on the upper step. First paint (and JS off) shows the weekly summary;
// after mount it switches to today in Jakarta time with an open/closed status.
export default function HeroHours() {
  const now = useJakartaNow();
  const status = now ? statusFor(now) : null;

  return (
    <p className="t-body flex flex-wrap items-center gap-x-3 gap-y-0.5">
      <span
        aria-hidden="true"
        className={`inline-block size-2.5 flex-none rounded-full ${
          status?.open ? "bg-lampu" : "border-[1.5px] border-beton-bayang"
        }`}
      />
      {status ? (
        <>
          <span>
            {hours.today}{" "}
            <span className="nums text-lampu">
              {status.today.open}–{status.today.close}
            </span>
          </span>
          <span className="status-line text-beton/80">
            <span className="mr-3 hidden md:inline" aria-hidden="true">
              ·
            </span>
            {status.open
              ? hours.openNow
              : `${hours.closed} · ${status.tomorrow ? hours.reopenTomorrow : hours.reopenToday} ${status.reopen}`}
          </span>
        </>
      ) : (
        <>
          <span>
            {hours.summary.lead} <span className="nums text-lampu">{hours.summary.time}</span>
          </span>
          <span className="status-line text-beton/80">
            <span className="mr-3 hidden md:inline" aria-hidden="true">
              ·
            </span>
            {hours.summary.note}
          </span>
        </>
      )}
    </p>
  );
}
