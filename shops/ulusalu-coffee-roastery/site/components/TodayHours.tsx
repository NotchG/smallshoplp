"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, status as statusMotion, prefersReducedMotion } from "@/lib/motion";
import { useJakartaNow } from "@/lib/jakarta";
import { hero, status } from "@/content";

function StatusChunk({ isOpen }: { isOpen: boolean }) {
  return (
    <span data-status className="inline-flex items-center gap-2 whitespace-nowrap font-semibold">
      <span aria-hidden className={`status-dot ${isOpen ? "is-open" : ""}`} />
      {isOpen ? status.open : status.closed}
    </span>
  );
}

// Static line on the server ("Buka setiap hari mulai 07.00"); after mount, today's hours
// in Asia/Jakarta time, inside a reserved one-line min-height so nothing shifts.
// In the hero, the open/closed status fades up near the end of the lamp sweep.
export default function TodayHours({
  variant,
  className = "",
}: {
  variant: "hero" | "visit";
  className?: string;
}) {
  const now = useJakartaNow();
  const ref = useRef<HTMLParagraphElement>(null);
  const ready = now !== null;

  useGSAP(
    () => {
      if (!ready || variant !== "hero" || prefersReducedMotion()) return;
      gsap.from("[data-status]", {
        autoAlpha: 0,
        y: statusMotion.y,
        duration: statusMotion.duration,
        delay: statusMotion.at,
        ease: ease.out,
      });
    },
    { scope: ref, dependencies: [ready] },
  );

  const range = now ? `${now.today.open}–${now.today.close}` : "";

  return (
    <p ref={ref} className={`today-hours t-body tabular ${className}`}>
      {!now ? (
        <span>{hero.staticHours}</span>
      ) : variant === "hero" ? (
        <>
          <span className="lg:hidden">
            <StatusChunk isOpen={now.isOpen} /> · {range}
          </span>
          <span className="hidden lg:inline">
            {status.today}, {now.today.day} · {range} · <StatusChunk isOpen={now.isOpen} />
          </span>
        </>
      ) : (
        <>
          <span className="block">
            {status.today}, {now.today.day} · {range}
          </span>
          <span className="mt-1 block">
            <StatusChunk isOpen={now.isOpen} />
          </span>
        </>
      )}
    </p>
  );
}
