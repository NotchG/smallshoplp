import Reveal from "@/components/Reveal";
import { TegelMark } from "@/components/Tegel";
import { themes } from "@/content";

// Paraphrased review themes: a list, never quotes, never names.
export default function Themes() {
  return (
    <section id="ulasan" aria-labelledby="ulasan-title" className="ground-light bg-krem text-malam">
      <Reveal className="container-page section lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-4">
          <h2 id="ulasan-title" className="t-head">
            {themes.title}
          </h2>
          <p className="t-small num mt-3 text-malam/80">{themes.source}</p>
        </div>
        <ul className="mt-10 grid border-malam/15 sm:grid-cols-2 lg:col-span-8 lg:mt-0">
          {themes.items.map((t, i) => (
            <li
              key={t.title}
              className={`flex gap-4 border-t border-malam/15 py-6 sm:pr-8 ${i % 2 === 1 ? "sm:pl-8 sm:border-l" : ""}`}
            >
              <span className="mt-1.5">
                <TegelMark />
              </span>
              <div>
                <h3 className="t-lead font-semibold">{t.title}</h3>
                <p className="t-body mt-1 text-malam/80">{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
