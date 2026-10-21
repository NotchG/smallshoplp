import Container from "@/components/Container";
import { praise, shop } from "@/content";

// Paraphrased praise only: no names, no quote marks. A quiet passage after two dark bands.
// Desktop: heading + rating cols 1–4, the lines cols 6–12 at lead size.
export default function Praise() {
  return (
    <section className="section bg-plaster" aria-labelledby="praise-title">
      <Container className="grid-12">
        <div className="lg:col-span-4 lg:col-start-1">
          <h2 id="praise-title" className="t-head text-velvet">
            {praise.heading}
          </h2>
          <p className="t-body mt-4 font-medium text-ink">{shop.rating}</p>
          <p className="t-small mt-1 text-ink">{praise.note}</p>
        </div>
        <ul className="mt-10 lg:col-span-7 lg:col-start-6 lg:mt-1">
          {praise.items.map((p) => (
            <li key={p.text} className="border-t border-niche py-6 first:border-t-0 first:pt-0 lg:first:pt-0">
              <p className="t-lead text-ink">{p.text}</p>
              <p className="t-small mt-1 text-ink">{p.source}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
