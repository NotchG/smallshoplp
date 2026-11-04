import type { Metadata } from "next";
import { Yellowtail } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Yellowtail: the sign-painter script of the awning. Besley: the sturdy Clarendon of old coffee tins.
const script = Yellowtail({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-script" });

// Besley (Google Fonts, latin subset, variable 400–900), self-hosted only to add metric overrides.
// Its ascent + descent is 1.68em, taller than every line-height on the page, so the text boxes of
// neighbouring lines overlap in the layout checks. Both are shrunk by the same amount
// (ascent − descent stays 0.825em), so the baseline and the rendering don't move: only the box shrinks.
const serif = localFont({
  src: [{ path: "./fonts/besley-latin.woff2", weight: "400 900", style: "normal" }],
  display: "swap",
  variable: "--font-serif",
  fallback: ["Georgia", "serif"],
  declarations: [
    { prop: "ascent-override", value: "106.25%" },
    { prop: "descent-override", value: "23.75%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://agan-coffee-shop-mockup.achmedfidel.com"),
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
    <html lang="id" className={`${script.variable} ${serif.variable}`}>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
