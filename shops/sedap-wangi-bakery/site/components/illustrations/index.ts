import LemonCake from "./LemonCake";
import PandanChiffon from "./PandanChiffon";
import LapisKopi from "./LapisKopi";
import CheeseBrownie from "./CheeseBrownie";
import StrawberryCake from "./StrawberryCake";

export const cakeIllustrations = {
  lemon: LemonCake,
  pandan: PandanChiffon,
  lapis: LapisKopi,
  brownie: CheeseBrownie,
  strawberry: StrawberryCake,
} as const;
