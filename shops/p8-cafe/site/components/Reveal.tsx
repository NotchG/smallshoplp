"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Use for section-level content only,
// not for every heading and paragraph. Content stays visible with no JS or reduced motion.
// Animates opacity (not autoAlpha), so not-yet-revealed blocks stay reachable by keyboard,
// and the reveal completes at once when focus enters the block.
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
        // Keep the tween alive when killing its trigger, then jump it to the end.
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
        cleanup();
      };
      const onFocusIn = () => complete();
      // Focusing an iframe (the map) fires a window blur, not a focusin on the block.
      const onWindowBlur = () => {
        requestAnimationFrame(() => {
          if (document.activeElement && el.contains(document.activeElement)) complete();
        });
      };
      const cleanup = () => {
        el.removeEventListener("focusin", onFocusIn);
        window.removeEventListener("blur", onWindowBlur);
      };
      el.addEventListener("focusin", onFocusIn);
      window.addEventListener("blur", onWindowBlur);

      return cleanup;
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
