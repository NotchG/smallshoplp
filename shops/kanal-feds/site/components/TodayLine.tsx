"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { todayStatus, type TodayStatus } from "@/lib/hours";
import { hero, hoursSummary } from "@/content";
import { delay, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Hour ticks every 3 hours (desktop only); the phone shows the two ends.
const TICKS = [10, 13, 16, 19];
const OPEN_HOUR = 7;
const FALLBACK_CLOSE_HOUR = 22; // no-JS line spans the longest day, labelled "21.00 / 22.00"

function statusText(s: TodayStatus | null) {
  if (!s) return hero.status.fallback;
  if (s.state === "open") return `${hero.status.open} ${s.closeLabel}`;
  if (s.state === "before") return `${hero.status.before} ${s.openLabel}`;
  return `${hero.status.after} ${s.nextOpenLabel}`;
}

// Signature moment: the "Hari ini" line from 07.00 to today's closing time, Jakarta time.
// Server / no-JS render: "Jam buka · Buka setiap hari", marker hidden. After mount: today's
// status, and a jade square travels once to the current time. Same DOM in both states.
export default function TodayLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<TodayStatus | null>(null);

  useEffect(() => {
    // Computed only after mount, so server HTML and first client render match.
    setStatus(todayStatus(new Date()));
  }, []);

  useGSAP(
    () => {
      if (!status || !ref.current) return;
      const q = gsap.utils.selector(ref);
      const rail = q(".day-rail");
      const fill = q(".day-fill");
      const marker = q(".day-marker");
      const text = q(".today-status");
      const p = status.progress;
      const railEnd = { xPercent: p * 100 };
      const fillEnd = { xPercent: -(1 - p) * 100 };

      // Percentages, not pixels, so the line stays right on resize.
      gsap.set(rail, { x: 0, xPercent: 0 });
      gsap.set(fill, { x: 0, xPercent: -100 });

      if (prefersReducedMotion()) {
        gsap.set(rail, railEnd);
        gsap.set(fill, fillEnd);
        gsap.set(marker, { opacity: 1 });
        return;
      }

      gsap.fromTo(text, { opacity: 0.4 }, { opacity: 1, duration: duration.statusFade, ease: ease.reveal });

      if (status.state === "open") {
        const tl = gsap.timeline({ delay: delay.signature });
        tl.to(marker, { opacity: 1, duration: duration.markerFade, ease: "none" }, 0)
          .to(rail, { ...railEnd, duration: duration.signature, ease: ease.signature }, 0)
          .to(fill, { ...fillEnd, duration: duration.signature, ease: ease.signature }, 0);
      } else {
        // Before opening or after closing: the marker appears at an end, no travel.
        gsap.set(rail, railEnd);
        gsap.set(fill, fillEnd);
        gsap.to(marker, { opacity: 1, duration: duration.edgeFade, ease: ease.reveal, delay: delay.signature });
      }
    },
    { scope: ref, dependencies: [status] },
  );

  const closeHour = status?.closeHour ?? FALLBACK_CLOSE_HOUR;
  const at = (h: number) => `${((h - OPEN_HOUR) / (closeHour - OPEN_HOUR)) * 100}%`;

  return (
    <div ref={ref} className="today">
      <p className="t-label text-muted">
        {status ? `${hero.todayLabel} · ${status.dayName}` : hero.todayFallbackLabel}
      </p>
      <p className="today-status t-lead mt-1 font-medium">{statusText(status)}</p>

      <div className="day-line mt-4" aria-hidden="true">
        <div className="day-track">
          <div className="day-inner">
            <div className="day-bar">
              <div className="day-fill" />
            </div>
            {TICKS.map((h) => (
              <span key={h} className="day-tick" style={{ left: at(h) }} />
            ))}
            <div className="day-rail">
              <span className="day-marker" />
            </div>
          </div>
        </div>
        <div className="day-scale t-small text-muted">
          <span className="day-start">{status?.openLabel ?? "07.00"}</span>
          {TICKS.map((h) => (
            <span key={h} className="day-hour" style={{ left: at(h) }}>
              {h}
            </span>
          ))}
          <span className="day-end">{status?.closeLabel ?? "21.00 / 22.00"}</span>
        </div>
      </div>

      <p className="t-small mt-3 text-muted">{hoursSummary}</p>
    </div>
  );
}
