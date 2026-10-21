import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Mynerve (SIL OFL), latin subset, self-hosted so its tall default metrics (ascent 0.93em,
// descent 0.38em) can be pulled in to the real glyph extents (0.73em / 0.29em). Without this,
// the script's line boxes reach far past the letters and collide with the text around them.
const mynerve = localFont({
  src: "./fonts/Mynerve-Regular-latin.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-mynerve",
  adjustFontFallback: false,
  declarations: [
    { prop: "ascent-override", value: "76%" },
    { prop: "descent-override", value: "30%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});

// Same file, tighter still, for the wordmark "kana" and the watermark "k" (no descenders),
// so "COFFEE & SPACE" can sit right under the word the way it does on Kana's logo.
const mynerveMark = localFont({
  src: "./fonts/Mynerve-Regular-latin.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-mynerve-mark",
  adjustFontFallback: false,
  declarations: [
    { prop: "ascent-override", value: "72%" },
    { prop: "descent-override", value: "6%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false }, // mockup: keep out of search until the owner approves
};

// Marks that JS runs, so the hero can start hidden for its entrance. Without JS the page is complete.
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${mynerve.variable} ${mynerveMark.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a className="skip-link" href="#konten">
          Langsung ke konten
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
