"use client";
import { useEffect, useState } from "react";
import { hero, shop } from "@/content";

type State = "unknown" | "open" | "closed";

// Hour of the day in the shop's own time zone (Asia/Jakarta), whatever the visitor's clock says.
function jakartaHour(now: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: shop.hours.tz,
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  return Number(parts.find((p) => p.type === "hour")?.value ?? "0") % 24;
}

// Server and no-JS render "Buka setiap hari"; the live status arrives after mount,
// so there is no hydration mismatch. The status is always text; the dot only backs it up.
export default function TodayHours() {
  const [state, setState] = useState<State>("unknown");

  useEffect(() => {
    const check = () => {
      const h = jakartaHour(new Date());
      setState(h >= shop.hours.open && h < shop.hours.close ? "open" : "closed");
    };
    check();
    const id = window.setInterval(check, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const text =
    state === "open" ? hero.status.open : state === "closed" ? hero.status.closed : hero.status.noJs;

  return (
    <p className="status t-small">
      <span aria-hidden="true" className={`status-dot${state === "open" ? " is-open" : ""}`} />
      <span>{text}</span>
    </p>
  );
}
