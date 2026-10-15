"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, stagger } from "@/lib/motion";

declare global {
  interface Window {
    __dalleHero?: boolean;
  }
}

// "Lampu menyala": the pendants switch on, the arched photo brightens from dim,
// the outline starts to glow and the lockup settles. Done by about 1.2s.
//
// CSS holds the final state. The <head> script adds `motion-ok` only when motion is allowed,
// and CSS applies the from-states under it. Here the timeline writes the same from-states
// inline, drops the class and plays to the final state. If the 1.2s failsafe already removed
// the class (slow bundle) or motion is reduced, nothing animates.
export default function HeroMotion({
  className,
  children,
  ...rest
}: {
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      window.__dalleHero = true;
      const root = document.documentElement;
      if (!root.classList.contains("motion-ok")) return;

      const q = gsap.utils.selector(ref);
      // Only the bars that are displayed at this width (the third one is desktop-only).
      const bars = q('[data-hero="bar"]').filter((el) => (el as HTMLElement).offsetParent !== null);
      const photo = q('[data-hero="photo"]');
      const dim = q('[data-hero="dim"]');
      const glow = q('[data-hero="glow"]');
      const lead = q('[data-hero="lead"]');
      const group = q('[data-hero="group"]');
      const all = [...bars, ...photo, ...dim, ...glow, ...lead, ...group];

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(all, { clearProps: "opacity,transform" });
        },
      });

      tl.fromTo(
        bars,
        { opacity: 0, scaleX: 0.9 },
        { opacity: 1, scaleX: 1, duration: duration.bar, ease: ease.arrive, stagger: stagger.bars },
        0,
      )
        .fromTo(photo, { scale: 1.04 }, { scale: 1, duration: duration.photo, ease: ease.arrive }, 0)
        .fromTo(dim, { opacity: 0.6 }, { opacity: 0, duration: duration.dim, ease: ease.dim }, 0.15)
        .fromTo(lead, { opacity: 0, y: distance.heroLead }, { opacity: 1, y: 0, duration: duration.hero, ease: ease.arrive }, 0.3)
        .fromTo(glow, { opacity: 0 }, { opacity: 1, duration: duration.glow, ease: ease.out }, 0.45)
        .fromTo(
          group,
          { opacity: 0, y: distance.heroGroup },
          { opacity: 1, y: 0, duration: duration.heroGroup, ease: ease.arrive },
          0.5,
        );

      // From-states are now inline, so the CSS gate can go without a flash.
      root.classList.remove("motion-ok");
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className={className} {...rest}>
      {children}
    </section>
  );
}
