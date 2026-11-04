import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { meta } from "@/content";

// Kaushan Script: the painted name only. Bricolage Grotesque: everything else.
// Kaushan is the same Google Fonts latin subset (SIL Open Font License), self-hosted so its
// line metrics can match its glyphs. Its stock metrics (ascent 1.084em, descent 0.367em) are
// far taller than the ink of "Teman Kita" (0.742em up, 0.084em down), which made the tight
// two-line stack report overlapping text boxes. The overrides only change those boxes.
const kaushan = localFont({
  src: "./fonts/kaushan-script-latin-400.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-kaushan",
  declarations: [
    { prop: "ascent-override", value: "75%" },
    { prop: "descent-override", value: "9%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://teman-kita-cafe-resto-mockup.achmedfidel.com"),
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

// Adds `js` to <html> before first paint. Only the hero's painted name uses it, for its
// hidden start state; without JS the name is simply visible.
const jsClass = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${kaushan.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsClass }} />
      </head>
      <body>
        <MockupBanner text={meta.banner} />
        <p id="tab-baru" hidden>
          membuka tab baru
        </p>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
