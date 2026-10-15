"use client";
import { useEffect, useState } from "react";

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// Static "Buka hari ini 10.00–21.00" at build. After mount, adds whether the cafe is open
// right now, in Jakarta time. The meaning is always in the text, never only in the dot.
export default function OpenStatus({
  prefix,
  label,
  open,
  close,
  timeZone,
  texts,
}: {
  prefix: string;
  label: string;
  open: string;
  close: string;
  timeZone: string;
  texts: { open: string; before: string; closed: string };
}) {
  const [suffix, setSuffix] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      }).formatToParts(new Date());
      const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
      const now = get("hour") * 60 + get("minute");
      if (now < toMinutes(open)) setSuffix(texts.before);
      else if (now < toMinutes(close)) setSuffix(texts.open);
      else setSuffix(texts.closed);
    };
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, [open, close, timeZone, texts]);

  return (
    <p className="flex items-start gap-2.5">
      <span className="status-dot" aria-hidden="true" />
      <span>
        {prefix} <span className="whitespace-nowrap">{label}</span>
        {suffix && (
          <>
            {" "}
            <span className="muted-walnut block whitespace-nowrap xl:inline">
              <span className="hidden xl:inline">· </span>
              {suffix}
            </span>
          </>
        )}
      </span>
    </p>
  );
}
