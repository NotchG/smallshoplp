"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, led, prefersReducedMotion } from "@/lib/motion";

// Signature moment, "lampu menyala": the warm LED strip on both roof edges of the hero gable
// switches on, running from each eave up to the ridge, then its glow comes up.
// The lines sit exactly on the .gable clip edges: polygon(0 26%, 50% 0, 100% 26%, ...).
// Default state is lit; the timeline only runs when motion is allowed, once, on load.
export default function LedEdges() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = document.documentElement;
      if (prefersReducedMotion()) {
        root.classList.remove("led-wait");
        return;
      }
      const tl = gsap.timeline();
      tl.fromTo(".led-reveal-l", { x: -60 }, { x: 0, duration: led.sweep, ease: ease.outStrong }, led.start)
        .fromTo(".led-reveal-r", { x: 60 }, { x: 0, duration: led.sweep, ease: ease.outStrong }, led.start)
        .fromTo(
          ".led-glow",
          { opacity: 0 },
          { opacity: led.glowOpacity, duration: led.glow, ease: ease.out },
          led.glowStart,
        );
      // Start states are set (fromTo renders immediately); now let the lines show.
      root.classList.remove("led-wait");
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Blurred twin: the glow. Static 8px blur, opacity only. */}
      <svg
        className="led-glow absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,26 50,0 100,26"
          className="fill-none stroke-kuning"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {/* The lit strip: two 4px lines, each revealed by a mask rect sliding from its eave. */}
      <svg
        className="led-line absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <mask id="led-mask-l" maskUnits="userSpaceOnUse" x={-80} y={-20} width={260} height={140}>
            <rect className="led-reveal-l" x={-10} y={-20} width={60} height={70} fill="#fff" />
          </mask>
          <mask id="led-mask-r" maskUnits="userSpaceOnUse" x={-80} y={-20} width={260} height={140}>
            <rect className="led-reveal-r" x={50} y={-20} width={60} height={70} fill="#fff" />
          </mask>
        </defs>
        <line
          x1={0}
          y1={26}
          x2={50}
          y2={0}
          className="stroke-kuning"
          strokeWidth={4}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          mask="url(#led-mask-l)"
        />
        <line
          x1={100}
          y1={26}
          x2={50}
          y2={0}
          className="stroke-kuning"
          strokeWidth={4}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          mask="url(#led-mask-r)"
        />
      </svg>
    </div>
  );
}
