import type { Metadata } from "next";
import { Archivo, Holtwood_One_SC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta, skipLink } from "@/content";

// Wood-type poster face for the name only (like the "ELUD BAKERY" fascia), grotesque for the rest.
const display = Holtwood_One_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-holtwood",
});
// The ELUD wordmark's own copy of Holtwood One SC (same Google latin file, SIL OFL), with its text
// box trimmed to the ink. The stock box (1.2em up, 0.43em down) is far taller than the 0.9
// leading, so it reached into the strip and banner above and the lines below, though no letter does.
const elud = localFont({
  src: "./fonts/holtwood-one-sc-latin-400.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-elud",
  declarations: [
    { prop: "ascent-override", value: "76%" },
    { prop: "descent-override", value: "2%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});
const body = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${elud.variable} ${body.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          {skipLink}
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
