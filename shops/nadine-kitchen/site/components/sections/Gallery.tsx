import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { ChatIcon } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import NoBreakAge from "@/components/NoBreakAge";
import { gallery, type GalleryItem } from "@/content";

function CakeCard({ item }: { item: GalleryItem }) {
  const feature = item.span === "feature";
  return (
    <figure
      className={`card field-${item.field} flex flex-col p-3 ${feature ? "is-feature" : ""}`}
    >
      <div
        className={
          feature
            ? "relative aspect-square md:aspect-auto md:min-h-0 md:flex-1"
            : "relative aspect-[4/5]"
        }
      >
        <img
          className="photo absolute inset-0 h-full"
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="mt-3 px-1 pb-1">
        <span className={`block ${feature ? "t-lead" : "t-body t-strong leading-snug"}`}>
          <NoBreakAge text={item.theme} />
        </span>
        <span className="t-small mt-1 block text-grape-soft">{item.detail}</span>
      </figcaption>
    </figure>
  );
}

// The empty grid slot: a dashed, not-yet-made cake waiting for the child's theme.
function GhostCake() {
  const line = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeDasharray: "7 7",
    vectorEffect: "non-scaling-stroke" as const,
  };
  return (
    <svg
      viewBox="0 0 22 22"
      aria-hidden="true"
      focusable="false"
      className="ghost-cake hidden h-auto w-24 shrink-0 text-fondant/70 sm:block xl:w-48"
    >
      <rect x="3" y="5.6" width="16" height="13.6" rx="0.8" {...line} />
      <path d="M3 8.2 H19" {...line} />
      <path d="M11 5.6 V3.2" {...line} />
      <ellipse cx="11" cy="19.3" rx="10.4" ry="0.7" {...line} />
    </svg>
  );
}

function ThemeCtaCard() {
  const { cta } = gallery;
  return (
    <div
      className="is-cta on-strawberry card flex flex-col-reverse justify-center gap-5 bg-strawberry p-6 text-fondant sm:p-8 xl:flex-row xl:items-center xl:justify-between xl:gap-6"
      {...mock(cta.mockup)}
    >
      <div className="flex min-w-0 flex-col gap-6">
        <div>
          <p className="t-lead">{cta.title}</p>
          <p className="t-body mt-2">{cta.text}</p>
        </div>
        <a
          className="btn btn-light self-start"
          href={cta.link.href}
          target="_blank"
          rel="noopener"
          {...mock(cta.link.mockup)}
        >
          <ChatIcon />
          {cta.link.label}
        </a>
      </div>
      <GhostCake />
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="galeri" aria-labelledby="galeri-title" className="section pt-6 sm:pt-8 lg:pt-10">
      <Reveal>
        <Container>
          <div className="head-gap grid items-end gap-x-6 gap-y-3 lg:grid-cols-12">
            <h2 id="galeri-title" className="t-head lg:col-span-5">
              {gallery.heading}
            </h2>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="t-lead">{gallery.intro}</p>
              <p className="t-body mt-2 text-grape-soft">{gallery.sub}</p>
            </div>
          </div>
          <div className="gallery-grid">
            {gallery.items.map((item) => (
              <CakeCard key={item.src} item={item} />
            ))}
            <ThemeCtaCard />
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
