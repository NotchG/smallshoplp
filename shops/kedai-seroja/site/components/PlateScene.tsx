"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, distance, duration, ease, prefersReducedMotion, scale, stagger } from "@/lib/motion";

// Signature moment "piring diisi": the plate fills itself, one lauk at a time, once on load.
// Pieces start hidden only when the head script set .motion-ok (CSS has a 2.5 s fail-safe).
export default function PlateScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = document.documentElement;
      if (!ref.current || prefersReducedMotion() || !root.classList.contains("motion-ok")) return;
      const pieces = gsap.utils.toArray<HTMLElement>(".plate-piece", ref.current);
      const caption = ref.current.querySelector(".plate-caption");
      const tl = gsap.timeline({ delay: delay.signature });
      tl.fromTo(
        pieces,
        { opacity: 0, y: -distance.piece, scale: scale.piece },
        { opacity: 1, y: 0, scale: 1, duration: duration.piece, ease: ease.place, stagger: stagger.piece },
      );
      if (caption) {
        tl.fromTo(caption, { opacity: 0 }, { opacity: 1, duration: duration.caption, ease: ease.caption }, 0.9);
      }
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="plate-wrap">
      {children}
    </div>
  );
}
