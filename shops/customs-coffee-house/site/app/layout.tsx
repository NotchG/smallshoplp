import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// M PLUS Rounded 1c 800/900, Latin subset, self-hosted (the same files next/font/google serves).
// The font's own box is about 1.4em tall (ascent 107.5%, descent 32%, it carries Japanese metrics),
// so stacked lines like "CUSTOM" over "coffee house" had overlapping text boxes while the letters
// were well apart. These overrides shrink the box to 1em around the glyphs and keep
// ascent minus descent at the measured 0.755em, so every baseline stays exactly where it was.
const rounded = localFont({
  src: [
    { path: "./fonts/mplus-rounded-1c-800-latin.woff2", weight: "800", style: "normal" },
    { path: "./fonts/mplus-rounded-1c-900-latin.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--ff-rounded",
  declarations: [
    { prop: "ascent-override", value: "87.75%" },
    { prop: "descent-override", value: "12.25%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--ff-archivo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Hides the hero S until GSAP takes over, so it never flashes in place before rolling in.
// Only when motion is allowed; a CSS failsafe in globals.css shows it after 2.5 s regardless.
const rollPending =
  "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('roll-pending')}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${rounded.variable} ${archivo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: rollPending }} />
      </head>
      <body>
        <a href="#konten" className="skip-link">
          Langsung ke konten
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
