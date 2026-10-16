"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, duration, ease, prefersReducedMotion } from "@/lib/motion";
import { hours } from "@/content";
import BalloonMark from "./BalloonMark";

// Signature moment: today's opening hours as an awning-striped bar, one scalloped stripe
// per open hour (15 on weekdays, 16 on weekends). After mount the Bonjur balloon floats
// from the 07.00 end to the current Jakarta time and stays there.
// Static HTML (and no JS): 15 stripes and "Setiap hari 07.00–22.00 · Sabtu–Minggu sampai 23.00".

type Now = { day: number; minutes: number };

const WEEKDAYS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const BALLOON_W = 24;

function jakartaNow(): Now {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: hours.tz,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";
  return {
    day: Math.max(0, WEEKDAYS_EN.indexOf(get("weekday"))),
    minutes: parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10),
  };
}

function Stripes({ count }: { count: number }) {
  const w = count * 20;
  return (
    <svg
      viewBox={`0 0 ${w} 36`}
      preserveAspectRatio="none"
      className="daybar-svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect width={w} height="6" fill="#C8322A" />
      {Array.from({ length: count }, (_, i) => {
        const x = i * 20;
        const d = `M${x} 6H${x + 20}V26A10 10 0 0 1 ${x} 26Z`;
        return i % 2 === 0 ? (
          <path key={i} d={d} fill="#1F3A8F" />
        ) : (
          <path
            key={i}
            d={d}
            fill="#FBFAF6"
            stroke="#1F3A8F"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

export default function DayBar({ className = "" }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const balloon = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState<Now | null>(null);

  useEffect(() => {
    setNow(jakartaNow());
  }, []);

  const weekend = now ? now.day === 0 || now.day === 6 : false;
  const close = weekend ? hours.closeWeekend : hours.closeWeekday;
  const openMin = hours.open * 60;
  const stripes = close - hours.open;
  const p = now ? Math.min(1, Math.max(0, (now.minutes - openMin) / (close * 60 - openMin))) : 0;
  const state = !now ? null : now.minutes < openMin ? "before" : now.minutes >= close * 60 ? "after" : "open";

  useGSAP(
    () => {
      if (!now || !bar.current || !balloon.current) return;
      const el = balloon.current;
      const target = () => {
        const w = bar.current?.getBoundingClientRect().width ?? 0;
        const centre = Math.min(w - BALLOON_W / 2, Math.max(BALLOON_W / 2, p * w));
        return centre - BALLOON_W / 2;
      };

      if (prefersReducedMotion()) {
        gsap.set(el, { x: target(), rotation: 0 });
      } else {
        gsap.fromTo(
          el,
          { x: 0, rotation: -8 },
          {
            x: target(),
            rotation: 0,
            duration: duration.hero,
            ease: ease.outStrong,
            delay: delay.hero,
          },
        );
      }

      // Keep the balloon on "now" when the bar changes width; no tween.
      const onResize = () => {
        gsap.killTweensOf(el);
        gsap.set(el, { x: target(), rotation: 0 });
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    },
    { scope: root, dependencies: [now, p] },
  );

  const label = now ? hours.today(hours.dayNames[now.day], close) : hours.everyDay;

  return (
    <div ref={root} className={`max-w-[30rem] ${className}`}>
      <p className="font-semibold">{label}</p>
      <div className="relative mt-2 h-8" aria-hidden="true">
        <div ref={balloon} hidden={!now} className="absolute bottom-0 left-0 will-change-transform">
          <BalloonMark />
        </div>
      </div>
      <div ref={bar} className="mt-1" aria-hidden="true">
        <Stripes count={stripes} />
      </div>
      <div className="mt-1.5 flex justify-between t-small text-muted" aria-hidden="true">
        <span>07.00</span>
        <span>{close}.00</span>
      </div>
      <p className="mt-2">
        {state === "open" && (
          <>
            <strong className="font-semibold text-green">{hours.status.open}</strong>
            {" · "}
            {hours.status.openRest(close)}
          </>
        )}
        {state === "before" && (
          <>
            <strong className="font-semibold text-red">{hours.status.before}</strong>
            {" · "}
            {hours.status.beforeRest}
          </>
        )}
        {state === "after" && (
          <>
            <strong className="font-semibold text-red">{hours.status.after}</strong>
            {" · "}
            {hours.status.afterRest}
          </>
        )}
        {!state && hours.weekendNote}
      </p>
    </div>
  );
}
