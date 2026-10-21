// The logo's arrow, as on the cups: up on the I, forward off the T.
// One triangle head; `shaft` adds the short stem for the T arm, buttons and the rooftop sign.
// "right" is used inside a rotated frame (the T arm), so the head travels along its own direction.
export default function ArrowHead({
  dir = "up",
  shaft = false,
  className,
}: {
  dir?: "up" | "up-right" | "right";
  shaft?: boolean;
  className?: string;
}) {
  const rotate = dir === "up-right" ? "rotate(45 12 12)" : dir === "right" ? "rotate(90 12 12)" : undefined;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <g transform={rotate} fill="currentColor">
        <path d={shaft ? "M12 1.5 21 11.5H3Z" : "M12 2 23 22H1Z"} />
        {shaft && <rect x="8.8" y="10" width="6.4" height="13" />}
      </g>
    </svg>
  );
}
