import { mock } from "@/lib/mockup";

// Dishes seen from above on the shop's pale-green plate with its brown rim (owner-2).
// Flat shapes, 3–5 colours each, no outlines or gradients. Placeholder until the owner sends photos.
const RIM = "#9A5238";
const PLATE = "#CFDDB0";
const WELL = "#C4D4A2";

export type PlateKind = "chicken-rice" | "mini-platter" | "bana-nagih" | "gorengan";

function Dish({ kind }: { kind: PlateKind }) {
  switch (kind) {
    case "chicken-rice":
      return (
        <>
          <circle cx="36" cy="49" r="17" fill="#FBF7EE" />
          <g fill="#E2BD84">
            <rect x="46" y="22" width="8" height="24" rx="4" transform="rotate(24 50 34)" />
            <rect x="54" y="25" width="8" height="24" rx="4" transform="rotate(24 58 37)" />
            <rect x="62" y="29" width="7" height="21" rx="3.5" transform="rotate(24 65.5 39.5)" />
          </g>
          <circle cx="53" cy="63" r="6.2" fill="#8FAE5A" />
          <circle cx="53" cy="63" r="4.3" fill="#E4ECC4" />
          <circle cx="63" cy="57" r="5.6" fill="#8FAE5A" />
          <circle cx="63" cy="57" r="3.8" fill="#E4ECC4" />
          <path d="M20.5 34a8.5 8.5 0 0 1 15.5-5z" fill="#CF5A3E" />
        </>
      );
    case "mini-platter":
      return (
        <>
          <g fill="#EBC35E">
            <rect x="20" y="24" width="4.6" height="24" rx="1.6" transform="rotate(-18 22 36)" />
            <rect x="26" y="20" width="4.6" height="26" rx="1.6" transform="rotate(-6 28 33)" />
            <rect x="32" y="22" width="4.6" height="24" rx="1.6" transform="rotate(9 34 34)" />
            <rect x="19" y="44" width="4.6" height="22" rx="1.6" transform="rotate(14 21 55)" />
            <rect x="26" y="42" width="4.6" height="24" rx="1.6" transform="rotate(-10 28 54)" />
            <rect x="33" y="44" width="4.6" height="22" rx="1.6" transform="rotate(4 35 55)" />
            <rect x="17" y="36" width="24" height="4.6" rx="1.6" transform="rotate(-24 29 38)" />
          </g>
          <g fill="#A8432E">
            <rect x="45" y="21" width="8.5" height="25" rx="4.25" transform="rotate(-8 49 33)" />
            <rect x="55" y="22" width="8.5" height="25" rx="4.25" transform="rotate(-8 59 34)" />
            <rect x="47" y="45" width="8.5" height="25" rx="4.25" transform="rotate(10 51 57)" />
            <rect x="57" y="46" width="8.5" height="23" rx="4.25" transform="rotate(10 61 57)" />
          </g>
          <circle cx="42" cy="68" r="7.5" fill="#F7F0E3" />
          <circle cx="42" cy="68" r="5.3" fill="#C8452F" />
        </>
      );
    case "bana-nagih":
      return (
        <>
          <g fill="#D9A04A">
            <ellipse cx="31" cy="35" rx="8.5" ry="14" transform="rotate(-32 31 35)" />
            <ellipse cx="51" cy="31" rx="8.5" ry="14" transform="rotate(26 51 31)" />
            <ellipse cx="35" cy="57" rx="8.5" ry="14" transform="rotate(58 35 57)" />
            <ellipse cx="57" cy="54" rx="8.5" ry="14" transform="rotate(-12 57 54)" />
          </g>
          <path
            d="M21 29l16-6-11 15 22-9-17 19 26-11-18 20 23-10"
            fill="none"
            stroke="#5B3A26"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g fill="#F6D66A">
            <rect x="28" y="26" width="5" height="1.9" rx=".9" transform="rotate(20 30 27)" />
            <rect x="45" y="24" width="5" height="1.9" rx=".9" transform="rotate(-30 47 25)" />
            <rect x="52" y="38" width="5" height="1.9" rx=".9" transform="rotate(40 54 39)" />
            <rect x="38" y="42" width="5" height="1.9" rx=".9" transform="rotate(-10 40 43)" />
            <rect x="27" y="52" width="5" height="1.9" rx=".9" transform="rotate(35 29 53)" />
            <rect x="44" y="60" width="5" height="1.9" rx=".9" transform="rotate(-25 46 61)" />
            <rect x="58" y="62" width="5" height="1.9" rx=".9" transform="rotate(15 60 63)" />
            <rect x="36" y="33" width="5" height="1.9" rx=".9" transform="rotate(60 38 34)" />
          </g>
        </>
      );
    case "gorengan":
      return (
        <>
          <rect x="19" y="19" width="50" height="50" rx="3" fill="#F7F0E3" transform="rotate(-9 44 44)" />
          <path d="M23 35c2-9 13-13 21-8 7 4 7 13 1 18-6 5-16 5-20-1-2-3-3-6-2-9z" fill="#C98B3E" />
          <rect x="46" y="38" width="20" height="15" rx="3" fill="#DDB86E" transform="rotate(14 56 45.5)" />
          <g fill="#B4873F">
            <circle cx="51" cy="42" r="1.3" />
            <circle cx="57" cy="44" r="1.3" />
            <circle cx="62" cy="47" r="1.3" />
            <circle cx="53" cy="48" r="1.3" />
            <circle cx="59" cy="51" r="1.3" />
          </g>
          <ellipse cx="38" cy="59" rx="13" ry="6.5" fill="#D9A04A" transform="rotate(-14 38 59)" />
        </>
      );
  }
}

export default function PlateArt({
  kind,
  label,
  className = "",
  mockup,
}: {
  kind: PlateKind;
  label: string;
  className?: string;
  mockup?: boolean;
}) {
  return (
    <svg viewBox="0 0 88 88" role="img" aria-label={label} className={className} {...mock(mockup)}>
      <circle cx="44" cy="44" r="44" fill={RIM} />
      <circle cx="44" cy="44" r="41.6" fill={PLATE} />
      <circle cx="44" cy="44" r="33" fill={WELL} />
      <Dish kind={kind} />
    </svg>
  );
}
