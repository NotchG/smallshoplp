import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise, praiseIntro, shop } from "@/content";

// Kata mereka (kayu): four themes paraphrased from Google reviews. No names, no quotes, no stars.
export default function Praise() {
  return (
    <section aria-labelledby="praise-title" className="ground-kayu section">
      <Container>
        <Reveal className="grid-12 gap-y-10 max-lg:flex max-lg:flex-col max-lg:gap-10">
          <div className="lg:col-span-4">
            <h2 id="praise-title" className="t-head t-cond">
              {praiseIntro.heading}
            </h2>
            <p className="t-lead mt-5">
              <span className="text-lampu font-bold tnum">{shop.rating.value}</span> {praiseIntro.ratingSuffix}
            </p>
            <p className="t-small text-muted-dark mt-2 max-w-[28ch]">{praiseIntro.caption}</p>
          </div>

          <ul className="lg:col-span-8 grid md:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-8 md:gap-y-12">
            {praise.map((p) => (
              <li key={p.topic} className="max-md:pb-8 max-md:border-b max-md:border-putih/15 last:border-0 last:pb-0">
                <h3 className="t-label text-lampu">{p.topic}</h3>
                <p className="t-lead mt-2">{p.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
