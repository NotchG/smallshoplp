import { shop } from "@/content";

// The cup wordmark: bold "halaman" + light "pertama", no space between.
// As the h1 in the hero; as a plain paragraph in the footer.
export default function Wordmark({
  as: Tag = "p",
  className = "",
  id,
}: {
  as?: "h1" | "p";
  className?: string;
  id?: string;
}) {
  const { bold, light } = shop.wordmark;
  return (
    <Tag id={id} className={`wordmark ${className}`} aria-label={Tag === "h1" ? shop.name : shop.shortName}>
      <span className="wm-a" aria-hidden="true">{bold}</span>
      <span className="wm-b" aria-hidden="true">{light}</span>
    </Tag>
  );
}
