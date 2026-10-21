"use client";
import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { lampu, prefersReducedMotion } from "@/lib/motion";

declare global {
  interface Window {
    __lampu?: boolean;
  }
}

// Signature moment: the festoon switches on bulb by bulb, left to right, then the
// terrace panorama warms up from dusk as the last bulb lights. Runs once, on load.
// The "off" state is set by CSS before first paint (.js class, motion allowed); with
// reduced motion or no `js` class the page is already in its final, lit state.
export function useLampu(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = document.documentElement;
      if (!scope.current || prefersReducedMotion() || !root.classList.contains("js")) return;
      window.__lampu = true;

      const tl = gsap.timeline({ defaults: { ease: lampu.ease } });
      // Each drawing (desktop / phone) gets its own left-to-right run; the hidden one is display:none.
      scope.current.querySelectorAll<SVGSVGElement>(".hero-strand svg").forEach((svg) => {
        const bulbs = svg.querySelectorAll("[data-bulb]");
        bulbs.forEach((bulb, i) => {
          const at = lampu.delay + (bulbs.length > 1 ? (i / (bulbs.length - 1)) * lampu.spread : 0);
          tl.to(bulb.querySelectorAll(".bulb-lit, .bulb-halo"), { opacity: 1, duration: lampu.bulb }, at);
        });
      });
      tl.fromTo(
        scope.current.querySelectorAll(".hero-scrim"),
        { opacity: lampu.scrimFrom },
        { opacity: 0, duration: lampu.warm },
        lampu.warmAt,
      );
    },
    { scope },
  );
}
