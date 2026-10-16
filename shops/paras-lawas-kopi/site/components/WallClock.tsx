"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, duration, ease, prefersReducedMotion } from "@/lib/motion";
import { hours, status } from "@/content";
import { START_ANGLES, handAngles, hhmm, openState, statusText } from "@/lib/jakarta";
import { useJakartaNow } from "./useJakartaNow";

const ORIGIN = { svgOrigin: "48 48" } as const;

// Signature moment: the pendulum clock from the counter (owner-1.jpg). Server and no-JS show
// the hands at opening time, 10.30. After mount they sweep clockwise to the Jakarta time
// (1.4s, expo.out), then the open/closed line fades in. Reduced motion: set to now, no tween.
export default function WallClock() {
  const scope = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const now = useJakartaNow();
  const state = now ? openState(now) : null;

  useGSAP(
    () => {
      const root = scope.current;
      if (!now || !root) return;
      const hourHand = root.querySelector("[data-hand='hour']");
      const minuteHand = root.querySelector("[data-hand='minute']");
      const line = root.querySelector("[data-status]");
      const target = handAngles(now);
      // The hands sit in groups already turned to 10.30, so they rotate by the difference.
      const turn = { hour: target.hour - START_ANGLES.hour, minute: target.minute - START_ANGLES.minute };

      if (played.current || prefersReducedMotion()) {
        gsap.set(hourHand, { rotation: turn.hour, ...ORIGIN });
        gsap.set(minuteHand, { rotation: turn.minute, ...ORIGIN });
        played.current = true;
        return;
      }
      played.current = true;
      const sweep = { duration: duration.hero, ease: ease.outStrong };
      gsap
        .timeline({ delay: delay.clock })
        .fromTo(hourHand, { rotation: 0, ...ORIGIN }, { rotation: turn.hour, ...ORIGIN, ...sweep }, 0)
        .fromTo(minuteHand, { rotation: 0, ...ORIGIN }, { rotation: turn.minute, ...ORIGIN, ...sweep }, 0)
        .fromTo(line, { opacity: 0 }, { opacity: 1, duration: duration.status, ease: ease.out }, delay.status);
    },
    { scope, dependencies: [now] },
  );

  return (
    <div ref={scope} className="clockrow">
      <ClockFace label={now ? status.clockNow(hhmm(now)) : status.clockIdle} />
      <div>
        <p className="clock-everyday">{hours.everyDay}</p>
        <p className="clock-range tabular">{hours.range}</p>
        <p data-status className={`clock-status${state === "open" ? " is-open" : ""}`}>
          {state ? (
            <>
              <span className="status-dot" aria-hidden="true" />
              {statusText(state)}
            </>
          ) : (
            " "
          )}
        </p>
      </div>
    </div>
  );
}

function ClockFace({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 96 138" className="wallclock" role="img" aria-label={label}>
      {/* case */}
      <rect x="5" y="3" width="86" height="132" rx="14" className="fill-navy stroke-cream" strokeWidth="2" />
      {/* face */}
      <circle cx="48" cy="48" r="35" className="fill-cream" />
      {Array.from({ length: 12 }, (_, i) => {
        const major = i % 3 === 0;
        return (
          <line
            key={i}
            x1="48"
            y1={major ? 15.5 : 17}
            x2="48"
            y2="22"
            transform={`rotate(${i * 30} 48 48)`}
            className="stroke-navy"
            strokeWidth={major ? 3 : 2}
            strokeLinecap="round"
          />
        );
      })}
      {/* pendulum window, static: no swinging */}
      <rect x="27" y="91" width="42" height="35" rx="6" className="fill-chalk stroke-cream" strokeWidth="2" />
      <line x1="48" y1="91" x2="48" y2="108" className="stroke-amber" strokeWidth="2" />
      <circle cx="48" cy="112" r="7" className="fill-amber" />
      {/* hands at 10.30; GSAP turns the inner groups */}
      <g transform={`rotate(${START_ANGLES.hour} 48 48)`}>
        <g data-hand="hour">
          <line x1="48" y1="53" x2="48" y2="30" className="stroke-navy" strokeWidth="4.5" strokeLinecap="round" />
        </g>
      </g>
      <g transform={`rotate(${START_ANGLES.minute} 48 48)`}>
        <g data-hand="minute">
          <line x1="48" y1="55" x2="48" y2="19" className="stroke-navy" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
      <circle cx="48" cy="48" r="3.5" className="fill-amber stroke-navy" strokeWidth="1.5" />
    </svg>
  );
}
