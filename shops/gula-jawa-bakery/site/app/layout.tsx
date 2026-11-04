import type { Metadata, Viewport } from "next";
import { Archivo, Leckerli_One } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MockupBanner from "@/components/MockupBanner";
import { banner, meta } from "@/content";

// Leckerli One: the looping script closest to the shop's neon sign. Only for "Gula Jawa".
const leckerli = Leckerli_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-leckerli",
});

// The neon's own copy of Leckerli One (same Google latin file, SIL OFL), with its text box trimmed
// to the ink plus the tube stroke. The stock box (1.03em up, 0.31em down) is taller than the
// sign's 1.05 leading, so "Gula" and "Jawa" boxes overlapped although the tubes don't touch.
const neon = localFont({
  src: "./fonts/leckerli-one-latin-400.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-neon",
  declarations: [
    { prop: "ascent-override", value: "77%" },
    { prop: "descent-override", value: "28.5%" },
    { prop: "line-gap-override", value: "0%" },
  ],
});

// Archivo variable with the width axis: headings at wdth 87.5, "BAKERY" at wdth 125.
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  // Link previews (WhatsApp, iMessage, Slack) need absolute URLs. og.jpg is written by `npm run shots`.
  metadataBase: new URL("https://gula-jawa-bakery-mockup.achmedfidel.com"),
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
  themeColor: "#6a2c26",
};

// Owner review aid: ?tandai outlines every [MOCKUP] item (see globals.css).
const tandaiScript = `try{if(/[?&]tandai\\b/.test(location.search))document.documentElement.setAttribute("data-tandai","")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${leckerli.variable} ${neon.variable} ${archivo.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: tandaiScript }} />
      </head>
      <body>
        <MockupBanner text={banner} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
