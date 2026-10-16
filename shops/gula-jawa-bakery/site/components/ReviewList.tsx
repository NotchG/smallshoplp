import { reviews, reviewSourceLine } from "@/content";

// Paraphrases of real Google reviews. A list, not blockquotes: no quote marks, no names.
export default function ReviewList({ className = "" }: { className?: string }) {
  return (
    <ul className={className}>
      {reviews.items.map((item, i) => (
        <li key={i} className={`py-6 ${i > 0 ? "border-t border-tembaga" : "pt-0"}`}>
          <p className="t-lead pretty">{item.text}</p>
          <p className="t-small mt-2 text-neon/80">{reviewSourceLine(item.sources.length)}</p>
        </li>
      ))}
    </ul>
  );
}
