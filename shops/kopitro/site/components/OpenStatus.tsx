"use client";
import { status } from "@/content";
import { statusFor } from "@/lib/hours";
import { useJakartaNow } from "./useJakartaNow";

// Tonight's status for Jakarta time. The server HTML (and no-JS) shows the weekly fallback.
export default function OpenStatus({ className = "" }: { className?: string }) {
  const now = useJakartaNow();
  const line = now ? status[statusFor(now.jsDay, now.hour)] : status.fallback;
  return (
    <p className={`tabular ${className}`}>
      <span className="block t-lead font-semibold" data-check="status">
        {line.main}
      </span>
      <span className="mt-1 block t-small font-medium">{line.sub}</span>
    </p>
  );
}
