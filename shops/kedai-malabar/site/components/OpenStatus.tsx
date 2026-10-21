"use client";
import Bulb from "@/components/Bulb";
import { getStatus, useJakartaNow } from "@/lib/hours";
import { status } from "@/content";

// "Buka sekarang · hari ini 10.00–22.00", computed in Asia/Jakarta time.
// Server / JS-off text links to the full week list. The bulb is lit only while open.
export default function OpenStatus({ className = "" }: { className?: string }) {
  const now = useJakartaNow();
  const s = now ? getStatus(now) : null;

  return (
    <p className={`status ${className}`}>
      <span className="status-bulb" data-state={s ? s.kind : "unknown"}>
        <Bulb className="block h-full w-full" />
      </span>
      {s ? (
        <span>
          <strong className="font-semibold">{s.label}</strong>
          <span aria-hidden="true"> · </span>
          {s.detail}
        </span>
      ) : (
        <span>
          {status.fallback} ·{" "}
          <a href="#kunjungi" className="link">
            {status.fallbackLink}
          </a>
        </span>
      )}
    </p>
  );
}
