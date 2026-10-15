// "Dalle" over "COFFEE AND EATERY", stacked like the shop's own logo.
// The space between the spans keeps the accessible name "Dalle Coffee and Eatery".
export default function Lockup({ main, sub }: { main: string; sub: string }) {
  return (
    <h1 id="hero-title" className="t-display">
      <span className="lockup-main" data-hero="lead">
        {main}
      </span>{" "}
      <span className="lockup-sub t-lead" data-hero="group">
        {sub}
      </span>
    </h1>
  );
}
