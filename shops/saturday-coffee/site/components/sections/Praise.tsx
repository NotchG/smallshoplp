import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { IconStar } from "@/components/icons";
import { praise, shop } from "@/content";

// Kata mereka (plaster). Paraphrased themes: no quotes, no names, no star rows.
export default function Praise() {
  return (
    <section id="ulasan" className="on-plaster section" aria-labelledby="ulasan-title">
      <Container>
        <Reveal className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="ulasan-title" className="t-head">
              {praise.title}
            </h2>
            <p className="mt-4 flex items-center gap-2">
              <IconStar className="text-accent" size={22} />
              <span>
                <strong className="t-lead font-display font-medium">{shop.rating.value}</strong>{" "}
                <span className="text-muted">{praise.rating.replace(`${shop.rating.value} `, "")}</span>
              </span>
            </p>
          </div>
          <ul className="col-span-12 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {praise.themes.map((t) => (
              <li key={t.title} className="flex gap-4">
                <span aria-hidden="true" className="mt-3 size-2.5 shrink-0 rounded-[2px] bg-accent" />
                <div>
                  <h3 className="t-lead font-display font-medium">{t.title}</h3>
                  <p className="mt-1 text-muted">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
