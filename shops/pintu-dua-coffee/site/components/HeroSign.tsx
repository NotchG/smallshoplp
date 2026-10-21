"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, prefersReducedMotion, sign } from "@/lib/motion";

// Signature moment: the hero sign catches like a lightbox tube. One dip, then a steady halo.
// The inline boot script in layout.tsx starts the sign "off" before first paint (JS + motion only);
// this hands the state to GSAP inline styles and runs the switch-on once.
export default function HeroSign({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = document.documentElement;
      if (!ref.current || prefersReducedMotion()) {
        root.removeAttribute("data-sign");
        return;
      }
      const dim = ref.current.querySelector(".sign-dim");
      const halo = ref.current.querySelector(".sign-halo");
      if (!dim || !halo) return;

      gsap.set(dim, { opacity: sign.from });
      gsap.set(halo, { opacity: 0 });
      root.removeAttribute("data-sign");

      gsap
        .timeline()
        .to(dim, { opacity: 0.15, duration: sign.dip, ease: sign.step })
        .to(dim, { opacity: 0.45, duration: sign.flick, ease: sign.step })
        .to(dim, { opacity: 0, duration: sign.settle, ease: ease.out })
        .to(halo, { opacity: 1, duration: sign.halo, ease: ease.out }, sign.haloAt);
    },
    { scope: ref },
  );

  return <div ref={ref}>{children}</div>;
}
