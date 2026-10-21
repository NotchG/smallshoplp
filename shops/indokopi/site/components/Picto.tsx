import type { Picto as PictoName } from "@/content";

// Road-sign pictograms: solid silhouettes in currentColor on a 64 × 64 grid.
const S = { stroke: "currentColor", fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Cup({ x, tall = 19 }: { x: number; tall?: number }) {
  return (
    <>
      <rect x={x - 1} y="20" width="12" height="3.2" rx="1" />
      <path d={`M${x} 23.2 H${x + 10} L${x + 8.6} ${23.2 + tall} H${x + 1.4} Z`} />
      <path d={`M${x + 6} 20 L${x + 8} 12`} {...S} strokeWidth="2.2" />
    </>
  );
}

export function PictoPaths({ name }: { name: PictoName }) {
  switch (name) {
    case "people": // two people chatting at a table, like the shop's own warning sign
      return (
        <>
          <circle cx="11" cy="13" r="5.5" />
          <rect x="6" y="20" width="10" height="17" rx="4" />
          <rect x="6" y="32" width="14" height="5.5" rx="2.75" />
          <rect x="14.5" y="32" width="5.5" height="23" rx="2.75" />
          <path d="M14 24.5 L22 30" {...S} strokeWidth="4.5" />
          <circle cx="53" cy="13" r="5.5" />
          <rect x="48" y="20" width="10" height="17" rx="4" />
          <rect x="44" y="32" width="14" height="5.5" rx="2.75" />
          <rect x="44" y="32" width="5.5" height="23" rx="2.75" />
          <path d="M50 24 L43.5 14.5" {...S} strokeWidth="4.5" />
          <rect x="21" y="31" width="22" height="4" rx="1" />
          <rect x="30" y="35" width="4" height="18" />
          <rect x="24" y="52" width="16" height="3.5" rx="1.75" />
          <rect x="24" y="24.5" width="5" height="6.5" rx="1" />
          <rect x="35" y="24.5" width="5" height="6.5" rx="1" />
        </>
      );
    case "laptop": // laptop and a cup on a table
      return (
        <>
          <rect x="4" y="42" width="56" height="4" rx="1" />
          <rect x="30" y="46" width="4" height="10" />
          <rect x="22" y="55" width="20" height="3.5" rx="1.75" />
          <path
            fillRule="evenodd"
            d="M13 17 H39 A2 2 0 0 1 41 19 V38 H11 V19 A2 2 0 0 1 13 17 Z M14.5 20.5 V34.5 H37.5 V20.5 Z"
          />
          <path d="M7 38 H45 L47.5 42 H4.5 Z" />
          <path d="M49 31 H58 V39.5 A2.5 2.5 0 0 1 55.5 42 H51.5 A2.5 2.5 0 0 1 49 39.5 Z" />
          <path d="M58 33.5 A3.2 3.2 0 0 1 58 39.5" {...S} strokeWidth="2.2" />
          <path d="M52 27 Q50 24 52 21 M56 27 Q54 24 56 21" {...S} strokeWidth="1.8" />
        </>
      );
    case "hanger": // shirt on a hanger
      return (
        <>
          <path d="M32 16 V12.5 A4.5 4.5 0 1 0 27.5 8" {...S} strokeWidth="3" />
          <path d="M32 16 L8 29 H56 Z" {...S} strokeWidth="3" />
          <path d="M21 27 L27 25 Q32 30.5 37 25 L43 27 L54.5 35 L48.5 42.5 L44 39.5 V58 H20 V39.5 L15.5 42.5 L9.5 35 Z" />
        </>
      );
    case "threeplusone": // buy three, get one
      return (
        <>
          <Cup x={2} />
          <Cup x={14} />
          <Cup x={26} />
          <rect x="39" y="31" width="9" height="3" rx="1" />
          <rect x="42" y="28" width="3" height="9" rx="1" />
          <Cup x={51} />
        </>
      );
    case "twocups": // two cups, cheers
      return (
        <>
          <g transform="rotate(-14 20 46)">
            <rect x="10" y="20" width="18" height="4" rx="1.2" />
            <path d="M11 24 H27 L24.8 50 H13.2 Z" />
          </g>
          <g transform="rotate(14 44 46)">
            <rect x="36" y="20" width="18" height="4" rx="1.2" />
            <path d="M37 24 H53 L50.8 50 H39.2 Z" />
          </g>
          <path d="M32 11 V5 M25.5 12.5 L22 8.5 M38.5 12.5 L42 8.5" {...S} strokeWidth="2.4" />
          <rect x="8" y="55" width="48" height="3.5" rx="1.75" />
        </>
      );
    case "moon": // a cup under the moon
      return (
        <>
          <path d="M45.32 6.01 A11 11 0 1 0 56.56 20.07 A9 9 0 0 1 45.32 6.01 Z" />
          <circle cx="30" cy="10" r="1.6" />
          <circle cx="58" cy="33" r="1.3" />
          <path d="M12 34 H38 V49 A5 5 0 0 1 33 54 H17 A5 5 0 0 1 12 49 Z" />
          <path d="M38 37.5 H40.5 A5 5 0 0 1 40.5 47.5 H38" {...S} strokeWidth="3" />
          <rect x="7" y="55.5" width="36" height="3.5" rx="1.75" />
          <path d="M19 29 Q16 25.5 19 22 M25 29 Q22 25.5 25 22 M31 29 Q28 25.5 31 22" {...S} strokeWidth="2.2" />
        </>
      );
    case "cake": // a slice of cake with a candle
      return (
        <>
          <path d="M8 54 H58 V48.5 H8 Z" />
          <path d="M8 46 H58 V38.6 H18.3 L8 42 Z" />
          <path d="M25.6 36 L52 27 L58 29 V36 Z" />
          <rect x="40" y="16.5" width="3.6" height="14" rx="1" />
          <path d="M41.8 4 C45 8.5 44.6 12 41.8 13.4 C39 12 38.6 8.5 41.8 4 Z" />
          <rect x="4" y="56.5" width="58" height="3" rx="1.5" />
        </>
      );
    case "cupbowl": // a drink and a bowl of noodles
      return (
        <>
          <rect x="3.5" y="22" width="19" height="3.5" rx="1" />
          <path d="M5 25.5 H21 L19 50 H7 Z" />
          <path d="M14 22 L17 10" {...S} strokeWidth="2.6" />
          <path d="M26 32 H62 A18 17 0 0 1 26 32 Z" />
          <path d="M28 32 Q31 26 34 32 Q37 26 40 32 Q43 26 46 32 Q49 26 52 32 Q55 26 58 32 Q60 28 61 32 Z" />
          <rect x="38" y="48" width="12" height="3.5" rx="1" />
          <path d="M37 27 L57 7 M42 28 L61 10" {...S} strokeWidth="2.6" />
        </>
      );
  }
}

export default function Picto({ name, className = "" }: { name: PictoName; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <PictoPaths name={name} />
    </svg>
  );
}

// Yellow diamond warning sign with an inset aspal border and a pictogram.
export function Diamond({ name, className = "" }: { name: PictoName; className?: string }) {
  return (
    <svg viewBox="0 0 140 140" aria-hidden="true" focusable="false" className={className}>
      <rect x="20.5" y="20.5" width="99" height="99" rx="11" transform="rotate(45 70 70)" fill="#F5C400" />
      <rect
        x="27.5"
        y="27.5"
        width="85"
        height="85"
        rx="7"
        transform="rotate(45 70 70)"
        fill="none"
        stroke="#1E1D1B"
        strokeWidth="3.5"
      />
      <g transform="translate(41.2 41.2) scale(0.9)" fill="currentColor" style={{ color: "#1E1D1B" }}>
        <PictoPaths name={name} />
      </g>
    </svg>
  );
}
