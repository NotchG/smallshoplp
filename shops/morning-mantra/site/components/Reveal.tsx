"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Use for section-level content only,
// not for every heading and paragraph. Content stays visible with no JS or reduced motion.
// Animates opacity (not autoAlpha), so a block that hasn't revealed yet is still reachable
// by keyboard; when focus enters it, the reveal completes at once.
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

      const finish = () => {
        if (tween.progress() === 1) return;
        // Kill only the trigger (keep the tween), then jump the tween to its end state.
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
      };
      const onFocusIn = () => finish();
      // Focusing an iframe (the map) fires a window blur, not focusin on the parent.
      let timer = 0;
      const onWindowBlur = () => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          if (el.contains(document.activeElement)) finish();
        }, 0);
      };
      el.addEventListener("focusin", onFocusIn);
      window.addEventListener("blur", onWindowBlur);
      return () => {
        window.clearTimeout(timer);
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
