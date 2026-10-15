import type { ArtId } from "@/content";
import { BeefCheeseMelt, EggToast, Espresso, ManualBrew } from "@/components/art/drawings";

const ART: Record<ArtId, () => React.JSX.Element> = {
  espresso: Espresso,
  v60: ManualBrew,
  beefCheeseMelt: BeefCheeseMelt,
  eggToast: EggToast,
};

// A taupe tile shaped like the shop's wall sign, with a soft backlit halo.
// Sizes: sm 112 -> 168px, lg 200 -> 280px (design brief §6).
export default function ArtTile({
  id,
  label,
  size = "sm",
}: {
  id: ArtId;
  label: string;
  size?: "sm" | "lg";
}) {
  const Drawing = ART[id];
  return (
    <div className={`art-tile art-tile--${size}`} role="img" aria-label={label}>
      <Drawing />
    </div>
  );
}
