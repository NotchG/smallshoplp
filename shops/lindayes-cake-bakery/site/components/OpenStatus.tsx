"use client";
import { useEffect, useState } from "react";
import { hours, status } from "@/content";

// Static hours label from the listing; after mount, the live "Sedang buka / Sedang tutup"
// (Asia/Jakarta) fills a row whose height is reserved, so nothing shifts.
function minutesInJakarta(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: hours.tz,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return get("hour") * 60 + get("minute");
}

export default function OpenStatus({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const m = minutesInJakarta(new Date());
      setOpen(m >= hours.openMin && m < hours.closeMin);
    };
    check();
    const timer = window.setInterval(check, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <p className={`t-body ${className}`}>
      <span className="status-row flex items-center gap-2 font-semibold">
        {open !== null && (
          <>
            <span
              aria-hidden="true"
              className={`inline-block size-2.5 rounded-full ${open ? "status-dot-open" : "status-dot-closed"}`}
            />
            <span>{open ? status.open : status.closed}</span>
          </>
        )}
      </span>
      <span className="block">{label}</span>
    </p>
  );
}
