import { C, IllFrame } from "./palette";

// White line drawing of the drum roaster, side elevation: hopper, drum, faceplate,
// chimney and the round cooling tray in front. Filled with the field colour so lines
// behind are hidden.
export default function RoasterDrawing({ label, className }: { label: string; className?: string }) {
  const f = C.roaster;
  return (
    <IllFrame label={label} className={className} viewBox="0 0 400 320" stroke={C.bata}>
      {/* floor */}
      <path d="M8 302 H392" opacity={0.45} />
      {/* chimney */}
      <rect x="298" y="26" width="18" height="94" fill={f} />
      <rect x="292" y="16" width="30" height="12" rx="2" fill={f} />
      {/* cabinet and feet */}
      <rect x="160" y="178" width="172" height="112" rx="4" fill={f} />
      <path d="M172 290 V302 M320 290 V302" />
      {/* control panel */}
      <rect x="200" y="200" width="78" height="46" rx="3" fill={f} />
      <rect x="210" y="210" width="30" height="12" rx="1.5" />
      <circle cx="258" cy="216" r="6" />
      <circle cx="218" cy="234" r="3.5" />
      <circle cx="234" cy="234" r="3.5" />
      <circle cx="250" cy="234" r="3.5" />
      <path d="M290 200 V270" opacity={0.6} />
      {/* drum housing */}
      <rect x="146" y="112" width="180" height="70" rx="8" fill={f} />
      <path d="M160 128 H312 M160 166 H312" opacity={0.55} />
      {/* hopper */}
      <rect x="224" y="94" width="18" height="20" fill={f} />
      <path d="M190 42 H276 L246 94 H220 Z" fill={f} />
      <path d="M196 52 H270" opacity={0.55} />
      {/* faceplate with door and sight glass */}
      <rect x="120" y="100" width="28" height="92" rx="4" fill={f} />
      <circle cx="134" cy="124" r="6" />
      <circle cx="134" cy="156" r="10" />
      <path d="M134 150 V162" />
      {/* chute down to the cooling tray */}
      <path d="M120 176 L128 186 L98 214 L88 208 Z" fill={f} />
      {/* cooling tray on its stand */}
      <rect x="78" y="236" width="40" height="56" rx="3" fill={f} />
      <path d="M68 302 H128" />
      <path d="M22 214 V232 Q96 252 170 232 V214" fill={f} />
      <ellipse cx="96" cy="214" rx="74" ry="13" fill={f} />
      <rect x="90" y="190" width="12" height="24" rx="2" fill={f} />
      <path d="M96 210 L148 218 M96 210 L48 218" opacity={0.8} />
    </IllFrame>
  );
}
