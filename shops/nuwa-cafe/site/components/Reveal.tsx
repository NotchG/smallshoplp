"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Section-level content only.
// Animates opacity (not autoAlpha), so a block that hasn't revealed yet is never
// visibility:hidden and stays reachable by keyboard; when focus enters it (including an
// iframe, which fires a window blur rather than focusin), the reveal completes at once.
// Content stays visible with no JS or reduced motion, and blocks already in view at load
// are left alone instead of flashing out and back in.
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
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;

      const tween = gsap.from(el, {
        opacity: 0,
        y: distance.reveal,
        duration: duration.reveal,
        ease: ease.out,
        delay,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });

      const complete = () => {
        // Keep the tween alive when the trigger goes, then jump it to the end.
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
      };
      const onFocusIn = () => complete();
      const onWindowBlur = () => {
        // Focus moved into an iframe: the parent document's activeElement is that iframe.
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
