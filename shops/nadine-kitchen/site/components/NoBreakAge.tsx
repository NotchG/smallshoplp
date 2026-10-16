// Keeps "ke-7" together so captions never break between "ke-" and the number.
export default function NoBreakAge({ text }: { text: string }) {
  const parts = text.split(/(ke-\d+)/);
  return (
    <>
      {parts.map((part, i) =>
        /^ke-\d+$/.test(part) ? (
          <span key={i} className="whitespace-nowrap">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
