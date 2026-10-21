"use client";
import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, motionOkQuery } from "@/lib/motion";

// Fades a block up once as it enters the viewport. Section-level content only.
// Animates opacity (not autoAlpha), so a block that hasn't revealed yet is still reachable
// by keyboard; when focus enters it, the reveal completes at once.
// Content stays visible with no JS and under reduced motion.
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
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add(motionOkQuery, () => {
        const tween = gsap.from(el, {
          opacity: 0,
          y: distance.reveal,
          duration: duration.reveal,
          ease: ease.soft,
          delay,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });

        let done = false;
        const finish = () => {
          if (done) return;
          done = true;
          // Kill only the trigger (allowAnimation = true) so the tween survives, then end it.
          tween.scrollTrigger?.kill(false, true);
          tween.progress(1);
          detach();
        };
        const onFocusIn = () => finish();
        // Focusing an iframe (the map) blurs the window instead of firing focusin here.
        const onWindowBlur = () => {
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
        return detach;
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
