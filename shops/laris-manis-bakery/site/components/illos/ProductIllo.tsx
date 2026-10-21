import type { Illo } from "@/content";
import BreadBag from "./BreadBag";
import { Cokelat, MesesKeju, Sosis } from "./Breads";
import { BoluPizza, ToplesSemprit } from "./Treats";

// One entry point for every product drawing. `uid` keeps clip-path ids unique per instance.
export default function ProductIllo({
  kind,
  uid,
  label,
  decorative = false,
  className,
}: {
  kind: Illo;
  uid: string;
  label: string;
  decorative?: boolean;
  className?: string;
}) {
  switch (kind) {
    case "mesesKeju":
      return (
        <BreadBag label={label} decorative={decorative} className={className}>
          <MesesKeju uid={uid} />
        </BreadBag>
      );
    case "cokelat":
      return (
        <BreadBag label={label} decorative={decorative} className={className}>
          <Cokelat />
        </BreadBag>
      );
    case "sosis":
      return (
        <BreadBag label={label} decorative={decorative} className={className}>
          <Sosis />
        </BreadBag>
      );
    case "boluPizza":
      return <BoluPizza uid={uid} label={label} className={className} />;
    case "toplesSemprit":
      return <ToplesSemprit uid={uid} label={label} className={className} />;
  }
}
