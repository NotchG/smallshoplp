import type { IllustrationId } from "@/content";
import type { ArtProps } from "./Art";
import SmokeBeef from "./SmokeBeef";
import BananaCrumble from "./BananaCrumble";
import RotiCokelat from "./RotiCokelat";
import RotiKeju from "./RotiKeju";
import Tart from "./Tart";
import Blackforest from "./Blackforest";
import Brownies from "./Brownies";
import SoftSourdough from "./SoftSourdough";
import SaltBread from "./SaltBread";
import Strudel from "./Strudel";
import PizzaCinta from "./PizzaCinta";

const map: Record<IllustrationId, (p: ArtProps) => React.JSX.Element> = {
  smokeBeef: SmokeBeef,
  bananaCrumble: BananaCrumble,
  rotiCokelat: RotiCokelat,
  rotiKeju: RotiKeju,
  tart: Tart,
  blackforest: Blackforest,
  brownies: Brownies,
  softSourdough: SoftSourdough,
  saltBread: SaltBread,
  strudel: Strudel,
  pizzaCinta: PizzaCinta,
};

export default function Illustration({ id, ...props }: ArtProps & { id: IllustrationId }) {
  const Comp = map[id];
  return <Comp {...props} />;
}
