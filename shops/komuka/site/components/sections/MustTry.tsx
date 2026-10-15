import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PlateArt from "@/components/plates/Plates";
import { mustTry, plates } from "@/content";
import { mock } from "@/lib/mockup";

// "Pertama kali ke sini?": the staff's line and the seven dishes a guest swears by (review 4),
// then four of them laid out on a teak picnic table.
export default function MustTry() {
  return (
    <section id="pertama" aria-labelledby="pertama-title" className="bg-kapur">
      <Container className="section">
        <Reveal className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <h2 id="pertama-title" className="t-head">
              {mustTry.heading}
            </h2>
            <p className="t-lead mt-3 font-medium">{mustTry.lead}</p>
            <p className="t-body measure mt-5">{mustTry.intro}</p>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <ol className="must-list">
              {mustTry.items.map((item, i) => (
                <li key={item.text} className="must-item" {...mock(item.mockup)}>
                  <span className="must-no" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span>
                    <span data-check className="t-lead block font-medium">
                      {item.text}
                    </span>
                    {item.note && (
                      <span className="t-body block opacity-80" {...mock(item.note.mockup)}>
                        {item.note.text}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ol>
            <p className="t-body mt-8 font-medium">{mustTry.close}</p>
          </div>
        </Reveal>
      </Container>

      {/* The teak table: four of the seven, illustrated (placeholders for real photos). */}
      <div className="table-band">
        <Container>
          <ul className="plates" aria-label="Ilustrasi beberapa menu wajib coba">
            {plates.map((p) => (
              <li key={p.kind} className={`plate-cell plate-cell-${p.kind}`}>
                <PlateArt kind={p.kind} name={p.name} mockup={p.mockup} />
                <p data-check className="plate-label t-body">
                  <span className="plate-no">{p.listNo}</span> {p.name}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
