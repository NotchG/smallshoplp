"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";

// The round backlit disc beside Kawa's sign. A kapur face with a batu edge and an amber
// halo behind it. With `animate`, the halo switches on in two soft steps after hydration:
// the site's one signature moment. Without it (or with reduced motion) the halo is lit.
export default function SignDisc({
  animate = false,
  className = "",
  size,
}: {
  animate?: boolean;
  className?: string;
  size?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!animate || !ref.current) return;
      const halo = ref.current.querySelector<HTMLElement>(".disc-halo");
      if (!halo) return;
      if (prefersReducedMotion()) {
        gsap.set(halo, { opacity: 1, scale: 1 });
        return;
      }
      // GSAP takes over from the CSS failsafe.
      halo.style.animation = "none";
      gsap
        .timeline({ delay: duration.heroDelay })
        .fromTo(
          halo,
          { opacity: 0, scale: 0.94 },
          { opacity: 0.55, scale: 0.97, duration: duration.heroStep1, ease: ease.out },
        )
        .to(halo, { opacity: 1, scale: 1, duration: duration.heroStep2, ease: ease.out });
    },
    { scope: ref },
  );

  return (
    // data-mockup: using the sign's disc as the site's mark is a guess for the owner to confirm.
    <span
      ref={ref}
      aria-hidden="true"
      data-mockup=""
      className={`disc ${className}`}
      style={size ? ({ "--disc": `${size}px` } as React.CSSProperties) : undefined}
    >
      <span className="disc-halo" {...(animate ? { "data-animate": "" } : {})} />
      <span className="disc-face" />
    </span>
  );
}
