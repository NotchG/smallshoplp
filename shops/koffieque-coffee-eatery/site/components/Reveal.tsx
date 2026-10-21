"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Section-level content only.
// Content stays visible with no JS or reduced motion.
// Animates opacity (not autoAlpha), so a not-yet-revealed block is never `visibility: hidden`
// and stays reachable by keyboard. If focus lands inside before the scroll trigger fires,
// the reveal completes at once.
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const tween = gsap.from(el, {
        opacity: 0,
        y: distance.reveal,
        duration: duration.reveal,
        ease: ease.out,
        delay,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });

      const complete = () => {
        if (tween.progress() === 1) return;
        // Kill the trigger but keep the tween alive, then jump it to its end state.
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
      };
      const onFocusIn = () => complete();
      // Focusing an iframe (the map) fires a window blur, not focusin on the parent.
      const onWindowBlur = () => {
        window.setTimeout(() => {
          if (document.activeElement && el.contains(document.activeElement)) complete();
        }, 0);
      };

      el.addEventListener("focusin", onFocusIn);
      window.addEventListener("blur", onWindowBlur);
      return () => {
        el.removeEventListener("focusin", onFocusIn);
        window.removeEventListener("blur", onWindowBlur);
      };
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
