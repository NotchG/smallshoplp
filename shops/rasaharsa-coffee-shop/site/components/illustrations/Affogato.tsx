import Drink from "./Drink";

// Small glass, a vanilla scoop on the rim, espresso poured over and running down.
export default function Affogato({ label }: { label: string }) {
  const glass = "M38 118L40 159Q40.5 164 44.5 164H75.5Q79.5 164 80 159L82 118Z";
  return (
    <Drink label={label} scale={1.45}>
      <defs>
        <clipPath id="af-glass"><path d={glass} /></clipPath>
      </defs>
      <g clipPath="url(#af-glass)">
        <rect className="i-espresso" x="0" y="146" width="120" height="24" />
        <path className="i-cream" d="M0 141C12 137 24 144 38 140S62 136 76 141 104 140 120 139V149C104 151 90 146 76 150S48 153 34 149 10 150 0 151Z" />
      </g>
      <ellipse className="i-glass" cx="60" cy="118" rx="22" ry="4" />
      <path
        className="i-cream"
        d="M38.5 113C37.5 96 48 85.5 60 85.5S82.5 96 81.5 113C78.5 117 75 112.5 71.5 116.5C68 120 64.5 114.5 60 118C55.5 114.5 52 120 48.5 116.5C45 112.5 41.5 117 38.5 113Z"
      />
      <path
        className="i-jati"
        d="M46.5 92.5C52 85.5 67.5 84.5 74 92C76.5 95.5 72 98 71 103.5C70 109.5 66.5 109.5 66 104C65.5 99.5 62.5 99.5 60.5 102C58.5 105 56 113 53 109C51 106 51.5 100.5 48.5 99C45 97.5 44.5 95 46.5 92.5Z"
      />
      <path className="i-glass" d="M38 118L40 159Q40.5 164 44.5 164H75.5Q79.5 164 80 159L82 118" />
    </Drink>
  );
}
