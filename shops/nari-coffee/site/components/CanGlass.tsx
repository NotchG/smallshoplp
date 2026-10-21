import { useId } from "react";

// Nari's can-shaped glass, drawn flat: one 2px ink line, flat fills, no gradients or shading.
// viewBox 120×200. Used for Luna Coffee (milk coffee + espresso band) and Taro Latte.
const INK = "#15171c";
const GLASS = "#ffffff";
const BODY =
  "M26 30 H94 V38 C94 46 104 49 104 60 V180 C104 189 97 195 88 195 H32 C23 195 16 189 16 180 V60 C16 49 26 46 26 38 Z";

const line = {
  stroke: INK,
  strokeWidth: 2,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

export const glassFills = {
  luna: { liquid: "#b98b62", top: "#6b4128" },
  taro: { liquid: "#b9a6d6", top: undefined },
} as const;

export default function CanGlass({
  variant,
  label,
  className,
}: {
  variant: keyof typeof glassFills;
  label: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const { liquid, top } = glassFills[variant];
  return (
    <svg viewBox="0 0 120 200" role="img" aria-label={label} className={className}>
      <defs>
        <clipPath id={`${id}-glass`}>
          <path d={BODY} />
        </clipPath>
      </defs>
      <path d={BODY} fill={GLASS} />
      {/* straw: the part under the liquid is covered by it */}
      <path d="M60 176 L82 4 L90 5 L68 177 Z" fill={GLASS} {...line} />
      <g clipPath={`url(#${id}-glass)`}>
        <rect x="0" y="78" width="120" height="122" fill={liquid} />
        {top && <rect x="0" y="78" width="120" height="16" fill={top} />}
        <rect x="27" y="70" width="22" height="22" rx="5" fill={GLASS} fillOpacity="0.6" transform="rotate(-10 38 81)" {...line} />
        <rect x="52" y="86" width="22" height="22" rx="5" fill={GLASS} fillOpacity="0.6" transform="rotate(8 63 97)" {...line} />
        <rect x="74" y="68" width="22" height="22" rx="5" fill={GLASS} fillOpacity="0.6" transform="rotate(-4 85 79)" {...line} />
      </g>
      <path d={BODY} fill="none" {...line} />
      <path d="M26 38 H94" fill="none" {...line} />
    </svg>
  );
}
