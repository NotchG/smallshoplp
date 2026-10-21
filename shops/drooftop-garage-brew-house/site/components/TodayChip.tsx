// "Buka hari ini" written on a little chalkboard, like the shop's easel.
export default function TodayChip({ text }: { text: string }) {
  return (
    <p className="today-chip">
      <span className="bulb" aria-hidden="true" />
      {text}
    </p>
  );
}
