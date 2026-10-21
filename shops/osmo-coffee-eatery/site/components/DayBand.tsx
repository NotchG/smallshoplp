"use client";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, delay, distance, ease, prefersReducedMotion } from "@/lib/motion";
import BeanMark from "@/components/BeanMark";
import { hero, shop } from "@/content";

// The signature moment: OSMO's bean travels along the 08.00–23.00 line to "now" in Jakarta.
// Final positions live in CSS (--p); GSAP only animates from the start. JS off: hours text only.

const SPAN = shop.closeMin - shop.openMin; // 900 minutes
const HOURS = Array.from({ length: 16 }, (_, i) => 8 + i); // 08 … 23
const MAJOR = new Set([8, 12, 16, 20, 23]);
const BEAN_R = 11;

const jakarta = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Jakarta",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function jakartaMinutes() {
  const parts = jakarta.formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return h * 60 + m;
}

const pad = (n: number) => String(n).padStart(2, "0");
const clock = (min: number) => `${pad(Math.floor(min / 60))}.${pad(min % 60)}`;

function status(min: number) {
  const d = hero.day;
  const state = min < shop.openMin ? d.before : min >= shop.closeMin ? d.after : d.open;
  return `${d.nowPrefix} ${clock(min)} · ${state}`;
}

export default function DayBand() {
  const scope = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLParagraphElement>(null);
  const [now, setNow] = useState<number | null>(null);

  // Read the time after mount only (never during render: no hydration mismatch).
  useEffect(() => {
    setNow(jakartaMinutes());
    const id = window.setInterval(() => setNow(jakartaMinutes()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const p = now === null ? 0 : Math.min(1, Math.max(0, (now - shop.openMin) / SPAN));

  // Keep the label above the bean, but never past either end of the line.
  useLayoutEffect(() => {
    const r = rail.current;
    const l = label.current;
    if (!r || !l) return;
    const place = () => {
      const w = r.clientWidth;
      const lw = l.offsetWidth;
      const x = Math.min(Math.max(0, p * w - BEAN_R), Math.max(0, w - lw));
      l.style.marginLeft = `${Math.round(x)}px`;
    };
    place();
    const ro = new ResizeObserver(place);
    ro.observe(r);
    return () => ro.disconnect();
  }, [p, now]);

  const hasNow = now !== null;
  useGSAP(
    () => {
      if (!hasNow || prefersReducedMotion()) return;
      const w = rail.current?.clientWidth ?? 0;
      const tl = gsap.timeline({ paused: true });
      if (p > 0) {
        tl.fromTo(
          ".day-fill",
          { xPercent: -100, x: 0 },
          { xPercent: (p - 1) * 100, x: 0, duration: duration.hero, ease: ease.outStrong, clearProps: "transform" },
          delay.hero,
        ).fromTo(
          ".day-marker",
          { x: -p * w },
          { x: 0, duration: duration.hero, ease: ease.outStrong, clearProps: "transform" },
          delay.hero,
        );
      }
      tl.fromTo(
        ".day-now",
        { autoAlpha: 0, y: distance.label },
        { autoAlpha: 1, y: 0, duration: duration.label, ease: ease.out, clearProps: "transform" },
        p > 0 ? ">" : delay.hero,
      );
      document.fonts.ready.then(() => tl.play());
    },
    { scope, dependencies: [hasNow] },
  );

  return (
    <div className="dayband on-dark" ref={scope}>
      <div className="container-page dayband-grid">
        <p className="dayband-head">
          <span className="label dayband-label">{hero.day.label}</span>{" "}
          <span className="dayband-hours num">
            {shop.openLabel}–{shop.closeLabel}
          </span>
        </p>
        <div className="day-line">
          <div className="day-now-row">
            {hasNow && (
              <p className="day-now num" ref={label}>
                {status(now)}
              </p>
            )}
          </div>
          <div
            className="day-rail"
            ref={rail}
            aria-hidden="true"
            style={{ "--p": p } as CSSProperties}
          >
            <div className="day-track">{hasNow && <div className="day-fill" />}</div>
            {hasNow && (
              <div className="day-marker">
                <BeanMark className="day-bean" />
              </div>
            )}
          </div>
          <div className="day-ticks" aria-hidden="true">
            {HOURS.map((h, i) => {
              const left = `${((h - 8) / 15) * 100}%`;
              const major = MAJOR.has(h);
              return (
                <span key={h}>
                  <span
                    className={`day-tick${major ? " is-major" : ""}`}
                    style={{ left: i === HOURS.length - 1 ? "calc(100% - 1px)" : left }}
                  />
                  {major && (
                    <span
                      className={`day-tick-label num${h === 8 ? " is-first" : ""}${h === 23 ? " is-last" : ""}`}
                      style={{ left }}
                    >
                      <span className="short">{pad(h)}</span>
                      <span className="long">{pad(h)}.00</span>
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
