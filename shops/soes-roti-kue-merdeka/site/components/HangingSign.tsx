"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, prefersReducedMotion, signSwing } from "@/lib/motion";
import { shop, sign } from "@/content";

// Minutes since midnight in Jakarta, whatever the visitor's own time zone.
function jakartaMinutes(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return h * 60 + m;
}
const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

type Status = "static" | "open" | "closed";

// The door sign (their real door has a hanging TUTUP/CLOSED card). The server HTML carries the
// static "Buka setiap hari 07.00–20.00"; after load it shows the real status in Jakarta time and
// swings once around its hook. Rotation only, so it stays readable the whole time.
export default function HangingSign() {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("static");

  useEffect(() => {
    const update = () => {
      const now = jakartaMinutes();
      const open = now >= toMinutes(shop.hours.open) && now < toMinutes(shop.hours.close);
      setStatus(open ? "open" : "closed");
    };
    update();
    const t = window.setInterval(update, 60_000);
    return () => window.clearInterval(t);
  }, []);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const tl = gsap.timeline({ delay: signSwing.delay });
      signSwing.keyframes.forEach((rotation, i) => {
        tl.to(ref.current, {
          rotation,
          transformOrigin: "50% 0%",
          duration: signSwing.segments[i],
          ease: i === 0 ? ease.out : ease.swing,
        });
      });
    },
    { scope: ref },
  );

  const word = status === "closed" ? sign.closedWord : status === "open" ? sign.openWord : sign.staticWord;
  const detail =
    status === "closed" ? sign.closedDetail : status === "open" ? sign.openDetail : sign.staticDetail;

  return (
    <div className="sign-anchor">
      <div ref={ref} className="sign">
        <span className="sign-hook" aria-hidden="true" />
        <svg className="sign-strings" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M50 0L7 40M50 0L93 40"
            stroke="#24170E"
            strokeOpacity=".55"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            fill="none"
          />
        </svg>
        <div className="sign-card">
          <p>
            <span className="sign-word" data-state={status === "closed" ? "closed" : "open"}>
              {word}
            </span>
            <span className="sign-detail">{detail}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
