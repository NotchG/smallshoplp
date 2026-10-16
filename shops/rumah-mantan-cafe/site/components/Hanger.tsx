// A drawn nail and a V of string, hung above a sign. Purely decorative.
// The string stretches with the sign's width; the nail stays round.
export default function Hanger({ height = 26, spread = 14 }: { height?: number; spread?: number }) {
  return (
    <div aria-hidden="true" className="relative" style={{ height }}>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        focusable="false"
      >
        <polyline
          points={`${spread},100 50,6 ${100 - spread},100`}
          fill="none"
          stroke="#1e3050"
          strokeWidth="1.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="absolute left-1/2 top-0 -ml-[5px] block h-[10px] w-[10px] rounded-full bg-dongker" />
    </div>
  );
}
