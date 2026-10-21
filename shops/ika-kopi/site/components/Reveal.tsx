"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, prefersReducedMotion } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Section-level content only.
// Animates opacity (not autoAlpha), so content never becomes visibility:hidden and stays
// reachable by keyboard and screen readers. If focus enters the block before it has been
// revealed, the reveal completes at once. Content is visible with no JS or reduced motion.
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
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
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });

      // Kill only the trigger (keep the tween alive), then jump the tween to its end.
      const finish = () => {
        if (tween.progress() === 1) return;
        tween.scrollTrigger?.kill(false, true);
        tween.progress(1);
      };
      const onFocusIn = () => finish();
      // Focusing an iframe (the map) blurs the window instead of firing focusin here.
      const onWindowBlur = () => {
        requestAnimationFrame(() => {
          const active = document.activeElement;
          if (active && el.contains(active)) finish();
        });
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
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
