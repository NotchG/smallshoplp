"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, hinge, prefersReducedMotion } from "@/lib/motion";
import type { Cake } from "@/content";
import CakeArt from "./CakeArt";
import TentCard from "./TentCard";

// The signature moment: the Birthday Cake settles 14px onto its gold board, then its white
// price card swings up on a bottom hinge. Done by 1.0 s. The board never moves.
// Reduced motion: both at their final state, nothing animates.
export default function HeroCake({ cake }: { cake: Cake }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline();
      tl.fromTo(
        "[data-part='cake']",
        { y: -distance.settle, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: duration.settle, ease: ease.out },
      )
        .fromTo(
          ".tent",
          { rotationX: hinge.from, transformOrigin: "50% 100%", transformPerspective: hinge.perspective },
          { rotationX: 0, duration: duration.card, ease: ease.card },
          hinge.cardStart,
        )
        .fromTo(".tent", { autoAlpha: 0 }, { autoAlpha: 1, duration: duration.cardFade, ease: "none" }, hinge.cardStart);
    },
    { scope },
  );

  return (
    <div ref={scope} className="hero-cake">
      <CakeArt kind={cake.art} label={cake.alt} viewTop={30} />
      <TentCard cake={cake} hero />
    </div>
  );
}
