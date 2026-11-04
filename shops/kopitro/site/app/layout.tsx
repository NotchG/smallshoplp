import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { copy, meta } from "@/content";

// Sofia Sans Extra Condensed (OFL), the latin file that next/font/google serves, self-hosted so
// its vertical metrics can be tightened to the caps: the stock ascent/descent (0.90/0.30em)
// spill 0.15em past a 0.9 line height. Cap height is 0.661em; this face is only set in caps.
const display = localFont({
  src: "./fonts/SofiaSansExtraCondensed-latin-var.woff2",
  weight: "1 1000",
  style: "normal",
  display: "swap",
  variable: "--font-sofia-xc",
  adjustFontFallback: "Arial",
  declarations: [
    { prop: "ascent-override", value: "72%" },
    { prop: "descent-override", value: "4%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});
const body = Sofia_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sofia",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://kopitro-mockup.achmedfidel.com"),
  openGraph: {
    type: "website",
    url: "/",
    title: meta.title,
    description: meta.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: meta.title }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          {copy.skip}
        </a>
        <MockupBanner text={copy.banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
