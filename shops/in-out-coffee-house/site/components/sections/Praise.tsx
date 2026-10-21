import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise, shop } from "@/content";

// Proof, paraphrased: no names, no quote marks, the rating inside a sentence.
export default function Praise() {
  return (
    <section id="kata-mereka" className="section bg-kuning" aria-labelledby="kata-title">
      <Container className="grid gap-x-8 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="kata-title" className="t-head">
            {praise.title}
          </h2>
          <p className="t-lead mt-3 font-bold tabular">{praise.rating}</p>
          <p className="t-small mt-4">{praise.source}</p>
          <a
            href={shop.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex min-h-11 items-center font-bold"
          >
            {praise.link}
          </a>
        </div>
        <Reveal className="lg:col-span-7">
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {praise.items.map((p) => (
              <li key={p.text} className="praise-item t-lead font-bold">
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
