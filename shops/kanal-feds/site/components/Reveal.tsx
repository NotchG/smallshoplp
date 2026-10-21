"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Section-level content only.
// Animates opacity (not autoAlpha), so a not-yet-revealed block is never visibility:hidden
// and stays reachable by keyboard. If focus lands inside before the reveal has run
// (Tab, or focus moving into an iframe such as the map), the reveal completes at once.
// Content stays visible with no JS or reduced motion.
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
        ease: ease.reveal,
        delay,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });

      const finish = () => {
        if (tween.progress() === 1) return;
        // Kill only the trigger; the tween survives and jumps to its end state.
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
      };
      const onFocusIn = () => finish();
      // Focusing an iframe fires a window blur, not focusin on the parent document.
      let blurTimer = 0;
      const onWindowBlur = () => {
        window.clearTimeout(blurTimer);
        blurTimer = window.setTimeout(() => {
          if (document.activeElement && el.contains(document.activeElement)) finish();
        }, 0);
      };

      el.addEventListener("focusin", onFocusIn);
      window.addEventListener("blur", onWindowBlur);
      return () => {
        window.clearTimeout(blurTimer);
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
