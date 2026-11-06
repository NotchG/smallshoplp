import { Star } from "lucide-react";

// Google rating and review count, with a line-icon star like the rest of the UI.
export default function Rating({ rating, reviews }: { rating?: number | null; reviews?: number | null }) {
  return (
    <span className="rating"><Star aria-hidden="true" />{rating ?? "–"} <small>{(reviews ?? 0).toLocaleString("en-US")}</small></span>
  );
}
