import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { TulipMark } from "@/components/Icons";
import { praise } from "@/content";

// Kata mereka: what guests keep saying, paraphrased. No quotes, no names.
export default function Praise() {
  return (
    <section aria-labelledby="kata-title" className="section pt-0">
      <Container>
        <Reveal className="grid-12">
          <div className="lg:col-span-4">
            <h2 id="kata-title" className="t-head">
              {praise.heading}
            </h2>
            <p className="t-lead mt-4 font-display nums">{praise.ratingLine}</p>
            <p className="t-small mt-2 text-besi-soft">{praise.note}</p>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {praise.themes.map((t) => (
              <li
                key={t.title}
                className="grid grid-cols-[16px_minmax(0,1fr)] gap-x-4 border-t border-[var(--rule-soft)] py-6 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-6"
              >
                <TulipMark className="mt-1.5" />
                <div>
                  <h3 className="t-lead font-display">{t.title}</h3>
                  <p className="t-body mt-1 text-besi-soft">{t.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
