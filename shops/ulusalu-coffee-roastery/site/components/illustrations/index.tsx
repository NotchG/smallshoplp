import type { Illustration } from "@/content";
import type { IllProps } from "./palette";
import { ArenLatte, KopiHitam } from "./Drinks";
import { NasiGoreng, Soup } from "./Dishes";
import { ChocoBanana, Risoles, SosisSolo, Tiramisu } from "./Pastries";

const MAP = {
  arenLatte: ArenLatte,
  kopiHitam: KopiHitam,
  soup: Soup,
  nasiGoreng: NasiGoreng,
  chocoBanana: ChocoBanana,
  tiramisu: Tiramisu,
  risoles: Risoles,
  sosisSolo: SosisSolo,
} satisfies Record<Illustration, (p: IllProps) => React.ReactElement>;

export function Dish({ name, ...rest }: IllProps & { name: Illustration }) {
  const Ill = MAP[name];
  return <Ill {...rest} />;
}

export { BeanBag } from "./Drinks";
export { default as RoasterDrawing } from "./RoasterDrawing";
