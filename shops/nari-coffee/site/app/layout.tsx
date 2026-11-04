import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Young Serif: the closest free match to the fascia's soft serif. Figtree: everything else.
// Young Serif (OFL, latin subset as served by Google Fonts) is self-hosted so its vertical
// metrics can be tightened: its stock ascent + descent (1.41em) is far taller than the
// glyphs, which made text boxes spill past the 1.05 display leading. Glyph positions are
// unchanged within a pixel.
const display = localFont({
  src: "./fonts/young-serif-latin-400.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-young-serif",
  declarations: [
    { prop: "ascent-override", value: "92%" },
    { prop: "descent-override", value: "26%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});
const body = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://nari-coffee-mockup.achmedfidel.com"),
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

export const viewport: Viewport = {
  themeColor: "#15171c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        {/* Marks JS as available before first paint, so the badge can wait for its roll. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
