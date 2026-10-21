import type { ArtKey } from "@/content";
import BlackAndBerries from "./BlackAndBerries";
import BananaFritter from "./BananaFritter";
import CheeseBakedPeuyeum from "./CheeseBakedPeuyeum";
import Mocktail from "./Mocktail";
import HoneyWings from "./HoneyWings";

export { default as BeanBag } from "./BeanBag";

export const artByKey: Record<ArtKey, (p: { label: string; className?: string }) => React.JSX.Element> = {
  blackAndBerries: BlackAndBerries,
  bananaFritter: BananaFritter,
  cheeseBakedPeuyeum: CheeseBakedPeuyeum,
  mocktail: Mocktail,
  honeyWings: HoneyWings,
};
