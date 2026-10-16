import Art from "./Art";
import { C, r1 } from "./geometry";

// Cheesecake by the slice (review 1), top-down: a wedge with a crust band along the arc.
const APEX = { x: 14, y: 75 };
const HALF = (21 * Math.PI) / 180;

function wedge(r: number) {
  const x = r1(APEX.x + Math.cos(HALF) * r);
  const yTop = r1(APEX.y - Math.sin(HALF) * r);
  const yBot = r1(APEX.y + Math.sin(HALF) * r);
  return `M${APEX.x} ${APEX.y}L${x} ${yTop}A${r} ${r} 0 0 1 ${x} ${yBot}Z`;
}

export default function CheesecakeSlice({ className = "" }: { className?: string }) {
  return (
    <Art id="cheesecake-slice" viewBox="0 0 160 150" className={className}>
      <path d={wedge(140)} fill={C.bun} strokeLinejoin="round" />
      <path d={wedge(127)} fill={C.cheesecake} />
    </Art>
  );
}
