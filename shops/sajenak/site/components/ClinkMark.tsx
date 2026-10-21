"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { CUP_L, CUP_R, Cup, HILLS, SPARKS } from "./markShapes";

// The signature moment: the logo's two cups swing together, touch, recoil and the sparks flash.
// The markup is the final pose, so with JS off or reduced motion it is simply the finished logo.
export default function ClinkMark({ className = "", mockup }: { className?: string; mockup?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = document.documentElement;
      const release = () => root.classList.remove("clink-pending");
      if (!ref.current || prefersReducedMotion()) {
        release();
        return;
      }
      const q = gsap.utils.selector(ref);
      const cupL = q("#cup-l");
      const cupR = q("#cup-r");
      const sparks = q("#sparks path");

      // Start pose (matches the pre-paint CSS in layout.tsx), then hand over to GSAP.
      gsap.set(cupL, { rotation: -16, x: -8, transformOrigin: "50% 100%" });
      gsap.set(cupR, { rotation: 16, x: 8, transformOrigin: "50% 100%" });
      gsap.set(sparks, { opacity: 0, scale: 0.85, transformOrigin: "50% 50%" });
      release();

      const tl = gsap.timeline({ delay: 0.15 });
      tl.to([cupL, cupR], { rotation: 0, x: 0, duration: duration.clink, ease: ease.clinkIn }, 0)
        .to(cupL, { rotation: -3, duration: duration.recoil, ease: ease.out, yoyo: true, repeat: 1 }, duration.clink)
        .to(cupR, { rotation: 3, duration: duration.recoil, ease: ease.out, yoyo: true, repeat: 1 }, duration.clink)
        .to(sparks, { opacity: 1, scale: 1, duration: duration.spark, ease: ease.out, stagger: 0.03 }, duration.clink);
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={`clink-mark ${className}`} {...mock(mockup)}>
      <svg
        viewBox="0 0 160 160"
        aria-hidden
        focusable={false}
        fill="none"
        stroke="currentColor"
        strokeWidth={3.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        width="100%"
        height="100%"
      >
        <g id="hills">
          {HILLS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g id="cup-l">
          <g transform={CUP_L}>
            <Cup dashes={2} />
          </g>
        </g>
        <g id="cup-r">
          <g transform={CUP_R}>
            <Cup dashes={3} />
          </g>
        </g>
        <g id="sparks" stroke="var(--color-rotan)">
          {SPARKS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      </svg>
    </span>
  );
}
