"use client";
import { hoursNote } from "@/content";
import { rowFor, useJakartaDay } from "@/lib/today";

// Static HTML: "Buka setiap hari mulai 14.00". After mount: today's hours in Asia/Jakarta.
export default function TodayHours({ className = "" }: { className?: string }) {
  const row = rowFor(useJakartaDay());
  return (
    <p className={`tabular ${className}`}>
      {row ? `Buka hari ini ${row.open}–${row.close}` : hoursNote}
    </p>
  );
}
