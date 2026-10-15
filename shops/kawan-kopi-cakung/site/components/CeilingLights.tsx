"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion, stagger } from "@/lib/motion";

// Signature moment, "Lampu menyala": the bar's backlit ceiling panels switch on one by one,
// left to right. The panels start dim through CSS (.js .ceiling-panel), so this is gsap.to,
// never from. (The glass-glint fade was cut in the remove-one-thing pass; glints are static.)
export default function CeilingLights({ count = 6 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || prefersReducedMotion()) return;

      // Phone shows 3 panels (CSS hides 4–6); stagger only across the visible ones.
      const panels = Array.from(root.querySelectorAll<HTMLElement>(".ceiling-panel")).filter(
        (p) => getComputedStyle(p).display !== "none",
      );
      gsap.to(panels, { opacity: 1, duration: duration.panel, ease: ease.out, stagger: stagger.panel });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="ceiling" aria-hidden="true">
      <div className="ceiling-row">
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className="ceiling-panel" />
        ))}
      </div>
    </div>
  );
}
