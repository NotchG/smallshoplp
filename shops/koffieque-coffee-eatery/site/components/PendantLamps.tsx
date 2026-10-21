"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Three wire globe pendants, drawn from the ones over KoffieQue's indoor tables.
// Hero: they hang from pane A's top rail and switch on one after another on load (the
// signature moment), then the gold dot beside "Buka hari ini" lights.
// Lit by default in CSS; `html.js` starts them dark only when this timeline will run.
// `still` renders a static, lit row (used in the indoor pane), never animated.

function Globe() {
  // 100×100 viewBox; strokes stay 1.5px at any size (non-scaling-stroke).
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <circle className="lamp-wire" cx="50" cy="50" r="47" />
      <ellipse className="lamp-wire" cx="50" cy="50" rx="13" ry="47" />
      <ellipse className="lamp-wire" cx="50" cy="50" rx="28" ry="47" />
      <ellipse className="lamp-wire" cx="50" cy="50" rx="40" ry="47" />
      <line className="lamp-wire" x1="10.9" y1="24" x2="89.1" y2="24" />
      <line className="lamp-wire" x1="10.9" y1="76" x2="89.1" y2="76" />
      <circle className="lamp-wire" cx="50" cy="56" r="9" />
      <circle className="lamp-bulb-lit" cx="50" cy="56" r="9" />
      <rect className="lamp-cap" x="42" y="-3" width="16" height="7" />
    </svg>
  );
}

function Lamp({ n }: { n: 1 | 2 | 3 }) {
  return (
    <div className={`lamp lamp-${n}`}>
      <span className="lamp-cord" />
      <div className="lamp-globe">
        <span className="lamp-glow" />
        <Globe />
      </div>
    </div>
  );
}

export default function PendantLamps({ still = false, className = "" }: { still?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (still || prefersReducedMotion()) return;
      const lamps = gsap.utils.toArray<HTMLElement>(".lamp");
      const tl = gsap.timeline({ delay: delay.lamp });
      lamps.forEach((lamp, i) => {
        const at = i * delay.lampStagger;
        // Warm-up flicker: 0 → 0.6 → 0.3 → full, once.
        tl.to(
          lamp.querySelector(".lamp-bulb-lit"),
          { keyframes: { opacity: [0, 0.6, 0.3, 1], easeEach: "none" }, duration: duration.lampWarm, ease: ease.out },
          at,
        );
        tl.to(
          lamp.querySelector(".lamp-glow"),
          { keyframes: { opacity: [0, 0.33, 0.16, 0.55], easeEach: "none" }, duration: duration.lampWarm, ease: ease.out },
          at,
        );
      });
      // The last lamp's light passes to the open dot (it lives in the hours pane).
      const dot = document.querySelector<HTMLElement>("[data-open-dot]");
      if (dot) {
        tl.fromTo(
          dot,
          { opacity: 0 },
          { opacity: 1, duration: duration.dot, ease: ease.outStrong },
          (lamps.length - 1) * delay.lampStagger + duration.lampWarm / 2,
        );
      }
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`lamps ${still ? "lamps-still" : "lamps-animate"} ${className}`} aria-hidden="true">
      <Lamp n={1} />
      <Lamp n={2} />
      <Lamp n={3} />
    </div>
  );
}
