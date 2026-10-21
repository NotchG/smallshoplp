"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Use for section-level content only,
// not for every heading and paragraph. Content stays visible with no JS or reduced motion.
//
// Opacity only (never autoAlpha): a block waiting to reveal stays in the accessibility tree
// and in the tab order. If keyboard focus lands inside it before it has scrolled into view,
// the reveal completes at once. Focusing an iframe (the map) fires a window blur in this
// document rather than focusin, so that path is covered too.
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
        // Kill the trigger but keep the tween alive, then jump it to its end state.
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
        detach();
      };
      const onFocusIn = () => finish();
      const onWindowBlur = () => {
        // activeElement updates after blur; the iframe becomes active in this document.
        window.setTimeout(() => {
          const active = document.activeElement;
          if (active && el.contains(active)) finish();
        }, 0);
      };
      const detach = () => {
        el.removeEventListener("focusin", onFocusIn);
        window.removeEventListener("blur", onWindowBlur);
      };

      el.addEventListener("focusin", onFocusIn);
      window.addEventListener("blur", onWindowBlur);
      tween.eventCallback("onComplete", detach);

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
