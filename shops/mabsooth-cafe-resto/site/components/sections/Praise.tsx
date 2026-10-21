import { Fragment } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise, shop } from "@/content";

// Bark ground. Paraphrased themes only: no quotes, no names, no big rating block.
export default function Praise() {
  const last = praise.themes.length - 1;
  return (
    <section id="ulasan" aria-labelledby="ulasan-h" className="section bg-bark text-rattan">
      <Container>
        <Reveal className="grid-12 gap-y-6 lg:gap-y-4">
          <h2 id="ulasan-h" className="font-display t-head lg:col-span-4 lg:row-start-1">
            {praise.heading}
          </h2>

          <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:pt-3">
            <p className="t-lead max-w-[34ch]">
              {praise.lead}{" "}
              {praise.themes.map((t, i) => (
                <Fragment key={t.word}>
                  {i === last ? "dan " : ""}
                  {t.before} <strong className="font-medium text-gold">{t.word}</strong>
                  {i === last ? "." : ", "}
                </Fragment>
              ))}
            </p>
            <p className="measure mt-5 text-rattan-dim">{praise.paraphrase}</p>
          </div>

          <div className="lg:col-span-4 lg:row-start-2">
            <p className="nums">
              <span className="font-medium text-gold">{shop.rating.value}</span> {praise.ratingSuffix}
            </p>
            <a className="text-link" href={shop.mapsUrl}>
              {praise.link}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
