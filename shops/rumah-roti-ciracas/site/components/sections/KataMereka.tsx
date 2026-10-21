import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { StarIcon } from "@/components/icons";
import { praise, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The quiet passage: text only. Paraphrases of the Google reviews, no quotes, no names.
export default function KataMereka() {
  return (
    <section className="section bg-paper" aria-labelledby="kata-title">
      <Container>
        <Reveal className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <h2 id="kata-title" className="t-head">
              {praise.heading}
            </h2>
            <p className="t-lead mt-3">
              <a
                href={shop.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-crust inline-block py-2 underline"
              >
                <StarIcon className="rating-star" />
                {praise.rating}
              </a>
            </p>
            <p className="t-small mt-3">{praise.note}</p>
          </div>

          <ul className="praise-list lg:col-span-7 lg:col-start-6 max-w-[60ch]">
            {praise.items.map((item) => (
              <li key={item.text} className="t-lead" {...mock(item.mockup)}>
                {item.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
