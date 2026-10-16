// A cup of coffee: white cup and saucer with a blue rim, 3/4 top-down, for the blue menu ground.
const PAPER = "#FBFAF6";
const BLUE = "#1F3A8F";
const COFFEE = "#6E3420";
const CREMA = "#D9A066";
const INK = "#131A3A";

export default function Kopi({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 52 240 156" role="img" aria-label={label} className={className}>
      <ellipse cx="118" cy="190" rx="100" ry="12" fill={INK} opacity="0.3" />
      {/* saucer */}
      <ellipse cx="118" cy="146" rx="104" ry="48" fill={PAPER} />
      <ellipse cx="118" cy="146" rx="94" ry="42" fill={BLUE} />
      <ellipse cx="118" cy="146" rx="89" ry="39" fill={PAPER} />
      <ellipse cx="118" cy="150" rx="58" ry="22" fill={INK} opacity="0.12" />
      {/* spoon */}
      <path d="M176 154 222 168" stroke={BLUE} strokeWidth="6" strokeLinecap="round" opacity="0.35" />
      {/* handle */}
      <path
        d="M168 92a24 19 0 1 1 0 38a24 19 0 1 1 0-38Zm0 10a13 9 0 1 0 0 18a13 9 0 1 0 0-18Z"
        fill={PAPER}
        fillRule="evenodd"
      />
      {/* cup */}
      <path d="M52 86C56 136 82 160 118 160S180 136 184 86Z" fill={PAPER} />
      <ellipse cx="118" cy="86" rx="66" ry="28" fill={BLUE} />
      <ellipse cx="118" cy="86" rx="60" ry="24.5" fill={PAPER} />
      <ellipse cx="118" cy="89" rx="52" ry="19.5" fill={COFFEE} />
      <path
        d="M118 102c-14-6-24-11-24-17 0-5 5-8 10-7 6 1 10 4 14 9 4-5 8-8 14-9 5-1 10 2 10 7 0 6-10 11-24 17Z"
        fill={CREMA}
      />
    </svg>
  );
}
