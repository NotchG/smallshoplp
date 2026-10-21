"use client";
import { useEffect, useState } from "react";
import { hours, today } from "@/content";
import { jakartaDay } from "@/lib/today";

// Build-time line "Buka setiap hari kecuali Selasa"; after mount, today's hours in Jakarta.
// One line with reserved height, so the swap causes no layout shift.
export default function TodayHours() {
  const [line, setLine] = useState<{ text: string; closed: boolean }>({ text: today.fallback, closed: false });

  useEffect(() => {
    const d = jakartaDay();
    const entry = hours.find((h) => h.jsDay === d);
    if (!entry) return;
    if (entry.closed) {
      const start = hours.indexOf(entry);
      const next = [...hours.slice(start + 1), ...hours.slice(0, start)].find((h) => !h.closed);
      if (next) setLine({ text: today.closed(next), closed: true });
    } else if (entry.open && entry.close) {
      setLine({ text: today.open(entry.open, entry.close), closed: false });
    }
  }, []);

  return (
    <p className="today t-body">
      <span className="today-dot" aria-hidden {...(line.closed ? { "data-closed": "" } : {})} />
      <span>{line.text}</span>
    </p>
  );
}
