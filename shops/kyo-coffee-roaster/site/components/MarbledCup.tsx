"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, pour, prefersReducedMotion } from "@/lib/motion";
import { c, glass } from "@/components/art/palette";
import { hero } from "@/content";

// The Marbled Cold Brew in a clear cup printed "kyō" (photo 3, review 3).
// Server markup is the finished cup. Inside a static clipPath (the cup interior):
// static milk, the `brew` group (ink body + tapering streaks) and the `marble` group (soft swirls).
// Signature moment: the brew pours in from above (1.2 s expo.out), then marbles (0.6 s). Once.
const CUP = "M30 50H230L206 334Q205.5 340 199.5 340H60.5Q54.5 340 54 334Z";
const INTERIOR = "M34 52H226L202.6 332Q202 336.5 197 336.5H63Q58 336.5 57.4 332Z";
const LIQUID_TOP = 74;
const INTERIOR_HEIGHT = 290; // brew starts this far above its resting place: fully clipped

export default function MarbledCup({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const tl = gsap.timeline({
        delay: pour.delay,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
      tl.from("[data-brew]", { y: -INTERIOR_HEIGHT, duration: duration.hero, ease: ease.outStrong }, 0);
      tl.from(
        "[data-marble]",
        { opacity: 0, y: pour.marbleY, duration: pour.marble, ease: ease.out },
        pour.marbleAt,
      );
    },
    { scope: ref },
  );

  return (
    <svg ref={ref} viewBox="0 0 260 356" role="img" aria-label={hero.cupLabel} className={className}>
      <defs>
        <clipPath id="kyo-cup-interior">
          <path d={INTERIOR} />
        </clipPath>
      </defs>

      {/* contact shadow on the counter */}
      <ellipse cx="130" cy="343" rx="90" ry="7" fill={c.ink} opacity="0.12" />

      {/* clear plastic, faintly lighter than the wall behind it */}
      <path d={CUP} fill={c.wall} opacity="0.3" />

      <g clipPath="url(#kyo-cup-interior)">
        {/* milk */}
        <rect x="0" y={LIQUID_TOP} width="260" height="290" fill={c.wall} />

        {/* cold brew: dark body, streaks tapering down into the milk */}
        <g data-brew>
          <path
            d="M0 74H260V156C236 148 220 172 194 164C170 156 152 178 128 170C104 162 86 178 62 164C42 153 22 166 0 158Z"
            fill={c.ink}
          />
          <path d="M54 158C60 186 76 204 70 230C66 248 70 262 76 274C82 260 84 246 84 230C88 204 80 184 92 164Z" fill={c.ink} />
          <path d="M96 166C104 204 90 236 100 268C104 284 108 298 112 314C118 296 118 280 116 266C112 234 126 204 128 170Z" fill={c.brew} />
          <path d="M138 172C146 196 136 220 144 244C147 254 150 262 154 270C158 258 160 248 158 238C154 216 166 194 162 168Z" fill={c.ink} />
          <path d="M174 164C182 204 200 236 190 280C187 294 190 308 196 322C202 304 206 290 204 276C210 234 196 198 204 164Z" fill={c.brew} />
          <path d="M206 160C212 188 226 210 218 236C215 248 218 258 224 268C230 254 232 244 230 232C232 206 222 182 230 156Z" fill={c.brew} opacity="0.7" />
        </g>

        {/* marbling: soft brown swirls drifting through the milk */}
        <g data-marble>
          <path
            d="M30 214C60 200 90 222 118 212C142 204 160 218 186 214C206 210 220 220 232 230C214 236 196 228 178 234C150 244 128 228 104 236C78 244 54 228 30 236Z"
            fill={c.brew}
            opacity="0.32"
          />
          <path
            d="M44 276C72 266 98 284 126 278C152 272 172 288 206 280C204 290 184 298 160 296C134 294 110 302 84 298C66 296 52 290 44 286Z"
            fill={c.brew}
            opacity="0.2"
          />
        </g>

        {/* ice */}
        <g fill={c.wall} opacity="0.24">
          <rect x="44" y="84" width="32" height="28" rx="5" transform="rotate(-12 60 98)" />
          <rect x="186" y="82" width="32" height="28" rx="5" transform="rotate(10 202 96)" />
          <rect x="114" y="140" width="28" height="24" rx="4" transform="rotate(-6 128 152)" />
          <rect x="40" y="128" width="26" height="24" rx="4" transform="rotate(14 53 140)" />
        </g>
      </g>

      {/* plastic reflection */}
      <path d="M45 64L53 312H57.5L49.5 64Z" fill={c.wall} opacity="0.4" />

      {/* cup and lid outlines */}
      <path d={CUP} fill="none" {...glass} />
      <path d="M22 50H238V44Q238 40 234 40H26Q22 40 22 44Z" fill={c.wall} fillOpacity="0.35" {...glass} />
      <rect x="42" y="28" width="176" height="12" fill={c.wall} fillOpacity="0.25" {...glass} />

      {/* the print */}
      <text
        x="130"
        y="121"
        textAnchor="middle"
        fill={c.wall}
        style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "36px" }}
        aria-hidden="true"
      >
        {hero.cupPrint}
      </text>
    </svg>
  );
}
