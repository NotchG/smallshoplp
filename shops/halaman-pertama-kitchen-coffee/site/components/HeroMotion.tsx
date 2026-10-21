"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease } from "@/lib/motion";

// Signature moment: bold "halaman" and light "pertama" slide together into the one
// cup-style word while the owner's photo settles inside its arch. Start states live in
// CSS under html.js-motion (added before paint only when motion is welcome), so the
// word is readable from the first paint and reduced motion simply never sees a start state.
export default function HeroMotion({
  children,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!document.documentElement.classList.contains("js-motion")) return;
      gsap.to(".hero-photo", { scale: 1, duration: duration.heroPhoto, ease: ease.outStrong });
      gsap.to(".wm-a, .wm-b", { x: 0, duration: duration.hero, ease: ease.outStrong, delay: 0.1 });
    },
    { scope },
  );

  return (
    <section ref={scope} className={className} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
