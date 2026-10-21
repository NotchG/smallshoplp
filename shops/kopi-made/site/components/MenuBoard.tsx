import type { Board } from "@/content";
import { mock } from "@/lib/mockup";
import { FoodIllo } from "@/components/Illos";

// A charcoal menu board in a pine frame, like the boards behind the bar.
// Featured items with their illustration, price right under the name; then the grouped lists.
export default function MenuBoard({ board, id }: { board: Board; id: string }) {
  return (
    <article className="pine-frame h-full" aria-labelledby={`${id}-h`}>
      <div className="board-pad">
        <h3 id={`${id}-h`} className="t-lead font-semibold text-cream">
          {board.title}
        </h3>
        <ul className="mt-6 grid gap-5 md:grid-cols-3 md:gap-5">
          {board.featured.map((f) => (
            <li key={f.name} className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
              <FoodIllo kind={f.illo} alt={f.alt} />
              <div>
                <p className="t-body font-semibold leading-snug text-cream">{f.name}</p>
                {f.note && (
                  <p className="t-small text-mist" {...mock(f.note.mockup)}>
                    {f.note.text}
                  </p>
                )}
                {f.price && (
                  <p className="t-small mt-1 font-semibold text-lamp" {...mock(f.price.mockup)}>
                    {f.price.text}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="menu-groups mt-8 border-t border-cream/15 pt-7">
          {board.groups.map((g) => (
            <div key={g.label}>
              <h4 className="t-label text-pine">
                {g.label}
                {g.note && <span className="ml-2 font-normal normal-case tracking-normal text-mist">{g.note}</span>}
              </h4>
              <div className="dot-wrap mt-2">
                <ul className="dot-list t-body text-cream">
                  {g.items.map((it) => (
                    <li key={it.text} {...mock(it.mockup)}>
                      {it.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
