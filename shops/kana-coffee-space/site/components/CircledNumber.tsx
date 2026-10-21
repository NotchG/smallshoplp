// The circled ①–④ from the New Menu poster. The digit is real text, so screen readers hear it
// with the dish it numbers (it matches the number printed on the photo).
export default function CircledNumber({ n, className = "" }: { n: number; className?: string }) {
  return <span className={`num ${className}`}>{n}</span>;
}
