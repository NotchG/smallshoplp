"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Use for section-level content only,
// not for every heading and paragraph. Content stays visible with no JS or reduced motion.
// Animates opacity (not autoAlpha), so a not-yet-revealed block is never visibility: hidden
// and stays reachable by keyboard; focus entering the block completes the reveal at once.
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
        // Kill only the trigger; keep the tween and jump it to its end state.
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
      };
      // Focus moving into an iframe (the map) fires a window blur, not focusin.
      const onWindowBlur = () => {
        window.setTimeout(() => {
          const active = document.activeElement;
          if (active && active.tagName === "IFRAME" && el.contains(active)) finish();
        }, 0);
      };

      el.addEventListener("focusin", finish);
      window.addEventListener("blur", onWindowBlur);
      return () => {
        el.removeEventListener("focusin", finish);
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
