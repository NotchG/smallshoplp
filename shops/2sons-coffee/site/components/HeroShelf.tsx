"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, lights } from "@/lib/motion";

// Signature moment, "rak menyala": the hero shelf's lights come on one cell at a time,
// like the shop opening at 07.00. Opacity only. The dim start state lives in CSS under
// [data-motion="on"], so with reduced motion or no JS the shelf is lit from the first frame.
export default function HeroShelf({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || document.documentElement.dataset.motion !== "on") return;

      // Light the cells in reading order of the current layout:
      // desktop name, shopfront, hours; phone name, hours, shopfront (top-down).
      const cells = gsap.utils.toArray<HTMLElement>(".hero-cell", root).sort((a, b) => {
        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();
        return Math.abs(ra.top - rb.top) > 4 ? ra.top - rb.top : ra.left - rb.left;
      });

      const tl = gsap.timeline({ delay: lights.delay });
      cells.forEach((cell, i) => {
        const at = i * lights.stagger;
        tl.to(cell.querySelectorAll(".cell-light"), { opacity: 1, duration: lights.strip, ease: ease.outStrong }, at);
        tl.to(cell.querySelectorAll(".cell-veil"), { opacity: 0, duration: lights.veil, ease: ease.out }, at);
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="shelf hero-shelf">
      {children}
    </div>
  );
}
