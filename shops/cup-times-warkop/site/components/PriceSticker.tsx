"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion, sticker as s } from "@/lib/motion";

type Sticker = { brand: string; item: string; price: string; tagline: string };

// The signature moment: the white thermal price label slaps onto the kiosk photo and lands at -4deg.
// Its shadow is a separate static layer that comes down with it. (The shadow's own delayed fade was
// cut in the remove-one-thing pass: a second opacity tween inside a 0.5s moment added nothing visible.)
// Reduced motion or no JS: it simply sits at -4deg with its shadow.
export default function PriceSticker({ data, className = "" }: { data: Sticker; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      // Hydrated late (slow device): the CSS failsafe has shown the sticker already, so never hide it again.
      if (performance.now() > 1100) return;
      el.style.animation = "none"; // GSAP owns opacity from here; the CSS failsafe stands down
      gsap.fromTo(
        el,
        { opacity: 0, scale: s.scaleFrom, rotation: s.rotateFrom, y: s.yFrom },
        {
          opacity: 1,
          scale: 1,
          rotation: s.rotateTo,
          y: 0,
          duration: duration.hero,
          ease: ease.outStrong,
          delay: s.delay,
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} data-sticker className={`sticker ${className}`}>
      <div className="sticker-shadow" aria-hidden="true" />
      <p className="sticker-face grid justify-items-center px-5 pt-3 pb-3.5 text-center">
        <span className="t-small font-bold tracking-[0.08em]">
          {data.brand}
        </span>
        <span className="t-body mt-0.5 font-bold">
          {data.item}
        </span>
        <span className="sticker-price tnum font-display" data-check>
          {data.price}
        </span>
        <span className="t-small mt-1 font-medium">
          {data.tagline}
        </span>
      </p>
    </div>
  );
}
