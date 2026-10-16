// Full-bleed checkerboard, two rows, never behind text. "counter" = the blue-and-white bar,
// "patio" = the black-and-white tiles out back (photos).
export default function CheckerBand({ variant }: { variant: "counter" | "patio" }) {
  return <div className={`checker checker--${variant}`} aria-hidden="true" />;
}
