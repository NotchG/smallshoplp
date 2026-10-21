"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, duration, ease, prefersReducedMotion } from "@/lib/motion";
import Plate from "@/components/Plate";
import TodayHours from "@/components/TodayHours";
import { hero } from "@/content";

// The signature moment: a passing motorbike's headlight sweeps across the sign and its hours
// plate, and the retroreflective yellow brightens from dusk-dim to full. Once, about 1.25 s.
// CSS paints the dim state before JS (and un-dims on its own at 2.5 s if this never runs).
// Reduced motion or JS off: no dim, no beam, the sign is simply lit.
export default function HeroSign() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline();
      tl.fromTo(
        ".sign-beam",
        { xPercent: -100, opacity: 0 },
        { xPercent: 170, duration: duration.beam, ease: ease.beam },
        delay.beam,
      )
        .to(".sign-beam", { opacity: 0.6, duration: duration.beam * 0.45, ease: "sine.out" }, delay.beam)
        .to(
          ".sign-beam",
          { opacity: 0, duration: duration.beam * 0.55, ease: "sine.in" },
          delay.beam + duration.beam * 0.45,
        )
        .to(".sign-dim", { opacity: 0, duration: duration.undim, ease: ease.out }, delay.undim);
    },
    { scope },
  );

  return (
    <div ref={scope} className="sign-group">
      <Plate variant="yellow" className="p-5 md:p-10">
        <div className="wordmark-box">
          <p className="t-lead sign-caps">{hero.zoneLabel}</p>
          <h1 id="hero-judul" className="wordmark mt-1 md:mt-2">{hero.wordmark}</h1>
          <p className="t-lead font-slab font-extrabold mt-2 md:mt-3">{hero.tagline}</p>
        </div>
      </Plate>
      <Plate variant="white" className="mt-3 px-5 py-4 md:px-10 md:py-5">
        <TodayHours />
      </Plate>
      <div className="sign-dim" aria-hidden="true" />
      <div className="sign-beam" aria-hidden="true" />
    </div>
  );
}
