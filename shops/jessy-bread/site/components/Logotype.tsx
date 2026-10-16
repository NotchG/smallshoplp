import type { ElementType } from "react";

// Set like the bread bag: "Jessy" above, "Bread" in orange below and indented.
// On dark grounds "Jessy" turns abu so it stays readable.
export default function Logotype({
  as: Tag = "p",
  className = "",
  onDark = false,
  id,
}: {
  as?: ElementType;
  className?: string;
  onDark?: boolean;
  id?: string;
}) {
  return (
    <Tag id={id} className={`logotype ${className}`}>
      <span className={onDark ? "text-abu" : "text-arang"}>Jessy</span>{" "}
      <span className="lt-bread">Bread</span>
    </Tag>
  );
}
