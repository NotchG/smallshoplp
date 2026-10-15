// The linear LED pendants from the shop, hung on thin cables. Decorative only.
// Two bars: one over the name, one centred over the arched photo (positions in globals.css,
// relative to the content width so they track the layout at every breakpoint).
export default function PendantBars() {
  return (
    <div className="pendants" aria-hidden="true">
      <div className="container-page h-full">
        <div className="relative h-full">
          {[1, 2].map((n) => (
            <span key={n} className={`pendant pendant-${n}`}>
              <span className="pendant-cable l" />
              <span className="pendant-cable r" />
              <span className="pendant-bar" data-hero="bar" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
