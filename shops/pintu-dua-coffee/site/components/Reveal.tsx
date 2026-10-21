"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Use for section-level content only,
// not for every heading and paragraph. Content stays visible with no JS or reduced motion.
// Opacity only (not autoAlpha): visibility:hidden would take the block's links out of the
// tab order until it is scrolled into view. Keyboard focus entering the block finishes the reveal.
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
      const finish = () => tween.progress(1);
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
