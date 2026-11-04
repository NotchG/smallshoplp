import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Jost (variable) for the thin tracked capitals, headings and body; Ms Madi only for "mantra".
// Both are the Google Fonts latin files (SIL OFL), self-hosted so their vertical metrics can be
// overridden: the stock ascent/descent (Jost 1.07/0.375, Ms Madi 0.90/0.42) make text boxes far
// taller than the glyphs. The overrides keep ascent minus descent unchanged, so every glyph sits
// exactly where it did; only the text box shrinks to fit the letters.
const jost = localFont({
  src: [{ path: "./fonts/jost-latin.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-jost",
  display: "swap",
  declarations: [
    { prop: "ascent-override", value: "87.25%" },
    { prop: "descent-override", value: "17.75%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});
const madi = localFont({
  src: [{ path: "./fonts/ms-madi-latin.woff2", weight: "400", style: "normal" }],
  variable: "--font-madi",
  display: "swap",
  declarations: [
    { prop: "ascent-override", value: "74%" },
    { prop: "descent-override", value: "26%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://morning-mantra-mockup.achmedfidel.com"),
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

export const viewport: Viewport = { themeColor: "#1f3c9e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jost.variable} ${madi.variable}`}>
      <body>
        <a href="#konten" className="skip-link">
          Langsung ke isi
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
