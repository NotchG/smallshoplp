import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { praise } from "@/content";

// Three paraphrases, each under a 2px cup rule. No quote marks, names, dates or stars.
export default function PraiseSection() {
  return (
    <section className="section bg-frost" aria-labelledby="praise-title">
      <Container>
        <Reveal>
          <h2 id="praise-title" className="t-head font-display text-cup">
            {praise.heading}
          </h2>
          <p className="t-small mt-2 text-ink/80">{praise.note}</p>
          <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-8">
            {praise.items.map((p) => (
              <li key={p.text} className="border-t-2 border-cup pt-5">
                <p className="t-lead max-w-[18ch] font-medium" data-check>
                  {p.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
