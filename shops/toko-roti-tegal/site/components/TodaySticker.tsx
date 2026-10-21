"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, duration, ease, prefersReducedMotion } from "@/lib/motion";
import { hours, hoursSummary, labels } from "@/content";
import { jakartaDow } from "@/lib/today";

// The signature moment. Server HTML (and JS off) shows the weekly hours on the sticker.
// After hydration it switches to today's hours in Asia/Jakarta, then the sticker is pressed
// onto the bag once, the way staff label a bun. Reduced motion: instant swap, no tween.
export default function TodaySticker() {
  const ref = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(jakartaDow());
  }, []);

  useGSAP(
    () => {
      if (today === null || played.current || !ref.current) return;
      played.current = true;
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        ref.current,
        { y: -14, scale: 1.1, rotation: -9, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          rotation: -3,
          autoAlpha: 1,
          duration: duration.hero,
          delay: delay.hero,
          ease: ease.outStrong,
        },
      );
    },
    { scope: ref, dependencies: [today] },
  );

  const row = today === null ? undefined : hours.find((h) => h.dow === today);

  return (
    <div
      ref={ref}
      className="sticker today-sticker"
      style={{ "--tilt": "-3deg" } as CSSProperties}
    >
      {row ? (
        <>
          {labels.todayOpen}
          <span className="mt-1 block t-lead" data-check>
            {row.periods.join(` ${labels.and} `)}
          </span>
        </>
      ) : (
        <>
          {hoursSummary[0]}
          <span className="block">{hoursSummary[1]}</span>
        </>
      )}
    </div>
  );
}
