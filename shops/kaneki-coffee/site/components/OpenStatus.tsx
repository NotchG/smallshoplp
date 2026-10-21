"use client";
import { useEffect, useState } from "react";

// Open or closed right now, in Jakarta time. The server-rendered text is a neutral
// "Buka setiap hari", replaced after mount. No animation.
function minutesNowInJakarta() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return get("hour") * 60 + get("minute");
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export default function OpenStatus({
  open,
  close,
  openLabel,
  text,
}: {
  open: string;
  close: string;
  openLabel: string;
  text: { fallback: string; open: string; closed: string };
}) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      const now = minutesNowInJakarta();
      setIsOpen(now >= toMinutes(open) && now < toMinutes(close));
    };
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, [open, close]);

  const label =
    isOpen === null ? text.fallback : isOpen ? text.open : `${text.closed} ${openLabel}`;

  return (
    <p className="status t-body" data-open={isOpen === true ? "true" : "false"}>
      <span className="status-dot" aria-hidden="true" />
      <span>{label}</span>
    </p>
  );
}
