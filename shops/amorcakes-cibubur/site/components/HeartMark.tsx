import { mock } from "@/lib/mockup";

// Plain heart outline. Where it stands in for the logo it carries data-mockup:
// the owner's logo file (a heart with wheat ears) replaces it. We don't redraw their logo.
export default function HeartMark({
  size = 32,
  className,
  strokeWidth = 2.4,
  logo = false,
  filled = false,
}: {
  size?: number;
  className?: string;
  strokeWidth?: number;
  logo?: boolean;
  filled?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      {...(logo
        ? { role: "img", "aria-label": "Tanda hati, pengganti sementara logo Amorcakes" }
        : { "aria-hidden": true, focusable: "false" })}
      {...mock(logo)}
    >
      <path d="M16 27.5S4.5 20.6 4.5 12.4A6.2 6.2 0 0 1 16 9a6.2 6.2 0 0 1 11.5 3.4c0 8.2-11.5 15.1-11.5 15.1z" />
    </svg>
  );
}
