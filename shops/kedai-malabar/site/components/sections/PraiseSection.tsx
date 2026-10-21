import Reveal from "@/components/Reveal";
import { praise, shop } from "@/content";

// Proof without quotes: themes paraphrased from Google reviews. No names, no stars.
export default function PraiseSection() {
  return (
    <section id="ulasan" className="ground-tegel section" aria-labelledby="ulasan-title">
      <Reveal className="container-page lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <h2 id="ulasan-title" className="h-section">
            Kata mereka
          </h2>
          <p className="t-lead mt-5">
            {shop.rating.value} dari {shop.rating.count} ulasan di Google
          </p>
          <p className="t-small text-soft mt-3">{praise.note}</p>
        </div>
        <ul className="mt-10 grid gap-y-8 sm:grid-cols-2 sm:gap-x-10 lg:col-span-8 lg:mt-1">
          {praise.items.map((p) => (
            <li key={p.title} className="border-t border-kapur/35 pt-5">
              <h3 className="t-lead font-medium">{p.title}</h3>
              <p className="text-soft mt-2 max-w-[38ch]">{p.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
