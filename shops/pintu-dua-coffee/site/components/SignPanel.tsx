// The shop's quarter-circle lightbox sign (photo-3), rebuilt in CSS: a square with
// border-top-right-radius: 100%, hinge at the bottom left. Halo and dim layers are
// aria-hidden siblings under the lettering. Server HTML is always the lit state.
export default function SignPanel({
  size,
  as: Tag = "p",
  lines,
  sub,
}: {
  size: "hero" | "mark";
  as?: "h1" | "p";
  lines: [string, string];
  sub: string;
}) {
  const isMark = Tag === "p";
  return (
    <div className={`sign sign--${size}`} aria-hidden={isMark ? true : undefined}>
      <span className="sign-halo" aria-hidden="true" />
      <span className="sign-panel" aria-hidden="true" />
      <span className="sign-dim" aria-hidden="true" />
      <Tag className="sign-text">
        {/* One text node per line block, read in order as "Pintu Dua Coffee" */}
        <span className="sign-name">
          {lines[0]} <br />
          {lines[1]}{" "}
        </span>
        <span className="sign-sub">{sub}</span>
      </Tag>
    </div>
  );
}
