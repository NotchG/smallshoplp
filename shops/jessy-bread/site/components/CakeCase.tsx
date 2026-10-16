import type { Cake } from "@/content";
import CakeArt from "./CakeArt";
import TentCard from "./TentCard";

// The charcoal cake case: shelves of 4 (desktop) / 2 (phone), a gold rail at each shelf front,
// every cake on its board with its white price card overlapping the board.
export default function CakeCase({ cakes }: { cakes: Cake[] }) {
  const shelves = [cakes.slice(0, 4), cakes.slice(4, 8)];
  return (
    <div className="flex flex-col md:gap-10">
      {shelves.map((shelf, i) => (
        <ul key={i} className="case-shelf" aria-label={i === 0 ? "Rak atas" : "Rak bawah"}>
          {shelf.map((cake) => (
            <li key={cake.name} className="case-item">
              <CakeArt kind={cake.art} label={cake.alt} viewTop={26} />
              <TentCard cake={cake} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
