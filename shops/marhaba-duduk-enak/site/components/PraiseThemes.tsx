import Container from "@/components/Container";
import { praise } from "@/content";

// Proof without quotes: the Google rating plus five paraphrased themes.
// No quote marks, no stars, no names, no cards.
export default function PraiseThemes() {
  return (
    <section id="kata-mereka" className="section bg-teraso" aria-labelledby="praise-title">
      <Container className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-4">
          <h2 id="praise-title" className="t-head font-bold">
            {praise.heading}
          </h2>
          <p className="t-lead mt-3 font-semibold nums">{praise.rating}</p>
          <p className="t-small mt-2 text-besi-soft max-w-[32ch]">{praise.note}</p>
        </div>
        <ul className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2 lg:mt-1 lg:col-start-5 lg:col-span-8">
          {praise.themes.map((t) => (
            <li key={t.title} className="border-t-2 border-besi pt-4">
              <h3 className="t-lead font-semibold">{t.title}</h3>
              <p className="t-body mt-1 text-besi-soft measure">{t.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
