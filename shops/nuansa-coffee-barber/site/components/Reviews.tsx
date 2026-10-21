import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { links, reviews as r } from "@/content";

// Paraphrased themes from the Google reviews: no quotes, no names, no big rating number.
export default function Reviews() {
  return (
    <section id={r.id} aria-labelledby="kata-h" className="section bg-concrete text-ink">
      <Reveal>
        <Container className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <h2 id="kata-h" className="h-sign t-head text-fascia">
              {r.heading}
            </h2>
            <p className="prices mt-4">{r.ratingLine}</p>
            <p className="mt-1">
              <a href={links.mapsListing} target="_blank" rel="noopener noreferrer" className="text-link inline-flex min-h-11 items-center">
                {r.linkLabel}
                <span className="sr-only"> (tab baru)</span>
              </a>
            </p>
            <p className="t-small mt-2 text-ink/75">{r.note}</p>
          </div>
          <ul className="hairlines lg:col-span-7 lg:col-start-6 lg:self-center">
            {r.themes.map((t) => (
              <li key={t.text} className="t-lead py-5 first:pt-0 last:pb-0">
                {t.text}
              </li>
            ))}
          </ul>
        </Container>
      </Reveal>
    </section>
  );
}
