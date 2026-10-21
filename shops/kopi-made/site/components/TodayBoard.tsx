"use client";
import { useEffect, useState } from "react";
import { hoursSummary, shop, ui } from "@/content";
import { todayStatus } from "@/lib/jakarta";

// Open/closed right now, in Jakarta time. Before JS runs (and with JS off) it shows the plain
// week, so server and client markup match; the client swaps in today's state after mount.
export default function TodayBoard() {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    const tick = () => setStatus(todayStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="pine-frame">
      <div className="board-pad">
        <p className="t-label text-pine">{ui.today}</p>
        <p className="t-body mt-2 flex items-center gap-3 font-semibold text-cream">
          <span className={`lamp-dot ${status?.open ? "" : "is-off"}`} aria-hidden="true" />
          <span>{status ? status.text : ui.todayStatic}</span>
        </p>
        <p className="t-small mt-1 text-mist">{status ? hoursSummary : ui.todayStaticSub}</p>
        <div className="mt-4 border-t border-cream/15 pt-4">
          <p className="t-small text-cream">{shop.shortAddress}</p>
          <p className="t-small text-mist">{shop.landmarkShort}</p>
        </div>
      </div>
    </div>
  );
}
