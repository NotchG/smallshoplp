"use client";
import { hoursCopy } from "@/content";
import { useJakartaToday } from "@/lib/jakarta";

// Today's hours in Asia/Jakarta. Static HTML (and no-JS) shows the weekly summary.
export default function TodayHours({ className = "" }: { className?: string }) {
  const status = useJakartaToday();

  let content: React.ReactNode = hoursCopy.fallback;
  if (status?.kind === "late") {
    content = (
      <>
        {hoursCopy.lateSession} <span className="text-gold">{status.row.close}</span>
      </>
    );
  } else if (status?.kind === "before") {
    content = (
      <>
        {hoursCopy.opensAt} <span className="text-gold">{status.row.open}</span>
      </>
    );
  } else if (status?.kind === "open") {
    content = (
      <>
        {hoursCopy.todayOpen}{" "}
        <span className="text-gold">
          {status.row.open}–{status.row.close}
        </span>
      </>
    );
  }

  return (
    <p className={`today-hours nums ${className}`}>
      <span>{content}</span>
    </p>
  );
}
