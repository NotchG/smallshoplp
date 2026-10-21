"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Signature moment "Pemandangan terbuka": the beam plane and the deck plane ease apart
// and open the river band between them, while the glints drift a short way downstream.
// The start offsets come from CSS under html.motion-ok, so the static page paints in its
// final state when JS is off or reduced motion is on. Text is never hidden or faded.
export default function HeroMotion({
  children,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      if (!document.documentElement.classList.contains("motion-ok")) return;

      const layers = ".hero-beam, .hero-deck, .hero-glints";
      gsap.set(layers, { willChange: "transform" });
      const tl = gsap.timeline({
        defaults: { duration: duration.hero, ease: ease.outStrong },
        onComplete: () => {
          gsap.set(layers, { clearProps: "willChange" });
        },
      });
      tl.fromTo(".hero-beam", { y: distance.open }, { y: 0 }, 0)
        .fromTo(".hero-deck", { y: -distance.open }, { y: 0 }, 0)
        .fromTo(
          ".hero-glints",
          { x: -distance.glint },
          { x: 0, duration: duration.glint, ease: ease.out },
          0,
        );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className={className} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
