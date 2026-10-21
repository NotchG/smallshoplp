"use client";
import { useRef, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, meter, prefersReducedMotion } from "@/lib/motion";

// The signature moment: 24 sound-meter bars settle once into a still dotted underline.
// The music is switched off. CSS renders the rest state (6×6px dots), so no-JS and reduced
// motion show the final state. Bars never loop, pulse or react to hover.
export default function QuietMeter() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = document.documentElement;
      if (!ref.current || prefersReducedMotion()) {
        root.classList.remove("meter-pending");
        return;
      }
      const bars = gsap.utils.toArray<HTMLElement>(".meter-bar", ref.current);
      gsap.fromTo(
        bars,
        { scaleY: (i: number) => meter.start[i] },
        {
          scaleY: 1,
          duration: duration.hero,
          ease: ease.outStrong,
          delay: meter.delay,
          stagger: { each: meter.stagger, from: "center" },
        },
      );
      // The tween now holds the tall state inline, so the pre-paint class can go.
      root.classList.remove("meter-pending");
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="meter" aria-hidden="true">
      {meter.start.map((s, i) => (
        <span key={i} className="meter-bar" style={{ "--s": s } as CSSProperties} />
      ))}
    </div>
  );
}
