"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, distance, duration, ease, prefersReducedMotion } from "@/lib/motion";
import Plate from "./Plate";

// The garage opening in the hero wall: owner-1.jpg in a navy frame under a shutter housing.
// Signature moment: the shutter dips 4px, rolls up once, then hides. It only exists when the
// head script added .motion-ok; reduced motion and no-JS visitors see the photo straight away.
export default function GarageWindow({ src, alt, sign }: { src: string; alt: string; sign: string }) {
  const root = useRef<HTMLDivElement>(null);
  const shutter = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = shutter.current;
      if (!el || prefersReducedMotion()) return;
      if (!document.documentElement.classList.contains("motion-ok")) return;
      gsap
        .timeline({ delay: delay.shutter })
        .to(el, { y: distance.shutterDip, duration: duration.dip, ease: ease.dip })
        .to(el, { yPercent: -101, duration: duration.hero, ease: ease.shutter })
        .set(el, { visibility: "hidden" });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="garage-window">
      <div className="garage-housing" aria-hidden="true" />
      <div className="garage-frame">
        <div className="crop-rooftop">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} width={1160} height={522} loading="eager" fetchPriority="high" decoding="async" />
        </div>
        <div ref={shutter} className="shutter" aria-hidden="true" />
      </div>
      <Plate variant="rooftop" arrow className="garage-plate">
        {sign}
      </Plate>
    </div>
  );
}
