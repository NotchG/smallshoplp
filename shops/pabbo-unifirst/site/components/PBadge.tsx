import { shop } from "@/content";
import { mock } from "@/lib/mockup";

// Red round "P" with a white ring, after the sign and the cups. Stands in for the real logo.
export default function PBadge({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      width={size}
      height={size}
      role="img"
      aria-label={shop.badge.text}
      className={`shrink-0 ${className}`}
      {...mock(shop.badge.mockup)}
    >
      <circle cx="22" cy="22" r="22" fill="var(--color-pabbo)" />
      <circle cx="22" cy="22" r="17.25" fill="none" stroke="var(--color-garis)" strokeWidth="1.5" />
      <text
        x="22.6"
        y="22.5"
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--color-garis)"
        fontSize="21"
        fontWeight="800"
        style={{ fontVariationSettings: '"wdth" 125' }}
      >
        P
      </text>
    </svg>
  );
}
