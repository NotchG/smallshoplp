"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";
import ArrowHead from "@/components/ArrowHead";

// The hero h1, redrawn from the cup logo: "IN OUT" with an up-arrow on the I and a forward
// arrow off the T, a steaming cup outline over "N OU", "coffee house" below.
// Signature: the I's arrowhead rises into place, then the T's arrow slides out along its own
// direction. Only the two arrowheads move; the letters never wait.
// "coffee house" is nested in the same line block: the lockup is one unit, and its line sits
// inside the caps' descent area on purpose (League Spartan has no descenders in "IN OUT").
export default function Wordmark() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        ".wm-arrow-i .wm-arrow-anim",
        { y: distance.arrow, opacity: 0 },
        { y: 0, opacity: 1, duration: duration.hero, ease: ease.outStrong, delay: 0.15 },
      );
      gsap.fromTo(
        ".wm-arrow-t .wm-arrow-anim",
        { x: -distance.arrow, opacity: 0 },
        { x: 0, opacity: 1, duration: duration.hero, ease: ease.outStrong, delay: 0.3 },
      );
    },
    { scope: ref },
  );

  return (
    <h1 ref={ref} className="wordmark">
      <span className="wm-main">
        <CupOutline />
        I
        <span className="wm-anchor" aria-hidden="true">
          <span className="wm-arrow wm-arrow-i">
            <span className="wm-arrow-anim">
              <ArrowHead dir="up" />
            </span>
          </span>
        </span>
        n Out
        <span className="wm-anchor" aria-hidden="true">
          <span className="wm-arrow wm-arrow-t">
            <span className="wm-arrow-anim">
              <ArrowHead dir="right" shaft />
            </span>
          </span>
        </span>{" "}
        <span className="wm-sub">coffee house</span>
      </span>
    </h1>
  );
}

// Thin cup outline (open at the bottom, standing on the letters) with two dotted steam curls.
// Units are hundredths of an em: 230 x 86 = 2.3em x 0.86em.
function CupOutline() {
  return (
    <svg className="wm-cup" viewBox="0 0 230 86" aria-hidden="true" focusable="false" data-mockup="">
      <g fill="none" stroke="currentColor" strokeWidth="4.5">
        <path d="M2.5 86V40.5H194.5V86" />
        <path d="M194.5 50.5H220.5V76.5H194.5" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray="0 7">
        <path d="M84 33C72 25 98 15 86 3" />
        <path d="M110 33C98 25 124 15 112 3" />
      </g>
    </svg>
  );
}
