import type { Favourite } from "@/content";
import { mock } from "@/lib/mockup";
import { cakeIllustrations } from "./illustrations";

// The white price tag from the glass case: condensed name, price right under it, then the
// maroon "KUE · SEDAP WANGI" strip. Illustrations stand in for photos ([MOCKUP]).
export default function TentCard({ cake, variant }: { cake: Favourite; variant: "feature" | "row" }) {
  const Illustration = cakeIllustrations[cake.id];
  return (
    <article className={`tent tent--${variant}`}>
      <div className="tent-body">
        <div className="tent-ill" role="img" aria-label={cake.alt} data-mockup="">
          <Illustration />
        </div>
        <div className="tent-text">
          <h4 className="tent-name">{cake.name}</h4>
          {cake.price ? (
            <p className="tent-price t-body" {...mock(cake.price.mockup)}>
              {cake.price.text}
            </p>
          ) : null}
          <p className="tent-note t-body">{cake.note}</p>
        </div>
      </div>
      <div className="tent-strip" aria-hidden="true">
        <span>Kue</span>
        <span>Sedap Wangi</span>
      </div>
    </article>
  );
}

export function MiniTag({ name, price, kind }: { name: string; price: string; kind: string }) {
  return (
    <li className="tent tent--mini">
      <div className="tent-text">
        <span className="tent-name">{name}</span>
        <span className="tent-price t-body">{price}</span>
      </div>
      <div className="tent-strip" aria-hidden="true">
        <span>{kind}</span>
        <span>Sedap Wangi</span>
      </div>
    </li>
  );
}
