"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Use for section-level content only,
// not for every heading and paragraph. Content stays visible with no JS or reduced motion.
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
      if (!ref.current || prefersReducedMotion()) return;
      gsap.from(ref.current, {
        autoAlpha: 0,
        y: distance.reveal,
        duration: duration.reveal,
        ease: ease.out,
        delay,
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
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
