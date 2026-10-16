import type { ArtId } from "@/content";
import AbonGulung from "./art/AbonGulung";
import Pastry from "./art/Pastry";
import { DonutBlue, DonutPink, TiramisuDonut } from "./art/Donuts";
import { CheeseBread, ChocolateSourdough } from "./art/Breads";
import CheesecakeSlice from "./art/CheesecakeSlice";

const map: Record<ArtId, (p: { className?: string }) => React.ReactNode> = {
  "abon-gulung": AbonGulung,
  pastry: Pastry,
  "donut-pink": DonutPink,
  "donut-blue": DonutBlue,
  "tiramisu-donut": TiramisuDonut,
  "cheese-bread": CheeseBread,
  "chocolate-sourdough": ChocolateSourdough,
  "cheesecake-slice": CheesecakeSlice,
};

export default function ArtById({ id, className }: { id: ArtId; className?: string }) {
  const Cmp = map[id];
  return <Cmp className={className} />;
}
