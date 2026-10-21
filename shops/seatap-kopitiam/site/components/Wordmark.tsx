// The SEATAP wordmark as one SVG, so it never renders in a fallback font while Jost loads.
// S, E, T, P are Jost 700 outlines (Google Fonts, OFL); both A's are drawn as open chevrons
// with no crossbar, like the shop's sign and cups, sized to Jost's pointed A (735 wide, apex 744).
// Spacing is Jost's own: kerning A→T −70 and T→A −100, plus the brief's −0.01em tracking.
// Units are 1/1000 em; the baseline is y = 0. Visual only: the parent supplies the name.
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`wordmark ${className}`}
      viewBox="0 -744 3662 766"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path transform="translate(0 0)" d="M151 -246 33 -161Q57 -111 100.0 -69.0Q143 -27 201.5 -2.5Q260 22 328 22Q377 22 423.5 7.5Q470 -7 506.5 -35.0Q543 -63 564.5 -104.5Q586 -146 586 -199Q586 -243 572.0 -277.0Q558 -311 533.5 -337.0Q509 -363 477.0 -381.5Q445 -400 408 -414Q359 -431 324.5 -446.0Q290 -461 271.5 -479.0Q253 -497 253 -521Q253 -544 272.0 -559.5Q291 -575 327 -575Q354 -575 377.5 -564.5Q401 -554 420.5 -535.5Q440 -517 455 -492L584 -564Q566 -600 532.0 -635.0Q498 -670 446.5 -693.0Q395 -716 325 -716Q257 -716 201.5 -692.5Q146 -669 113.5 -624.0Q81 -579 81 -517Q81 -465 100.0 -428.5Q119 -392 148.0 -366.5Q177 -341 209.5 -325.0Q242 -309 267 -300Q318 -281 349.0 -266.0Q380 -251 394.0 -234.5Q408 -218 408 -191Q408 -159 384.0 -140.5Q360 -122 323 -122Q288 -122 256.5 -137.0Q225 -152 198.5 -180.0Q172 -208 151 -246Z" />
      <path transform="translate(615 0)" d="M186 0H539V-139H186ZM186 -561H539V-700H186ZM186 -300H519V-436H186ZM74 -700V0H236V-700Z" />
      <path transform="translate(1208 0)" d="M0 0 L367.5 -744 L735 0 H545 L367.5 -454 L190 0 Z" />
      <path transform="translate(1863 0)" d="M4 -549H196V0H365V-549H558V-700H4Z" />
      <path transform="translate(2314 0)" d="M0 0 L367.5 -744 L735 0 H545 L367.5 -454 L190 0 Z" />
      <path transform="translate(3039 0)" d="M74 -700V0H243V-700ZM180 -561H317Q368 -561 397.0 -538.0Q426 -515 426 -471Q426 -428 397.0 -405.0Q368 -382 317 -382H180V-243H317Q406 -243 466.5 -270.5Q527 -298 558.0 -349.5Q589 -401 589 -471Q589 -543 558.0 -594.0Q527 -645 466.5 -672.5Q406 -700 317 -700H180Z" />
    </svg>
  );
}
