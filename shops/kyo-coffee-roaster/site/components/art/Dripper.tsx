import { c, glass } from "@/components/art/palette";

// Manual brew: a metal cone dripper on a clear glass server with brew inside (photo 1 bar).
export default function Dripper({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 160" role="img" aria-label={label} className={className}>
      <ellipse cx="60" cy="152" rx="40" ry="4.5" fill={c.ink} opacity="0.12" />

      {/* glass server */}
      <path
        d="M40 84H80Q82 84 82 87V93Q96 101 96 122V137Q96 150 83 150H37Q24 150 24 137V122Q24 101 38 93V87Q38 84 40 84Z"
        fill={c.wall}
        fillOpacity="0.4"
      />
      <path d="M25.6 121H94.4V137Q94.4 148.4 83 148.4H37Q25.6 148.4 25.6 137Z" fill={c.brew} />
      <path d="M25.6 121H94.4V125H25.6Z" fill={c.ink} opacity="0.35" />
      <path
        d="M40 84H80Q82 84 82 87V93Q96 101 96 122V137Q96 150 83 150H37Q24 150 24 137V122Q24 101 38 93V87Q38 84 40 84Z"
        fill="none"
        {...glass}
      />
      <path d="M96 106Q109 108 109 120Q109 133 96 135" fill="none" {...glass} />
      <path d="M31 104L33 138H35.5L33.5 104Z" fill={c.wall} opacity="0.6" />

      {/* the drip */}
      <rect x="59" y="80" width="2" height="16" fill={c.brew} />

      {/* metal cone */}
      <path d="M18 26H102L75 72H45Z" fill={c.concrete} />
      <path d="M60 26H102L75 72H60Z" fill={c.ink} opacity="0.1" />
      <path d="M40 30L52 69M80 30L68 69" stroke={c.ink} strokeOpacity="0.16" strokeWidth="2" strokeLinecap="round" />
      <rect x="13" y="19" width="94" height="8" fill={c.concrete} />
      <rect x="13" y="25" width="94" height="2" fill={c.ink} opacity="0.18" />
      <rect x="40" y="72" width="40" height="6" fill={c.ink} />
      <rect x="30" y="78" width="60" height="5" fill={c.concrete} />
      <rect x="30" y="81" width="60" height="2" fill={c.ink} opacity="0.18" />
    </svg>
  );
}
