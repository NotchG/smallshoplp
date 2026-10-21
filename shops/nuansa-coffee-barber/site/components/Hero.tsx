import Image from "next/image";
import Container from "@/components/Container";
import ActionButton from "@/components/ActionButton";
import SignOn from "@/components/SignOn";
import { SignLockup } from "@/components/Wordmark";
import { actions, hero, hours, nav, shop } from "@/content";
import { mock } from "@/lib/mockup";

export default function Hero() {
  return (
    <SignOn className="on-navy">
      <Container className="pb-14 lg:pb-24">
        {/* Desktop only: three anchors, no second wordmark (the lockup is the logo). */}
        <nav aria-label="Bagian halaman" className="hidden lg:flex lg:justify-end lg:pt-3">
          <ul className="flex gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link t-small">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-9 text-center lg:pt-6">
          <SignLockup />
        </div>

        <div className="mt-7 lg:mt-14 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6">
          <div className="bleed-phone lg:col-span-7">
            <Image
              src={hero.photo.src}
              width={hero.photo.width}
              height={hero.photo.height}
              alt={hero.photo.alt}
              sizes="(min-width: 1024px) 680px, 100vw"
              preload
              className="js-sign-photo block h-auto w-full"
            />
          </div>

          <div className="mt-7 text-center lg:col-span-4 lg:col-start-9 lg:mt-0 lg:text-left">
            <p className="t-lead mx-auto max-w-[24ch] italic lg:mx-0" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <p className="t-body mt-3 inline-flex items-center gap-2">
              <span className="hours-dot" aria-hidden="true" />
              {hours.today}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <ActionButton action={actions.directions} variant="navyPrimary" />
              <ActionButton action={actions.whatsapp} variant="navySecondary" />
            </div>
            <p className="t-small mt-5 text-lightbox/75">{shop.address.short}</p>
          </div>
        </div>
      </Container>
    </SignOn>
  );
}
