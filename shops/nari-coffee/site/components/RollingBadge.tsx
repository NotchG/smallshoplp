"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";

// The signature moment: the round N badge rolls in from the right along the cobalt band
// and settles in place, like the shop's own signboard being put together.
// x travels exactly one circumference (π × width) while it turns one full turn, so it rolls
// without sliding. Server-rendered at its final position; reduced motion leaves it there.
export default function RollingBadge({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1 });
        return;
      }
      const width = el.getBoundingClientRect().width;
      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2, ease: "none" }, 0);
      tl.from(el, { x: Math.PI * width, rotation: 360, duration: duration.hero, ease: ease.outStrong }, 0);
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={`rolling-badge badge-disc ${className}`}>
      {/* Decorative here: the h1 beside it already names the shop. */}
      <img src="/img/badge.jpg" alt="" width={184} height={184} decoding="async" />
    </span>
  );
}
