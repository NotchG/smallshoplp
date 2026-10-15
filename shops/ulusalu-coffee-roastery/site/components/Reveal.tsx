"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { reveal, prefersReducedMotion } from "@/lib/motion";

// Fades a section's content up once as it enters the viewport. Section level only:
// shelves, panes and menu columns arrive with their section, never staggered.
// Content stays visible with no JS or reduced motion.
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
      if (!ref.current || prefersReducedMotion()) return;
      gsap.from(ref.current, {
        autoAlpha: 0,
        y: reveal.y,
        duration: reveal.duration,
        ease: reveal.ease,
        scrollTrigger: { trigger: ref.current, start: reveal.start, once: true },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
