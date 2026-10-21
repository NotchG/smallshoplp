import { mock } from "@/lib/mockup";

// Section headings carry the cup pairing: the first phrase bold, the trailing one light.
export default function SplitHeading({
  bold,
  light,
  as: Tag = "h2",
  className = "t-head",
  mockup,
  id,
}: {
  bold: string;
  light: string;
  as?: "h2" | "h3";
  className?: string;
  mockup?: boolean;
  id?: string;
}) {
  return (
    <Tag id={id} className={className} {...mock(mockup)}>
      <span className="h-a">{bold}</span> <span className="h-b">{light}</span>
    </Tag>
  );
}
