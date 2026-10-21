"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, prefersReducedMotion, sign } from "@/lib/motion";

// The signature moment: the sign switches on like the storefront lightbox, a two-beat flicker,
// then steady, while lamp light warms the room behind it. Opacity only, once.
// Everything else in the hero is static and visible from first paint.
export default function HeroStage({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = document.documentElement;
      const el = ref.current;
      if (!el || prefersReducedMotion() || !root.classList.contains("sign-pending")) {
        root.classList.remove("sign-pending");
        return;
      }
      const lit = el.querySelector<HTMLElement>(".sign-lit");
      const glow = el.querySelector<HTMLElement>(".sign-glow");
      const warm = el.querySelector<HTMLElement>(".room-warm");
      if (!lit || !glow || !warm) {
        root.classList.remove("sign-pending");
        return;
      }

      // Hand over from the pre-paint class to inline styles, then build the sequence.
      gsap.set([lit, glow, warm], { opacity: 0 });
      root.classList.remove("sign-pending");

      const tl = gsap.timeline({ paused: true });
      tl.to(lit, { opacity: 0.9, duration: sign.flick, ease: ease.linear }, sign.delay)
        .to(lit, { opacity: 0.3, duration: sign.flick, ease: ease.linear })
        .to(lit, { opacity: 1, duration: sign.settle, ease: ease.out })
        .to(glow, { opacity: sign.glowOpacity, duration: sign.glow, ease: ease.out }, sign.delay + sign.glowAt)
        .to(warm, { opacity: 1, duration: sign.warm, ease: ease.soft }, sign.delay + sign.glowAt);

      let cancelled = false;
      const family = getComputedStyle(lit).fontFamily;
      const fontReady = document.fonts?.load
        ? document.fonts.load(`1em ${family}`).catch(() => undefined)
        : Promise.resolve();
      const timeout = new Promise((r) => setTimeout(r, sign.fontWait * 1000));
      Promise.race([fontReady, timeout]).then(() => {
        if (!cancelled) tl.play();
      });

      return () => {
        cancelled = true;
      };
    },
    { scope: ref },
  );

  return (
    <header ref={ref} id="beranda" className="hero">
      {children}
    </header>
  );
}
