import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { kata, praise } from "@/content";

// Short proof: the listing's rating and two paraphrased themes. No names, no quotes.
export default function Kata() {
  return (
    <section id="ulasan" aria-labelledby="kata-title" className="ground-cokelat section-tight">
      <Container>
        <Reveal className="split-5-7 items-start">
          <div>
            <h2 id="kata-title" className="t-head t-headfont">
              {kata.heading}
            </h2>
            <p className="rating-tag mt-5 num">{kata.rating}</p>
          </div>
          <div>
            <ul className="praise-list">
              {praise.map((p) => (
                <li key={p.text} className="t-lead t-namefont" {...mock(p.mockup)}>
                  {p.text}
                </li>
              ))}
            </ul>
            <p className="t-small mt-5 text-krim/85">{kata.note}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
