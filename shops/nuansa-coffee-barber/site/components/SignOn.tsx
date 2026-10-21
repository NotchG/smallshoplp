"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, sign } from "@/lib/motion";

// Signature moment: the fascia sign switches on. The lit letters catch with one hesitation,
// the halo blooms, then the shopfront brightens as if the lights inside came on (~1.1s, once).
// The unlit start is set before first paint by the inline script in layout.tsx; with JS off or
// reduced motion everything stays at the final, lit state.
export default function SignOn({
  children,
  className,
  id,
  label,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  label?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = document.documentElement;
      const pending = root.getAttribute("data-sign") === "pending";
      const lit = ref.current?.querySelector<HTMLElement>(".js-sign-lit");
      const photo = ref.current?.querySelector<HTMLElement>(".js-sign-photo");
      const late = performance.now() > sign.lateAfter;

      if (!pending || !lit || !photo || late || prefersReducedMotion()) {
        root.removeAttribute("data-sign");
        return;
      }

      // Same values as the CSS pending state, set inline in the same frame the attribute goes.
      gsap.set(lit, { opacity: sign.unlit, "--glow": 0 });
      gsap.set(photo, { opacity: sign.photoFrom });
      root.removeAttribute("data-sign");

      const [s1, s2, s3] = sign.steps;
      gsap
        .timeline({ delay: sign.delay, defaults: { ease: sign.ease } })
        .to(lit, { opacity: sign.peak, duration: s1 })
        .to(lit, { opacity: sign.dip, duration: s2 })
        .to(lit, { opacity: 1, duration: s3 })
        .to(lit, { "--glow": 1, duration: sign.glow }, sign.glowAt - sign.delay)
        .to(photo, { opacity: 1, duration: sign.photo }, sign.photoAt - sign.delay);
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id={id} aria-label={label} className={className}>
      {children}
    </section>
  );
}
