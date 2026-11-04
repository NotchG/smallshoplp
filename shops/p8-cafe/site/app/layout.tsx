import type { Metadata } from "next";
import localFont from "next/font/local";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Bagel Fat One (SIL OFL), latin subset self-hosted from Google Fonts so its line metrics can be
// tightened: the stock face reports a 1.45em content box (ascent 1.16em) for a 0.73em cap height,
// which pushes every line's box into its neighbours and sits the letters low in their line.
const bagel = localFont({
  src: "./fonts/BagelFatOne-latin.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-bagel",
  adjustFontFallback: "Arial",
  declarations: [
    { prop: "ascent-override", value: "86%" },
    { prop: "descent-override", value: "24%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});
const rethink = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rethink",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://p8-cafe-mockup.achmedfidel.com"),
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
    <html lang="id" className={`${bagel.variable} ${rethink.variable}`}>
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
