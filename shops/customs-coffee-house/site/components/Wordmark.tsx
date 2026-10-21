"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";

// "CUSTOM" + the ringed S from the fascia.
// Hero (roll): renders the page <h1>; its accessible name comes from aria-label on the mark. On load the ring rolls in from the right like a wheel:
// x = π × ring width (one full turn) and rotation 360 → 0 together, 1.0 s, power3.out, once.
// Footer (static): small mark at lead size with "coffee house" beside it.
export default function Wordmark({ roll = false }: { roll?: boolean }) {
  const scope = useRef<HTMLHeadingElement>(null);
  const ring = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!roll) return;
      const root = document.documentElement;
      const el = ring.current;
      if (!el || prefersReducedMotion()) {
        root.classList.remove("roll-pending");
        return;
      }
      const width = el.getBoundingClientRect().width;
      gsap.from(el, { x: Math.PI * width, rotation: 360, duration: duration.hero, ease: ease.roll });
      gsap.from(el, { autoAlpha: 0, duration: 0.3, ease: "none" });
      root.classList.remove("roll-pending");
    },
    { scope, dependencies: [roll] },
  );

  if (roll) {
    return (
      <h1 ref={scope} className="wordmark t-display">
        <span className="wordmark-row" role="img" aria-label="Customs Coffee House">
          <span aria-hidden="true">CUSTOM</span>
          <span ref={ring} className="wordmark-ring" aria-hidden="true">
            <span className="wordmark-s">S</span>
          </span>
        </span>
      </h1>
    );
  }

  return (
    <div
      className="wordmark t-lead flex flex-wrap items-center gap-x-[0.4em]"
      role="img"
      aria-label="Customs Coffee House"
    >
      <span className="wordmark-row" aria-hidden="true">
        <span>CUSTOM</span>
        <span className="wordmark-ring">
          <span className="wordmark-s">S</span>
        </span>
      </span>
      <span aria-hidden="true" className="font-extrabold tracking-[-0.01em]">
        coffee house
      </span>
    </div>
  );
}
