// Bonjur's terrace awning: red roof strip, blue and white stripes, one scallop per stripe.
// "full" hangs across the top of the hero; "edge" is the blue scallop row under the menu.
export default function AwningValance({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "edge";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${variant === "full" ? "awning" : "awning-edge"} ${className}`}
    />
  );
}
