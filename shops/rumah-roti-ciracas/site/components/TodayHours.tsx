"use client";
import { useEffect, useState } from "react";
import { hoursText } from "@/content";
import { ClockIcon } from "@/components/icons";

/** Weekday in Jakarta ("Sun", "Mon", ...), whatever the visitor's own timezone. */
export function jakartaWeekday() {
  return new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Jakarta", weekday: "short" }).format(
    new Date(),
  );
}

// Server and no-JS: the full week. After hydration: today's line.
export default function TodayHours({ className = "" }: { className?: string }) {
  const [text, setText] = useState(hoursText.summary);

  useEffect(() => {
    setText(jakartaWeekday() === "Sun" ? hoursText.closedToday : hoursText.openToday);
  }, []);

  return (
    <p className={`hours-pill ${className}`}>
      <ClockIcon />
      <span>{text}</span>
    </p>
  );
}
