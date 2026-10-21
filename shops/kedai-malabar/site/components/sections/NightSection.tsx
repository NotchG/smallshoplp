import Reveal from "@/components/Reveal";
import Garland from "@/components/Garland";
import Bulb from "@/components/Bulb";
import { night } from "@/content";
import { mock } from "@/lib/mockup";

// The quiet passage: the terrace at night. Garland static, all lit.
export default function NightSection() {
  return (
    <section id="malam" className="ground-arang" aria-labelledby="malam-title">
      <div className="night-band">
        <Garland id="garland-malam" />
      </div>
      <Reveal className="container-page section pt-12 lg:pt-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <h2 id="malam-title" className="h-section">
              Malam di <span className="script-word">Malabar</span>
            </h2>
            <p className="t-lead text-soft mt-6 max-w-[22ch]" {...mock(night.line.mockup)}>
              {night.line.text}
            </p>
          </div>
          <ul className="mt-12 grid gap-9 lg:col-span-6 lg:col-start-7 lg:mt-2">
            {night.facts.map((f) => (
              <li key={f.title} className="flex gap-4">
                <Bulb className="mt-0.5 h-8 w-8 flex-none" />
                <div>
                  <h3 className="t-lead font-medium">{f.title}</h3>
                  <p className="text-soft mt-1 max-w-[44ch]">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
