"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Use for section-level content only,
// not for every heading and paragraph. Content stays visible with no JS or reduced motion.
// Animates opacity (not autoAlpha), so a block that has not revealed yet is still in the
// tab order; when keyboard focus enters it, the reveal completes at once.
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

      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        // Kill the trigger but keep the tween (allowAnimation = true), then jump to the end.
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
        detach();
      };
      const onFocusIn = () => finish();
      // Focusing an iframe (the map) fires a window blur rather than focusin.
      const onWindowBlur = () => {
        requestAnimationFrame(() => {
          if (el.contains(document.activeElement)) finish();
        });
      };
      const detach = () => {
        el.removeEventListener("focusin", onFocusIn);
        window.removeEventListener("blur", onWindowBlur);
      };
      el.addEventListener("focusin", onFocusIn);
      window.addEventListener("blur", onWindowBlur);
      return detach;
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
