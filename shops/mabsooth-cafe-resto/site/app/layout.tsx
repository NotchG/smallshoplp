import type { Metadata, Viewport } from "next";
import { Readex_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { actions, banner, meta } from "@/content";

// Aref Ruqaa 700: wordmark, headings, product names; its Ruqaa Arabic sets مبسوط like the bar sign.
// Self-hosted copies of the Google Fonts latin and arabic subsets (OFL), so the vertical metrics
// can be overridden: the font declares 1.22em ascent + 0.24em descent while its capitals reach
// 0.72em, which made each text box spill far past its line box and into the line below.
const arefArabic = localFont({
  src: "./fonts/aref-ruqaa-700-arabic.woff2",
  weight: "700",
  display: "swap",
  variable: "--font-aref-ar",
  adjustFontFallback: false,
  declarations: [
    { prop: "ascent-override", value: "86%" },
    { prop: "descent-override", value: "14%" },
    { prop: "line-gap-override", value: "0%" },
    {
      prop: "unicode-range",
      value: "U+0600-06FF, U+0750-077F, U+0870-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC",
    },
  ],
});
const arefLatin = localFont({
  src: "./fonts/aref-ruqaa-700-latin.woff2",
  weight: "700",
  display: "swap",
  variable: "--font-aref",
  adjustFontFallback: "Times New Roman",
  declarations: [
    { prop: "ascent-override", value: "92%" },
    { prop: "descent-override", value: "8%" },
    { prop: "line-gap-override", value: "0%" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});
// Readex Pro (variable): body, lists, prices, hours, buttons.
const readex = Readex_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-readex",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://mabsooth-cafe-resto-mockup.achmedfidel.com"),
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

export const viewport: Viewport = { themeColor: "#2A1914" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${arefArabic.variable} ${arefLatin.variable} ${readex.variable}`}>
      <body>
        <a className="skip-link" href="#konten">
          {actions.skip}
        </a>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
