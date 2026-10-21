"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { reveal, prefersReducedMotion } from "@/lib/motion";

// Fades a section's content up once as it enters the viewport. Section level only:
// shelves, panes and menu columns arrive with their section, never staggered.
// Content stays visible with no JS or reduced motion.
// Animates opacity (not autoAlpha), so a block that hasn't revealed yet is never
// visibility:hidden and stays reachable by keyboard. When focus enters it, the reveal completes.
export default function Reveal({
  children,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const tween = gsap.from(el, {
        opacity: 0,
        y: reveal.y,
        duration: reveal.duration,
        ease: reveal.ease,
        scrollTrigger: { trigger: el, start: reveal.start, once: true },
      });

      // Keyboard users must never land in an invisible block: finish the reveal at once.
      // kill(false, true) keeps the tween alive; a plain kill() would kill it with the trigger.
      const finish = () => {
        if (tween.progress() === 1) return;
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
      };
      // Focus moving into an iframe (the map) fires no focusin here, only a window blur.
      const onWindowBlur = () =>
        window.setTimeout(() => {
          if (document.activeElement && el.contains(document.activeElement)) finish();
        }, 0);

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
