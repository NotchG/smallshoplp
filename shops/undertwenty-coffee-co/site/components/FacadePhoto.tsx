"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { door, prefersReducedMotion } from "@/lib/motion";

// The owner's own street front in an 8px steel frame.
// Signature, "Mendekati pintu": as the hero scrolls away, the photo eases in toward the glass
// door (scale 1 → 1.10, 1.06 on phones) inside its fixed frame. Scrubbed, no pin, nothing on load.
export default function FacadePhoto({ alt, className = "" }: { alt: string; className?: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const frame = scope.current;
      const img = frame?.querySelector("img");
      const hero = frame?.closest("section");
      if (!frame || !img || !hero || prefersReducedMotion()) return;

      const mm = gsap.matchMedia();
      mm.add({ phone: "(max-width: 767px)", wide: "(min-width: 768px)" }, (ctx) => {
        const { phone } = ctx.conditions as { phone: boolean };
        gsap.fromTo(
          img,
          { scale: 1 },
          {
            scale: phone ? door.scalePhone : door.scale,
            ease: "none",
            transformOrigin: door.origin,
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: door.scrub },
          },
        );
      });
      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={`frame overflow-hidden ${className}`}>
      <img
        src="/photos/facade.jpg"
        width={1010}
        height={868}
        alt={alt}
        fetchPriority="high"
        className="block w-full aspect-[4/3] object-cover will-change-transform"
        style={{ objectPosition: "40% 60%" }}
      />
    </div>
  );
}
