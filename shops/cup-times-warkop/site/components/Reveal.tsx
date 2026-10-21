"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Section-level content only.
// Animates opacity (never visibility), so links inside stay reachable by keyboard,
// and the reveal completes at once when focus enters the block.
// Content stays visible with no JS, with reduced motion, and when already on screen at load.
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
      // Already in view at mount: leave it alone, so it never flashes visible -> hidden -> visible.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;

      const tween = gsap.from(el, {
        opacity: 0,
        y: distance.reveal,
        duration: duration.reveal,
        ease: ease.out,
        delay,
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });

      // Focus landed inside before the block scrolled into view: jump to the end state.
      // Complete first, then kill only the trigger (kill(false, true) keeps the finished tween).
      const finish = () => {
        tween.progress(1);
        tween.scrollTrigger?.kill(false, true);
      };
      el.addEventListener("focusin", finish);
      return () => el.removeEventListener("focusin", finish);
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
