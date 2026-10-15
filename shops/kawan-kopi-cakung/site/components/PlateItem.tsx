import type { Plate } from "@/content";
import { mock } from "@/lib/mockup";
import PlateArt, { type PlateArtId } from "@/components/art/PlateArt";

// A plate seen from above on the wood, then name + inline price, then the note.
export default function PlateItem({ plate }: { plate: Plate }) {
  const id = plate.art as PlateArtId;
  return (
    <article>
      <PlateArt id={id} uid={`teman-${id}`} className="plate-art" />
      <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
        <h3 className="t-name" {...mock(plate.name.mockup)}>
          {plate.name.text}
        </h3>
        <p className="price" {...mock(plate.price.mockup)}>
          {plate.price.text}
        </p>
      </div>
      <p className="t-body mt-1.5" {...mock(plate.note.mockup)}>
        {plate.note.text}
      </p>
    </article>
  );
}
