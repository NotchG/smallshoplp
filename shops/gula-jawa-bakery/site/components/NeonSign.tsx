// The shop's "Gula Jawa" neon, set in Leckerli One as an outline.
// Two layers in one grid cell: the unlit tube (aria-hidden, always visible) and the lit
// text on top, which switches on once via CSS (globals.css: .neon-lit / @keyframes neon-on).
// `static` = the footer mark: lit, smaller glow, never animated.
export default function NeonSign({
  lines,
  static: isStatic = false,
  className = "",
}: {
  lines: readonly string[];
  static?: boolean;
  className?: string;
}) {
  const text = (
    <>
      {lines.map((line, i) => (
        <span key={line} className="block">
          {line}
          {i < lines.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
  return (
    <span className={`neon ${className}`}>
      <span aria-hidden="true" className={`neon-text neon-tube ${isStatic ? "neon-static" : ""}`}>
        {text}
      </span>
      <span className={`neon-text neon-lit ${isStatic ? "neon-static" : ""}`} {...(isStatic ? {} : { "data-check": "" })}>
        {text}
      </span>
    </span>
  );
}
